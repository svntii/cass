import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Container,
  Center,
  Select,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ETHNICITY = [
  'White',
  'Black',
  'Hispanic',
  'Asian',
  'Native American',
  'Middle Eastern',
  'Pacific Islander',
  'Other',
];
const RELIGION = [
  'Christian',
  'Muslim',
  'Hindu',
  'Buddhist',
  'Jewish',
  'Sikh',
  'Atheist',
  'Agnostic',
  'Other',
];

export default function SignUp() {
  const [setup, setSetup] = useState(0);

  const nextStep = () => {
    if (setup === 2) {
      return;
    }
    setSetup(setup => setup + 1);
  };

  switch (setup) {
    case 0:
      return <NotreDameIntro nextStep={nextStep} />;
    case 1:
      return <IdentityIntro nextStep={nextStep} />;
    case 2:
      return <DoneIntro nextStep={nextStep} />;
    default:
      return null;
  }
}

function IdentityIntro({ nextStep }) {
  const [age, setAge] = useState('');
  const [faith, setFaith] = useState('');
  const [ethnicity, setEthnicity] = useState([]);

  return (
    <Center h="100vh">
      <Container maxW="container.sm">
        <VStack spacing={4}>
        <Heading paddingBottom={4}>User Information</Heading>
        <img src="/agora_logo.png" alt="Photo" width="100" height="auto" />
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
          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </FormControl>
          <FormControl id="ethnicity">
            <FormLabel>Religion</FormLabel>
            <Select
              placeholder="Select a faith"
              value={faith}
              onChange={e => setFaith(e.target.value)}
            >
              {RELIGION.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="ethnicity">
            <FormLabel>Ethnicity</FormLabel>
            <Select
              placeholder="Select Ethnicity"
              value={ethnicity}
              onChange={e =>
                setEthnicity(
                  Array.from(e.target.selectedOptions, option => option.value)
                )
              }
              isMultiple={true}
            >
              {ETHNICITY.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>

          <Button colorScheme="pink" size="lg" width="full" onClick={nextStep}>
            Next
          </Button>
        </VStack>
      </Container>
    </Center>
  );
}

function NotreDameIntro({ nextStep }) {
  const [dorm, setDorm] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [hometown, setHometown] = useState('');

  return (
    <Center h="100vh">
      <Container maxW="container.sm" textAlign="center">
        <VStack spacing={4}>
          <img src="/agora_logo.png" alt="Photo" width="100" height="auto" />
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
          <Box justifySelf={'flex-start'}>
            <Heading paddingBottom={4}>Let's get cheesy....</Heading>
            <Text>Your Notre Dame Intro</Text>
          </Box>
          <FormControl id="dorm">
            <FormLabel>Dorm</FormLabel>
            <Input
              type="text"
              value={dorm}
              onChange={e => setDorm(e.target.value)}
            />
          </FormControl>

          <FormControl id="year">
            <FormLabel>Year</FormLabel>
            <Input
              type="number"
              value={year}
              onChange={e => setYear(e.target.value)}
            />
          </FormControl>
          <FormControl id="major">
            <FormLabel>Major</FormLabel>
            <Input
              type="text"
              value={major}
              onChange={e => setMajor(e.target.value)}
            />
          </FormControl>
          <FormControl id="hometown">
            <FormLabel>Hometown</FormLabel>
            <Input
              type="text"
              value={hometown}
              onChange={e => setHometown(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="pink" size="lg" width="full" onClick={nextStep}>
            Next
          </Button>
        </VStack>
      </Container>
    </Center>
  );
}

function DoneIntro({ nextStep }) {
  return (
    <Center h="100vh">
      <Container maxW="container.sm">
        <VStack spacing={4}>
        <img src="/agora_logo.png" alt="Photo" width="100" height="auto" />
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
          <Heading>All Done :)</Heading>
          <Text>
            Now that we know each other, lets introduce you to others 🥁
          </Text>
          <Link to="/topic">
            <Button
              colorScheme="pink"
              size="lg"
              width="300px"
              onClick={nextStep}
            >
              Chat Right Now 🚀
            </Button>
          </Link>
        </VStack>
      </Container>
    </Center>
  );
}
