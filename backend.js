const express = require("express");
const multer = require("multer");
const fetch = require("node-fetch");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const upload = multer({ dest: "uploads/" });

const CARNET_API_KEY = "YOUR_CARNET_API_KEY";
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

const genAI = new GoogleGenAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;
    const imageBuffer = require("fs").readFileSync(imagePath);
    const base64Image = imageBuffer.toString("base64");

    // CarNet.AI API request
    const carNetResponse = await fetch("https://api.carnet.ai/v1/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CARNET_API_KEY}`,
      },
      body: JSON.stringify({ image: base64Image }),
    });
    const carData = await carNetResponse.json();

    if (carData.success) {
      const { make, model, year } = carData.data;

      // Gemini AI SDK request
      const prompt = `Create a compelling description to sell a ${year} ${make} ${model}.`;
      const geminiResponse = await model.generateContent([prompt]);
      const description = geminiResponse.response.text();

      res.json({ description });
    } else {
      res.status(400).json({ error: "Car identification failed." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
