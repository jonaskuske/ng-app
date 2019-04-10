import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  public activatedPath: string

  constructor(public route: ActivatedRoute) {
    this.activatedPath = '/' + this.route.snapshot.url.join('/')
  }

  ngOnInit() {}
}
