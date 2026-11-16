/* Drag-and-drop-Übungen und Rechenaufgaben */
(function () {
  var P = window.PML;

  /* type 'assign': buckets + items [Text, Index der richtigen Gruppe]
     type 'order' : items in richtiger Reihenfolge
     type 'match' : pairs [fester Begriff, zuzuordnendes Kärtchen] */
  P.drags = [
    // ---------- 1 ----------
    { c: '1', type: 'assign', title: 'Einzelkosten oder Gemeinkosten?', prompt: 'Sortiere die Kostenarten ein.', buckets: ['Einzelkosten', 'Gemeinkosten'],
      items: [['Fertigungsmaterial', 0], ['Fertigungslöhne', 0], ['Abschreibungen', 1], ['Miete', 1], ['Versicherungen', 1], ['Zinsen', 1], ['Gehälter', 1]],
      explain: 'Einzelkosten sind dem Produkt direkt zurechenbar, Gemeinkosten werden über den BAB verteilt.' },
    { c: '1', type: 'order', title: 'Vom Material zum Preis', prompt: 'Bringe die Stufen der Zuschlagskalkulation in die richtige Reihenfolge.',
      items: ['Materialkosten und Fertigungskosten', 'Herstellkosten 1', 'Herstellkosten 2 (mit Ausschuss)', 'Selbstkosten (mit Entwicklung, Verwaltung, Vertrieb)', 'Preis (mit Gewinn)'],
      explain: 'Jede Stufe baut auf der vorigen auf und nimmt weitere Kosten dazu.' },
    { c: '1', type: 'assign', title: 'Fix oder variabel?', prompt: 'Welche Kosten hängen von der Stückzahl ab?', buckets: ['Fixe Kosten', 'Variable Kosten'],
      items: [['Abschreibungen', 0], ['Versicherungen', 0], ['Langfristige Mieten', 0], ['Löhne fester Mitarbeiter', 0], ['Materialeinzelkosten', 1], ['Energie der Betriebsmittel', 1], ['Löhne von Leiharbeitnehmern', 1]],
      explain: 'Variable Kosten steigen und fallen mit der produzierten Menge.' },
    { c: '1', type: 'assign', title: 'GAE: Welcher Verlust drückt welchen Faktor?', prompt: 'Ordne die Verlustarten den drei Faktoren der Gesamtanlageneffektivität zu.', buckets: ['Verfügbarkeit', 'Leistungsgrad', 'Qualitätsrate'],
      items: [['Anlagenausfälle', 0], ['Rüsten und Einrichten', 0], ['Leerlauf und Kurzstillstände', 1], ['Verringerte Geschwindigkeit', 1], ['Ausschuss und Nacharbeit', 2], ['Anlaufschwierigkeiten', 2]],
      explain: 'GAE = Verfügbarkeit × Leistungsgrad × Qualitätsrate.' },
    { c: '1', type: 'match', title: 'Bestände und was sie verraten', prompt: 'Welcher Bestand ist eine Kennzahl für welche Güte?',
      pairs: [['Rohwarenbestand', 'Produktionsplanung und Disposition'], ['Umlaufbestand', 'Produktionssteuerung und Materialbereitstellung'], ['Fertigwarenbestand', 'Produktionsplanung und Vertriebslogistik']],
      explain: 'Je geringer der jeweilige Bestand, desto schlanker der Prozess dahinter.' },
    { c: '1', type: 'assign', title: 'Hohe oder geringe Fertigungstiefe?', prompt: 'Zu welcher Strategie gehört die Aussage?', buckets: ['Hohe Fertigungstiefe', 'Geringe Fertigungstiefe'],
      items: [['Kontrolle über Prozess und Qualität', 0], ['Keine Herausgabe von Kern-Know-how', 0], ['Hoher Investitions- und Kapitalbedarf', 0], ['Risiko ungenutzter Maschinenkapazitäten', 0], ['Kostenvorteile durch Stückzahlen beim Lieferanten', 1], ['Mehr Aufwand für Lieferantenmanagement', 1], ['Material wird Hauptbestandteil der Herstellkosten', 1]],
      explain: 'Über Make-or-buy-Entscheidungen steuert das Unternehmen seine Fertigungstiefe.' },
    { c: '1', type: 'assign', title: 'Statisch oder dynamisch?', prompt: 'Zu welcher Art der Investitionsrechnung gehört das Merkmal?', buckets: ['Statische Verfahren', 'Dynamische Verfahren'],
      items: [['Nur eine Nutzungsperiode', 0], ['Kosten und Leistungen', 0], ['Durchschnittswerte ohne Zeitwert des Geldes', 0], ['Mehrere Nutzungsperioden', 1], ['Einnahmen und Ausgaben', 1], ['Finanzmathematische Methoden', 1]],
      explain: 'Kostenvergleichs- und Amortisationsrechnung sind statische Verfahren.' },
    // ---------- 2 ----------
    { c: '2', type: 'assign', title: 'Werkstatt- oder Fließfertigung?', prompt: 'Ordne die Merkmale zu.', buckets: ['Werkstattfertigung', 'Fließfertigung'],
      items: [['Sich kreuzende Materialflüsse', 0], ['Dynamische Engpässe', 0], ['Steuerlisten geben die Reihenfolge vor', 0], ['Hoher Qualifizierungsaufwand', 0], ['Gerichteter Materialfluss', 1], ['Gekoppelte Prozesse', 1], ['Statische Engpässe', 1], ['Stabile Durchlaufzeiten', 1]],
      explain: 'Fließfertigung liefert verlässliche Durchlaufzeiten, Werkstattfertigung schwankende.' },
    { c: '2', type: 'assign', title: 'Wertschöpfung oder Verschwendung?', prompt: 'Sortiere die Tätigkeiten ein.', buckets: ['Wertschöpfend', 'Offensichtliche Verschwendung', 'Verdeckte Verschwendung'],
      items: [['Mutter anschweißen', 0], ['Welle drehen', 0], ['Nacharbeit', 1], ['Warten auf Material', 1], ['Ausschuss', 1], ['Rüsten', 2], ['Transport', 2], ['Wege ohne Produkt', 2]],
      explain: 'Offensichtliche Verschwendung wird eliminiert, verdeckte lässt sich nur reduzieren.' },
    { c: '2', type: 'match', title: 'Die vier Lean-Prinzipien', prompt: 'Ordne jedem Prinzip sein Ziel zu.',
      pairs: [['Fließ-Prinzip', 'Prozesse koppeln und ausrichten'], ['Takt-Prinzip', 'Arbeitsinhalte harmonisieren'], ['Zieh-Prinzip', 'Nachfolger holt nur, was er braucht'], ['Null-Fehler-Prinzip', 'Alle Prozesse verbessern und stabilisieren']],
      explain: 'Ein-Stück-Fluss, Herzschlag der Fabrik, keine Überproduktion, stabile Prozesse.' },
    { c: '2', type: 'order', title: 'Ablauf im Kanban-System', prompt: 'Bringe die Schritte eines einstufigen Kanban-Kreislaufs in die richtige Reihenfolge.',
      items: ['Voller Behälter mit Karte steht im Supermarkt', 'Behälter wird entnommen, die Karte abgenommen', 'Senke verbraucht den Inhalt, Leerbehälter geht zurück', 'Karte geht an die Quelle', 'Quelle fertigt, sobald genug Karten da sind', 'Teile kommen mit Karte zurück in den Supermarkt'],
      explain: 'Der Verbrauch löst die Nachproduktion aus – das ist Pull.' },
    { c: '2', type: 'assign', title: 'Methoden des Null-Fehler-Prinzips', prompt: 'Welchem Ziel dient die Methode?', buckets: ['Fehler vorbeugen', 'Fehler erkennen', 'Fehler rückmelden', 'Fehler beseitigen'],
      items: [['5S', 0], ['Poka Yoke', 0], ['Jidoka', 1], ['Andon', 1], ['Qualitätsregelkreis', 2], ['5× Warum', 3]],
      explain: 'Vorbeugen, erkennen, rückmelden, beseitigen – in dieser Reihenfolge greifen die Methoden.' },
    { c: '2', type: 'match', title: 'Die 5S', prompt: 'Ordne die japanischen Begriffe ihrer Bedeutung zu.',
      pairs: [['Seiri', 'Sortiere aus'], ['Seiton', 'Stelle hin'], ['Seiso', 'Säubere'], ['Seiketsu', 'Sinn für Ordnung'], ['Shitsuke', 'Selbstdisziplin']],
      explain: 'Ordnung und Sauberkeit sind die Grundlage für fehlerfreies Arbeiten.' },
    { c: '2', type: 'assign', title: 'Push oder Pull?', prompt: 'Ordne die Aussagen zu.', buckets: ['Push-Prinzip', 'Pull-Prinzip'],
      items: [['Zentrales System steuert jede Stufe', 0], ['Lose werden in Zwischenpuffer geschoben', 0], ['Fertigung ohne konkreten Bedarf des Nachfolgers', 0], ['Selbststeuerndes System', 1], ['Supermarkt und Kanban', 1], ['Der Verbrauch löst die Fertigung aus', 1]],
      explain: 'Pull bringt die Bestände nahe an das Ideal der synchronen Produktion.' },
    { c: '2', type: 'assign', title: 'Kaizen oder Innovation?', prompt: 'Welcher Verbesserungsansatz ist gemeint?', buckets: ['Kaizen', 'Innovation'],
      items: [['Kleine Schritte', 0], ['Kurze Planungsdauer', 0], ['Kaum Investitionen', 0], ['Intensive Zusammenarbeit mit Werkern', 0], ['Große, irreversible Schritte', 1], ['Hohe Investitionen', 1], ['Lange Planungsdauer', 1]],
      explain: 'Am besten wirkt die Kombination: Innovation, dann mit Kaizen stabilisieren.' },
    // ---------- 3 ----------
    { c: '3', type: 'order', title: 'Die fünf Planungsphasen', prompt: 'In welcher Reihenfolge wird ein Produktionssystem geplant?',
      items: ['Fertigungsverfahren definieren', 'Produktionsmittel wählen', 'Kapazitäten planen', 'Materialversorgung planen', 'Wirtschaftlichkeit bewerten'],
      explain: 'Die Kette wird iterativ durchlaufen und optimiert.' },
    { c: '3', type: 'match', title: 'DIN 8580 und der Zusammenhalt', prompt: 'Was passiert in der Hauptgruppe mit dem Stoffzusammenhalt?',
      pairs: [['Urformen', 'Zusammenhalt schaffen'], ['Umformen', 'Zusammenhalt beibehalten'], ['Trennen', 'Zusammenhalt vermindern'], ['Fügen', 'Zusammenhalt vermehren']],
      explain: 'Auch Beschichten vermehrt den Zusammenhalt. Die sechste Gruppe ändert die Stoffeigenschaften.' },
    { c: '3', type: 'order', title: 'Schritte der Fertigungsplanung', prompt: 'Bringe die vier Planungsschritte in die richtige Reihenfolge.',
      items: ['Technologieketten definieren', 'Fertigungsfolgen definieren', 'Einzelprozesse definieren', 'Prozessvarianten bewerten'],
      explain: 'Von der maschinenunabhängigen Idee bis zur bewerteten Planung.' },
    { c: '3', type: 'assign', title: 'Verfahren den Hauptgruppen zuordnen', prompt: 'Zu welcher Hauptgruppe gehört das Verfahren?', buckets: ['Urformen', 'Umformen', 'Trennen'],
      items: [['Druckguss', 0], ['Sintern', 0], ['Sandguss', 0], ['Walzen', 1], ['Tiefziehen', 1], ['Gesenkformen', 1], ['Drehen', 2], ['Fräsen', 2], ['Schleifen', 2]],
      explain: 'Gießen und Sintern schaffen die Form, Umformen ändert sie plastisch, Spanen trennt Werkstoff ab.' },
    { c: '3', type: 'assign', title: 'Kalt- oder Warmumformung?', prompt: 'Ordne die Eigenschaften zu.', buckets: ['Kaltumformung', 'Warmumformung'],
      items: [['Gute Oberflächengüte', 0], ['Festigkeitssteigerung', 0], ['Großer Kraft- und Arbeitsbedarf', 0], ['Kein Maßfehler durch Schwindung', 0], ['Großes Umformvermögen', 1], ['Zunderbildung', 1], ['Hoher Energieaufwand', 1], ['Über Rekristallisationstemperatur', 1]],
      explain: 'Kalt: genau und fest, aber kraftintensiv. Warm: leicht umformbar, aber ungenauer und energieintensiv.' },
    { c: '3', type: 'match', title: 'Umformgruppen und Beispiele', prompt: 'Welches Verfahren gehört zu welcher Spannungsgruppe?',
      pairs: [['Druckumformen', 'Walzen'], ['Zugdruckumformen', 'Tiefziehen'], ['Zugumformen', 'Streckziehen'], ['Biegeumformen', 'Freies Biegen'], ['Schubumformen', 'Verdrehen']],
      explain: 'Eingeteilt wird nach den Spannungen, die beim Umformen wirken.' },
    { c: '3', type: 'assign', title: 'Bestimmte oder unbestimmte Schneide?', prompt: 'Sortiere die spanenden Verfahren.', buckets: ['Geometrisch bestimmte Schneide', 'Geometrisch unbestimmte Schneide'],
      items: [['Drehen', 0], ['Bohren', 0], ['Fräsen', 0], ['Räumen', 0], ['Schleifen', 1], ['Honen', 1], ['Läppen', 1]],
      explain: 'Verfahren mit unbestimmter Schneide dienen der Feinbearbeitung.' },
    // ---------- 3.1 ----------
    { c: '3.1', type: 'order', title: 'Verfahrenskette Zahnrad', prompt: 'Bringe die Stufen der Zahnradfertigung in die richtige Reihenfolge.',
      items: ['Weichvorbearbeitung', 'Weichfeinbearbeitung', 'Härten', 'Hartfeinbearbeitung'],
      explain: 'Die Hartfeinbearbeitung korrigiert am Ende den Härteverzug.' },
    { c: '3.1', type: 'order', title: 'Prozessschritte beim Gesenkformen', prompt: 'Vom Rohteil zum Fertigteil: Was kommt wann?',
      items: ['Erwärmen', 'Vorformen', 'Schmieden', 'Abgraten und Lochen', 'Wärmebehandeln (Vergüten)', 'Entzundern'],
      explain: 'Sechs Schritte, beginnend mit dem Erwärmen über die Rekristallisationstemperatur.' },
    { c: '3.1', type: 'match', title: 'Wälzverfahren und ihr Steckbrief', prompt: 'Ordne jedem Verfahren die passende Beschreibung zu.',
      pairs: [['Wälzfräsen', 'Gängigstes Verfahren für Außenverzahnungen, sehr produktiv'], ['Wälzstoßen', 'Oszillierendes Schneidrad, typisch für Innenverzahnungen'], ['Wälzhobeln', 'Zahnstangenwerkzeug, für sehr große Zahnräder'], ['Wälzschälen', 'Gekreuzte Achsen, Schruppen und Schlichten in einer Aufspannung']],
      explain: 'Wälzfräsen ist am produktivsten, Wälzstoßen am flexibelsten, Wälzschälen der Kompromiss.' },
    { c: '3.1', type: 'assign', title: 'Härteverfahren', prompt: 'Zu welchem Härteverfahren passt die Aussage?', buckets: ['Einsatzhärten', 'Randschichthärten', 'Nitrieren'],
      items: [['Kohlenstoff wird eingebracht', 0], ['Sehr große Härtetiefen', 0], ['Erheblicher Verzug', 0], ['Induktions- oder Flammhärten', 1], ['Kurze Prozesszeit, wenig Energie', 1], ['Stickstoff wird eingebracht', 2], ['Minimaler Verzug', 2]],
      explain: 'Einsatzhärten ist thermochemisch, Randschichthärten thermisch, Nitrieren chemisch.' },
    { c: '3.1', type: 'assign', title: 'Profilschleifen oder Wälzschleifen?', prompt: 'Ordne die Merkmale zu.', buckets: ['Profilschleifen', 'Wälzschleifen'],
      items: [['Diskontinuierlich, jede Lücke einzeln', 0], ['Bessere Profilgenauigkeit', 0], ['Auch Innenverzahnungen', 0], ['Kontinuierlich mit Schleifschnecke', 1], ['Bessere Teilungs- und Rundlaufgenauigkeit', 1], ['Kurze Bearbeitungszyklen', 1]],
      explain: 'Beide korrigieren den Härteverzug, mit unterschiedlichen Stärken.' },
    // ---------- 4 ----------
    { c: '4', type: 'assign', title: 'Maschinenkonzepte einordnen', prompt: 'Zu welcher Gruppe gehört das Konzept?', buckets: ['Einzelmaschinen', 'Flexible Mehrmaschinensysteme', 'Starre Mehrmaschinensysteme'],
      items: [['Universalmaschine', 0], ['CNC-Maschine', 0], ['Einzweckmaschine', 0], ['Flexible Fertigungszelle', 1], ['Flexibles Fertigungssystem', 1], ['Flexible Transferstraße', 1], ['Starre Transferstraße', 2], ['Umrüstbare Transferstraße', 2]],
      explain: 'Von der Universalmaschine (sehr flexibel) bis zur starren Transferstraße (sehr produktiv).' },
    { c: '4', type: 'match', title: 'Anforderungen an schlanke Produktionsmittel', prompt: 'Ordne jeder Anforderung ihre Erläuterung zu.',
      pairs: [['Schnell', 'So schnell wie nötig, nicht wie möglich'], ['Einfach', 'Nur die notwendige Technik'], ['Schlank', 'Kapazitäten dem Bedarf angepasst'], ['Stabil', 'Zuverlässige, wiederholbare Prozesse'], ['Flexibel', 'Strukturen passen sich leicht an']],
      explain: 'Die sechste Anforderung ist „sicher“: Sicherheit und Fehlervermeidung sind selbstverständlich.' },
    { c: '4', type: 'assign', title: 'Planungsprämissen: vermeiden oder vorsehen?', prompt: 'Was gehört in eine schlanke Fabrik?', buckets: ['Vermeiden', 'Vorsehen'],
      items: [['Maschinengruben und Fundamente', 0], ['Kreuzende Materialflüsse', 0], ['Große Komplexanlagen', 0], ['Kabelsalat', 0], ['Medienzufuhr von der Decke', 1], ['Kleine, duplizierbare Standardmaschinen', 1], ['Modular erweiterbare Anlagen', 1], ['Ausbaustufen der Automatisierung', 1]],
      explain: 'Alles zielt auf Anpassungsfähigkeit bei schwankenden Stückzahlen und Varianten.' },
    { c: '4', type: 'order', title: 'Schritte der Produktionsmittelwahl', prompt: 'Was wird zuerst festgelegt, was zuletzt?',
      items: ['Maschinentyp', 'Leistungsmerkmale', 'Ausstattung', 'Betriebsanforderungen und Abnahmekriterien'],
      explain: 'Am Ende steht das Lastenheft mit den Abnahmekriterien.' },
    { c: '4', type: 'order', title: 'Schritte der Kapazitätsplanung', prompt: 'Bringe die Schritte in die richtige Reihenfolge.',
      items: ['Kapazitätsbedarf berechnen', 'Verfügbare Kapazität berechnen', 'Maschinenanzahl bestimmen', 'Wirtschaftlichkeit rechnen'],
      explain: 'Bedarf durch verfügbare Kapazität ergibt die Maschinenanzahl.' },
    // ---------- 5 ----------
    { c: '5', type: 'assign', title: 'C-Gestell oder O-Gestell?', prompt: 'Ordne die Aussagen zu.', buckets: ['C-Gestell', 'O-Gestell'],
      items: [['Kleinere Pressen bis etwa 2500 kN', 0], ['Sehr gute Zugänglichkeit', 0], ['Auffederung führt zu Kippung', 0], ['Größere Pressen ab etwa 2500 kN', 1], ['Besonders hohe Steifigkeit', 1], ['Schlechtere Zugänglichkeit', 1]],
      explain: 'Das offene C ist zugänglich, aber weich. Das geschlossene O ist steif.' },
    { c: '5', type: 'assign', title: 'Störgrößen sortieren', prompt: 'Welche Art von Belastung liegt vor?', buckets: ['Statisch', 'Dynamisch', 'Thermisch'],
      items: [['Eigengewicht der Komponenten', 0], ['Spann- und Klemmkräfte', 0], ['Selbsterregte Schwingungen', 1], ['Fremderregte Schwingungen', 1], ['Wärme aus dem Antrieb', 2], ['Wärme aus dem Zerspanvorgang', 2]],
      explain: 'Dazu kommen geometrische Fehler der Maschinenelemente.' },
    { c: '5', type: 'assign', title: 'Systematisch oder zufällig?', prompt: 'Welche Fehlerart ist das?', buckets: ['Systematische Fehler', 'Zufällige Fehler'],
      items: [['Teilungsfehler der Messsysteme', 0], ['Geometrische Fehler der Führungen', 0], ['Umkehrspanne', 0], ['Reproduzierbar und ausgleichbar', 0], ['Stick-Slip', 1], ['Schwingungen', 1], ['Werkzeugverschleiß', 1], ['Statistischer Natur', 1]],
      explain: 'Systematische Fehler kann die Steuerung kompensieren, zufällige nicht.' },
    { c: '5', type: 'assign', title: 'Maschinen- oder Prozessfähigkeit?', prompt: 'Ordne die Merkmale zu.', buckets: ['Maschinenfähigkeit', 'Prozessfähigkeit'],
      items: [['Kurzzeitiges Streuverhalten', 0], ['Mindestens 50 Teile hintereinander', 0], ['Ein Werkzeug, eine Rohteilcharge', 0], ['Meist beim Maschinenhersteller', 0], ['Langfristiges Streuverhalten', 1], ['Reale Prozessbedingungen', 1], ['Mindestens 20 Stichproben zu je 5 Teilen', 1], ['Meist beim Anwender', 1]],
      explain: 'Erst wird die Maschine unter idealen Bedingungen bewertet, dann der Prozess im Alltag.' },
    { c: '5', type: 'match', title: 'Genauigkeitskennwerte', prompt: 'Was erfasst welcher Kennwert?',
      pairs: [['Geometrische Genauigkeit', 'Genauigkeit der Komponenten, ohne Last gemessen'], ['Stationäre Genauigkeit', 'Erreichte Endpositionen im Stillstand'], ['Thermische Genauigkeit', 'Einfluss von Wärmequellen'], ['Dynamische Genauigkeit', 'Nachgiebigkeit der Maschine in Bewegung']],
      explain: 'Der fünfte Kennwert ist die Genauigkeit des gefertigten Werkstücks.' },
    { c: '5', type: 'assign', title: 'Direkte oder indirekte Erfassung?', prompt: 'Wie werden Maschineneigenschaften ermittelt?', buckets: ['Direkte Erfassung', 'Indirekte Erfassung'],
      items: [['Messung im lastfreien Zustand', 0], ['Eindeutige Zuordnung der Fehlerursache', 0], ['Sehr aufwendig', 0], ['Fertigung von Prüfwerkstücken', 1], ['Anschaulich, Ergebnis liegt als Werkstück vor', 1], ['Schnittprozess beeinflusst das Ergebnis', 1]],
      explain: 'Direkt zeigt die Herstellgüte, indirekt die Arbeitsgüte der Maschine.' },
    // ---------- 5.1 ----------
    { c: '5.1', type: 'assign', title: 'Energie-, weg- oder kraftgebunden?', prompt: 'Ordne die Umformmaschinen ein.', buckets: ['Energiegebunden', 'Weggebunden', 'Kraftgebunden'],
      items: [['Fallhammer', 0], ['Gegenschlaghammer', 0], ['Spindelpresse', 0], ['Exzenterpresse', 1], ['Kurbelpresse', 1], ['Kniehebelpresse', 1], ['Hydraulikpresse', 2]],
      explain: 'Begrenzend ist jeweils die Energie, der Stößelweg oder die Kraft.' },
    { c: '5.1', type: 'assign', title: 'Welche Presse ist gemeint?', prompt: 'Ordne die Eigenschaften der passenden Maschine zu.', buckets: ['Schmiedehammer', 'Kurbel-/Exzenterpresse', 'Hydraulikpresse'],
      items: [['Mehrfachschläge möglich', 0], ['Lärm und Erschütterungen', 0], ['Sehr kurze Druckberührzeit', 0], ['Nennkraft nur nahe dem unteren Umkehrpunkt', 1], ['Sehr gut mechanisierbar, hohe Taktzahl', 1], ['Nennkraft über den gesamten Hub', 2], ['Ölsäule im Kraftfluss, daher weicher', 2], ['Äußerst flexible Stößelkinematik', 2]],
      explain: 'Jede Bauart hat ihr Einsatzgebiet: Schmieden, hohe Stückzahlen oder flexible Kinematik.' },
    { c: '5.1', type: 'match', title: 'Kenngrößen von Umformmaschinen', prompt: 'Ordne jeder Kenngröße ihre Bedeutung zu.',
      pairs: [['Hubzahl', 'Hübe pro Minute im Dauerbetrieb'], ['Schaltzahl', 'Zulässige Auslösungen im Einzelhubbetrieb'], ['Druckberührdauer', 'Zeit, in der Werkzeug und Werkstück in Kontakt sind'], ['Hub', 'Weg des Stößels zwischen oberer und unterer Endlage'], ['Arbeitsweg', 'Weg, über den die Verfahrenskraft wirkt']],
      explain: 'Alle Maschinenkenngrößen müssen die Verfahrenskenngrößen erfüllen.' },
    { c: '5.1', type: 'match', title: 'Bauarten von Schmiedehämmern', prompt: 'Wie wird der Bär angetrieben?',
      pairs: [['Fallhammer', 'Nur durch das Eigengewicht'], ['Oberdruckhammer', 'Eigengewicht plus Zylinderantrieb'], ['Gegenschlaghammer', 'Ober- und Unterbär fahren gegeneinander']],
      explain: 'Der Gegenschlaghammer leitet am wenigsten Erschütterung ins Fundament.' },
    // ---------- 5.2 ----------
    { c: '5.2', type: 'match', title: 'Achsanzahl und Beispielmaschine', prompt: 'Welche Maschine steht beispielhaft für welche Achsanzahl?',
      pairs: [['1 Achse', 'Manuelle Tischbohrmaschine'], ['2 Achsen', 'Einfache Drehmaschine'], ['3 Achsen', 'Einfache Fräsmaschine'], ['5 Achsen', 'Fräszentrum für beliebig liegende Flächen']],
      explain: 'Mit der vierten und fünften Achse kommen Drehachsen dazu.' },
    { c: '5.2', type: 'match', title: 'Drehmaschinen und ihr Einsatz', prompt: 'Ordne jeder Drehmaschine ihr typisches Einsatzfeld zu.',
      pairs: [['Leit- und Zugspindeldrehmaschine', 'Einzelteile, Prototypen, Reparaturen'], ['Mehrspindeldrehautomat', 'Serienproduktion im Rundtaktprinzip'], ['Frontdrehmaschine', 'Flache, scheibenförmige Werkstücke'], ['Karusselldrehmaschine', 'Große und schwere Werkstücke'], ['Dreh-Fräsmaschine', 'Komplettbearbeitung komplexer Teile']],
      explain: 'Fertigungsziel, Stückzahl und Wirtschaftlichkeit bestimmen die Wahl.' },
    { c: '5.2', type: 'assign', title: 'Dreh- oder Fräsmaschine?', prompt: 'Zu welcher Maschine gehört die Komponente typischerweise?', buckets: ['Drehmaschine', 'Fräsmaschine / Bearbeitungszentrum'],
      items: [['Reitstock', 0], ['Lünette', 0], ['Spannfutter mit Backen', 0], ['Stangenlader', 0], ['Palettenwechsler', 1], ['Schwenk-Drehtisch', 1], ['Vorsatzkopf', 1], ['Nutenplatte', 1]],
      explain: 'Beim Drehen rotiert das Werkstück, beim Fräsen das Werkzeug.' },
    { c: '5.2', type: 'match', title: 'Fünf-Achs-Konfigurationen', prompt: 'Wo sitzen die beiden Drehachsen, und was folgt daraus?',
      pairs: [['Kopf-Kopf', 'Fester, steifer Tisch: gut für große, schwere Teile'], ['Kopf-Tisch', 'Tischdrehung unbegrenzt: gut für runde Formen'], ['Tisch-Tisch', 'Ideal für Hinterschnitte, ungeeignet für schwere Teile']],
      explain: 'Jede Konfiguration hat ihre Vor- und Nachteile, die im Einzelfall abzuwägen sind.' },
    { c: '5.2', type: 'order', title: 'Vom Bearbeitungszentrum zum Fertigungssystem', prompt: 'Ordne nach steigendem Automatisierungsgrad.',
      items: ['Fräsmaschine', 'Bearbeitungszentrum (automatischer Werkzeugwechsel)', 'Flexible Fertigungszelle (automatischer Werkstückwechsel mit Puffer)', 'Flexibles Fertigungssystem (mehrere Maschinen, Leitrechner)'],
      explain: 'Jede Stufe automatisiert einen weiteren Teil des Ablaufs.' },
    // ---------- 6 ----------
    { c: '6', type: 'assign', title: 'Lean-Prinzipien in der Logistik', prompt: 'Zu welchem Prinzip gehört das Beispiel?', buckets: ['Fließen', 'Takten', 'Ziehen', 'Null Fehler'],
      items: [['Staplerfreie Fabrik', 0], ['Minimale Handlingstufen', 0], ['Versorgungstakt', 1], ['Geglättete Anlieferung', 1], ['100 % Vollgut-Leergut-Tausch', 2], ['Kanban-Karten', 2], ['Standardisierte, geführte Prozesse', 3], ['Schleppzug statt Stapler', 3]],
      explain: 'Die Logistik folgt denselben vier Prinzipien wie die Produktion.' },
    // ---------- 6.1 ----------
    { c: '6.1', type: 'assign', title: 'Welche Bereitstellungsart?', prompt: 'Ordne die Situationen der passenden Bereitstellung zu.', buckets: ['Sortenrein', 'Kommissionierung', 'Sequenzierung'],
      items: [['Normteile', 0], ['Teil ohne Varianz, Verbauquote 100 %', 0], ['Mehrere verwechselbare Varianten', 1], ['Verbauquote unter 100 %', 1], ['Wagen fährt mit dem Produkt mit', 1], ['Sehr hohe Varianz, Teil zu groß für den Wagen', 2], ['Just in Sequence vom Lieferanten', 2]],
      explain: 'Der Entscheidungsbaum fragt zuerst die Varianz ab, dann Größe und Eignung für den Wagen.' },
    { c: '6.1', type: 'assign', title: 'Traditionell oder schlank?', prompt: 'Wie sieht die Materialbereitstellung aus?', buckets: ['Traditionell', 'Schlank'],
      items: [['Stapler als Transportmittel', 0], ['Hoher Leerfahrtenanteil', 0], ['Große Lose in Gitterboxen', 0], ['Werker holt Material selbst', 0], ['Schleppzug im Versorgungstakt', 1], ['Kleine Lose in KLT', 1], ['Material im Griffbereich', 1], ['Einbahnstraßen', 1]],
      explain: 'Schlank trennt Wertschöpfung und Verschwendung: Der Werker bleibt am Verbauort.' },
    { c: '6.1', type: 'order', title: 'Line-Back: von innen nach außen', prompt: 'In welcher Reihenfolge wird die Logistik geplant?',
      items: ['Materialanstellung am Band', 'Materialtransport zum Band', 'Materialumschlag', 'Materialvereinnahmung im Wareneingang', 'Werksgrenze und Frachtenkonzept', 'Warenausgang beim Lieferanten'],
      explain: 'Ausgangspunkt ist die Montagelinie, der Ort der Wertschöpfung.' },
    { c: '6.1', type: 'order', title: 'Einstufigen Wareneingang ausplanen', prompt: 'Bringe die vier Phasen in die richtige Reihenfolge.',
      items: ['Anliefervolumen analysieren', 'Anlieferungen glätten (Zeitfenster)', 'Materialfluss optimieren', 'Informationsfluss optimieren'],
      explain: 'Erst die Daten, dann die Zeitfenster, dann Handling und Buchungen.' },
    { c: '6.1', type: 'assign', title: 'Hochregallager oder Supermarkt?', prompt: 'Ordne die Merkmale zu.', buckets: ['Hochregallager', 'Supermarkt'],
      items: [['Undefinierte, hohe Bestände', 0], ['Hohe Such- und Wegezeiten', 0], ['Gestapelte Bestände', 0], ['Definierter Minimal- und Maximalbestand', 1], ['Fester Platz je Variante', 1], ['First in, first out', 1], ['„Ist was weg, muss was hin“', 1]],
      explain: 'Der Supermarkt macht Bestände sichtbar und kontrollierbar.' },
    { c: '6.1', type: 'match', title: 'Kommissioniersysteme und ihr Haken', prompt: 'Ordne jedem System seinen typischen Nachteil zu.',
      pairs: [['Pick-by-Light', 'Verkabelungsaufwand, wenig flexibel'], ['Pick-by-Voice', 'Quittieren per Sprache fehleranfällig'], ['Datenfunk-Handterminal', 'Scannen kostet Zeit, Gerät in der Hand'], ['Augmented-Reality-Brille', 'Wenig Praxiserfahrung, sehr hoher Aufwand']],
      explain: 'Pick-by-Light setzt das Poka-Yoke-Prinzip um und senkt Pick-Fehler.' }
  ];

  /* ---------- Rechenaufgaben mit Zufallswerten ---------- */
  function ri(a, b, step) { step = step || 1; return a + step * Math.floor(Math.random() * (Math.floor((b - a) / step) + 1)); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function f(n, d) { return Number(n).toLocaleString('de-DE', { minimumFractionDigits: d || 0, maximumFractionDigits: d == null ? 2 : d }); }
  function mk(text, given, answer, unit, dec, solution, roundTxt) {
    var step = Math.pow(10, -dec);
    return { text: text, given: given, answer: answer, unit: unit, dec: dec, tol: Math.max(0.6 * step, Math.abs(answer) * 0.004), solution: solution,
      round: roundTxt || (dec === 0 ? 'eine ganze Zahl' : dec + (dec === 1 ? ' Nachkommastelle' : ' Nachkommastellen')) };
  }

  P.calcs = [
    { c: '1', title: 'Herstellkosten mit Zuschlägen', gen: function () {
      var mat = ri(40, 200, 10), mgk = pick([5, 8, 10]), lohn = ri(20, 120, 10), fgk = pick([100, 120, 150]), masch = ri(10, 80, 10);
      var m = mat * (1 + mgk / 100), fe = masch + lohn + lohn * fgk / 100, hk = m + fe;
      return mk('Berechne die Herstellkosten 1 für ein Stück.', ['Materialeinzelkosten: ' + f(mat) + ' €', 'Materialgemeinkostenzuschlag: ' + mgk + ' % (vom Material)', 'Maschinenkosten: ' + f(masch) + ' €', 'Fertigungslohn: ' + f(lohn) + ' €', 'Restfertigungsgemeinkosten: ' + fgk + ' % (vom Lohn)'],
        hk, '€', 2, 'Materialkosten = ' + f(mat) + ' × ' + f(1 + mgk / 100, 2) + ' = ' + f(m, 2) + ' €.<br>Fertigungskosten = ' + f(masch) + ' + ' + f(lohn) + ' + ' + f(lohn) + ' × ' + f(fgk / 100, 2) + ' = ' + f(fe, 2) + ' €.<br>Herstellkosten 1 = ' + f(m, 2) + ' + ' + f(fe, 2) + ' = ' + f(hk, 2) + ' €.');
    } },
    { c: '1', title: 'Selbstkosten aus den Herstellkosten', gen: function () {
      var hk = ri(200, 900, 50), fe = pick([2, 3, 5]), vw = pick([10, 15, 20]), vt = pick([4, 5, 8]);
      var sk = hk * (1 + (fe + vw + vt) / 100);
      return mk('Berechne die Selbstkosten. Alle Zuschläge beziehen sich auf die Herstellkosten 2.', ['Herstellkosten 2: ' + f(hk) + ' €', 'Forschung und Entwicklung: ' + fe + ' %', 'Verwaltung: ' + vw + ' %', 'Vertrieb: ' + vt + ' %'],
        sk, '€', 2, 'Zuschläge zusammen: ' + (fe + vw + vt) + ' %.<br>Selbstkosten = ' + f(hk) + ' × ' + f(1 + (fe + vw + vt) / 100, 2) + ' = ' + f(sk, 2) + ' €.');
    } },
    { c: '1', title: 'Maschinenstundensatz', gen: function () {
      var wbw = ri(100, 600, 50) * 1000, tn = pick([5, 8, 10]), z = pick([4, 6, 8, 10]), kr = ri(2, 10) * 1000, ki = ri(3, 15) * 1000, ke = ri(4, 20) * 1000, kw = ri(2, 12) * 1000, h = pick([1600, 2000, 3200, 4000]);
      var ka = wbw / tn, kz = wbw / 2 * z / 100, s = (ka + kz + kr + ki + ke + kw) / h;
      return mk('Berechne den Maschinenstundensatz.', ['Wiederbeschaffungswert: ' + f(wbw) + ' €', 'Nutzungsdauer: ' + tn + ' Jahre', 'Zinssatz: ' + z + ' % pro Jahr', 'Raumkosten: ' + f(kr) + ' € pro Jahr', 'Instandhaltung: ' + f(ki) + ' € pro Jahr', 'Energie: ' + f(ke) + ' € pro Jahr', 'Werkzeuge: ' + f(kw) + ' € pro Jahr', 'Nutzungszeit: ' + f(h) + ' h pro Jahr'],
        s, '€/h', 2, 'Abschreibung = ' + f(wbw) + ' / ' + tn + ' = ' + f(ka) + ' €.<br>Zinsen = ' + f(wbw) + ' / 2 × ' + f(z / 100, 2) + ' = ' + f(kz) + ' €.<br>Summe aller Jahreskosten = ' + f(ka + kz + kr + ki + ke + kw) + ' €.<br>Geteilt durch ' + f(h) + ' h = ' + f(s, 2) + ' €/h.');
    } },
    { c: '1', title: 'Amortisationszeit', gen: function () {
      var a = ri(100, 500, 20) * 1000, r = pick([0, 0, 10000, 20000]), n = pick([5, 8, 10]), g = ri(20, 90, 5) * 1000;
      var ab = a / n, rf = g + ab, t = (a - r) / rf;
      return mk('Nach wie vielen Jahren hat sich die Investition amortisiert?', ['Anschaffungskosten: ' + f(a) + ' €', 'Restwert: ' + f(r) + ' €', 'Nutzungsdauer: ' + n + ' Jahre', 'Gewinn: ' + f(g) + ' € pro Jahr'],
        t, 'Jahre', 2, 'Abschreibung = ' + f(a) + ' / ' + n + ' = ' + f(ab) + ' € pro Jahr.<br>Rückfluss = Gewinn + Abschreibung = ' + f(rf) + ' € pro Jahr.<br>Amortisationszeit = (' + f(a) + ' − ' + f(r) + ') / ' + f(rf) + ' = ' + f(t, 2) + ' Jahre.' + (t < n ? ' Das liegt unter der Nutzungsdauer, die Investition lohnt sich also.' : ' Das liegt nicht unter der Nutzungsdauer – wirtschaftlich kritisch.'));
    } },
    { c: '1', title: 'Stückkosten in der Kostenvergleichsrechnung', gen: function () {
      var a = ri(100, 400, 50) * 1000, n = pick([5, 8, 10]), z = pick([6, 8, 10]), fix = ri(10, 30) * 1000, h = pick([1600, 1800, 2000]), mat = pick([0.2, 0.3, 0.5, 0.8]), lohn = pick([40, 45, 50, 60, 70]), lst = pick([100, 120, 150, 200]);
      var menge = h * lst, ab = a / n, zi = a * 0.5 * z / 100, fx = ab + zi + fix, vr = h * lohn + mat * menge, ges = fx + vr, sk = ges / menge;
      return mk('Berechne die Stückkosten der Anlage.', ['Anschaffungskosten: ' + f(a) + ' €', 'Nutzungsdauer: ' + n + ' Jahre', 'Zinssatz: ' + z + ' %', 'Sonstige Fixkosten: ' + f(fix) + ' € pro Jahr', 'Arbeitszeit: ' + f(h) + ' h pro Jahr', 'Materialkosten: ' + f(mat, 2) + ' € je Stück', 'Lohnkosten: ' + lohn + ' € je Stunde', 'Produktionsleistung: ' + lst + ' Stück je Stunde'],
        sk, '€/Stück', 2, 'Menge = ' + f(h) + ' × ' + lst + ' = ' + f(menge) + ' Stück.<br>Abschreibung = ' + f(ab) + ' €, Zinsen = ' + f(a) + ' × 0,5 × ' + f(z / 100, 2) + ' = ' + f(zi) + ' €.<br>Fixkosten = ' + f(fx) + ' €.<br>Variable Kosten = ' + f(h) + ' × ' + lohn + ' + ' + f(mat, 2) + ' × ' + f(menge) + ' = ' + f(vr) + ' €.<br>Stückkosten = ' + f(ges) + ' / ' + f(menge) + ' = ' + f(sk, 2) + ' €.');
    } },
    { c: '1', title: 'Flussgrad', gen: function () {
      var n = ri(3, 5), pz = [], sum = 0; for (var i = 0; i < n; i++) { var p = ri(2, 15); pz.push(p); sum += p; }
      var dlz = sum * ri(8, 40), fg = sum / dlz * 100;
      return mk('Berechne den Flussgrad des Wertstroms.', ['Prozesszeiten der Schritte: ' + pz.join(' min, ') + ' min', 'Durchlaufzeit: ' + f(dlz) + ' min'],
        fg, '%', 1, 'Summe der Prozesszeiten = ' + sum + ' min.<br>Flussgrad = ' + sum + ' / ' + f(dlz) + ' = ' + f(fg, 1) + ' %.');
    } },
    { c: '1', title: 'Gesamtanlageneffektivität', gen: function () {
      var plan = pick([420, 450, 480]), still = ri(20, 90, 5), l = ri(80, 98), menge = ri(300, 900, 20), aus = ri(5, 40);
      var v = (plan - still) / plan, q = (menge - aus) / menge, g = v * l / 100 * q * 100;
      return mk('Berechne die Gesamtanlageneffektivität.', ['Verfügbare Produktionszeit: ' + plan + ' min', 'Stillstandszeit: ' + still + ' min', 'Leistungsgrad: ' + l + ' %', 'Produzierte Menge: ' + menge + ' Stück', 'Davon Ausschuss und Nacharbeit: ' + aus + ' Stück'],
        g, '%', 1, 'Verfügbarkeit = (' + plan + ' − ' + still + ') / ' + plan + ' = ' + f(v * 100, 1) + ' %.<br>Qualitätsrate = (' + menge + ' − ' + aus + ') / ' + menge + ' = ' + f(q * 100, 1) + ' %.<br>GAE = ' + f(v * 100, 1) + ' % × ' + l + ' % × ' + f(q * 100, 1) + ' % = ' + f(g, 1) + ' %.');
    } },
    { c: '1', title: 'Maximale Stückzahl einer Maschine', gen: function () {
      var tb = pick([400, 420, 450, 900]), nr = ri(2, 6), tr = pick([10, 15, 20, 30]), te = pick([1.5, 2, 2.5, 3, 4, 5]);
      var n = Math.floor((tb - nr * tr) / te + 1e-9);
      return mk('Wie viele Teile schafft die Maschine höchstens? Gib ganze Teile an.', ['Maximale Netto-Belegungszeit: ' + tb + ' min', 'Rüstvorgänge: ' + nr + ' zu je ' + tr + ' min', 'Bearbeitungszeit: ' + f(te, 1) + ' min je Stück'],
        n, 'Stück', 0, 'n = (' + tb + ' − ' + nr + ' × ' + tr + ') / ' + f(te, 1) + ' = ' + f((tb - nr * tr) / te, 1) + '. Abgerundet auf ganze Teile: ' + n + ' Stück.', 'ganze Teile (abrunden)');
    } },
    { c: '1', title: 'Fertigungstiefe', gen: function () {
      var e = ri(20, 90, 5), fr = ri(30, 160, 5), t = e / (e + fr) * 100;
      return mk('Berechne die Fertigungstiefe.', ['Wert der Eigenfertigung: ' + e + ' Mio. €', 'Wert des Fremdbezugs: ' + fr + ' Mio. €'],
        t, '%', 1, 'Fertigungstiefe = ' + e + ' / (' + e + ' + ' + fr + ') = ' + f(t, 1) + ' %.');
    } },
    { c: '2', title: 'Kundentakt', gen: function () {
      var br = pick([450, 480, 510]), pa = pick([30, 45, 60]), vz = pick([0, 15, 30]), netto = br - pa - vz, bed = pick([60, 90, 120, 150, 180, 200, 240]);
      var t = netto * 60 / bed;
      return mk('Berechne den Kundentakt in Sekunden je Stück.', ['Bruttoarbeitszeit: ' + br + ' min', 'Unbezahlte Pausen: ' + pa + ' min', 'Verteilzeiten: ' + vz + ' min', 'Kundenbedarf: ' + bed + ' Stück pro Tag'],
        t, 's/Stück', 1, 'Nettoarbeitszeit = ' + br + ' − ' + pa + ' − ' + vz + ' = ' + netto + ' min = ' + f(netto * 60) + ' s.<br>Kundentakt = ' + f(netto * 60) + ' / ' + bed + ' = ' + f(t, 1) + ' s je Stück.');
    } },
    { c: '3.1', title: 'Zahnrad: Teilkreis und Kopfkreis', gen: function () {
      var m = pick([1.5, 2, 2.5, 3, 4, 5]), z = ri(14, 60), kopf = Math.random() < 0.5;
      var v = kopf ? m * (z + 2) : m * z;
      return mk('Berechne den ' + (kopf ? 'Kopfkreisdurchmesser' : 'Teilkreisdurchmesser') + ' des Zahnrads.', ['Modul: ' + f(m, 1) + ' mm', 'Zähnezahl: ' + z],
        v, 'mm', 1, kopf ? 'd<sub>a</sub> = m · (z + 2) = ' + f(m, 1) + ' × ' + (z + 2) + ' = ' + f(v, 1) + ' mm.' : 'd = m · z = ' + f(m, 1) + ' × ' + z + ' = ' + f(v, 1) + ' mm.');
    } },
    { c: '3.1', title: 'Zahnradpaar: Achsabstand', gen: function () {
      var m = pick([1.5, 2, 2.5, 3, 4]), z1 = ri(15, 30), z2 = ri(31, 80), a = m * (z1 + z2) / 2;
      return mk('Berechne den Achsabstand des Stirnradpaars.', ['Modul: ' + f(m, 1) + ' mm', 'Zähnezahl Rad 1: ' + z1, 'Zähnezahl Rad 2: ' + z2],
        a, 'mm', 2, 'd<sub>1</sub> = ' + f(m, 1) + ' × ' + z1 + ' = ' + f(m * z1, 1) + ' mm, d<sub>2</sub> = ' + f(m, 1) + ' × ' + z2 + ' = ' + f(m * z2, 1) + ' mm.<br>a = (d<sub>1</sub> + d<sub>2</sub>) / 2 = ' + f(a, 2) + ' mm.');
    } },
    { c: '4', title: 'Anzahl benötigter Maschinen', gen: function () {
      var st = ri(20, 200, 10) * 1000, pz = pick([1.5, 2, 2.5, 3, 4, 5, 6]), rz = pick([0.2, 0.3, 0.5, 1]), tage = pick([220, 230, 250]), sch = pick([1, 2, 3]), net = pick([400, 420, 450]);
      var bed = st * (pz + rz), kap = tage * sch * net, x = bed / kap, n = Math.ceil(x - 1e-9);
      return mk('Wie viele Maschinen werden gebraucht? Gib eine ganze Zahl an.', ['Jahresstückzahl: ' + f(st) + ' Stück', 'Prozesszeit: ' + f(pz, 1) + ' min je Stück', 'Rüstzeitanteil: ' + f(rz, 1) + ' min je Stück', 'Arbeitstage: ' + tage + ' pro Jahr', 'Schichten: ' + sch + ' pro Tag', 'Nettolaufzeit: ' + net + ' min je Schicht'],
        n, 'Maschinen', 0, 'Kapazitätsbedarf = ' + f(st) + ' × (' + f(pz, 1) + ' + ' + f(rz, 1) + ') = ' + f(bed) + ' min.<br>Verfügbare Kapazität je Maschine = ' + tage + ' × ' + sch + ' × ' + net + ' = ' + f(kap) + ' min.<br>' + f(bed) + ' / ' + f(kap) + ' = ' + f(x, 2) + ' → aufgerundet ' + n + '.', 'ganze Maschinen (aufrunden)');
    } },
    { c: '5', title: 'Fähigkeitsindizes', gen: function () {
      var t = pick([0.04, 0.06, 0.08, 0.1, 0.12]), s = pick([0.004, 0.005, 0.006, 0.008, 0.01]), off = pick([0, 0.005, 0.01, 0.015]);
      var wantK = Math.random() < 0.6, krit = t / 2 - off, c = t / (6 * s), ck = krit / (3 * s), v = wantK ? ck : c;
      return mk('Berechne den Index ' + (wantK ? 'cmk' : 'cm') + '.', ['Toleranzbreite T: ' + f(t, 3) + ' mm', 'Standardabweichung s: ' + f(s, 3) + ' mm', 'Mittelwert liegt ' + f(off, 3) + ' mm neben der Toleranzmitte'],
        v, '', 2, wantK ? 'Abstand zur näheren Toleranzgrenze: ' + f(t / 2, 3) + ' − ' + f(off, 3) + ' = ' + f(krit, 3) + ' mm.<br>c<sub>mk</sub> = ' + f(krit, 3) + ' / (3 × ' + f(s, 3) + ') = ' + f(ck, 2) + '.' : 'c<sub>m</sub> = T / (6 · s) = ' + f(t, 3) + ' / (6 × ' + f(s, 3) + ') = ' + f(c, 2) + '. Die Lage des Mittelwerts spielt für c<sub>m</sub> keine Rolle.');
    } },
    { c: '5.1', title: 'Arbeitsvermögen eines Fallhammers', gen: function () {
      var m = ri(500, 3000, 100), h = pick([1, 1.2, 1.5, 1.8, 2]), es = pick([0.3, 0.4, 0.5, 0.6]), ef = pick([0.7, 0.8, 0.9]);
      var w = m * 9.81 * h * es * ef / 1000;
      return mk('Berechne das Arbeitsvermögen des Fallhammers (g = 9,81 m/s²).', ['Bärmasse: ' + f(m) + ' kg', 'Fallhöhe: ' + f(h, 1) + ' m', 'Schlagwirkungsgrad: ' + f(es, 1), 'Fallwirkungsgrad: ' + f(ef, 1)],
        w, 'kJ', 2, 'W = m · g · H · η<sub>S</sub> · η<sub>F</sub> = ' + f(m) + ' × 9,81 × ' + f(h, 1) + ' × ' + f(es, 1) + ' × ' + f(ef, 1) + ' = ' + f(w * 1000, 0) + ' J = ' + f(w, 2) + ' kJ.');
    } },
    { c: '5.1', title: 'Kolbenkraft einer Hydraulikpresse', gen: function () {
      var p = pick([150, 200, 250, 300]), d = pick([200, 250, 300, 400, 500]);
      var a = Math.PI / 4 * d * d, kn = p * 0.1 * a / 1000;
      return mk('Berechne die Kolbenkraft beim Ausfahren. Der Gegendruck wird vernachlässigt.', ['Öldruck: ' + p + ' bar (1 bar = 0,1 N/mm²)', 'Kolbendurchmesser: ' + d + ' mm'],
        kn, 'kN', 0, 'A = π/4 × ' + d + '² = ' + f(a, 0) + ' mm².<br>F = p · A = ' + f(p * 0.1, 0) + ' N/mm² × ' + f(a, 0) + ' mm² = ' + f(kn * 1000, 0) + ' N ≈ ' + f(kn, 0) + ' kN.', 'ganze Kilonewton');
    } },
    { c: '6.1', title: 'Behälterumschlag pro Arbeitstag', gen: function () {
      var fuell = pick([12, 20, 24, 30, 40, 50]), beh = ri(4, 40), ver = fuell * beh;
      return mk('Wie viele Behälter müssen pro Arbeitstag transportiert werden?', ['Teileverbrauch: ' + f(ver) + ' Stück pro Arbeitstag', 'Füllmenge: ' + fuell + ' Teile je Behälter'],
        beh, 'Behälter', 0, 'Behälter pro Arbeitstag = ' + f(ver) + ' / ' + fuell + ' = ' + beh + '.');
    } },
    { c: '6.1', title: 'Versorgungstakt für Kommissionierwagen', gen: function () {
      var w = ri(2, 6), t = pick([1.5, 2, 2.5, 3, 4]);
      return mk('Berechne den Versorgungstakt der Route.', ['Kommissionierwagen je Route: ' + w, 'Produktionstakt: ' + f(t, 1) + ' min'],
        w * t, 'min', 1, 'Versorgungstakt = ' + w + ' × ' + f(t, 1) + ' min = ' + f(w * t, 1) + ' min.');
    } },
    { c: '6.1', title: 'Versorgungstakt für ein sortenreines Teil', gen: function () {
      var lt = pick([1, 1, 2]), fm = pick([20, 24, 30, 40, 60]), t = pick([1.5, 2, 3]), vbq = pick([100, 100, 50, 80]), st = pick([1, 1, 2]);
      var v = lt * fm * t / (vbq / 100 * st);
      return mk('Berechne den Versorgungstakt für dieses Teil.', ['Ladungsträger pro Anlieferung: ' + lt, 'Füllmenge: ' + fm + ' Stück je Ladungsträger', 'Taktzeit: ' + f(t, 1) + ' min', 'Verbauquote: ' + vbq + ' %', 'Stück je Produkteinheit: ' + st],
        v, 'min', 1, 'Versorgungstakt = (' + lt + ' × ' + fm + ' × ' + f(t, 1) + ') / (' + f(vbq / 100, 2) + ' × ' + st + ') = ' + f(v, 1) + ' min.');
    } },
    { c: '6.1', title: 'Bestand im Supermarkt', gen: function () {
      var v = ri(20, 200, 10), af = pick([1, 2, 4, 8]), sb = pick([1, 2, 4]), b = v * (af + sb);
      return mk('Auf welchen maximalen Bestand muss der Supermarkt für diese Sachnummer ausgelegt werden?', ['Durchschnittsverbrauch: ' + v + ' Stück pro Stunde', 'Anlieferfrequenz (Wiederbeschaffungszeit): alle ' + af + ' h', 'Sicherheitsbestand: Reichweite ' + sb + ' h'],
        b, 'Stück', 0, 'Bestand = V × (Anlieferfrequenz + Sicherheitsbestand) = ' + v + ' × (' + af + ' + ' + sb + ') = ' + f(b) + ' Stück.');
    } },
    { c: '6.1', title: 'Takt der Anlieferung im Wareneingang', gen: function () {
      var net = pick([450, 840, 900, 960]), n = pick([10, 12, 15, 20, 24, 30]);
      return mk('In welchem Takt sollten die Lkw-Zeitfenster vergeben werden?', ['Nettoarbeitszeit im Wareneingang: ' + net + ' min', 'Anlieferungen: ' + n + ' pro Arbeitstag'],
        net / n, 'min', 1, 'Takt der Anlieferung = ' + net + ' / ' + n + ' = ' + f(net / n, 1) + ' min.');
    } },
    { c: '6.1', title: 'Fahrtzeit des Routenzugs', gen: function () {
      var s = ri(300, 1500, 50), v = pick([6, 6, 8, 10]), t = s / (v * 1000 / 60);
      return mk('Wie lange fährt der Routenzug für eine Runde (ohne Behälterwechsel)?', ['Fahrstrecke: ' + f(s) + ' m', 'Geschwindigkeit: ' + v + ' km/h'],
        t, 'min', 1, v + ' km/h = ' + f(v * 1000 / 60, 1) + ' m/min.<br>Fahrtzeit = ' + f(s) + ' / ' + f(v * 1000 / 60, 1) + ' = ' + f(t, 1) + ' min.');
    } }
  ];
})();
