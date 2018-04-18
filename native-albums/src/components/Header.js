import React          from 'react';
import { Text, View } from 'react-native';

// Functional component:
const Header = (props) => {
  const { textStyle } = styles;
  const { viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0,height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

export default Header;
