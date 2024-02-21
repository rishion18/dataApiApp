import mongoose, { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    title:{
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    sold: {
        type: Boolean
    },
    dateOfSale: {
        type: Date
    },
})

const transactions = model('transactions', transactionSchema);

export default transactions;