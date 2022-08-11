import express from 'express';
import { add, find, getAll, remove, update } from './../controllers/expense.js';

const expenseRouter = express.Router();

//GET
expenseRouter.get('/getAll', getAll)
expenseRouter.get('/find/:id', find)

//POST
expenseRouter.post('/add', add)
expenseRouter.post('/remove', remove)
expenseRouter.post('/update', update)


export default expenseRouter;