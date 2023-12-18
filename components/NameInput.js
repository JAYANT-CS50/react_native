import { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';


function NameInput({names, setNames, myEnteredText, setMyEnteredText}){



  function myText(enteredText) {
    setMyEnteredText(enteredText);
  }

  function saveText(){
    console.log(myEnteredText);
    setNames((names) => [...names, myEnteredText]);
  }

  return (
    <View style={styles.dataStyle}>
      <TextInput placeholder='Enter Your Name' style={styles.textStyle} placeholderTextColor='black' onChangeText={myText}/>
      <Button title='Save' style={styles.buttonTextStyle} onPress={saveText}/>
  </View>
)};




const styles = StyleSheet.create({

  dataStyle: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10, // Remove maxWidth: '100%'
    alignItems: 'center', // Center horizontally
    borderColor: 'gray',
    borderBottomWidth: 4
  },
  textStyle: {
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonTextStyle: {
    textAlign: 'center', 
    height: 100,// Center text horizontally and vertically
  },

});

export default NameInput;