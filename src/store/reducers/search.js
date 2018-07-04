import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    search: [],
    loading: null,
    active: true
};

const getSearchSongsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const getSearchSongsSuccess = ( state, action ) => {
    return updateObject( state, {
        search: action.search,
        loading: false
    } );
};

const getSearchSongsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const emptySearchActive = ( state, action ) => {    
    return updateObject( state, { active: action.active } );
};



const reducerSearch = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_SEARCH_SONGS_START: return getSearchSongsStart( state, action );
        case actionTypes.GET_SEARCH_SONGS_SUCCESS: return getSearchSongsSuccess( state, action );
        case actionTypes.GET_SEARCH_SONGS_FAIL: return getSearchSongsFail( state, action );
        case actionTypes.EMPTY_SEARCH_ACTIVE: return emptySearchActive( state, action );
        
        default: return state;
    }
};

export default reducerSearch;
