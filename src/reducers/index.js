import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import taskReducer from './task';
import uiReducer from './ui';
import cart from './cart';

const rootReducer =  combineReducers({
    task: taskReducer,
    ui: uiReducer,
    cart,
    form: formReducer,
});

export default rootReducer;