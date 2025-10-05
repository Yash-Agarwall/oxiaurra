import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {colors} from '../../src/styles'
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Pressable>
        <Text style={styles.pressableNav}>Skip</Text>
      </Pressable>
      <Text style={styles.header}>Welcome to Oxiauraa</Text>
      <TextInput
        placeholder="Email / Phone number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <View style={styles.child}>
        <Pressable>
          <Text style={styles.pressableNav}>Forgot Password?</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  header: {
    fontSize:25,
    fontWeight:"bold",
    fontFamily:"Berkshire Swash",
  },
  input: {
    borderWidth:1,
    borderColor:colors.border,
    padding:20,
    borderRadius:10,
    width:"80%",

  },
  pressableNav: {
    color:colors.fontLight,
    textDecorationLine:'underline',
  },
  button:{
    backgroundColor:colors.primary,
    padding:18,
    borderRadius:10,
    // flexGrow:1, 

  },
  buttonText:{
    fontWeight:"bold",
    fontSize:14,
    color:"white",
    
  }
});
