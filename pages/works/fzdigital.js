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
  <Layout title="FZ Digital F&B">
    <Container>
      <Title>
        FZ Digital F&B <Badge>2020 - 2023</Badge>
      </Title>
      <P>
        A comprehensive digital solution for the F&B industry, featuring a kiosk menu ordering system 
        and a management platform. The system streamlines operations, enhances customer experience, 
        and provides powerful tools for restaurant management, inventory control, and staff management.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web / Kiosk</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, React Native, Node.js, AWS, MongoDB, PostgreSQL</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/fzdigital.png" alt="fzdigital" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/fz1.png" alt="fzdigital1" />
        <WorkImage src="/images/works/fz2.png" alt="fzdigital2" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 