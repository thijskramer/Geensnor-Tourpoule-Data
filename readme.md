# Configuratie bestanden tourpoule

## Algemeen

- In currentTour.yaml wordt de locatie van de huidige tour bepaald. De tour waar naar wordt verwezen, moet een tourConfig.yaml en minimaal 1 etappe hebben om alles goed te laten werken.

## Per tour

- cyclists.yaml voor alle ploegen en renners die starten aan aan de tour. [Hier](http://geensnor.nl/tourtool/) staat een tool die je kan helpen met renners in het juiste formaat te zetten.
- tourConfig.yaml om een aantal tour specifieke variabelen vast te leggen.
- Tour is voorbij als de laatste etappe de status "finished" heeft.
- dropouts.yaml om de uitgevallen renners in vast te leggen.

## Per etappe

- Elke etappe heeft een eigen yaml bestand in de stages directory waarin de uitslag en een aantal andere variabelen worden vastgelegd.
- Etappe is is altijd zichbaar in de tour. Als hij de status "finished" heeft, worden de uitslagen meegeteld en krijgt in in de tourpoule een finishvlag.
- De [eerder genoemde tool](http://geensnor.nl/tourtool/) kan ook lijsten renners van een etappe scrapen.

## Let op

De naam van de renners wordt gebruikt als key. Deze moet dus uniek zijn en in de etappeuitslag exact hetzelfde geschreven worden als in de lijst met renners (cyclists.yaml). Copy pasten werkt in zo'n geval vaak prima.
