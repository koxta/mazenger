import React, { useEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Firebase from '../../Services/Firebase';
import { Message, User } from '../../Models';

export default () => {

  useEffect(()=>{
    Firebase.getMessages((message:Message)=>{
      console.log(message);
    });
  },[])
  
  const buttonPress = () => {
    const user = new User();
    user.userName = 'gmaziashvili';
    user.uid='qergeaerg342qqe4ga';
    Firebase.send('hi',user);
  }

  return(
    <View style={styles.container}>
      <Text>{'Chat Screen'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  }
});