import {configureStore} from "@reduxjs/toolkit";
import {useReducer} from "./reducers/user";

const Store = configureStore({
    reducer:{
        user: useReducer,
    }
});

export default Store;