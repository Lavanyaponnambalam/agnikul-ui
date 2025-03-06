import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    background: 'bg.soft-surface',
    color: 'fg.subtle',
    _dark: {
      colorScheme: 'dark',
    },
  },
  '*, *::before, *::after': {
    borderColor: 'default',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  '*::placeholder': {
    opacity: 1,
    color: 'fg.subtle',
  },
  '*::selection': {
    bg: 'colorPalette.a3',
  },
})
