import { StyleSheet, View, FlatList, Text } from 'react-native';



function NameItem({names}){
  return (  
    
      <View style={styles.listStyle}>
        <FlatList
          data={names}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Text style={styles.dummyText}> {item}</Text>
          )}
        />
      </View>
  
  
  )};

const styles = StyleSheet.create({

  listStyle: {
    flex: 5,
  },

  dummyText: {
    padding: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },

});

export default NameItem;