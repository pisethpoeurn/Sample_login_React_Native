import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native'

export class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      confirm_password:'',
    };
  }
  
  onLogin() {
    const { password, confirm_password} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
     if(reg.test(this.state.email) == false){
         Alert.alert('Email is incorrect');
    }else if(reg.test(this.state.email) == true){
         Alert.alert('Email is correct');
    }
    
    if(password !== confirm_password){
      Alert.alert('Your confirm password does not match!')
    }else if (password == confirm_password){
      Alert.alert('Your password is correct');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Register Form</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'E-Mail'}
          style={styles.input}
        />
        
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.confirm_password}
          onChangeText={(confirm_password) => this.setState({ confirm_password })}
          placeholder={'Confirm_Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:10,
    marginBottom: 10,
    marginTop:10,
  },
});