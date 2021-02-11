export interface BasePost {
  id: number
  title: { rendered: string }
  categories: number[]
  acf: {
    description: string
    showcaseType: ShowcaseType
    showcaseImage: Image
    showcaseVideo: VideoURL
    year: string
    topic: WrappedName
    students: WrappedName[]
    lecturers: WrappedName[]
    tags: WrappedName[]
    semester: WrappedName[]
    gallery: Image[]
  }
}

export interface Category {
  name: string
}

export interface Post extends BasePost {
  categoryName: Category['name']
}

export type ShowcaseType = 'image' | 'video'

export type VideoURL = string

export interface Image {
  title: string
  alt: string
  name: string
  sizes: {
    medium: string
    'medium-width': number
    'medium-height': number
    large: string
    'large-width': number
    'large-height': number
  }
}

export interface WrappedName {
  name: string
}
