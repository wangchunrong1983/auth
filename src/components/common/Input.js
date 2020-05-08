import React from 'react';
import {TextInput,View,Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return(
      <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>{label}</Text>
          <TextInput value={value} 
          onChangeText={onChangeText} 
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          />
      </View>
  )
};

const styles = {
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection:'row',
      alignItems:'center'
    },
    inputStyle: {
      color:'#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 20,
      lineHeight: 23,
      flex: 2
    },
    labelStyle: {
      fontSize: 20,
      paddingLeft: 20,
      flex: 1,
    }
};

export {Input};