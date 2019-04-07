import { Routes, RouterModule } from '@angular/router'
import { TodoMasterComponent } from './views/todo-master/todo-master.component'

const routes: Routes = [{ path: 'todo', component: TodoMasterComponent }]

export const TodoRoutes = RouterModule.forChild(routes)
