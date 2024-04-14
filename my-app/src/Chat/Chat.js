import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
  Box,
  VStack,
  Avatar,
} from '@chakra-ui/react';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  AddIcon,
  SettingsIcon,
} from '@chakra-ui/icons';

import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageSeparator,
  ConversationHeader,
  InfoButton,
  VideoCallButton,
  ConversationList,
  Conversation,
} from '@chatscope/chat-ui-kit-react';

import { SampleChat } from './demo';

export default function Chat() {
  const [steps, setSteps] = useState(0);

  return (
    <Box w="100vw" h="100vh">
      <Menu />
      <MainContainer style={{ width: '100%', height: '100%' }}>
        {/* Set width and height to 100% */}
        <ChatContainer>
          <ConversationHeader>
            <Avatar
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              name="Zoe"
            />
            <ConversationHeader.Content
              info="Active 20 secs ago"
              userName="LuckyCharms777"
            />

            <ConversationHeader.Actions>
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
            {SampleChat.slice(0, steps).map((m, i) =>
              m.type === 'separator' ? (
                <MessageSeparator key={i} {...m.props} />
              ) : (
                <Message key={i} {...m.props} />
              )
            )}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={() => setSteps(steps + 1)}
          />
        </ChatContainer>
      </MainContainer>
    </Box>
  );
}

function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpen}
        icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        position="fixed"
        left={isOpen ? '340px' : '4px'}
        top="50%"
        transform="translateY(50%)"
        zIndex="10"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4}>
              <Button leftIcon={<AddIcon />} colorScheme="blue" variant="solid">
                New Chat
              </Button>
              <Box>
                <ConversationList>
                  <Conversation
                    info="Yes i can do it for you"
                    lastSenderName="Lilly"
                    name="Lilly"
                  >
                    <Avatar
                      name="Lilly"
                      src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
                    />
                  </Conversation>
                </ConversationList>
              </Box>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Link to="/">
              <Button variant="outline" mr={3} onClick={onClose}>
                Logout
              </Button>
            </Link>
            <Button
              leftIcon={<SettingsIcon />}
              colorScheme="blue"
              variant="solid"
            >
              Settings
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
