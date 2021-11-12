import React , {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Touchable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');
    return(
        <View>
            <TextInput style={styles.input} placeholder="Add Item..." onChangeText={setText}/>
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20}/>Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        height:50,
        padding:5,
        fontSize:16,
    },
    btn:{
        backgroundColor: '#e6f0f2',
        padding:9,
        margin:5,
    },
    btnText:{
        color: '#283d8b',
        fontSize:20,
        textAlign:'center',
    }
});

export default AddItem;