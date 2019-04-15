import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxsModule } from '@ngxs/store'
import { TodoRoutes } from './todo.module.routing'
import { FormAddTodoModule } from './components/form-add-todo/form-add-todo.module'
import { TodoMasterComponent } from './views/todo-master/todo-master.component'
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component'

import { TodoState } from './todo.state'

@NgModule({
  imports: [CommonModule, TodoRoutes, NgxsModule.forFeature([TodoState]), FormAddTodoModule],
  declarations: [TodoMasterComponent, TodoEntryComponent],
})
export class TodoModule {}
