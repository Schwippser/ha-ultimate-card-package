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
