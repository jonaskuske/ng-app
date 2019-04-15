import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store'
import { Todo } from './todo.model'
import { AddTodo, RemoveTodo, UpdateTodo } from './todo.actions'

export type TodoStateModel = Todo[]
const withIndex = <T>(item: T, index: number): T & { index: number } => ({ ...item, index })

const defaultTodo = new Todo(
  'Weitere Optionen für die Demo-App',
  'Features und Methoden, in die man sich anhand der Testanwendung noch einarbeiten kann.<br><br>- Kontrollierte Paginierung für Posts<br>- Reactive Forms<br>- Authentifzierung<br>- Testing<br>- PWA Implementierung',
)

@State<TodoStateModel>({
  name: 'todo',
  defaults: [defaultTodo],
})
export class TodoState {
  @Selector()
  static todos(state: TodoStateModel) {
    return state.map(withIndex)
  }
  static todosByCompletedState(completedState: boolean) {
    return createSelector(
      [TodoState],
      (state: TodoStateModel) => {
        return TodoState.todos(state).filter(todo => todo.isCompleted === completedState)
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
