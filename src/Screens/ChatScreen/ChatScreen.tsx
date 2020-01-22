import React, { useEffect, useContext } from 'react';
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
import { Store } from '../../Store/Store';
import Messages from './components/Messages';
import { addMessage } from '../../Models/Message';


export default () => {

  const { state, dispatch } = useContext(Store);

  const { user } = state;

  useEffect(()=>{
    Firebase.getMessages((message:Message)=>{
      console.log(message);
      if(message)
      addMessage(dispatch,message)
    });
  },[])

  const onSend = (text:string) => {
    console.log(text);
    console.log(user);
    Firebase.send(text,user);
  }

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}  
    >
      <SafeAreaView>
      <MessageInput onSend={(text)=>onSend(text)}/>
      </SafeAreaView>
      <Messages/>
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