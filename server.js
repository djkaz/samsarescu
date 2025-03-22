require("dotenv").config(); // Load env vars first

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai"); // Import here

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Use it AFTER it's defined

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));

app.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    const imageBuffer = fs.readFileSync(req.file.path);
    const base64Image = imageBuffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64Image,
        },
      },
      "Identify the car make and model from this image, and then write a compelling description for selling this car.",
    ]);

    const response = await result.response;
    const text = response.text();

    res.json({ description: text });

    fs.unlinkSync(req.file.path); // cleanup
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to analyze image." });
  }
});

app.listen(3000, () =>
  console.log("🚀 Server running at http://localhost:3000")
);
