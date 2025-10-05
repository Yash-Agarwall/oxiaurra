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
import { colors } from '../../src/styles';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <Pressable style={[{ justifyContent: 'center', alignItems: 'flex-end' }]}>
        <Text style={[styles.pressableNav, { fontSize: 20 }]}>Skip</Text>
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Oxiauraa</Text>
        <TextInput
          placeholder="Email / Phone number"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.child}>
          <Pressable>
            <Text style={styles.pressableNav}>Forgot Password?</Text>
          </Pressable>
        </View>

        <TouchableOpacity style={styles.buttonFilled}>
          <Text style={styles.buttonTextFilled}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutlined}>
          <Text style={styles.buttonTextOutlined}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'BerkshireSwash-Regular',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  pressableNav: {
    color: colors.fontLight,
    textDecorationLine: 'underline',
    margin: 10,
  },
  buttonFilled: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    // margin:5,
    // flexGrow:1,
  },
  buttonOutlined: {
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextFilled: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  buttonTextOutlined: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.primary,
  },
});
