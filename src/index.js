import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Store/Context';
import firebase from './firebase/config';
import Context from './Store/Context';
import Themes from './Store/ThemeContext';

ReactDOM.render(
    <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
        <Themes>
        <App />
        </Themes>
        </Context>
    </FirebaseContext.Provider>
    </React.StrictMode>
, 
document.getElementById('root'));
