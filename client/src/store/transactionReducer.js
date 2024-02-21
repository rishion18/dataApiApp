import { createSlice } from "@reduxjs/toolkit";

const transactionReducerSlice = createSlice({
    name: 'transactionReducerSlice',
    initialState:{
        renderList:[],
        originalRenderList:[],
        allTransactions:[],
        pieChartData:{},
        BarGraphData:{}

    },
    reducers:{
       setRenderList: (state , action) => {
        state.renderList = action.payload;
       },
       setAllTransactions:(state , action) => {
        state.allTransactions = action.payload;
       },
       setOriginalRenderList:(state , action) => {
        state.originalRenderList = action.payload;
       },
       setPieChartData:(state , action) => {
        state.pieChartData = action.payload;
       },
       setBarGraphData:(state , action) => {
        state.BarGraphData = action.payload;
       }
    }
})

export const{
        setRenderList ,
        setAllTransactions , 
        setOriginalRenderList,
        setBarGraphData,
        setPieChartData
    } = transactionReducerSlice.actions;

export default transactionReducerSlice.reducer;