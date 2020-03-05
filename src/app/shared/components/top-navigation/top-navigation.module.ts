import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TopNavigationComponent } from './top-navigation.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopNavigationComponent],
  exports: [TopNavigationComponent],
})
export class TopNavigationModule {}
