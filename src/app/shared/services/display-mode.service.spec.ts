import { DisplayModeService, STORAGE_KEY } from './display-mode.service'

const LIGHT_HREF = 'http://water.css/light.css'
const DARK_HREF = 'http://water.css/dark.css'

let stylesheetLink: HTMLLinkElement

beforeEach(() => {
  stylesheetLink = document.body.appendChild(
    Object.assign(document.createElement('link'), { href: LIGHT_HREF }),
  )
})

afterEach(() => {
  localStorage.clear()
  stylesheetLink.remove()
})

describe('Service: DisplayMode', () => {
  it('defaults to dark display mode', () => {
    new DisplayModeService(document) // tslint:disable-line no-unused-expression

    expect(stylesheetLink.href).toBe(DARK_HREF)
  })

  it('uses display mode from localStorage', () => {
    localStorage.setItem(STORAGE_KEY, 'light')
    new DisplayModeService(document) // tslint:disable-line no-unused-expression
    expect(stylesheetLink.href).toBe(LIGHT_HREF)

    localStorage.setItem(STORAGE_KEY, 'dark')
    new DisplayModeService(document) // tslint:disable-line no-unused-expression
    expect(stylesheetLink.href).toBe(DARK_HREF)
  })

  it('toggles display mode', () => {
    const service = new DisplayModeService(document)

    expect(stylesheetLink.href).toBe(DARK_HREF)
    service.toggleDisplayMode()
    expect(stylesheetLink.href).toBe(LIGHT_HREF)
    service.toggleDisplayMode()
    expect(stylesheetLink.href).toBe(DARK_HREF)
  })

  it('sets display mode', () => {
    const service = new DisplayModeService(document)

    service.setDisplayMode('dark')
    expect(stylesheetLink.href).toBe(DARK_HREF)
    service.setDisplayMode('light')
    expect(stylesheetLink.href).toBe(LIGHT_HREF)
  })

  it('stores display mode in localStorage', () => {
    const service = new DisplayModeService(document)

    service.setDisplayMode('light')
    expect(localStorage.getItem(STORAGE_KEY)).toBe('light')
    service.toggleDisplayMode()
    expect(localStorage.getItem(STORAGE_KEY)).toBe('dark')
  })
})
