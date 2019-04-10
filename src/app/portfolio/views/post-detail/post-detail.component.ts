import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Post } from '../../post.model'
import { Store } from '@ngxs/store'
import { GetPost } from '../../portfolio.actions'
import { PortfolioState } from '../../portfolio.state'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent {
  post$: Observable<Post>
  projectId: string
  finishedLoading = false

  constructor(private route: ActivatedRoute, private store: Store) {
    this.projectId = this.route.snapshot.paramMap.get('id')

    const id: number = Number(this.projectId)

    this.store.dispatch(new GetPost(id)).subscribe(() => (this.finishedLoading = true))
    this.post$ = this.store.select(PortfolioState.getPostById).pipe(map(filterFn => filterFn(id)))
  }

  toTop() {
    document.body.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
