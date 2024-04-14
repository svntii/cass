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

function LoginPage() {
  return (
    <Center h="100vh">
      <Container maxW="container.sm">
        <VStack spacing={4}>
          <Box p={5}>
            <Center p={2}>
              <Heading>Agora</Heading>
            </Center>
            <Text as="i">Connect, Share, and Explore Ideas 💡</Text>
          </Box>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Link to="/topic">
            <Button colorScheme="purple" size="lg" width="610px">
            Log In
            </Button>
          
          </Link>
          <Link to="/signup">
            <Button colorScheme="purple" size="lg" width="610px">
              Sign Up
            </Button>
          </Link>
          <Text align="start" fontSize="sm" color="gray.500">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </Text>
          <Link to="#">
            <Text color="red" size="lg" width="610px" textAlign="center">
              Forgot Password?
            </Text>
          </Link>
        </VStack>
      </Container>
    </Center>
  );
}

export default LoginPage;