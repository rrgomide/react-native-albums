//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles; //Points to object styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //define positions on container
    alignItems: 'center',
    height: 60,
    //paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  
  textStyle: {
    //justifyContent: 'center',
    //alignItems: 'center',
    fontSize: 20
  }  
};

//register component, making it available with export
export default Header;
