import { SharedSelectors } from 'src/app/shared/store/selectors'
import { serializePageQuery } from 'src/app/shared/util'

import { Selector } from '@ngxs/store'
import { Post } from '../models/post.model'
import { PostRequestOptions } from '../posts.service'

import { PortfolioState, PortfolioStateModel } from './portfolio.state'

export class PortfolioSelectors {
  static entities = SharedSelectors.getEntities<Post>(PortfolioState)
  static ids = SharedSelectors.getEntityIds(PortfolioState)
  static posts = SharedSelectors.getEntityList<Post>(PortfolioState)

  @Selector([PortfolioState])
  static pagination(state: PortfolioStateModel) {
    return state.pagination
  }
  @Selector([PortfolioSelectors.entities])
  static postEntityByIdFn(entities: ReturnType<typeof PortfolioSelectors.entities>) {
    return (id: number) => entities[id]
  }
  @Selector([PortfolioSelectors.pagination])
  static postQueryFn(pagination: ReturnType<typeof PortfolioSelectors.pagination>) {
    return (options: PostRequestOptions) => pagination[serializePageQuery(options)]
  }
  @Selector([PortfolioSelectors.postQueryFn])
  static postQueryPageFn(getPageQuery: ReturnType<typeof PortfolioSelectors.postQueryFn>) {
    return (options: PostRequestOptions) => getPageQuery(options).pages[options.page]
  }
  @Selector([PortfolioSelectors.entities, PortfolioSelectors.postQueryFn])
  static postEntitiesByQueryFn(
    entities: ReturnType<typeof PortfolioSelectors.entities>,
    getPageQuery: ReturnType<typeof PortfolioSelectors.postQueryFn>,
  ) {
    return (options: PostRequestOptions) => {
      const pages = Object.values(getPageQuery(options).pages).filter(p => !p.isFetching)
      const ids = pages.map(p => p.entity).flat()
      return ids.map(id => entities[id])
    }
  }
}
