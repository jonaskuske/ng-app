export interface Post {
  id: number
  title: { rendered: string }
  acf: {
    beschreibung: string
    erstellungsjahr: string
    modul: { name: string }
    showcaseFormat: ShowcaseFormat
    showcase: Image
    youtube: YoutubeURL
    galerie: Image[]
  }
}

export type ShowcaseFormat = 'image' | 'video'
export type YoutubeURL = string
export interface Image {
  title: string
  sizes: {
    medium: string
    large: string
  }
}
