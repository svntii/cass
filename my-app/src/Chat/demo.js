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
      info="No i cannot do it for you"
      lastSenderName="Bot"
      name="Bot"
    ></Conversation>
    <Conversation info="WHYYYyyyyu" lastSenderName="Joe" name="Joe">
      <Avatar
        name="Joe"
        src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
      />
    </Conversation>
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

const SamplePrompts = [
  'Prompt: What are your thoughts on the afterlife?',
  'Prompt: Was there a time when you questioned your faith?',
  'Prompt: Do you think religion is a force for good or evil?',
];

const SampleResponses = [
  "I believe in the concept of an afterlife, but it's something that's beyond our understanding.",
  "I'm not sure what happens after we die, but I like to think that our consciousness continues in some form.",
  'I was initially worried about my faith as my parents were the ones who made me practice it but after taking theo I gained a deeper appreciation for it',
  "I think the afterlife is a comforting concept for many people, but I personally don't believe in it.",
  'The idea of an afterlife is intriguing, but without concrete evidence, it remains a mystery.',
  "Yes, there have been times when I've questioned my faith, but those moments of doubt have ultimately strengthened my beliefs.",
  "I think it's natural to question one's faith at times. It's part of the journey of self-discovery and spiritual growth.",
  "I've always had a strong faith, but there have been moments of uncertainty and doubt.",
  "Questioning one's faith is a personal matter. For me, it has been a part of my spiritual journey.",
  'I believe religion can be a force for good when it promotes love, understanding, and compassion.',
  "Religion can be a force for both good and evil, depending on how it's interpreted and used by people.",
  "It's not religion itself, but how people use or misuse it that can lead to good or evil outcomes.",
  'Religion has the potential to be a powerful force for good, but it can also be misused for evil purposes.',
];

const SampleChat = [
  {
    props: {
      model: {
        message: 'Prompt: What are your thoughts on the afterlife?',

        sentTime: '15 mins ago',
        sender: 'Bot',
        direction: 'incoming',
        position: 'single',
      },
      //children:,
    },
  },
  {
    props: {
      model: {
        message:
          'I was baptized very early on and have been going to church with my parents since',
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
        message:
          "I've come to realize my faith at 8 years old reading buddist writings",
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
        message: 'Prompt: What do you currently feel about your faith',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'first',
      },
      //avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message:
          'I was initially worried about my faith as my parents were the ones who made me practice it but after taking theo I gained a deeper appreciation for it',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'normal',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    props: {
      model: {
        message:
          'I have a hard time praticing my faith as there is a lack of any places to practice buddism',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'outgoing',
        position: 'normal',
      },
      //avatarSpacer: true,
    },
  },
  {
    props: {
      model: {
        message: 'Prompt: What do you think about the other persons faith',
        sentTime: '15 mins ago',
        sender: 'Eliot',
        direction: 'incoming',
        position: 'last',
      },
      //children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    props: {
      model: {
        message:
          'From what I know buddisim may have different gods and focus on reincarnation, and meditation',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'incoming',
        position: 'first',
      },
      children: <Avatar src={eliotIco} name="Eliot" />,
    },
  },
  {
    props: {
      model: {
        message: 'Catholicism focuses on only one God, and the church is large',
        sentTime: '15 mins ago',
        sender: 'Zoe',
        direction: 'outgoing',
        position: 'normal',
      },
    },
  },
];

export { SampleChat, SampleConversation, SamplePrompts, SampleResponses };
