import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChefClub from '../public/images/works/chefclub.png'
import thumbWalknote from '../public/images/works/klicclient.png'
import thumbFourPainters from '../public/images/works/klicmerchant.png'
import thumbMenkiki from '../public/images/works/klicmerchant.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="chefclub"
            title="ChefClub"
            thumbnail={thumbChefClub}
          >
            Social media for people who love and are interested in cooking can
            also search for recipes and cookbooks
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="walknote" title="Klic" thumbnail={thumbWalknote}>
            Ordering application without shipper
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Klic Merchant"
            thumbnail={thumbFourPainters}
          >
            Order management application and order completion time estimation
            for merchant
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="i4plus">
            IoT application to control and monitor farm in a smart way
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
