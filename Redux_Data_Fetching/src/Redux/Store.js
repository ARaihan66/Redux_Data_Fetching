import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../Redux/DataSlice';

const store = configureStore({
    reducer: {
        dataReducer
    }
})

export default store;