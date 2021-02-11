/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { waitForAsync, inject, TestBed } from '@angular/core/testing'

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

  it(
    'fetches single post with correct ID and method',
    waitForAsync(
      inject(
        [HttpTestingController, PostsService],
        (httpMock: HttpTestingController, service: PostsService) => {
          const postId = 1
          const categoryId = 1
          const mockPost = { categories: [categoryId] }

          service.getPost(postId).subscribe((post) => {})

          const req = httpMock.expectOne(`${apiUrl}posts/${postId}`)
          expect(req.request.method).toBe('GET')

          req.flush(mockPost)

          const categoryReq = httpMock.expectOne(`${apiUrl}categories/${categoryId}`)
          expect(categoryReq.request.method).toBe('GET')

          categoryReq.flush({})
        },
      ),
    ),
  )

  it(
    'fetches posts for given page and perPage',
    waitForAsync(
      inject(
        [HttpTestingController, PostsService],
        (httpMock: HttpTestingController, service: PostsService) => {
          const page = 1
          const perPage = 3

          const categoryIds = [1, 2, 3]
          const mockPosts = categoryIds.map((id) => ({ categories: [id] }))

          service.getPosts({ page, perPage }).subscribe((postsPage) => {
            expect(typeof postsPage.total).toBe('number')
            expect(typeof postsPage.totalPages).toBe('number')
          })

          const req = httpMock.expectOne(`${apiUrl}posts?page=${page}&per_page=${perPage}`)
          expect(req.request.method).toBe('GET')

          req.flush(mockPosts, { headers: { 'x-wp-total': '3', 'x-wp-totalpages': '1' } })

          categoryIds.forEach((id) => httpMock.expectOne(`${apiUrl}categories/${id}`).flush({}))
        },
      ),
    ),
  )

  it(
    'defaults to perPage = 10 if not specified',
    waitForAsync(
      inject(
        [HttpTestingController, PostsService],
        (httpMock: HttpTestingController, service: PostsService) => {
          const page = 1
          service.getPosts({ page }).subscribe((postsPage) => {})

          const req = httpMock.expectOne(`${apiUrl}posts?page=${page}&per_page=10`)
          expect(req.request.method).toBe('GET')

          req.flush([], { headers: { 'x-wp-total': '0', 'x-wp-totalpages': '0' } })
        },
      ),
    ),
  )
})
