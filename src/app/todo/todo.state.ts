import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store'
import { Todo } from './todo.model'
import { AddTodo, RemoveTodo, UpdateTodo } from './todo.actions'

const withIndex = <T>(item: T, index: number): T & { index: number } => ({ ...item, index })

export type TodoStateModel = Todo[]

@State<TodoStateModel>({
  name: 'todo',
  defaults: [
    new Todo(
      'Vertrag Hochschule',
      'Den Vertrag für den Job als studentische Hilfskraft ausfüllen und zur Hochschule zurück schicken.',
    ),
  ],
})
export class TodoState {
  @Selector()
  static getAll(state: TodoStateModel) {
    return state.map(withIndex)
  }
  static getByCompletedState(completedState: boolean) {
    return createSelector(
      [TodoState],
      (state: TodoStateModel) => {
        return state.map(withIndex).filter(todo => todo.isCompleted === completedState)
      },
    )
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    ctx.setState(todos => [...todos, action.todo])
  }
  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    ctx.setState(todos => todos.filter((_, index) => index !== action.index))
  }
  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, action: UpdateTodo) {
    ctx.setState(todos =>
      todos.map((todo, index) => (index === action.index ? { ...todo, ...action.todo } : todo)),
    )
  }
}
