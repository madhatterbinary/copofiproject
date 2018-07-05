import * as actionTypes from './actionTypes';
import axios from '../../axios-songs';

export const getSongsSuccess = ( songs ) => {

    return {
        type: actionTypes.GET_SONGS_SUCCESS,
        songs: songs,
        active: true
    };
};

export const getSongsFail = ( error ) => {
    return {
        type: actionTypes.GET_SONGS_FAIL,
        error: error
    };
};

export const getSongsStart = () => {
    return {
        type: actionTypes.GET_SONGS_START
    };
};

export const getSongs = () => {
    return dispatch => {
        dispatch(getSongsStart());
        axios.get( 'us/rss/topalbums/limit=100/json')
            .then( res => {
                const fetchedSongs = [];
                for ( let key in res.data.feed.entry ) {
                    fetchedSongs.push( {
                        ...res.data.feed.entry[key],
                        id: key
                    } );
                }
                dispatch(getSongsSuccess(fetchedSongs));
            } )
            .catch( err => {
                dispatch(getSongsFail(err));
            } );
    };
};
