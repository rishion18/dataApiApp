import mongoose from "mongoose";
import { initialiseData } from "../controllers/transactions.controllers.js";

export const connectToDbAndInitialise = async () => {
    try {
        const {connection} = await mongoose.connect(`mongodb+srv://kvkvraj83:${process.env.database_password}@cluster0.iszx2ts.mongodb.net/dataApiApp?retryWrites=true&w=majority`);

        const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = await response.json();

        await initialiseData(data);
      
    if(connection){
        console.log(`Connected to database ${mongoose.connection.host} and initialized data`);

    }    


    } catch (error) {
        console.error('Error connecting to database and initializing data:', error);
    }
};
