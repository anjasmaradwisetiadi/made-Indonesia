// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const exampleSlice = createSlice({
    name: 'example',
    initialState:{ 
        example: null,
        createResponse: null,
        detailResponse: null,
        updateResponse: null,
        deleteResponse: null,
        loading: false,
    },
    reducers: {
      exampleReducer(state, payload) {
        state.example = payload.payload
      },
      createResponseReducer(state, payload){
        state.createResponse = payload.payload
      },
      getDetailResponseReducer(state, payload){
        state.detailResponse = payload.payload
      },
      updateResponseReducer(state, payload){
        state.updateResponse = payload.payload 
      },
      deleteResponseReducer(state, payload){
        state.deleteResponse = payload.payload
      },
      loadingReducer(state, payload){
        state.loading = payload.payload;
      }
    },
})

export const {
  exampleReducer, 
  createResponseReducer,
  getDetailResponseReducer,
  updateResponseReducer,
  deleteResponseReducer,
  loadingReducer
} = exampleSlice.actions;
export default exampleSlice;