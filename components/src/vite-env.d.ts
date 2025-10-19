/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
  interface Window {
    dataLayer: object[]
  }
}

export { }