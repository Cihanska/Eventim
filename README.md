# Eventim - Ticketvergabe für Events (Theater-ähnliche Anwendung)

Dieses Projekt wurde als Teil des Bootcamps entwickelt und dient der Verwaltung von Events sowie dem Ticketverkauf, insbesondere für eine Art Theaterumgebung, in der ein Anwender (zum Beispiel am Empfang) Tickets vergeben kann.

## Funktionen

### Backend (Java)
- **Event hinzufügen:** Die Backend-API ermöglicht das Hinzufügen neuer Events. Dabei werden Informationen wie Eventname, Datum und die verfügbare Anzahl der Tickets festgelegt.
- **Eventübersicht:** API-Endpunkte bieten eine Übersicht über alle erstellten Events.
- **Ticketverkauf:** Die Funktionen zur Ticketvergabe ermöglichen es dem Anwender, Tickets für ein Event zu verkaufen. Die Anzahl der verfügbaren Tickets wird berücksichtigt, sodass nicht mehr verkauft werden kann, als verfügbar ist.
- **Ticketübersicht:** Die API bietet Einblicke, welche Tickets für ein bestimmtes Event verkauft wurden und welche noch verfügbar sind.
- **Anonyme Ticketverkäufe:** Die Ticketverkäufe erfolgen anonym, ohne dass Namen erfasst werden.
- **Eventlöschung:** Durch die API kann ein Event entfernt werden.

### Frontend
- **Startseite:** Hier werden die anstehenden Events angezeigt, die zuvor über die Funktion "Event hinzufügen" erstellt wurden.
- **Übersicht Events:** Zeigt alle erstellten Events an, inklusive Details zu jedem Event und der Möglichkeit, neue Events hinzuzufügen.
- **Ticketverkauf:** Über diese Funktion kann der Anwender Tickets für ein Event verkaufen, wobei die Anzahl der verfügbaren Tickets berücksichtigt wird.
- **Übersicht Tickets:** Zeigt an, welche Tickets verkauft wurden und welche noch verfügbar sind. Eine Filterfunktion ermöglicht die Suche nach einem spezifischen Event.
- **Eventdetails anzeigen:** Gibt detaillierte Informationen zu einem Event wieder.
- **Ticketverwaltung:** Ermöglicht die Festlegung von Ticketpreisen für jedes Event.
- **Eventlöschung:** Durch den entsprechenden Button kann ein Event entfernt werden.

## Anwendungsnutzung

Um die Anwendung lokal auszuführen:

### Backend
```
mvn spring-boot:run
```

### Frontend
```
npm run start
```
### Abhängigkeiten
1. Lombok
2. H2 Database
3. Spring Data JPA

### Anwendung starten

**Backend (Java)**
1. Klonen des Repositorys.
2. Navigieren zum Backend-Verzeichnis.
3. Installieren der erforderlichen Abhängigkeiten.
4. Starten des Backend-Servers.

**Frontend (Angular)**
1. Navigieren zum Frontend-Verzeichnis.
2. Installieren der benötigten Pakete:
   - ``` npm install```   
4. Starten der Frontend-Anwendung.
   - ``` ng serve ``` 

## Technologien
- **Backend:** Java, Spring Boot
- **Frontend:** Angular, HTML, CSS, JavaScript

## Hinweise
- Die Ticketverkäufe sind absichtlich anonymisiert.
- Das Hinzufügen neuer Events erfordert die Eingabe von Eventnamen, Datum und der verfügbaren Ticketanzahl.
