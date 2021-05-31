import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserHome from '../modules/User/UserHome/Home'
import LoginScreen from '../modules/Authentication/LoginScreen'
import SignUp from '../modules/Authentication/SignUp'
import ForgotPassword from '../modules/Authentication/ForgotPassword'
import Setting from '../modules/User/Setting/Setting';
import Profile from '../modules/User/Profile/Profile';
import FAQ from '../modules/FAQ/FAQ';
import AboutUs from '../modules/AboutUs/AboutUs';
import PrivacyPolicy from '../modules/PrivacyPolicy/PrivacyPolicy';
import ChangePassword from '../modules/ChangePassword/ChangePassword';


import DrawerView from './Drawer';


function Navigator({setConnetion, isConnected}) {
    const Stack = createStackNavigator();
   
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="UserHome" component={DrawerNavigator} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
        </NavigationContainer>
      )
 
}


const DrawerNavigator = ()=>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator drawerContent={(props)=> <DrawerView {...props}/>} initialRouteName="UserHome">
            <Drawer.Screen name="UserHome" component={UserHome} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="FAQ" component={FAQ} />
            <Drawer.Screen name="AboutUs" component={AboutUs} />
            <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Drawer.Screen name="ChangePassword" component={ChangePassword} />
        </Drawer.Navigator>
    )
}

export default Navigator;