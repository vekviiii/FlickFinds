import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        list:[
            {
                id:1
            },
            {
                id:2
            }
        ]
    },
    reducers:{

    }
})

export default moviesSlice.reducer