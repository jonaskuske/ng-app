import { YouTubePlayerModule, YouTubePlayer } from '@angular/youtube-player'
import { render } from '@testing-library/angular'
import { ShowcaseComponent } from './showcase.component'

const image = {
  name: '',
  alt: '',
  title: '',
  sizes: {
    large: '',
    'large-height': 0,
    'large-width': 0,
    medium: '',
    'medium-height': 0,
    'medium-width': 0,
  },
}

describe('ShowcaseComponent', () => {
  it('renders img when type is "image"', async () => {
    const component = await render(ShowcaseComponent, {
      declarations: [YouTubePlayer],
      componentProperties: { type: 'image', image },
    })

    expect(component.getByRole('img'))
    expect(component.queryByTestId('yt-player')).not.toBeInTheDocument()
  })

  it('renders YouTube player when type is "video"', async () => {
    const component = await render(ShowcaseComponent, {
      declarations: [YouTubePlayer],
      componentProperties: { type: 'video', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    })

    expect(component.getByTestId('yt-player'))
    expect(component.queryByRole('img')).not.toBeInTheDocument()
  })
})
