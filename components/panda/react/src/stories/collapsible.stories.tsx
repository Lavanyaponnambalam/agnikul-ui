import type { Meta } from '@storybook/react'
import { Box } from 'styled-system/jsx'
import { Button, Collapsible } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Collapsible',
}

export default meta

export const Basic = () => (
  <Collapsible.Root gap="3">
    <Collapsible.Trigger asChild>
      <Button variant="outline">Toggle</Button>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Box width="sm" bg="accent.default" color="accent.fg" p="4" borderRadius="l3">
        Content
      </Box>
    </Collapsible.Content>
  </Collapsible.Root>
)
