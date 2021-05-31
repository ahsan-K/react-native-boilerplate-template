import {Platform, Dimensions} from 'react-native';

export const BaseUrl = "http://209.105.248.67:9256/api"
export const queryString = (params) => Object.keys(params).map(key => key + '=' + params[key]).join('&');


export const RedColor = "#D92334";
export const StatusBarColor ="#701982";
export const fontWhite ="#fff";
export const OrangeColor ="#FB501C";
export const YellowColor ="#F8B634";
export const CreamColor ="#FFEBD2";
export const lightPink ="#C295B2";
export const PurpleColor = "#834191";
export const DarkStatusBarColor = "#682A75";



export const SWidth = Dimensions.get('window').width;
export const SHeight =  Dimensions.get('window').height;


export const PlatformOS = Platform.OS;

export const HeadingMedium = 15;
export const HeadingSmall = 12;
export const HeadingLarge = 18;
export const HeadingExtraLarge = 28;




