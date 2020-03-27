import { Component } from '@angular/core'

import { render, waitFor } from '@testing-library/angular'

import { PageNotFoundComponent } from './page-not-found.component'

@Component({ template: '<router-outlet></router-outlet>' })
class RouterOutletComponent {}
@Component({ template: '<div data-testid="homescreen"></div>' })
class HomescreenComponent {}

describe('PageNotFoundComponent', () => {
  it('renders title', async () => {
    const component = await render(PageNotFoundComponent, { routes: [] })

    expect(component.getByRole('heading'))
  })

  it('navigates to / when button is clicked', async () => {
    const component = await render(RouterOutletComponent, {
      declarations: [HomescreenComponent, PageNotFoundComponent],
      routes: [
        { path: '', pathMatch: 'full', component: HomescreenComponent },
        { path: '**', component: PageNotFoundComponent },
      ],
    })

    await component.navigate('/404')
    expect(component.queryByRole('heading')).toContainHTML('404')
    expect(component.queryByTestId('homescreen')).not.toBeInTheDocument()

    component.fixture.ngZone.run(() => component.getByRole('button').click())

    await waitFor(() => component.getByTestId('homescreen'))

    expect(component.getByTestId('homescreen')).toBeInTheDocument()
  })
})
