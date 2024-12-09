import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routerCountry from "./src/routes/country.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/country/", routerCountry);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
