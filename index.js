import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import incomeRouter from './routes/income.js';
import expenseRouter from './routes/expense.js';
import dbConfig from "./config/database.js";
import mysql2 from 'mysql2/promise';
import session from 'express-session';
import MySQLStore from 'express-mysql-session';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.js';

// development / production
process.env.NODE_ENV = 'production';

dotenv.config();

var dbOptions = {
    host: dbConfig.host,
    port: 3306,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database
};

const app = express();
var connection = mysql2.createPool(process.env.NODE_ENV === 'production' ? process.env.CLEARDB_DATABASE_URL : dbOptions);
var sessionStore = new MySQLStore({}, connection);

// middleware
app.use(session({
    name: 'sessid',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true, // httpOnly cookilere javascript saldırılarıyla erişilemez.
        secure: !process.env.NODE_ENV === "prouction" // secure: https üzerinde çalışma
    },
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false, // true verirsek kullanıcı session üzerinde değişiklik yapmasa bile kaydediliyor.
    saveUninitialized: false, // session üzerinde değişiklik  yapılmadıysa kaydetme
}))

app.use(cors({
    origin: process.env.NODE_ENV === "prouction" ? 'https://gelirgidertakip.42web.io' : "http://localhost:3000",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())

// api
app.use("/api/income", incomeRouter)
app.use("/api/expense", expenseRouter)
app.use("/api/auth", authRouter);

// server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})