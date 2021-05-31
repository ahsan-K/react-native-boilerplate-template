import React, {useCallback, useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet,ImageBackground, TextInput, Image, Dimensions, ScrollView, Platform } from 'react-native';
import {background_splash, logo,tick,eye} from '../../assets/images/Images'
import Button from '../../components/SolidButton'
import Divider from '../../components/Divider'
import { CheckBox } from 'react-native-elements';
import {RedColor} from "../../utils/Constants"
import {setUser, setLoading} from '../../redux/slices/authSlice';
import {login} from '../../services/services';
import { useDispatch, useSelector } from 'react-redux';

const SHeight =  Dimensions.get('window').height

const LoginScreen = ({navigation})=>{
    const [showPass, setShowPass] = useState(false)
    const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch()

    const [data, setData] = useState({
        Email:'',
        Password:'',
        RememberMe:false,
        Provider:Platform.OS,
        FcmsToken:'adsdasdasd'
    })
    const handleSubmit = useCallback(() => {
        navigation.navigate("UserHome")
    }, [data]);
    return(
        <View style={styles.container}>
            <ImageBackground source={background_splash} style={styles.background}>
                <ScrollView style={styles.childContainer}>
                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                onChangeText={(x)=>setData({...data, Email:x})}
                                style={{height: 40,color:"black"}}
                                placeholder="Email"
                                placeholderTextColor={'grey'}
                                value={data.Email}
                            />
                        </View>

                        <View style={styles.w20}>
                            <Image source={tick} style={styles.formImages} />
                        </View>
                    </View>
                    <Divider/>

                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                onChangeText={(x)=>setData({...data, Password:x})}
                                style={{height: 40,color:"black"}}
                                placeholder="Password"
                                placeholderTextColor={'grey'}
                                secureTextEntry={!showPass}
                                value={data.Password}
                            />
                        </View>

                        <TouchableOpacity onPress={()=>setShowPass(!showPass)} style={styles.w20}>
                            <Image source={eye} style={styles.formImages} />
                        </TouchableOpacity>
                    </View>
                    <Divider/>

                    <View style={styles.flexRow}>
                        <CheckBox
                            onPress={()=>setData({...data, RememberMe:!data.RememberMe})}
                            center
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checkedColor={RedColor}
                            uncheckedColor={RedColor}
                            checked={data.RememberMe}
                            size={20}
                            containerStyle={{width:"5%", }}
                        />
                        <Text style={styles.rememberText}>Remember Me</Text>
                        <TouchableOpacity style={{width:"40%",justifyContent:'center'}}
                            onPress={()=>navigation.navigate("ForgotPassword")}>
                            <Text
                                style={{
                                fontSize:12,
                                textAlign:"right",
                                fontFamily:"Roboto-Regular",
                                alignSelf:"center", 
                                color:RedColor,
                                textDecorationLine: 'underline'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        loading={loading}
                        onPress={handleSubmit}
                        text={"LOGIN"} 
                        style={{marginTop:20}}
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={{fontFamily:"Roboto-Light", alignSelf:"center", marginTop:20}}>
                            Don't have an account? <Text style={{color:RedColor, fontFamily:"Roboto-Medium"}}>SIGNUP</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
      </View>
    )
}
export default LoginScreen;
const styles=StyleSheet.create({
    container:{
      flex: 1,flexDirection: "column"
    },
    background:{
      flex: 1,resizeMode: "cover",justifyContent: "center"
    },
    logo:{
      alignSelf:'center', height:200, width:150, resizeMode:'contain', transform:[{translateY:-SHeight/44}]
    },
    childContainer:{
        padding:60
    },
    flexRow:{
        flexDirection:'row'
    },
    w80:{
        width:"80%", justifyContent:'center',paddingLeft:10
    },
    w20:{
        width:"20%", justifyContent:'center',
    },
    formImages:{
        height:15, width:15, alignSelf:'center',resizeMode:'contain'
    },
    rememberText:{
        width:"40%", fontSize:12, textAlign:"left",fontFamily:"Roboto-Regular", alignSelf:"center" 
    },
    forgotText:{
        width:"40%", fontSize:12,textAlign:"right",fontFamily:"Roboto-Regular",alignSelf:"center", 
        color:RedColor,textDecorationLine: 'underline'
    }

  })