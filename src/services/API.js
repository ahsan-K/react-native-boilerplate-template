import axios from 'axios';
import tofd from 'tofd';
import {BaseUrl} from '../utils/Constants';
axios.defaults.baseURL = BaseUrl

axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.common['accept'] = 'application/json'


const post = (url, params = {}, headers) => axios.post(url, params);
const get = (url, params = {}) => axios.get(url, { params });

const setAuthHeader = async token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
};



export default {
  axios,
  setAuthHeader,
  auth: {
    login: (params, headers) => post('/user/Login', params, ),
    signup: (params, headers) => post('/signup', params),
    logout: params => get('/auth/logout', params),
    forgetPassword: params => post(`/forgot-password`, params),
    social: params => post(`/social-login`, params),
  },
};
