/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BriefingComponent } from './briefing.component'

describe('BriefingComponent', () => {
  let component: BriefingComponent
  let fixture: ComponentFixture<BriefingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BriefingComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
