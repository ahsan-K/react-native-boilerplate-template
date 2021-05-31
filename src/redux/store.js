import { configureStore } from '@reduxjs/toolkit'
import userType from './userType';
import auth from './slices/authSlice';



export default configureStore({
  reducer: {
      userType: userType,
      auth:auth
  }
})