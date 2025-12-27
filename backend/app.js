import express from "express";
import cors from "cors";
import reservationRouter from "./routes/reservationRoute.js";
import { errorMiddleWare } from "./error/error.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Backend is running",req.body);
});

app.use("/api/v1/reservation", reservationRouter);
app.use(errorMiddleWare);

export default app;
