import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NgxsModule } from '@ngxs/store'

import { PortfolioRoutes } from './portfolio.module.routing'
import { PortfolioState } from './store/portfolio.state'
import { PostDetailModule } from './views/post-detail/post-detail.module'
import { PostMasterModule } from './views/post-master/post-master.module'

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutes,
    PostMasterModule,
    PostDetailModule,
    NgxsModule.forFeature([PortfolioState]),
  ],
  declarations: [],
})
export class PortfolioModule {}
