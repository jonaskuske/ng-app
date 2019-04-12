import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module'

import { PostDetailComponent } from './post-detail.component'
import { ShowcaseComponent } from '../../components/showcase/showcase.component'
import { BriefingComponent } from '../../components/briefing/briefing.component'

@NgModule({
  imports: [CommonModule, LoadingSpinnerModule],
  declarations: [PostDetailComponent, ShowcaseComponent, BriefingComponent],
})
export class PostDetailModule {}
