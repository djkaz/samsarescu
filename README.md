# SamsarGPT

**Bine ați venit pe SamsarGPT!**

Acesta este un site dedicat oricărui utilizator, dar în special samsarilor auto. Scopul nostru este să ajutăm samsarii să vândă mașini cât mai ușor, atât pentru publicul larg, cât și pentru bombardieri.

## Ce puteți face pe SamsarGPT?

Pe acest site, puteți:

* **Încărca o mașină:** Încărcați imaginea unei mașini pe care doriți să o vindeți.
* **Generează o reclamă:** Sistemul nostru bazat pe inteligență artificială (AI) va genera automat o reclamă atractivă pentru mașina dumneavoastră, gata de folosit.
* **Salvează reclama:** Puteți copia reclama generată de AI pe site-ul nostru sau o puteți distribui.

## Cum să utilizați site-ul

Navigarea pe site este simplă și intuitivă. Iată câțiva pași de bază:

1. **Explorare:** Utilizați meniul de navigare din partea de sus a paginii pentru a accesa diferitele secțiuni ale site-ului.
2. **Încărca poza cu bijuteria pe roți:** Accesați secțiunea dedicată pentru a încărca imaginea dorită.
3. **Mesajul anunțului:** Specificați informațiile pe care doriți să le includă AI-ul în reclamă.
4. **Stilul anunțului de samsar:** Selectați modul în care doriți ca AI-ul să genereze reclama.
5. **Generează imaginea:** Apăsați pe butonul "GENEREAZĂ ANUNȚUL DE SAMSAR ACUM" pentru a genera reclama.
6. **Răspunsul generat:** Reclama va fi afișată în secțiunea "ANUNȚUL TĂU DE SAMSAR ADEVĂRAT".

## Dezvoltări viitoare

Ne propunem să îmbunătățim constant platforma samsarescu. Iată câteva funcționalități pe care le vom adăuga:

* **Comparare cu alte anunțuri:** Sistemul va căuta online alte anunțuri similare pentru mașina dumneavoastră și vă va oferi un raport comparativ al ofertei dvs. față de celelalte.
* **Salvarea reclamelor:** Utilizatorii vor putea salva descrierile generate de AI pe site-ul nostru "samsarescu".
* **Contact:** Dacă aveți întrebări sau nelămuriri, ne puteți contacta prin intermediul paginii de contact (detalii vor fi adăugate ulterior).

## Feedback

Ne dorim să îmbunătățim constant experiența utilizatorilor noștri. Dacă aveți sugestii sau feedback, vă rugăm să ne contactați prin pagina de contact.

**Vă mulțumim că ați vizitat samsarescu!**


--- 
## Prezentare

Echipa SamsarGPT a creat o soluție inovatoare pentru a ajuta vânzătorii de mașini online. Am integrat Gemini AI ca element central al platformei noastre, permițând generarea automată de reclame atrăgătoare și imagini îmbunătățite pentru mașini.

Abordarea noastră a fost de a utiliza tehnici de prompting avansate, definind stiluri specifice de vânzare auto, inspirate din lumea "samsarilor". Am creat prompturi detaliate, cu exemple concrete de limbaj și expresii, ghidând AI-ul să adopte diverse personalități, de la vânzătorul exagerat la cel disperat sau cel care vrea să pară luxos. Această metodă creativă ne-a permis să obținem rezultate relevante și amuzante.

Credem că SamsarGPT are un impact real și valoros, oferind un instrument util și rapid pentru oricine dorește să își vândă mașina online, ajutându-i să creeze reclame care atrag atenția și să își mărească șansele de vânzare.

### Tehnici de Prompting Folosite

* **Instrucțiuni clare și specifice:** Fiecare prompt indică exact ce stil și elemente trebuie să includă anunțul.
* **Exemple de limbaj și expresii:** Prompturile oferă exemple concrete pentru a ghida AI-ul în generarea textului dorit.
* **Definirea personajului/rolului:** Unele prompturi cer AI-ului să adopte o anumită personalitate (ex: samsar disperat).
* **Utilizarea de cuvinte cheie:** Prompturile includ cuvinte cheie specifice fiecărui stil (ex: "FULL OPTION", "URGENT", "EDITION LIMITATĂ").
* **Specificarea greșelilor intenționate:** Promptul "classic" cere explicit includerea greșelilor de scriere și a limbajului colocvial.
* **Definirea formatului:** Unele prompturi sugerează chiar și formatul anunțului (ex: începere, final).

### Modele folosite

* **gemini 2.0-flash** - Generarea textului

* **gemini 2.0-flash-experimental-image-generation** - Generarea imaginilor



## Implementare

#### Frontend

* **CSS:** Pentru stilizarea paginilor web.
* **HTML:** Pentru structura paginilor web.
* **JavaScript:** Pentru funcționalități dinamice pe frontend.

#### Backend

* **Node.js:** Folosit pentru a rula codul JavaScript pe server.
* **Express:** Un framework pentru Node.js utilizat pentru a construi aplicații web și API-uri.

#### Inteligență Artificială

* **Google AI SDK for JavaScript:** Utilizat pentru a integra și a folosi modelele Gemini AI create de Google DeepMind. Acest SDK permite accesul și utilizarea modelelor multimodale Gemini pentru raționament pe text, imagini și cod.

## Structură


* README.md: Oferă o prezentare generală a proiectului, inclusiv scopul, caracteristicile, instrucțiunile de utilizare și detaliile tehnice. Este documentația principală a proiectului.
-   server.js: Punctul principal de intrare pentru aplicația backend. Conține logica server-side, inclusiv gestionarea rutelor, endpoint-urile API și integrarea cu modelul Gemini AI.
-   package.json: Conține metadate despre proiect, inclusiv dependențe, scripturi și alte informații de configurare. Este utilizat de Node.js pentru a gestiona proiectul.
-   package-lock.json: Înregistrează versiunile exacte ale dependențelor utilizate în proiect. Asigură că toți cei care lucrează la proiect utilizează aceleași versiuni ale dependențelor.
-   .env (Probabil prezent): Stochează variabile de mediu, cum ar fi cheile API și alte informații sensibile. Este important să păstrați acest fișier în siguranță și să nu-l includeți în controlul versiunilor.
-   public/: Conține active statice care sunt servite către partea client (frontend) a aplicației.
    -   index.html: Fișierul HTML principal pentru frontend. Definește structura și conținutul paginii web.
    -   js/: Conține fișiere JavaScript pentru frontend.
        -   config.js: Conține setări de configurare pentru frontend, cum ar fi directorul de încărcare și numele modelului.
        -   prompts.js: Conține definițiile prompt-urilor utilizate pentru a genera textul anunțului.
    -   css/ (Probabil prezent): Conține fișiere CSS pentru stilizarea frontend-ului.
    -   images/ (Probabil prezent): Conține fișiere imagine utilizate în frontend.
    -   uploads/: Acest director este configurat ca destinație pentru imaginile încărcate.
