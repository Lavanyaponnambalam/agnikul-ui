'use client'
import type { AccentColor, NeutrallightColor } from '@park-ui/panda-preset'
import { Box, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens/index.mjs'
import { Text } from '~/components/ui/text'
import { useTheme } from '~/lib/use-theme'

interface Props {
  color?: NeutrallightColor | AccentColor
  withLegend?: boolean
}

export const ColorPalette = (props: Props) => {
  const { color, withLegend } = props
  const { accentColor } = useTheme()

  // Define the new color scale
  const shades = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  return (
    <Grid className="not-prose" columns={{ base: 6, sm: 12 }} gap="1">
      {shades.map((shade) => (
        <Stack key={shade} gap="1">
          <Box
            width="full"
            maxH="12"
            borderRadius="l2"
            boxShadow="xs"
            aspectRatio={1}
            style={{
              background: token.var(`colors.${color ?? accentColor}.${shade}`),
            }}
          />
          {withLegend && (
            <Text textStyle="xs" textAlign="center">
              {shade}
            </Text>
          )}
        </Stack>
      ))}
    </Grid>
  )
}
