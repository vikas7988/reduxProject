import {legacy_createStore, applyMiddleware} from 'redux'
import {combineReducers} from "redux"
import productReducer from "./productReducer"
import logger from 'redux-logger'

 
const combReducers = combineReducers({

    product:productReducer
})


const reduxstore = legacy_createStore(combReducers ,applyMiddleware(logger))


export default reduxstore