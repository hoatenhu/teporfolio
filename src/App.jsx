import { useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  Flex,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "./assets/logo/wolf.png";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box bg="tomato" w="100%" p={1} color="black" flexDirection={"row"}>
      {/* <p>hello</p> */}

      <Container>
        <Flex>
          <Image src={logo} w={8} h={8} alt="Silly Wolf" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            // fontFamily="sans-serif"
            fontWeight="700"
            ml={3}
          >
            Như Hoà
          </Text>
        </Flex>
        <Box>
          <Button colorScheme="blue" onClick={() => setCount(count + 1)}>
            What the heck
          </Button>
          <IconButton aria-label="Search database" />
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
              {count}
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
