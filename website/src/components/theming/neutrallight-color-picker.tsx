'use client'
import { type NeutrallightColor, neutrallightColors } from '@park-ui/panda-preset'
import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioButtonGroup } from '~/components/ui/radio-button-group'
import { Text } from '~/components/ui/text'

interface Props {
  neutrallightColor: NeutrallightColor
  onValueChange: (value: NeutrallightColor) => void
}

export const NeutrallightColorPicker = (props: Props) => {
  const { neutrallightColor, onValueChange } = props

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Neutral Color
      </Text>
      <RadioButtonGroup.Root
        value={neutrallightColor}
        size="sm"
        variant="outline"
        display="grid"
        gap="1.5"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) => onValueChange(e.value as NeutrallightColor)}
      >
        {neutrallightColors.map((neutrallight, id) => (
          <RadioButtonGroup.Item
            key={id}
            value={neutrallight}
            _checked={{
              borderColor: 'border.outline',
              boxShadow: '0 0 0 1px var(--colors-border-outline)',
            }}
            justifyContent="flex-start"
          >
            <RadioButtonGroup.ItemControl />
            <RadioButtonGroup.ItemText textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${neutrallight}.900`),
                }}
              />
              {neutrallight}
            </RadioButtonGroup.ItemText>
            <RadioButtonGroup.ItemHiddenInput />
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root>
    </Stack>
  )
}
