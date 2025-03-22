const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const upload = multer({ dest: "uploads/" });

const genAI = new GoogleGenerativeAI(
  process.env.AIzaSyBxty4_EjC - P7K_W_qat8a4heT3r4vdA90
); // set your key in .env

app.use(express.static("public"));

app.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    const imageBuffer = fs.readFileSync(req.file.path);
    const base64Image = imageBuffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

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
