import express from "express";
import {
  getCurrentWeather,
  getForecast,
} from "../controllers/weatherController.js";

const router = express.Router();

router.get("/", getCurrentWeather);

router.get("/forecast", getForecast);

export default router;