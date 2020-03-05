import { Component, Input, OnInit, Inject } from '@angular/core'

import { getYoutubeId } from 'src/app/shared/util'

import { Image, ShowcaseFormat, YoutubeURL } from '../../models/post.model'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent implements OnInit {
  @Input() type: ShowcaseFormat
  @Input() image: Image
  @Input() video: YoutubeURL

  public videoId: string

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    if (this.type === 'video') {
      this.videoId = getYoutubeId(this.video)

      if (typeof YT === 'undefined') this.loadYouTubeAPI()
    }
  }

  private loadYouTubeAPI() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    this.document.body.appendChild(tag)
  }
}
