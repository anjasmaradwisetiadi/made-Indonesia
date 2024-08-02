// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const reviewTestSlice = createSlice({
    name: 'reviewTest',
    initialState:{ 
        runningTime: (localStorage.getItem("timer") ? parseInt(localStorage.getItem("timer"), 10) : 180),
        statusSubmit: (localStorage.getItem("isSubmit") ? JSON.parse(localStorage.getItem("isSubmit")) : false),
        savedFormResponse: (localStorage.getItem("formData") ? JSON.parse(localStorage.getItem("formData")) : {}),
        setStep: (localStorage.getItem("step") ? parseInt(localStorage.getItem("step"), 10) : 10),
        recordReviewTest: [],
        loading: false,
    },
    reducers: {
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
      },

      getResponseRecorderReducer(state, payload){
        let collectData = [];
        const dataStore = payload.payload.dataStore
        const object = payload.payload.dataSaveLocal

        for (const property in object) {
            dataStore.forEach((item, index)=>{
                if (item?.name === property){
                    const payload = {
                        question: item.question,
                        choices: object[property]
                    }
                    collectData.push(payload)
                }
            })
        }
        state.recordReviewTest = collectData
      }
    },
})

export const {
  reviewTestReducer, 
  runningTimeReducer,
  savedResponseReducer,
  setStepReducer,
  setStatusSubmitReducer,
  getResponseRecorderReducer,
} = reviewTestSlice.actions;
export default reviewTestSlice;