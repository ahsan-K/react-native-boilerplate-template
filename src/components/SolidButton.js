import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default ({onPress, style, text, textStyle, loading})=>{
    return(
        <TouchableOpacity style={[styles.container, {...style}]} onPress={onPress}>
            {!loading ? <Text style={[styles.text, {...textStyle}]}>{text}</Text>
            :
            <ActivityIndicator size="small" color="#fff" />}
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container:{
        width:"80%", 
        alignSelf:'center', 
        height:40, 
        backgroundColor:"#D92334",
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        fontFamily:"Roboto-Bold",
        fontSize:15, 
        color:"white"
    }
})