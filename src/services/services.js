import React from 'react';
import { Alert, Platform } from "react-native";
import API from "./API";
import LocalStorage from "../utils/LocalStorage";
export async function login(param, dispatch){
    const paramMaker = (x) =>{
        return Object.keys(x)
        .map((key) => `${key}=${encodeURIComponent(x[key])}`)
        .join('&');
    }
    try {
        const request = await API.auth.login(paramMaker(param))
        console.log(request, ' request ssss')
        if(!request.status == 200) return
        await LocalStorage.storeData('@authData', request.data)
        API.setAuthHeader(request.data.access_token)
        dispatch(request.data)
    } catch (error) {
        if(error.response.status !== 200){
           alert(error.response.data.message) 
        }
        console.log(error.response.data.message, ' error login')
    }
}