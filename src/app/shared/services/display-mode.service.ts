import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'

export type DisplayMode = 'light' | 'dark'
export const STORAGE_KEY = 'displayMode'

@Injectable({ providedIn: 'root' })
export class DisplayModeService {
  public displayMode: DisplayMode
  private linkElement: HTMLLinkElement

  constructor(@Inject(DOCUMENT) document: Document) {
    this.linkElement = document.querySelector('link[href*="water.css"]')
    this.displayMode = (localStorage.getItem(STORAGE_KEY) as DisplayMode) || 'dark'
    this.setDisplayMode(this.displayMode)
  }

  setDisplayMode(mode: DisplayMode) {
    if (this.linkElement) {
      this.linkElement.href = this.linkElement.href.replace(/light|dark/, mode)
    }
    localStorage.setItem(STORAGE_KEY, mode)
    this.displayMode = mode
  }

  toggleDisplayMode() {
    this.setDisplayMode(this.displayMode === 'light' ? 'dark' : 'light')
  }
}
