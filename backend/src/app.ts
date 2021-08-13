import dotenv from "dotenv"
dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })
import express from "express";
import router from "./router";

const app = express();

app.use(router);
app.listen(3333);

export default app;