import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { setDoc , doc , updateDoc , deleteDoc} from "firebase/firestore";
import { db } from "../../Firebase/Firebase"
import {getCheckoutList } from "./checkoutitemaction"

const initialState = {
    value : [],
   
}


export const FetchCheckout = createAsyncThunk ( 
    'checkout/get',

    async (uid) => {
           return await  getCheckoutList(uid)
    }

)


const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    return month + "/" + day + "/" + year;
  };


export const checkoutitemSlice = createSlice({
    name : 'checkoutItem',
    initialState,
    
    reducers : {
        addItem : (state , action) => {

            const newItem = action.payload

           
           
            state.value = newItem


            console.log(state.value)
                
                    setDoc(doc(db, "checkout" , newItem[0].userId+" "+ new Date()) ,  Object.assign({time : getFormattedDate(new Date()), userId : newItem[0].userId} ,  {value : state.value}) )
                 
           state.value.map(item => (
            deleteDoc(doc(db, "cart" , item.userId+" "+item.name))
           ))

           
            
         
  
        },
        
    },
    
    extraReducers : (builder) => {
        builder
        .addMatcher(
            ({type}) => type.startsWith('checkout') && type.endsWith('/fulfilled'),
            (state , action) => {state.value = action.payload}
        )
    }
    
})


export const {addItem} = checkoutitemSlice.actions
export default checkoutitemSlice.reducer