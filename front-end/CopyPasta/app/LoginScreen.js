import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const LoginScreen = () => {
  const handlePress = () => console.log(code)
  const [code, setText] = useState('');
  return (
    <SafeAreaView style={styles.containerLogin}>
      <View style= {{flex:.25}}/>
      <Text style= {styles.containerHeader}>
        CopyPasta
      </Text>
      <Text style= {styles.containerSubHeader}>
        sharing. made easy.
      </Text>
      <KeyboardAvoidingView>
      <TextInput style={styles.textInput}
        placeholder="CopyPasta code here!"
        onChangeText={code => setText(code)}
        defaultValue={LoginScreen.code}
      />
      </KeyboardAvoidingView>
      <View style= {{flex:.2}}/>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
      <View style= {{flex:.2}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    backgroundColor: "#01003b",
    flex: 1,
    alignSelf: "stretch",
    justifyContent:"center",
    alignItems:"center",
  },
  containerHeader: {
    flex: .2,
    fontSize:48,
    color: "#fff",
  },
  containerSubHeader: {
    flex: .25,
    fontSize:22,
    color: "#fff",
  },
  textInput: {
    textAlign: "center",
    alignSelf: "center",
    width: 300,
    maxHeight: 100,
    backgroundColor: "#fff",
    color: "#01003b",
    fontSize:26,
    flex: .75,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#01003b",
    fontSize: 24,
  },

});

export default LoginScreen;
