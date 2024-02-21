import express from "express";
import { config } from "dotenv";
import cors from 'cors';
import { connectToDbAndInitialise } from "./DbConfig/dbConfig.js";
import transactionRoutes from './routes/transactions.routes.js'
config();

const app = express();

app.use(cors());

app.use('/api/transactions' , transactionRoutes);

app.use('*' , () => {
    console.log('page not found')
});

const PORT = process.env.PORT || 5001;


app.listen(PORT , async() => {
    connectToDbAndInitialise();
    console.log(`listening at port ${PORT}`)
})