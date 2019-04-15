import { Component } from '@angular/core'
import { DisplayModeService, DisplayMode } from '../../services/display-mode.service'

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent {
  constructor(private displayModeService: DisplayModeService) {}

  get displayMode() {
    return this.displayModeService.displayMode
  }

  toggleDisplayMode() {
    this.displayModeService.toggleDisplayMode()
  }
}
