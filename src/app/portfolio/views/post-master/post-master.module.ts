import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostMasterComponent } from './post-master.component'
import { RouterModule } from '@angular/router'
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module'

@NgModule({
  imports: [CommonModule, RouterModule, LoadingSpinnerModule],
  providers: [],
  declarations: [PostMasterComponent],
})
export class PostMasterModule {}
