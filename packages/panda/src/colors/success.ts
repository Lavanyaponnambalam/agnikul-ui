import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  '25': { value: '#f6fef9' },
  '50': { value: '#ecfdf3' },
  '100': { value: '#dbfae6' },
  '200': { value: '#a9efc5' },
  '300': { value: '#75e0a7' },
  '400': { value: '#47cd89' },
  '500': { value: '#17b26a' },
  '600': { value: '#079455' },
  '700': { value: '#067647' },
  '800': { value: '#085d3a' },
  '900': { value: '#074d31' },
  '950': { value: '#053321' },
})

const semanticTokens = defineSemanticTokens.colors({
  bg: {
    'soft-surface': { value: { _light: '{colors.success.25}', _dark: '{colors.success.900}' } },
    default: { value: { _light: '{colors.success.500}', _dark: '{colors.success.500}' } },
    subtle: { value: { _light: '{colors.success.100}', _dark: '{colors.success.700}' } },
    emphasized: { value: { _light: '{colors.success.600}', _dark: '{colors.success.400}' } },
  },

  fg: {
    primary: { value: { _light: '{colors.success.600}', _dark: '{colors.success.400}' } },
    secondary: { value: { _light: '{colors.success.500}', _dark: '{colors.success.500}' } },
    tertiary: { value: { _light: '{colors.success.300}', _dark: '{colors.success.700}' } },
  },

  border: {
    subtle: { value: { _light: '{colors.success.200}', _dark: '{colors.success.600}' } },
    default: { value: { _light: '{colors.success.500}', _dark: '{colors.success.400}' } },
  },
})

export default {
  name: 'success',
  tokens,
  semanticTokens,
}
