import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    songs: [],
    loading: null,
    active:true

};

const getSongsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const getSongsSuccess = ( state, action ) => {
    return updateObject( state, {
        songs: action.songs,
        active: action.active,
        loading: false
    } );
};

const getSongsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducerSong = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_SONGS_START: return getSongsStart( state, action );
        case actionTypes.GET_SONGS_SUCCESS: return getSongsSuccess( state, action );
        case actionTypes.GET_SONGS_FAIL: return getSongsFail( state, action );
        default: return state;
    }
};

export default reducerSong;
