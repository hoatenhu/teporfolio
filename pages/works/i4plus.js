import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="i4plus">
    <Container>
      <Title>
        i4plus <Badge>2021-</Badge>
      </Title>
      <P>
        IoT application in agriculture, control and monitor activities in farms
        and gardens, with many operating modes: manual, scheduled and flexible
        smart
      </P>
      <UnorderedList my={4}>
        <ListItem>Control farm everywhere with smart phone</ListItem>
        <ListItem>
          Manual control or automatic scheduling, and especially with smart mode
        </ListItem>
        <ListItem>Monitor temperature, humidity, solar radiation</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS / Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React-native, ReactJS, Java, PostgreSQL, Google Cloud </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.mrvina.com/">
            mrvina.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link href="https://apps.apple.com/us/app/id1538782805">
            i4mini (iOS) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.mrfarmmobile2&hl=en_US&gl=US">
            i4mini (Android) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/design.jpg" alt="i4plus" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/i4main.png" alt="i4main" />
        <WorkImage
          src="/images/works/monitorcontrol.png"
          alt="monitorControl"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
