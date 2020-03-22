import { StateOperator } from '@ngxs/store'
import { patch } from '@ngxs/store/operators'
import { Entity, EntityPartial, PaginatedEntities } from '../models'

import { isArray } from '.'

export const createEntity = <T>(id: Entity<T>['id'], entity: T = null): Entity<T> => ({
  id,
  entity,
  lastUpdatedAt: new Date().toISOString(),
  isFetching: false,
  isRefreshing: false,
  isError: false,
})

export function uniq(item: any | any[]): StateOperator<any[]> {
  return (state: any[]) => {
    const noUniq = isArray(item) ? item.some((i) => !state.includes(i)) : state.includes(item)
    if (noUniq) {
      return state
    }

    return state.concat(isArray(item) ? item.filter((i) => !state.includes(i)) : item)
  }
}

export function addEntity<T>(entity: Entity<T>): StateOperator<PaginatedEntities<T>> {
  const id = entity.id.toString()
  return patch<PaginatedEntities<T>>({ ids: uniq(id), entities: patch({ [id]: entity }) })
}

export function addEntities<T>(payload: Entity<T>[]): StateOperator<PaginatedEntities<T>> {
  const entities = payload.reduce((obj, entity) => ((obj[entity.id] = entity), obj), {})
  return patch<PaginatedEntities<T>>({
    ids: uniq(payload.map((p) => p.id.toString())),
    entities: patch(entities),
  })
}

export function updateEntity<T>(payload: EntityPartial<T>): StateOperator<PaginatedEntities<T>> {
  return (state: PaginatedEntities<T>) => {
    const prevEntity = state.entities[payload.id]
    return {
      ...state,
      entities: { ...state.entities, [payload.id]: { ...prevEntity, ...payload } },
    }
  }
}
