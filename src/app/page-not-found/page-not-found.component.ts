import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  public activatedPath: string

  constructor(route: ActivatedRoute) {
    this.activatedPath = '/' + route.snapshot.url.join('/')
  }
}
