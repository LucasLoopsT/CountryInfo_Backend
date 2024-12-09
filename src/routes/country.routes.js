import express from "express";
import {
  getAvailableCountries,
  getCountryInfo,
} from "../controllers/countryController.js";

const routerCountry = express.Router();

routerCountry.get("/available", getAvailableCountries);
routerCountry.get("/:countryCode", getCountryInfo);

export default routerCountry;
