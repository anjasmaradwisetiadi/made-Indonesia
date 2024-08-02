// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const reviewTestSlice = createSlice({
    name: 'reviewTest',
    initialState:{ 
        reviewTest: null,
        runningTime: (localStorage.getItem("timer") ? parseInt(localStorage.getItem("timer"), 10) : 300),
        statusSubmit: false,
        savedFormResponse: (localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")) : {}),
        setStep: (localStorage.getItem("step") ? parseInt(localStorage.getItem("step"), 10) : 10),
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
      setStatusSubmitReducer(state, payload){
        state.statusSubmit = payload.payload
      },
      savedResponseReducer(state, payload){
        let data = payload.payload
        if(data){
            state.savedFormResponse = {
                ...state.savedFormResponse,
                ...data,
            };
        } else {
            state.savedFormResponse = {}
        }
      },

      setStepReducer(state, payload){
        state.setStep = payload.payload
      }
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
  setStepReducer,
  setStatusSubmitReducer,
} = reviewTestSlice.actions;
export default reviewTestSlice;