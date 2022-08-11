import express from 'express';
import { add, find, getAll, remove, update } from './../controllers/income.js';

const incomeRouter = express.Router();

//GET
incomeRouter.get('/getAll', getAll)
incomeRouter.get('/find/:id', find)

//POST
incomeRouter.post('/add', add)
incomeRouter.post('/remove', remove)
incomeRouter.post('/update', update)


export default incomeRouter;