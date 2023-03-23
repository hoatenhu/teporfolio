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
  <Layout title="Another Universe">
    <Container>
      <Title>
        Another Universe <Badge>2022 - </Badge>
      </Title>
      <P>
        Another Universe is a metaverse that digitally replicates real planets
        on astronomical maps, allowing users to select and own virtual stars,
        then design buildings, roads according to their desire and purpose, grow
        their own stars and avatars through resource mining and various
        missions, go to distant space, explore new and unknown planets.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://au.milkywaygalaxy.io/" target="_blank">
            Another Universe
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link
            href="https://play.google.com/store/apps/details?id=space.multiverse.anotheruniverse&hl=en_GB&gl=US"
            target="_blank"
          >
            Another Universe (iOS) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link
            href="https://play.google.com/store/apps/details?id=space.multiverse.anotheruniverse&hl=en_GB&gl=US"
            target="_blank"
          >
            Another Universe (Android) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS / Android</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, React-native, ThreeJS, Web3</span>
          <span>, NodeJS, MySQL, Binance Smart Chain</span>
        </ListItem>
      </List>
      <AspectRatio>
        <iframe
          title="another-universe"
          src="https://www.youtube.com/embed/mUO5gIQS0xU"
          allowFullScreen
        />
      </AspectRatio>
      <SimpleGrid columns={2} gap={2} mt={5}>
        <WorkImage src="/images/works/au4.png" alt="au4" />
        <WorkImage src="/images/works/au1.png" alt="au1" />
        <WorkImage src="/images/works/au2.png" alt="au2" />
        <WorkImage src="/images/works/au3.png" alt="au3" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
