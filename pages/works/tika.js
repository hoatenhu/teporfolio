import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tika Tika">
    <Container>
      <Title>
        Tika Tika <Badge>2022 - </Badge>
      </Title>
      <P>
        Tika Tika helps people get home safer when participating in the happy
        after stressful working hours. The application allows you to call
        someone to drive for you anywhere.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://tikatika.net/en/homepage-eng/homepage-vi-english-2/"
            target="_blank"
          >
            Tika Tika
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link
            href="https://apps.apple.com/vn/app/tika-tika-%E1%BB%A9ng-d%E1%BB%A5ng-l%C3%A1i-xe-h%E1%BB%99/id1541830757"
            target="_blank"
          >
            Tika Tika (iOS) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link
            href="https://play.google.com/store/apps/details?id=com.tikatika.driver"
            target="_blank"
          >
            Tika Tika (Android) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS / Android</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, React-native</span>
          <span>, NodeJS, MongoDB</span>
        </ListItem>
      </List>
      <AspectRatio>
        <iframe
          title="tikatika"
          src="https://www.youtube.com/embed/xXHkACnfWlU"
          allowFullScreen
        />
      </AspectRatio>
      <SimpleGrid columns={1} gap={2} mt={5}>
        <WorkImage src="/images/works/tika1.png" alt="tika1" />
        <WorkImage src="/images/works/tika2.png" alt="tika2" />
        <WorkImage src="/images/works/tika3.png" alt="tika3" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
