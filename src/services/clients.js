import { optionsGET } from './config/options';
import { getClient } from './config/endpoints';
import { clientRequested, clientSuccess, clientError } from '../reducers/clientSlice';

export const fetchClient = () => async (dispatch) => {
    dispatch(clientRequested());
    try {
        const response = await fetch(getClient(), optionsGET());
        const data = await response.json();
        
        dispatch(clientSuccess(data));
        return data;
    } catch (error) {
        console.log(error);

        dispatch(clientError('Server error'));
        throw error;
    }
}