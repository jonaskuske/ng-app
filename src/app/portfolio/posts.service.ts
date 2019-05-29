import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment'

import { Page } from '../shared/models'
import { Post } from './models/post.model'

export interface PostRequestOptions {
  page: number
  perPage?: number
}

const { apiUrl } = environment

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
    return this.http.get<Post>(`${apiUrl}posts/${id}`)
  }

  getPosts({ page, perPage = 10 }: PostRequestOptions) {
    return this.http
      .get<Post[]>(`${apiUrl}posts?per_page=${perPage}&page=${page}`, { observe: 'response' })
      .pipe(map(getPostPageFromResponse))
  }
}
