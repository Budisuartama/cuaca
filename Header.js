import React from 'react';
import { Text, View } from 'react-native';

const Header = () =>{
  return (
    <View style={styles.contHeader}>
      <Text style={styles.textHeader}>Perkiraan Cuaca</Text>
    </View>
  );
};
const styles = {
  contHeader: {
    backgroundColor: '#FF8F00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: 80,
    position: 'relative'
  },
  textHeader: {
    fontSize: 20,
    color: 'white'
  }
};


export default Header;
