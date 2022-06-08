import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Klic Merchant">
    <Container>
      <Title>
        Klic merchant <Badge>2022 -</Badge>
      </Title>
      <P>
        The application allows shops, restaurants, and coffee shops,.. to
        control orders, estimate completion times, and connect with customers
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
          <Link href="https://apps.apple.com/vn/app/klic-merchant/id1603202003">
            Klic Merchant (iOS) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.anttech.Klicclient">
            Klic Merchant (Android) <ExternalLinkIcon mx="2px" />
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
      <WorkImage src="/images/works/klicmerchant.png" alt="klicmerchant" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/klicmmain.png" alt="menkiki" />
        <WorkImage src="/images/works/klicmproduct.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
