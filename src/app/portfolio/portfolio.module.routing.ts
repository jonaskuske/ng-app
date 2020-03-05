import { RouterModule, Routes } from '@angular/router'

import { PostDetailComponent } from './views/post-detail/post-detail.component'
import { PostMasterComponent } from './views/post-master/post-master.component'

const routes: Routes = [
  { path: '', component: PostMasterComponent },
  { path: ':id', component: PostDetailComponent },
]

export const PortfolioRoutes = RouterModule.forChild(routes)
