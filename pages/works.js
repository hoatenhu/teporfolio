import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChefClub from '../public/images/works/chefclub.png'
import thumbAu from '../public/images/works/au.png'
import thumbTika from '../public/images/works/tika.png'
import thumbKlicClient from '../public/images/works/klicclient.png'
import thumbKlicMerchant from '../public/images/works/klicmerchant.png'
import thumbi4plus from '../public/images/contents/design.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Playground
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="au" title="Another Universe" thumbnail={thumbAu}>
            Blockchain application - create a virtual universe where you can own
            your own star, name your own style, create the environment and
            everything around as you want, besides you can also exchange, buy
            and sell stars and planets with everyone.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="tika" title="Tika Tika" thumbnail={thumbTika}>
            Driving application for users - Bringing drunk people home safely.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Ant-tech
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
          <WorkGridItem
            id="klicclient"
            title="Klic"
            thumbnail={thumbKlicClient}
          >
            Ordering application without shipper
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="klicmerchant"
            title="Klic Merchant"
            thumbnail={thumbKlicMerchant}
          >
            Order management application and order completion time estimation
            for merchant
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Mrvina
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="i4plus" thumbnail={thumbi4plus} title="i4plus">
            IoT application to control and monitor farm in a smart way
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
