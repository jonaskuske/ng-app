import { Component, Input } from '@angular/core'
import { Todo } from '../../todo.model'
import { Store } from '@ngxs/store'
import { RemoveTodo, UpdateTodo } from '../../todo.actions'

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css'],
})
export class TodoEntryComponent {
  constructor(private store: Store) {}
  @Input() todo: Todo

  setCompleteStatus(index: number, value: boolean = true) {
    this.store.dispatch(new UpdateTodo(index, { isCompleted: value }))
  }
  deleteTodo(index) {
    this.store.dispatch(new RemoveTodo(index))
  }
}
