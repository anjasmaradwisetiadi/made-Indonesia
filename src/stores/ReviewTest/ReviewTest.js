// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const reviewTestSlice = createSlice({
    name: 'reviewTest',
    initialState:{ 
        reviewTest: null,
        runningTime: 0,
        statusSubmit: false,
        savedResponse: (localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")) : null),
        loading: false,
    },
    reducers: {
      reviewTestReducer(state, payload) {
        state.reviewTest = payload.payload
      },
      runningTimeReducer(state, payload){
        if(payload.payload > 0 ){
           state.runningTime = payload.payload
        } else {
            state.runningTime = 0
            state.statusSubmit = true
        }
      },
      setStatusSubmit(state, payload){
        state.statusSubmit = payload
      },
      savedResponseReducer(state, payload){
        let e = payload.payload
        state.savedResponse = {
            ...state.savedResponse,
            [e.target.name]: e.target.value,
        };
      },
    //   updateResponseReducer(state, payload){
    //     state.updateResponse = payload.payload 
    //   },
    //   deleteResponseReducer(state, payload){
    //     state.deleteResponse = payload.payload
    //   },
    //   loadingReducer(state, payload){
    //     state.loading = payload.payload;
    //   }
    },
})

export const {
  reviewTestReducer, 
  runningTimeReducer,
  savedResponseReducer,
} = reviewTestSlice.actions;
export default reviewTestSlice;