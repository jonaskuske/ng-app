import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store'
import { map, catchError, tap } from 'rxjs/operators'

import { PostsService } from './posts.service'
import { Post } from './post.model'
import {
  GetPost,
  GetPostSuccess,
  GetPostError,
  GetPosts,
  GetPostsSuccess,
  GetPostsError,
} from './portfolio.actions'

export interface PortfolioStateModel {
  posts: Post[]
  isFetchingPosts: boolean
  pageIndex: number
}

@State<PortfolioStateModel>({
  name: 'portfolio',
  defaults: {
    posts: [],
    isFetchingPosts: false,
    pageIndex: 0,
  },
})
export class PortfolioState implements NgxsOnInit {
  constructor(private postsService: PostsService) {}

  @Selector()
  static posts(state: PortfolioStateModel) {
    return state.posts
  }
  @Selector()
  static postsSortedById(state: PortfolioStateModel) {
    return [...state.posts].sort((a, b) => b.id - a.id)
  }
  @Selector()
  static getPostById({ posts }: PortfolioStateModel) {
    return (id: number) => posts.find(post => post.id === id)
  }
  @Selector()
  static isFetchingPosts(state: PortfolioStateModel) {
    return state.isFetchingPosts
  }

  ngxsOnInit(ctx: StateContext<PortfolioStateModel>) {
    return ctx.dispatch(new GetPosts())
  }

  @Action(GetPost)
  getPost(ctx: StateContext<PortfolioStateModel>, action: GetPost) {
    const { posts } = ctx.getState()
    const post: Post = posts.find(({ id }) => id === action.id)
    if (post) return ctx.dispatch(new GetPostSuccess(post))

    return this.postsService.getPost({ id: action.id }).pipe(
      map(response => ctx.dispatch(new GetPostSuccess(response))),
      catchError(error => ctx.dispatch(new GetPostError(error))),
    )
  }

  @Action(GetPostSuccess)
  getPostSuccess(ctx: StateContext<PortfolioStateModel>, action: GetPostSuccess) {
    const { posts } = ctx.getState()
    if (!posts.find(post => post.id === action.post.id)) {
      ctx.patchState({ posts: [...posts, action.post] })
    }
  }

  @Action(GetPostError)
  getPostError(ctx: StateContext<PortfolioStateModel>, action: GetPostError) {}

  @Action(GetPosts)
  getPosts(ctx: StateContext<PortfolioStateModel>, action: GetPosts) {
    ctx.patchState({ isFetchingPosts: true })

    const currentPage = ctx.getState().pageIndex
    return this.postsService.getPosts({ page: currentPage + 1 }).pipe(
      map(response => ctx.dispatch(new GetPostsSuccess(response))),
      catchError(error => ctx.dispatch(new GetPostsError(error))),
    )
  }

  @Action(GetPostsSuccess)
  getPostsSuccess(ctx: StateContext<PortfolioStateModel>, action: GetPostsSuccess) {
    const { posts, pageIndex } = ctx.getState()
    const newPosts = action.posts.filter(post => !posts.find(p => p.id === post.id))
    ctx.patchState({
      posts: [...posts, ...newPosts],
      isFetchingPosts: false,
      pageIndex: pageIndex + 1,
    })
  }

  @Action(GetPostsError)
  getPostsError(ctx: StateContext<PortfolioStateModel>, action: GetPostError) {
    console.error(action.error)
    ctx.patchState({ isFetchingPosts: false })
  }
}
