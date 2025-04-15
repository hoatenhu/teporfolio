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
  <Layout title="Vexere Mobile App">
    <Container>
      <Title>
        Vexere Mobile App <Badge>2023 - Present</Badge>
      </Title>
      <P>
        The Vexere Mobile App brings the convenience of booking bus, flight, and train tickets to users&apos; 
        mobile devices. With a user-friendly interface and real-time updates, users can easily search, 
        book, and manage their travel plans on the go.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>App Store</Meta>
          <Link
            href="https://apps.apple.com/vn/app/vexere-book-bus-flight-train/id1183279479"
            target="_blank"
          >
            Vexere (iOS) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link
            href="https://play.google.com/store/apps/details?id=com.vexere.vexere"
            target="_blank"
          >
            Vexere (Android) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS / Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Node.js, PostgreSQL, Redis, Elasticsearch</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/vpassenger.png" alt="vpassenger" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/vpassenger1.png" alt="vpassenger1" />
        <WorkImage src="/images/works/vpassenger2.png" alt="vpassenger2" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 