require("dotenv").config();

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.urlencoded({ extended: true }));

app.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    const { promptText = "", adStyle = "exaggerated" } = req.body;

    const imageBuffer = fs.readFileSync(req.file.path);
    const base64Image = imageBuffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const stylePrompts = {
      exaggerated: `
Scrie un anunț OLX în română pentru o mașină din imagine într-un stil SAMSAR EXAGERAT. Include:

* Exclamări intense: 'SUPER OFERTĂ!!!', 'BOMBĂ PE ROTI!!!'
* Spune că e 'adusă recent din Germania', 'ținută ca-n palmă'
* Laudă: 'bijuterie', 'unicat', 'impecabilă', 'full FULL OPTION'
* Exagerează dotările: 'navigație pe satelit pe lună'
* Minte cu entuziasm: 'nu bate, nu troncăne, nu consumă aer'
* Ton teatral, multe majuscule și greșeli intenționate
      `,

      desperate: `
Scrie un anunț OLX în română ca și cum ești DISPERAT SĂ VINZI URGENT.

* Începe cu: 'URGENT!!!', 'NU MAI POT!!!', 'TREBUIE DATĂ AZI!'
* Exagerează nevoia: 'am rate', 'plec din țară', 'n-am unde s-o țin'
* Folosește greșeli de gramatică și cuvinte rupte de foame
* Laudă mașina dar sună disperat: 'merge bine dar eu n-am timp'
* Final: 'SUNA ACUM SAU O BAG LA REMAT!!!'
      `,

      luxury: `
Scrie un anunț OLX ca un samsar care vinde o mașină de LUX și vrea să pară scump:

* Folosește cuvinte ca 'EDITION LIMITATĂ', 'PREMIUM', 'VIP'
* Minte cu stil: 'a fost a unui ambasador', 'condusă doar de domnișoare'
* Ton elevat dar samsăresc, multe laude sofisticate
* Exagerează dotările: 'masaj lombar', 'climatronic cu parfum de Monaco'
* Încheie cu: 'la banii ăștia, e cadou, frate'
      `,

      honest: `
Scrie un anunț sincer dar în stil de samsar decent:

* Spune adevărul dar scoate în evidență ce merge bine
* Recunoaște defecte mici: 'are niște zgârieturi dar merge perfect'
* Laudă corect: 'ținută bine, întreținută la timp'
* Evită exagerări grosolane dar păstrează un ton cald, de piață
* Finalul: 'vino să o vezi, nu promiți nimic, doar te convingi'
      `,

      classic: `
Scrie clasic, stil parcare Obor 2008:

* GRESȘELI DE SCRIERE LA GREU
* MULT CAPS LOCK ȘI PRESCURTĂRI: 'MERGE CA UNSA!!!', 'EURO 5 FULL!!!'
* Minte sincer: 'k noua, consuma 3%' (dar nu-i adevărat)
* Use 'k' în loc de 'c', și 'y' unde nu trebuie: 'yn stare top!!!'
* Încheie cu: 'cine suna primul, o ia. fara figuri!'
      `,
    };

    const systemPrompt = `
Ai primit imaginea unei mașini. Identifică principalele caracteristici vizuale și generează un anunț de vânzare în stilul cerut.

STIL DE ANUNȚ: ${adStyle.toUpperCase()}
${stylePrompts[adStyle]}

${promptText ? `Sugestii adiționale de inclus: ${promptText}` : ""}

Dacă imaginea NU conține o mașină, răspunde cu: 'Vere asta nu-i mașină, ce facem aici?'
`;

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64Image,
        },
      },
      systemPrompt,
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
