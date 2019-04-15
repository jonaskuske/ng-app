import { Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'

import { TodoState } from '../../todo.state'
import { Todo } from '../../todo.model'

@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css'],
})
export class TodoMasterComponent {
  @Select(TodoState.todosByCompletedState(false)) uncompletedTodos$: Observable<Todo[]>
  @Select(TodoState.todosByCompletedState(true)) completedTodos$: Observable<Todo[]>
}
