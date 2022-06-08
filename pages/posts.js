import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/auto.jpeg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
import thumbFishWorkflow from '../public/images/contents/config.jpeg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ESP32-IDF: Configure WiFi by softAP mode and run Webserver control devices with smartphone"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=7quaN0E-GcY&ab_channel=Te"
          />
          <GridItem
            title="ESP32-IDF: Fix #include error in VS Code vs ESP-IDF file"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=uOq4U5B-hWk&t=31s&ab_channel=Te"
          />
          <GridItem
            title="ESP32-IDF: test Autoconnect webserver Captive Portal example"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=Tunxs0FKR0o&t=6s&ab_channel=Te"
          />
          <GridItem
            title="Design UI IoT for ESP32 project. This can help farmers take care of automatic farm"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=BIEz4EbM-DA&t=5s&ab_channel=Te"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ESP32-IDF: push data to Thingspeak provsion by smartphone"
            thumbnail={thumb500PaidUsers}
            href="https://www.youtube.com/watch?v=ndI3iU1LvTc&ab_channel=Te"
          />
          <GridItem
            title="ESP32-IDF: Display SHT10 data via HTTP with station mode, turn lights on and pull LED brightness.."
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
