import { Component, OnInit, Input } from '@angular/core'
import { Post } from '../../models/post.model'

@Component({
  selector: 'app-briefing',
  templateUrl: './briefing.component.html',
  styleUrls: ['./briefing.component.css'],
})
export class BriefingComponent implements OnInit {
  @Input() data: Post['acf']

  ngOnInit() {}
}
