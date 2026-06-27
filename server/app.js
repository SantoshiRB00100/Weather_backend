import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Weather API Running"
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/weather", weatherRoutes);

app.use("/api/favorites", favoriteRoutes);

export default app;