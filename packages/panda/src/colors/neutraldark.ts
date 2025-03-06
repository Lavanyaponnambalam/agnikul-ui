import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  '25': { value: '#fafafa' },
  '50': { value: '#f7f7f7' },
  '100': { value: '#f0f0f1' },
  '200': { value: '#ececed' },
  '300': { value: '#cecfd2' },
  '400': { value: '#94979c' },
  '500': { value: '#85888e' },
  '600': { value: '#61656c' },
  '700': { value: '#373a41' },
  '800': { value: '#22262f' },
  '900': { value: '#13161b' },
  '950': { value: '#0c0e12' },
})

const semanticTokens = defineSemanticTokens.colors({
  bg: {
    'soft-surface': {
      value: { _light: '{colors.neutraldark.25}', _dark: '{colors.neutraldark.900}' },
    },
    default: { value: { _light: '{colors.neutraldark.500}', _dark: '{colors.neutraldark.500}' } },
    subtle: { value: { _light: '{colors.neutraldark.50}', _dark: '{colors.neutraldark.800}' } },
    muted: { value: { _light: '{colors.neutraldark.300}', _dark: '{colors.neutraldark.500}' } },
    emphasized: {
      value: { _light: '{colors.neutraldark.600}', _dark: '{colors.neutraldark.600}' },
    },
  },

  fg: {
    primary: { value: { _light: '{colors.neutraldark.500}', _dark: '{colors.neutraldark.500}' } },
    secondary: { value: { _light: '{colors.neutraldark.500}', _dark: '{colors.neutraldark.500}' } },
    tertiary: { value: { _light: '{colors.neutraldark.100}', _dark: '{colors.neutraldark.800}' } },
  },

  border: {
    xsubtle: { value: { _light: '{colors.neutraldark.50}', _dark: '{colors.neutraldark.800}' } },
    subtle: { value: { _light: '{colors.neutraldark.100}', _dark: '{colors.neutraldark.700}' } },
    default: { value: { _light: '{colors.neutraldark.500}', _dark: '{colors.neutraldark.100}' } },
  },
})

export default {
  name: 'neutraldark',
  tokens,
  semanticTokens,
}
