import {
    combineReducers,
    createStore,
} from 'redux';

// Constants
const DATA_LOADING = "DATA_IS_LOADING"
const DATA_RESULT = "DATA_THE_RESULT"

// Initial State
const initialState = {
    loading: false,
    items: []
}

// Actions
export function fetchData(){
    return {
        type: DATA_LOADING,
    }
};

export function fetchDataDone (result) {
    return {
        type: DATA_RESULT,
        payload: result
    }
};

// Reducer
export function theReducer(state = initialState, action = {}) {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...state,
                loading: true,
                items: []
            };
        case DATA_RESULT:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        default:
            return state;
    }
};

export const reducers = combineReducers({
    theReducer,
});

// Store
export function configureStore(initialState) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();