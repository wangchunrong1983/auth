import React, {Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  return(
    
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
       <Text style={styles.textStyle}>{children}</Text>
      </TouchableOpacity>
    
    )
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor:'orange',
    broderWidth:1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5
    },
  textStyle:{
    alignSelf: 'center',
    alignItems:'center',
    color: '#007aff',
    fontWeight:'600',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20
    }
};

export {Button}; 