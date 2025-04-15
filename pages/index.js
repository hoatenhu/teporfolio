import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoYoutube
} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Turning coffee into code in the bustling streets of Saigon 🌟
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lê Như Hoà
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/nhuhoa.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          {`Passionate and results-driven software engineer with 5 years of experience building impactful technology products. Proven track record in delivering scalable solutions across diverse domains including social networking, e-commerce, IoT, food delivery, brokerage, and blockchain. Thrive in fast-paced environments, constantly exploring new technologies and optimizing systems for performance, usability, and maintainability.  `}
          {/* <NextLink
            href="https://www.youtube.com/channel/UCVu25Ocx687p94LQSDabb5Q"
            passHref
          >
            <Link target="_blank">\nI have a Youtube channel</Link>
          </NextLink> */}
        </Paragraph>
        <NextLink
            href="https://www.youtube.com/channel/UCVu25Ocx687p94LQSDabb5Q"
            passHref
          >
            <Link target="_blank">I have a Youtube channel 😝</Link>
          </NextLink>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Thanh Hoa, Viet Nam.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Join Vietnam Naval Academy
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Ant-tech
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Working at 1Derlife Growth
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Currently working at Vexere
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        Technology, Photography, Music, Traveling, Swimming, Audio-Book
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://facebook.com/hoa.nhu.10.3/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @hoa.nhu.10.3
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/hoa.nhu.10.3/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @hoa.nhu.10.3
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/hoa-nhu-103/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @hoa-nhu-103
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.youtube.com/channel/UCVu25Ocx687p94LQSDabb5Q"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoYoutube />}
              >
                @Simplicite
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
