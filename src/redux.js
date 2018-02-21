import {
    applyMiddleware,
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
export function theReducer(initialState, action= {}) {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...initialState,
                loading: true,
                items: []
            };
        case DATA_RESULT:
            return {
                ...initialState,
                loading: false,
                items: action.payload
            };
        default:
            return initialState;
    }
};

export const reducers = combineReducers({
    theReducer,
});

// Store
export function configureStore() {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();