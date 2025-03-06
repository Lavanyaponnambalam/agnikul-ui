import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  '25': { value: '#fdfdfd' },
  '50': { value: '#fafafa' },
  '100': { value: '#f5f5f5' },
  '200': { value: '#e9eaeb' },
  '300': { value: '#d5d7da' },
  '400': { value: '#a4a7ae' },
  '500': { value: '#717680' },
  '600': { value: '#535862' },
  '700': { value: '#414651' },
  '800': { value: '#252b37' },
  '900': { value: '#181d27' },
  '950': { value: '#0a0d12' },

  // Alpha (transparent) values
  a25: { value: '#fdfdfd04' },
  a50: { value: '#fafafa0b' },
  a100: { value: '#f5f5f519' },
  a200: { value: '#e9eaeb29' },
  a300: { value: '#d5d7da3c' },
  a400: { value: '#a4a7ae53' },
  a500: { value: '#71768074' },
  a600: { value: '#53586299' },
  a700: { value: '#414651bf' },
  a800: { value: '#252b37d6' },
  a900: { value: '#181d27e2' },
  a950: { value: '#0a0d12e6' },
})

const semanticTokens = defineSemanticTokens.colors({
  bg: {
    'soft-surface': {
      value: { _light: '{colors.neutrallight.25}', _dark: '{colors.neutrallight.900}' },
    },
    default: { value: { _light: '{colors.neutrallight.500}', _dark: '{colors.neutrallight.500}' } },
    subtle: { value: { _light: '{colors.neutrallight.50}', _dark: '{colors.neutrallight.800}' } },
    emphasized: {
      value: { _light: '{colors.neutrallight.600}', _dark: '{colors.neutrallight.400}' },
    },
  },

  fg: {
    primary: { value: { _light: '{colors.neutrallight.500}', _dark: '{colors.neutrallight.400}' } },
    secondary: {
      value: { _light: '{colors.neutrallight.500}', _dark: '{colors.neutrallight.500}' },
    },
    tertiary: {
      value: { _light: '{colors.neutrallight.300}', _dark: '{colors.neutrallight.700}' },
    },
  },

  border: {
    subtle: { value: { _light: '{colors.neutrallight.200}', _dark: '{colors.neutrallight.600}' } },
    default: { value: { _light: '{colors.neutrallight.500}', _dark: '{colors.neutrallight.400}' } },
  },
})

export default {
  name: 'neutrallight',
  tokens,
  semanticTokens,
}
