import { Post } from './post.model'

export class GetPost {
  static readonly type = '[Portfolio] Get Post'
  constructor(public id: number) {}
}

export class GetPosts {
  static readonly type = '[Portfolio] Get Posts'
  constructor(public count: number = 10) {}
}

export class GetPostSuccess {
  static readonly type = '[Portfolio API] Get Post Success'
  constructor(public post: Post) {}
}

export class GetPostsSuccess {
  static readonly type = '[Portfolio API] Get Posts Success'
  constructor(public posts: Post[]) {}
}

export class GetPostError {
  static readonly type = '[Portfolio API] Get Post Error'
  constructor(public error: Error) {}
}

export class GetPostsError {
  static readonly type = '[Portfolio API] Get Posts Error'
  constructor(public error: Error) {}
}
