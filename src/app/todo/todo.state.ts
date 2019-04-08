import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store'
import { Todo } from './todo.model'
import { AddTodo, RemoveTodo, UpdateTodo } from './todo.actions'

export type TodoStateModel = Todo[]
const withIndex = <T>(item: T, index: number): T & { index: number } => ({ ...item, index })

const defaultTodo = new Todo(
  'Feature "Platform" ausbauen',
  'Feature "Platform" des Store mit dem Backend verknüpfen.<br>- Services fertigstellen<br>- NGXS einbinden<br>- Paginierung?',
)

@State<TodoStateModel>({
  name: 'todo',
  defaults: [defaultTodo],
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
