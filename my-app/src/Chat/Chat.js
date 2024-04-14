import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress,
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
  Avatar,
} from '@chatscope/chat-ui-kit-react';

import { SampleChat, SamplePrompts, SampleResponses } from './demo';
import swal from 'sweetalert';

export default function Chat() {
  const MAX = 20;
  const [steps, setSteps] = useState(1);
  const [promptSteps, setPromptSteps] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  const MoodButton = ({ rating, onClick }) => (
    <button
      data-rating={rating}
      className="mood-btn"
      onClick={() => onClick(rating)}
    />
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000); // 1 second

    // Stop the timer after 5 minutes
    if (seconds >= MAX) {
      swal({
        text: 'Times up! Time to go to the next prompt.',
        buttons: {
          cancel: 'Close',
        },
      });

      clearInterval(timer);

      setTimeout(() => {
        navigate('/topic');
      }, 5000);
    }

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [seconds]);

  let [currentChat, setCurrentChat] = useState([SampleChat[0]]);
  function updateChatMessage(message) {
    let time = Date.now();

    setCurrentChat(prevChat => [
      ...prevChat,
      {
        type: 'message',
        props: {
          model: {
            message: message,
            sentTime: time,
            sender: 'Me',
            direction: 'outgoing',
            position: 'single',
          },
        },
      },
    ]);
  }

  function nextDemoMessage(steps) {
    console.log(steps);
    console.log(steps % 5);
    let time = Date.now();
    let nextItem = {
      type: 'message',
      props: {
        model: {
          message: SampleResponses[steps],
          sentTime: time,
          sender: 'Friend',
          direction: 'incoming',
          position: 'single',
        },
      },
    };
    setCurrentChat(prevChat => [...prevChat, nextItem]);

    if (steps % 5 === 0) {
      setPromptSteps(promptSteps + 1);
      // let sep = {
      //   type: 'seperator',
      //   props: {
      //     content: time,
      //   },
      // };
      // setCurrentChat(prevChat => [...prevChat, sep]);

      let nextItem = {
        type: 'message',
        props: {
          model: {
            message: SamplePrompts[promptSteps],
            sentTime: time,
            sender: 'Friend',
            direction: 'incoming',
            position: 'single',
          },
        },
      };
      setCurrentChat(prevChat => [...prevChat, nextItem]);
    }
  }

  return (
    <Box w="100vw" h="100vh">
      <Progress colorScheme="pink" size="lg" value={seconds} max={MAX} />

      <Menu />
      <MainContainer style={{ width: '100%', height: '100%' }}>
        <ChatContainer>
          <ConversationHeader>
            <Avatar
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              name="Zoe"
            />
            <ConversationHeader.Content
              info="Active 20 secs ago"
              userName="LuckCharms777"
            />

            <ConversationHeader.Actions>
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList id="list">
            {currentChat.map((m, i) =>
              m.type === 'separator' ? (
                <MessageSeparator key={i} {...m.props} />
              ) : (
                <Message key={i} {...m.props} />
              )
            )}
            <Message id="mel" model={{ direction: 'outgoing' }}></Message>
          </MessageList>

          <MessageInput
            placeholder="Type message here"
            onSend={e => {
              console.log(e);
              let message = e;
              let time = Date.now();

              while (1 == 1) {
                let nextItem = SampleChat[steps];
                if (nextItem.type === 'separator') {
                  setSteps(steps + 1);
                  continue;
                }
                break;
              }

              updateChatMessage(e);
              nextDemoMessage(steps);

              setSteps(steps + 1);
            }}
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
        colorScheme="pink"
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
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4}>
              <Link to="/topic">
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="pink"
                  variant="solid"
                >
                  New Chat
                </Button>
              </Link>
              <Box>
                <ConversationList>
                  <Conversation
                    info="Do animals go to heaven?"
                    lastSenderName="Prompt"
                    name="LazerChampion"
                  >
                    <Avatar
                      name="LazerChampion"
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
              colorScheme="pink"
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
