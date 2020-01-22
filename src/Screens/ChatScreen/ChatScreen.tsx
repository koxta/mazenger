import React, { useEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Platform
} from 'react-native';
import Firebase from '../../Services/Firebase';
import { Message, User } from '../../Models';
import Colors from '../../Assets/Colors';
import MessageInput from './components/MessageInput';


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
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}  
    >
      <SafeAreaView>
      <MessageInput/>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column-reverse',
    backgroundColor:Colors.Primary
  }
});