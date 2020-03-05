import { RouterTestingModule } from '@angular/router/testing'

import { render } from '@testing-library/angular'

import { AppComponent } from './app.component'
import { TopNavigationModule } from './shared/components/top-navigation/top-navigation.module'

describe('AppComponent', () => {
  it('should include footer', async () => {
    const { getByText } = await render(AppComponent, {
      imports: [RouterTestingModule, TopNavigationModule],
    })

    expect(getByText(/Gebaut zu Übungszwecken/))
  })
})
