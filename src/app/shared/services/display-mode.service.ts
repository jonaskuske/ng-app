import { Injectable } from '@angular/core'

export type DisplayMode = 'light' | 'dark'

@Injectable({ providedIn: 'root' })
export class DisplayModeService {
  public displayMode: DisplayMode
  private linkElement: HTMLLinkElement

  constructor() {
    this.linkElement = document.querySelector('link[href*="water.css"]')
    this.displayMode = (localStorage.getItem('displayMode') as DisplayMode) || 'dark'
    this.setDisplayMode(this.displayMode)
  }

  setDisplayMode(mode: DisplayMode) {
    this.linkElement.href = this.linkElement.href.replace(/light|dark/, mode)
    localStorage.setItem('displayMode', mode)
    this.displayMode = mode
  }
  toggleDisplayMode() {
    this.setDisplayMode(this.displayMode === 'light' ? 'dark' : 'light')
  }
}
