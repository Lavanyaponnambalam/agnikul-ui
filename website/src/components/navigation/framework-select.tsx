'use client'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Icon } from '~/components/ui/icon'
import { Select, createListCollection } from '~/components/ui/select'

export const FrameworkSelect = () => {
  const router = useRouter()
  const params = useParams<{ framework: string }>()
  const pathname = usePathname()
  const collection = createListCollection({
    items: [{ label: 'React', value: 'react' }],
  })

  return (
    <Select.Root
      defaultValue={[params.framework ?? 'react']}
      onValueChange={(e) => router.push(pathname.replace(params.framework, e.value[0]))}
      size={{ base: 'md', md: 'sm' }}
      collection={collection}
      variant="ghost"
      positioning={{ placement: 'bottom-end', sameWidth: true }}
    >
      <Select.Control py={{ base: '1', md: '0' }}>
        <Select.Trigger
          css={{
            color: 'fg.muted',
            fontWeight: 'medium',
            _hover: { color: 'fg.default', '& :where(svg)': { color: 'fg.default' } },
          }}
        >
          <Select.ValueText placeholder="Select a Framework" />
          <Icon color="fg.muted" size="sm">
            <ChevronDownIcon />
          </Icon>
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content minW="28">
          {collection.items.map((item) => (
            <Select.Item key={item.value} item={item}>
              <Select.ItemText>{item.label}</Select.ItemText>
              <Select.ItemIndicator>
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
