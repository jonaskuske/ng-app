import { Component } from '@angular/core'

import { Store } from '@ngxs/store'
import { AddTodo } from '../../todo.actions'
import { Todo } from '../../todo.model'

@Component({
  selector: 'app-form-add-todo',
  templateUrl: './form-add-todo.component.html',
  styleUrls: ['./form-add-todo.component.css'],
})
export class FormAddTodoComponent {
  constructor(private store: Store) {}

  todoTitle = ''
  todoBody = ''

  onSubmit() {
    const body = this.todoBody.replace(/\n/g, '<br>')
    this.store.dispatch(new AddTodo(new Todo(this.todoTitle, body)))
  }
}
