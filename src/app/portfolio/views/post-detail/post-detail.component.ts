import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Select, Store } from '@ngxs/store'
import { GetPost } from '../../store/portfolio.actions'
import { PortfolioSelectors } from '../../store/portfolio.selectors'

type PostEntityByIdFn = ReturnType<typeof PortfolioSelectors.postEntityByIdFn>

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  @Select(PortfolioSelectors.postEntityByIdFn) postEntityByIdFn$: Observable<PostEntityByIdFn>
  rawId: string
  id: number

  postEntity$: Observable<ReturnType<PostEntityByIdFn>>
  post$: Observable<ReturnType<PostEntityByIdFn>['entity']>
  isFetching$: Observable<boolean>

  constructor(route: ActivatedRoute, private store: Store) {
    this.rawId = route.snapshot.paramMap.get('id')
    this.id = Number(this.rawId)
  }

  ngOnInit() {
    this.postEntity$ = this.postEntityByIdFn$.pipe(map((postEntityById) => postEntityById(this.id)))
    this.post$ = this.postEntity$.pipe(map((post) => post.entity))
    this.isFetching$ = this.postEntity$.pipe(map((post) => post.isFetching))

    this.store.dispatch(new GetPost(this.id)).subscribe()
  }

  toTop() {
    document.body.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
