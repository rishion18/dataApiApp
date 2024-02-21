import { Router } from "express";
import { getAllTransactions, getBarChartData, getDataForMonth, getPieChartData, pagination, sortByMonth } from "../controllers/transactions.controllers.js";

const router = Router();

router.get('/sortByMonth' , sortByMonth);

router.get('/getDataForMonth' , getDataForMonth);

router.get('/getBarChartData' , getBarChartData);

router.get('/getPieChartData' , getPieChartData);

router.get('/pagination' , pagination);

router.get('/getAllTransactions' , getAllTransactions);

export default router;