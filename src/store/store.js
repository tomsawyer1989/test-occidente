import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '../reducers/clientSlice';

export const store = configureStore({
    reducer: {
        client: clientReducer
    }
});