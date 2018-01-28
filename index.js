// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native'; // only access certain property of react-native library
import Header from './src/components/header';

// Create a component
const App = () => {
    return (
        <Header />
    );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);