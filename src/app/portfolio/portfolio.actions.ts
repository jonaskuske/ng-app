import { Page } from '../shared/models'
import { Post } from './models/post.model'

export class GetPost {
  static readonly type = '[Portfolio] Get Post'
  constructor(public id: number) {}
}
export class GetPostSuccess {
  static readonly type = '[Portfolio API] Get Post Success'
  constructor(public post: Post) {}
}
export class GetPostError {
  static readonly type = '[Portfolio API] Get Post Error'
  constructor(public id: number, public error: Error) {}
}

export class GetPostPage {
  static readonly type = '[Portfolio] Get Post Page'
  constructor(public page: number) {}
}
export class GetPostPageSuccess {
  static readonly type = '[Portfolio API] Get Post Page Success'
  constructor(public page: number, public payload: Page<Post>) {}
}
export class GetPostPageError {
  static readonly type = '[Portfolio API] Get Post Page Error'
  constructor(public page: number, public error: Error) {}
}
