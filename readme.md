# Configuratie bestanden tourpoule

## Algemeen

- In currentTour.yaml wordt de locatie van de huidige tour bepaald.

## Per tour

- cyclists.yaml voor alle ploegen en renners die starten aan aan de tour. [Hier](http://geensnor.nl/tourtool/) staat een tool die je kan helpen met renners in het juiste formaat te zetten.
- tourConfig.yaml om een aantal tour specifieke variabelen vast te leggen.
- Elke etappe heeft een eigen yaml bestand in de stages directory waarin de uitslag en een aantal andere variabelen worden vastgelegd.

## Let op

De naam van de renners wordt gebruikt als key. Deze moet dus uniek zijn en in de etappeuitslag exact hetzelfde geschreven worden als in de lijst met renners (cyclists.yaml). Copy pasten werkt in zo'n geval vaak prima.
