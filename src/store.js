import {configureStore} from '@reduxjs/toolkit'
import customerReducer from './Slice/customerSlice'


export const store = configureStore({
    devTools: true,
    reducer: {
        customers:customerReducer,
    }
})