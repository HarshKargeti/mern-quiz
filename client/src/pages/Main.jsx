import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';



function Main(){

    return(
        <AppProvider>
      <App />
    </AppProvider>
    )
}

export default Main

