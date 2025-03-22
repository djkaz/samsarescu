# SamsarGPT

**Cuprins:**

*   [Ce puteți face pe SamsarGPT?](#Ce-puteți-face-pe-SamsarGPT?)
*   [Cum să utilizați site-ul](#cum-sa-utilizati-site-ul)
*   [Dezvoltări viitoare](#dezvoltari-viitoare)
*   [Feedback](#feedback)
*   [Prezentare](#prezentare)
*   [Implementare](#implementare)
*   [Structură Proiect](#structura-proiect)
*   [Ghid pentru Rulare Locală](#ghid-pentru-rulare-locala)

**Bine ați venit pe SamsarGPT!** 👋

Acesta este un site dedicat oricărui utilizator, dar în special samsarilor auto. Scopul nostru este să ajutăm samsarii să vândă mașini cât mai ușor, atât pentru publicul larg, cât și pentru cunoscători.

## Ce puteți face pe SamsarGPT? 😎

Pe acest site, puteți:

*   **Încărca o mașină:** Încărcați imaginea unei mașini pe care doriți să o vindeți.
*   **Generează o reclamă:** Sistemul nostru bazat pe inteligență artificială (AI) va genera automat o reclamă atractivă pentru mașina dumneavoastră, gata de folosit.
*   **Salvează reclama:** Puteți copia reclama generată de AI pe site-ul nostru sau o puteți distribui.

## Cum să utilizați site-ul 🚀

Navigarea pe site este simplă și intuitivă. Iată câțiva pași de bază:

1.  **Explorare:** Utilizați meniul de navigare din partea de sus a paginii pentru a accesa diferitele secțiuni ale site-ului.
2.  **Încarcă poza cu bijuteria pe roți:** Accesați secțiunea dedicată pentru a încărca imaginea dorită.
3.  **Mesajul anunțului:** Specificați informațiile pe care doriți să le includă AI-ul în reclamă.
4.  **Stilul anunțului de samsar:** Selectați modul în care doriți ca AI-ul să genereze reclama.
5.  **Generează imaginea:** Apăsați pe butonul "GENEREAZĂ ANUNȚUL DE SAMSAR ACUM" pentru a genera reclama.
6.  **Răspunsul generat:** Reclama va fi afișată în secțiunea "ANUNȚUL TĂU DE SAMSAR ADEVĂRAT".

## Dezvoltări viitoare 📈

Ne propunem să îmbunătățim constant platforma SamsarGPT. Iată câteva funcționalități pe care le vom adăuga:

*   **Comparare cu alte anunțuri:** Sistemul va căuta online alte anunțuri similare pentru mașina dumneavoastră și vă va oferi un raport comparativ al ofertei dvs. față de celelalte.
*   **Salvarea reclamelor:** Utilizatorii vor putea salva descrierile generate de AI pe site-ul nostru.
*   **Contact:** Dacă aveți întrebări sau nelămuriri, ne puteți contacta prin intermediul paginii de contact (detalii vor fi adăugate ulterior).

## Feedback 💬

Ne dorim să îmbunătățim constant experiența utilizatorilor noștri. Dacă aveți sugestii sau feedback, vă rugăm să ne contactați prin pagina de contact.

**Vă mulțumim că ați vizitat SamsarGPT!** 🎉

---

## Prezentare 💡

Echipa SamsarGPT a creat o soluție inovatoare pentru a ajuta vânzătorii de mașini online. Am integrat [Gemini AI](https://ai.google.dev/) ca element central al platformei noastre, permițând generarea automată de reclame atrăgătoare și imagini îmbunătățite pentru mașini.

Abordarea noastră a fost de a utiliza tehnici de prompting avansate, definind stiluri specifice de vânzare auto, inspirate din lumea "samsarilor". Am creat prompturi detaliate, cu exemple concrete de limbaj și expresii, ghidând AI-ul să adopte diverse personalități, de la vânzătorul exagerat la cel disperat sau cel care vrea să pară luxos. Această metodă creativă ne-a permis să obținem rezultate relevante și amuzante.

Credem că SamsarGPT are un impact real și valoros, oferind un instrument util și rapid pentru oricine dorește să își vândă mașina online, ajutându-i să creeze reclame care atrag atenția și să își mărească șansele de vânzare.

### Tehnici de Prompting Folosite 🧠

*   **Instrucțiuni clare și specifice:** Fiecare prompt indică exact ce stil și elemente trebuie să includă anunțul.
*   **Exemple de limbaj și expresii:** Prompturile oferă exemple concrete pentru a ghida AI-ul în generarea textului dorit.
*   **Definirea personajului/rolului:** Unele prompturi cer AI-ului să adopte o anumită personalitate (ex: samsar disperat).
*   **Utilizarea de cuvinte cheie:** Prompturile includ cuvinte cheie specifice fiecărui stil (ex: "FULL OPTION", "URGENT", "EDITION LIMITATĂ").
*   **Specificarea greșelilor intenționate:** Promptul "classic" cere explicit includerea greșelilor de scriere și a limbajului colocvial.
*   **Definirea formatului:** Unele prompturi sugerează chiar și formatul anunțului (ex: începere, final).

### Modele folosite 🤖

*   [gemini 2.0-flash](https://ai.google.dev/models/gemini) - Generarea textului
*   gemini 2.0-flash-experimental-image-generation - Generarea imaginilor

## Implementare ⚙️

#### Frontend

*   **CSS:** Pentru stilizarea paginilor web.
*   **HTML:** Pentru structura paginilor web.
*   **JavaScript:** Pentru funcționalități dinamice pe frontend.

#### Backend

*   **[Node.js](https://nodejs.org/)**: Folosit pentru a rula codul JavaScript pe server.
*   **[Express](https://expressjs.com/)**: Un framework pentru Node.js utilizat pentru a construi aplicații web și API-uri.

#### Inteligență Artificială <a name="inteligenta-artificiala"></a>

*   **[Google AI SDK for JavaScript](https://ai.google.dev/):** Utilizat pentru a integra și a folosi modelele Gemini AI create de Google DeepMind. Acest SDK permite accesul și utilizarea modelelor multimodale Gemini pentru raționament pe text, imagini și cod.

## Structură Proiect 📂

*   `README.md`: Prezentare generală, scop, utilizare, detalii tehnice. Documentația principală.
*   `server.js`: Punct de intrare backend, logică server-side, rute, API, integrare Gemini AI.
*   `package.json`, `package-lock.json`: Metadate proiect, dependențe, versiuni exacte (npm).
*   `.env`: Variabile de mediu (chei API), informații sensibile (NU includeți în controlul versiunilor!).
*   `public/`: Active statice frontend:
    *   `index.html`: Structura și conținutul paginii web principale.
    *   `js/`: JavaScript frontend:
        *   `config.js`: Configurare frontend (director încărcare, nume model).
        *   `prompts.js`: Definiții prompt-uri pentru generare anunțuri.
    *   `css/`: Stilizare frontend (CSS).
    *   `images/`: Imagini frontend.
    *   `uploads/`: Destinație imagini încărcate.


## Ghid pentru Rulare Locală 🛠️

Urmați acești pași pentru a rula aplicația local:

1.  **Clonați repository-ul:**

    ```bash
    git clone <aici adăugați link-ul HTTPS sau SSH al repository-ului>
    ```

2.  **Accesați directorul proiectului:**

    ```bash
    cd samsarescu
    ```

3.  **Asigurați-vă că aveți [Node.js](https://nodejs.org/) și npm instalate:**

    *   Dacă nu le aveți, descărcați și instalați Node.js de pe [site-ul oficial Node.js](https://nodejs.org/). npm (Node Package Manager) este inclus odată cu instalarea Node.js.

4.  **Instalați dependențele proiectului:**

    ```bash
    npm install
    ```

    Această comandă va instala toate pachetele necesare specificate în fișierul `package.json`.

5.  **Configurați variabilele de mediu:**

    *   Creați un fișier `.env` în directorul rădăcină al proiectului.
    *   Adăugați următoarea linie, înlocuind `YOUR_GEMINI_API_KEY` cu cheia API Gemini:

        ```
        GEMINI_API_KEY=YOUR_GEMINI_API_KEY
        ```

    *   Asigurați-vă că aveți o cheie API validă de la [Google AI Studio](https://makersuite.google.com/).

6.  **Rulați aplicația:**

    ```bash
    npm start
    ```

    Această comandă va porni serverul Node.js.

7.  **Accesați aplicația în browser:**

    *   Deschideți browserul web și navigați la adresa `http://localhost:3000` (sau adresa specificată în mesajul de pornire al serverului).

Acum ar trebui să puteți utiliza aplicația SamsarGPT local.
