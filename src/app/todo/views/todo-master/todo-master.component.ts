import { Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { TodoState } from '../../todo.state'
import { Observable } from 'rxjs'
import { Todo } from '../../todo.model'

@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css'],
})
export class TodoMasterComponent {
  @Select(TodoState.getByCompletedState(false)) uncompletedTodos$: Observable<Todo[]>
  @Select(TodoState.getByCompletedState(true)) completedTodos$: Observable<Todo[]>
}
