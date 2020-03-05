import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { NgxsModule } from '@ngxs/store'

import { FormAddTodoComponent } from './components/form-add-todo/form-add-todo.component'
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component'
import { TodoRoutes } from './todo.module.routing'
import { TodoState } from './todo.state'
import { TodoMasterComponent } from './views/todo-master/todo-master.component'

@NgModule({
  imports: [CommonModule, TodoRoutes, NgxsModule.forFeature([TodoState]), FormsModule],
  declarations: [TodoMasterComponent, TodoEntryComponent, FormAddTodoComponent],
})
export class TodoModule {}
