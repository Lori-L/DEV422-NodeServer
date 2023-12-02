import { Router } from "express";
export const indexRouter = Router();

/* GET home page. */
indexRouter.get("/", async (req, res) => {
    res.send('Welcome to the main page');
});