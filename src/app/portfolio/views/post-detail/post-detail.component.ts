import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngxs/store'
import { Observable, race } from 'rxjs'
import { map, filter } from 'rxjs/operators'

import { GetPost } from '../../portfolio.actions'
import { PortfolioState } from '../../portfolio.state'

import { Post } from '../../models/post.model'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post$: Observable<Post>
  id: number
  rawId: string
  isFetching = true

  constructor(route: ActivatedRoute, private store: Store) {
    this.rawId = route.snapshot.paramMap.get('id')
    this.id = Number(this.rawId)

    this.post$ = store.select(PortfolioState.postById).pipe(
      map(byId => byId(this.id)),
      filter(post => post !== undefined),
    )
  }

  ngOnInit() {
    const { id, store, post$ } = this

    race(post$, store.dispatch(new GetPost(id))).subscribe(() => (this.isFetching = false))
  }

  toTop() {
    document.body.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
