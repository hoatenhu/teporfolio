import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbConfigWifi from '../public/images/contents/config.jpeg'
import thumbFixInclude from '../public/images/contents/fixinclude.png'
import thumAuto from '../public/images/contents/auto.jpeg'
import thumbDesign from '../public/images/contents/design.jpg'
import thumbControlLed from '../public/images/contents/led.jpg'
import thumbSht10 from '../public/images/contents/sht10.jpg'

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
            thumbnail={thumbConfigWifi}
            href="https://www.youtube.com/watch?v=7quaN0E-GcY&ab_channel=Te"
          />
          <GridItem
            title="ESP32-IDF: Fix #include error in VS Code vs ESP-IDF file"
            thumbnail={thumbFixInclude}
            href="https://www.youtube.com/watch?v=uOq4U5B-hWk&t=31s&ab_channel=Te"
          />
          <GridItem
            title="ESP32-IDF: test Autoconnect webserver Captive Portal example"
            thumbnail={thumAuto}
            href="https://www.youtube.com/watch?v=Tunxs0FKR0o&t=6s&ab_channel=Te"
          />
          <GridItem
            title="Design UI IoT for ESP32 project. This can help farmers take care of automatic farm"
            thumbnail={thumbDesign}
            href="https://www.youtube.com/watch?v=BIEz4EbM-DA&t=5s&ab_channel=Te"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ESP32-IDF: Control LED via MQTT and update to Webserver"
            thumbnail={thumbControlLed}
            href="https://www.youtube.com/watch?v=3rNjURxppTE&t=27s"
          />
          <GridItem
            title="ESP32-IDF: Display SHT10 data via HTTP with station mode, turn lights on and pull LED brightness.."
            thumbnail={thumbSht10}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
