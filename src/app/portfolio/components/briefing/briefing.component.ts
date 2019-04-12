import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-briefing',
  templateUrl: './briefing.component.html',
  styleUrls: ['./briefing.component.css'],
})
export class BriefingComponent implements OnInit {
  @Input() data: any

  ngOnInit() {}
}
