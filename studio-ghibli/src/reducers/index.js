import {
    FETCH_FILMS_START,
    FETCH_FILMS_SUCCESS,
    FETCH_FILMS_FAILURE
} from '../actions';

const initialState = {
    films: [],
    isLoading: false,
    error: ''
};

function reducer(state = initialState, action) {
    console.log('reducer', action);

    switch(action.type) {
        case FETCH_FILMS_START:
            console.log(action.type);
            return{
                ...state,
                isLoading: true,
                error: ''
            }           

        case FETCH_FILMS_SUCCESS:
            console.log(action.type, action.payload);
            return {
                ...state,
                isLoading: false,
                films: action.payload,
                error: ''
            }

        case FETCH_FILMS_FAILURE: 
            console.log(action.type, action.payload);
            return {
              ...state,
              isLoading: false,
              error: action.payload
            }

        default:
        return state;
    }        
}

export default reducer;