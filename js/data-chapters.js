/* Lesekapitel 1 bis 4 – eigene Zusammenfassungen, keine Skript-Kopien */
window.PML = window.PML || {};
window.PML.chapters = [];

window.PML.chapters.push({
  id: '1', nr: '1', title: 'Ziele, Randbedingungen und Kennzahlen der Produktion', short: 'Ziele und Kennzahlen',
  teaser: 'Kosten, Qualität, Leistung – und wie man sie misst.', min: 16,
  html: `
<p class="lead">Produktion ist kein Selbstzweck. Ein Unternehmen will Geld verdienen, und dafür muss jeder Wertschöpfungsprozess drei Dinge gleichzeitig schaffen: wenig kosten, die geforderte Qualität liefern und genug leisten. Dieses Kapitel liefert die Begriffe und Formeln dazu.</p>

<h2>Ziele und Randbedingungen</h2>
<p>Unternehmensziele lassen sich in sechs Gruppen sortieren:</p>
<table>
<tr><th>Zielgruppe</th><th>Beispiele</th></tr>
<tr><td>Erfolgsziele</td><td>Gewinn, Eigenkapitalrendite, Gesamtkapitalrentabilität</td></tr>
<tr><td>Finanzziele</td><td>Unternehmenswert, Cashflow, Kreditwürdigkeit</td></tr>
<tr><td>Produkt- und Marktziele</td><td>Umsatz, Marktanteile, Produktprogramm</td></tr>
<tr><td>Soziale Ziele</td><td>Mitarbeiterzufriedenheit, Arbeitsplatzsicherung, Personalentwicklung</td></tr>
<tr><td>Macht- und Prestigeziele</td><td>Unabhängigkeit, Image, politischer Einfluss</td></tr>
<tr><td>Ökologische Ziele</td><td>Umweltschutz, Ressourcenschonung, Nachhaltigkeit</td></tr>
</table>
<p>Die ersten drei sind wirtschaftliche Ziele. Jedes Ziel wird heruntergebrochen: <strong>Hauptziel → Teilziele → Maßnahmen</strong>. Beispiel: „Gewinn steigern“ zerfällt in „Umsatz steigern“ (neue Märkte, neue Kunden, bessere Produkte) und „Umsatzrendite steigern“ (Produktivität rauf, Kosten für Material, Personal, Maschinen und Nacharbeit runter). Preise erhöhen geht nur begrenzt.</p>
<p>Dabei setzen <strong>Randbedingungen</strong> den Rahmen: betriebliche (Löhne, Betriebsvereinbarungen, Kompetenz), finanzielle (Eigenkapitalquote, Finanzierung), der Absatzmarkt (Kunden, Wettbewerber), der Versorgungsmarkt (Lieferanten, Supply Chain), politisch-regulatorische (Gesetze, Normen) und strategische (Kernkompetenzen, Kernprodukte, Kernmärkte).</p>
<div class="merke"><p><strong>Merke: QKL.</strong> Die Kernziele jedes Wertschöpfungsprozesses sind Qualität, Kosten und Leistung. Sie stehen oft im Widerspruch, zum Beispiel Genauigkeit gegen Fertigungszeit.</p></div>

<h2>Kosten: Wer verursacht was?</h2>
<p>Die Kostenrechnung beantwortet drei Fragen:</p>
<ul>
<li><strong>Kostenarten</strong> – welche Kosten fallen an? <em>Einzelkosten</em> lassen sich einem Produkt direkt zuordnen (Fertigungsmaterial, Fertigungslöhne). <em>Gemeinkosten</em> nicht (Abschreibungen, Miete, Gehälter, Zinsen, Versicherungen).</li>
<li><strong>Kostenstellen</strong> – wo fallen sie an? Hauptkostenstellen liegen im Materialfluss (Zerspanung, Lackiererei, Montage). Direkte Hilfskostenstellen erbringen innerbetriebliche Leistungen (Instandhaltung, Qualitätskontrolle). Allgemeine Hilfskostenstellen dienen allen (Personal, Facility Management).</li>
<li><strong>Kostenträger</strong> – wofür fallen sie an? Für die Erzeugnisse.</li>
</ul>
<p>Der <strong>Betriebsabrechnungsbogen (BAB)</strong> verteilt die Gemeinkosten über die Kostenstellen auf die Erzeugnisse.</p>

<h3>Zuschlagskalkulation: vom Material zum Preis</h3>
<p>Das Schema baut sich von innen nach außen auf:</p>
<div class="formel">Herstellkosten = Materialkosten + Fertigungskosten<small>Materialkosten = Materialeinzelkosten + Materialgemeinkosten · Fertigungskosten = Fertigungseinzelkosten + Fertigungsgemeinkosten + Sondereinzelkosten der Fertigung</small></div>
<div class="formel">Selbstkosten = Herstellkosten + Forschung/Entwicklung + Verwaltung + Vertrieb</div>
<div class="formel">Preis (Erlös) = Selbstkosten + Gewinn</div>
<ul>
<li><strong>Materialeinzelkosten:</strong> Rohstoffe und Zukaufteile laut Stückliste.</li>
<li><strong>Materialgemeinkosten:</strong> Beschaffung, Prüfung, Lagerung, innerbetrieblicher Transport.</li>
<li><strong>Fertigungseinzelkosten:</strong> Löhne und Maschinenkosten laut Arbeitsplan (Zeit × Stundensatz).</li>
<li><strong>Fertigungsgemeinkosten:</strong> indirektes Personal, Hilfsmaterial, Energie, Abschreibungen, Zinsen.</li>
<li><strong>Sondereinzelkosten der Fertigung:</strong> Spezialwerkzeuge, Modelle, Lizenzen.</li>
</ul>
<p><strong>Herstellkosten 1</strong> enthalten keinen Ausschuss. Rechnet man ihn ein, heißen sie <strong>Herstellkosten 2</strong>. Auf die HK 2 kommen die Zuschläge für Entwicklung, Verwaltung und Vertrieb.</p>
<div class="bsp"><p><strong>Rechenweg in Kurzform:</strong> Material + Materialgemeinkosten (% vom Material) + Ausschuss = Materialkosten gesamt. Maschinenkosten + Lohnkosten + Restfertigungsgemeinkosten (% vom Lohn) = Fertigungskosten. Beides zusammen = HK 1, plus Ausschuss = HK 2, plus Zuschläge = Selbstkosten.</p></div>
<p><strong>Stärke</strong> der Zuschlagskalkulation: Sie funktioniert in jeder Branche, weil sie die Kosten für jedes einzelne Produkt bestimmt. <strong>Schwäche:</strong> Ein einheitlicher Gemeinkostensatz je Abteilung verzerrt. Arbeit an teuren Maschinen wird zu billig kalkuliert, Arbeit an billigen zu teuer. Abhilfe: mehr Kostenstellen bilden und mit <strong>Maschinenstundensätzen</strong> rechnen. Unbrauchbar wird das Verfahren, wenn die Gemeinkostenzuschläge im Verhältnis zu den direkt erfassbaren Kosten zu hoch werden.</p>

<h3>Zuschlagssätze und Maschinenstundensatz</h3>
<div class="formel">Materialgemeinkostensatz = Materialgemeinkosten / Materialkosten<small>Fertigungsgemeinkostensatz = Fertigungsgemeinkosten / Fertigungslohnkosten. Verwaltungs- und Vertriebssatz beziehen sich auf die Herstellkosten 2.</small></div>
<div class="formel">Maschinenstundensatz = (K<sub>A</sub> + K<sub>Z</sub> + K<sub>R</sub> + K<sub>I</sub> + K<sub>E</sub> + K<sub>W</sub>) / t<sub>N</sub><small>Abschreibung, Zinsen, Raum, Instandhaltung, Energie, Werkzeug – jeweils pro Jahr – geteilt durch die jährliche Nutzungszeit in Stunden.</small></div>
<div class="formel">K<sub>A</sub> = Wiederbeschaffungswert / Nutzungsdauer &nbsp;&nbsp;&nbsp; K<sub>Z</sub> = (Wiederbeschaffungswert / 2) × Zinssatz</div>
<p>Die Zinsen rechnet man auf den halben Wert, weil im Mittel über die Nutzungsdauer nur die Hälfte des Kapitals gebunden ist.</p>

<h3>Wo lässt sich sparen?</h3>
<p>Der größte Hebel liegt bei den <strong>Fertigungseinzelkosten</strong> (kürzere Fertigungszeiten, weniger Personaleinsatz) und den <strong>Materialgemeinkosten</strong> (weniger Bestände, schlankere Logistik). Beides erreicht man mit Lean Production und Automatisierung. Materialeinzelkosten sinken nur begrenzt über Konstruktion und Einkauf, Sondereinzelkosten über Standardisierung.</p>

<h3>Fixe und variable Kosten</h3>
<p><strong>Variable Kosten</strong> ändern sich mit der Stückzahl (Material, Energie der Maschinen, Leiharbeit). <strong>Fixe Kosten</strong> fallen unabhängig davon an (Abschreibungen, Versicherungen, Zinsen, feste Löhne, langfristige Mieten). Mehr Automatisierung heißt: höhere Fixkosten und mehr Kapitaleinsatz, dafür niedrigere variable Kosten je Stück. Das lohnt sich erst ab einer bestimmten Stückzahl.</p>

<h2>Investitionen bewerten</h2>
<table>
<tr><th>Statische Verfahren</th><th>Dynamische Verfahren</th></tr>
<tr><td>betrachten eine Nutzungsperiode</td><td>betrachten mehrere Perioden</td></tr>
<tr><td>rechnen mit Kosten und Leistungen</td><td>rechnen mit Einnahmen und Ausgaben</td></tr>
<tr><td>nutzen Durchschnittswerte, ohne Zeitwert des Geldes</td><td>nutzen Finanzmathematik und Prognosen</td></tr>
</table>
<p>Zwei statische Verfahren reichen für den Kurs:</p>
<h3>Kostenvergleichsrechnung</h3>
<p>Sie vergleicht Alternativen nur über die Kosten, Erlöse bleiben außen vor. Fixkosten (Abschreibung, Zinsen, Sonstiges) plus variable Kosten (Lohn, Material) ergeben die Gesamtkosten pro Jahr.</p>
<div class="formel">Abschreibung = Anschaffung / Nutzungsdauer &nbsp;&nbsp;&nbsp; Zinsen = Anschaffung × 0,5 × Zinssatz</div>
<div class="formel">Stückkosten = Gesamtkosten pro Jahr / produzierte Menge pro Jahr</div>
<div class="merke"><p><strong>Merke:</strong> Produzieren die Varianten gleich viel, gewinnt die mit den geringeren Gesamtkosten. Produzieren sie unterschiedlich viel, muss man die <strong>Stückkosten</strong> vergleichen.</p></div>
<h3>Amortisationsrechnung</h3>
<p>Sie fragt: Nach wie vielen Jahren ist das eingesetzte Geld wieder da? Damit lässt sich das finanzielle Risiko einschätzen.</p>
<div class="formel">Rückfluss pro Jahr = Gewinn pro Jahr + Abschreibung pro Jahr</div>
<div class="formel">Amortisationszeit = (Anschaffungskosten − Restwert) / Rückfluss pro Jahr</div>
<p>Die Amortisationszeit soll kürzer sein als die Nutzungsdauer der Maschine <em>und</em> kürzer als die Produktionsdauer des Produkts, das darauf läuft. Schwäche: Rückflüsse nach der Amortisation und unterschiedliche Nutzungsdauern bleiben unberücksichtigt.</p>

<h2>Qualität: Fertigungsgenauigkeit</h2>
<p><strong>Fertigungsgenauigkeit</strong> ist die geometrische Genauigkeit des Werkstücks nach der Bearbeitung. Beurteilt wird sie über <strong>Maß-, Form- und Lagegenauigkeit</strong> sowie die <strong>Oberflächengüte</strong>. Die Anforderungen stehen in der Fertigungszeichnung.</p>
<ul>
<li>Geprüft wird taktil oder optisch, im laufenden Prozess (<em>inline</em>) oder danach (<em>offline</em>). Inline ist zu bevorzugen, weil keine zusätzliche Arbeitszeit anfällt.</li>
<li><strong>Toleranz</strong> = oberes Grenzmaß − unteres Grenzmaß. Die <strong>ISO-Toleranzgrade (IT)</strong> legen die Größe des Toleranzfelds fest: kleine IT-Zahl = enge Toleranz.</li>
<li>Die Oberfläche weicht in mehreren Ordnungen von der Idealgestalt ab (Gestaltabweichungen 1. bis 4. Ordnung, von der Formabweichung über Welligkeit bis zur Rauheit). Verfahren, Maschine und Werkzeug beeinflussen sie.</li>
<li>Kenngrößen der Rauheit: <strong>Ra</strong> (arithmetischer Mittenrauwert, Mittel der Profilabweichungen) und <strong>Rz</strong> (gemittelte Rautiefe, Mittelwert aus fünf Einzelrautiefen).</li>
</ul>
<div class="merke"><p><strong>Merke:</strong> Die Fertigungskosten steigen mit der geforderten Genauigkeit exponentiell. Deshalb gilt: so genau wie nötig, so grob wie möglich.</p></div>

<h2>Leistung: Bestände, Zeiten, Kapazität</h2>
<h3>Drei Bestandsarten</h3>
<table>
<tr><th>Bestand</th><th>Umfang</th><th>Zeigt die Güte der …</th></tr>
<tr><td>Rohwarenbestand</td><td>Material ab Wareneingang bis zur Buchung auf einen Fertigungsauftrag</td><td>Produktionsplanung und Disposition</td></tr>
<tr><td>Umlaufbestand (WIP)</td><td>Material und unfertige Produkte in der Produktion</td><td>Produktionssteuerung, Materialbereitstellung, Fehlerrate</td></tr>
<tr><td>Fertigwarenbestand</td><td>verkaufsfähige Produkte bis zur Auslieferung</td><td>Produktionsplanung und Vertriebslogistik</td></tr>
</table>
<p>Je geringer der Bestand, desto schlanker der Prozess.</p>
<h3>Durchlaufzeit und Flussgrad</h3>
<p>Die <strong>Durchlaufzeit</strong> eines Auftrags besteht aus Prozesszeiten und Übergangszeiten (Liegen, Transport, Rüsten). Den größten Anteil hat fast immer die <strong>Liegezeit</strong>, nicht die Bearbeitung. Bei parallelen Fertigungssträngen bestimmt das Teil mit der längsten Durchlaufzeit die Gesamtzeit.</p>
<div class="formel">Prozesszeit = Σ Hauptzeiten + Σ Nebenzeiten<small>Hauptzeit: wertschöpfend (z. B. Drehen). Nebenzeit: nötig, aber nicht wertschöpfend (z. B. Werkzeug verfahren, Werkzeug wechseln).</small></div>
<div class="formel">Flussgrad = Σ Prozesszeiten / Durchlaufzeit</div>
<p>Die <strong>Wertstromanalyse</strong> erfasst alle Prozessschritte mit ihren Kennwerten (Zykluszeit, Rüstzeit, Losgröße, Ausschuss) sowie Material- und Informationsflüsse. Unabgestimmte Prozesse, große Lose und schlechte Anlagenverfügbarkeit erhöhen die Bestände. Dann steigt die Durchlaufzeit bei gleicher Prozesszeit, und der Flussgrad sinkt.</p>
<p>Durchlaufzeiten verkürzt man durch <strong>Bestandsabbau</strong> (der beste Hebel), durch <strong>Parallelisieren und Synchronisieren</strong> von Vorgängen und durch die Lean-Prinzipien Fließen, Takten, Ziehen, Null Fehler.</p>
<h3>Ausbringung, Kapazität, Auslastung, Produktivität</h3>
<ul>
<li><strong>Ausbringungsmenge:</strong> Stückzahl, die eine Maschine oder ein Bereich in einer bestimmten Zeit herstellt.</li>
<li><strong>Kapazität:</strong> Netto-Betriebszeit je Schicht × Anzahl Schichten × Anzahl Ressourcen. Die <strong>Grenzkapazität</strong> ist die maximale Ausbringung.</li>
<li><strong>Auslastung:</strong> genutzte Kapazität im Verhältnis zur eingesetzten Kapazität. Sie zeigt, wie viel mehr ohne neue Kapazität ginge.</li>
<li><strong>Produktivität:</strong> Output geteilt durch Input.</li>
</ul>
<div class="formel">n<sub>max</sub> = (t<sub>bB</sub> − Σ t<sub>rB</sub>) / t<sub>eB</sub><small>maximale Stückzahl = (maximale Netto-Belegungszeit − Summe der Rüstzeiten) / Bearbeitungszeit je Einheit</small></div>
<p>Die Maschine mit der <em>kleinsten</em> maximalen Stückzahl bestimmt die Grenzkapazität des gesamten Wertstroms.</p>
<h3>Gesamtanlageneffektivität (GAE)</h3>
<p>Die Schichtzeit lässt sich nie voll nutzen. Die GAE (englisch OEE) zeigt, wie viel am Ende übrig bleibt:</p>
<div class="formel">GAE = Verfügbarkeit × Leistungsgrad × Qualitätsrate</div>
<table>
<tr><th>Faktor</th><th>Verluste, die ihn drücken</th></tr>
<tr><td>Verfügbarkeit</td><td>Anlagenausfälle, Rüsten und Einrichten</td></tr>
<tr><td>Leistungsgrad</td><td>Leerlauf und Kurzstillstände, verringerte Geschwindigkeit</td></tr>
<tr><td>Qualitätsrate</td><td>Anlaufschwierigkeiten, Ausschuss und Nacharbeit</td></tr>
</table>
<div class="formel">Qualitätsrate = (produzierte Menge − Nacharbeit − Ausschuss) / produzierte Menge</div>
<figure class="fig">
<svg viewBox="0 0 640 190" role="img" aria-label="Treppendiagramm: Von der möglichen Laufzeit bleiben nach Abzug der Verluste nur die Gutteile übrig.">
<g font-family="Bahnschrift, Arial Narrow, sans-serif" font-size="13" fill="currentColor">
<rect x="10" y="14" width="620" height="24" rx="3" fill="var(--surface-2)"/><text x="18" y="31">Mögliche Laufzeit</text>
<rect x="10" y="48" width="540" height="24" rx="3" fill="var(--green-soft)"/><text x="18" y="65">Geplante Produktionszeit</text><text x="556" y="65" fill="var(--ink-2)">Pausen</text>
<rect x="10" y="82" width="440" height="24" rx="3" fill="var(--green-soft)"/><text x="18" y="99">Tatsächliche Produktionszeit</text><text x="456" y="99" fill="var(--ink-2)">Rüsten, Störungen → V</text>
<rect x="10" y="116" width="360" height="24" rx="3" fill="var(--green-soft)"/><text x="18" y="133">Netto-Bearbeitungszeit</text><text x="376" y="133" fill="var(--ink-2)">Taktverluste → L</text>
<rect x="10" y="150" width="300" height="24" rx="3" fill="var(--green)"/><text x="18" y="167" fill="var(--on-green)">Gutteile</text><text x="316" y="167" fill="var(--ink-2)">Ausschuss, Nacharbeit → Q</text>
</g></svg>
<figcaption>Jede Stufe nimmt etwas weg. V, L und Q multipliziert ergeben die GAE.</figcaption>
</figure>

<h2>Fertigungstiefe und Make-or-buy</h2>
<div class="formel">Fertigungstiefe = Eigenfertigung / (Eigenfertigung + Fremdbezug)</div>
<p>Sie gibt den Wertanteil an, den das Unternehmen selbst erzeugt.</p>
<table>
<tr><th>Hohe Fertigungstiefe</th><th>Geringe Fertigungstiefe</th></tr>
<tr><td>Kontrolle über Prozess und Qualität</td><td>Kostenvorteile durch große Stückzahlen beim Lieferanten (economies of scale)</td></tr>
<tr><td>geringe Abhängigkeit von Zulieferern, Know-how bleibt im Haus</td><td>flexibler bei schwankender Nachfrage, weniger Lager</td></tr>
<tr><td>hoher Investitions- und Kapitalbedarf, höheres unternehmerisches Risiko</td><td>mehr Aufwand für Lieferantenmanagement, Beschaffung, Logistik</td></tr>
<tr><td>Risiko ungenutzter Maschinenkapazität</td><td>Material wird Hauptbestandteil der Herstellkosten, Kosten schwerer beeinflussbar</td></tr>
</table>
<p>Gesteuert wird die Fertigungstiefe über <strong>Make-or-buy-Entscheidungen</strong>. Alles selbst zu machen überfordert ein Unternehmen: Es bräuchte für jeden Schritt Betriebsmittel und müsste überall auf dem Stand der Technik bleiben, während Zulieferer Normteile viel günstiger herstellen. Deshalb konzentriert man sich auf die <strong>Kernfähigkeiten</strong>, mit denen man am Markt Vorteile erzielt. Der Stückkostenvergleich zwischen Eigen- und Fremdfertigung ist ein wichtiges Kriterium, aber nicht das einzige: Kernkompetenzen und Strategie zählen mit.</p>
`});

window.PML.chapters.push({
  id: '2', nr: '2', title: 'Grundlagen der schlanken Produktion', short: 'Schlanke Produktion',
  teaser: 'Verschwendung, Just-in-time und die vier Lean-Prinzipien.', min: 15,
  html: `
<p class="lead">Lean Production ersetzt hohe Bestände durch kurze, stabile Durchlaufzeiten. Der Weg dorthin: Verschwendung erkennen und beseitigen, und die Produktion nach vier Prinzipien ausrichten – Fließen, Takten, Ziehen, Null Fehler.</p>

<h2>Werkstatt- oder Fließfertigung</h2>
<p>Komplexe Produkte entstehen über mehrere Wertschöpfungsstufen, vom Rohstofflieferanten über Tier-3-, Tier-2- und Tier-1-Lieferanten bis zum OEM (Original Equipment Manufacturer). Mit jeder Stufe steigt der Wert des Produkts. Wie die Fertigung organisiert ist, entscheidet über Bestände und Durchlaufzeiten:</p>
<table>
<tr><th>Werkstattfertigung</th><th>Getaktete Fließfertigung</th></tr>
<tr><td>mehrere parallele, sich kreuzende Materialflüsse</td><td>gerichteter Materialfluss</td></tr>
<tr><td>unabhängige Prozesse</td><td>gekoppelte Prozesse</td></tr>
<tr><td>dynamische (wandernde) Engpässe</td><td>statische Engpässe</td></tr>
<tr><td>Steuerlisten geben die Reihenfolge vor</td><td>First in, first out gibt die Reihenfolge vor</td></tr>
<tr><td>hohe Bestände, schwankende Durchlaufzeiten und Auslastung</td><td>geringe Bestände, stabile Durchlaufzeiten, konstante Auslastung</td></tr>
<tr><td>lange, grob definierte Arbeitsumfänge, hoher Qualifizierungsaufwand</td><td>kurze, getaktete Standardarbeitsplätze, geringer Qualifizierungsaufwand</td></tr>
</table>
<p>Schwankende Durchlaufzeiten haben Folgen: ungenutzte Kapazitäten, hohe Bestände, schlechte Termintreue, unzufriedene Kunden und Mehraufwand zum Aufholen.</p>
<div class="merke"><p><strong>Merke:</strong> Traditionell sichert man Lieferbereitschaft über hohe Bestände. Lean erreicht dieselbe Kundenorientierung über kurze, stabile Durchlaufzeiten und hohe Reaktionsfähigkeit.</p></div>

<h2>Wertschöpfung und Verschwendung</h2>
<p><strong>Wertschöpfend</strong> ist eine Tätigkeit, die dem Produkt einen Mehrwert gibt, für den der Kunde zu zahlen bereit ist. Das ist nur ein kleiner Teil des Arbeitsprozesses. Alles andere ist Verschwendung (japanisch <em>Muda</em>):</p>
<ul>
<li><strong>Offensichtliche Verschwendung</strong> ist nicht nötig und wird <strong>eliminiert</strong>: Ausschuss, Nacharbeit, Bestände, Wartezeiten.</li>
<li><strong>Verdeckte Verschwendung</strong> bringt keinen Wertzuwachs, muss aber unter den gegebenen Umständen getan werden. Sie lässt sich nur <strong>reduzieren</strong>: Rüsten, Transport, Wege ohne Produkt.</li>
</ul>
<h3>Die sieben Verschwendungsarten</h3>
<p>Überproduktion · Bestände · Transport · Wartezeit · Wegezeiten · Flächen · Reparaturen und Fehler.</p>
<p><strong>Bestände verdecken Probleme</strong> wie Maschinenausfälle, fehlendes Material, Engpässe und Qualitätsmängel. Senkt man die Bestände in kleinen Schritten, werden die Probleme sichtbar und müssen gelöst werden. Erst danach läuft die Produktion dauerhaft mit niedrigen Beständen.</p>

<h2>Herkunft und Denkweise</h2>
<p>Der geistige Vater ist <strong>Taiichi Ohno</strong>, der ab etwa 1950 das <strong>Toyota-Produktionssystem (TPS)</strong> entwickelte. Es ruht auf zwei Grundprinzipien: <strong>Just-in-time</strong> (Verschwendung eliminieren) und <strong>Jidoka</strong> (Fehler im Prozess vermeiden, Abweichungen erkennen). 1990 machte das Buch „The Machine that Changed the World“ (Womack/Jones) den Ansatz im Westen bekannt, Pioniere wie Porsche übernahmen ihn Anfang der Neunziger. Heute gilt: Lean ist die Basis der Digitalisierung. Wer einen schlechten Prozess digitalisiert, hat einen schlechten digitalen Prozess.</p>
<h3>Sechs Leitgedanken</h3>
<ol>
<li><strong>Alle einbeziehen:</strong> Management gibt Ziele vor und lebt sie vor (top-down), Mitarbeiter und Zulieferer gestalten mit (bottom-up).</li>
<li><strong>In Prozessen denken:</strong> Jedes Produkt ist Ergebnis eines Prozesses. Prozesse sind messbar, bewertbar und wiederholbar.</li>
<li><strong>Wertschöpfungsprozess in den Mittelpunkt stellen:</strong> am Ort des Geschehens (<em>Gemba</em>) ansetzen, von innen nach außen optimieren. Maßgebliches Messkriterium ist die Durchlaufzeit.</li>
<li><strong>Wert definieren:</strong> Den Wert bestimmt der Kunde.</li>
<li><strong>Wertschöpfung und Verschwendung trennen.</strong></li>
<li><strong>Ständig verbessern:</strong> in kleinen Schritten, sofort umsetzen (eine 60-%-Lösung reicht zum Start), jede Verbesserung wird neuer Standard.</li>
</ol>

<h2>Just-in-time und die vier Prinzipien</h2>
<p>Die Vision heißt <strong>5R</strong>: das richtige Teil, in der richtigen Menge (Losgröße 1), zum richtigen Zeitpunkt (synchron), am richtigen Ort (minimale Wege), in der richtigen Qualität (null Fehler).</p>
<figure class="fig">
<svg viewBox="0 0 640 230" role="img" aria-label="Der Just-in-time-Tempel: Dach Just-in-time-Produktionssystem, getragen von vier Säulen Fließ-, Takt-, Zieh- und Null-Fehler-Prinzip.">
<g font-family="Bahnschrift, Arial Narrow, sans-serif" fill="currentColor" text-anchor="middle">
<polygon points="320,8 620,70 20,70" fill="var(--green)"/><text x="320" y="56" font-size="16" fill="var(--on-green)">Just-in-time-Produktionssystem</text>
<g font-size="15">
<rect x="40" y="80" width="125" height="118" rx="4" fill="var(--green-soft)"/><text x="102" y="104">Fließen</text>
<rect x="185" y="80" width="125" height="118" rx="4" fill="var(--green-soft)"/><text x="247" y="104">Takten</text>
<rect x="330" y="80" width="125" height="118" rx="4" fill="var(--green-soft)"/><text x="392" y="104">Ziehen</text>
<rect x="475" y="80" width="125" height="118" rx="4" fill="var(--green-soft)"/><text x="537" y="104">Null Fehler</text>
</g>
<g font-size="12" fill="var(--ink-2)">
<text x="102" y="130">Prozesse koppeln</text><text x="102" y="147">und ausrichten</text><text x="102" y="180" fill="currentColor">Ein-Stück-Fluss</text>
<text x="247" y="130">Arbeitsinhalte</text><text x="247" y="147">harmonisieren</text><text x="247" y="180" fill="currentColor">Herzschlag der Fabrik</text>
<text x="392" y="130">Nachfolger holt nur,</text><text x="392" y="147">was er braucht</text><text x="392" y="180" fill="currentColor">keine Überproduktion</text>
<text x="537" y="130">Prozesse verbessern</text><text x="537" y="147">und stabilisieren</text><text x="537" y="180" fill="currentColor">stabile Prozesse</text>
</g>
<rect x="20" y="206" width="600" height="14" rx="3" fill="var(--yellow)"/>
</g></svg>
<figcaption>Nur wenn alle vier Säulen zusammenwirken, trägt das System.</figcaption>
</figure>

<h3>1. Fließ-Prinzip</h3>
<p>Abnehmer und Lieferanten sind gekoppelt, die Lieferkette ist ausgerichtet, es gibt weder Überlieferung noch Fehlteile. Kleine Mengen werden kontinuierlich weitergegeben, Handlingstufen minimiert. Übergeordnetes Ziel ist der <strong>One-Piece-Flow</strong>. Gegenüber der Losgrößenproduktion entfallen Lager und Puffer, die Durchlaufzeit sinkt.</p>
<ul>
<li><strong>Fischgräten-Prinzip:</strong> Vormontagen sind getaktet und ohne Zwischenpuffer an die Hauptlinie angebunden. Vorteile: minimale Durchlaufzeit und Fläche, hohe Qualität. Voraussetzung: ausgetaktete Mitarbeiter und standardisiertes Arbeiten.</li>
<li><strong>Chaku-Chaku-Linie</strong> (für maschinenintensive Prozesse): Der Mitarbeiter trägt das Werkstück in fester Reihenfolge von Maschine zu Maschine, bestückt sie, und die Maschine arbeitet weitgehend automatisch. Vorteile: wenig Wartezeit, geringe Bestände, kurze Wege, geringe Investition (kein automatischer Transport), Mehrmaschinenbedienung senkt Personalkosten. Voraussetzung: hohe Anlagenverfügbarkeit, automatisierte Abläufe und Teileauswurf.</li>
</ul>

<h3>2. Takt-Prinzip</h3>
<p>Alle Bereiche arbeiten im gleichen Rhythmus, dem Herzschlag der Fabrik. Vorgegeben wird er vom Kunden:</p>
<div class="formel">Kundentakt = Nettoarbeitszeit pro Tag / Kundenbedarf pro Tag</div>
<div class="bsp"><p><strong>Beispiel:</strong> 420 Minuten Nettoarbeitszeit, 210 Stück Tagesbedarf → Takt 2 Minuten je Stück. Die Nettoarbeitszeit ist die Bruttoarbeitszeit minus unbezahlte Pausen minus Verteilzeiten.</p></div>
<ul>
<li><strong>Tagesziel statt Monatsziel:</strong> Abweichungen fallen sofort auf und lassen sich mit kleinen Anpassungen am Folgetag ausgleichen.</li>
<li><strong>Nivellierung der Produktion:</strong> Die Tagesmenge bleibt über lange Zeit konstant. Kleine Nachfrageschwankungen innerhalb der Mengenabweichungsgrenzen fängt man mit flexiblen Arbeitszeiten ab. Das macht Einkauf, Personaleinsatz und Termine planbar und Probleme schneller sichtbar.</li>
<li><strong>Austaktung:</strong> Im Arbeitsverteilungsdiagramm stellt man die Zykluszeit jedes Arbeitsplatzes („benötigte Zeit“) dem Takt („verfügbare Zeit“) gegenüber. Zykluszeit kleiner als Takt bedeutet Wartezeit, größer bedeutet Überstunden oder zusätzliche Werker. Ziel: Zykluszeit = Kundentakt.</li>
<li><strong>Vorgehen:</strong> erst offensichtliche Verschwendung beseitigen, dann Arbeitsinhalte gleichmäßig verteilen, dann weiter verbessern (Kaizen).</li>
</ul>

<h3>3. Zieh-Prinzip (Pull)</h3>
<table>
<tr><th>Push</th><th>Pull</th></tr>
<tr><td>zentrales System steuert jede Fertigungsstufe</td><td>das System steuert sich selbst</td></tr>
<tr><td>Lose werden ohne konkreten Bedarf in Puffer geschoben</td><td>produziert wird nur, was der nachgelagerte Prozess braucht</td></tr>
</table>
<p>Schwächen der zentralen Produktionsplanung und -steuerung (PPS): Sie kennt die Einzelprozesse nicht genau genug und reagiert auf Störungen verzögert.</p>
<p><strong>Supermarkt:</strong> ein Puffer mit definiertem Maximalbestand nach dem Prinzip „Ist was weg, muss was hin“. Der Verbrauch des Nachfolgers löst die Produktion des Vorgängers aus. Der Bestand hängt vom Verbrauch und der Wiederbeschaffungszeit ab, entnommen wird nach FIFO.</p>
<p><strong>Kanban</strong> (einstufig) läuft so:</p>
<ol>
<li>Im Supermarkt steht eine definierte Zahl voller Behälter, jeder mit Kanban-Karte.</li>
<li>Die Senke (der Verbraucher) entnimmt einen Behälter, die Karte wird abgenommen.</li>
<li>Die Senke verbraucht den Inhalt, der leere Behälter geht zurück.</li>
<li>Die Karte geht an die Quelle (den Erzeuger).</li>
<li>Ab einer Mindestzahl Karten <em>darf</em> die Quelle fertigen, ab einer Höchstzahl <em>muss</em> sie.</li>
<li>Die gefertigten Teile kommen mit Karte zurück in den Supermarkt.</li>
</ol>
<p>Vorteile: Steuerung über kontrollierte Bestände, weniger Steuerungsaufwand, kürzere Durchlaufzeiten, mehr Eigenverantwortung in der Produktion. Varianten: Karten-Kanban, Behälter-Kanban, Sammel-Kanban, digitaler Kanban. Ein Pull-System bringt die Bestände nahe an das Ideal der synchronen Produktion.</p>

<h3>4. Null-Fehler-Prinzip</h3>
<p>Es stabilisiert die anderen drei. Prozesse sind geführt und standardisiert, die Wahlfreiheit des Mitarbeiters und damit die Fehlermöglichkeit ist eingeschränkt.</p>
<table>
<tr><th>Ziel</th><th>Methode</th><th>Kern</th></tr>
<tr><td>Fehler vorbeugen</td><td>5S</td><td>Sortiere aus (Seiri), Stelle hin (Seiton), Säubere (Seiso), Sinn für Ordnung (Seiketsu), Selbstdisziplin (Shitsuke)</td></tr>
<tr><td>Fehler vorbeugen</td><td>Poka Yoke</td><td>einfache technische Vorkehrungen gegen versehentliche Fehler (Vertauschen, Vergessen, Verwechseln, Falschablesen). Ziel: 100 % Qualität</td></tr>
<tr><td>Fehler erkennen</td><td>Jidoka</td><td>Maschine oder Mitarbeiter erkennt die Abweichung und hält den Prozess sofort an, z. B. per Sensor</td></tr>
<tr><td>Fehler erkennen</td><td>Andon</td><td>Ampel am Arbeitsplatz: Gelb = Unterstützung nötig, Rot = Linie stoppt</td></tr>
<tr><td>Fehler rückmelden</td><td>Qualitätsregelkreis</td><td>schnelle, eindeutige Rückmeldung an die verursachende Station</td></tr>
<tr><td>Fehler beseitigen</td><td>5× Warum</td><td>fünfmal nachfragen, bis die eigentliche Ursache gefunden ist</td></tr>
</table>

<h2>Kontinuierliche Verbesserung (Kaizen)</h2>
<p><strong>Kaizen</strong> heißt „Veränderung zum Besseren“: kontinuierliche Verbesserung in kleinen Schritten unter Einbezug aller Mitarbeiter. Fünf Merkmale:</p>
<ol>
<li>Verbessert wird aus Sicht des Produkts.</li>
<li>Wertschöpfung und Verschwendung werden getrennt.</li>
<li>Standards sind die Basis für Verbesserungen.</li>
<li>Der nachgelagerte Prozess ist der Kunde.</li>
<li>Krisen werden als Chancen verstanden.</li>
</ol>
<table>
<tr><th>Innovation (große Schritte)</th><th>Kaizen (kleine Schritte)</th></tr>
<tr><td>lange Planung, hohe Investition</td><td>kurze Planung, kaum Investition</td></tr>
<tr><td>Werker wenig eingebunden</td><td>intensive Zusammenarbeit mit den Werkern</td></tr>
<tr><td>irreversibel, Ziel oft verfehlt</td><td>änderbar, nähert sich dem Ziel stetig</td></tr>
</table>
<p>Erfolgreich ist die Kombination: Eine Innovation wird durch Kaizen stabilisiert und weiterentwickelt. <strong>Standardisierung</strong> wirkt dabei wie ein Keil unter dem Rad – ohne Standard rollt jede Verbesserung mit der Zeit zurück.</p>
<p><strong>Line-Back-Ansatz:</strong> Man optimiert „von innen nach außen“, also vom Ort der höchsten Wertschöpfung (der Montagelinie) zurück bis zum Lieferanten. Logistik und andere Unterstützer verstehen sich als Dienstleister der Produktion. Reihenfolge im Unternehmen: erst Produktion, dann Produktionslogistik, Beschaffungs- und Vertriebslogistik, Einkauf, Entwicklung und Vertrieb, zuletzt Verwaltung.</p>

<h2>Umsetzung im Unternehmen</h2>
<p>Eine Lean-Transformation läuft in Wellen je Bereich, mit Lean-Projekten und zugehörigen <strong>Kaizen-Workshops</strong>. Ein Workshop dauert typischerweise zwei Wochen: Woche eins für Schulung, Ist-Aufnahme, Verschwendungsanalyse und Lösungsideen, Woche zwei für Umsetzung, Überprüfung, Standardisierung und Abschlusspräsentation. Das Team hat 5 bis 8 Mitglieder aus Produktion und unterstützenden Bereichen (Meister, Werker, Qualität, Logistik, Planung, Konstruktion) plus einen Lean-Experten als Moderator. Die Teilnehmer müssen zu 100 % freigestellt sein.</p>
<p><strong>Vorbild Porsche:</strong> Anfang der Neunziger steckte Porsche in einer tiefen Krise. Mit japanischen Beratern, klarem Umsetzungswillen des Vorstands und direkter Kommunikation wurde die Produktion konsequent auf Pull, Kundentakt, Fließen und Null Fehler umgestellt. Daraus entstand das Porsche-Produktionssystem mit synchroner Produktion.</p>
`});

window.PML.chapters.push({
  id: '3', nr: '3', title: 'Grundlagen der Fertigungsplanung', short: 'Fertigungsplanung',
  teaser: 'Planungsschritte und die Verfahren Urformen, Umformen, Spanen.', min: 13,
  html: `
<p class="lead">Die Fertigungsplanung legt fest, mit welchen Verfahren und in welcher Reihenfolge aus einer Zeichnung ein fertiges Teil wird. Die Leitplanken sind wieder Kosten, Qualität und Leistung.</p>

<h2>Die fünf Planungsphasen</h2>
<p>Der Weg zum Produktionssystem verläuft in fünf Phasen, die iterativ optimiert werden. Diese Kette zieht sich durch die ganze Vorlesung:</p>
<table>
<tr><th>Phase</th><th>Ergebnis</th></tr>
<tr><td>1. Fertigungsverfahren definieren</td><td>Prozesszeiten, Rüstzeiten, Leistungsbedarfe, Fertigungstiefe</td></tr>
<tr><td>2. Produktionsmittel wählen</td><td>Maschinentyp und -modell, Leistungsdaten, Werkzeugkinematik, Ausstattung</td></tr>
<tr><td>3. Kapazitäten planen</td><td>Maschinenanzahl, Schichtmodell, Auslastung, Personalbedarf Produktion</td></tr>
<tr><td>4. Materialversorgung planen</td><td>Logistiktakt, Bereitstellungsarten, Behältergrößen, Personalbedarf Logistik</td></tr>
<tr><td>5. Wirtschaftlichkeit bewerten</td><td>Herstellungskosten</td></tr>
</table>
<p>Grundlage ist die Beschreibung der Produktionsaufgabe aus Produkteigenschaften (Geometrie, Werkstoff, Toleranzen, Oberfläche) und organisatorischen Größen (Stückzahl, Losgröße).</p>

<h2>Welches Verfahren passt?</h2>
<ul>
<li><strong>Genauigkeit gegen Produktivität:</strong> Je genauer ein Verfahren arbeitet, desto weniger produktiv ist es. Grob einsortiert: Urformen am ungenauesten, Umformen in der Mitte, spanende Verfahren genauer, Feinbearbeitung (Schleifen, Honen, Läppen) am genauesten.</li>
<li><strong>Genauigkeit treibt Kosten:</strong> Anforderungen so weit wie möglich minimieren.</li>
<li><strong>Energieaufwand und Werkstoffausnutzung</strong> sind weitere Einflussgrößen auf die Wirtschaftlichkeit.</li>
</ul>
<p>Je nach Stückzahl, Formänderung und geforderter Qualität ergibt sich ein bevorzugtes Verfahren.</p>

<h2>Sechs Hauptgruppen nach DIN 8580</h2>
<table>
<tr><th>Nr.</th><th>Hauptgruppe</th><th>Was passiert?</th><th>Zusammenhalt</th></tr>
<tr><td>1</td><td>Urformen</td><td>fester Körper aus formlosem Stoff</td><td>schaffen</td></tr>
<tr><td>2</td><td>Umformen</td><td>bildsames (plastisches) Ändern der Form; Masse und Zusammenhalt bleiben</td><td>beibehalten</td></tr>
<tr><td>3</td><td>Trennen</td><td>Form ändern, Zusammenhalt wird örtlich aufgehoben</td><td>vermindern</td></tr>
<tr><td>4</td><td>Fügen</td><td>Werkstücke verbinden</td><td>vermehren</td></tr>
<tr><td>5</td><td>Beschichten</td><td>fest haftende Schicht aus formlosem Stoff aufbringen</td><td>vermehren</td></tr>
<tr><td>6</td><td>Stoffeigenschaft ändern</td><td>Stoffteilchen umlagern, aussondern oder einbringen</td><td>–</td></tr>
</table>
<p>Gruppe 1 schafft die Form, die Gruppen 2 bis 5 ändern die Form, Gruppe 6 ändert die Stoffeigenschaften.</p>

<h2>Vier Schritte der Fertigungsplanung</h2>
<ol>
<li><strong>Technologieketten definieren:</strong> verschiedene Fertigungstechnologien verknüpfen, noch unabhängig von konkreten Maschinen. Eingang: Geometrie, Werkstoff, Toleranzen, Oberfläche. Ergebnis: mögliche Technologieketten.</li>
<li><strong>Fertigungsfolgen definieren:</strong> Grobplanung im Kontext des eigenen Betriebs. Jedem Arbeitsvorgang werden Maschinen und Betriebsmittel zugewiesen, Risiken und Kosten abgeschätzt, höchstens drei Folgen ausgewählt. Ergebnis: unternehmensspezifische Fertigungsfolgen.</li>
<li><strong>Einzelprozesse definieren:</strong> Werkzeuge auswählen, Werkzeugbahnen erzeugen, Schnittparameter festlegen, simulieren. Ergebnis: Arbeitsplan erstellt, Maschinen programmiert.</li>
<li><strong>Prozessvarianten bewerten:</strong> Fertigungskosten, qualitative Aspekte (Prozesssicherheit, Wandlungsfähigkeit, Arbeitssicherheit, Ergonomie, technisches Risiko) und Einmalaufwände. Ergebnis: bewertete Fertigungsplanung.</li>
</ol>
<p>Kriterien für die Maschinenauswahl in Schritt 2: Bearbeitungsverfahren, Arbeitsraum, Funktionen, Leistungsdaten, erreichbare Genauigkeit und der Automatisierungsgrad, der von Stückzahl und Kosten abhängt. Geprüft wird auch, ob vorhandene Kapazitäten reichen oder investiert werden muss.</p>

<h2>Urformen</h2>
<p>Urformen ist immer der erste Schritt zum Werkstück. Es geht aus dem flüssigen Zustand (<strong>Gießen</strong>: schmelzen, gießen) oder aus dem pulverförmigen Zustand (<strong>Sintern</strong>: mischen, pressen, sintern).</p>
<table>
<tr><th>Dauerformen (ohne Modell)</th><th>Verlorene Formen, verlorene Modelle</th><th>Verlorene Formen, Dauermodelle</th></tr>
<tr><td>Druckguss, Kokillenguss, Schleuderguss, Strangguss (kontinuierlich)</td><td>Feinguss, Vollformguss</td><td>Sandguss, Schablonenguss, Maskenformguss</td></tr>
</table>
<p>Weitere Einteilungen: Art und Eigenschaften des Werkstoffs, Kontinuität (kontinuierlich oder diskontinuierlich), Art der Formfüllung (Schwerkraft, Druck, Zentrifugalkraft), Richtung des Materialflusses (steigend oder fallend). Häufigste Gusswerkstoffe sind Gusseisen mit Lamellengraphit und Aluminiumlegierungen, bei Kunststoffen die Thermoplaste. Leichtmetalle haben eine Dichte unter 5 kg/dm³, Schwermetalle darüber.</p>
<table>
<tr><th>Vorteile</th><th>Nachteile</th></tr>
<tr><td>alle technisch wichtigen Metalle gießbar</td><td>vergleichsweise geringe Genauigkeit</td></tr>
<tr><td>komplizierte Geometrien möglich (Hohlräume, Hinterschnitte)</td><td>Schwindung und Schrumpfung</td></tr>
<tr><td>hohe Werkstoffausnutzung, endkonturnah</td><td>Eigenspannungen, Lunker, Einschlüsse</td></tr>
<tr><td>100 % recycelbar</td><td>angepasstes Design nötig, teure Anlagen und Werkzeuge</td></tr>
</table>

<h2>Umformen</h2>
<p>Umformen ändert die Form eines festen Körpers plastisch. <strong>Masse und Stoffzusammenhalt bleiben erhalten.</strong> Äußere Kräfte verschieben Atomschichten entlang von Gleitebenen, der Werkstoff fließt in die Form des Werkzeugs. Ausgangsmaterial sind Halbzeuge (Brammen, Knüppel, Stangen, Rohre, Bleche). Das Ergebnis muss kaum nachgearbeitet werden und hat einen <strong>ununterbrochenen Faserverlauf</strong>, der die mechanischen Eigenschaften verbessert.</p>
<table>
<tr><th>Massivumformung</th><th>Blechumformung</th></tr>
<tr><td>große Querschnitts- und Formänderungen</td><td>Blechdicke bleibt nahezu gleich, geringere Formänderung</td></tr>
<tr><td>hohe Kräfte, hohe Werkzeugbeanspruchung, große Verfestigung</td><td>geringere Kräfte, Werkzeugbeanspruchung und Verfestigung</td></tr>
<tr><td>Beispiel: Rundstab → Welle</td><td>Beispiel: Blech → Wanne</td></tr>
</table>
<table>
<tr><th>Kaltumformung (Raumtemperatur)</th><th>Warmumformung (über Rekristallisationstemperatur)</th></tr>
<tr><td>+ kein Energieaufwand fürs Erwärmen, kein Maßfehler durch Schwindung</td><td>+ geringer Kraft- und Arbeitsbedarf</td></tr>
<tr><td>+ gute Oberfläche, Festigkeit steigt, geringe Werkzeugkosten</td><td>+ großes Umformvermögen</td></tr>
<tr><td>− großer Kraft- und Arbeitsbedarf, begrenztes Umformvermögen</td><td>− hoher Energieaufwand, hohe Werkzeugkosten, Maßfehler durch Schwindung, Zunder</td></tr>
</table>
<p><strong>Vorteile des Umformens:</strong> gute mechanische Eigenschaften und hohe Dauerfestigkeit, keine Poren oder Lunker wie beim Guss, relativ enge Toleranzen (IT 12 bis IT 6), geringer Materialeinsatz, wenig spanende Nacharbeit, hohe Produktivität. <strong>Nachteile:</strong> sehr große Umformkräfte, teure Maschinen und Werkzeuge, also hohe Fixkosten, die hohe Stückzahlen verlangen, dazu Schmiermittel und Reinigungsaufwand.</p>
<h3>Einteilung nach Spannungen (DIN 8582)</h3>
<table>
<tr><th>Gruppe</th><th>Beispiele</th></tr>
<tr><td>Druckumformen</td><td>Walzen, Freiformen, Gesenkformen, Eindrücken, Durchdrücken</td></tr>
<tr><td>Zugdruckumformen</td><td>Tiefziehen, Durchziehen, Drücken, Kragenziehen</td></tr>
<tr><td>Zugumformen</td><td>Streckziehen (Längen, Weiten, Tiefen)</td></tr>
<tr><td>Biegeumformen</td><td>freies Biegen</td></tr>
<tr><td>Schubumformen</td><td>Verdrehen, Verschieben</td></tr>
</table>

<h2>Spanen</h2>
<p>Spanen formt Werkstücke, indem Werkstoffteilchen (Späne) mechanisch abgetrennt werden. Die Form entsteht durch Abbilden der Schneidengeometrie oder durch gesteuerte Relativbewegung zwischen Werkzeug und Werkstück. Die Hauptverformung des Spans geschieht in der <strong>primären Scherzone</strong>.</p>
<h3>Geometrisch bestimmte Schneide</h3>
<p>Am häufigsten industriell eingesetzt. Mit rotatorischer Hauptbewegung: Drehen, Bohren, Fräsen, Sägen. Mit translatorischer: Hobeln, Stoßen, Räumen.</p>
<ul>
<li><strong>Drehen:</strong> geschlossene, meist kreisförmige Schnittbewegung; der Vorschub liegt in einer Ebene senkrecht zur Schnittrichtung. Meist dreht sich das Werkstück. Bearbeitet werden Außen- und Innenkonturen.</li>
<li><strong>Bohren:</strong> kreisförmige Schnittbewegung; die Drehachse des Werkzeugs fällt mit der Achse der Bohrung zusammen, der Vorschub läuft entlang dieser Achse.</li>
<li><strong>Fräsen:</strong> kreisförmige Schnittbewegung eines meist mehrzahnigen Werkzeugs. Bei jeder Umdrehung gibt es mindestens eine Schnittunterbrechung. Der Vorschub verläuft senkrecht oder schräg zur Drehachse.</li>
</ul>
<p>Die Varianten heißen bei allen drei ähnlich: Plan-, Rund-, Schraub-, Wälz-, Profil- und Form- (z. B. Plandrehen, Rundfräsen, Profilbohren).</p>
<h3>Geometrisch unbestimmte Schneide</h3>
<p>Für die <strong>Feinbearbeitung</strong>: Schleifen, Honen, Läppen, Strahlspanen. Beim <strong>Schleifen</strong> trennen viele gebundene Körner aus hochharten Stoffen (Korund, Siliciumcarbid, Bornitrid, Diamant) mit hoher Geschwindigkeit den Werkstoff ab. Späne und Wärme führt der Kühlschmierstoff ab. Weil die Körner verschleißen, muss die Scheibe <strong>konditioniert</strong> werden:</p>
<ul>
<li><strong>Konditionieren</strong> = Abrichten + Reinigen</li>
<li><strong>Abrichten</strong> = Profilieren (definierte Form, Makrogeometrie) + Schärfen (Körner brechen, Mikrogeometrie)</li>
</ul>
`});

window.PML.chapters.push({
  id: '3.1', nr: '3.1', title: 'Ausgewählte Verfahren der Zahnradfertigung', short: 'Zahnradfertigung',
  teaser: 'Vom Rohling über Wälzfräsen und Härten zum Schleifen.', min: 11,
  html: `
<p class="lead">Am Zahnrad lässt sich eine komplette Technologiekette durchspielen: weich vorbearbeiten, härten, hart feinbearbeiten. Jeder Schritt hat seine typischen Verfahren mit klaren Stärken und Schwächen.</p>

<h2>Grundlagen der Verzahnung</h2>
<p>Verzahnungen gibt es in neun Grundformen, darunter Stirnradpaare (gerade oder schräg verzahnt), Innenstirnradpaar, Zahnstange mit Rad, Kegelradpaare, Schraubenräder sowie Schnecke mit Schneckenrad. Die Geometrie hängt am <strong>Modul m</strong>:</p>
<div class="formel">Teilkreisdurchmesser d = m · z &nbsp;&nbsp;&nbsp; Teilung p = m · π<small>z = Zähnezahl. Der Modul ist also Teilung geteilt durch π.</small></div>
<div class="formel">Kopfkreis d<sub>a</sub> = m · (z + 2) &nbsp;&nbsp;&nbsp; Achsabstand a = (d<sub>1</sub> + d<sub>2</sub>) / 2</div>
<div class="formel">Kopfhöhe h<sub>a</sub> = m &nbsp;&nbsp;&nbsp; Fußhöhe h<sub>f</sub> = m + c &nbsp;&nbsp;&nbsp; Zahnhöhe h = 2 · m + c</div>
<p>Das Kopfspiel c liegt bei 0,1 bis 0,3 · m. Die Zahndicke ist die halbe Teilung (s = p / 2), der Fußkreis d<sub>f</sub> = d − 2 · h<sub>f</sub>, das Übersetzungsverhältnis ergibt sich aus den Zähnezahlen.</p>

<h2>Die Verfahrenskette</h2>
<p><strong>Weichvorbearbeitung → Weichfeinbearbeitung → Härten → Hartfeinbearbeitung.</strong> Welche Kette man wählt, hängt vom Anforderungsprofil ab:</p>
<ul>
<li><strong>Passverzahnungen</strong> werden oft umformend hergestellt.</li>
<li><strong>Leistungsverzahnungen</strong> werden in der Regel wärmebehandelt und danach hart feinbearbeitet, um den Härteverzug zu korrigieren.</li>
<li>In der <strong>Großserie</strong> setzen sich pulvermetallurgische Verfahren mit umformender Nachbearbeitung durch.</li>
</ul>
<p>Jeder Schritt verändert Geometrie und Werkstoff (Prozesssignatur). Qualität und Wirtschaftlichkeit ergeben sich aus der gesamten Kette.</p>

<h2>Umformende Verfahren</h2>
<p>Gegenüber rein spanender Fertigung sparen sie Material und Zeit. Verbreitet sind drei Verfahren des Druckumformens.</p>
<h3>Profilwalzen (kalt)</h3>
<p>Das Werkzeug verdrängt den Werkstoff, der in die Freiräume der Werkzeugkontur auffließt. Weil Werkzeug und Werkstück sich nur örtlich berühren, sind die Kräfte relativ gering. Es gibt Abwälz- und Formverfahren:</p>
<table>
<tr><th>Verfahren</th><th>Prinzip</th><th>Besonderheit</th></tr>
<tr><td>Zweirollen-Profilwalzen (Abwälz)</td><td>zwei außenverzahnte Rollen drehen gleichsinnig, eine stellt zu</td><td>gerade und schräge Profile aus dem Vollen, Modul bis 3,5 mm</td></tr>
<tr><td>Roto-Flo (Abwälz)</td><td>zwei gerade Walzbacken fahren gegenläufig, Werkstück rollt dazwischen, fertig in einem Hub</td><td>sehr produktiv, Taktzeiten bis etwa 9 s, Massenproduktion von Steckverzahnungen</td></tr>
<tr><td>WPM (Abwälz)</td><td>zwei innenverzahnte Ringsegmente kreisen um das Werkstück</td><td>vor allem evolventische Vielkeilprofile</td></tr>
<tr><td>Grob-Verfahren (Form)</td><td>Walzrollen in zwei gegenläufigen Walzköpfen formen Zahn für Zahn</td><td>einziges industriell verbreitetes Formverfahren, nur Geradverzahnungen</td></tr>
</table>
<h3>Gesenkformen (warm)</h3>
<p>Ein erwärmter Rohling wird zwischen Ober- und Untergesenk umgeformt, die das Werkstück ganz oder weitgehend umschließen. Im Gesenk laufen drei Vorgänge ab: <strong>Stauchen, Breiten, Steigen</strong>. Über die <strong>Gratbahn</strong> wird der Druck im Gesenk gesteuert.</p>
<p>Sechs Prozessschritte: Erwärmen (über Rekristallisationstemperatur) → Vorformen → Schmieden → Abgraten, Lochen, Nachformen → Wärmebehandeln (Vergüten) → Entzundern.</p>
<p><strong>Gratloses Präzisionsschmieden</strong> spart 10 bis 30 % Rohmaterial, Energie und den Abgratprozess, verlangt aber ein sehr genaues Rohteilgewicht (Abweichung höchstens etwa 0,5 bis 2 %).</p>
<h3>Fließpressen (kalt)</h3>
<p>Gehört zum Durchdrücken. Der Werkstoff wird durch eine Matrize, im Stempel oder durch den Spalt dazwischen verdrängt. Es entstehen kleine Werkstücke, einbaufertig oder mit wenig Nacharbeit. Varianten nach Fließrichtung (vorwärts, rückwärts, quer) und Form (Voll, Hohl, Napf). Bei mehrstufiger Kaltumformung hebt <strong>Rekristallisationsglühen</strong> zwischendurch die Kaltverfestigung auf.</p>

<h2>Spanende Weichbearbeitung</h2>
<p>Man unterscheidet <strong>Formverfahren</strong> (das Werkzeug hat die Form der Zahnlücke, jede Zahnform braucht ein eigenes Werkzeug, es wird geteilt) und <strong>Wälzverfahren</strong> (Werkzeug und Rad wälzen kontinuierlich aufeinander ab, ein Werkzeug reicht für Zahnformen gleichen Profils).</p>
<table>
<tr><th>Verfahren</th><th>Prinzip</th><th>Einsatz</th><th>Plus</th><th>Minus</th></tr>
<tr><td>Profilfräsen</td><td>Formverfahren auf Universalmaschinen, je Zahn mindestens zwei radiale Vorschübe</td><td>kleine bis mittlere Lose, Prototypen</td><td>geringe Investition</td><td>eigenes Werkzeug je Zahngeometrie, geringe Produktivität und Genauigkeit</td></tr>
<tr><td>Wälzfräsen</td><td>Fräser (Profil wie eine Zahnstange, Schneiden spiralförmig) und Rohling drehen kontinuierlich und abgestimmt</td><td>Außenverzahnung, Mittel- bis Großserie</td><td>gängigstes Verfahren: sehr produktiv und flexibel, ein Fräser für beliebige Zähnezahlen gleichen Moduls</td><td>keine Innenverzahnung</td></tr>
<tr><td>Wälzstoßen</td><td>Schneidrad stößt oszillierend in Achsrichtung, überlagert von der Wälzbewegung; beim Rückhub hebt es ab</td><td>Innenverzahnungen und Störkonturen, Einzelteil bis Mittelserie</td><td>viele Zahnradarten möglich</td><td>relativ teure Werkzeuge</td></tr>
<tr><td>Wälzhobeln</td><td>wie Wälzstoßen, aber mit Zahnstangenwerkzeug, das zurückgesetzt werden muss</td><td>sehr große Zahnräder, Einzelteil bis Kleinserie</td><td>günstige, geradflankige Werkzeuge</td><td>geringe Produktivität, keine Innenverzahnung</td></tr>
<tr><td>Wälzschälen</td><td>kontinuierliches Abwälzen mit axialem Vorschub, Achsen gekreuzt (unter 30°)</td><td>innen und außen, Mittel- bis Großserie</td><td>2- bis 3-mal produktiver als Wälzstoßen, Schruppen und Schlichten in einer Aufspannung</td><td>hoher Werkzeugverschleiß, Wärmeprobleme</td></tr>
</table>
<p>Beim Wälzfräsen wird der Fräser tangential verschoben (<strong>Shiften</strong>), damit neue Zähne in Eingriff kommen und er gleichmäßig verschleißt.</p>
<div class="merke"><p><strong>Merke:</strong> Wälzfräsen ist am produktivsten, Wälzstoßen am flexibelsten. Wälzschälen ist der Kompromiss aus beidem.</p></div>

<h2>Härten</h2>
<p>Ziel ist eine harte, verschleißfeste Randschicht bei zähem Kern. Das erhöht die Verschleißfestigkeit der Flanken und die Dauerfestigkeit des Zahnfußes.</p>
<table>
<tr><th></th><th>Einsatzhärten</th><th>Randschichthärten</th><th>Nitrieren</th></tr>
<tr><td>Art</td><td>thermochemisch: Kohlenstoff einbringen (aufkohlen), abschrecken, anlassen</td><td>thermisch: Induktions- oder Flammhärten, Kern bleibt unbeeinflusst</td><td>chemisch: Stickstoff einbringen (Gas- oder Salzbad)</td></tr>
<tr><td>Plus</td><td>sehr große Härtetiefen, sehr gute Ermüdungseigenschaften am Zahnfuß</td><td>kurze Prozesszeit, wenig Energie</td><td>niedrige Temperatur, daher minimaler Verzug; sehr hohe Oberflächenhärte</td></tr>
<tr><td>Minus</td><td>lange Prozesszeit, erheblicher Verzug</td><td>nur zugängliche Bereiche, erhöhtes Rissrisiko</td><td>geringe Härtetiefe bei langer Prozesszeit</td></tr>
</table>
<p>Volumenänderungen und Spannungen beim Härten führen zu <strong>Härteverzug</strong>, also Abweichungen der Zahngeometrie.</p>

<h2>Hartfeinbearbeitung</h2>
<p>Sie korrigiert den Härteverzug und steigert die Verzahnungsqualität.</p>
<table>
<tr><th>Profilschleifen</th><th>Wälzschleifen</th></tr>
<tr><td>diskontinuierlich: jede Zahnlücke einzeln</td><td>kontinuierlich mit schneckenförmiger Schleifscheibe</td></tr>
<tr><td>Scheibenprofil bildet die Zahnform ab</td><td>immer 2 bis 3 Zähne im Eingriff</td></tr>
<tr><td>+ bessere <strong>Profilgenauigkeit</strong></td><td>+ bessere <strong>Teilungs- und Rundlaufgenauigkeit</strong></td></tr>
<tr><td>+ auch Innenverzahnungen und nicht wälzbare Konturen</td><td>+ kurze Bearbeitungszeit, universelle Werkzeuge, lange Standzeit</td></tr>
<tr><td>− ein Werkzeug je Anwendung</td><td>− geringere Profilgenauigkeit</td></tr>
</table>
`});
