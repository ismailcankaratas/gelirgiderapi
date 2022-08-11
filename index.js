import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import incomeRouter from './routes/income.js';
import expenseRouter from './routes/expense.js';

dotenv.config();

const app = express();

const corsOptions = {
    origin: "https://gelirgidertakip.42web.io/"
}

// middleware
app.use(cors(corsOptions))
app.use(express.json());
// api
app.use("/api/income", incomeRouter)
app.use("/api/expense", expenseRouter)

// custom middleware
function auth(req, res, next) {
    if (req.query.admin === "true") {
        next();
    } else {
        res.send('Auth is requrired...');
    }
}

// server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})