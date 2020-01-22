import React, { useEffect, useContext, useState } from 'react';
import { 
  View, StyleSheet, Text, FlatList
} from 'react-native';
import { User } from '../../../Models';
import Colors from '../../../Assets/Colors';
import { Store } from '../../../Store/Store';

export default () => {
  const { state } = useContext(Store);
  const { messages } = state;
  const [messageData,setMessageData] = useState([]);
  useEffect(()=>{
    console.log(messages)
    setMessageData(messages)
  },[messages])

  return(
    <View style={styles.container}>
      <FlatList
        style={{
          transform:[
            {scaleY:-1}
          ]
        }}        
        data={messageData}
        renderItem={(item) => <MessageComponent text={item.item.message} userName={item.item.userName}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column-reverse',
  }
})


const MessageComponent = ({text,userName}) => {
  return(
    <View style={{
      margin:10,
      borderColor:Colors.Text,
      borderWidth:2,
      borderRadius:5,
      alignSelf:'baseline',
      padding:5,
      transform:[
        {scaleY:-1}
      ]
    }}>
      <Text style={{
        position:'absolute',
        top:-10,
        left:-10,
        color:Colors.Text,
        backgroundColor:Colors.Primary,
        paddingHorizontal:5
      }}>{userName}</Text>
      <Text style={{
        color:Colors.Text,
        fontSize:20
      }}>{text}</Text>
    </View>
  )
}