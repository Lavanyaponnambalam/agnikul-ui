import { type AccentColor, type NeutrallightColor, neutrallightColors } from '@park-ui/panda-preset'
import { Flex, HStack, Stack } from 'styled-system/jsx'
import { type Token, token } from 'styled-system/tokens'
import { match } from 'ts-pattern'
import { Text } from '~/components/ui/text'

interface Props {
  neutrallightColor: NeutrallightColor
}

export const ColorPairings = (props: Props) => {
  const data = neutrallightColors
    .filter((neutrallightColor) => neutrallightColor !== 'neutrallight')
    .map((neutrallightColor) => ({
      neutrallight: neutrallightColor,
      accentcolors: match<NeutrallightColor, AccentColor[]>(neutrallightColor)
        .with('mauve', () => [
          'tomato',
          'red',
          'ruby',
          'crimson',
          'pink',
          'plum',
          'purple',
          'violet',
        ])
        .with('olive', () => ['grass', 'lime'])
        .with('sage', () => ['mint', 'teal', 'jade', 'green'])
        .with('sand', () => ['yellow', 'amber', 'orange', 'brown'])
        .with('slate', () => ['iris', 'indigo', 'blue', 'sky', 'cyan'])
        .otherwise(() => []),
    }))

  return (
    <Stack className="not-prose" gap="6">
      {data.map((item, index) => (
        <Stack key={index} gap="1">
          <Flex
            justifyContent="center"
            alignItems="center"
            p="2"
            style={{
              color: token.var(`colors.${item.neutrallight}.950`),
              background: token.var(`colors.${item.neutrallight}.800`),
            }}
          >
            <Text textTransform="capitalize" textStyle="sm">
              {item.neutrallight}
            </Text>
          </Flex>
          <HStack gap="1" flexWrap="wrap">
            {item.accentcolors.map((color) => (
              <Flex
                key={color}
                flex="1"
                justifyContent="center"
                alignItems="center"
                p="2"
                style={{
                  background: token.var(`colors.${color}.9`),
                }}
              >
                <Text
                  textTransform="capitalize"
                  textStyle="sm"
                  style={{
                    color: token.var(
                      match<string, Token>(color)
                        .with(
                          'amber',
                          'lime',
                          'mint',
                          'sky',
                          'yellow',
                          () => `colors.${item.neutrallight}.light.12`,
                        )
                        .otherwise(() => 'colors.white'),
                    ),
                  }}
                >
                  {color}
                </Text>
              </Flex>
            ))}
          </HStack>
        </Stack>
      ))}
    </Stack>
  )
}
