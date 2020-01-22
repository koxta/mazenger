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


export default () => {

  const { state, dispatch } = useContext(Store);

  const { user } = state;

  useEffect(()=>{
    Firebase.getMessages((message:Message)=>{
      console.log(message);
    });
  },[])

  const onSend = (text:String) => {
    console.log(text);
    console.log(user)
  }

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}  
    >
      <SafeAreaView>
      <MessageInput onSend={(text)=>onSend(text)}/>
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