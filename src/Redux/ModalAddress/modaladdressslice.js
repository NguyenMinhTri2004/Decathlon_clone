import { createSlice} from "@reduxjs/toolkit";


const initialState = {
     modaladdressvalue : [],
     loading : false
}


export const modaladdressslice = createSlice({
    name : 'modaladdressslice',
    initialState,
    reducers : {

    addModaladdress : (state , action ) => {
            state.modaladdressvalue  = action.payload
        }
    },

   
})

export default modaladdressslice.reducer
export const {addModaladdress} = modaladdressslice.actions



