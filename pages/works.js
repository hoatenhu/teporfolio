import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChefClub from '../public/images/works/chefclub.png'
import thumbVexere from '../public/images/works/vexere.png'
import thumbFZDigital from '../public/images/works/fzdigital.png'
import thumbVPassenger from '../public/images/works/vpassenger.png'
import thumbAu from '../public/images/works/au.png'
import thumbTika from '../public/images/works/tika.png'
import thumbKlicClient from '../public/images/works/klicclient.png'
import thumbKlicMerchant from '../public/images/works/klicmerchant.png'
import thumbi4plus from '../public/images/contents/design.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Vexere
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="vex" title="Vexere" thumbnail={thumbVexere}>
            Web application for Vexere - a platform for booking and managing bus, flight, and train tickets.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="vpassenger"
            title="Vexere Mobile App"
            thumbnail={thumbVPassenger}
          >
            Mobile application for Vexere - a platform for booking and managing bus, flight, and train tickets.
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        FZ Digital F&B
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="fzdigital" title="FZ Digital F&B" thumbnail={thumbFZDigital}>
            Kiosk menu ordering app makes ordering more convenient for customers, as well as helping restaurants save labor costs.
            Middle app for restaurant management, inventory management, employee expenses and salaries.
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

      <Divider my={6} />


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
