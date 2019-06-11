import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style
    if (!supportsSmoothScroll) {
      Promise.all([
        import(/* webpackChunkName: "smoothscroll" */ 'smoothscroll-polyfill'),
        import(/* webpackChunkName: "smoothscroll" */ 'smoothscroll-anchor-polyfill'),
      ]).then(([smoothscrollPolyfill]) => smoothscrollPolyfill.polyfill())
    }
  }
}
