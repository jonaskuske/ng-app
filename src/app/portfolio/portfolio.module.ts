import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PortfolioRoutes } from './portfolio.module.routing'
import { PostMasterModule } from './views/post-master/post-master.module'
import { PostDetailModule } from './views/post-detail/post-detail.module'
import { NgxsModule } from '@ngxs/store'

import { PortfolioState } from './portfolio.state'

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
