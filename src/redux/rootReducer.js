import {combineReducers} from 'redux'
import {userReducer} from "./userReducer";
import {phoneReducer} from "./phoneReducer"
import {cartReducer} from "./cartReducer";
import {galleryReducer} from "./galleryReducer";

export const rootReducer = combineReducers({
    userReducer,
    phoneReducer,
    cartReducer,
    galleryReducer,
})