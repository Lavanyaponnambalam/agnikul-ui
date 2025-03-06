import type { SemanticTokens, Tokens } from '@pandacss/dev'

export interface ColorPalette {
  name: string
  tokens: Tokens['colors']
  semanticTokens: SemanticTokens['colors']
}

export interface PresetOptions {
  accentColor: ColorPalette
  neutrallightColor: ColorPalette
  radius: Radius
}

export type AccentColor = (typeof accentColors)[number]
export const accentColors = [
  //'neutral',
  //'neutrallight',
  //'neutraldark',
  'brand',
  //'information',
  //'warning',
  //'success',
  //'error',
  //'tomato',
  //'red',
  //'ruby',
  //'crimson',
  //'pink',
  //'plum',
  //'purple',
  //'violet',
  //'iris',
  //'indigo',
  //'blue',
  //'cyan',
  //'teal',
  //'jade',
  //'green',
  //'grass',
  //'bronze',
  //'gold',
  //'brown',
  //'orange',
  //'amber',
  //'yellow',
  //'lime',
  //'mint',
  //'sky',
] as const

export type NeutrallightColor = (typeof neutrallightColors)[number]
export const neutrallightColors = [
  'neutrallight',
  'neutraldark',
  'information',
  'warning',
  'success',
  'error',
] as const

export type Radius = (typeof radii)[number]
export const radii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
