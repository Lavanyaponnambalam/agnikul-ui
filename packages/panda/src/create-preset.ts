import { type SemanticTokens, definePreset } from '@pandacss/dev'
import red from './colors/red'
import type { PresetOptions } from './options'
import { breakpoints } from './theme/breakpoints'
import { conditions } from './theme/conditions'
import { globalCss } from './theme/global-css'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { semanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'
import { createRadii } from './utils/create-radii'

export const createPreset = (options: PresetOptions) => {
  const { accentColor, neutrallightColor, radius } = options

  const standardizeNeutrallightTokens = (tokens: SemanticTokens['colors']) =>
    JSON.parse(JSON.stringify(tokens).replace(new RegExp(neutrallightColor.name, 'g'), 'neutral'))

  return definePreset({
    name: '@park-ui/panda-preset',
    presets: ['@pandacss/preset-base'],
    conditions,
    globalCss: {
      ...globalCss,
      html: {
        colorPalette: accentColor.name,
      },
    },
    theme: {
      extend: {
        breakpoints,
        keyframes,
        recipes,
        slotRecipes,
        textStyles,
        tokens: {
          ...tokens,
          colors: {
            ...tokens.colors,
            red: red.tokens,
            neutrallightColor: neutrallightColor.tokens ?? {},
            [accentColor.name]: accentColor.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            red: red.semanticTokens,
            neutrallight: standardizeNeutrallightTokens(neutrallightColor.semanticTokens),
            [accentColor.name]: accentColor.semanticTokens,
          },
          radii: createRadii(radius),
        },
      },
    },
  })
}
