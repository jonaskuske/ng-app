import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment'

import { Page } from '../shared/models'
import { Post } from './models/post.model'

const headersGetTotal = (headers: HttpHeaders) => Number(headers.get('x-wp-total'))
const headersGetTotalPages = (headers: HttpHeaders) => Number(headers.get('x-wp-totalpages'))

const getPostPageFromResponse = (response: HttpResponse<Post[]>): Page<Post> => {
  const { body, headers } = response
  return { body, total: headersGetTotal(headers), totalPages: headersGetTotalPages(headers) }
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  getPost(id: number) {
    return this.http.get<Post>(`${environment.apiUrl}posts/${id}`)
  }

  getPosts({ page = 1, perPage = 10 } = {}) {
    const respone = this.http.get<Post[]>(
      `${environment.apiUrl}posts?per_page=${perPage}&page=${page}`,
      { observe: 'response' },
    )

    return respone.pipe(map(getPostPageFromResponse))
  }
}
