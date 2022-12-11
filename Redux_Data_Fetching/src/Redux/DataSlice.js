import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk('DataSlice/fetchData', () => {
    axios.get('')
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
    initialStateL: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers: (builder) => {

    }

}

})

export const { request, responseData, error } = dataSlice.actions;
export default dataSlice.reducers;