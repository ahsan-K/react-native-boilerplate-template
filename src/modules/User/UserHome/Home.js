import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, ImageBackground, Text} from 'react-native';
import {
  PlatformOS,
  StatusBarColor,
} from '../../../utils/Constants';
import Header from '../../../components/Header';
import styles from './styles';
import {background_splash, logo} from '../../../assets/images/Images';
import Button from '../../../components/BorderButton';
import { useSelector } from 'react-redux';

const UserHome = ({navigation}) => {
    const userType = useSelector(state => state.userType.userType)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        <Header 
            backDisabled={PlatformOS != "android"}
            PlatformOS={PlatformOS} 
            backIcon={false}
            onLeftIconPress={()=>{}}
            RightComonent={()=>(<></>)}
            searchBar={false}
            title="HOME"
            navigation={navigation} showWhiteBackIcon/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={background_splash} style={styles.container}>
            <Text>Home</Text>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  export default UserHome;