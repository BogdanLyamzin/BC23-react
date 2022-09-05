import {createStore} from "redux";

import reducer from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/*
const createStore = (reducer, initialStore) => {
    const result = reducer(initialStore);
    return result;
}
*/

export default store;


