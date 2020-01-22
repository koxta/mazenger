import React, { useState } from 'react';
import {
  TextInput, StyleSheet, View, TouchableOpacity, Text
} from 'react-native';
import Colors from '../../../Assets/Colors';
import { Icon } from 'react-native-elements';

export default ({onSend}) => {
  const [text,setText] = useState('');
  const submit = () => {
    if(text === '') return;
    onSend(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder={'შეიყვანეთ ტექსტი'}
        placeholderTextColor={Colors.Text}
        multiline
        onChangeText = {(text) => setText(text)}
      />
      <TouchableOpacity style={styles.sendTouchable} onPress={submit}>
        <Icon
          type={'material-community'}
          name={'send'}
          color={Colors.Text}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    margin:10,
  },
  inputContainer: {
    borderColor: Colors.Text,
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal:10,
    color:Colors.Text,
    fontSize:20,
    flex:1,
    paddingHorizontal:5
  },
  sendTouchable:{
    height:40,
    width:40,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  }
})