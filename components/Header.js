import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({title}) => {
return(
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
      height:50,
      padding:5,
      backgroundColor:'#283d8b',
  },
  text:{
    color:'#ffff',
    fontSize:23,
    textAlign:'center',
  },
});

export default Header;