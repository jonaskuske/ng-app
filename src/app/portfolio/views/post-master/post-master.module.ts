import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module'

import { PostMasterComponent } from './post-master.component'

@NgModule({
  imports: [CommonModule, RouterModule, LoadingSpinnerModule],
  providers: [],
  declarations: [PostMasterComponent],
})
export class PostMasterModule {}
