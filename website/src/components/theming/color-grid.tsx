import { accentColors, neutrallightColors } from '@park-ui/panda-preset'
import { Stack } from 'styled-system/jsx'
import { match } from 'ts-pattern'
import { Text } from '~/components/ui/text'
import { ColorPalette } from './color-palette'

interface Props {
  type: 'neutrallight' | 'accent'
}

export const ColorGrid = (props: Props) => {
  const { type } = props
  const colors = match(type)
    .with('neutrallight', () => neutrallightColors)
    .with('accent', () => accentColors)
    .exhaustive()

  return (
    <Stack className="not-prose" gap="5">
      {colors.map((color) => (
        <Stack key={color} gap="1.5">
          <Text textStyle="sm" textTransform="capitalize" color="fg.default">
            {color}
          </Text>
          <ColorPalette color={color} />
        </Stack>
      ))}
    </Stack>
  )
}
