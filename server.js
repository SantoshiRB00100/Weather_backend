import "./server/config/env.js";
import connectDB from "./server/config/db.js";
import app from "./server/app.js";



connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});