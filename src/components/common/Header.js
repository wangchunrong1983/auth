import React from 'react';
import {View, Text} from 'react-native';
import { gray } from 'color-name';

const Header = (props) => {

    return (
        <View style={Styles.viewStyle}>
            <Text style={Styles.textStyle}>{props.headerText}</Text>
        </View>
    ) 
}

const Styles = {
  textStyle: {
    fontSize: 24
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 20,
    marginTop: 20,
    elevation: 2,
    position:'relative',
    shadowColor:'#000',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.3
  }
};


export {Header};