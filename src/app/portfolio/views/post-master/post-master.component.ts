import { Component } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable, combineLatest } from 'rxjs'
import { first } from 'rxjs/operators'

import { PortfolioState } from '../../portfolio.state'
import { GetPostPage } from '../../portfolio.actions'

import { Post } from '../../models/post.model'

const linebreakRegex = /<br\s?\/?>(<\/br>)?/g

@Component({
  selector: 'app-post-master',
  templateUrl: './post-master.component.html',
  styleUrls: ['./post-master.component.css'],
})
export class PostMasterComponent {
  constructor(private store: Store) {}

  @Select(PortfolioState.postsSortedById) posts$: Observable<Post[]>
  @Select(PortfolioState.requested) requested$: Observable<boolean>
  @Select(PortfolioState.totalPages) totalPages$: Observable<number>
  @Select(PortfolioState.currentPage) currentPage$: Observable<number>

  loadNextPage() {
    combineLatest(this.currentPage$, this.totalPages$)
      .pipe(first())
      .subscribe(([currentPage, totalPages]) => {
        if (currentPage < totalPages) this.store.dispatch(new GetPostPage(currentPage + 1))
      })
  }

  getTeaser(text: string) {
    text = text.replace(linebreakRegex, '')

    if (text.length < 150) return text
    return `${text.slice(0, 145)}...`
  }
}
