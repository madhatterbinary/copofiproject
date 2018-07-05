import * as actionTypes from './actionTypes';
import axios from '../../axios-songs';

export const getSearchSongsSuccess = ( search ) => {

    return {
        type: actionTypes.GET_SEARCH_SONGS_SUCCESS,
        search: search,
        active: false
    };
};

export const getSearchSongsFail = ( error ) => {
    return {
        type: actionTypes.GET_SEARCH_SONGS_FAIL,
        error: error
    };
};

export const getSearchSongsStart = () => {
    return {
        type: actionTypes.GET_SEARCH_SONGS_START
    };
};
export const emptySearchActive = ( active ) => {
    return {
        type: actionTypes.EMPTY_SEARCH_ACTIVE,
        active: active
    };
};

export const getSearchSongs = (name) => {
    
    return dispatch => {
        dispatch(getSearchSongsStart());
        axios.get( `search?term=${name}&limit=100&entity=song`)
            .then( res => {
                const fetchedSearchSongs = [];
                for ( let key in res.data.results ) {
                    fetchedSearchSongs.push( {
                        ...res.data.results[key],
                        id: key
                    } );
                }
                dispatch(getSearchSongsSuccess(fetchedSearchSongs));
            } )
            .catch( err => {
                dispatch(getSearchSongsFail(err));
            } );
    };
};
