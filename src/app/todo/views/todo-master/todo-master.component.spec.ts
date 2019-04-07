/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { TodoMasterComponent } from './todo-master.component'

describe('TodoMasterComponent', () => {
  let component: TodoMasterComponent
  let fixture: ComponentFixture<TodoMasterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoMasterComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMasterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
