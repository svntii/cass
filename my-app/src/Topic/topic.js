// Login.js
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Container,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  FaPrayingHands,
  FaGlobe,
  FaTransgenderAlt,
  FaUniversalAccess,
} from 'react-icons/fa';

function Topics() {
  return (
    <Center h="100vh">
      <Container maxW="container.sm">
        <VStack spacing={6}>
          <img src="/agora_logo.png" alt="Photo" width="100" height="auto" />
          <Box p={1}>
            <Center p={3}>
              <Heading>Pick a Topic</Heading>
            </Center>
            {/* <Text as="i">Pick a Topic</Text> */}
          </Box>

          <Link to="/load">
            <Button
              colorScheme="purple"
              size="lg"
              width="610px"
              leftIcon={<FaPrayingHands />}
            >
              Religion
            </Button>
          </Link>
          <Link to="/load">
            <Button
              colorScheme="purple"
              size="lg"
              width="610px"
              leftIcon={<FaGlobe />}
            >
              Culture
            </Button>
          </Link>
          <Link to="/load">
            <Button
              colorScheme="purple"
              size="lg"
              width="610px"
              leftIcon={<FaTransgenderAlt />}
            >
              Gender
            </Button>
          </Link>
          <Link to="/load">
            <Button
              colorScheme="purple"
              size="lg"
              width="610px"
              leftIcon={<FaUniversalAccess />}
            >
              Accessibility
            </Button>
          </Link>
          <Text textAlign="center" fontSize="sm" color="gray.500">
            By participating, you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </VStack>
      </Container>
    </Center>
  );
}

export default Topics;
