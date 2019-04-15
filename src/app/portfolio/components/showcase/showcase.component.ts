import { Component, OnInit, Input } from '@angular/core'
import { EmbedVideoService } from 'ngx-embed-video'
import { ShowcaseFormat, Image, YoutubeURL } from '../../models/post.model'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent implements OnInit {
  @Input() type: ShowcaseFormat
  @Input() image: Image
  @Input() video: YoutubeURL

  iframeHTML: string

  constructor(public embedService: EmbedVideoService) {}

  ngOnInit() {
    if (this.type === 'video') {
      this.iframeHTML = this.embedService.embed(this.video)
    }
  }
}
