import { Component, Input } from '@angular/core'

import { Store } from '@ngxs/store'
import { RemoveTodo, UpdateTodo } from '../../todo.actions'
import { Todo } from '../../todo.model'

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
  deleteTodo(index: number) {
    this.store.dispatch(new RemoveTodo(index))
  }
}
