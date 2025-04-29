## Betygskriterier

Enbart G kriterier för Projekt - Databasdriven backend-applikation

- [ ] Ni bestämmer ett tema för databasen och vad som ska göras med MySQL respektive
      MongoDB. Det som kräver mer kopplingar mellan tabeller dvs den större delen gör ni med
      MySQL och det som ni kan bestämma ska ha en mer avgränsad del gör ni med MongoDB t ex
      en blogg, recensioner.

  - Tema, dungeon crawler logg bok / storytelling
  - MYSQL - ER-Diagram
  - MongooDB - Prompter och kategorier

- [x] Ni ska göra en planering där MySQL-databasens design framgår genom t ex ER-diagram och
      MongoDB-databasens syfte framgår genom en kortfattad beskrivning.

  - ER-diagram
  - Beskrivning

- [ ] Ni ska också planera hur erat Rest API ska vara upplagd utifrån erat tema och databasernas
      design och upplägg.

  - CRUD MYSQL
  - Create - lägga till nya kort
  - Read - Lista upp session/story med tillhörande skapade kort
  - Update - Edit tags
  - Delete - Delete story

  - CRUD MongoDB
  - Create - Prompts, tags
  - Read - Prompts, tags
  - Update - Prompts, tags
  - Delete - Prompts, tags

- [ ] Ni skapar tabeller för MySQL-databasen med SQL genom CREATE TABLE. MySQL-databasen
      ska vara normaliserad utifrån syftet dvs inte innehålla redundans så långt det är möjligt och
      använda en-till-många-förhållanden, många-till-många-förhållanden utifrån syftet och
      innehålla referensintegritet (primary key och foreign key). Ni använder också unika index där
      det behövs för att kontrollera integriteten på er data.

  - Unik indexera usernames
  - följd foreign referenses från ER-Diagramet

- [ ] MySQL-databasen ska innehålla minst fyra tabeller.

- [ ] Ni ska skriva SQL-frågor som visar MySQL-databasens syfte. Det behöver inte vara komplett
      för hela applikationen utan ett urval av relevanta SQL-frågor som visar att databasen
      fungerar som det är tänkt även utanför applikationen.

  - Select all cards by tag
  - Visa upp story ur en session
  - Visa upp cards ur en session
  - Visa upp en scen ur en session
  - Visa upp en Kort ur en scen

- [ ] Ni tänker ut hur er MongoDB-databas ska fungera utifrån temat och syftet. Här behöver inte
      planeringen vara lika omfattande som för MySQL utan ni kan börja arbeta med koden i Node-
      applikationen så snart ni vet syftet med MongoDB-databasen.

  - Fråga Jerry
  - Tags
  - Prompt?

- [ ] MySQL-databasen (den delen i Node.js) ska innehålla CRUD-funktionalitet.
  - Se tidigare crud

• MongoDB-databasen (den delen i Node.js med Mongoose) ska innehålla CRUD-
funktionalitet.

- Se tidigare crud

- [ ] Serverside-delen i Node-applikationen ska använda sig av Express och ha ett Rest API med
      Endpoints för databasernas upplägg och design med CRUD-funktionalitet och komma åt
      annan relevant data enligt ovan krav för respektive MySQL och MongoDB. Ni testar alla
      endpoints med Insomnia.

  - Ta screenshot på alla endpoints

- [x] Ni behöver dela upp koden genom routes och controllers så som jag har gått genom.

- [ ] Ni gör en Frontend-del med HTML, CSS och Javascript (med Fetch) för delar av Node-
      applikationen med möjlighet att kunna visa och lägga till data. Syftet är att man ska få en
      känsla av applikationens syfte och kunna göra vissa delar ihopkopplade med Serverside-
      applikationen (Backend) genom att använda Fetch i Javascript. Ni gör front-end med Vue
      vite.

  - fetcha crud-endpoints

- [ ] Varje gruppmedlem ska lämna in en logg där det framgår kortfattat vad man har
      arbetat med samt relevanta exempel på problem man har fått lösa i samband med
      detta, och att det framgår att man uppfyller kraven för G. Det behöver också framgå
      att man har deltagit på planerade träffar utifrån den planering gruppen har gjort
      alternativt en motivering då man har uteblivit vid något tillfälle.
