import mongoose from "mongoose";

const favoriteCitySchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },

      city: {
        type: String,
        required: true
      },

      country: {
        type: String
      }
    },
    {
      timestamps: true
    }
  );

export default mongoose.model(
  "FavoriteCity",
  favoriteCitySchema
);