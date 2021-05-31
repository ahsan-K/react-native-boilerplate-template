import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({styles})=>{
    return(
        <View style={{borderBottomColor: "#D92334",borderBottomWidth: 0.5, ...styles}}/>
    )
}