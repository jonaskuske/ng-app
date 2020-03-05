/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { async, inject, TestBed } from '@angular/core/testing'

import { environment } from 'src/environments/environment'

import { PostsService } from './posts.service'
const { apiUrl } = environment

describe('Service: Posts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [HttpClientTestingModule],
    })
  })

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify()
  }))

  it('fetches single post with correct ID and method', async(
    inject(
      [HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        const id = 1
        service.getPost(id).subscribe(post => {})

        const req = httpMock.expectOne(`${apiUrl}posts/${id}`)
        expect(req.request.method).toBe('GET')

        req.flush({})
      },
    ),
  ))

  it('fetches posts for given page and perPage', async(
    inject(
      [HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        const page = 1
        const perPage = 3
        service.getPosts({ page, perPage }).subscribe(postsPage => {
          expect(typeof postsPage.total).toBe('number')
          expect(typeof postsPage.totalPages).toBe('number')
        })

        const req = httpMock.expectOne(`${apiUrl}posts?page=${page}&per_page=${perPage}`)
        expect(req.request.method).toBe('GET')

        req.flush([], { headers: { 'x-wp-total': '0', 'x-wp-totalpages': '0' } })
      },
    ),
  ))

  it('defaults to perPage = 10 if not specified', async(
    inject(
      [HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        const page = 1
        service.getPosts({ page }).subscribe(postsPage => {})

        const req = httpMock.expectOne(`${apiUrl}posts?page=${page}&per_page=10`)
        expect(req.request.method).toBe('GET')

        req.flush([], { headers: { 'x-wp-total': '0', 'x-wp-totalpages': '0' } })
      },
    ),
  ))
})
