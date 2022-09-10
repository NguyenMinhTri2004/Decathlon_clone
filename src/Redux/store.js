import {configureStore} from "@reduxjs/toolkit"
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import  cartitemSlice  from "./shopping-cart/cartitemSlide"
import  authSlice  from './Auth/authSlide'
import  profileSlice  from "./Profile/ProfileSlice"
import  addressSlice  from './Address/addressSlice'
import modaladdressslice  from "./ModalAddress/modaladdressslice";
import checkoutitemSlice from './shopping-cart/checkoutitemSlice';
export const store = configureStore({

    reducer : {
        cartItems : cartitemSlice,
        auth :  authSlice ,
        profile : profileSlice,
        address : addressSlice,
        modaladdress : modaladdressslice,
        checkoutItem : checkoutitemSlice
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }),

})