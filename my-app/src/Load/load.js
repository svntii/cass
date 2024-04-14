// Login.js
import React,{ useEffect } from 'react';
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

import { FaPrayingHands, FaGlobe, FaTransgenderAlt, FaUniversalAccess } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
   

function Load({ history }) {
    const navigate = useNavigate();
    useEffect(() => {
            const timer = setTimeout(() => {
            navigate('/chat'); 
        }, 5500); // in 7 seconds, move on to a new page
      
        return () => clearTimeout(timer);
    }, [history]);

    return (
        <Center h="100vh">
            <video autoPlay muted loop style={{ positions: 'fixed', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1'}}>
            <source src="load.mp4" type="video/mp4" />
            </video>
        </Center>
    );

 
}

export default Load;