import {configureStore} from '@reduxjs/toolkit'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import exampleSlice from './example/example';
import reviewTestSlice from './ReviewTest/ReviewTest';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
     }),
    reducer:{
        example: exampleSlice.reducer,
        reviewTest: reviewTestSlice.reducer
    }
})

store.subscribe(()=>{
    console.log("STORE CHANGE:", store.getState())
})

export default store;
