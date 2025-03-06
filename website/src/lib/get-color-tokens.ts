// import { createSemanticTokens } from '@park-ui/panda-preset/src/theme/semantic-tokens'
import type { Token } from 'styled-system/tokens'
// import { match } from 'ts-pattern'

type Props = {
  type: 'bg' | 'fg' | 'accent' | 'border'
}

type ColorToken = {
  background: Token
  color: Token
  name: string
}

export const getColorTokens = (props: Props): ColorToken[] => {
  const { type } = props
  return []
  // return Object.entries<ColorToken[]>(semanticTokens.colors)
  //   .filter(([key]) => key === type)
  //   .filter(Boolean)
  //   .flatMap(([key, tokens]) =>
  //     Object.keys(tokens)
  //       .filter((token) => !token.startsWith('a') && !Number(token))
  //       .map((token) => ({
  //         name: token,
  //         background: `colors.${key}.${token}` as Token,
  //         color: match<string, Token>(type)
  //           .with('fg', () =>
  //             match<string, Token>(token)
  //               .with('disabled', () => 'colors.fg.default')
  //               .otherwise(() => 'colors.neutrallight.100'),
  //           )
  //           .with('accent', () =>
  //             match<string, Token>(token)
  //               .with('fg', () => 'colors.accent.default')
  //               .otherwise(() => 'colors.accent.fg'),
  //           )
  //           .otherwise(() => 'colors.fg.default'),
  //       })),
  //   )
}

// const semanticTokens = createSemanticTokens({
//   neutrallightColor: 'neutrallight',
//   accentColor: 'neutral',
//   borderRadius: 'sm',
// })
