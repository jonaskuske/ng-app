export interface Page<Item> {
  body: Item[]
  total: number
  totalPages: number
}

export interface Entity<Item> {
  id: string | number
  entity: Item
  lastUpdatedAt: string
  isFetching: boolean
  isRefreshing: boolean
  isError: boolean
}
export type EntityPartial<Item> = Partial<Entity<Item>> & Pick<Entity<Item>, 'id'>

export interface EntitiesState<Item> {
  entities: { [id: string]: Entity<Item> }
  ids: string[]
}

export interface PaginatedEntities<Item> extends EntitiesState<Item> {
  pagination: {
    [query: string]: {
      total: number
      totalPages: number
      pages: { [page: string]: Entity<string[]> }
    }
  }
}
