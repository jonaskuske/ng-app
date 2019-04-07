import { Todo } from './todo.model'

export class AddTodo {
  static readonly type = '[Todo] Add Todo'
  constructor(public todo: Todo) {}
}
export class RemoveTodo {
  static readonly type = '[Todo] Remove Todo'
  constructor(public index: number) {}
}
export class UpdateTodo {
  static readonly type = '[Todo] Update Todo'
  constructor(public index: number, public todo: Todo | any) {}
}
