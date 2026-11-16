/* Lesekapitel 4 bis 6.1 */
window.PML.chapters.push({
  id: '4', nr: '4', title: 'Schlanke Anlagen- und Kapazitätsplanung', short: 'Anlagenplanung',
  teaser: 'Flexible Produktionsmittel wählen und Kapazitäten berechnen.', min: 11,
  html: `
<p class="lead">Nach den Verfahren kommen die Produktionsmittel: Welche Maschinen, wie ausgestattet, wie viele davon? Der Lean-Gedanke gilt auch hier – lieber klein, einfach und anpassbar als groß, komplex und starr.</p>

<h2>Wann werden Betriebsmittel beschafft?</h2>
<p>Im Produktlebenszyklus folgt auf die Vorentwicklung der <strong>Produktentstehungsprozess</strong> (Produktdefinition → Konzeptentwicklung → Serienentwicklung → Serienvorbereitung → Serienhochlauf) und dann die Serienproduktion zwischen <strong>SOP</strong> (Start of Production) und <strong>EOP</strong> (End of Production). Betriebsmittel werden in Serienentwicklung und Serienvorbereitung geplant und beschafft.</p>
<p>Meilensteine der Betriebsmittel: Design-Freeze der werkzeugfallenden Teile → langlaufende Werkzeuge bestellt → Betriebsmittel bestellt → abgenommen → in Betrieb genommen. Meilensteine des Anlaufs: Produktionsvorserie → Nullserie → SOP → Kammlinie erreicht (volle Stückzahl).</p>
<p>Drei Planungen laufen parallel: <strong>Fertigungsplanung</strong> (Teilefertigung, Montage, Qualitätssicherung, Layout, Betriebs- und Prüfmittel), <strong>Logistikplanung</strong> (Logistikkonzepte je Bauteil, interne Materialflüsse, Anforderungen an Lieferanten) und <strong>Vorserien- und Anlaufplanung</strong> (Absicherung von Vorserie und Hochlauf unter Serienbedingungen).</p>

<h2>Produktivität gegen Flexibilität</h2>
<p>Häufige Planungsfehler: starre Anlagen, schwer revidierbare Standortentscheidungen, kaum Blick auf künftige Änderungen. Die Kapazität lässt sich dann nur noch über Arbeitszeiten anpassen.</p>
<p>Kein Maschinenkonzept ist gleichzeitig maximal produktiv und maximal flexibel:</p>
<table>
<tr><th>Gruppe</th><th>Konzepte (von flexibel nach produktiv)</th></tr>
<tr><td>Einzelmaschinen</td><td>Universalmaschine → CNC-Maschine → umrüstbare Einzweckmaschine → Einzweckmaschine</td></tr>
<tr><td>Flexible Mehrmaschinensysteme</td><td>flexible Fertigungszelle → flexibles Fertigungssystem → flexible Transferstraße</td></tr>
<tr><td>Starre Mehrmaschinensysteme</td><td>umrüstbare Transferstraße → starre Transferstraße</td></tr>
</table>
<p><strong>Flexibilität</strong> heißt, Kundenwünsche kurzfristig zu erfüllen. Sie hat zwei Seiten:</p>
<ul>
<li><strong>Technische Flexibilität:</strong> Anpassung an breiten Produktmix, neue Fertigungstechnik, neue Produktgenerationen.</li>
<li><strong>Mengenmäßige Flexibilität:</strong> Anpassung an wachsende oder schrumpfende Märkte.</li>
</ul>
<p>Schlanke Produktionsmittel passen sich wirtschaftlich an stark schwankende Mengen und steigende Variantenvielfalt an. Modulare Einzelmaschinen schaffen das besser als hochkomplexe Anlagen, die alles können sollen.</p>
<h3>Sechs Anforderungen an schlanke Produktionsmittel</h3>
<table>
<tr><td><strong>Schnell</strong></td><td>so schnell wie nötig, nicht so schnell wie möglich</td></tr>
<tr><td><strong>Sicher</strong></td><td>Sicherheit und Fehlervermeidung sind selbstverständlich</td></tr>
<tr><td><strong>Einfach</strong></td><td>nur die notwendige Technik statt technischer Brillanz</td></tr>
<tr><td><strong>Schlank</strong></td><td>Kapazitäten sind dem Bedarf angepasst</td></tr>
<tr><td><strong>Stabil</strong></td><td>Prozesse sind zuverlässig und wiederholbar</td></tr>
<tr><td><strong>Flexibel</strong></td><td>Strukturen passen sich leicht an</td></tr>
</table>

<h2>Acht Planungsprämissen</h2>
<table>
<tr><th>Vermeiden</th><th>Stattdessen</th></tr>
<tr><td>historischen Wildwuchs</td><td>sinnvolle Prozessketten: Prozesse verketten, geradliniger Materialfluss, kürzeste Durchlaufzeit, Qualität im Prozess</td></tr>
<tr><td>Kabelsalat</td><td>übersichtliche, erweiterbare Installationen</td></tr>
<tr><td>Bodenarbeiten</td><td>flexible Medienzufuhr von der Decke</td></tr>
<tr><td>Maschinengruben und Fundamente</td><td>bewegliche Maschinen, flexible Versorgungsanschlüsse, Hebevorrichtungen</td></tr>
<tr><td>„Schlachtschiffe“ (große Komplexanlagen)</td><td>kleine, duplizierbare Standardmaschinen</td></tr>
<tr><td>feste Endausbaustufe</td><td>modular erweiterbare Anlagen</td></tr>
<tr><td>Vollautomatisierung von Beginn an</td><td>Ausbaustufen mit angepasstem Automatisierungsgrad</td></tr>
<tr><td>kreuzende Materialflüsse</td><td>Layout mit gerichtetem Fluss und minimalen Wegen</td></tr>
</table>
<p>Kleine Standardmaschinen senken die Anschaffungskosten, vermeiden schlechte Auslastung durch Überkapazität, erlauben schnelle Reaktion auf Stückzahlschwankungen und verringern das Stillstandsrisiko.</p>

<h2>Produktionsmittel wählen</h2>
<ol>
<li><strong>Maschinentyp definieren:</strong> mögliche Typen für den Fertigungsprozess finden, nötige Achsen festlegen, den technologisch besten Typ auswählen.</li>
<li><strong>Leistungsmerkmale definieren:</strong> Arbeitsraum der Achsen, angetriebene Werkzeuge, Antriebs- und Leistungskomponenten.</li>
<li><strong>Ausstattung definieren:</strong> Werkstückzufuhr und -spannung, Werkzeugwechselsystem, Zusatzausstattung, Steuerung und IT-Schnittstellen.</li>
<li><strong>Betriebsanforderungen definieren:</strong> technisch-wirtschaftliche Ziele, nachzuweisende Maschinenfähigkeit, Abnahmekriterien.</li>
</ol>
<ul>
<li>Die Anforderungen von Werkstück (Form, Größe, Gewicht) und Verfahren (Art, Genauigkeit, Produktionsleistung) bestimmen Typ und Konfiguration. Bewertet wird technologisch (Steifigkeit, Genauigkeit, Erweiterbarkeit) und wirtschaftlich (Anschaffung, Betrieb, Amortisation).</li>
<li>Der <strong>Arbeitsraum</strong> muss zur Werkstückgeometrie passen, einschließlich der Werkzeuglängen.</li>
<li>Die <strong>Antriebsleistung</strong> richtet sich nach dem Arbeitsgang mit dem höchsten Leistungsbedarf. Die Vorschubleistung ist winzig (etwa 1/3000 der Zerspanungsleistung) und wird vernachlässigt. Faustwert bei 45° Einstellwinkel: Schnittkraft : Vorschubkraft : Passivkraft ≈ 5 : 1 : 2.</li>
<li>Die <strong>Ausstattung</strong> entscheidet maßgeblich über die Produktivität.</li>
<li>Aus der Anforderungsliste entsteht das <strong>Lastenheft</strong>, das Ablauf und Kriterien der Maschinenabnahme beschreibt.</li>
</ul>

<h2>Kapazitäten planen</h2>
<p>Ziel: so wenige Maschinen wie möglich, so hoch ausgelastet wie möglich. Vier Schritte: Kapazitätsbedarf berechnen → verfügbare Kapazität berechnen → Maschinenanzahl bestimmen → Wirtschaftlichkeit rechnen.</p>
<div class="formel">Kapazitätsbedarf = Stückzahl × (Prozesszeit + Rüstzeit)</div>
<div class="formel">Benötigte Maschinen = Kapazitätsbedarf / verfügbare Kapazität<small>Verfügbare Kapazität aus Schichtmodell, Arbeitstagen, Nettolaufzeit je Schicht und Gesamtanlageneffektivität. Das Ergebnis wird aufgerundet.</small></div>
<div class="formel">Benötigte Maschinenbediener = Personalschlüssel × Maschinenanzahl</div>
<div class="bsp"><p><strong>Beispiel:</strong> 60 000 Stück pro Jahr, 4 min Prozesszeit, 0,5 min Rüstanteil je Stück → Bedarf 270 000 min. Eine Maschine bietet im Zweischichtbetrieb 180 000 min → 1,5, also 2 Maschinen.</p></div>
<h3>Vorgehen in vier Phasen</h3>
<ol>
<li>Kapazitäten für <strong>2 Schichten</strong> ermitteln: Maschinenanzahl je Typ, Produktionsmitarbeiter je Typ, Wirtschaftlichkeit (Herstellkosten 2).</li>
<li>Dasselbe mit <strong>3 Schichten</strong>.</li>
<li>Dasselbe mit <strong>1 Schicht</strong>, sofern sinnvoll.</li>
<li>Schichtmodelle vergleichen und das wirtschaftlichste wählen.</li>
</ol>
<h3>Nivellierung Mensch und Maschine</h3>
<p>Die Leistung der Maschinen muss am <strong>Kundentakt</strong> ausgerichtet und mit den manuellen Tätigkeiten abgestimmt sein. Wartet der Mensch auf die Maschine, ist das Verschwendung. Läuft die Maschine länger als der Takt, fehlt Kapazität.</p>
<h3>Gleichverteilungszyklus (GVZ, EPEI)</h3>
<p>Der GVZ ist die <strong>kürzestmögliche Zyklusdauer</strong>, in der eine Teilmenge des Jahresbedarfs <em>aller</em> Varianten produziert und gerüstet werden kann. In der Literatur heißt das EPEI (Every Part Every Interval).</p>
<ul>
<li>Er liefert für jede Variante eine <strong>Minimallosgröße</strong>, die einmal je Zyklus gefertigt wird.</li>
<li>Er beantwortet die Frage: Wie oft darf maximal gerüstet werden?</li>
<li>Er verbindet Rüstzeitreduktion, kleinere Lose und häufigeres Rüsten.</li>
<li>Man nimmt bewusst nicht-optimale Rüstkosten in Kauf, um kleinste Weitergabemengen und kurze Durchlaufzeiten zu bekommen.</li>
</ul>
<p>Die Alternativen sind schlechter: „Rüstkostenoptimal“ (große Lose) produziert auf Lager und am Kunden vorbei. „Durchlaufzeitoptimal“ (ständig rüsten) gefährdet das Programm, weil mehr gerüstet als produziert wird.</p>
`});

window.PML.chapters.push({
  id: '5', nr: '5', title: 'Grundlagen der Werkzeugmaschinen', short: 'Werkzeugmaschinen',
  teaser: 'Aufbau, Störgrößen, Genauigkeit und Maschinenfähigkeit.', min: 14,
  html: `
<p class="lead">Eine Werkzeugmaschine erzeugt die Form eines Werkstücks über die Relativbewegung zwischen Werkzeug und Werkstück. Wie genau sie das kann, hängt von ihrem Aufbau ab und davon, wie gut sie Kräfte, Schwingungen und Wärme verkraftet.</p>

<h2>Definition, Aufgaben, Einteilung</h2>
<p>Nach DIN 69651 ist eine Werkzeugmaschine eine <strong>mechanisierte und mehr oder weniger automatisierte Fertigungseinrichtung, die durch relative Bewegung zwischen Werkstück und Werkzeug eine vorgegebene Form erzeugt</strong> oder verändert.</p>
<p>Ihre Aufgaben: die Kernprozesse der Fertigung ausführen, die nötigen Bewegungen über Freiheitsgrade (Linear- und Drehachsen) bereitstellen, diese mit Antrieben, Sensoren und Steuerung kontrolliert ausführen und Prozess- und Störgrößen (Kräfte, Momente, Temperaturen, Schwingungen) aufnehmen und mindern.</p>
<ul>
<li>Die Einteilung lehnt sich an die Fertigungsverfahren nach DIN 8580 an. Benannt wird nach <strong>Fertigungsverfahren und Automatisierungsgrad</strong>.</li>
<li>Kann eine Maschine mehrere Verfahren, steht „Bearbeitungs-“ davor (Bearbeitungszentrum).</li>
<li>Oft benennt man auch nach der Bauform: Konsolfräsmaschine, Portalfräsmaschine, Schrägbettdrehmaschine.</li>
<li>DIN 69651 unterscheidet <strong>Einzelmaschinen</strong> und <strong>Mehrmaschinensysteme</strong>.</li>
</ul>
<h3>Anforderungen</h3>
<p>Neben der Maschinensicherheit zählen vor allem <strong>Arbeitsgenauigkeit</strong> und <strong>Leistung</strong>. Hohe Genauigkeit verlangt hohe Steifigkeit, gutes dynamisches Verhalten (Dämpfung) und geringe thermische Ausdehnung. Hohe Produktivität verlangt hohe Arbeitsgeschwindigkeiten. Dazu kommen gute Automatisierbarkeit und Erweiterbarkeit.</p>
<h3>Was bestimmt die Auswahl?</h3>
<ul>
<li>Fertigungsaufgabe und Verfahren → Anzahl und Lage der Achsen, Drehzahlbereich, Drehmomente.</li>
<li>Geforderte Genauigkeit und Oberflächengüte → statische und dynamische Steifigkeit.</li>
<li>Werkstückvielfalt und Losgrößen → Grad der Automatisierung.</li>
</ul>

<h2>Automatisierung</h2>
<p>Automatisierung steigert Produktivität, Flexibilität, Qualität und Wirtschaftlichkeit: kürzere Durchlaufzeiten, weniger Lohnkosten, höhere Auslastung. Sie erhöht aber auch Investition, Komplexität, Störanfälligkeit und den Know-how-Bedarf für Planung und Instandhaltung.</p>
<div class="merke"><p><strong>Merke:</strong> Automatisieren nur, wo man automatisieren muss – nicht, wo man automatisieren kann.</p></div>
<p>Für automatisierte Abläufe braucht eine Maschine Werkzeug- und Werkstückspeicher mit Wechseleinrichtungen, Sensoren und Diagnose (Werkzeugverschleiß, Werkzeugbruch) und die Einbindung in übergeordnete Systeme über <strong>DNC</strong> (Direct Numerical Control) und <strong>BDE</strong> (Betriebsdatenerfassung).</p>
<p>Im <strong>flexiblen Fertigungssystem</strong> legt die Produktionsplanung die Aufträge fest, das PPS-System gibt sie an den <strong>Leitrechner</strong>, der die Ausführung steuert. Bewegungen, Sicherheitstechnik und Materialfluss laufen über <strong>speicherprogrammierbare Steuerungen (SPS)</strong>. Die Bearbeitung selbst steht im <strong>NC-Programm</strong> (DIN 66025), meist aus CAD/CAM erzeugt.</p>

<h2>Aufbau und Baugruppen</h2>
<p>Vier Grundelemente: <strong>Gestell</strong> (Ständer, Fundament, Schlitten), <strong>Führungen</strong> (Linearführungen, Lagerungen), <strong>Antriebe</strong> (Haupt- und Nebenantrieb) und <strong>Steuerungen</strong> (Leistungs- und Informationssteuerung). Dazu kommen Werkzeug- und Werkstückaufnahme, Hauptspindel, Automatisierungsbaugruppen, Ver- und Entsorgung (Kühlschmierstoff, Späne) und die Verkleidung.</p>
<h3>Gestell</h3>
<p>Das Gestell ist der stützende Grundkörper. Es trägt und führt alle Bauelemente und besteht aus Betten, Ständern, Tischen, Konsolen und Querbalken. Seine Form folgt aus Lage und Länge der Bewegungsachsen, der Höhe der Prozesskräfte und der Zugänglichkeit. Eigengewichte, Werkstückgewichte und Prozesskräfte dürfen es nur gering verformen.</p>
<table>
<tr><th>Drehmaschinenbett</th><th>Eignung</th></tr>
<tr><td>Flachbett</td><td>Großdrehmaschinen, hohe Steifigkeit</td></tr>
<tr><td>Schrägbett</td><td>Späne und Kühlschmierstoff fließen ab, weniger thermische Belastung des Betts</td></tr>
<tr><td>Frontbett</td><td>Futterteile mit automatischem Werkstückwechsel</td></tr>
<tr><td>Senkrecht (Ständerbauweise)</td><td>große Bauteile ohne Biegebeanspruchung der Spindel</td></tr>
</table>
<p>Bei Bohr- und Fräsmaschinen: Konsolständerbauweise nur für kleinere Maschinen, Bettfräsmaschinen für schwere Werkstücke, Portalbauweise für hohe Zerspanleistung an großflächigen Teilen.</p>
<table>
<tr><th></th><th>C-Gestell</th><th>O-Gestell</th></tr>
<tr><td>Einsatz</td><td>kleinere Pressen bis etwa 2500 kN</td><td>größere Pressen ab etwa 2500 kN</td></tr>
<tr><td>Vorteil</td><td>sehr gute Zugänglichkeit des Arbeitsraums</td><td>besonders hohe Steifigkeit, keine Kippung</td></tr>
<tr><td>Nachteil</td><td>unsymmetrische Belastung, Auffederung führt zu Kippung</td><td>schlechtere Zugänglichkeit</td></tr>
</table>
<h3>Führungen</h3>
<p><strong>Bewegungsführungen</strong> bewegen sich während der Bearbeitung, <strong>Verstellführungen</strong> sind dabei geklemmt. Beide gibt es geradlinig und kreisförmig. Anforderungen: hohe Steifigkeit, geringe Reibung, gute Dämpfung, wenig Verschleiß, wenig Spiel – bei niedrigen Herstell- und Betriebskosten.</p>
<table>
<tr><th>Bauform</th><th>Plus</th><th>Minus</th></tr>
<tr><td>Flachführung (prismatisch, rechtwinklig)</td><td>einfach zu fertigen und nachzustellen, gute Dämpfung</td><td>stellt nicht selbsttätig nach</td></tr>
<tr><td>V- und Dachführung (prismatisch, schiefwinklig)</td><td>stellt selbsttätig nach</td><td>Schmieröl läuft ab, höhere Flächenpressung</td></tr>
<tr><td>Schwalbenschwanzführung (prismatisch, schiefwinklig)</td><td>nimmt Kräfte in vielen Richtungen auf, hoch belastbar</td><td>schwierig zu fertigen, stellt nicht selbsttätig nach</td></tr>
<tr><td>Rundführung (zylindrisch)</td><td>hohe Formsteifigkeit, einfache Bearbeitung</td><td>stellt nicht selbsttätig nach</td></tr>
</table>

<h2>Störgrößen</h2>
<p>Fertigungsfehler der Maschinenelemente und die wirkenden Belastungen bestimmen die erreichbare Genauigkeit.</p>
<ul>
<li><strong>Statisch</strong> (zeitlich konstant): Eigengewichte, Spann- und Klemmkräfte, Prozesskräfte, Reibung. Sie laufen im <strong>Kraftfluss</strong> durch die Maschine und verlagern den Werkzeugarbeitspunkt (TCP) je nach Steifigkeit unterschiedlich stark in x, y und z. Bei Umformmaschinen verursacht das Triebwerk den größten Anteil der Verformung; C-Gestelle verformen sich stärker als O-Gestelle.</li>
<li><strong>Dynamisch</strong>: Schwingungen, entweder <strong>fremderregt</strong> (Ursache im Fertigungsprozess oder in anderen Quellen wie den Antrieben) oder <strong>selbsterregt</strong> (die Maschine schaukelt sich ohne äußere periodische Anregung auf). Stärke und Form hängen von Eigenfrequenzen, Massenverteilung und Dämpfung (Material, Fügestellen) ab. Folgen: schlechte Oberfläche und Genauigkeit, Schäden, Gesundheitsgefahr.</li>
<li><strong>Thermisch</strong>: innere und äußere Wärmequellen. Der größte Teil der Wärme kommt aus dem Antrieb und dem Zerspanvorgang. Über längere Betriebsdauer verlagert sich dadurch der Arbeitspunkt spürbar.</li>
<li><strong>Geometrisch</strong>: Bahnabweichungen bei translatorischen Bewegungen (z. B. Ruckgleiten) und bei rotatorischen (Rund- und Planlauf, z. B. durch Radialschlag oder axiales Spiel).</li>
</ul>

<h2>Genauigkeit</h2>
<p>Maschinengenauigkeit ist die Abweichung des Ist-Werts (aus der Messung) vom Soll-Wert (aus der Zeichnung). Die Prüfregeln stehen in DIN ISO 230.</p>
<table>
<tr><th>Kennwert</th><th>Was er erfasst</th></tr>
<tr><td>Geometrische Genauigkeit</td><td>Genauigkeit der Komponenten (Geradheit, Parallelität der Führungen), ohne Last gemessen</td></tr>
<tr><td>Stationäre Genauigkeit</td><td>erreichte Endpositionen im Stillstand, inklusive Antrieb und Steuerung: Positionier- und Wiederholgenauigkeit</td></tr>
<tr><td>Thermische Genauigkeit</td><td>Einfluss von Wärmequellen und Temperaturdehnung</td></tr>
<tr><td>Dynamische Genauigkeit</td><td>Nachgiebigkeit der bewegten Maschine unter impulsartigen oder periodischen Kräften</td></tr>
<tr><td>Genauigkeit des Werkstücks</td><td>Abweichungen am gefertigten Teil, geprüft mit genormten Prüfwerkstücken</td></tr>
</table>
<div class="merke"><p><strong>Merke:</strong> <strong>Positioniergenauigkeit</strong> = größte Abweichung der Ist- von der <em>Soll</em>-Position bei unterschiedlichen Anfahrrichtungen und -geschwindigkeiten. <strong>Wiederholgenauigkeit</strong> = größte Abweichung der Ist-Positionen <em>untereinander</em>, bei gleicher Startposition und -geschwindigkeit, unabhängig vom Sollwert.</p></div>
<table>
<tr><th></th><th>Systematische Fehler</th><th>Zufällige Fehler</th></tr>
<tr><td>Merkmale</td><td>systembedingt, reproduzierbar, gesetzmäßig und damit ausgleichbar</td><td>auch bei gleichen Bedingungen nicht reproduzierbar, statistischer Natur</td></tr>
<tr><td>Beispiele</td><td>Teilungsfehler der Messsysteme, innere Wärmequellen, geometrische Führungsfehler, Umkehrspanne</td><td>Reibung (Stick-Slip), Lagerluft, Schwingungen, Werkzeugverschleiß</td></tr>
</table>
<p>Die <strong>Positionsunsicherheit</strong> enthält beides. Die <strong>Umkehrspanne</strong> (Hysterese) ist die Differenz der Endlagen, wenn dieselbe Soll-Position aus zwei Richtungen angefahren wird.</p>

<h2>Abnahme, Maschinen- und Prozessfähigkeit</h2>
<p>Die geforderten Eigenschaften stehen in Lasten- und Pflichtenheft und werden bei der <strong>Maschinenabnahme</strong> geprüft: geometrische und kinematische Eigenschaften (Geradheit, Parallelität, Rechtwinkligkeit, Rundlauf, Positioniergenauigkeit) sowie das dynamische Verhalten der Vorschubantriebe (kleinste Schrittweite, kleinste Bahngeschwindigkeit, Kreisformtest).</p>
<table>
<tr><th></th><th>Direkte Erfassung</th><th>Indirekte Erfassung</th></tr>
<tr><td>Wie?</td><td>Messung an der Maschine, z. B. Bahnabweichung mit Laser-Interferometer</td><td>Fertigen und Vermessen von Prüfwerkstücken</td></tr>
<tr><td>Wann?</td><td>lastfrei, meist am Prototyp</td><td>unter Schlichtbedingungen, an Serienmaschinen beim Anwender</td></tr>
<tr><td>Plus</td><td>Fehler lassen sich eindeutig einer Ursache zuordnen und in der Steuerung kompensieren</td><td>anschaulich, begrenzter Aufwand</td></tr>
<tr><td>Minus</td><td>sehr aufwendig</td><td>Abweichungen lassen sich nicht gezielt Maschineneigenschaften zuordnen, der Schnittprozess mischt mit</td></tr>
</table>
<p>Die direkte Messung zeigt die <strong>Herstellgüte</strong> der Maschine, die indirekte ihre <strong>Arbeitsgüte</strong>.</p>
<table>
<tr><th></th><th>Maschinenfähigkeit (c<sub>m</sub>, c<sub>mk</sub>)</th><th>Prozessfähigkeit (c<sub>p</sub>, c<sub>pk</sub>)</th></tr>
<tr><td>Ziel</td><td><strong>kurzzeitiges</strong> Streuverhalten unter möglichst gleichbleibenden Bedingungen</td><td><strong>langfristiges</strong> Streuverhalten unter realen Prozessbedingungen</td></tr>
<tr><td>Bedingungen</td><td>betriebswarme Maschine, ein Werkzeug, eine Rohteilcharge, keine äußeren Störungen; meist beim Hersteller</td><td>realer Prozess, reales Umfeld; meist beim Anwender</td></tr>
<tr><td>Vorgehen</td><td>mindestens 50 Teile hintereinander fertigen und messen</td><td>über eine oder mehrere Schichten mindestens 20 Stichproben zu je 5 Teilen</td></tr>
</table>
<div class="formel">c = T / (6 · s) &nbsp;&nbsp;&nbsp;&nbsp; c<sub>k</sub> = Δ<sub>krit</sub> / (3 · s)<small>T = Toleranzbreite, s = Standardabweichung, Δ<sub>krit</sub> = Abstand des Mittelwerts zur näheren Toleranzgrenze.</small></div>
<p>Der Index c vergleicht nur Streuung und Toleranz. Der Index c<sub>k</sub> berücksichtigt zusätzlich, ob die Verteilung in der Mitte der Toleranz liegt. Liegt sie außermittig, ist c<sub>k</sub> kleiner als c, und der Prozess muss zentriert werden. Anhaltswerte bei mittiger Lage: c = 1,0 entspricht etwa 99,73 % Gutteilen, c = 1,33 etwa 99,994 %, c = 1,67 etwa 99,99994 %.</p>
<p>Mögliche Verläufe der Messwerte: chaotisch (Maschine nicht fähig), Normalverteilung mit Trend (Prozess nicht beherrscht), stabile Normalverteilung (fähig). Über die Maschinenfähigkeit hinaus muss die Prozessfähigkeit regelmäßig überprüft werden.</p>
`});

window.PML.chapters.push({
  id: '5.1', nr: '5.1', title: 'Typen und Aufbau umformender Werkzeugmaschinen', short: 'Umformmaschinen',
  teaser: 'Hämmer, Spindel-, Kurbel- und Hydraulikpressen im Vergleich.', min: 12,
  html: `
<p class="lead">Umformmaschinen unterscheidet man danach, was sie begrenzt: die verfügbare Energie, der Weg des Stößels oder die Kraft. Daraus folgen Einsatzgebiet, Stärken und Schwächen.</p>

<h2>Auswahl und Kenngrößen</h2>
<p>Welcher Maschinentyp passt, hängt ab von Werkstückgeometrie, Umformgrad, Umformgeschwindigkeit, Umformtemperatur, geforderter Genauigkeit, Zahl der Fertigungsstufen, Stückzahl und Losgröße, Ausbringung je Zeit und der Art des Rohteils (Einzelstück, Drahtbund, Stab).</p>
<div class="merke"><p><strong>Merke:</strong> Maschinenkenngrößen &gt; Verfahrenskenngrößen. Eine Presse ist nur geeignet, wenn sie <em>alle</em> Anforderungen des Verfahrens erfüllt. Fehlt eine, ist sie ungeeignet.</p></div>
<h3>Kraft und Arbeitsvermögen</h3>
<table>
<tr><th></th><th>Nennkraft</th><th>Arbeitsvermögen (Nennarbeit)</th></tr>
<tr><td>Hauptkenngröße bei</td><td>Hydraulikpresse, Kurbelpresse</td><td>Hammer, Spindelpresse</td></tr>
<tr><td>Grenze</td><td>Hydraulikpresse: <em>kann</em> nicht überschritten werden. Kurbelpresse: <em>darf</em> nicht überschritten werden.</td><td>Spindelpresse: wird zu 100 % ausgenutzt. Hydraulikpresse: kann nicht, Kurbelpresse: darf nicht überschritten werden.</td></tr>
</table>
<p>Wirtschaftlich arbeitet eine Presse, wenn die Nennkraft bestmöglich ausgenutzt wird. Die maximale Prozesskraft muss dabei unter der Nennkraft bleiben.</p>
<h3>Weitere Kenngrößen</h3>
<ul>
<li><strong>Umformgeschwindigkeit:</strong> bei der Hydraulikpresse beliebig einstellbar (über den Volumenstrom), bei der Kurbelpresse nicht einstellbar, sondern vom Stößelweg abhängig.</li>
<li><strong>Maschinensteifheit:</strong> Unter Last federt die Presse auf. Folgen: Auffederung (Energieverlust), Versatz und Kippung (schlechtere Genauigkeit, kürzere Werkzeugstandzeit), längere Druckberührzeit. Der ideale Maschinenkörper wäre unendlich steif.</li>
<li><strong>Wirkungsgrad:</strong> nutzbare Arbeit am Werkstück im Verhältnis zur zugeführten Energie. Bei Kurbelpressen nur etwa 10 bis 50 %, wegen Kupplungs-, Reib- und Bremsverlusten.</li>
<li><strong>Hub:</strong> Weg des Stößels zwischen oberer Endlage (OT) und unterer Endlage (UT). <strong>Arbeitsweg:</strong> Weg, über den die Verfahrenskraft aufgebracht werden muss.</li>
<li><strong>Hubzahl:</strong> Hübe pro Minute im Dauerbetrieb, Maß für die Höchststückzahl. <strong>Schaltzahl:</strong> wie oft im Einzelhubbetrieb ausgelöst werden darf, begrenzt durch die Erwärmung von Kupplung und Bremse.</li>
<li><strong>Druckberührdauer:</strong> Zeit, in der Werkzeug und Werkstück in Kontakt sind. Beim <strong>Kaltumformen lang erwünscht</strong>, damit der Werkstoff Zeit zum Fließen hat. Beim <strong>Warmumformen möglichst kurz</strong>, damit das Werkzeug nicht überhitzt und verschleißt.</li>
</ul>
<p>Fehler am Werkstück entstehen durch Ungenauigkeiten im Werkzeug und durch Verformung von Maschine und Werkzeug unter Last: bei mittigem Kraftangriff Auffederung (vertikal) und Versatz (horizontal), bei außermittigem zusätzlich Kippung. Solche Fehler kann die Steuerung nicht kompensieren – das Werkzeug muss geändert werden, nicht das Programm.</p>

<h2>Energiegebundene Maschinen</h2>
<h3>Schmiedehämmer</h3>
<p>Die Arbeitsenergie ist als potenzielle Energie gespeichert und wird beim Schlag als kinetische Energie umgesetzt. Hauptkenngröße ist das <strong>Arbeitsvermögen</strong>.</p>
<ul>
<li><strong>Plus:</strong> einfach, robust, kostengünstig; kein fester unterer Umkehrpunkt, also Mehrfachschläge möglich; sehr kurze Druckberührzeit.</li>
<li><strong>Minus:</strong> Lärm und Erschütterungen, schlecht mechanisierbar, nur fürs Schmieden sinnvoll.</li>
<li><strong>Einsatz:</strong> Freiform- und Gesenkschmieden, vor allem flache Teile wie Pleuel oder Turbinenschaufeln.</li>
</ul>
<table>
<tr><th>Bauart</th><th>Antrieb des Bären</th><th>Merkmale</th></tr>
<tr><td>Fallhammer</td><td>nur Eigengewicht</td><td>preisgünstig und robust, geringes Arbeitsvermögen; kleine bis mittlere Gesenkteile</td></tr>
<tr><td>Oberdruckhammer</td><td>Eigengewicht plus Zylinder</td><td>höheres Arbeitsvermögen, kleinere Hubhöhe, höhere Hubzahlen; mittlere bis große Gesenkteile</td></tr>
<tr><td>Gegenschlaghammer</td><td>Ober- und Unterbär fahren gegeneinander</td><td>wenig Erschütterung im Fundament, günstigere Fundamentierung; schwere Gesenkteile</td></tr>
</table>
<div class="formel">Fallhammer: W = m · g · H · η<sub>S</sub> · η<sub>F</sub> = ½ · m · v² · η<sub>S</sub> · η<sub>F</sub><small>η<sub>F</sub> Fallwirkungsgrad (0,7 bis 0,9, Führungsreibung), η<sub>S</sub> Schlagwirkungsgrad (0,2 bis 0,6, elastische Verformung der Hammerteile)</small></div>
<p>Der Amboss mit Unterbau heißt <strong>Schabotte</strong>. Ihre Masse muss mindestens das 20-Fache der Bärmasse betragen. Fundamentgründung: fest (sehr aufwendig), auf abgefedertem Fundamentblock oder direkt auf Federelementen (preiswert, kein Fundament nötig). Als Antrieb dienen meist Hydraulik, zunehmend Linearmotoren.</p>
<h3>Spindelpressen</h3>
<p>Die Energie steckt als Rotationsenergie im <strong>Schwungrad</strong> und wird über die Spindel in die Stößelbewegung umgesetzt. Kennzeichnende Größe ist die im Schwungrad gespeicherte Energie.</p>
<ul>
<li><strong>Plus:</strong> großes, genau einstellbares Energieangebot; die Endkraft ergibt sich aus dem Prozess.</li>
<li><strong>Minus:</strong> schlecht mechanisierbar, geringe Hubzahlen, 2- bis 3-mal teurer als Hämmer.</li>
<li><strong>Einsatz:</strong> Gesenkschmieden, Prägen, Kalibrieren, Präzisionsschmieden; flache und große Bauteile (Turbinenlaufräder, Kurbelwellen).</li>
</ul>
<p>Antriebsarten: Reibrad (Reibspindelpresse), Kupplung (Schwungrad läuft ständig, ist nur beim Arbeitshub gekuppelt), direkter Elektromotor, mehrere Elektromotoren. Die Nennkraft ergibt sich aus der Stempelkraft plus Sicherheitszuschlag: F<sub>N</sub> = (1 + S) · F<sub>St</sub>, mit S typischerweise etwa 40 %.</p>

<h2>Weggebundene Maschinen</h2>
<p>Bei <strong>Exzenter-, Kurbel- und Kniehebelpressen</strong> treibt ein Kurbel- oder Exzentertrieb den Stößel mechanisch an. Der Weg des Stößels ist durch die Kinematik festgelegt.</p>
<ul>
<li><strong>Plus:</strong> sehr gut mechanisierbar, hohe Taktzahlen, unterschiedliche Stößelkinematiken je nach Getriebebauweise.</li>
<li><strong>Minus:</strong> Die Kinematik einer vorhandenen Presse lässt sich nur über die Hubzahl beeinflussen. Die <strong>Nennkraft steht nur im unteren Bereich des Stößelwegs</strong> zur Verfügung.</li>
<li><strong>Einsatz:</strong> Blech-, Warm-, Halbwarm- und Kaltumformung mit hoher Ausbringung und hoher Bauteilgenauigkeit.</li>
</ul>
<table>
<tr><th>Exzenterpresse</th><th>Kniehebelpresse</th></tr>
<tr><td>große Hübe bei hohen Hubzahlen</td><td>große Nennkraft bei kleinem Kurbelmoment</td></tr>
<tr><td>höhere Auftreffgeschwindigkeit</td><td>geringere Auftreffgeschwindigkeit</td></tr>
<tr><td>stark veränderliche Stößelgeschwindigkeit im Arbeitsbereich</td><td>lange Druckberührzeit durch gleichmäßig geringe Geschwindigkeit</td></tr>
<tr><td></td><td>kleiner Stößelhub, hohe Pressensteifigkeit</td></tr>
</table>
<p><strong>Antriebsstrang:</strong> Der Elektromotor bringt ein <strong>Schwungrad</strong> zum Rotieren. Für den Hub verbindet die <strong>Kupplung</strong> Schwungrad und Kurbelwelle per Reibschluss, danach verzögert die <strong>Bremse</strong> die Kurbelwelle. Aus Sicherheitsgründen gilt: Bei Stromausfall fällt der Luftdruck ab, die Kupplung öffnet und die Bremse schließt selbsttätig.</p>
<div class="formel">Arbeitsvermögen W = ½ · J · ω² &nbsp;&nbsp;&nbsp; mit ω = 2 · π · n<small>J = Massenträgheitsmoment der rotierenden Teile, n = Drehzahl. Schnell drehende Massen zählen am stärksten, der schwere Stößel fast gar nicht.</small></div>

<h2>Kraftgebundene Maschinen</h2>
<p>Bei <strong>Hydraulikpressen</strong> stellt der Ölzufluss in den Zylinder die Kraft ein – über den gesamten Hub.</p>
<ul>
<li><strong>Plus:</strong> <strong>Nennkraft über den gesamten Umformweg</strong> verfügbar, äußerst flexible Stößelkinematik, gut automatisierbar, kompakter Antrieb.</li>
<li><strong>Minus:</strong> geringere Steifigkeit, weil eine Ölsäule im Kraftfluss liegt (Stahl wäre rund 125-mal steifer); dadurch lange Druckberührzeit und selten Einsatz beim Gesenkschmieden; deutlich geringere Taktzahl als weggebundene Pressen; hoher Energieverbrauch.</li>
<li><strong>Einsatz:</strong> wo flexible Kinematik wichtiger ist als Ausbringung – Blechumformung in Kleinserie, Kaltmassivumformung, Tiefziehen, Einarbeiten von Tiefziehwerkzeugen.</li>
</ul>
<p>Baugruppen: Elektromotor, <strong>Hydraulikpumpe</strong> (Zahnradpumpe: robust und günstig; Axialkolbenpumpe: teurer, aber stufenlos verstellbarer Volumenstrom), <strong>Ventile</strong> (steuern Volumenstrom, Richtung und Druck), <strong>Hydraulikspeicher</strong> (speichert Energie, gleicht Druckschwankungen aus) und <strong>Hydraulikzylinder</strong> (wandelt hydraulische in mechanische Leistung).</p>
<div class="formel">Kolbenkraft F = p · A &nbsp;&nbsp;&nbsp; Geschwindigkeit v = Q / A &nbsp;&nbsp;&nbsp; Arbeitsvermögen W = F · s<small>p = Druck, A = Kolbenfläche, Q = Volumenstrom, s = Kolbenweg. Das Arbeitsvermögen muss größer sein als die nötige Umformarbeit.</small></div>

<h2>Die drei Bauarten auf einen Blick</h2>
<table>
<tr><th></th><th>Energiegebunden</th><th>Weggebunden</th><th>Kraftgebunden</th></tr>
<tr><td>Maschinen</td><td>Hammer, Spindelpresse</td><td>Exzenter-, Kurbel-, Kniehebelpresse</td><td>Hydraulikpresse</td></tr>
<tr><td>Hauptkenngröße</td><td>Arbeitsvermögen</td><td>Nennkraft</td><td>Nennkraft</td></tr>
<tr><td>Kraft verfügbar</td><td>ergibt sich aus dem Prozess</td><td>nur nahe dem unteren Umkehrpunkt</td><td>über den gesamten Hub</td></tr>
<tr><td>Typisch</td><td>Schmieden</td><td>hohe Stückzahlen, hohe Genauigkeit</td><td>flexible Kinematik, kleinere Serien</td></tr>
</table>
`});

window.PML.chapters.push({
  id: '5.2', nr: '5.2', title: 'Typen und Aufbau zerspanender Werkzeugmaschinen', short: 'Zerspanungsmaschinen',
  teaser: 'Achsen, Dreh- und Fräsmaschinen, Verzahnungs- und Schleifmaschinen.', min: 12,
  html: `
<p class="lead">Spanende Maschinen unterscheiden sich vor allem darin, wer sich bewegt – Werkzeug oder Werkstück – und über wie viele Achsen. Daraus ergeben sich die Bauformen von Dreh- und Fräsmaschinen.</p>

<h2>Achsen</h2>
<p>Im kartesischen System gibt es drei lineare Achsen <strong>X, Y, Z</strong> und drei Drehachsen <strong>A, B, C</strong> (Drehung um X, Y, Z). Die Relativbewegung teilt sich in <strong>Hauptbewegung</strong> (Schnitt) und <strong>Vorschubbewegung</strong>.</p>
<ul>
<li>Die <strong>Z-Achse</strong> liegt in Richtung der Rotationsachse von Werkstück oder Werkzeug (Längsbewegung).</li>
<li>Die <strong>X-Achse</strong> liegt quer zur Rotationsachse (Zustellbewegung).</li>
</ul>
<table>
<tr><th>Achsen</th><th>Aufbau</th><th>Beispiel</th></tr>
<tr><td>1</td><td>1 linear</td><td>manuelle Tischbohrmaschine</td></tr>
<tr><td>2</td><td>2 linear</td><td>einfache Drehmaschine</td></tr>
<tr><td>3</td><td>3 linear</td><td>einfache Fräsmaschine</td></tr>
<tr><td>4</td><td>3 linear + 1 Drehachse</td><td>Fräsbearbeitungszentrum zur Rundumbearbeitung</td></tr>
<tr><td>5</td><td>3 linear + 2 Drehachsen</td><td>Werkzeug in jede beliebige Richtung zum Werkstück: beliebig liegende Flächen, schräge Bohrungen</td></tr>
</table>

<h2>Drehmaschinen</h2>
<p>Hauptsächlich für zylindrische Werkstücke, zunehmend auch zur Komplettbearbeitung. Das <strong>Werkstück rotiert</strong>, das Werkzeug wird zugestellt. Baugruppen: Hauptantrieb, Spindelkasten, Reitstock, Bett, Bettschlitten, Werkstückspannmittel, Werkzeugsystem, Vorschubantriebe, Messsysteme, CNC-Steuerung.</p>
<ul>
<li>Der <strong>Kreuzschlitten</strong> erzeugt Vorschub (Z) und Zustellung (X).</li>
<li><strong>Werkzeugrevolver</strong> (Stern-, Trommel-, Scheiben-, Kronenrevolver) wechseln Werkzeuge schnell und prägen die Flexibilität.</li>
<li>Die <strong>Gegenspindel</strong> erlaubt die Rückseitenbearbeitung ohne Umspannen und vermeidet so Umspannfehler.</li>
<li>Kurze Werkstücke und Kleinserien werden im <strong>Futter</strong> gespannt. Lange Werkstücke stützt der <strong>Reitstock</strong> mit Körnerspitze, sehr schlanke zusätzlich eine <strong>Lünette</strong>. In der Großserie führt ein <strong>Stangenlader</strong> Stangenmaterial automatisch zu.</li>
<li><strong>Angetriebene Werkzeuge</strong> ermöglichen Bohren und Fräsen auf der Drehmaschine, meist zusammen mit Y-Achse und gesteuerter Spindel als C-Achse.</li>
</ul>
<p>Die Bettformen (Flach-, Schräg-, Frontbett, senkrecht) kennst du aus Kapitel 5. Bei CNC-Maschinen überwiegt das Schrägbett mit horizontaler Spindel.</p>
<table>
<tr><th>Art</th><th>Kennzeichen</th><th>Einsatz</th></tr>
<tr><td>Leit- und Zugspindeldrehmaschine</td><td>ein Hauptantrieb für alle Bewegungen, vieles manuell</td><td>Einzelteile, Kleinserien, Prototypen, Reparaturen</td></tr>
<tr><td>Universaldrehmaschine</td><td>CNC, X und Z ergänzt um C- und Y-Achse, Baukastensystem</td><td>einfache Drehteile mit Fräs- und Bohrarbeiten; Werkzeugbau, Ausbildung</td></tr>
<tr><td>Produktionsdrehautomat</td><td>hoher Automatisierungsgrad, Gegenspindel, mehrere Werkzeuge gleichzeitig im Eingriff</td><td>Automatendrehteile, aufwendige NC-Drehteile</td></tr>
<tr><td>Mehrspindeldrehautomat</td><td>meist 6 oder 8 Spindeln in einer Trommel, alle arbeiten gleichzeitig (Rundtaktprinzip)</td><td>Serienproduktion mit fester Arbeitsfolge</td></tr>
<tr><td>Frontdrehmaschine</td><td>gute Zugänglichkeit von vorn, kein Reitstock</td><td>flache, scheibenförmige Teile, automatische Beladung</td></tr>
<tr><td>Vertikaldrehmaschine</td><td>senkrechte Spindel, keine Biegebelastung des Werkstücks; hängende Spindel als Pick-up-Maschine</td><td>mittlere bis hohe Stückzahlen; als Karusselldrehmaschine für große, schwere Teile</td></tr>
<tr><td>Dreh-Fräsmaschine</td><td>zusätzliche Frässpindel oder angetriebene Werkzeuge</td><td>Komplettbearbeitung komplexer Teile (6 Seiten)</td></tr>
</table>
<div class="merke"><p><strong>Merke Mehrspindler:</strong> Nach jeder Trommelschaltung ist ein Teil fertig. Die <strong>längste Bearbeitungszeit einer Spindellage bestimmt die Taktzeit</strong>. Ein Sechsspindler leistet etwa das 5- bis 6-Fache eines Einspindlers.</p></div>

<h2>Fräsmaschinen und Bearbeitungszentren</h2>
<ul>
<li><strong>Fräsmaschine:</strong> CNC-Maschine für Fräsen und Bohren mit mindestens drei Vorschubrichtungen. Das <strong>Werkzeug rotiert</strong>.</li>
<li><strong>Bearbeitungszentrum:</strong> CNC-Maschine für mehrere Verfahren (Fräsen, Bohren, Drehen) mit <strong>automatischem Werkzeugwechsel</strong>; für Mehrseitenbearbeitung mit Schwenk-Drehtisch oder Vorsatzkopf.</li>
<li><strong>Flexible Fertigungszelle:</strong> Bearbeitungszentrum plus <strong>automatische Zu- und Abführung der Werkstücke mit Pufferlager</strong>. Läuft zeitweise ohne Bediener.</li>
<li><strong>Flexibles Fertigungssystem:</strong> mehrere Maschinen, verbunden durch automatischen Werkstück- und Werkzeugfluss, koordiniert von einem <strong>zentralen Leitrechner</strong>.</li>
</ul>
<h3>Bauformen</h3>
<p>Grundbauweisen sind Konsol-, Bett- und Portalfräsmaschinen, jeweils mit waagerechter oder senkrechter Spindel. Die Regel dahinter:</p>
<div class="merke"><p><strong>Merke:</strong> Große, schwere Werkstücke → das <strong>Werkzeug</strong> macht die Vorschubbewegung. Leichte, kleine Werkstücke → das <strong>Werkstück</strong> (der Tisch) bewegt sich.</p></div>
<table>
<tr><th>Bauform</th><th>Wer bewegt sich?</th><th>Einsatz</th></tr>
<tr><td>Konsolbauweise</td><td>Werkstück in drei Achsen; der Tischantrieb trägt das Werkstückgewicht</td><td>kleinere Werkstücke, Werkzeug- und Vorrichtungsbau</td></tr>
<tr><td>Kreuztisch</td><td>Werkstück in zwei Achsen, Werkzeug in einer</td><td>leichtere Werkstücke</td></tr>
<tr><td>Kreuzbett</td><td>zwei senkrechte Vorschubbewegungen auf dem Bett</td><td>schwere Werkstücke</td></tr>
<tr><td>Fahrständer</td><td>alle linearen Achsen auf der Werkzeugseite</td><td>große, schwere Werkstücke</td></tr>
<tr><td>Portal (Tischausführung)</td><td>zwei Achsen Werkzeug, eine Achse Werkstück</td><td>sehr große Werkstücke</td></tr>
<tr><td>Gantry</td><td>alle Bewegungen werkzeugseitig</td><td>sehr große, schwere Werkstücke</td></tr>
</table>
<h3>Fünf Achsen: drei Konfigurationen</h3>
<p>Zwei zusätzliche Drehachsen erlauben die 5-Seiten-Bearbeitung ohne Umspannen. Das steigert die Produktivität.</p>
<table>
<tr><th>Konfiguration</th><th>Drehachsen</th><th>Eigenschaften</th></tr>
<tr><td>Kopf-Kopf</td><td>beide im Fräskopf</td><td>fester Tisch, hohe Steifigkeit: gut für <strong>große, schwere Teile</strong>; Schwenkbereich begrenzt</td></tr>
<tr><td>Kopf-Tisch</td><td>eine im Kopf, eine im Tisch</td><td>Tischdrehung unbegrenzt: gut für runde und komplexe Formen</td></tr>
<tr><td>Tisch-Tisch</td><td>beide im Tisch</td><td>ungeeignet für große, schwere Teile; ideal für <strong>Hinterschnitte</strong>; eingeschränkter Arbeitsbereich</td></tr>
</table>
<p>Zusatzachsen entstehen über Dreh- und Schwenktische oder Vorsatzköpfe. Eine <strong>Hirth-Verzahnung</strong> arretiert sie formschlüssig und selbstzentrierend in festen Winkelstellungen.</p>
<h3>Spannen und Werkzeugversorgung</h3>
<ul>
<li>Kleinserie: Werkstück in einer Vorrichtung oder im Schraubstock auf der Nutenplatte. Großserie: <strong>Palettenwechsler</strong>. Die Paletten werden parallel zur Bearbeitung außerhalb des Arbeitsraums bestückt, das senkt die Nebenzeit.</li>
<li>Werkzeugversorgung = Werkzeugspeicher + Wechsler. Speicher mit fester Position (Regal-, Kassettenmagazin) oder variabler Position (Ketten-, Scheibenmagazin). Wichtigstes Auswahlkriterium ist die <strong>Span-zu-Span-Zeit</strong>.</li>
</ul>

<h2>Verzahnungsmaschinen</h2>
<p>Einzweckmaschinen für die Verfahren aus Kapitel 3.1:</p>
<table>
<tr><th>Maschine</th><th>Hauptbewegungen</th><th>Merkmale</th></tr>
<tr><td>Wälzfräsmaschine</td><td>Drehung Werkzeug (Schnitt) und Drehung Werkstück (Wälzen), gekoppelt über ein elektronisches Getriebe; radialer und axialer Vorschub; Tangentialbewegung zum Shiften</td><td>Außenverzahnungen, hohe Produktivität</td></tr>
<tr><td>Wälzstoßmaschine</td><td>Hubbewegung der Stoßspindel mit Abheben beim Rückhub, Drehung Werkstück</td><td>Innen- und Außenverzahnung, hohe Flexibilität</td></tr>
<tr><td>Wälzschälmaschine</td><td>Drehung Werkzeug und Werkstück bei gekreuzten Achsen, axialer Vorschub</td><td>innen und außen, auch bei Störkonturen; verbindet Produktivität und Flexibilität, aber höherer Werkzeugverschleiß</td></tr>
</table>

<h2>Schleifmaschinen</h2>
<p>Am häufigsten eingesetzt werden <strong>Außenrund- und Planschleifen</strong>. Flach- und Profilschleifmaschinen gibt es in drei Bauweisen:</p>
<table>
<tr><th>Bauweise</th><th>Kennzeichen</th></tr>
<tr><td>Support</td><td>Tisch (X) sitzt auf einem Support, der die Z-Bewegung macht; hohe Genauigkeit bei kleineren Tischen</td></tr>
<tr><td>Tisch</td><td>Tisch (X) auf dem Maschinenbett, Fahrständer macht Z; für größere Arbeitsbereiche</td></tr>
<tr><td>Fahrständer</td><td>alle drei Achsen werkzeugseitig, Tisch steht still; kompakt, für hohe Tischlasten</td></tr>
</table>
<p><strong>Wälzschleifmaschinen</strong> sind im Aufbau den Wälzfräsmaschinen gleich, statt des Fräsers rotiert eine Schleifschnecke.</p>
`});

window.PML.chapters.push({
  id: '6', nr: '6', title: 'Grundlagen der schlanken Produktionslogistik', short: 'Schlanke Logistik',
  teaser: 'Die vier Lean-Prinzipien, übertragen auf den Materialfluss.', min: 5,
  html: `
<p class="lead">Die Logistik folgt denselben vier Prinzipien wie die Produktion. Ihr Leitbild in einem Satz: kleine Mengen häufig weitergeben.</p>

<h2>Vision: 5R und kurze Durchlaufzeiten</h2>
<p>Auch die Logistik zielt auf die <strong>5R</strong>: das richtige Teil, in der richtigen Qualität (null Fehler), zum richtigen Zeitpunkt (jetzt), in der richtigen Menge (ein Teil), am richtigen Ort (hier).</p>
<p>Das Vorbild ist der Fischhändler: Vom Fang bis zum Frühstück im Sushi-Restaurant vergeht ein halber Tag. So wie er will die Fabrik Durchlaufzeiten extrem verkürzen, in kleinsten Losgrößen lieferfähig sein und in kürzester Zeit perfekte Produkte anbieten. Übertragen auf die Industrie heißt das: Ein Montageteil ist wenige Stunden nach dem Wareneingang im Fahrzeug verbaut.</p>
<div class="merke"><p><strong>Merke:</strong> Kleinere Mengen häufig weitergeben – statt große Mengen selten.</p></div>

<h2>Die vier Prinzipien in der Logistik</h2>
<table>
<tr><th>Prinzip</th><th>Vision</th><th>So sieht es in der Logistik aus</th></tr>
<tr><td><strong>Fließen</strong></td><td>Abnehmer und Lieferanten sind gekoppelt, keine Überlieferung, keine Fehlteile. Der Lieferant stellt ein Teil in <em>einer einzigen Handlingstufe</em> bereit.</td><td>staplerfreie Fabrik, minimale Handlingstufen, optimierte Verpackungseinheiten, kleine Mengen häufig weitergeben, One-Piece-Flow</td></tr>
<tr><td><strong>Takten</strong></td><td>Die Logistik arbeitet im Herzschlag der Fabrik, synchron zur Produktion.</td><td>getaktetes, zyklisches Arbeiten (Versorgungstakt), gleichmäßige Auslastung der Logistikmitarbeiter, geglättete Anlieferung ohne Spitzen und Verspätungen</td></tr>
<tr><td><strong>Ziehen</strong></td><td>Schnittstellen, Lieferlose, -orte und -termine sind festgelegt, Umlaufbestände gering und kontrolliert.</td><td>fertigungssynchrone Logistik (Meldepunkt), 100 % Vollgut-Leergut-Tausch, einheitliche Behälter mit Inhaltsvielfachen, farbig markierte Anlieferorte (Stellflächenkonzept), sichtbare Bedarfe (Pick-by-Light, leere Behälter, Kanban-Karten)</td></tr>
<tr><td><strong>Null Fehler</strong></td><td>Prozesse sind geführt und standardisiert, die Wahlfreiheit des Mitarbeiters ist eingeschränkt.</td><td>einfache, übersichtliche Arbeitsmittel (Schleppzug statt Stapler), visuelle Hilfen (Stellflächen, Pick-by-Light)</td></tr>
</table>
<p>Null Fehler stabilisiert auch hier die anderen drei Prinzipien. Wie das konkret geplant wird, zeigt Kapitel 6.1.</p>
`});

window.PML.chapters.push({
  id: '6.1', nr: '6.1', title: 'Best Practice der schlanken Produktionslogistik', short: 'Produktionsversorgung',
  teaser: 'Bereitstellung, Routenzug, Supermarkt, Wareneingang, Anlieferung.', min: 15,
  html: `
<p class="lead">Wie kommt das Material vom Lkw an den Verbauort? Die schlanke Produktionsversorgung hat fünf Bausteine. Geplant wird von der Montagelinie rückwärts bis zum Lieferanten.</p>

<h2>Einordnung</h2>
<p>Die logistische Kette hat vier Hauptprozesse: (1) Produktionsplanung und -steuerung, (2) Materialbeschaffung, (3) <strong>Produktionsversorgung</strong>, (4) Warendistribution. Sie gliedern sich in zwölf Bausteine. Im Fokus steht die Produktionsversorgung mit fünf davon:</p>
<ol>
<li>produktionsgerechte Materialbereitstellung</li>
<li>getaktete interne Logistik</li>
<li>definierte Bestände im Supermarkt</li>
<li>geglätteter Wareneingang</li>
<li>hochfrequente Anlieferung</li>
</ol>

<h2>1. Produktionsgerechte Materialbereitstellung</h2>
<p>Der optimale Prozess für den Werker bestimmt, wo und wie Material bereitsteht. Schlank heißt: Material im <strong>Griffbereich am Verbauort</strong> (400 bis 600 mm), nur die richtige Variante greifbar, überwiegend in Kleinladungsträgern (KLT), in optimaler Arbeitshöhe, minimale und feste Taktlänge. Traditionell dagegen muss der Werker den Verbauort verlassen, Varianten suchen, und Großladungsträger (GLT) mit hohen Reichweiten bestimmen die Länge des Takts.</p>
<p><strong>Chirurg-Krankenschwester-Prinzip:</strong> Wertschöpfung und Verschwendung werden getrennt. Der Werker montiert wie der Chirurg operiert, die Logistik reicht ihm alles an.</p>
<h3>Drei Bereitstellungskonzepte</h3>
<table>
<tr><th>Konzept</th><th>Was ist das?</th><th>Wann?</th></tr>
<tr><td><strong>Sortenrein</strong></td><td>ein Teil in einem Behälter, für mehrere Produkte an einem Arbeitsplatz</td><td>Teile ohne Varianz, Verbauquote 100 %, Norm- und DIN-Teile</td></tr>
<tr><td><strong>Kommissionierung</strong></td><td>ein Wagen mit allen Teilen für <em>ein</em> Produkt, fährt über mehrere Arbeitsplätze mit</td><td>viele Varianten, die verwechselt werden können; Verbauquote unter 100 %; viele zu kommissionierende Teile</td></tr>
<tr><td><strong>Sequenzierung</strong></td><td>Varianten eines Teils in Verbaureihenfolge, für mehrere Produkte an einem Arbeitsplatz</td><td>sehr hohe Varianz und Kommissionierwagen nicht möglich (Teilegröße, Layout) oder unwirtschaftlich</td></tr>
</table>
<ul>
<li><strong>Sortenrein:</strong> immer den kleinstmöglichen KLT, GLT nur in begründeten Ausnahmen (zu große oder zu schwere Teile) und immer auf Rollwagen. Behälterreichweite mindestens 15 Takte, höchstens eine Schicht. Richtiger KLT direkt vom Lieferanten, kein Umpacken. Mindestens Zwei-Behälter-Prinzip, Durchlaufregale.</li>
<li><strong>Kommissionierung:</strong> so viel wie nötig, so wenig wie möglich. Der Wagen fährt mit dem Produkt mit; ist er leer, ist alles verbaut (visuelle Kontrolle). Teile ohne Handling im Zugriff, keine Schubladen. Keine Normteile kommissionieren. Kommissionierung setzt den One-Piece-Flow beim Werker um.</li>
<li><strong>Sequenzierung:</strong> wenn möglich kommt die Sequenz direkt vom Lieferanten (Just in Sequence, JIS). Gestelle rollbar und in den Routenzug integrierbar.</li>
</ul>
<p><strong>Ladungsträger:</strong> Standardbehälter (KLT, GLT) sind günstig, robust und lange nutzbar. Sonderladungsträger (XLT) sind Spezialanfertigungen für besondere Qualitätsanforderungen oder Geometrien: teuer, begrenzte Einsatzdauer, hoher Transportschutz.</p>
<h3>Festlegen in drei Schritten</h3>
<ol>
<li><strong>Teileinformationen beschaffen:</strong> Das <strong>Bauteilmengengerüst (BTMG)</strong> listet alle Sachnummern mit Produkt-, Montage-, Logistik- und Lieferantendaten. Grundsatz: <em>Plan for every part.</em></li>
<li><strong>Bereitstellung festlegen:</strong> Ein <strong>Entscheidungsbaum</strong> fragt Ausschlusskriterien ab. Keine Varianz → sortenrein. Varianz, Teil passt auf den Wagen und Anstellung per Wagen sinnvoll → Kommissionierung. Sonst → Sequenz, bei Klasse-A-Lieferanten extern (JIS), sonst intern.</li>
<li><strong>Layout gestalten:</strong> Materialanstellung am Verbauort planen. Die Montage wird für jedes Teil <strong>simuliert</strong>, fehlende Teile baut man aus Karton nach.</li>
</ol>

<h2>2. Getaktete interne Logistik</h2>
<table>
<tr><th>Traditionell</th><th>Schlank</th></tr>
<tr><td>Einzeltransporte, 40 bis 45 % Leerfahrten</td><td>Sammeltransporte, wenig Leerfahrten</td></tr>
<tr><td>ungetaktete Versorgung</td><td>getaktete Anlieferung</td></tr>
<tr><td>Stapler, breite Fahrwege</td><td><strong>Schleppzug</strong> (Routenzug) ohne Hebevorgang, engere Wege durch Einbahnstraßen</td></tr>
<tr><td>große Lose in GLT oder Gitterboxen, gestapelt</td><td>kleine Lose in KLT, ebenerdig auf Rollen</td></tr>
</table>
<p><strong>Routenverkehr planen</strong> in drei Schritten: Daten vorbereiten → Routen auslegen → simulieren und erproben.</p>
<div class="formel">Behälter pro Arbeitstag = Ø Teileverbrauch pro Arbeitstag / Teile je Behälter</div>
<p>Der tägliche Behälterumschlag wird als <strong>Sankey-Diagramm</strong> ins Layout gezeichnet (Pfeilbreite = Menge) und macht die Materialflüsse sichtbar.</p>
<p>Der <strong>Versorgungstakt</strong> bestimmt, wie oft jeder Verbauort versorgt wird:</p>
<div class="formel">Kommissionierwagen: Versorgungstakt = Anzahl Wagen je Route × Produktionstakt</div>
<div class="formel">Sortenrein und Sequenz: Versorgungstakt = (Ladungsträger pro Anlieferung × Füllmenge × Taktzeit) / (Verbauquote × Stück je Produkt)</div>
<p>Bei sortenreinen Teilen und Sequenzgestellen bestimmt der <strong>Taktgeber</strong> den Versorgungstakt: das Teil, das am häufigsten angeliefert werden muss. Alle anderen sind dann automatisch versorgt.</p>
<div class="bsp"><p><strong>Beispiele:</strong> 2 Kommissionierwagen je Route bei 2 min Takt → Versorgungstakt 4 min. Ein sortenreines Teil mit 30 Stück je Behälter, einem Behälter pro Anlieferung, Verbauquote 100 %, 1 Stück je Produkt, 2 min Takt → 60 min.</p></div>
<p><strong>Routen im Layout:</strong> mit farbigen Wollfäden auf dem maßstäblichen Layout planen. Regeln: so viele Einbahnstraßen wie möglich, kein Wenden in einer Gasse, möglichst wenige Kreuzungen.</p>
<p><strong>Routenzug austakten:</strong> Die Zykluszeit setzt sich aus einem festen Anteil (Fahren) und einem variablen Anteil (Behälterwechsel) zusammen. Dann wird die Auslastung optimiert, indem man weitere Bereiche zuordnet.</p>
<div class="formel">Fahrtzeit = Fahrstrecke / Geschwindigkeit<small>Richtwerte: 6 km/h empfohlen, 10 km/h maximal. Behälterwechsel: GLT 60 s, KLT 45 s. Maximale Auslastung: 95 % bei Kommissionierwagen, 85 % bei sortenreinen Behältern.</small></div>

<h2>3. Definierte Bestände im Supermarkt</h2>
<p>Der Supermarkt ersetzt das Hochregallager. Er senkt Bestände und entkoppelt Versorgungsprozesse. Die Idee übertrug Taiichi Ohno 1956 von amerikanischen Supermärkten: Der Kunde bekommt, was er braucht, wann er es braucht, in der Menge, die er braucht.</p>
<table>
<tr><th>Hochregallager</th><th>Supermarkt</th></tr>
<tr><td>undefinierte, hohe Bestände</td><td>definierter Minimal- und Maximalbestand</td></tr>
<tr><td>intransparente Flächen, gestapelt</td><td>fester, gekennzeichneter Platz je Variante, kein Stapeln, FIFO</td></tr>
<tr><td>hohe Such- und Wegezeiten</td><td>kurze Wege, höhere Produktivität</td></tr>
</table>
<p>Gesteuert wird visuell nach „Ist was weg, muss was hin“. Der Supermarkt hat Zonen für die drei Bereitstellungsarten: sortenrein, Kommissionierzone, Sequenzierzone.</p>
<div class="formel">Bestand = V × (Anlieferfrequenz + Sicherheitsbestand)<small>V = Durchschnittsverbrauch. Anlieferfrequenz = Wiederbeschaffungszeit. Beides als Zeitspanne eingesetzt, z. B. in Stunden.</small></div>
<ul>
<li>Je gleichmäßiger der Verbrauch, desto niedriger der Bestand. Dafür sorgt <strong>Heijunka</strong>, die Nivellierung des Modellmixes.</li>
<li>Der <strong>Sicherheitsbestand</strong> richtet sich nach dem Lieferservicegrad: Klasse A (konstant hoch, wenig Sicherheit), Klasse B (mittel), Klasse C (schlecht, individuell festgelegt).</li>
<li>Gestaltung: Befüllung über einen eigenen Nachschubgang, Entnahme zum Kommissioniergang, Leergutkanäle. Regalhöhe höchstens 1,60 m, schräge Regale mit Rollen, 1:1-Leergutrückführung, kein Stapeln von Gitterboxen. Der Supermarkt steht nicht direkt an der Linie.</li>
<li><strong>Kommissionierzone in U-Form:</strong> Entnahme nur von einer Seite, kein Kreuzungsverkehr, kurze Laufwege.</li>
<li><strong>Interne Sequenzierung:</strong> Fächer-Sequenzierung (Befüllen nach Sachnummer, eher kleine Teile) oder Rückwärts-Sequenzierung (Befüllen in umgekehrter Fertigungsreihenfolge, eher große, sperrige Teile). Renner liegen vorn in Griffweite, Exoten weiter weg.</li>
</ul>
<h3>Kommissioniersysteme</h3>
<table>
<tr><th>System</th><th>Plus</th><th>Minus</th></tr>
<tr><td>Pick-by-Light</td><td>visuelle Führung, kein Suchen</td><td>Verkabelung, wenig flexibel, keine eindeutige Bauteilidentifizierung</td></tr>
<tr><td>Pick-by-Voice</td><td>Hände frei, drahtlos</td><td>Quittieren per Sprache fehleranfällig</td></tr>
<tr><td>Datenfunk-Handterminal</td><td>erprobt, flexibel, direktes Scannen des Bauteils</td><td>Scannen kostet Zeit, Gerät behindert das Handling</td></tr>
<tr><td>Augmented-Reality-Brille</td><td>visuelle Führung, sehr flexibel</td><td>sehr hoher Aufwand, wenig Praxiserfahrung</td></tr>
</table>
<p>Pick-by-Light setzt Poka Yoke um: Lampen zeigen das Fach, ein Sensor bestätigt die Entnahme. Das senkt Pick-Fehler, Wege und Zeiten.</p>

<h2>4. Geglätteter Wareneingang</h2>
<p>Traditionell kommen die Lkw in Spitzen: mal Überlastung, mal Wartezeit, und Personal muss für die Spitze vorgehalten werden. Dazu vier Handlingstufen vom Lkw bis zum Routenzug. Schlank heißt <strong>einstufiger Wareneingang</strong>: getaktete Prozesse, weniger Handling, weniger Fläche.</p>
<ol>
<li><strong>Anliefervolumen analysieren:</strong> Anlieferungen vor Ort mit Lieferant, Datum, Uhrzeit und Menge erfassen.</li>
<li><strong>Anlieferungen glätten:</strong> feste <strong>Zeitfenster</strong> mit Lieferanten oder Spediteuren vereinbaren und gleichmäßig verteilen.</li>
<li><strong>Materialfluss optimieren:</strong> Vollgut direkt vom Lkw-Trailer auf den Routenzug, Leergut im Tausch zurück.</li>
<li><strong>Informationsfluss optimieren:</strong> weniger Buchungsaufwand, mobile Terminals (scannen, einbuchen, Beleg drucken vor Ort).</li>
</ol>
<div class="formel">Takt der Anlieferung = Nettoarbeitszeit / Anzahl Anlieferungen pro Arbeitstag</div>
<div class="bsp"><p><strong>Beispiel:</strong> 900 min Nettoarbeitszeit, 20 Anlieferungen → alle 45 min ein Zeitfenster.</p></div>

<h2>5. Hochfrequente Anlieferung</h2>
<p>Traditionell: große Mengen selten, hoher mittlerer Bestand. Schlank: kleine Mengen oft, niedriger Bestand, genivellierte und getaktete Anlieferung. Die Herausforderung sind die <strong>Transportkosten</strong>.</p>
<p>Klassische Spediteure bündeln Ware in regionalen Hubs und liefern täglich. Ihre <strong>Frachtkostenmatrix</strong> belohnt große Mengen: Der Preis je 100 kg sinkt mit dem Gewicht und steigt mit der Entfernung. Zehnmal kleinere Transportlose verdreifachen den Preis für dieselbe Menge.</p>
<table>
<tr><th>Lösungsansatz</th><th>Passt bei</th></tr>
<tr><td>Industriepark</td><td>hohem Volumen, großen Lieferanten, langem Planungshorizont</td></tr>
<tr><td>Lieferanten-Logistik-Zentrum</td><td>hohem Volumen, großen Lieferanten</td></tr>
<tr><td>Gebietsspediteur über werksnahen Umschlagpunkt</td><td>geringem Volumen</td></tr>
<tr><td>Milkrun</td><td>hohem Volumen und geringer Entfernung der Lieferanten zum Werk</td></tr>
</table>
<p>Beim <strong>werksnahen Umschlagpunkt</strong> kommen Sammel- und Ferntransporte täglich an. Dort wird die Ware nach internen Routen und Zeitfenstern vorsortiert und dann stündlich per Shuttle ins Werk gebracht. Die Steuerinformation ist der <strong>Zeitstempel</strong> auf dem Behälterlabel, zusammen mit Abladestelle, Route und Anlieferplatz. Weil vorhandene Speditionsstrukturen genutzt werden, kostet die stündliche Anlieferung kaum mehr.</p>

<h2>Vorbild Porsche Leipzig</h2>
<p>Die Ziele des Logistikkonzepts: Bestände innerhalb der Werksgrenzen <strong>unter einem Arbeitstag</strong>, niedrigere Kosten durch höhere Produktivität über die ganze Lieferkette, fehlerfreie Versorgung der Montage, maximale Transparenz. Geplant wurde nach dem <strong>Line-Back-Ansatz</strong> von innen nach außen: Materialanstellung am Band → Transport zum Band → Materialumschlag → Vereinnahmung im Wareneingang → Werksgrenze und Frachtenkonzept → Lieferant.</p>
<p>Ergebnis: Aus sieben Prozessschritten zwischen Lkw und Band wurden vier, weil direkt auf den Routenzug entladen wird und Pufferung sowie Ein- und Auslagerung im Hochregal entfallen. Das spart Handling, Fläche und Personal.</p>
`});
