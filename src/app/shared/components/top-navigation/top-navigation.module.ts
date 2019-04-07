import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopNavigationComponent } from './top-navigation.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopNavigationComponent],
  exports: [TopNavigationComponent],
})
export class TopNavigationModule {}
