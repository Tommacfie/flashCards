import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FlashCardContextProvider } from './context/FlashCardsContext';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlashCardContextProvider>
      <App />
    </FlashCardContextProvider>
  </React.StrictMode>
);
