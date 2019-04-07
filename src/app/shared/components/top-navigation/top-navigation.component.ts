import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

type DisplayMode = 'light' | 'dark'
const body: HTMLElement = document.body

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  displayMode: DisplayMode = (localStorage.getItem('displayMode') as DisplayMode) || 'dark'
  ngOnInit() {
    if (this.displayMode === 'dark') body.classList.remove('light')
    else body.classList.add('light')
  }
  toggleMode: () => void = () => {
    const nextMode: DisplayMode = body.classList.toggle('light') ? 'light' : 'dark'
    localStorage.setItem('displayMode', nextMode)
    this.displayMode = nextMode
  }
}
