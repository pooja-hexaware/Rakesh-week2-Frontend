import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "../menu/store/menuslice"
import { createLogger } from 'redux-logger'
import { cartReducer } from '../cart/store/cartslice'

let middlewares = []
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
    })
    middlewares.push(logger)
}

export default configureStore({
    reducer: {
        menu: menuReducer,
        cart:cartReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})