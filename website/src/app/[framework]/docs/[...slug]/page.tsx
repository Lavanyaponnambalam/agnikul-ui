import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Box, Container, Stack } from 'styled-system/jsx'
import { DocumentationBadges } from '~/components/docs/documentation-badges'
import { MDXContent } from '~/components/mdx-content'
import { DocsFooter } from '~/components/navigation/docs/docs-footer'
import { TableOfContent } from '~/components/navigation/table-of-content'
import { Heading } from '~/components/ui/heading'
import { Prose } from '~/components/ui/prose'
import { Text } from '~/components/ui/text'
import { getSidebarGroups } from '~/lib/docs'
import { getServerContext } from '~/lib/server-context'
import { capitalize } from '~/lib/string-utils'

interface Props {
  params: Promise<{ framework: string; slug: string[] }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const currentPage = getPageBySlug(params.slug, params.framework)
  const nextPage = getNextPage(params.slug)
  const prevPage = getPrevPage(params.slug)

  const serverContext = getServerContext()
  serverContext.framework = params.framework
  serverContext.component = params.slug[1]

  const framework = capitalize(params.framework)

  if (currentPage) {
    return (
      <Container display="flex" py="12" gap="8" justifyContent="center">
        <Stack gap="16" px={{ base: '0', xl: '8' }} width="full">
          <Prose css={{ maxWidth: '45rem', mx: 'auto', width: '100%' }}>
            <Heading as="h1" fontWeight="bold">
              {currentPage.id === 'introduction' ? 'Welcome to AGNI UI' : currentPage.title}
            </Heading>
            <Text className="lead" color="fg.muted" mb="6">
              {currentPage.id === 'introduction'
                ? `A ${framework} Component Library built on Ark UI and Panda CSS.`
                : currentPage.description}
            </Text>
            <DocumentationBadges framework={params.framework} href={currentPage.docs} />
            <MDXContent code={currentPage.code} />
          </Prose>
          <DocsFooter nextPage={nextPage} prevPage={prevPage} />
        </Stack>
        <Box flexGrow="1" width="full" maxW="14rem" display={{ base: 'none', xl: 'block' }}>
          <Box position="fixed">
            <TableOfContent entries={currentPage.toc} />
          </Box>
        </Box>
      </Container>
    )
  }
  return notFound()
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params
  const page = getPageBySlug(params.slug)
  const framework = capitalize(params.framework)

  if (page) {
    const description =
      page.id === 'introduction'
        ? `A ${framework} Component Library built on Ark UI and Panda CSS.`
        : page.description
    return {
      title: page.title,
      description,
      alternates: {
        canonical: `https://park-ui.com/${params.framework}/docs/${params.slug.join('/')}`,
      },
    }
  }
  return {}
}

const pages = getSidebarGroups().flat()

export const generateStaticParams = () =>
  ['react', 'solid', 'vue'].flatMap((framework) =>
    pages.map((page) => ({ framework, slug: page.slug.split('/') })),
  )

const getPageBySlug = (slug: string[], framework?: string) => {
  if (framework) {
    return pages.find(
      (page) =>
        page.slug === slug.join('/') && (page.framework === '*' || page.framework === framework),
    )
  }
  return pages.find((page) => page.slug === slug.join('/'))
}

const getNextPage = (slug: string[]) => {
  const index = pages.findIndex((page) => page.slug === slug.join('/'))
  return pages[index + 1]
}

const getPrevPage = (slug: string[]) => {
  const index = pages.findIndex((page) => page.slug === slug.join('/'))
  return pages[index - 1]
}
