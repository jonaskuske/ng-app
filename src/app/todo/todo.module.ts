import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoRoutes } from './todo.module.routing'
import { NgxsModule } from '@ngxs/store'
import { TodoState } from './todo.state'
import { TodoMasterComponent } from './views/todo-master/todo-master.component'
import { TodoEntryComponent } from './components/todo-entry/todo-entry.component'

@NgModule({
  imports: [CommonModule, TodoRoutes, NgxsModule.forFeature([TodoState])],
  declarations: [TodoMasterComponent, TodoEntryComponent],
})
export class TodoModule {}
