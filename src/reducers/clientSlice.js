import { createSlice } from '@reduxjs/toolkit';

export const clientSlice = createSlice({
    name: 'client',
    initialState: {
        isLoading: false,
        client: null,
        error: null,
    },
    reducers: {
        clientRequested: (state) => {
            state.isLoading = true;
            state.client = null;
            state.error = null;
        },
        clientSuccess: (state, action) => {
            state.isLoading = false;
            state.client = action.payload;
            state.error = null;
        },
        clientError: (state, action) => {
            state.isLoading = false;
            state.client = null;
            state.error = action.payload;
        }
    },
});

export const selectClient = (state) => state.client.client;

export const { clientRequested, clientSuccess, clientError } = clientSlice.actions;

export default clientSlice.reducer;