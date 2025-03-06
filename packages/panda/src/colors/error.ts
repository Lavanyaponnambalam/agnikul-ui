import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  '25': { value: '#fffbfa' },
  '50': { value: '#fef3f2' },
  '100': { value: '#fee4e2' },
  '200': { value: '#fecdca' },
  '300': { value: '#fda29b' },
  '400': { value: '#f97066' },
  '500': { value: '#f04438' },
  '600': { value: '#d92d20' },
  '700': { value: '#b42318' },
  '800': { value: '#912018' },
  '900': { value: '#7a271a' },
  '950': { value: '#7a271a' },
})

const semanticTokens = defineSemanticTokens.colors({
  bg: {
    'soft-surface': { value: { _light: '{colors.error.25}', _dark: '{colors.error.900}' } },
    default: { value: { _light: '{colors.error.500}', _dark: '{colors.error.500}' } },
    subtle: { value: { _light: '{colors.error.100}', _dark: '{colors.error.700}' } },
    emphasized: { value: { _light: '{colors.error.600}', _dark: '{colors.error.400}' } },
  },

  fg: {
    primary: { value: { _light: '{colors.error.600}', _dark: '{colors.error.400}' } },
    secondary: { value: { _light: '{colors.error.500}', _dark: '{colors.error.500}' } },
    tertiary: { value: { _light: '{colors.error.300}', _dark: '{colors.error.700}' } },
  },

  border: {
    subtle: { value: { _light: '{colors.error.200}', _dark: '{colors.error.600}' } },
    default: { value: { _light: '{colors.error.500}', _dark: '{colors.error.400}' } },
  },
})

export default {
  name: 'error',
  tokens,
  semanticTokens,
}
