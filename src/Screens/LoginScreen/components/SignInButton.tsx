import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native"
import Colors from '../../../Assets/Colors';

export default ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Text style={styles.text}>შესვლა</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: Colors.Red,
    padding: 5,
    margin: 10,
    borderRadius: 5
  },
  text: {
    color: Colors.Text,
    fontSize: 18,
  }
})