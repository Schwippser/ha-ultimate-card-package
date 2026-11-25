# HA Ultimate Card Package – Änderungsprotokoll

Datei: `www/scripte/ha-ultimate-card-package/ha-ultimate-card-package.js`

## Regeln für alle Chats (jeder Kartentyp hat einen eigenen Chat)

1. Vor jeder Änderung die Datei frisch von H:\ lesen (Größe und Änderungsdatum notieren).
2. Änderung gezielt in den frischen Stand einfügen. Niemals eine ältere Kopie zurückschreiben.
3. Beim Schreiben die Änderungszeit der Datei als Schutz mitgeben (Schreiben bricht ab, wenn sich die Datei inzwischen geändert hat).
4. Vorher den aktuellen Stand als `ha-ultimate-card-package.pre-<thema>.bak.js` sichern.
5. Nach dem Schreiben Größe prüfen und die Änderung hier eintragen (neueste oben).
6. Sprache: Standardsprache ist Englisch. Neue sichtbare Texte (Labels, Optionen, Meldungen, aria-label) im Code immer auf Englisch schreiben und die deutsche Übersetzung in `translations/de.json` ergänzen (Schlüssel = englischer Text). Texte, die aus mehreren Teilen zusammengesetzt werden, mit `ucpT("…")` übersetzen; ganze Texte in Labels, Schemas und im DOM werden automatisch übersetzt.

## Projektwissen (Stand 2026-11-16, Hauptchat)

**Ablage und Bereitstellung**
- Produktivdatei: `H:\www\scripte\ha-ultimate-card-package\ha-ultimate-card-package.js` (HA-Pfad `/local/scripte/ha-ultimate-card-package/`).
- HA lädt über `ha-ultimate-card-package-loader.js` (importiert das Paket mit Zeitstempel, damit der Browser nicht cacht). Nach Änderungen genügt Strg+F5.
- Master-Kopie im Projektordner: `C:\Users\thoma\OneDrive\08_Homeassistant\HA Ultimate Card Package\ha-ultimate-card-package.js` (kann hinter H:\ zurückliegen; Stand siehe letzter Eintrag). `ha-ultimate-card-package.backup.js` ist das Original vor der Optimierung.
- Arbeitsweise: Es wird nur am Package gearbeitet. Einzelkarten (z. B. `Cards/clock-music-card.js`) werden erst am Ende aus dem Package abgeleitet.
- Beim Schreiben immer neuen Dateinamen für die Ausgabe verwenden; derselbe Name liefert sonst veralteten Inhalt.

**Aufbau des Pakets** (mehrere IIFE-Bereiche in einer Datei)
- Energy-Karte (`CARD_CSS`, Stylesheet `ucpApplyEnergyTheme`), Neon-Bar-Karte (`NB_STYLES`), Ultimate-Karte `ha-ultimate-card-package` (`UCP_STYLE`, `UCP_CARDS`, Editor `UltimateCardEditor`).
- Kartentyp über `card_type`: energy, bar, battery, climate, clock, clock-music, gauge, graph, light, mediaplayer, slider, state, switch, weather-forecast.
- Bar-Karte ist `UltimateBarCard extends NeonBarCard`; ihr Preset-CSS braucht das Attribut `data-card-style` auch am Bar- und Energy-Element (wird in der Hauptkarte gesetzt).

**Editor (einheitlich für alle Kartentypen)**
- Reihenfolge: Kartentyp, Style, Name + Namenposition, Icon + Layout, Icon/Status ausblenden, Laufschrift, Hauptentität, aufklappbar „Kartenspezifische Einstellungen“, aufklappbar „Zusatzinformationen“.
- Zusatzinformationen = Standard-Details der Karte (`UCP_DETAIL_LABELS`, je mit Ausblenden, Name, Icon, Ausrichtung, eigener Entität) plus frei hinzufügbare Zusatzwerte (`detail_entities`). Standardmäßig ausgeblendet: `UCP_DEFAULT_HIDDEN` (Slider: Status, Mediaplayer: Lautstärke, Light: Helligkeit).
- Reihenfolge der Zusatzinformationen per Ziehen: `detail_order` (Marken `b<Index>` = Standard-Detail, `e<Index>` = Zusatzwert).
- Hauptentität wird je Kartentyp gefiltert (`UCP_ENTITY_FILTERS`: Slider, Battery, Gauge, Graph; `include_entities` aus den HA-Zuständen).
- Bar: Nullpunktmodus (`zero_center`, positive und negative Werte); Gauge: Farbstufen unter „Schwellenwerte“ (`severity`).

**Styles**
- Config `card_style`, Standard `default` (wird nicht gespeichert) = nur Home-Assistant-Theme, ohne Dekoration. Das Preset steht als `data-card-style` am Host; Preset-CSS am Ende von `UCP_STYLE` (`:host([data-card-style="…"])`).
- Vorhanden: neon, glassmorphism (innerer Glasrahmen auf allen Kartentypen), neumorphism, neumorphism_dark, flat, skeuomorph, minimal.
- Bestehende Karten ohne `card_style` zeigen jetzt das HA-Theme (früher Neon-Look, bei clock-music Glas); Look über den Style im Editor wählen.

**Bekannte Einschränkungen und offene Punkte**
- Der Browser fragt für 192.168.x.x bei jeder Aktion nach Freigabe; Prüfungen im echten HA sind daher selten möglich. Änderungen wurden bisher mit Teststubs und im Browser des Nutzers geprüft.
- Offen: Vergleich der Kartenhöhen (Light ist wegen Dial und Schieberegler höher als State/Switch; Variante B/C möglich), eigene Farbe für negative Bar-Werte, Angleichung des Energy-Editors an den einheitlichen Editor.
- Einzelkarten am Ende aus dem Package ableiten.

## Einträge

### 2026-11-25 – Code-Prüfung und Aufräumen
- Gesamtes Package per Syntaxbaum-Analyse geprüft: keine Fehler, keine undefinierten Bezeichner, keine doppelten Deklarationen.
- Entfernt: ungenutzte Konstante `UCP_STYLE_FIELD`, zwei ungenutzte `orbClass`-Variablen (Waschmaschine, Pi-hole), doppelte Option `hide_main_icon` in der Standardkonfiguration.
- `translations/de.json`: veralteten Eintrag „Thirteen card types…“ durch „Many card types…“ ersetzt, fehlende Übersetzungen ergänzt (Energie-Dashboard-Quellen, Sammlung, Icon/Name optional, Vorhersage Max/Min).
- Backup: `ha-ultimate-card-package.pre-cleanup.bak.js`.

### 2026-11-25 – Übersetzung: Kollision mit der BirdNET-Einzelkarte behoben

- Symptom: Texte der Karte „Aktive Entitäten“ („The following window is open:“, „Please select at least one entity.“) blieben auf Deutsch-Profil englisch.
- Ursache: Package und BirdNET-Einzelkarte (aus demselben Quelltext gebaut) legten ihren Übersetzungskern unter demselben globalen Namen `__UCP_I18N` ab; wer zuerst geladen wurde, gewann. Auf dem Live-System gewann die BirdNET-Karte und suchte `ha-birdnet-card/translations/de.json` (404), das Package benutzte danach diesen leeren Kern.
- Behebung: Package nutzt jetzt `__UCP_PKG_I18N` (10 Stellen). `build_birdnet_card.py` ersetzt den Namen beim Bau durch `__UCP_BN_I18N`, damit beide unabhängig sind. Die BirdNET-Einzelkarte muss neu gebaut und neu veröffentlicht werden (sonst bleibt der alte Name im Marketplace-Stand).
- Datei: 559637 -> 559677 Bytes. Sicherung: `ha-ultimate-card-package.pre-i18n-global.bak.js`.

### 2026-11-24 – Popup: Fenster fremder Karten (LLM Vision) erscheinen vor dem Popup

- Problem: Klickt man in einer Karte im Popup auf ein Ereignis der LLM-Vision-Timeline-Karte, öffnete sich dessen Detailfenster hinter dem Popup. Ursache: Die LLM-Vision-Karte hängt ihr Fenster per `document.body.appendChild` an (`position: fixed`, z-index 1000, Feedback-Fenster 1100). Unser Popup ist ein modales `<dialog>` (Top Layer, übrige Seite inert), davor kommt so kein Fenster aus dem `body`. More-Info-Dialoge von HA waren nicht betroffen.
- Neu: `ucpAdoptForeignOverlays(dialog)`. Solange ein Popup offen ist, wird jedes neu an den `body` gehängte Element mit fixiertem Overlay (Element selbst oder Kinder bis Tiefe 2) in das Popup verschoben. Beim Schließen räumt die Funktion auf.
- `document.body.removeChild` wird nur während das Popup offen ist überschrieben, damit das Schließen des fremden Fensters funktioniert; danach wird der Originalzustand wiederhergestellt.
- Escape schließt zuerst das fremde Fenster, nicht das Popup.
- Betrifft nur `_openPopup` (Popup-Dashboard); der Bereichs-Popup der Aktiven Entitäten und die Mediaplayer-Fenster enthalten keine fremden Karten.
- Nicht im Browser getestet (Karte nicht auf dem Test-HA). Sicherung: `ha-ultimate-card-package.pre-popup-foreign.bak.js` (559637 Bytes). Neue Größe 561772 Bytes.

### 2026-11-24 – Popup: Fußzeile nur, wenn sie gebraucht wird

- Problem: Die Fußzeile des Popup-Dashboards (z. B. Energie-Datumsauswahl und „Nach oben“-Knopf) erschien in jedem Popup, auch wenn sie dort nichts bringt.
- Neu: Je Popup wird geprüft, was der Fuß zeigen muss. Datumsauswahl (jede Fußkarte mit `energy-date-selection`, auch im Wrapper) nur, wenn eine Karte im Popup der Energie-Datumsauswahl folgt: HA-Karten `energy-*`, Typen mit „energy“/„birdnet“ im Namen, `follow_energy_date` (Graph/BirdNET, Standard an), Karte Energy, Power-Flow (Modus Energie oder Umschalter an). „Nach oben“ (Aktion `scroll:top`) nur, wenn der Inhalt scrollt (gemessen nach dem Laden und bei Größenänderungen; einmal erkannt bleibt es). Stacks und Layout-Karten im Fuß werden durchsucht und gekürzt (`ucpPruneFooter`); bleibt nichts übrig, entfällt die Fußzeile. Andere Fußkarten bleiben immer.
- Fix: `scroll:top` im Popup scrollt jetzt den Popup-Scrollbereich (der Fuß liegt neben ihm, nicht darin; `ucpScrollTop` nimmt `.ucp-popup-body` mit).
- `popup_hide_footer` bleibt als manuelle Abschaltung.
- Sicherung: `ha-ultimate-card-package.pre-popup-footer.bak.js` (555172 Bytes). Neue Größe 559637 Bytes.

### 2026-11-24 – Popup: Popup aus einem Popup heraus öffnen schließt das erste Popup

- Problem: Ein Button (Karte) in einem Popup öffnete ein zweites Popup, das erste blieb offen. Ursache: Jedes Popup gehört der Karte, die es geöffnet hat (`this._popup`); die Button-Karte im Popup kannte das erste Popup nicht.
- Lösung: Neue Methode `_popupParent()` findet die äußere Karte, in deren Popup die aufrufende Karte liegt (über die Shadow-Roots nach oben). `_openPopup(ref, cfg)` gibt in diesem Fall an die äußere Karte ab; sie schließt das erste Popup und öffnet das zweite. Die Popup-Optionen (Dashboard, Breite, Auto-Close, Footer) kommen weiter aus der Karte, die den Klick erhielt (`cfg`).
- Sicherung: `ha-ultimate-card-package.pre-popup-nested.bak.js` (554501 Bytes). Neue Größe 555172 Bytes.

### 2026-11-23 – Neuer Kartentyp „Updates“

- `card_type: updates` zeigt, welche `update.*`-Entitäten ein Update haben (Zustand `on`). Kopfzeile: links „Supervisor“, rechts „Marketplace“, darunter jeweils zentriert die Zahl offener Updates (auch 0); der ganze Block steht zentriert in der Karte. Die Chips und die Versionen der Liste (`Installiert` und `Neu` als zwei Kästchen, bei aktuellen Einträgen nur `Installiert`) sind dieselben Elemente wie die Zusatzinformationen der State-Karte (`dl.stats` / `.stat` mit `dt` und `dd`) und übernehmen dadurch das Aussehen des jeweiligen Styles. Es gibt keinen Text „Alles aktuell“ mehr. Darunter steht ein Aufklapp-Symbol (Pfeil nach unten), mit dem die Liste geöffnet und wieder geschlossen wird; standardmäßig ist die Liste zu, auch wenn Updates anliegen. Gibt es keinen Eintrag, erscheint das Symbol nicht. Der Zustand (offen/zu) bleibt bei Aktualisierungen der Daten erhalten. Die Liste: Name links, Versionen rechts. Tippen öffnet die Details der Entität (Release-Hinweise). Die Karte ändert nichts und installiert nichts.
- Dropdown „Updates anzeigen von“ (`up_sources`, Mehrfachauswahl): `marketplace` (Marketplace) und `hassio` (Home Assistant Supervisor, Apps; enthält auch die Updates für Core, OS und Supervisor, einzelne lassen sich mit „Update-Entitäten ausschließen“ ausblenden). Standard: Marketplace; leere Auswahl = beide Spalten und alle `update.*`-Entitäten. Gefiltert wird nach der Integration der Entität (`hass.entities[id].platform`). In der Kopfzeile erscheinen nur die gewählten Quellen. Das ältere Feld `up_platform` wird weiter gelesen.
- Farben: `up_color_supervisor` (Standard #41bdf5) und `up_color_marketplace` (Standard #f0a030), je Hex, CSS-Farbname oder Theme-Variable. Sie färben die Schrift der Chips (`--stat-fg`, der Style bleibt erhalten) und die Icons der Listeneinträge der jeweiligen Quelle; Einträge anderer Quellen (nur bei leerer Auswahl) nutzen die Akzentfarbe.
- Weitere Optionen: `entities` (nur diese Entitäten, ersetzt die Quellenauswahl), `up_exclude`, `up_show_versions` (Standard an), `up_show_all` (auch aktuelle Einträge, abgeblendet). Das Feld `up_empty_text` entfällt.
- Nicht erreichbare Update-Entitäten (`unavailable`/`unknown`) werden nicht aufgelistet, sondern als Hinweis „n nicht verfügbar“ gezählt; läuft gerade eine Installation (`in_progress`), steht „Wird installiert …“.
- Offen: Ob die Supervisor-Entitäten auf dem System die Integration `hassio` haben, ist zu prüfen (Entität öffnen > Einstellungen > Integration).
- Die Listeneinträge sind `div` mit `role="button"` (Enter und Leertaste öffnen die Details), weil die Versions-Kästchen (`dl`) nicht in einem `button` stehen sollen.
- Dateien: Version 91, `translations/de.json` ergänzt.

### 2026-11-22 – Bar: eigene Farbe je Entität

- Im Karteneditor (Kartentyp Bar) gibt es unter „Balkenfarben je Entität“ ein Feld pro Entität für eine eigene Farbe (Hex, z. B. #00b7eb).
- Die Farbe gilt für alle Stufen: der Balken behält sie unabhängig vom Wert (kein Wechsel auf Warn- oder Kritisch-Farbe). Ohne Eintrag bleibt das Verhalten wie bisher.
- YAML: `entities: - entity: sensor.x` mit `color: "#00b7eb"`.
- Datei: Version 86

### 2026-11-22 – Aktion „Nach oben scrollen“

- Neue Tap-/Double-Tap-/Hold-Aktion für alle Karten des Packages: Aktion „Navigieren“ mit dem Pfad `scroll:top` scrollt die Seite (Dashboard und Browserfenster) sanft nach oben. Jede Karte kann so als Button dienen, z. B. eine State-Karte mit Pfeil-Symbol.
- Der Hinweis steht im Karteneditor unter Aktionen / Popup.
- Datei: Version 86

### 2026-11-22 – Aktive Entitäten: Laufschrift-Rand 2 %

- Die Laufschrift beginnt und endet jetzt 2 % vom Kartenrand (vorher 5 %); „passt in die Karte“ rechnet entsprechend mit der Kartenbreite abzüglich 4 %.
- Datei: Version 85

### 2026-11-22 – Aktive Entitäten: Laufschrift blendet an den Rändern aus, Messung korrigiert

- Die Laufschrift taucht rechts aus der Transparenz auf und verschwindet links wieder darin (weicher Verlauf an beiden Rändern).
- Steht der Text still (Option „Laufschrift immer an“ aus), gibt es keinen Verlauf.
- Korrektur: Die Breitenmessung hängt nicht mehr von der Textbreite ab; die Laufschrift startet auch bei zu langem Text zuverlässig, wenn „Laufschrift immer an“ aus ist. Die Messung wird bei Größenänderung des Inhalts und nach dem Laden der Schriften wiederholt.
- Datei: Version 84

### 2026-11-22 – Aktive Entitäten: Laufschrift immer an

- Neue Option „Laufschrift immer an“ (Standard: an). Ist sie ausgeschaltet, läuft der Text nur, wenn er nicht in die Kartenbreite (abzüglich 10 %) passt.
- Passt der Text, steht er still und ist in der Karte zentriert.
- Datei: Version 82

### 2026-11-22 – Übersetzung geprüft
- Alle neuen Texte (Zeitleiste, Laufschrift, Popup-Auslöser und -Schließzeit, Energie-Modus) auf deutsche Übersetzung geprüft. Ergänzt: „Verbraucher anzeigen“ (Energy Power Flow) fehlte in `translations/de.json`.

### 2026-11-22 – Aktive Entitäten: Darstellung „Laufschrift“
- Neues Layout „Laufschrift“: Ein Text mit den eingeschalteten Entitäten läuft von rechts nach links durch die Karte. Er startet 5 % vom rechten Rand und verschwindet 5 % vor dem linken Rand. Er gilt für alle unter „Anzuzeigende Gruppen“ gewählten Gruppen: je Gruppe ein Satz mit Anzahl (z. B. „Es sind folgende 3 Lampen eingeschaltet:“, „Es ist folgendes Fenster geöffnet:“), danach die Entitäten als Chips wie in der Kompakt-Ansicht.
- Felder: „Chip-Text“ (Name oder Bereich), „Text der Laufschrift“ (optional, `{n}` = Anzahl, `{label}` = Gruppenname; leer = automatischer Satz je Gruppe) und „Geschwindigkeit der Laufschrift“ (px pro Sekunde, Standard 60; die Dauer richtet sich nach der Breite).
- Die Laufschrift ist in der Karte vertikal zentriert (bei Titel im verbleibenden Platz darunter).
- Die Anzahl im Satz wird wie die Entitäten als Chip dargestellt (nicht anklickbar).
- Mauszeiger über der Laufschrift hält sie an (zum Antippen der Chips). Bei „Bewegung reduzieren“ im System steht der Text still und umbricht. Datei: Version 81.

### 2026-11-22 – Graph: An/Aus-Bänder mit Serienfarbe
- In den Graph-Typen Linie, Balken und gestapelt zeigen Entitäten mit Zustand an/aus ihre Bänder jetzt in der Serienfarbe („Serienfarben“ im Editor); „aus“ bleibt ohne Füllung. Vorher bekamen „an“ und „aus“ feste, wechselnde Farben (grün/orange), die sich nicht einstellen ließen. Andere Zustände (z. B. Wetter) behalten die wechselnden Farben. Datei: Version 79.

### 2026-11-22 – Graph: Diagrammtyp „Zeitleiste“
- Neuer Diagrammtyp „Zeitleiste“ im Kartentyp Graph: je Entität (Schalter, Binärsensor, …) eine Zeile mit Bändern für die Zeiten, in denen sie „an“ ist. Die Bandbreite entspricht der tatsächlichen Laufzeit, die Daten kommen aus dem Verlauf der Datenbank und folgen der Energie-Datumsauswahl (wie bei den anderen Graph-Typen).
- Je Zeile Name und Gesamtlaufzeit im Zeitraum, Zeitachse mit runden Uhrzeiten oder Tagen. Ein Klick (oder Tippen) auf ein Band zeigt Start, Ende und Dauer unter dem Diagramm, ein Mauszeiger zeigt es als Hinweistext.
- Neue Felder: „Zustände, die als ‚an‘ gelten“ (leer = on, bei Zahlenwerten größer 0), „Zeilenhöhe (px)“, „Gesamtlaufzeit je Zeile anzeigen“. Farben je Zeile über „Serienfarben“. Entitäten sind nicht auf Zahlensensoren beschränkt.

### 2026-11-22 – Heatmap-Kartentyp entfernt
- Der Kartentyp „Heatmap“ ist aus dem Package entfernt (Kartenauswahl, Editor-Felder, Render-Zuordnung, Größen, Texte). Die Tagesaktivität in der BirdNET-Karte nutzt weiterhin den gemeinsamen Code und die `hm_*`-Optionen; sie bleibt unverändert.
- Bestehende Karten mit `card_type: heatmap` werden nicht mehr dargestellt und müssen auf BirdNET umgestellt oder entfernt werden.

### 2026-11-22 – BirdNET: Links der Artbilder
- Der Link eines Artbilds führt auf die Wikipedia-Seite, aus der das Bild stammt (also zur richtigen Art). Ohne Treffer wird bei deutscher Oberfläche über den Artnamen verlinkt, nicht mehr über den wissenschaftlichen Namen aus dem Sensor. Datei: Version 77.

### 2026-11-22 – BirdNET: Artbilder werden geprüft
- Das Bild einer Art wird nur noch übernommen, wenn der Titel der Wikipedia-Seite zum deutschen Artnamen passt. Passt er nicht (z. B. weil im Sensor der falsche wissenschaftliche Name steht), wird über den Artnamen gesucht, sonst bleibt der Buchstabe. Der Bild-Speicher im Browser wird je Art und Name geführt und einmal neu aufgebaut (`ucp-bn-img-v3`), damit falsch zugeordnete Bilder verschwinden. Datei: Version 76.

### 2026-11-22 – Popup: automatisch schließen
- Neues Feld „Popup automatisch schließen nach (Sekunden, 0 = aus)“ unter Actions → Popup. Gilt für Popups, die per Klick oder per Auslöser geöffnet werden. Datei: Version 75, `translations/de.json` ergänzt.

### 2026-11-22 – Popup: Auslöser per Entität
- Im Bereich „Popup“ (alle Kartentypen) neue Felder „Popup-Auslöser (Entität)“, „Auslöser-Status“ und „Popup, das geöffnet wird“. Wechselt die Entität auf den Status (leer = jede Änderung), öffnet die Karte das Popup automatisch, so als wäre die Aktion „Navigate“ mit `popup:…` ausgelöst worden. Beim Laden der Seite öffnet sich nichts. Funktioniert nur, solange das Dashboard mit der Karte geöffnet ist (z. B. Wandtablet).

### 2026-11-22 – Energy Power Flow: Anzeigenamen aus dem Energie-Dashboard
- Im Energie-Modus nutzt die Karte die im Energie-Dashboard vergebenen Anzeigenamen (Solar-Module, Batterien, Geräte) statt der Entitätsnamen; ohne Anzeigenamen wie bisher der Entitätsname.

### 2026-11-22 – Energy Power Flow: Flusslinien mit Versatz statt übereinander
- Parallele Flusslinien (Panels → Hub, Hubs → Wechselrichter, Haus → Verbraucher, Haus ↔ Netz/Batterien) knicken jetzt an gestaffelten Stellen ab und laufen mit etwas Versatz nebeneinander, statt übereinander zu liegen; die Reihenfolge ist so gewählt, dass sich die Linien möglichst nicht kreuzen. Gilt für die horizontale und die breite vertikale Anordnung (die einspaltige Notanordnung bleibt unverändert).

### 2026-11-22 – Energy Power Flow: vertikale Anordnung bei schmaler Karte
- Neue Option „Anordnung“ (Automatisch / Horizontal / Vertikal, Standard: Automatisch). Automatisch wechselt auf vertikal, sobald die Karte schmaler ist als die Mindestbreite der horizontalen Anordnung; Größen und Schriften bleiben dabei gleich, die Karte wird höher.
- Vertikal (ab ca. 530 px): Reihe 1 Solar (Hubs/Anlagen nebeneinander, Panels darüber), Reihe 2 Wechselrichter, Reihe 3 Heimspeicher links (untereinander) – Haus – Stromnetz rechts, Reihe 4 Verbraucher nebeneinander; passen nicht alle in die Breite, steht der Rest in „Weitere Verbraucher (n)“. Darunter (sehr schmal) gilt eine einspaltige Anordnung mit höchstens 5 Verbrauchern.

### 2026-11-22 – Energy Power Flow: Spalten nur wenn vorhanden, Option „Verbraucher anzeigen“
- Leere Spalten (Panels, Verbraucher) werden nicht mehr reserviert; die vorhandenen Spalten verteilen sich gleichmäßig über die ganze Kartenbreite (mittig eingepasst).
- Neue Option „Verbraucher anzeigen“ (Standard: an). Aus = Verbraucher und Auto werden nicht gezeigt.
- Die Zeile mit Netz/Batterien rückt links an die Verbraucherspalte heran, sodass Flusslinien keine Verbraucher mehr kreuzen.

### 2026-11-22 – Energy Power Flow: Energie-Dashboard vollständig automatisch übernehmen
- Option „Energiewerte nicht automatisch aus dem Energie-Dashboard übernehmen“ aus (Standard): Im Energie-Modus zeigt die Karte Solar (je Quelle eine Box), Batterien (je Batterie eine Box), Netz (Bezug/Einspeisung) und Einzelgeräte (größte 10) so an, wie sie im Energie-Dashboard konfiguriert sind. Das gilt nur, wo die Karte keine eigenen Werte hat; eigene Sensoren haben weiter Vorrang.
- Hubs ohne Daten werden dann ausgeblendet.

### 2026-11-22 – Energy Power Flow: feste Größen, Abstände passen sich an
- Die Karte wird 1:1 in Pixeln gezeichnet: Kacheln, Rahmen, Schriften und Linienstärken behalten bei jeder Kartengröße ihre Größe. Nur die Abstände zwischen den Spalten (Länge der Flusslinien) werden angepasst, sodass sich alles mittig in die Karte einpasst. Ist die Karte schmaler als der Mindestplatzbedarf, wird wie bisher proportional verkleinert.
- Kacheln „Haus“ und „Wechselrichter“ passen ihre Breite an den Wert an. Flusslinien zu Batterie und Netz laufen rechtwinklig mit gerundeten Ecken.
- Energie-Modus: Netz und Batterie werden auch ohne eigene Konfiguration aus dem Energie-Dashboard angezeigt.

### 2026-11-22 – Energy Power Flow: Energie-Modus (Zeitraum)
- Neuer Modus „Energie“ neben „Leistung“: zeigt Energiewerte (Wh/kWh) über den Zeitraum der Energie-Datumsauswahl des Dashboards (ohne Auswahl: heute). Alle Knoten, Linien und Kacheln (Autarkie, Eigenverbrauch, Solarerzeugung, Hausverbrauch · „Zeitraum“) rechnen mit diesen Werten.
- Umschalter „Leistung | Energie“ oben in der Karte (mit Zeitraum-Anzeige). Editor: „Anzeigemodus“ (Startmodus) und „Umschalter in der Karte anzeigen“ (neue Karten: an, bestehende: aus).
- Quelle der Energiewerte je Knoten: 1. eigener Energiesensor (neue Felder bei PV-Eingängen, Hub-Ausgang, Batterien geladen/entladen, Solaranlagen, Netzbezug/Einspeisung, Wechselrichter, Haus, Verbraucher, Auto), 2. automatisch aus dem Energie-Dashboard (Netz, Solar gesamt, Batterie bei genau einer Batterie), 3. Integration (Riemann-Summe) des konfigurierten Leistungssensors aus der Langzeit-Statistik, sonst „—“. Option „Energiewerte nicht automatisch aus dem Energie-Dashboard übernehmen“.
- Netz und Batterien zeigen die Netto-Energie des Zeitraums mit „↓ rein ↑ raus“; die Hausbilanz nutzt Bezug und Einspeisung getrennt. Es wird nur gelesen (Statistik-Abfragen), nichts geschaltet.
- Neue Übersetzungen in `translations/de.json`. Sicherung: `ha-ultimate-card-package.pre-pf-energy.bak.js`.

### 2026-11-22 – BirdNET: Artenbilder zuverlässig laden
- Beobachtung auf der 160: 12 von 23 Arten hatten kein Bild; die Zuordnung der vorhandenen Bilder war korrekt. Ursache: Wikipedia begrenzt viele gleichzeitige Anfragen (HTTP 429), die Karte hat danach für die Sitzung nicht mehr nachgefragt.
- Die Anfragen laufen jetzt nacheinander (250 ms Abstand). Bei Fehler oder Begrenzung wird nach 4, 8, 16 … Sekunden (max. 60 s) erneut versucht, bis zu sechsmal. Arten ohne Wikipedia-Bild werden nicht wiederholt abgefragt. Gleiche Änderung in der Einzelkarte `ha-birdnet-card`.
- Backup: `.pre-bn-images.bak.js`. Nicht auf GitHub veröffentlicht.

### 2026-11-21 – Popups: maximale Höhe 85 %
- Die maximale Höhe der Popups ist jetzt 85 % der Fensterhöhe (vorher 70 %); längerer Inhalt scrollt weiterhin. Breite unverändert (max. 90 %).
- Nicht auf GitHub veröffentlicht.

### 2026-11-21 – „Farbe Icon“ gilt für alle Icons der Karte
- Die Farbe unter Styling → „Farbe Icon“ (`title_icon_color`) färbt jetzt alle Icons der Karte, nicht nur das Haupt-Icon: Icons der Zusatzinfos, Bedienknöpfe (+/−, Play usw.), Icon in der Mitte des Rads, Wetter-Icons (aktuell und Vorhersage), Cover-/Thumb-Icons des Mediaplayers.
- Eigene Farben haben Vorrang: Zusatzinfos mit eigener Farbe (an/aus) und die „Farbe Icon“ der Wettervorhersage (`forecast_icon_color`) bleiben, wie eingetragen. Ohne Eintrag bleibt alles wie bisher (Style-Akzentfarbe).
- Die „Farbe Icon (an/aus)“ aus den Status-Farben wirkt über dieselbe Variable ebenfalls auf alle Icons der Karte.
- Unverändert: Kugeln (Orb) bei Batterie, Licht und Co. behalten ihre Zustandsfarben; Balken, Ringe und Verläufe sind keine Icons.
- Nicht auf GitHub veröffentlicht.

### 2026-11-21 – Climate: kompakte Ansicht
- Neue Option „Ansicht“ (`climate_view`: `dial` = bisherige Darstellung, `compact` = kompakt) beim Kartentyp Climate. Bestehende Karten bleiben unverändert.
- Kompakt: links „−“, rechts „+“, in der Mitte Name (mit Icon), Soll groß und Ist klein darunter. Schrittweite, Minimum und Maximum kommen aus der Entität; mehrere Klicks werden gesammelt gesendet (wie beim Rad). Bei Bereichs-Thermostaten (Low/High) wird der Bereich verschoben.
- Name, Icon, Schriftgrößen und Farben (Name/Status/Icon) sowie Aktionen (Tippen, Halten) funktionieren wie bei den anderen Karten. Die Option „Moduswahl anzeigen“ entfällt in der kompakten Ansicht.
- Die eingebauten Zusatzinfos (Modus, Luftfeuchte, Lüfter, Profil) sind in der kompakten Ansicht standardmäßig ausgeblendet; eigene Zusatzentitäten und eingeschaltete eingebaute Infos erscheinen als Zeile unter der Steuerung (z. B. für „heizt gerade“).
- Im Editor entfallen in der kompakten Ansicht die Rad-Optionen (Wert durch Ziehen, Gaugebreite, Segmente, Schwellen, Knob, Animation, Heizfarbe). Neu: „Ist-Temperatur ausblenden“ (`climate_hide_current`). Die Rad-Ansicht behält alle Optionen.
- Höhe automatisch (`rows: auto`), ca. 83 px ohne Zusatzinfos (Test). Innenabstand der Karte 8/10 px.
- Backup: `.pre-climate-compact.bak.js`. Nicht auf GitHub veröffentlicht.

### 2026-11-21 – Balken horizontal: mehr Innenabstand
- Karte Balken, Darstellung horizontal: Name, State und Balken lagen zu dicht am Rand des Kartenfelds. Innenabstand jetzt 8/12/10 px (oben/seitlich/unten) statt 2/0 px, der Abstand zwischen Name und Balken 8 px. Gemessen im Test: Balken 13 px vom Rand.
- Backup: `.pre-bar-padding.bak.js`. Nicht auf GitHub veröffentlicht.

### 2026-11-21 – Balken: Anzahl der LED-Segmente wirkt wieder
- Die Option „Anzahl der LED-Segmente“ (`led_segments`) hatte bei der Balkenkarte im segmentierten Modus keine Wirkung: Eine feste Maske (9 px Segment, 3 px Lücke) in den Grundstilen hatte Vorrang vor der berechneten Segmentbreite. Die berechnete Maske hat jetzt die gleiche Spezifität und gewinnt, sodass die Zahl der Segmente (1–100) die Breite bestimmt (horizontal und vertikal).

### 2026-11-21 – Balken: eigener Name je Entität im Karteneditor
- Beim Kartentyp Balken gibt es unter der Entitätenauswahl die aufklappbare Gruppe „Namen je Entität (optional)“ mit einem Textfeld pro Entität (Beschriftung = Name der Entität). Der Name wird als `entities: - entity: sensor.x / name: …` gespeichert; leer lassen = Name der Entität. (Im YAML ging das schon vorher.)
- Die Namen bleiben beim Umsortieren oder Entfernen anderer Entitäten erhalten; Änderungen an der Entitätenliste und an Namen im selben Schritt werden nicht vermischt.

### 2026-11-21 – Popups: Footer-Karte des Popup-Dashboards wird unten im Popup angezeigt
- Hat die Ansicht des Popup-Dashboards eine Footer-Karte (Ansicht → Footer, z. B. die Style-Hülle mit der Datumsauswahl), erscheint diese jetzt als fester Fuß am unteren Rand des Popups, außerhalb des Scrollbereichs. `max_width` des Footers wird übernommen.
- Neue Option `popup_hide_footer` („Footer-Karte des Popup-Dashboards in Popups ausblenden“) an der Karte, die das Popup öffnet.
- Technik: `lovelace/config` liefert den Footer als `footer.card` der Ansicht; er wird wie die Abschnittskarten per `createCardElement` erzeugt und bekommt `hass`.

### 2026-11-21 – YAML-Namen von Styles und Kartentypen entsprechen dem Karteneditor
- `card_style` und `card_type` verwenden im YAML jetzt die Bezeichnungen aus dem Karteneditor: Kleinschreibung, mit Bindestrichen, ohne Klammern. Der Editor schreibt beim Speichern die neuen Namen.
- Styles: `glassmorphism` → `morph-glass`, `neumorphism` → `morph-neo-light`, `neumorphism_dark` → `morph-neo-dark`, `skeuomorph` → `morph-metal`, `neon_flow` → `neon-flow`, `flat` → `flat-dark-blue-orange`; unverändert: `default`, `neon`, `minimal`.
- Kartentypen: `energy` → `energy-values`, `power-flow` → `energy-power-flow`, `active-list` → `active-entities`, `dwd-warnings` → `weather-warning`, `pihole` → `pi-hole`, `wrapper` → `style-wrapper`; unverändert u. a. `bar`, `battery`, `birdnet`, `clock-music`, `mediaplayer`, `washdata`, `weather-forecast`.
- Rückwärtskompatibel: Die alten Namen werden weiter gelesen und beim nächsten Speichern im Editor durch die neuen ersetzt. Intern ändert sich nichts.
- Offen: README und Dokumentation nennen noch die alten Namen (vor dem Release anpassen).

### 2026-11-21 – Neuer Kartentyp „Style-Hülle“ (Test): Style auf andere Karten übertragen
- Neuer Kartentyp `card_type: wrapper` („Style-Hülle (andere Karten)“): bettet eine beliebige Karte (Home Assistant oder Custom, z. B. `type: energy-date-selection`) in den Rahmen eines unserer Styles ein. Der Rahmen (Hintergrund, Verlauf, Rand, Schatten) kommt aus dem gewählten `card_style`; die innere Karte wird transparent, Text-, Akzent-, Trennlinien- und Formularfarben (`--primary-text-color`, `--secondary-text-color`, `--primary-color`, `--divider-color`, `--ha-color-form-background`) werden aus dem Style gesetzt.
- Die innere Karte wird im Feld „Eingebettete Karte (YAML)“ (`wrapped_card`) angegeben. Größe und `grid_options` der inneren Karte werden durchgereicht, `hass` wird weitergegeben.
- Höhe: Die Hülle richtet ihre Höhe nach der eingebetteten Karte (`grid_options.rows: auto`), statt eine feste Zeilenzahl vorzugeben; die Breite übernimmt sie von der inneren Karte.
- Kompakter: Der eigene Innenabstand der Hülle entfällt, und der vertikale Innenabstand der eingebetteten Karte ist einstellbar (`wrapper_padding`, Standard 4 px statt 16 px). Gemessen auf der 160: Die Hülle war 112 px hoch (80 px Datumsauswahl + 32 px Rahmen), jetzt etwa 56 px.
- Status: Testversion. Wie weit die Optik der Datumsauswahl ankommt, hängt davon ab, welche Variablen die Karte liest; feste Farben im Innern lassen sich so nicht ändern. Rückbau: Kartentyp entfernen (Eintrag `wrapper` in `UCP_CARDS`, `_renderWrapper`, CSS `.ucp-wrap*`), Sicherung `ha-ultimate-card-package.pre-wrapper.bak.js`.

### 2026-11-21 – Popups: Schließen-Symbol zentriert, Breite nach Abschnitt, max. 70 % Höhe mit Scrollen
- Das „X“ zum Schließen von Popups (auch im Raum-Dialog der Aktiv-Liste) sitzt jetzt mittig im Knopf; der Standard-Innenabstand der Buttons hatte das Symbol verschoben.
- Die Popup-Breite richtet sich standardmäßig nach der Breite des Abschnitts im Popup-Dashboard: Breite = Spaltenanzahl des Abschnitts (`column_span`, Standard 1) × Spaltenbreite der Sections-Ansicht (Theme-Variable `ha-view-sections-column-max-width`, Standard 500 px) plus Spaltenabstand (`ha-view-sections-column-gap`, Standard 32 px), höchstens 90 % der Fensterbreite. Ohne Abschnitt (Ansicht ohne Sections) gilt die Breite eines Abschnitts mit einer Spalte.
- Neue Option „Automatisch (Breite des Abschnitts)“ (`popup_width: auto`, Standard); „Klein/Mittel/Groß“ (360/560/860 px) bleiben als feste Breiten wählbar, „Volle Breite“ ist jetzt 90 % des Fensters; alle sind auf 90 % des Fensters begrenzt.
- Popup-Höhe: höchstens 70 % der Fensterhöhe; ist der Inhalt höher, scrollt der Inhalt, der Kopf mit dem „X“ bleibt stehen. Die Höhe des scrollbaren Bereichs ist dafür fest auf 70 % der Fensterhöhe abzüglich Kopf begrenzt (zusätzlich zur Begrenzung des Dialogs), damit das vertikale Scrollen auch bei hohen Karten sicher greift.
- Popup mit mehreren Karten: Die Karten werden wie im Abschnitt des Popup-Dashboards angeordnet (Raster mit 12 Spalten je Abschnittsspalte). Die Kartenbreite kommt aus `grid_options.columns` (`full` = ganze Breite, sonst Zahl der Spalten, ersatzweise der Standard der Karte bzw. 12), `grid_options.rows` als Zahl setzt eine Mindesthöhe (Zeile 56 px + 8 px Abstand), `auto` = natürliche Höhe. Karten stehen also nebeneinander, statt alle untereinander in voller Breite. Bei Popups unter 600 px Breite (z. B. Handy) stehen die Karten weiterhin untereinander.
- Popup mit einer einzelnen Karte (`popup:Abschnitt#Karte`): Die Breite richtet sich nach dem Anteil der Karte an der Abschnittsbreite (mindestens 320 px).
- Popup mit der BirdNET-Karte: Die Karte wurde auf die Höhe des Popups gedrückt und unten abgeschnitten, statt zu scrollen (Grund: `height: 100%` der Karte). Karten im Popup nehmen jetzt ihre natürliche Höhe, der Inhalt scrollt.
- Kartenauswahl in Home Assistant: Beschreibung nennt keine feste Anzahl von Kartentypen mehr.
- README (DE/EN): Kartentypliste um Active List, BirdNET, Heatmap und Power Flow ergänzt (21 Kartentypen).

### 2026-11-21 – Energiewerte: Einheit bei eigenen Werten und Trend im laufenden Zeitraum (GitHub-Issue)
- Eigene Werte (`custom_values`) mit `unit` rechnen jetzt um, statt nur das Etikett zu tauschen: Der Recorder liefert Volumen in m³ und Energie in kWh, daraus wird in die gewählte Einheit umgerechnet (Volumen: m³, L, mL, gal, ft³, CCF, MCF; Energie: kWh, Wh, MWh, MJ, GJ). Beispiel: 4,69 L wurden vorher als 0,00 L angezeigt. Gilt auch für Trend und 7-Tage-Linie.
- Trend im laufenden Zeitraum: Läuft der gewählte Zeitraum noch (heute, diese Woche, dieser Monat, dieses Jahr), wird der Vorzeitraum nur bis zur gleichen relativen Zeit ausgewertet (um 16 Uhr: gestern 00:00–16:00 statt ganzer Vortag). Neue Option `trend_mode: same_time` (Standard) oder `full` (kompletter Vorzeitraum wie bisher), auch im Editor.
- Offen: der letzte (unvollständige) Punkt der 7-Tage-Linie fällt weiter ab; Vorschlag: heutigen Punkt gestrichelt darstellen.

### 2026-11-21 – Popup: einzelne Karte eines Abschnitts anzeigen
- Neben dem ganzen Abschnitt (`popup:Abschnitt`) kann das Popup jetzt auch nur eine Karte des Abschnitts zeigen: `popup:Abschnitt#2` (Nummer der Karte nach der Überschrift) oder `popup:Abschnitt#Kartenname` (Name, Titel, Überschrift oder Entität der Karte), auch mit Dashboard: `popup:dashboard::Abschnitt#2`.
- Das bisherige Verhalten (ganzer Abschnitt) bleibt unverändert; Abschnittsnamen, die selbst ein `#` enthalten, funktionieren weiter.
- Ist die Karte nicht vorhanden, erscheint der Hinweis „Karte im Popup nicht gefunden“.
- Toleranz: `popup:dashboard-name:Abschnitt` mit nur einem Doppelpunkt wird erkannt, wenn der Teil davor wie ein Dashboard-Pfad aussieht (mit Bindestrich). Empfohlen bleibt `popup:dashboard-name::Abschnitt`.

### 2026-11-21 – BirdNET-Einzelkarte: Code auf das Nötige reduziert, Coffee-Button in den READMEs
- Die Einzelkarte enthält nur noch, was sie braucht: 66 KB statt 484 KB. Entfernt sind alle anderen Kartentypen, die Package-Styles samt CSS, Aktionen/Popups, Zusatzinfos, Preset-Verwaltung, Farb-/Status-Logik und die Energy-Values-Karte. Der Editor ist eine eigene, kleine Klasse.
- Die Energie-Datumsauswahl funktioniert unverändert. Darstellung der drei Tabs und Editor wurden gegen die vorherige Fassung Pixel für Pixel verglichen (Deutsch und Englisch), ebenso das Nachladen bei geändertem Zeitraum und das gemeinsame Laden mit dem Package.
- Übersetzungsdatei der Einzelkarte auf die benutzten 117 Texte gekürzt.
- Build: `build/build_birdnet_single.py` erzeugt die Karte jetzt in zwei Schritten (Ersetzungen, dann `build/shake.js` mit `build/patches.js`; benötigt Node mit `--expose-internals`).
- README (EN/DE) der Einzelkarte: „Buy Me a Coffee“-Button an derselben Stelle wie in der energy-values-card (unter den Badges, vor dem Sprachlink).

### 2026-11-21 – BirdNET-Einzelkarte: schlanker Editor
- Der Editor der Einzelkarte zeigt nur noch Name, Icon und die BirdNET-Optionen (Sensoren, Start-Tab, Zeilen/Sortierung, Werte/Legende, Tageslicht, Energie-Datumsauswahl, Artenbilder). Entfallen sind Style-Auswahl, Styling, Aktionen, Zusatzinfos, Preset-Panel und der Schlüssel `collection_key` (per YAML weiterhin möglich).
- Die Energie-Datumsauswahl funktioniert unverändert.

### 2026-11-21 – BirdNET als Einzelkarte vorbereitet
- Die BirdNET-Karte gibt es zusätzlich als eigenständige Karte `custom:ha-ultimate-birdnet-card` (Build-Skript `build/build_birdnet_single.py`, Repo-Ordner `github-release-birdnet/` mit README EN/DE, CHANGELOG, hacs.json, Package, Beispiel, ZIP). Sie bleibt Bestandteil des Packages.
- Standard-Entität der BirdNET-Karte: `sensor.birdnet_erkennungen_heute`.

### 2026-11-21 – BirdNET-Karte: Wikipedia-Suche über den deutschen Artnamen korrigiert
- Ohne lateinischen Namen sucht die Karte in der deutschen Wikipedia zuerst die Artseite „Name (Art)“ (zum Beispiel „Kormoran (Art)“, „Gimpel (Art)“), erst danach „Name“. Bild und Link kommen von der Seite, die dabei gefunden wird; Begriffsklärungsseiten werden übersprungen.

### 2026-11-21 – BirdNET-Karte: Klick auf das Vogelbild öffnet Wikipedia
- In allen drei Tabs öffnet ein Klick auf das Vogelbild die Wikipedia-Seite der Art in einem neuen Browser-Fenster (über den lateinischen Namen in der Wikipedia der in Home Assistant eingestellten Sprache, ohne lateinischen Namen über den deutschen Namen in der deutschen Wikipedia). Funktioniert auch beim Buchstaben-Platzhalter.

### 2026-11-21 – BirdNET-Karte: Konfidenz-Badge und Ersatzwerte in der Artenliste
- Übersicht: Das grüne „Max. xx %“-Feld wird auch gezeigt, wenn der Verlauf noch leer ist (Maximum aus der Tagesstatistik, sonst aus der Gesamtstatistik).
- Arten – Analysen: Fehlen für einen Zeitraum Konfidenz oder „Zuletzt“ (zum Beispiel bei Tagen vor der Package-Erweiterung), nimmt die Karte Ersatzwerte aus der Gesamtstatistik.

### 2026-11-21 – BirdNET-Karte: Artenbilder auch ohne lateinischen Namen
- Fehlt der lateinische Name einer Art (zum Beispiel bei Erkennungen vor dem Einrichten der Statistik), sucht die Karte das Bild über den deutschen Artnamen in der deutschen Wikipedia.

### 2026-11-21 – Heatmap und BirdNET: Titel-Icon links neben dem Namen
- Das Titel-Icon steht bei den Karten „Heatmap“ und „BirdNET“ jetzt immer links neben dem Kartennamen (vorher über dem Namen).

### 2026-11-21 – BirdNET-Karte: Artbilder von Wikipedia
- Die Karte holt das Artbild automatisch über den lateinischen Namen von Wikipedia (https, daher auch über Tailscale/HTTPS sichtbar) und merkt es sich im Browser. Ohne Bild bleibt der Buchstaben-Platzhalter.
- Option „Artenbilder aus dem Internet“ im Editor (Standard an); eine eigene Bild-URL hat Vorrang.
- Beschriftung des Bild-URL-Feldes gekürzt (wurde im Editor abgeschnitten). Platzhalter in der URL: {name} = Name, {sci} = lateinischer Name.

### 2026-11-21 – BirdNET-Karte: Zeitraum über Energie-Datumsauswahl, komplette Sortierung
- Die Tabs „Analysen“ und „Arten“ folgen jetzt der Energie-Datumsauswahl (Kennzahlen, Top 10, Tageszeit, Trend, aktuelle Erkennungen, Artenliste); ohne Auswahl wird der gesamte Zeitraum gezeigt. Der gewählte Zeitraum steht unter den Tabs.
- Sortierung der Artenliste wie in BirdNET-Go: Erkennungen (meiste/wenigste), Name (A–Z/Z–A), zum ersten/zuletzt gesehen (neueste/früheste), Konfidenz und maximale Konfidenz (höchste/niedrigste). Zusätzlich Spalte „Zuletzt“ in den Artenkacheln.
- Package: `sensor.birdnet_erkennungen_heute` liefert zusätzlich `konf` und `zeit`, `sensor.birdnet_statistik` je Art `last`.

### 2026-11-20 – Neuer Kartentyp „BirdNET“ (3 Tabs)
- Eine Karte mit drei Tabs nach dem Vorbild von BirdNET-Go: „Übersicht“ (Tagesaktivität mit Tageslicht-Leiste und Energie-Datumsauswahl, „Gerade gehört“, neue und zurückkehrende Arten), „Analysen – Zusammenfassung“ (Kennzahlen, Top 10, Tageszeit, Trend mit Zeitraum, aktuelle Erkennungen) und „Arten – Analysen“ (Artenliste als Kacheln oder Liste mit Sortierung und Suche).
- Passt sich den Karten-Styles an (hell/dunkel), Start-Tab und optionale Bild-URL pro Art ({name}/{sci}) im Editor.
- Package `birdnet_auswertung.yaml` erweitert: neuer Sensor `sensor.birdnet_statistik` (Verlauf der letzten 40 Erkennungen, Statistik je Art, Tageswerte der letzten 60 Tage, Tageszeit).
- Die Karte „Heatmap“ bleibt als eigener, allgemeiner Typ erhalten.

### 2026-11-20 – Heatmap: helle Styles, Titel-Icon, schmalere Namensspalte
- Tageslicht-Leiste und Zellen passen sich automatisch an helle Karten-Styles an (z. B. Morph neo hell, Home Assistant hell); dunkle Styles bleiben unverändert.
- Titel-Icon steht direkt neben dem Kartennamen.
- Namensspalte ist nur so breit wie der längste Name (max. 28 %), dadurch mehr Platz für die Stundenzellen.

### 2026-11-20 – Neuer Kartentyp „Heatmap“ (Aktivität pro Stunde)
- Zeigt je Zeile (z. B. Vogelart) die Werte für 24 Stunden als abgestufte Farbzellen mit Zahl, dazu Legende „Weniger … Mehr“. Layout angelehnt an die Tagesaktivität von BirdNET-Go.
- Tageslicht-Leiste aus der Sonnen-Entität (Nacht, Dämmerung, Tag, Sonnenaufgang und -untergang), abschaltbar.
- Folgt der Energie-Datumsauswahl: Vergangene Tage werden aus dem Verlauf (letzter Zustand je Tag) addiert, der heutige Tag live. Ohne Datumsauswahl zeigt die Karte den heutigen Tag.
- Liest ein Sensor-Attribut der Form `Name: [24 Werte]` (Standard `stunden`), Untertitel, Zeilenanzahl, Sortierung und optionale Bild-URL pro Zeile einstellbar. Farbe folgt der Icon-Farbe der Karte, Optik dem Grund-Style. Auf schmalen Karten werden Stundenbeschriftung und Zahlen reduziert.

### 2026-11-20 – Aktive Entitäten: Ansicht „Minimal“, Icon-Farbe
- Neue Darstellung „Minimal“: je Gruppe (Lampen, Fenster …) eine Reihe, darin je Raum das Bereichs-Icon aus HA mit der Anzahl der aktiven Entitäten, ohne Rahmen und Hintergrund. Raumnamen optional unter den Icons.
- Antippen eines Raums öffnet ein Popup mit den Geräten dieses Raums (bei Lampen, Schaltern und Ventilatoren mit „Alle ausschalten“). Das Popup aktualisiert sich live und schließt sich, wenn nichts mehr aktiv ist.
- Alle Icons der Karte (auch die vor „Lampen“ und „Fenster“) folgen jetzt der für die Karte eingestellten Icon-Farbe.
- Minimal platzsparend: je Gruppe nur eine Zeile (Gruppen-Icon links, Räume daneben), kleinere Icons und Zahlen. Der Gruppenname ist per Option „Gruppennamen anzeigen“ zuschaltbar, sonst als Tooltip.
- Minimal: Gruppen-Icons bleiben links, die Raum-Kacheln stehen zentriert in der Kartenmitte, der gesamte Block ist vertikal zur Kartenhöhe zentriert. Kartenname und Karten-Icon werden in dieser Ansicht automatisch ausgeblendet.

### 2026-11-20 – Neuer Kartentyp „Aktive Entitäten“
- Zeigt gruppiert, was gerade an oder offen ist: Lampen, Schalter, Ventilatoren, Fenster, Türen, Rollläden, Schlösser und Mediaplayer. Die Gruppen und zusätzliche Einzel-Entitäten wählt man im Editor, einzelne Entitäten lassen sich ausschließen.
- Zwei Darstellungen: „Ausführlich“ (je Gerät eine Zeile mit Icon, Name und Bereich) und „Kompakt“ (Chips, wahlweise mit Name oder Bereich).
- Antippen schaltet Lampen, Schalter und Ventilatoren um, bei allen anderen öffnet es den Detaildialog (einstellbar). Ist nichts aktiv, erscheint ein einstellbarer Text.
- Optik folgt dem gewählten Grund-Style.
- Der Standard-Titel der Karten (z. B. „Aktive Entitäten“) wird übersetzt.

### 2026-11-20 – Wetter-Warnungen: Overlay korrigiert
- Das Detail-Overlay der Warnungen in der Wetter-Karte wurde bisher nicht in die oberste Ebene gehoben und konnte von Nachbarkarten überdeckt werden. Es wird jetzt wie bei der DWD-Karte angezeigt und positioniert.
- Schrift im Overlay größer (14 px, bessere Zeilenhöhe), mehr Innenabstand.
- Hintergrund des Overlays vollständig deckend (keine Transparenz mehr), stärkerer Schatten.
- Overlay wurde im Dashboard schmal am linken Bildrand über der Seitenleiste angezeigt, weil die Position vor dem Layout der Karte berechnet wurde. Es wird jetzt erst platziert, wenn die Karte eine Breite hat, und bei Größenänderungen neu positioniert.

### 2026-11-19 – Editor: Styling-Optionen nur dort, wo sie wirken; Status-Optionen bei Uhr, Graph und Wetter
- Prüfung aller 18 Kartentypen mit Bildvergleich je Option. Nicht wirksame Optionen werden im Editor je Kartentyp ausgeblendet:
  - Layout „Horizontal“ nur bei Batterie, Klima, Gauge, Licht, Slider, Status und Schalter.
  - Schriftgröße und Farbe des Status sowie „Status ausblenden“ nicht bei Energy, DWD-Warnungen und Power Flow.
- Schriftgröße und Farbe des Status wirken jetzt auch bei Uhr (Uhrzeit), Graph (Zustandswert in der Legende) und Wetter (Temperatur, Farbe und Zustandstext). Bei der Uhr hat die eigene Zeit-Schriftgröße weiterhin Vorrang.
- Energy: Hintergrund, Schatten und Innenschatten werden jetzt übernommen (bisher nur der Rahmen).
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Power Flow: pulsierender Schein in allen Styles nach innen
- Der äußere pulsierende Schein ist entfernt. Aktive Komponenten leuchten in allen Styles pulsierend nach innen (Standard, Neon, Neon (Flow), Morph glass/neo/metal). Flat und Minimal bleiben ohne Schein.
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Power Flow: Schein nach innen bei Morph (neo) und Morph (metal)
- Morph (neo light/dark) und Morph (metal): aktive Komponenten haben jetzt einen pulsierenden Schein nach innen (Inset) statt nach außen.
- Morph (metal): Boxen sehen wie die Kacheln aus (dunkle Fläche, feine Kante, farbige Akzentkante links, Innenschatten) und schweben nicht mehr.
- Morph (glass) und Minimal unverändert.
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Power Flow folgt dem Grund-Style; neuer Grund-Style „Neon (Flow)“
- Die Option „Knoten-Stil“ (`pf_style`) ist entfernt. Die Karte „Energy Power Flow“ richtet sich nach dem gewählten Grund-Style (`card_style`): Home-Assistant-Theme, Neon, Neon (Flow), Morph (glass), Morph (neo light/dark), Morph (metal), Flat und Minimal.
- Neuer Grund-Style „Neon (Flow)“ (`card_style: neon_flow`) für alle Kartentypen: getönte Kartenfläche, farbiger Rahmen, leuchtender Rand. In der Power-Flow-Karte entspricht er der bisherigen Darstellung (getönte Boxen mit pulsierendem Schein, auch im Standard-Theme).
- Grund-Style „Neon“ zeigt in der Power-Flow-Karte die dunklen Boxen mit glasigen Icon-Kugeln und leuchtenden Linien; die anderen Grund-Styles färben Füllung, Rand und Schatten der Boxen passend ein (bei Neumorphism, Metal, Flat und Minimal ohne pulsierenden Schein).
- „Einfache Boxen“ entfällt. Die Einstellung „Farbintensität der Boxen“ gilt für Standard und Neon (Flow).
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Power Flow: Quadrate in den Flusslinien ausprobiert und zurückgenommen
- Abgedunkelte, verschwommene Quadrate statt der Punkte wurden getestet und wieder entfernt. Die Flusslinien haben wieder die bisherigen Punkte.
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Power Flow: kein Neuaufbau der Grafik mehr bei Wertänderungen
- Bei einer State-Änderung wird das SVG nicht mehr ersetzt, sondern nur an das neue Markup angeglichen. Elemente und ihre CSS-Animationen (pulsierender Schein, Flusspunkte) laufen dadurch ungestört weiter, Sprünge beim Schein entfallen.
- Jede Flusslinie liegt in einer eigenen Gruppe, damit das Ein- und Ausschalten einer Linie andere Linien nicht beeinflusst.
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Power Flow: Werte werden animiert (Standard)
- Leistungswerte in Boxen und Kacheln laufen weich vom alten auf den neuen Wert (0,6 s), wie bei „Werte animieren“ im Bar-Typ. Keine Option im Editor, immer aktiv.
- Bei „Bewegung reduzieren“ (Betriebssystem) wird nicht animiert.
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Power Flow: neuer Stil „Neon“
- `pf_style: neon` (Auswahl „Neon (dunkel, leuchtend)“): dunkler Kartenhintergrund, Boxen mit farbigem leuchtendem Rahmen, glasige Icon-Kugeln mit Strahlenkranz, Batterie-Ring außen um die Kugel, leuchtende Flusslinien mit weißer Punktbewegung, Kennzahlen-Kacheln im Neon-Look.
- Layout, Boxformen und Linienführung unverändert; „Gestufte Karten“ und „Einfache Boxen“ bleiben erhalten.
- Neue Übersetzung in `translations/de.json`.
- Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Kartentyp „Energy Power Flow“ (nur Anzeige, Hub-Aufbau)
- Neuer `card_type: power-flow`: SVG-Leistungsfluss mit animierten Linien (Richtung = Flussrichtung, Dicke = Leistung), Layout von links nach rechts: Panels → Solar-Hub (mit Batterie) → Wechselrichter → Haus → Verbraucher/E-Auto; Netz und AC-Speicher unten am Haus.
- Solar-Hubs (`pf_hubs`, z. B. Solarflow Hub 1200/2000): je Hub 1–4 PV-Eingänge, Batterie (Leistung, Ladestand, BMS-Wert, Vorzeichen umkehrbar), Ausgang zum Wechselrichter (Sensor oder berechnet), frei benennbare Wechselrichter-Eingänge (A, B …). Neue Karte startet mit den Vorlagen „Hub 1200“ (A) und „Hub 2000“ (B).
- Weitere Bausteine: Solaranlagen direkt am Wechselrichter, AC-Speicher am Hausnetz, Wechselrichter (optional AC-Sensor), Netz (Bezug/Einspeisung, optional eigener Einspeise-Sensor), bis zu 6 Verbrauchergruppen (Sensoren summiert), E-Auto.
- Batterien (Hub und AC): getrennte Sensoren für Ladeleistung und Entladeleistung (Wert = Laden − Entladen) oder alternativ ein Sensor mit Vorzeichen.
- Kennzahlen-Kacheln oberhalb der Grafik: Autarkie, Eigenverbrauch, Solarerzeugung, Hausverbrauch (einzeln ausblendbar). Live aus den Leistungen; mit optionalen Tages-Sensoren in kWh (Netzbezug, Einspeisung, Erzeugung, Hausverbrauch) werden Tageswerte („heute“) berechnet.
- Fix: Der Berechnungs-Cache der Karte berücksichtigt jetzt die geladene Übersetzung (sonst blieben Texte nach dem Laden der Sprachdatei englisch).
- Knoten-Stil (`pf_style`): „Gestufte Karten“ (Standard: Hubs, Wechselrichter und Haus groß mit großem Wert, Panels als kompakte Chips, Ladestand als Ring um das Batterie-Icon, BMS-Wert oben rechts, Verbraucher/Netz/E-Auto als Chips) oder „Einfache Boxen“ (bisheriger Stil).
- Farbintensität der Boxen einstellbar (`pf_fill`, Standard 30 %), kräftigere Rahmen, inaktive Knoten weniger ausgeblendet.
- Darstellung: aktive Komponenten (≥ 10 W) pulsieren mit einem stufenlos auslaufenden, weich verlaufenden Schein (ein Element, gleichmäßig, alle im selben Takt, abschaltbar mit „Fluss animieren“), inaktive haben keinen. Beim Netz leuchtet der Schein bei Bezug rötlich und bei Einspeisung grünlich. Flusslinien rechtwinklig mit gerundeten 90°-Ecken; die senkrechten Stücke einer Linienschar liegen ohne Versatz untereinander. Kräftigere Linien, Rahmen und Füllungen (Farbintensität Standard 36 %). Position der Hub-Batterie je Hub wählbar (`battery_position`: automatisch, über oder unter dem Hub); automatisch bei mehreren Hubs: erste Hälfte oben, Rest unten (symmetrisch um den Wechselrichter). Einheitlicher Box-Inhalt: Icon überall gleich groß (20 px) und an derselben Stelle links (Batterie-Icon mittig im Ring, Icons in festem Rahmen zentriert), Texte linksbündig in einer Spalte (Name, Wert, Zusatzzeile als Block mittig), auch bei Wechselrichter und Haus (jetzt mit Icon). Flusslinien werden innerhalb der Boxen per Maske ausgeblendet und enden damit bei aktiven wie inaktiven Linien exakt am Rahmen.
- Einheit je Sensor automatisch (W/kW/MW), Karteneinstellung W/kW nur als Rückfall. Hausverbrauch aus Sensor oder berechnet. Farben aus dem HA-Energie-Theme.
- Performance: Die Karte rechnet nur neu, wenn sich Konfiguration oder einer ihrer eigenen Sensorwerte ändert.
- Übersetzungen in `translations/de.json` (594 Einträge). Backup: `ha-ultimate-card-package.pre-power-flow.bak.js`. Nicht auf GitHub veröffentlicht.

### 2026-11-19 – Popup-Aktion (Abschnitt eines Popup-Dashboards als Dialog)
- Neue Aktion: Tap/Double-Tap/Hold (Karte, Icon, Name, Status) können ein Popup öffnen. Auswahl in der Standard-Aktionsliste nicht möglich (ui_action kennt keinen eigenen Typ), daher Aktion „Navigieren“ mit `navigation_path: popup:<Abschnitt>` oder `popup:<Dashboard>::<Abschnitt>`.
- Quelle: Dashboard (Standard `popups`, einstellbar über `popup_dashboard`); gezeigt werden alle Karten des Abschnitts, dessen Überschriften-Karte (`heading`) den Namen trägt; die Überschrift wird zum Dialogtitel. Rückfall: Ansicht mit passendem Pfad/Titel. Konfiguration wird per `lovelace/config` geladen, Karten per `loadCardHelpers().createCardElement` erzeugt (HA- und Custom-Karten, eigener Editor).
- Dialog: `<dialog>` im Shadow-DOM der Karte (Events wie more-info erreichen Home Assistant), Optik wie das Music-Assistant-Popup (Klassen `mp-panel`, `mp-panel-head`: stilabhängiger Rahmen, abgedunkelter/unscharfer Hintergrund, runder Schließen-Knopf), Schließen per Knopf, Esc oder Klick daneben; Karten im Dialog bekommen laufend `hass`. Breite über `popup_width` (small/medium/large/full).
- Editor: Gruppe „Popup“ unter „Actions“ (Popup-Dashboard, Popup-Breite, Hilfetext). Neue englische Texte in `translations/de.json` ergänzt.
- Nur lokal, nicht auf GitHub. Harness-Test (Dialog, Abschnittssuche, Fehlerfälle, hass-Updates) bestanden; im echten Dashboard noch nicht geprüft (u. a. ob alle Benutzer `lovelace/config` lesen dürfen).
- Sicherung: `ha-ultimate-card-package.pre-popup-action.bak.js`.

### 2026-11-19 – Mehrsprachigkeit: Englisch als Standard, Übersetzungsdateien

- Alle sichtbaren Texte im Code (Editor-Beschriftungen, Optionen, Meldungen, Karten-Texte, Tooltips) sind jetzt Englisch. Die Standardsprache ist Englisch.
- Neuer Ordner `translations/` mit `de.json` (Schlüssel = englischer Text, Wert = Übersetzung) und `README.md`. Die Sprache wird aus der Home-Assistant-Benutzersprache gewählt (`de-AT` → `de.json`). Fehlt die Datei oder ein Text, wird Englisch angezeigt. Weitere Sprachen: Datei kopieren und Werte übersetzen.
- Mechanismus: `ucpT(text)` übersetzt Texte; Editor-Schemas und Labels werden zentral übersetzt, in den Karten übersetzt ein Beobachter die erzeugten Texte, Tooltips und aria-Labels. Beim Sprachwechsel werden Karten und Editoren neu aufgebaut.
- Die Übersetzungsdatei wird relativ zum Skript geladen (Ordner `translations/` neben `ha-ultimate-card-package.js`, mit demselben `?t=`-Parameter wie die Skript-URL).
- Energy-Karte: eigenes Wörterbuch ersetzt; deutsche Texte stehen jetzt in `de.json`. Himmelsrichtungen (NE → NO usw.) über die Übersetzung.
- Kartentyp „Weather Warning“ heißt auf Deutsch „Wetter-Warnung“.
- Hinweis: Kommentare im Code sind weiterhin Deutsch; Fehlermeldungen beim Laden der Konfiguration (setConfig) erscheinen nur Englisch.

### 2026-11-19 – Zusatzinformationen: Schriftfarbe nach Status (an/aus)

- Neue Felder „Schriftfarbe (an)“ und „Schriftfarbe (aus)“ bei jedem Zusatzwert (Farbe oder Theme-Variable). Die Farbe gilt für Name, Wert und Icon der Zusatzinformation.

### 2026-11-19 – Zusatzinformationen: Hintergrund und Schatten nach Status (an/aus)

- Jeder Zusatzwert (eigene Zusatzwerte und eingebaute) hat die Felder „Hintergrund (an/aus)“ und „Schatten (an/aus)“. Hintergrund: Farbe, Verlauf oder Theme-Variable; Schatten: CSS-Wert oder Theme-Variable.
- „an“ wird wie bei den Status-Farben der Karte bestimmt (ucpIsOn). Maßgeblich ist die Entität des Zusatzwerts (bei eingebauten die Datenquelle, sonst die Karten-Entität).
- Ohne Eintrag bleibt das Aussehen unverändert. „Nicht verfügbar“ ist bewusst nicht enthalten.

### 2026-11-19 – Clock (Musik): vertikale Position des Inhalts

- Neue Option „Vertikale Position von Datum, Uhrzeit und Zusatzinfos“ unter Kartenspezifische Einstellungen: Oben (Standard, wie bisher mit etwas Abstand zum Rand), Mittig, Unten (knapp oberhalb von Titel/Visualizer).
- Titel/Interpret und Visualizer bleiben unverändert am unteren Kartenrand.

### 2026-11-19 – Weather Warning: Umbenennung, doppelten Hinweis entfernt

- Kartentyp „DWD Warnings · Wetter-Warnungen“ heißt jetzt „Weather Warning“.
- Der Zusatztext „Keine aktuellen Warnungen.“ entfällt (in der Karte Weather Warning und in der Wetterkarte), da „Keine Warnung“ bereits angezeigt wird.

### 2026-11-19 – Wetter-Karte: Wetterwarnungen integriert

- Kartentyp „weather forecast“: Unter „Kartenspezifische Einstellungen“ gibt es die aufklappbare Gruppe „Wetterwarnungen“.
- Enthalten: Anzeige ein/aus, Warnungs-Entität (oberhalb der Vorwarnung), Vorwarnung, Vorwarnungen anzeigen, alle aufklappen, Region/Aktualisierung ausblenden, Layout, max. Anzahl.
- Die Warnungen erscheinen unter dem Forecast; die DWD-Darstellung wird wie in der Karte „Wetter Warnungen“ verwendet.

### 2026-11-19 – State-Karte: Attribut-Feld direkt unter der Entität
- Das Feld „Attribut anstelle des Zustands“ (und das Datumsformat) stand versehentlich in „Kartenspezifische Einstellungen“ und ist jetzt wie gewünscht direkt unter der Entität sichtbar.

### 2026-11-19 – State-Karte: Entitäts-Attribut anstelle des Zustands
- Neues Auswahlfeld „Attribut anstelle des Zustands“ direkt unter der Entität (Liste aller Attribute der gewählten Entität; „Entitätszustand“ = wie bisher). Die Karte zeigt dann den Attributwert statt des Zustands, mit Einheit (z. B. km/h), Windrichtung als Himmelsrichtung und – bei Datumsattributen – einstellbarem Datums-/Uhrzeitformat.

### 2026-11-19 – Wetter-Vorhersage: Tage gleichmäßig über die Breite
- Die angezeigten Tage der Vorhersage verteilen sich wieder gleichmäßig über die gesamte verfügbare Kartenbreite (gleich breite Spalten); bei bis zu 8 Tagen immer in einer Zeile.

### 2026-11-18 – Wetter-Vorhersage: gewählte Tage werden vollständig angezeigt
- Bei bis zu 8 Tagen stehen alle Tage in einer Zeile (die Tage dürfen dafür etwas schmaler werden). Vorher rutschte der letzte Tag in eine zweite, abgeschnittene Zeile (7 gewählt, 6 sichtbar).

### 2026-11-18 – Wetter-Vorhersage: Tage näher zusammen
- Die Tage der Vorhersage werden nicht mehr über die ganze Kartenbreite gestreckt, sondern behalten ihre natürliche Breite (mind. 46 px) mit nur 2 px Abstand und stehen gemeinsam mittig; erst wenn der Platz nicht reicht, wird umgebrochen.

### 2026-11-18 – Wetter-Icons: dunkler Kreis um das Sonnen-/Mond-Symbol entfernt
- Das kleine Sonnen-/Mondsymbol an Wetter-Icons (z. B. bewölkt) hatte einen Hintergrund in der Farbe des Theme-Kartenhintergrunds und wirkte bei abweichender Kartenfarbe (Verlauf, Style) wie ein dunkler Fleck. Der Hintergrund ist entfernt.

### 2026-11-18 – Wetter-Vorhersage: Optionen „Forecast max / min“ und „Forecast Rahmen“
- Kartenspezifische Einstellungen der Weather-Forecast-Karte: „Forecast max / min“ (aus = nur die erwartete Höchsttemperatur) und „Forecast Rahmen“ (aus = keine Rahmen um die Tagesanzeigen). Beide sind standardmäßig an.

### 2026-11-18 – Wetter-Vorhersage: mehr Tage nebeneinander
- Geringerer Abstand zum Kartenrand (Vorhersage ragt 8 px in den Kartenrand), kleinerer Abstand und Innenabstand der Tage, Tage verteilen sich gleichmäßig auf die Breite. Temperaturen in der Vorhersage ohne wiederholte Einheit („12° / 3°“ statt „12°C / 3°C“). Im Test passen auf 400 px Breite statt 3 nun 5 Tage nebeneinander.

### 2026-11-18 – Theme-Variablen ohne Wert
- Ist eine als Hintergrund oder Schatten eingetragene Theme-Variable im aktiven Theme nicht vorhanden, bleibt der normale Kartenhintergrund bzw. kein Schatten, statt dass der Hintergrund verschwindet.

### 2026-11-18 – Farbverläufe und Status-Schatten
- Fix: Farbverläufe im Hintergrund (auch bei „Karte (an/aus)“) wurden nicht angezeigt, weil ein Style-Hintergrund sie überdeckte. Verläufe, Farben und Theme-Variablen (Variable darf auch einen ganzen Verlauf enthalten, z. B. `karte-an`) funktionieren jetzt in allen Styles.
- Neu in „Status-Farben“: „Schatten (an)“ und „Schatten (aus)“ – ein vollständiger CSS-Schatten (z. B. `inset 3px 3px 7px #000a, inset -2px -2px 6px #fff6`) oder eine Theme-Variable; ersetzt im jeweiligen Zustand Schatten außen/innen. So lassen sich Verlauf und innerer Schatten nur für „an“ festlegen.

### 2026-11-18 – Switch: „Schaltet …“ erst nach 0,5 s
- Die Anzeige „Schaltet …“ erscheint erst, wenn der Schaltvorgang länger als 0,5 Sekunden dauert; bei schnellen Geräten blitzt sie nicht mehr auf. Der Knopf bleibt wie bisher während des Schaltens gesperrt (Maximum 5 s).

### 2026-11-18 – Tap-Actions: Karten-Aktion gilt auch für Icon, Name und State
- Die Tap-/Double-Tap-/Hold-Action der Karte greift jetzt auch beim Tippen auf Icon, Name oder State, solange dafür keine eigene Aktion gesetzt ist (vorher passierte dort nichts, weil jede Zone nur ihre eigene Aktion kannte). Eine ausdrücklich gesetzte Aktion „Keine“ bleibt „Keine“.
- „Mehr Infos“ bei Karten mit mehreren Entitäten (z. B. Graph) öffnet die erste Entität.

### 2026-11-18 – Mediaplayer: Ein/Aus-Knopf
- Neuer Ein/Aus-Knopf direkt rechts neben dem Quellen-Auswahlfeld (vor dem Bibliotheks-Knopf). Er schaltet den Player aus (`media_player.turn_off`) bzw. ein, wenn er aus ist (`turn_on`), und erscheint nur, wenn der Player dieses Feature meldet. Abschaltbar über „Ein/Aus-Knopf anzeigen“ (Gruppe Music Assistant). Nur im Layout „Groß“.

### 2026-11-18 – Mediaplayer: Bedienknöpfe in Icon-Farbe und größer
- Die Icons der Bedienknöpfe (Zufall, Zurück, Play/Pause, Weiter, Stopp, Wiederholen, Stumm, Bibliothek) übernehmen immer die für das Haupt-Icon gewählte Farbe („Farbe Icon“, auch Statusfarben); ohne Auswahl bleibt die Akzentfarbe.
- Neue Option „Größe Bedienknöpfe (px, Standard 44)“ im Styling (28–80 px) für bessere Bedienbarkeit auf Touchdisplays; das Icon im Knopf skaliert mit. Vorher waren die Knöpfe 36 bzw. 30 px groß.

### 2026-11-18 – Mediaplayer: Inhalt nicht mehr nach links verschoben
- Die Mediaplayer-Karte nutzte nur die Breite ihres Inhalts (z. B. 208 px) und klebte dadurch links. Die Inhaltsspalte füllt jetzt die volle Kartenbreite, Cover, Tasten, Lautstärke-Zeile und Status sind wieder mittig.

### 2026-11-18 – Wetter: Windrichtung als Himmelsrichtung
- Wird die Windrichtung (`wind_bearing`) als Winkel geliefert, wird sie in eine Himmelsrichtung umgerechnet (N, NNO, NO, ONO, O, OSO, SO, SSO, S, SSW, SW, WSW, W, WNW, NW, NNW). Gilt in der Wetter-Karte (Zeile „Wind“ zeigt jetzt Geschwindigkeit und Richtung) und für Zusatzwerte mit Attribut `wind_bearing`/`wind_direction`. Textwerte wie „NW“ bleiben unverändert.

### 2026-11-18 – Zusatzwerte: Einheit bei Attributen
- Zusatzwerte (Entitäten) mit gewähltem Attribut zeigen jetzt bei allen Kartentypen und Entitätsklassen die Einheit an. Reihenfolge: Attribut `<attribut>_unit` (z. B. `wind_speed_unit`), dann Einheit nach Attributname (Temperaturen, Geschwindigkeit, Druck, Entfernung aus den HA-Systemeinheiten; Luftfeuchte, Akku, Position, Lautstärke usw. in `%`; Spannung, Strom, Leistung, Energie, Signal dBm, Sekunden/Minuten/Stunden u. a.), `min`/`max`/`step` erben die Einheit der Entität. Nicht-numerische Werte und Datumsattribute bleiben unverändert.

### 2026-11-18 – Wetterwarnungen vertikal: Text mittig zur Karte
- Im vertikalen Warnungs-Layout ist der Text in Hauptanzeige und Warnzeilen jetzt auf die ganze Kartenbreite zentriert (Abstand rechts = links + Streifenbreite), passend zu Titel und "Keine aktuellen Warnungen." statt mittig im Restbereich neben dem Streifen.

### 2026-11-18 – Wetterwarnungen: Farbstreifen-Design (Variante C)
- Hauptanzeige und Warnungszeilen haben links einen gleich breiten Farbstreifen (40 px): Hauptanzeige mit Icon, Warnungszeilen mit der Warnstufe als Zahl. Die Fläche ist nur leicht in der Warnfarbe getönt (`color-mix` mit transparent), Rahmen `--u-edge`; dadurch passt sich alles dem gewählten Theme/Style an.
- "Keine Warnung": Streifen ohne Farbfüllung (gleicher Hintergrund wie der Rest), grünes Häkchen, Rahmenlinie rechts am Streifen.
- Die dwd-spezifischen Preset-Regeln (neumorphism, skeuomorph, neon, flat für `.dwd-item`/`.dwd-summary`) entfallen; gilt für beide Warnungs-Layouts.

### 2026-11-18 – Wetterwarnungen: Warnungs-Layout und Beschreibung als Overlay
- Styling: Das Feld "Layout" entfällt bei diesem Kartentyp, stattdessen "Warnungs-Layout" (`dwd_layout`: horizontal = bisherige Darstellung, vertikal).
- Vertikal: Hauptanzeige (oben) und Warnungszeilen (unten) zentriert; zu breite Zeilen laufen automatisch als Laufschrift (je Zeile, ResizeObserver).
- Aufgeklappte Beschreibung ist jetzt ein Popover (Top-Layer): sie überdeckt darunterliegende Karten, die Karte wächst nicht mehr und nichts verschiebt sich. Schließen per Klick auf die Warnung oder neben die Beschreibung; Position folgt beim Scrollen/Größenänderung. "Alle Beschreibungen aufklappen" (`dwd_expand_all`) bleibt inline. Ohne Popover-Unterstützung des Browsers bleibt es inline.

### 2026-11-18 – Slider horizontal: Icon, Name, State wie in der State-Karte
- Im horizontalen Layout stehen Icon | Name | State jetzt auf derselben Höhe wie in der State-Karte (mittig in der Karte); der Regler liegt mittig zwischen dieser Zeile und dem unteren Kartenrand (Grid-Zeilen `1fr auto 1fr auto`).
- Die Reglerbreite (`contain: inline-size`) weitet die Spalten der Namenszeile nicht mehr auf.

### 2026-11-18 – Slider 8 px tiefer
- Der waagerechte Regler sitzt 8 px tiefer (`.slider-row .range { top: 8px }`).

### 2026-11-18 – Slider: Regler unten, State wie bei den anderen Karten
- Waagerechter Slider: der Wert (State) steht jetzt wie bei den anderen Karten (Layout vertikal: mittig unter dem Namen; horizontal: rechts in der Namenszeile). Der Regler liegt mittig im restlichen Kartenbereich unter der Namenszeile. Das kleine Icon neben dem Wert entfällt (Icon steht in der Namenszeile).
- Senkrechter Slider (`vertical: true`) unverändert.

### 2026-11-18 – Energie-Karte: Abstand zwischen Actions und Energie-Werten
- Der eingebettete Energie-Editor bekommt 24 px Abstand nach oben (wie über "Actions").

### 2026-11-18 – Preset-Popups über dem Karteneditor
- Fehler: Das Preset-Popup und der Dialog "Preset speichern?" öffneten sich hinter dem Karteneditor (der HA-Editor ist selbst ein modaler Dialog in der Top-Layer-Ebene, z-index hilft dort nicht).
- Behoben: Beide Popups sind jetzt `<dialog>` mit `showModal()`, liegen dadurch über dem Editor; Esc und Klick auf den Hintergrund schließen sie. Im Testlauf mit offenem modalem Dialog geprüft.

### 2026-11-18 – Eigene Styling-Presets und Zurücksetzen beim Style-Wechsel
- Beim Klick auf einen vordefinierten Style oder ein eigenes Preset werden Farben, Hintergrund, Rahmen, Schatten und Status-Farben zurückgesetzt, damit der Style rein wirkt (Schrift-/Icongrößen und Layout bleiben).
- Sind solche Werte gesetzt und noch nicht als Preset gespeichert, erscheint vorher der Dialog "Preset speichern?" (Speichern mit Namen / Verwerfen / Abbrechen).
- Eigene Presets stehen im Style-Auswahlfeld als "★ Name". Sie enthalten alle Styling-Werte (inkl. Größen und Status-Farben) und den Style; Anwenden kopiert die Werte in die Karte.
- Button "Eigene Presets verwalten …" im Karteneditor öffnet ein Popup: Anwenden, Umbenennen, Löschen, aktuelles Styling speichern.
- Speicherort: HA-Benutzerdaten (`frontend/set_user_data`, Schlüssel `ucp_presets`, pro Benutzer geräteübergreifend); Fallback localStorage.
- Attribut für Statusfarben heißt `data-ucp-status` (Kollision mit vorhandener Methode `_status` vermieden).

### 2026-11-18 – Statusfarben (an/aus) und Farbverläufe im Hintergrund
- Neuer aufklappbarer Bereich "Status-Farben" unter "Styling" (Karten mit Entität: battery, climate, gauge, light, mediaplayer, slider, state, switch, washdata, pihole): Karte | Icon | Name | State jeweils "an" und "aus" (`card_color_on/off`, `icon_color_on/off`, `name_color_on/off`, `state_color_on/off`). Leere Felder = normale Farbe.
- "an": Entität aktiv. Climate: heizt/kühlt (`hvac_action`), Mediaplayer: spielt, sonst alles außer off/closed/idle/standby/paused/locked/not_home/0/unavailable/unknown. Host-Attribut `data-status="on|off"`; Farben werden nur bei Statuswechsel neu gesetzt.
- Hintergrund (`bg_color`, auch Karten-Statusfarbe) akzeptiert jetzt auch `linear-gradient`, `radial-gradient`, `conic-gradient` (inkl. repeating, mit Theme-Variablen).

### 2026-11-18 – Theme-Variablen in allen Farbfeldern
- Zentraler Helfer `ucpColorValue`: akzeptiert CSS-Farben, `var(--…)` und Theme-Variablen auch ohne `var()` (`primary-color` oder `--primary-color` wird zu `var(--primary-color)`).
- Gilt jetzt für Farbe Name/State/Icon, Hintergrund-/Rahmen-/Schattenfarben, Iconfarbe Vorhersage, Heizfarbe, Farbauswahl der Light-Karte (5 Farben; beim Klick wird die Farbe in RGB aufgelöst), Serienfarben/Endfarbe der Graph-Karte und Rahmenfarbe der Balken.
- Energie- und Balkenkarte-interne Farben nutzten bereits `cssColor` mit Variablen.

### 2026-11-18 – Styling: Hintergrund, Rahmen, Schatten (alle Kartentypen)
- Editor: "Icon-Farbe" heißt jetzt "Farbe Icon". Unter "Styling" neue Zeilen: Hintergrundfarbe | Rahmenfarbe, Rahmenstärke (px) | Rahmenart, Schatten außen Größe | Winkel, Deckkraft | Farbe, Schatten innen Größe | Winkel, Deckkraft | Farbe.
- Schlüssel: `bg_color`, `border_color`, `border_width`, `border_style`, `shadow_size/angle/opacity/color`, `inset_size/angle/opacity/color`.
- Die Werte überschreiben Theme und Style-Preset (`!important`), aber nur wenn ein Wert gesetzt ist. Farben dürfen `var(--…)` sein.
- Schatten: Größe = Unschärfe in px (Versatz = halbe Größe), Winkel 0° = oben, 90° = rechts, 180° = unten (Standard), Deckkraft in % (Standard 30), Farbe Standard schwarz. Größe 0 schaltet den Schatten ganz ab.
- Gilt auch für Energie- und Balkenkarte (Attribute werden an die inneren Karten weitergegeben).

### 2026-11-18 – Hold-Actions nicht auf dem Smartphone
- Hold-Actions bleiben in den Kartenoptionen, lösen aber nur auf Geräten größer als ein Smartphone aus (kurze Bildschirmkante mindestens 600 px, also Tablet und Desktop). Auf dem Handy wird langes Drücken ignoriert, damit das System-Kontextmenü nicht stört.

### 2026-11-18 – Actions: Tap, Double-Tap, Hold
- Der Editor-Bereich „Tap-Actions“ ist jetzt Unterpunkt von „Actions“; neu dazu „Double-Tap-Actions“ und „Hold-Actions“, jeweils für Karte, Icon, Name und State (`double_tap_action`, `hold_action` sowie `icon_`/`name_`/`state_`-Varianten). Standard bei beiden: keine Aktion.
- Doppeltippen: nur wenn für den Bereich eine Double-Tap-Aktion gesetzt ist, wartet die Karte ca. 250 ms auf einen zweiten Tipp; sonst reagiert Tap sofort. Halten löst nach ca. 0,5 s aus, danach wird der anschließende Klick unterdrückt.

### 2026-11-18 – Tap-Actions für alle Kartentypen
- Neuer aufklappbarer Bereich „Tap-Actions“ im Editor (zwischen Kartenspezifisch und Zusatzinformationen): eigene Aktion für Karte (`tap_action`), Icon (`icon_tap_action`), Name (`name_tap_action`) und State (`state_tap_action`) mit der HA-Aktionsauswahl (keine, umschalten, Mehr-Info, navigieren, URL, Aktion ausführen).
- Standard: Light und Switch „umschalten“ (alle vier Bereiche), alle anderen Kartentypen „keine Aktion“. Bedienelemente der Karte (Buttons, Regler, Farbwahl) behalten ihre eigene Funktion.
- Der Status-Text von State, WashData und Pi-hole öffnet nicht mehr automatisch die Detailansicht; dafür „Mehr-Info“ bei „Tap-Action State“ wählen.
- Energie- und Balkenkarte: nur die Karten-Aktion.

### 2026-11-18 – Light im horizontalen Layout
- Die Button-Zeile der Licht-Karte (Helligkeit | State | Farbe) hat im horizontalen Layout volle Höhe, sodass Icon, Name und State/Buttons auf einer gemeinsamen Mittellinie liegen; die Hilfsregeln für Zeilenhöhe von Battery bleiben, störten aber andere Karten und wurden verschlankt.

### 2026-11-18 – Horizontales Layout: Icon, Name und State auf einer Linie
- Icon, Name und State teilen sich im horizontalen Layout dieselbe Zeilenhöhe (mindestens Icongröße) und sind vertikal gleich mittig ausgerichtet; Zeilenhöhen-Versatz zwischen Titel und Inhalt beseitigt.

### 2026-11-18 – Zahleneingabe statt Zahlenfeld mit Pfeilen
- Die px-Felder im Styling-Bereich (Schriftgrößen Name/State/Uhr/Vorhersage, Icongrößen) sind einfache Eingabefelder ohne Mini-Pfeile; ungültige Eingaben werden ignoriert.

### 2026-11-18 – Styling-Reihenfolge und Farboptionen
- Bereich „Styling“ im Editor: 1 Layout; 2 Schriftgröße Namen | Farbe Name; 3 Schriftgröße State | Farbe State; 4 Icongröße | Icon-Farbe; danach die kartenspezifischen Styling-Optionen.
- Neue Optionen `title_color`, `state_color`, `title_icon_color` (Hex, rgb() oder Farbname; ungültige Werte werden ignoriert). „Schriftgröße State“ ist jetzt für alle Karten im Styling-Bereich (wirkt bei Battery, Light, State, Switch, Slider, Gauge/Klima, WashData) und nicht mehr in den kartenspezifischen Einstellungen.
- Farben/Größen gelten auch für Energie- und Balkenkarte (Name und Icon).

### 2026-11-18 – Standard-Icongröße 25 px
- Das Icon neben dem Namen ist standardmäßig 25 px groß (überschreibbar über „Icongröße (px)“); gilt für alle Kartentypen inkl. Energie und Balken.

### 2026-11-18 – Icon der Entität als Standard-Icon
- Ist im Editor kein Icon gewählt, zeigt jede Karte (außer Energie und Balken) das Icon der Entität neben dem Namen. Es ist dynamisch (`ha-state-icon`): Batteriestand, Wetterzustand, Licht an/aus usw. folgen automatisch; ohne HA-Komponente gilt das Icon-Attribut der Entität. Bei mehreren Entitäten (Graph) wird die erste verwendet. „Icon ausblenden“ blendet es weiterhin aus.

### 2026-11-18 – Layouts vertikal und horizontal
- Vertikal (Standard): Icon, Name, State, Zusatzinformationen von oben nach unten, alles zentriert; das Icon neben dem Namen steht jetzt über dem Namen. Zusatzinformationen stehen nebeneinander, jede einzeln zentriert.
- Horizontal (Battery, Light, State, Switch, Slider, Gauge, Climate): Icon | Name | State von links nach rechts, mittig zwischen Kartenoberseite und Zusatzinformationen; Zusatzinformationen darunter unverändert (linksbündig).
- Namens- und Detail-Ausrichtung ergeben sich aus dem Layout (Namensposition ist nicht mehr einstellbar).

### 2026-11-18 – Styling: Namensschrift, Icongröße, Layout
- Im Bereich „Styling“ (alle Kartentypen): Option „Namensposition“ entfernt; neu „Schriftgröße Namen (px)“, „Icongröße (px)“ (Icon neben dem Namen) und „Layout“ (Vertikal/Horizontal, Konfiguration `card_layout`).
- Horizontal: Name links, Inhalt rechts; aktuell für Battery, Light, State, Switch, Slider, Gauge und Climate umgesetzt. Bei den übrigen Kartentypen bleibt das Layout vorerst unverändert.
- Gespeicherte Namenspositionen (`title_align`) werden weiterhin berücksichtigt, sind aber im Editor nicht mehr einstellbar.

### 2026-11-18 – WashData und Pi-hole ohne großes Icon
- Das große Icon in der Mitte entfällt; der Status-Text öffnet wie das Icon zuvor die Detailansicht.

### 2026-11-18 – Slider ohne vordefinierte Werte
- Die Schaltflächen 0/25/50/75/100 % unter dem Schieberegler sind entfernt; die Mindesthöhe der Karte ist entsprechend kleiner.

### 2026-11-18 – Name steht bei allen Karten oben
- Der Kartenname liegt bei allen Kartentypen (auch Slider) an derselben Position oben; nur der Inhalt wird in der verbleibenden Höhe zentriert.

### 2026-11-18 – Light: Standardhöhe 2 Zeilen
- Ohne das große Icon ist die Licht-Karte nur noch etwa zwei Zeilen hoch (Standard von 3 auf 2). Bei geöffneter Farb- oder Helligkeitsauswahl scrollt der Karteninhalt, falls die Karte dafür zu niedrig ist.

### 2026-11-18 – Grid-Höhe: feste Standardzeilen statt „Höhe an Inhalt“
- Die Karten meldeten `rows: auto`; im Sections-View wurde dadurch die vom Layout gestreckte Höhe gemessen (z. B. 13,7 Zeilen bei kleinen Karten). Jetzt liefert jeder Kartentyp eine kleine, passende Standard-Zeilenzahl (z. B. Battery/State/Switch 2, Light/Gauge 3, Mediaplayer 5, kompakt 2); Balken- und Energiekarte leiten sie aus ihrer Größe ab. Per Drag weiterhin frei änderbar.

### 2026-11-18 – Karteneditor für alle Kartentypen neu aufgebaut
- Einheitliches Layout: 1 Kartentyp, 2 Entität (entfällt bei Karten ohne Entität), 3 Style, 4 Name | Icon, 5 Name ausblenden | Icon ausblenden, 6 Status ausblenden | Laufschrift bei langen Namen, 7 Styling (aufklappbar: Namensposition, Schriftgrößen, Farben), 8 Kartenspezifische Einstellungen, 9 Zusatzinformationen.
- Option „Vertikales Layout“ aus dem Editor entfernt (Slider, State, Switch); die Karten behalten ihr bisheriges Standardverhalten. Zwei Grundlayouts (horizontal/vertikal) folgen später.
- Das große Icon in der Mitte (Battery, Light, State, Switch) gibt es nicht mehr, samt Option „Großes Icon ausblenden“. Schalten/Info läuft über den Status-Text.
- Layout-Auswahl (Balken, Uhr, Mediaplayer, Energie) steht jetzt in den kartenspezifischen Einstellungen.

### 2026-11-18 – Grid-Optionen für alle Kartentypen
- Alle Kartentypen folgen im Lovelace-Sections-View den Grid-Optionen: Breite über `columns`, Höhe über `rows` (`getGridOptions()`, Standard `rows: auto`, Mindestgrößen gesetzt).
- Karten füllen die zugewiesene Höhe (Host, Body und `ha-card` mit 100 % Höhe, Inhalt vertikal zentriert); dadurch folgen sie im HA Ultimate Dashboard auch per Drag der Höhe.
- Feste Höhen (Slider, Licht) sind jetzt Mindesthöhen.
- Energie-, Balken- und Mediaplayer-Karte ebenfalls angepasst.

### 2026-11-18 – Neuer Kartentyp „Wetter-Warnungen" (DWD) (Hauptchat)
- Typ `dwd-warnings`: zeigt die Sensoren der Integration „Deutscher Wetterdienst (DWD) Weather Warnings" (Aktuelle Warnstufe, Vorwarnstufe wird automatisch gesucht oder per `dwd_advance_entity` gesetzt). Kopfzeile mit Warnstufe/Region, je Warnung Stufe, Überschrift, Zeitraum; Klick klappt Beschreibung/Hinweis auf. Farben aus `warning_x_color` (Fallback je Stufe).
- Optionen: Vorabinformationen, Beschreibung immer anzeigen, Region/Aktualisierungszeit ausblenden, maximale Anzahl. Presets Neo/Metall/Neon/Flat angepasst. Nur mit Beispieldaten getestet (Test-HA lieferte keine DWD-Entitäten). Backup: `.pre-dwd.bak.js`.

### 2026-11-18 – Weather Forecast: Anzahl der Vorhersage-Einträge (Hauptchat)
- Neue Option `forecast_days` (1–48, Standard 5): wie viele Tage bzw. Stunden die Vorhersage zeigt. Backup: `.pre-forecast-days.bak.js`.

### 2026-11-18 – Großes Icon ausblenden, State-Schriftgröße, Wetter-Vorhersage, Style-Namen (Hauptchat)
- Battery, Light, State, Switch: neue Option „Großes Icon ausblenden" (`hide_main_icon`); bei Light/Switch/State wird der Statustext dann zum Schalter bzw. öffnet More-Info. Neue Option „Schriftgröße Status (px)" (`state_font_size`).
- Weather Forecast: `forecast_font_size`, `forecast_icon_size`, `forecast_icon_color` für die Vorhersage.
- Styles umbenannt: Morph (Glas), Morph (Neo-hell), Morph (Neo-dunkel), Morph (Metall). Backup: `.pre-icon-font-morph.bak.js`.

### 2026-11-18 – Alle Kartentypen: Option „Namen ausblenden" (Hauptchat)
- Neue Option `hide_title` im Editor (neben „Laufschrift"), wirkt in der Hauptdarstellung, Mediaplayer, Balken- und Energiekarte. Der Name entfällt, ein gewähltes Icon bleibt (Ausnahme Energiekarte: Titel samt Icon weg). Backup: `.pre-hide-name.bak.js`.

### 2026-11-17 – Mediaplayer: Popup-Zeilen passen in die Breite (Hauptchat)
- Grid-Spalten des Popups auf `minmax(0, 1fr)`: lange Titel werden gekürzt, Aktionsbuttons nicht mehr abgeschnitten; Album-Überschrift ohne Versionszusatz. Backup: `.pre-mp-fit.bak.js`.

### 2026-11-17 – Mediaplayer: Alben/Künstler/Playlists aus der Suche direkt abspielen (Hauptchat)
- Für Einträge mit can_expand und media_class album/artist/playlist/podcast/audiobook wird der Play-Button immer angezeigt (auch wenn die Suche can_play nicht liefert); startet ab dem ersten Titel (`replace`). Backup: `.pre-mp-albumplay.bak.js`.

### 2026-11-17 – Mediaplayer: Klick auf das Cover zeigt die Titel des Albums (Hauptchat)
- Cover ist jetzt ein Button: holt über `music_assistant.get_queue` die Album-URI des laufenden Titels (funktioniert auch für Spotify), öffnet das Popup direkt in der Titelliste; Klick auf einen Titel spielt ihn sofort (`replace`, Flag `mp.direct`, wird beim Schließen zurückgesetzt). Backup: `.pre-mp-cover.bak.js`.

### 2026-11-17 – Mediaplayer: Popup startet wieder in der Bibliotheksübersicht (Hauptchat)
- Beim Schließen (Esc, Backdrop, X, Medienauswahl-Button) werden Ansicht, Suche und Verlauf zurückgesetzt (`_mpReset`); beim Öffnen lädt die Übersicht neu. Backup: `.pre-mp-reset.bak.js`.

### 2026-11-17 – Mediaplayer: Titel/Alben/Künstler spielen im Popup sofort (Hauptchat)
- Ursache wie bei Radio: „Als Nächstes“ (mp_enqueue) startet nichts, solange der Player nicht spielt. Ordner (Künstler, Alben, Playlists …) und alle Einträge bei ruhendem Player werden jetzt mit `replace` gestartet. Backup: `.pre-mp-enqueue.bak.js`.

### 2026-11-17 – Mediaplayer: Popup folgt dem Karten-Style (Hauptchat)
- `dialog.mp-panel` hat eigene Regeln für neon, glassmorphism, neumorphism (hell/dunkel), flat, skeuomorph, minimal (Hintergrund, Rand, Radius, Schatten, Backdrop). Backup: `.pre-mp-popup-style.bak.js`.

### 2026-11-17 – Mediaplayer: Medienauswahl als Popup (Hauptchat)
- Medienauswahl öffnet als natives `<dialog>` (showModal), schließt per Backdrop-Klick/Esc. Visualizer-Umbau wurde zurückgenommen (Backup `.pre-mp-vis.bak.js`). Backup: `.pre-mp-popup.bak.js`.

### 2026-11-17 – Mediaplayer: Radiosender spielen sofort (Hauptchat)
- Ursache: `mp_enqueue: next` reiht Radiosender nur in die Warteschlange ein. Einträge `library://radio/…` bzw. media_class `radio` spielen beim Klick jetzt immer sofort (`replace`). Backup: `.pre-mp-radio.bak.js`.

### 2026-11-17 – Pi-hole: Ring in Neumorphismus/Skeuomorph (Hauptchat)
- Verteilungsring mit Mittelkreis `.ph-hole` und Schatten je Preset; Neumorphismus dunkel: aufgehellte Wertefarben. Backup: `.pre-ph-pie.bak.js`.

### 2026-11-17 – Pi-hole: Kacheln passen sich Neumorphismus/Skeuomorph an (Hauptchat)
- Preset-CSS für `.ph-tile` (Neumorphismus hell/dunkel: erhabene Kachel, Farbton als Wertefarbe; Skeuomorph: Metall-Kachel mit Farbbalken links). Backup: `.pre-ph-styles.bak.js`.

### 2026-11-17 – Pi-hole: Verlauf statt Fußzeile, Kacheln ausblendbar (Hauptchat)
- Kachel-Fußzeile entfernt; Mini-Verlauf 7 Tage (History-API, alle 5 Min.). Optionen `ph_show_history`, `ph_hide_queries|blocked|percent|domains`. Backup `.pre-ph-spark.bak.js`.

### 2026-11-17 – Pi-hole: Erkennung an deutsche Entitätsnamen angepasst (Hauptchat)
- Muster für „DNS-Abfragen“, „Eindeutige DNS-Clients/-Domains“, „Blockierte Anzeigen“ ergänzt; mit der echten Entitätsliste des Nutzers getestet. Backup: `.pre-pihole-names.bak.js`.

### 2026-11-17 – Neuer Kartentyp Pi-hole (Hauptchat)
- `card_type: pihole`: Hauptentität = Pi-hole-Status (binary_sensor), -Schalter oder ein Pi-hole-Sensor; weitere Entitäten automatisch über friendly_name-Präfix + Rollenname (de/en). Unverifiziert in echtem HA (HA war beim Test nicht ladbar).
- Zeigt Status, Ring Blockrate, Kacheln Anfragen/Blockiert heute, Verteilungsbalken Blockiert/Cache/Weitergeleitet, Schalter Aktivieren/Deaktivieren, Details (Domains auf Blockliste, Clients, Cache, Updates). Optionen `ph_show_graph`, `ph_show_toggle`. Backup: `.pre-pihole.bak.js`.

### 2026-11-16 – Neuer Kartentyp WashData (Hauptchat)
- `card_type: washdata`: Hauptentität = WashData-Zustandssensor (`sensor.<name>_zustand`/`_state`). Weitere Entitäten werden automatisch über das friendly_name-Präfix + Rollenname (deutsch/englisch) gefunden; manuell überschreibbar (`wd_program`, `wd_remaining`, `wd_progress`, `wd_power`, `wd_phase`, `wd_select`).
- Zeigt Zustand, Programm, Phase, Fortschrittsbalken, Restzeit; Programmauswahl (select), Buttons Pausieren/Fortsetzen/Entladen/Zyklusende erzwingen (nur passend zum Zustand); Programmübersicht aus Profil-Sensoren; Details (Leistung, Zyklen, Energie, letzter Zyklus, Wartung …).
- Optionen `wd_show_controls`, `wd_show_profiles`. Backup: `.pre-washdata.bak.js`.

### 2026-11-16 – Light: 5 Farben, viereckige Farbpalette (Hauptchat)
- Farbauswahl: 5 vordefinierte Farben (`light_colors` jetzt 5 Hex-Werte; Weißlampen: 5 Farbtemperaturen 2200–6500 K).
- Farbkreis ersetzt durch viereckige Palette (Farbton × Sättigung) unter den Farben, gleich breit; Klick sendet `hs_color`.
- Backup: `.pre-light-palette.bak.js`.

### 2026-11-16 – Light: Farbkreis, feste Höhe (Hauptchat)
- Farbauswahl: 3 Farben linksbündig, rechts Farbkreis (nativer Farbwähler, sendet `rgb_color`; nur bei Farblampen).
- Light-Karte hat feste Höhe wie Switch/State (Mitte 76 px + Fußzeile 24 px, Seitenbuttons ragen mittig über).
- Backup: `.pre-light-picker.bak.js`.

### 2026-11-16 – Light: Seitenbuttons und Panels (Hauptchat)
- Helligkeits-Schieberegler entfernt; Helligkeits-Button links, Farbpalette rechts vom Statustext.
- Klick ersetzt Glühlampe durch Farbauswahl (3 Farben) bzw. Schieberegler + 3 Stufen; erneuter Klick schließt.
- Option `light_colors` (3 Hex-Werte). Backup: `.pre-light-panels.bak.js`.

### 2026-11-16 – Light-Karte vereinheitlicht (Hauptchat)
- Light: schaltbare und dimmbare Lampen haben jetzt denselben Aufbau im Kreis-Stil: runder Schaltknopf (bei Farbwechsel plus Farb-Button), bei Dimmbarkeit zusätzlich ein Helligkeitsregler, darunter der Zustand (bei dimmbarer Lampe „Ein · 72 %“). Der Halbkreis-Dial entfällt, Knopf und Regler sind amber (`--u-warn`).
- `light` aus `UCP_DIAL_TYPES` entfernt: die Dial-Felder (Gaugebreite, Ziehen, Segmente, Schwellen, Knob, Animation) erscheinen im Editor nicht mehr. Bestehende Werte in der Konfiguration bleiben, werden aber ignoriert.
- Stand davor: `ha-ultimate-card-package.pre-light-unify.bak.js`.

### 2026-11-16 – Light-Höhe (Hauptchat)
- Light: Standard-Detail „Helligkeit“ ist jetzt standardmäßig ausgeblendet (`UCP_DEFAULT_HIDDEN.light = [0]`), damit die Karte nicht höher als nötig wird. Im Editor unter „Zusatzinformationen“ wieder einblendbar. Bereits gespeicherte Einstellungen bleiben unverändert.
- Stand davor: `ha-ultimate-card-package.pre-light-height.bak.js`.

### 2026-11-16 – Zusammenführung aller Chats (Hauptchat)
- Stand der Datei auf H:\ (275.761 Bytes, geändert 21:50) geprüft: enthält alle Änderungen aller Chats (Syntaxprüfung ok).
- Enthalten: Editor-Vereinheitlichung (Haupteinstellungen, „Kartenspezifische Einstellungen“, „Zusatzinformationen“ mit Zusatzwerten), Bar-Nullpunktmodus, Gauge-Nullpunkt, Graph-Farben und Legendenausrichtung, Mediaplayer-Erweiterungen, Style-Presets (Home-Assistant-Theme, Neon, Glassmorphism inkl. innerem Glasrahmen auf allen Kartentypen, Neumorphismus hell/dunkel, Flat, Skeuomorph, Minimal).
- Neu aus dem Hauptchat: Hauptentität im Editor nur mit sinnvollen Entitäten je Kartentyp (Slider, Battery, Gauge, Graph); Zusatzinformationen per Ziehen sortierbar (`detail_order`).
- Schnappschuss dieses Stands: `ha-ultimate-card-package.merged-20261116.js`. Die Master-Kopie im OneDrive-Ordner wurde auf diesen Stand gebracht (vorher veralteter Stand von 20:35).

### 2026-11-16 – Styles (Chat „Styles“)
- Neue Presets im Editor-Dropdown „Style“, für alle Kartentypen: `neumorphism` (hell), `neumorphism_dark`, `flat`, `skeuomorph`, `minimal` (Vorlage: justinmind.com Neumorphismus-Artikel).
- Preset-CSS am Ende von `UCP_STYLE`; `UCP_STYLES` um die neuen Einträge erweitert.
- Energy-Values-Karte: eigenes Stylesheet (`ucpApplyEnergyTheme`) um die neuen Presets ergänzt, inkl. Textfarben (`.title`, `.value`, `.label` …), weil die Karte sonst die Theme-Farben nutzt.
- Wieder eingespielt nach Überschreiben durch einen anderen Chat; Stand davor: `ha-ultimate-card-package.pre-styles-merge.bak.js`.
