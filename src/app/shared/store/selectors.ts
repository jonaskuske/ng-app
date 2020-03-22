import { createSelector } from '@ngxs/store'
import { Entity } from '../models'

export class SharedSelectors {
  static getEntities<T>(stateClass) {
    return createSelector([stateClass], (state) => state.entities as { [id: string]: Entity<T> })
  }

  static getEntityList<T>(stateClass) {
    return createSelector([stateClass], (state) => Object.values(state.entities) as Entity<T>[])
  }

  static getEntityIds(stateClass) {
    return createSelector([stateClass], (state) => Object.keys(state.entities))
  }

  static getEntityListByPageFn(stateClass) {
    return (pageIds: number[]) => {
      return createSelector([stateClass], (state) => pageIds.map((id) => state.entities[id]))
    }
  }
}
