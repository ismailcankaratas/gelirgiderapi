import express from 'express';
import { auth, login, logout } from "../controllers/auth.js";

const authRouter = express.Router();

// GET
authRouter.get("/", auth);
authRouter.get("/logout", logout);

// POST
authRouter.post("/login", login);


export default authRouter;