import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await dbConnection();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
startServer();
