import dotenv from "dotenv";
dotenv.config();

import axios from "axios";

console.log(process.env.WEATHER_API_KEY);

const API_KEY = process.env.WEATHER_API_KEY;

export const getCurrentWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City is required",
      });
    }

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.response?.data);

    res.status(500).json({
      success: false,
      message: "Unable to fetch weather",
    });
  }
};

export const getForecast = async (req, res) => {
  try {
    const { city } = req.query;

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    res.json(response.data);
    console.log("API Key:", process.env.WEATHER_API_KEY);
  } catch (error) {
    console.log(error.response?.data);
    console.error(error.response?.data || error.message);


    res.status(500).json({
      success: false,
      message: "Unable to fetch forecast",
    });
  }
};