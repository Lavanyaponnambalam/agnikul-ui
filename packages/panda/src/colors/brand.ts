import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  '25': { value: '#e6fee7' },
  '50': { value: '#d6fad8' },
  '100': { value: '#b6f2ba' },
  '200': { value: '#92e398' },
  '300': { value: '#72cf7a' },
  '400': { value: '#58b660' },
  '500': { value: '#4d8c52' },
  '600': { value: '#3f7343' },
  '700': { value: '#345636' },
  '800': { value: '#263b27' },
  '900': { value: '#162217' },
  '950': { value: '#0e160f' },
})

const semanticTokens = defineSemanticTokens.colors({
  bg: {
    softsurface: { value: { _light: '{colors.brand.light.25}', _dark: '{colors.brand.dark.900}' } },
    default: { value: { _light: '{colors.brand.light.500}', _dark: '{colors.brand.dark.500}' } },
    subtle: { value: { _light: '{colors.brand.light.50}', _dark: '{colors.brand.dark.800}' } },
    muted: { value: { _light: '{colors.brand.light.300}', _dark: '{colors.brand.dark.500}' } },
    emphasized: { value: { _light: '{colors.brand.light.600}', _dark: '{colors.brand.dark.600}' } },
  },

  fg: {
    primary: { value: { _light: '{colors.brand.light.500}', _dark: '{colors.brand.dark.500}' } },
    secondary: { value: { _light: '{colors.brand.light.500}', _dark: '{colors.brand.dark.500}' } },
    tertiary: { value: { _light: '{colors.brand.light.100}', _dark: '{colors.brand.dark.800}' } },
  },

  border: {
    xsubtle: { value: { _light: '{colors.brand.light.50}', _dark: '{colors.brand.dark.800}' } },
    subtle: { value: { _light: '{colors.brand.light.100}', _dark: '{colors.brand.dark.700}' } },
    default: { value: { _light: '{colors.brand.light.500}', _dark: '{colors.brand.dark.100}' } },
  },
})

export default {
  name: 'brand',
  tokens,
  semanticTokens,
}
