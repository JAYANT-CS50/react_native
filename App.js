import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import NameInput  from  './components/NameInput';
import NameItem  from  './components/NameItem';

function App( ) {


  const [myEnteredText, setMyEnteredText] = useState('');
  const [names, setNames] = useState([]);


  return (
    <View style={styles.container}>
      <NameInput myEnteredText={myEnteredText} setMyEnteredText={setMyEnteredText} names={names} setNames={setNames}/>
      <NameItem names={names} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 35,
  },

});

export default App;
