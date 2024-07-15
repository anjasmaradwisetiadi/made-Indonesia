// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const fakeApiSlice = createSlice({
    name: 'fakeApi',
    initialState:{ 
        fakeApi: null,
        createResponse: null,
        detailResponse: null,
        updateResponse: null,
        deleteResponse: null,
        loading: false,
    },
    reducers: {
      fakeApiReducer(state, payload) {
        state.fakeApi = payload.payload
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
  fakeApiReducer, 
  createResponseReducer,
  getDetailResponseReducer,
  updateResponseReducer,
  deleteResponseReducer,
  loadingReducer
} = fakeApiSlice.actions;
export default fakeApiSlice;