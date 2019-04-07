import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Post } from './post.model'

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts({ perPage = 10, page = 1 } = {}) {
    return this.http.get<Post[]>(`${environment.apiUrl}posts?per_page=${perPage}&page=${page}`)
  }
  getPost({ id }: { id: number }) {
    return this.http.get<Post>(`${environment.apiUrl}posts/${id}`)
  }
}
