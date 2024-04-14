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
          <img src="/agora_logo.png" alt="Photo" width="200" height="auto" />
          <Heading>Welcome to Agora!</Heading>
          <Text as="i">Connect through transformative conversations</Text>
          <Link to="/login">
            <Button colorScheme="pink" size="lg">
              Start Chatting
            </Button>
          </Link>
          <video
            autoPlay
            muted
            loop
            style={{
              position: 'fixed',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: '-1',
            }}
          >
            <source src="/chat_video.mp4" type="video/mp4" />
          </video>
        </VStack>
      </Container>
    </Center>
  );
}

export default Landing;
