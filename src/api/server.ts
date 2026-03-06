
import express from "express";
import rateRoutes from "./routes/rate.routes.js";
import { errorHandler } from "../core/errors/errors.util.js";

const app = express();
app.use(express.json());
app.use("/api", rateRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});