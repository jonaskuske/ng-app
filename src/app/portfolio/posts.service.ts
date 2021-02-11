import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { forkJoin } from 'rxjs'

import { map, switchMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

import { Page } from '../shared/models'

import { BasePost, Category, Post } from './models/post.model'

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

const getPageFromResponse = <T>(response: HttpResponse<T[]>): Page<T> => {
  const { body, headers } = response
  return { body, total: headersGetTotal(headers), totalPages: headersGetTotalPages(headers) }
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  getCategory(id: number) {
    return this.http.get<Category>(`${apiUrl}categories/${id}`)
  }

  getPostFromBasePost(post: BasePost) {
    return this.http
      .get<Category>(`${apiUrl}categories/${post.categories[0]}`)
      .pipe(map((category) => ({ ...post, categoryName: category.name } as Post)))
  }

  getPost(id: number) {
    return this.http
      .get<BasePost>(`${apiUrl}posts/${id}`)
      .pipe(switchMap((basePost) => this.getPostFromBasePost(basePost)))
  }

  getPosts({ page, perPage = 10 }: PostRequestOptions) {
    const params = new HttpParams({
      fromObject: { page: String(page), per_page: String(perPage) },
    })

    return this.http
      .get<BasePost[]>(`${apiUrl}posts`, { params, observe: 'response' })
      .pipe(
        switchMap((response) => {
          return forkJoin(response.body.map((basePost) => this.getPostFromBasePost(basePost))).pipe(
            map((body) => ({ ...response, body })),
          )
        }),
        map(getPageFromResponse),
      )
  }
}
