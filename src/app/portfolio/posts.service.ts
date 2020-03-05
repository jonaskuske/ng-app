import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

import { Page } from '../shared/models'

import { Post } from './models/post.model'

export interface PostRequestOptions {
  page: number
  perPage?: number
}

const { apiUrl } = environment

const headersGetTotal = (headers: HttpHeaders) => {
  const wpTotal = headers.get('x-wp-total')
  if (wpTotal == null) throw Error('Header "x-wp-total" missing in response')

  return Number(wpTotal)
}
const headersGetTotalPages = (headers: HttpHeaders) => {
  const wpTotalPages = headers.get('x-wp-totalpages')
  if (wpTotalPages == null) throw Error('Header "x-wp-totalpages" missing in response')

  return Number(wpTotalPages)
}

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
    const params = new HttpParams({
      fromObject: {
        page: String(page),
        per_page: String(perPage),
      },
    })

    return this.http
      .get<Post[]>(`${apiUrl}posts`, { params, observe: 'response' })
      .pipe(map(getPostPageFromResponse))
  }
}
