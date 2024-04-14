// import React, { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/Login';
import SignUp from './setup/SignUp';
import Chat from './Chat/Chat';
import { ChakraProvider } from '@chakra-ui/react';

import Topics from './Topic/topic';
import Load from './Load/load';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/topic" element={<Topics />} />
          <Route path="/load" element={<Load />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
