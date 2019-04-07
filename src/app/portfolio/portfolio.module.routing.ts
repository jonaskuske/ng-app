import { Routes, RouterModule } from '@angular/router'
import { PostMasterComponent } from './views/post-master/post-master.component'
import { PostDetailComponent } from './views/post-detail/post-detail.component'

const routes: Routes = [
  {
    path: 'portfolio',
    component: PostMasterComponent,
  },
  { path: 'portfolio/:id', component: PostDetailComponent },
]

export const NewsfeedRoutes = RouterModule.forChild(routes)
