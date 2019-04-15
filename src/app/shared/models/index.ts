export interface Page<Item> {
  body: Item[]
  total: number
  totalPages: number
}

export interface Entities<Entity> {
  byId: { [propName: number]: Entity }
  ids: number[]
  requested: boolean
  errored: boolean
}

export interface PaginatedEntities<Entity> extends Entities<Entity> {
  currentPage: number
  totalPages: number
  pages: {
    [propName: number]: number[]
  }
}
