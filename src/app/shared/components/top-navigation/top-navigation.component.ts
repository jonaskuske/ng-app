import { Component, OnInit } from '@angular/core'

type DisplayMode = 'light' | 'dark'

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  private linkElement: HTMLLinkElement = document.querySelector('link[href*="water.css"]')

  displayMode: DisplayMode = (localStorage.getItem('displayMode') as DisplayMode) || 'dark'

  setDisplayMode(mode: DisplayMode) {
    this.linkElement.href = this.linkElement.href.replace(/light|dark/, mode)
    localStorage.setItem('displayMode', mode)
    this.displayMode = mode
  }
  toggleDisplayMode() {
    this.setDisplayMode(this.displayMode === 'light' ? 'dark' : 'light')
  }

  ngOnInit() {
    this.setDisplayMode(this.displayMode)
  }
}
