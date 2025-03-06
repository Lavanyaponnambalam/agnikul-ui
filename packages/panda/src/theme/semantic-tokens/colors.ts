import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
  bg: {
    'soft-surface': {
      value: { _light: '{colors.neutrallight.light.25}', _dark: '{colors.neutrallight.dark.900}' },
    },
    default: {
      value: { _light: '{colors.neutrallight.light.200}', _dark: '{colors.neutrallight.dark.500}' },
    },
    subtle: {
      value: { _light: '{colors.neutrallight.light.50}', _dark: '{colors.neutrallight.dark.800}' },
    },
    muted: {
      value: { _light: '{colors.neutrallight.light.300}', _dark: '{colors.neutrallight.dark.500}' },
    },
    emphasized: {
      value: { _light: '{colors.neutrallight.light.600}', _dark: '{colors.neutrallight.dark.600}' },
    },
  },
  fg: {
    primary: {
      value: { _light: '{colors.neutrallight.light.500}', _dark: '{colors.neutrallight.dark.500}' },
    },
    secondary: {
      value: { _light: '{colors.neutrallight.light.500}', _dark: '{colors.neutrallight.dark.500}' },
    },
    tertiary: {
      value: { _light: '{colors.neutrallight.light.100}', _dark: '{colors.neutrallight.dark.800}' },
    },
  },

  border: {
    xsubtle: {
      value: { _light: '{colors.neutrallight.light.50}', _dark: '{colors.neutrallight.dark.800}' },
    },
    subtle: {
      value: { _light: '{colors.neutrallight.light.100}', _dark: '{colors.neutrallight.dark.700}' },
    },
    default: {
      value: { _light: '{colors.neutrallight.light.500}', _dark: '{colors.neutrallight.dark.100}' },
    },
  },
})
