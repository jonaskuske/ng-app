import 'jest-preset-angular'
import '@testing-library/jest-dom'

const createMockStorage = () => {
  let storage = {}
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {}),
  }
}

Object.defineProperty(window, 'getComputedStyle', {
  value: self.getComputedStyle,
})

Object.defineProperty(window, 'localStorage', { value: createMockStorage() })
Object.defineProperty(window, 'sessionStorage', { value: createMockStorage() })

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
})

/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return { enumerable: true, configurable: true }
  },
})
