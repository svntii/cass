import {
  ConversationList,
  Conversation,
  Avatar,
} from '@chatscope/chat-ui-kit-react';

const eliotIco = 'https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg';

const SampleConversation = (
  <ConversationList
    style={{
      height: '340px',
    }}
  >
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
    <Conversation
      info="Yes i can do it for you"
      lastSenderName="Joe"
      name="Joe"
    >
      <Avatar
        name="Joe"
        src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
      />
    </Conversation>
    <Conversation
      info="Yes i can do it for you"
      lastSenderName="Emily"
      name="Emily"
    >
      <Avatar
        name="Emily"
        src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
      />
    </Conversation>
    <Conversation
      info="Yes i can do it for you"
      lastSenderName="Kai"
      name="Kai"
    >
      <Avatar
        name="Kai"
        src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
      />
    </Conversation>
    <Conversation
      info="Yes i can do it for you"
      lastSenderName="Akane"
      name="Akane"
    >
      <Avatar
        name="Akane"
        src="https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg"
      />
    </Conversation>
    <Conversation
      info="Yes i can do it for you"
      lastSenderName="Eliot"
      name="Eliot"
    >
      <Avatar
        name="Eliot"
        src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
      />
    </Conversation>
    <Conversation
      info="Yes i can do it for you"
      lastSenderName="Zoe"
      name="Zoe"
    >
      <Avatar
        name="Zoe"
        src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
      />
    </Conversation>
    <Conversation
      info="Yes i can do it for you"
      lastSenderName="Patrik"
      name="Patrik"
    >
      <Avatar
        name="Patrik"
        src="https://chatscope.io/storybook/react/assets/patrik-yC7svbAR.svg"
      />
    </Conversation>
  </ConversationList>
);

const SampleChat = [
  {
    type: 'separator',
    props: {
      content: 'Saturday, 30 November 2019',
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'single',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'single',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'first',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'normal',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'normal',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'last',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'first',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'normal',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'normal',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'outgoing',
        position: 'last',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'first',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'last',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    type: 'separator',
    props: {
      content: 'Saturday, 31 November 2019',
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'single',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'single',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'first',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'normal',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'normal',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'last',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'first',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'normal',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'normal',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'outgoing',
        position: 'last',
      },
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'first',
      },
      avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Hello my friend',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'last',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
];

export { SampleChat };
