import { async } from "@firebase/util";
import { createSlice , createAsyncThunk , PayloadAction} from "@reduxjs/toolkit";
import { changeProfile , getProfile } from "./ProfileAction";

const initialState = {
     profile : undefined,
}

export const profileUpdate = createAsyncThunk(
    'profile/update',
     async (params) => {
           const {data ,user} = params
           return await changeProfile(user , data)
          
     }
)


export const fetchProfile = createAsyncThunk(
    'profile/fetch',
     async (uid) => {
           return await getProfile(uid)
     }
)



export const profileSlice = createSlice({
    name : 'profile',
    initialState,
    reducers : {},

    extraReducers : (builder) => {
        builder
           .addMatcher(
               ({type}) => type.startsWith('profile') && type.endsWith('/fulfilled'),
               (state , action) => {state.profile = action.payload}
           )

    }
})

export default profileSlice.reducer
