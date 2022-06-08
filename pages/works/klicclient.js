import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Klic">
    <Container>
      <Title>
        Klic <Badge>2022 -</Badge>
      </Title>
      <P>
        The application allows users to place orders and go to the store to pick
        up goods, without having to go through an intermediary. It also helps
        users see the stores around their area and can, especially pre-order and
        schedule orders.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.klic.re/">
            klic.re <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link href="https://apps.apple.com/vn/app/klic-client/id1602660984">
            Klic Client (iOS) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.anttech.Klicclient">
            Klic Client (Android) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS / Android</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React-native</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/klicclient.png" alt="klicclient" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/klicmain.png" alt="klicmain" />
        <WorkImage src="/images/works/kliccart.png" alt="kliccart" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
