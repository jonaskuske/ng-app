import { Component } from '@angular/core'

import { Observable } from 'rxjs'

import { Select } from '@ngxs/store'
import { Todo } from '../../todo.model'
import { TodoState } from '../../todo.state'

@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css'],
})
export class TodoMasterComponent {
  @Select(TodoState.todosByCompletedState(false)) uncompletedTodos$: Observable<Todo[]>
  @Select(TodoState.todosByCompletedState(true)) completedTodos$: Observable<Todo[]>
}
