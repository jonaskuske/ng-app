import { Component, OnInit, Input } from '@angular/core'
import { ShowcaseFormat, Image, YoutubeURL } from '../../models/post.model'
import { getYoutubeId } from 'src/app/shared/util'

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

  constructor() {}

  ngOnInit() {
    if (this.type === 'video') {
      this.videoId = getYoutubeId(this.video)

      // this.iframeHTML = this.embedService.embed(this.video)
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script')

      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
    }
  }
}
