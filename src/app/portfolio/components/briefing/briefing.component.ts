import { Component, Input } from '@angular/core'

import { Post } from '../../models/post.model'

@Component({
  selector: 'app-briefing',
  templateUrl: './briefing.component.html',
  styleUrls: ['./briefing.component.css'],
})
export class BriefingComponent {
  @Input() data: Post['acf']
}
