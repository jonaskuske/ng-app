import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostDetailComponent } from './post-detail.component'
import { ShowcaseComponent } from '../../components/showcase/showcase.component'
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module'

@NgModule({
  imports: [CommonModule, LoadingSpinnerModule],
  declarations: [PostDetailComponent, ShowcaseComponent],
})
export class PostDetailModule {}