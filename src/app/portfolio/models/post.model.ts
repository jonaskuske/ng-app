export interface Post {
  id: number
  title: { rendered: string }
  acf: {
    beschreibung: string
    showcaseFormat: ShowcaseFormat
    showcase: Image
    youtube: YoutubeURL
    erstellungsjahr: string
    page: { post_title: string }
    modul: ObjectWithName
    studierende: ObjectWithName[]
    dozierende: ObjectWithName[]
    schlagworte: ObjectWithName[]
    semester: ObjectWithName[]
    galerie: Image[]
  }
}

export type ShowcaseFormat = 'image' | 'video'
export type YoutubeURL = string
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
export interface ObjectWithName {
  name: string
}