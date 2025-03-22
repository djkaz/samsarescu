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
      `Generează un anunț de vânzare pentru OLX pe baza imaginii mașinii furnizate. Anunțul trebuie să fie scris în stilul unui samsar auto român tipic, cu un limbaj exagerat, plin de laude și cu greșeli gramaticale intenționate. Include următoarele elemente și expresii, chiar dacă nu sunt adevărate pentru mașina din imagine:

* Începe cu o exclamație puternică, gen 'SUPER OFERTA!!!' sau 'ATENȚIE, BOMBA!!!'.
* Menționează neapărat că mașina este 'adusă recent din Germania', chiar dacă nu este cazul. Subliniază starea impecabilă în care a fost întreținută acolo ('ținută ca-n palmă').
* Specifică 'kilometri REALI, verificabili!', chiar dacă nu ai această informație sau știi că nu sunt reali.
* Folosește cuvinte ca 'bijuterie', 'unicat', 'impecabilă', 'perfectă din toate punctele de vedere'.
* Exagerează dotările mașinii, chiar dacă sunt standard. Poți spune ceva de genul 'full options, mai are și navigație prin satelit pe lună!'.
* Inventează sau exagerează calități ale mașinii, cum ar fi 'motor de rachetă', 'consum de Logan', 'nu bate, nu troncăne, nu consumă ulei, nici aer din roți!'.
* Adaugă o notă despre preț, cum ar fi 'preț ușor negociabil' sau 'la banii ăștia nu găsești așa ceva nici în vis!'.
* Încheie cu o invitație urgentă la vizionare, gen 'nu rata ocazia, sună ACUM!' sau 'cine o ia primul, a câștigat la Loto!'.
* Folosește un ton entuziast și convingător, chiar dacă minți cu nerușinare. Nu te sfii să folosești prescurtări și un limbaj colocvial tipic pentru anunțurile de acest gen.
* Ignoră orice regulă de gramatică sau ortografie. Scopul este să imiți perfect stilul unui samsar auto român.`,
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
