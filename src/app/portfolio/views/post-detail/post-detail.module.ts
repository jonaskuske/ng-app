import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { YouTubePlayerModule } from '@angular/youtube-player'

import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module'

import { BriefingComponent } from '../../components/briefing/briefing.component'
import { ShowcaseComponent } from '../../components/showcase/showcase.component'

import { PostDetailComponent } from './post-detail.component'

@NgModule({
  imports: [CommonModule, YouTubePlayerModule, LoadingSpinnerModule],
  declarations: [PostDetailComponent, ShowcaseComponent, BriefingComponent],
})
export class PostDetailModule {}
