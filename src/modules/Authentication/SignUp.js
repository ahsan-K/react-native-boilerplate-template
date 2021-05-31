import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,ImageBackground, TextInput, Image,Dimensions, ScrollView } from 'react-native';
import {background_splash, tick, eye} from '../../assets/images/Images'
import Button from '../../components/SolidButton'
import Divider from '../../components/Divider'
import {RedColor} from "../../utils/Constants"
import { useSelector } from 'react-redux';



const SHeight =  Dimensions.get('window').height

const SignUp = ({navigation})=>{
    const [check, setCheck] = React.useState(true)
    const userType = useSelector(state => state.userType.userType)
    return(
        <View style={styles.container}>
            <ImageBackground source={background_splash} style={styles.background}>
                <ScrollView style={styles.childContainer}>
                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                style={{height: 40,color:"black"}}
                                placeholder="First Name"
                                placeholderTextColor={'grey'}
                            />
                        </View>
                        <View style={styles.w20}>
                        </View>
                    </View>
                    <Divider/>

                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                style={{height: 40,color:"black"}}
                                placeholder="Last Name"
                                placeholderTextColor={'grey'}
                            />
                        </View>
                        <View style={styles.w20}>
                        </View>
                    </View>
                    <Divider/>
                    
                    

                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                style={{height: 40,color:"black"}}
                                placeholder="Email"
                                placeholderTextColor={'grey'}
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
                                style={{height: 40,color:"black"}}
                                placeholder="Password"
                                placeholderTextColor={'grey'}
                            />
                        </View>

                        <View style={styles.w20}>
                            <Image source={eye} style={styles.formImages} />
                        </View>
                    </View>
                    <Divider/>


                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                style={{height: 40,color:"black"}}
                                placeholder="Confirm Password"
                                placeholderTextColor={'grey'}
                            />
                        </View>

                        <View style={styles.w20}>
                            <Image source={eye} style={styles.formImages} />
                        </View>
                    </View>
                    <Divider/>

                    <Button 
                        text={"SIGNUP"} 
                        style={{marginTop:20}}
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                        <Text style={{fontFamily:"Roboto-Light", alignSelf:"center", marginTop:20}}>
                            Already have an account? <Text style={{color:RedColor, fontFamily:"Roboto-Medium"}}>LOGIN</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
      </View>
    )
}
export default SignUp;
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
    w100:{
        width:"100%", justifyContent:'center',paddingLeft:5
    },
    w80:{
        width:"80%", justifyContent:'center',paddingLeft:5
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