import { createSlice } from '@reduxjs/toolkit';


const dataSlice = createSlice({
    name: "DataSlice",
    initialStateL: {
        isLoading: false,
        data: [],
        error: null
    },
    reducers: {
        request: (state) => {
            state.isLoading = true
            state.data = []
            state.error = null
        },
        responseData: (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.error = null
        },
        error: (state, action) => {
            state.isLoading = false
            state.data = []
            state.error = action.payload
        },

    }

})

export const { request, responseData, error } = dataSlice.actions;
export default dataSlice.reducers