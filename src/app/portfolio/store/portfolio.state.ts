import { State, Action, StateContext, NgxsOnInit, Store } from '@ngxs/store'
import { map, catchError } from 'rxjs/operators'
import { PostsService } from '../posts.service'
import { patch } from '@ngxs/store/operators'
import { addEntity, addEntities, updateEntity, createEntity } from '../../shared/util/store'
import { serializePageQuery } from '../../shared/util'
import { PaginatedEntities } from '../../shared/models'
import { Post } from '../models/post.model'
import {
  GetPost,
  GetPostSuccess,
  GetPostError,
  GetPostPage,
  GetPostPageSuccess,
  GetPostPageError,
} from './portfolio.actions'

export type PortfolioStateModel = PaginatedEntities<Post>
export type PortfolioStateContext = StateContext<PortfolioStateModel>

const initialState: PortfolioStateModel = { entities: {}, ids: [], pagination: {} }

@State<PortfolioStateModel>({ name: 'portfolio', defaults: initialState })
export class PortfolioState implements NgxsOnInit {
  constructor(private postsService: PostsService, private store: Store) {}

  ngxsOnInit(ctx: PortfolioStateContext) {
    ctx.dispatch(new GetPostPage({ page: 1, perPage: 8 }))
  }

  @Action(GetPost)
  getPost(ctx: PortfolioStateContext, { id }: GetPost) {
    const existing = ctx.getState().entities[id]
    if (existing && !existing.isError) return ctx.dispatch(new GetPostSuccess(existing.entity))

    ctx.setState(addEntity<Post>({ ...createEntity<Post>(id), isFetching: true }))

    return this.postsService.getPost(id).pipe(
      map(response => ctx.dispatch(new GetPostSuccess(response))),
      catchError(error => ctx.dispatch(new GetPostError(id, error))),
    )
  }

  @Action(GetPostSuccess)
  getPostSuccess(ctx: PortfolioStateContext, { post }: GetPostSuccess) {
    ctx.setState(updateEntity<Post>(createEntity<Post>(post.id, post)))
  }

  @Action(GetPostError)
  getPostError(ctx: PortfolioStateContext, { id, error }: GetPostError) {
    ctx.setState(updateEntity({ id, isError: true, isFetching: false, isRefreshing: false }))
    console.error(error)
  }

  @Action(GetPostPage)
  getPostPage(ctx: PortfolioStateContext, { page }: GetPostPage) {
    const state = ctx.getState()
    const query = serializePageQuery(page)

    const existingQuery = ctx.getState().pagination[query]
    if (existingQuery && existingQuery.pages[page.page]) return
    if (!existingQuery) {
      ctx.patchState({
        pagination: { ...state.pagination, [query]: { total: 0, totalPages: 0, pages: {} } },
      })
    }

    ctx.setState(
      patch({
        pagination: patch({
          [query]: patch({
            pages: patch({ [page.page]: { ...createEntity(page.page), isFetching: true } }),
          }),
        }),
      }),
    )

    return this.postsService.getPosts(page).pipe(
      map(response => ctx.dispatch(new GetPostPageSuccess(page, response))),
      catchError(error => ctx.dispatch(new GetPostPageError(page, error))),
    )
  }

  @Action(GetPostPageSuccess)
  getPostPageSuccess(ctx: PortfolioStateContext, { page, payload }: GetPostPageSuccess) {
    const query = serializePageQuery(page)

    const entities = payload.body.map(item => createEntity(item.id, item))
    const pageIds = payload.body.map(item => item.id.toString())
    ctx.setState(addEntities(entities))

    ctx.setState(
      patch({
        pagination: patch({
          [query]: patch({
            total: payload.total,
            totalPages: payload.totalPages,
            pages: patch({ [page.page]: { ...createEntity(page.page, pageIds) } }),
          }),
        }),
      }),
    )
  }

  @Action(GetPostPageError)
  getPostPageError(ctx: PortfolioStateContext, { page, error }: GetPostPageError) {
    const query = serializePageQuery(page)
    ctx.setState(
      patch({
        pagination: patch({
          [query]: patch({
            pages: patch({
              [page.page]: patch({ isError: true, isRefreshing: false, isFetching: false }),
            }),
          }),
        }),
      }),
    )
    console.error(error)
  }
}
