/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { DisplayModeService } from './display-mode.service'

describe('Service: DisplayMode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayModeService],
    })
  })

  it('should ...', inject([DisplayModeService], (service: DisplayModeService) => {
    expect(service).toBeTruthy()
  }))
})
