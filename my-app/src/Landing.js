// Landing.js
import React from 'react';
import {
  Box,
  Button,
  Text,
  Heading,
  VStack,
  Image,
  Container,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Center h="100vh">
      <Container maxW="container.xl" p={4}>
        <VStack spacing={8} py={10} textAlign="center">
          <Heading>Welcome to Agora!</Heading>
          <Link to="/login">
            <Button colorScheme="blue" size="lg">
              Start Chatting
            </Button>
          </Link>
        </VStack>
      </Container>
    </Center>
  );
}

export default Landing;
