import { render } from '@testing-library/angular'
import { Post } from '../../models/post.model'

import { BriefingComponent } from './briefing.component'

const getData = (changes?: Partial<Post['acf']>): Post['acf'] => ({
  dozierende: [],
  studierende: [],
  beschreibung: '',
  semester: [],
  erstellungsjahr: '',
  modul: { name: '' },
  schlagworte: [],
  galerie: [],
  showcase: null,
  showcaseFormat: 'image',
  page: { post_title: '' },
  youtube: null,
  ...changes,
})

describe('BriefingComponent', () => {
  it('says "Studierende" if there are multiple', async () => {
    const component = await render(BriefingComponent, {
      componentProperties: { data: getData({ studierende: [{ name: 'A' }, { name: 'B' }] }) },
    })

    expect(component.getByText('Studierende:'))
    expect(component.queryByText('Student*in:')).not.toBeInTheDocument()
  })

  it('says "Student*in" if there is just one', async () => {
    const component = await render(BriefingComponent, {
      componentProperties: { data: getData({ studierende: [{ name: 'A' }] }) },
    })

    expect(component.getByText('Student*in:'))
    expect(component.queryByText('Studierende:')).not.toBeInTheDocument()
  })

  it('says "Dozierende" if there are multiple', async () => {
    const component = await render(BriefingComponent, {
      componentProperties: { data: getData({ dozierende: [{ name: 'A' }, { name: 'B' }] }) },
    })

    expect(component.getByText('Dozierende:'))
    expect(component.queryByText('Dozent*in:')).not.toBeInTheDocument()
  })

  it('says "Dozent*in" if there is just one', async () => {
    const component = await render(BriefingComponent, {
      componentProperties: { data: getData({ dozierende: [{ name: 'A' }] }) },
    })

    expect(component.getByText('Dozent*in:'))
    expect(component.queryByText('Dozierende:')).not.toBeInTheDocument()
  })
})
