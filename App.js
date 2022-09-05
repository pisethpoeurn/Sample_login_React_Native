import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, ScrollView } from 'react-native'
import { Signin } from './signin';
import { Signup } from './signup';

const App = () => {
  return(
    <ScrollView>
      {/* <Signin/> */}
      <Signup/>
    </ScrollView>
  );
};

export default App;