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

Object.defineProperty(window, 'localStorage', { value: createMockStorage() })
Object.defineProperty(window, 'sessionStorage', { value: createMockStorage() })
