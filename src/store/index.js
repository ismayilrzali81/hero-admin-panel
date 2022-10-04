import filters from  "../components/heroesFilters/filtersSlice";
import { configureStore } from '@reduxjs/toolkit';
import heroes from '../components/heroesList/heroesSlice';



const stringMiddleware = () => (next) => (action) => {
    
    if(typeof action == 'string') {
        return {
            type:action
        }
    }
    return next(action)
}

// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args)

//     const oldDispatch  = store.dispatch

//     store.dispatch = (action) => {
//         if(typeof action == 'string') {
//             return {
//                 type:action
//             }
//         }
//         return oldDispatch(action)
//     }
//     return store
// }


// const store = createStore(combineReducers({heroes , filters}), compose(applyMiddleware(stringMiddleware , ReduxThunk ) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const store = configureStore({
    reducer:{heroes , filters} ,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware) ,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;