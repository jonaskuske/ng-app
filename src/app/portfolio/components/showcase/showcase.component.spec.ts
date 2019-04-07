/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { ShowcaseComponent } from './showcase.component'

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent
  let fixture: ComponentFixture<ShowcaseComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
