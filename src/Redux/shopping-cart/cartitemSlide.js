import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { setDoc , doc , updateDoc , deleteDoc} from "firebase/firestore";
import { db } from "../../Firebase/Firebase"
import { getCartList } from "./cartitemaction"

const initialState = {
    value : "",
   
}


export const FetchCart = createAsyncThunk ( 
    'cart/get',

    async (uid) => {
           return await  getCartList(uid)
    }

)


export const cartitemSlice = createSlice({
    name : 'cartItems',
    initialState,
    
    reducers : {
        addItem : (state , action) => {

            const newItem = action.payload
        
            const duplicate = findItem(state.value , newItem)

            if(duplicate.length > 0) {

                state.value = delItem(state.value , newItem)
                 
                state.value = [
                    ...state.value,
                    {
                        name : newItem.name,
                        price : newItem.price,
                        slug : newItem.slug,
                        rate : newItem.rate,
                        quantity : duplicate[0].quantity + newItem.quantity,
                        image : newItem.image,
                        userId : newItem.userId,
                        order : newItem.order
                        
                    }
                ]
            } else {
        
                   state.value = [
                       ...state.value,
                       {
                           ...newItem,
                           
                       }
                   ]
            }

                 state.value.forEach(item =>(
                    setDoc(doc(db, "cart" , newItem.userId+" "+item.name) ,  item)
                 ))
        },

        updateItem :  (state , action) => {
             const updateItem = action.payload

             const duplicate = findItem(state.value , updateItem)

             if(duplicate.length > 0 ) {

                state.value = delItem(state.value , updateItem)

                state.value = [...state.value, {...updateItem}]
             }
   
            updateDoc(doc(db, "cart" , updateItem.userId+" "+updateItem.name) , {
                quantity : updateItem.quantity
            })
             
        },
        
        deleteItem : (state , action) => {
               const deleteItem = action.payload

               state.value = deleteItem

            //    deleteDoc(doc(db, "cart" , deleteItem.userId+" "+deleteItem.name))
        }

        
    },
    
    extraReducers : (builder) => {
        builder
        .addMatcher(
            ({type}) => type.startsWith('cart') && type.endsWith('/fulfilled'),
            (state , action) => {state.value = action.payload}
        )
    }
    
})

const findItem = (arr , item) => arr.filter(e => e.slug === item.slug)
const delItem = (arr , item) => arr.filter(e => e.slug !== item.slug)
export const {addItem , updateItem ,  deleteItem} = cartitemSlice.actions
export default cartitemSlice.reducer