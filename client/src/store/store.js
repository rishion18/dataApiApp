import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionReducer.js";

export default configureStore({
   reducer:{
    Events: transactionReducer
   }
})