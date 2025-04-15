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
  <Layout title="Vexere">
    <Container>
      <Title>
        Vexere <Badge>2023 - Present</Badge>
      </Title>
      <P>
        Vexere is a comprehensive platform for booking and managing bus, flight, and train tickets. 
        The web application provides users with a seamless experience for searching, comparing, and booking 
        various transportation options across Vietnam.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://vexere.com" target="_blank">
            vexere.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Desktop, Mobile)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Nest.js, PostgreSQL, Docker, Kubernetes, Kafka</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/vexere.png" alt="vexere" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/vex1.png" alt="vexere1" />
        <WorkImage src="/images/works/vex2.png" alt="vexere2" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 