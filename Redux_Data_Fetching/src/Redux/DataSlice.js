import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('DataSlice/fetchData', () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((error) => {
            console.log(error)
        })
})
const dataSlice = createSlice({
    name: "DataSlice",
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(builder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        });

        builder.addCase(builder.rejected, (state, action) => {
            state.isLoading = false;
            state.data = [];
            state.error = action.error.message;
        });


    }
})

export default dataSlice.reducer;