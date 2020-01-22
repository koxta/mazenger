import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Input, Icon } from 'react-native-elements'
import SignInButton from './components/SignInButton';
import Colors from '../../Assets/Colors';
import Firebase from '../../Services/Firebase'


export default () => {
  const [userName,setUserName] = useState('');

  const validateUsername = () : boolean => {
    return true;
  }

  const onSigninPress = () => {
    if(validateUsername()){
      
    }
  }

  return(
    <View style={styles.container}>
      <Input
        placeholder={'მომხმარებლის სახელი'}
        leftIcon={<Icon color={Colors.Text} name={'user'} type={'antdesign'} size={18} />}        
        style={{borderBottomColor:'white'}}
        placeholderTextColor={Colors.Text}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainer}
        onChangeText={(text)=>setUserName(text)}
      />
      <SignInButton onPress={onSigninPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:Colors.Primary
  },
  inputStyle:{
    color:Colors.Text,
    fontSize:18
  },
  inputContainer:{
    margin:15,
    marginHorizontal:30
  }
  
});