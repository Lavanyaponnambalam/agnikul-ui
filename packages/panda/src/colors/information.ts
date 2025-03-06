import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

const tokens = defineTokens.colors({
  '25': { value: '##f5faff' },
  '50': { value: '#eff8ff' },
  '100': { value: '#d1e9ff' },
  '200': { value: '#b2ddff' },
  '300': { value: '#84caff' },
  '400': { value: '#53b1fd' },
  '500': { value: '#2e90fa' },
  '600': { value: '#1570ef' },
  '700': { value: '#175cd3' },
  '800': { value: '#1849a9' },
  '900': { value: '#194185' },
  '950': { value: '#102a56' },
})

const semanticTokens = defineSemanticTokens.colors({
  fg: {
    primary: { value: { _light: '{colors.information.600}', _dark: '{colors.information.400}' } },
    secondary: { value: { _light: '{colors.information.500}', _dark: '{colors.information.500}' } },
    tertiary: { value: { _light: '{colors.information.300}', _dark: '{colors.information.700}' } },
  },
})

export default {
  name: 'information',
  tokens,
  semanticTokens,
}
