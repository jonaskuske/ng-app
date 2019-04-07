import { Component } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { PortfolioState } from '../../portfolio.state'
import { Observable } from 'rxjs'
import { Post } from '../../post.model'
import { GetPosts } from '../../portfolio.actions'

const linebreakRegex = /<br\s?\/?>(<\/br>)?/g

@Component({
  selector: 'app-post-master',
  templateUrl: './post-master.component.html',
  styleUrls: ['./post-master.component.css'],
})
export class PostMasterComponent {
  constructor(private store: Store) {}

  @Select(PortfolioState.isFetchingPosts) isLoading$: Observable<boolean>
  @Select(PortfolioState.postsSortedById) posts$: Observable<Post[]>

  loadNextPage() {
    this.store.dispatch(new GetPosts())
  }
  getTeaser(text: string) {
    const length = text.length
    if (length < 150) return text

    return `${text.slice(0, 145).replace(linebreakRegex, '')}...`
  }
}
