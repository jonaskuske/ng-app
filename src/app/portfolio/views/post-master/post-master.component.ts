import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Select, Store } from '@ngxs/store'
import { Post } from '../../models/post.model'
import { PostRequestOptions } from '../../posts.service'
import { GetPostPage } from '../../store/portfolio.actions'
import { PortfolioSelectors } from '../../store/portfolio.selectors'

const linebreakRegex = /<br\s?\/?>(<\/br>)?/g

type PostQueryFn = ReturnType<typeof PortfolioSelectors.postQueryFn>
type EntitiesByQueryFn$ = Observable<ReturnType<typeof PortfolioSelectors.postEntitiesByQueryFn>>

@Component({
  selector: 'app-post-master',
  templateUrl: './post-master.component.html',
  styleUrls: ['./post-master.component.css'],
})
export class PostMasterComponent implements OnInit {
  @Select(PortfolioSelectors.postQueryFn) postQueryFn$: Observable<PostQueryFn>
  @Select(PortfolioSelectors.postEntitiesByQueryFn) postEntitiesByQueryFn$: EntitiesByQueryFn$
  pagination: PostRequestOptions = { page: 1, perPage: 8 }

  posts$: Observable<Post[]>
  query$: Observable<ReturnType<PostQueryFn>>
  isFetching$: Observable<boolean>

  constructor(private store: Store) {
    this.posts$ = this.postEntitiesByQueryFn$.pipe(
      map((postsForQuery) => postsForQuery(this.pagination)),
      map((postEntities) => postEntities.map((p) => p.entity)),
    )
    this.query$ = this.postQueryFn$.pipe(map((getPostQuery) => getPostQuery(this.pagination)))
    this.isFetching$ = this.query$.pipe(
      map((q) => Object.values(q.pages).some((p) => p.isFetching)),
    )
  }

  ngOnInit() {
    this.loadPage()
  }
  loadPage() {
    this.store.dispatch(new GetPostPage(this.pagination))
  }
  requestNextPage() {
    this.pagination.page++
    this.loadPage()
  }

  getTeaser(text: string) {
    text = text.replace(linebreakRegex, '')

    if (text.length < 150) {
      return text
    }
    return `${text.slice(0, 145)}...`
  }
}
