import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  '25': { value: '#fffcf5' },
  '50': { value: '#fffaeb' },
  '100': { value: '#fef0c7' },
  '200': { value: '#fedf89' },
  '300': { value: '#fec84b' },
  '400': { value: '#fdb022' },
  '500': { value: '#f79009' },
  '600': { value: '#dc6803' },
  '700': { value: '#b54708' },
  '800': { value: '#93370d' },
  '900': { value: '#7a2e0e' },
  '950': { value: '#4e1d09' },
})

const semanticTokens = defineSemanticTokens.colors({
  bg: {
    'soft-surface': { value: { _light: '{colors.warning.25}', _dark: '{colors.warning.900}' } },
    default: { value: { _light: '{colors.warning.500}', _dark: '{colors.warning.500}' } },
    subtle: { value: { _light: '{colors.warning.100}', _dark: '{colors.warning.700}' } },
    emphasized: { value: { _light: '{colors.warning.600}', _dark: '{colors.warning.400}' } },
  },

  fg: {
    primary: { value: { _light: '{colors.warning.600}', _dark: '{colors.warning.400}' } },
    secondary: { value: { _light: '{colors.warning.500}', _dark: '{colors.warning.500}' } },
    tertiary: { value: { _light: '{colors.warning.300}', _dark: '{colors.warning.700}' } },
  },

  border: {
    subtle: { value: { _light: '{colors.warning.200}', _dark: '{colors.warning.600}' } },
    default: { value: { _light: '{colors.warning.500}', _dark: '{colors.warning.400}' } },
  },
})

export default {
  name: 'warning',
  tokens,
  semanticTokens,
}
