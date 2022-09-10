import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {createAddress ,  getAddress} from './addressAction'

const initialState = {
     addresslist : [],
     loading : false
}

export const AddressCreate = createAsyncThunk ( 
      'address/create',

      async (params ,home , department ,  district , ward) => {
        
             return await  createAddress(params ,home , department ,  district , ward)
      }

)

export const FetchAddress = createAsyncThunk ( 
    'address/get',

    async (uid) => {
           return await  getAddress(uid)
    }

)


export const addressSlice = createSlice({
    name : 'address',
    initialState,
    reducers : {

    addAddress : (state , action ) => {
            state.addresslist = [...state.addresslist , action.payload]
        }
    },

    extraReducers : (builder) => {
        builder
        .addMatcher(
            ({type}) => type.startsWith('address') && type.endsWith('/fulfilled'),
            (state , action) => {state.addresslist = action.payload}
        )
    }
})

export default addressSlice.reducer
export const {addAddress} = addressSlice.actions



