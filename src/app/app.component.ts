import { Component } from '@angular/core'

const body = document.body

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mode = body.classList.contains('light') ? 'light' : 'dark'

  toggleMode = () => {
    this.mode = body.classList.toggle('light') ? 'light' : 'dark'
  }
}
