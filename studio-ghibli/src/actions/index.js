import axios from 'axios';


export const FETCH_FILMS_START = 'FETCH_FILMS_START';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE';    


export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_FILMS_START });
        axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_FILMS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log('There was an error in axios call', error);
            dispatch({ type: FETCH_FILMS_FAILURE, payload: error.resonse.status })
        })
    }
}