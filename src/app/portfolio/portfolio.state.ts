import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store'
import { map, catchError } from 'rxjs/operators'
import { PostsService } from './posts.service'
import {
  GetPost,
  GetPostSuccess,
  GetPostError,
  GetPostPage,
  GetPostPageSuccess,
  GetPostPageError,
} from './portfolio.actions'

import { PaginatedEntities } from '../shared/models'
import { Post } from './models/post.model'

export type PostEntities = PaginatedEntities<Post>
export interface PortfolioStateModel {
  posts: PostEntities
}

@State<PortfolioStateModel>({
  name: 'portfolio',
  defaults: {
    posts: {
      byId: {},
      ids: [],
      errored: false,
      requested: false,
      pages: {},
      totalPages: 0,
      currentPage: 0,
    },
  },
})
export class PortfolioState implements NgxsOnInit {
  constructor(private postsService: PostsService) {}

  @Selector()
  static requested({ posts }: PortfolioStateModel) {
    return posts.requested
  }
  @Selector()
  static errored({ posts }: PortfolioStateModel) {
    return posts.errored
  }
  @Selector()
  static currentPage({ posts }: PortfolioStateModel) {
    return posts.currentPage
  }
  @Selector()
  static totalPages({ posts }: PortfolioStateModel) {
    return posts.totalPages
  }
  @Selector()
  static postById({ posts }: PortfolioStateModel) {
    return (id: number) => posts.byId[id]
  }
  @Selector()
  static postsById({ posts }: PortfolioStateModel) {
    return posts.byId
  }
  @Selector()
  static postIds({ posts }: PortfolioStateModel) {
    return posts.ids
  }
  @Selector()
  static posts(state: PortfolioStateModel) {
    const ids = PortfolioState.postIds(state)
    const postsById = PortfolioState.postsById(state)
    return ids.map(id => postsById[id])
  }
  @Selector()
  static postsSortedById(state: PortfolioStateModel) {
    return PortfolioState.posts(state).sort((a, b) => b.id - a.id)
  }
  @Selector()
  static currentPageIds({ posts: { pages, currentPage } }: PortfolioStateModel) {
    return pages[currentPage] ? pages[currentPage] : []
  }
  @Selector()
  static currentPagePosts(state: PortfolioStateModel) {
    const ids = PortfolioState.currentPageIds(state)
    const postsById = PortfolioState.postsById(state)
    return ids.map(id => postsById[id])
  }

  ngxsOnInit(ctx: StateContext<PortfolioStateModel>) {
    return ctx.dispatch(new GetPostPage(1))
  }

  @Action(GetPost)
  getPost(ctx: StateContext<PortfolioStateModel>, action: GetPost) {
    const { posts } = ctx.getState()
    const { id } = action

    if (posts.byId[id]) return ctx.dispatch(new GetPostSuccess(posts.byId[id]))

    ctx.patchState({ posts: { ...posts, requested: true, errored: false } })

    return this.postsService.getPost(id).pipe(
      map(response => ctx.dispatch(new GetPostSuccess(response))),
      catchError(error => ctx.dispatch(new GetPostError(id, error))),
    )
  }

  @Action(GetPostSuccess)
  getPostSuccess(ctx: StateContext<PortfolioStateModel>, { post }: GetPostSuccess) {
    const { posts } = ctx.getState()

    ctx.patchState({
      posts: {
        ...posts,
        requested: false,
        byId: { ...posts.byId, [post.id]: post },
        ids: [...new Set(posts.ids.concat(post.id))],
      },
    })
  }

  @Action(GetPostError)
  getPostError(ctx: StateContext<PortfolioStateModel>, action: GetPostError) {
    console.error(action.error)

    ctx.patchState({ posts: { ...ctx.getState().posts, requested: false, errored: true } })
  }

  @Action(GetPostPage)
  getPostPage(ctx: StateContext<PortfolioStateModel>, { page }: GetPostPage) {
    const { posts } = ctx.getState()

    if (posts.pages[page]) {
      return ctx.dispatch(
        new GetPostPageSuccess(page, {
          body: posts.pages[page].map(id => posts.byId[id]),
          totalPages: posts.totalPages,
          total: posts.ids.length,
        }),
      )
    }

    ctx.patchState({ posts: { ...posts, requested: true, errored: false } })

    return this.postsService.getPosts({ page }).pipe(
      map(response => ctx.dispatch(new GetPostPageSuccess(page, response))),
      catchError(error => ctx.dispatch(new GetPostPageError(page, error))),
    )
  }

  @Action(GetPostPageSuccess)
  getPostPageSuccess(ctx: StateContext<PortfolioStateModel>, action: GetPostPageSuccess) {
    const { posts } = ctx.getState()

    const page = action.page
    const { body, totalPages } = action.payload

    const postIds = body.map(post => post.id)
    const postEntities = body.reduce((object, post) => ((object[post.id] = post), object), {})

    ctx.patchState({
      posts: {
        ...posts,
        requested: false,
        byId: { ...posts.byId, ...postEntities },
        ids: [...new Set(posts.ids.concat(postIds))],
        pages: { ...posts.pages, [page]: postIds },
        totalPages,
        /* Only allow increases in currentPage as app uses one endless feed */
        ...(page > posts.currentPage && { currentPage: page }),
      },
    })
  }

  @Action(GetPostPageError)
  getPostPageError(ctx: StateContext<PortfolioStateModel>, action: GetPostPageError) {
    console.error(action.error)

    ctx.patchState({ posts: { ...ctx.getState().posts, requested: false, errored: true } })
  }
}
