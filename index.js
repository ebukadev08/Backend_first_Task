import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/me", async (req, res) => {
  try {
    console.log("Fetching cat fact...");
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });
    const data = {
      status: "success",
      user: {
        email: "ebukaopara180@gmail.com",
        name: "Ebuka Oparaochaeke",
        stack: "Nodejs/Express",
      },
      timestamp: new Date().toISOString().replace('Z', '+01:00'),
      fact: response.data.fact,
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
      user: {
        email: "ebukaopara180@gmail.com",
        name: "Ebuka Oparaochaeke",
        stack: "Nodejs/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact at this time. Try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
