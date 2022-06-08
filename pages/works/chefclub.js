import { Container, Badge, Link, List, ListItem, Flex } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import gif from '../../public/images/chefclub.gif'
import Image from 'next/image'

const Work = () => (
  <Layout title="ChefClub">
    <Container>
      <Title>
        ChefClub <Badge>2022-</Badge>
      </Title>
      <P>
        Application that connects food lovers, with more than 75 million
        followers across multiple social media platforms. more than 500 thousand
        downloads on both iOS and Android.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.chefclub.tv/">
            chefclub.tv <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>App Store</Meta>
          <Link href="https://apps.apple.com/us/app/chefclub-everyone-can-cook/id1423182797">
            Chefclub (iOS) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Google Play</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.chefclub.App&hl=en&gl=US">
            Chefclub (Android) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chefclub.png" alt="chefclub" />
      <Flex justify="center">
        <Image src={gif} alt="loading..." width={200} height={420} />
      </Flex>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
