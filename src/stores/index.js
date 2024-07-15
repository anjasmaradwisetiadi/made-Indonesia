import {configureStore} from '@reduxjs/toolkit'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import counterSlice from './counter/counter';
import exampleSlice from './example/example';
import fakeApiSlice from './FakeApi/FakeApi';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
     }),
    reducer:{
        example: exampleSlice.reducer,
        counter: counterSlice.reducer,
        fakeApi: fakeApiSlice.reducer,
        
        // login: loginReducer
    }
})

store.subscribe(()=>{
    console.log("STORE CHANGE:", store.getState())
})

export default store;
