/* HA Ultimate Card Package – i18n core (English = source language, German translation embedded; other languages: ./translations/<lang>.json) */
(() => {
  if (globalThis.__UCP_PKG_I18N) return;
  const stackUrl = () => { try { return (new Error().stack || "").match(/https?:\/\/[^\s)]+?ha-ultimate-card-package[^\s):]*\.js[^\s):]*/)?.[0] ?? ""; } catch { return ""; } };
  const scriptUrl = (() => { try { return document.currentScript?.src || stackUrl(); } catch { return ""; } })();
  const base = scriptUrl ? scriptUrl.replace(/[?#].*$/, "").replace(/[^/]*$/, "") : "/local/scripte/ha-ultimate-card-package/";
  const query = (scriptUrl.match(/\?[^#]*/) || [""])[0];
  const state = { dict: null, requested: undefined, cache: {}, listeners: new Set(), seen: new WeakSet() };
  const normalize = (value) => String(value || "en").toLowerCase().replace("_", "-");
  const EMBEDDED = {"de":{" min.":" Min.","\"{name}\" will be deleted. Cards that already use it keep their values.":"„{name}“ wird gelöscht. Karten, die es schon verwenden, behalten ihre Werte.","'background_colors' must be an object, e.g. solar: \"#ff9800\"":"'background_colors' muss ein Objekt sein, z. B. solar: \"#ff9800\"","'custom_values' must be a list, e.g. - entity: sensor.my_sensor":"'custom_values' muss eine Liste sein, z. B. - entity: sensor.mein_sensor","'names' must be an object, e.g. solar: \"PV\"":"'names' muss ein Objekt sein, z. B. solar: \"PV\"","'trends' must be an object, e.g. solar: false":"'trends' muss ein Objekt sein, z. B. solar: false","'values' must be a list":"'values' muss eine Liste sein",". Allowed: ":". Erlaubt: ","12 hours":"12 Stunden","24 hours":"24 Stunden","Above the hub":"Über dem Hub","Absolute difference":"Absolute Differenz","Accent color when heating (hex, RGB or theme variable)":"Akzentfarbe beim Heizen (Hex, RGB oder Theme-Variable)","Action failed.":"Aktion fehlgeschlagen.","Active":"Aktiv","Active Entities":"Aktive Entitäten","Active clients":"Clients aktiv","Add a grid sensor, solar systems, batteries or consumers in the card settings.":"Füge in den Karteneinstellungen einen Netz-Sensor, Solaranlagen, Speicher oder Verbraucher hinzu.","Add extra value":"Zusatzwert hinzufügen","Add solar hubs, a grid sensor, batteries or consumers in the card settings.":"Füge in den Karteneinstellungen Solar-Hubs, einen Netz-Sensor, Speicher oder Verbraucher hinzu.","Add to end of queue":"Ans Ende der Warteschlange","Add to queue":"Zur Warteschlange","Additional entities (optional)":"Zusätzliche Entitäten (optional)","Advance information":"Vorabinformation","Advance warning (entity, optional – otherwise automatic)":"Vorwarnung (Entität, optional – sonst automatisch)","Air humidity":"Luftfeuchte","Alignment":"Ausrichtung","All series":"Alle Serien","Always show description":"Beschreibung immer anzeigen","Always show details":"Immer Details anzeigen","Animate flow":"Fluss animieren","Animate values":"Werte animieren","Anti-crease":"Knitterschutz","Apply":"Anwenden","Area":"Bereich","Artist":"Interpret","Assign entities manually (optional, otherwise automatic)":"Entitäten manuell zuordnen (optional, sonst automatisch)","Attribute (optional)":"Attribut (optional)","Attribute instead of state":"Attribut anstelle des Zustands","Autarky":"Autarkie","Automatic":"Automatisch","Automatic (symmetric)":"Automatisch (symmetrisch)","Average":"Durchschnitt","Axes and legend":"Achsen und Legende","BMS value (optional)":"BMS-Wert (optional)","Back":"Zurück","Background (color or gradient)":"Hintergrund (Farbe oder Verlauf)","Background (off)":"Hintergrund (aus)","Background (on)":"Hintergrund (an)","Background color":"Hintergrundfarbe","Background color (rgba)":"Hintergrundfarbe (rgba)","Background colors and opacity of the values":"Hintergrundfarben und Deckkraft der Werte","Background pulses green when finished":"Hintergrund pulsiert grünlich, wenn fertig","Bar":"Bar · Balken","Bar border color (optional)":"Rahmenfarbe Balken (optional)","Bar border width (px)":"Rahmendicke Balken (px)","Bar height in px":"Höhe der Balken in px","Bar thickness in px (optional)":"Balkendicke in px (optional)","Bars":"Balken","Battery":"Battery · Batterie","Battery charge":"Batterie laden","Battery charging power sensor":"Batterie-Ladeleistung (Sensor)","Battery discharge":"Batterie entladen","Battery discharging power sensor":"Batterie-Entladeleistung (Sensor)","Battery name (optional)":"Batterie-Name (optional)","Battery position":"Position der Batterie","Battery power sensor (alternative: one sensor with sign)":"Batterie-Leistungssensor (Alternative: ein Sensor mit Vorzeichen)","Battery: positive value = discharging":"Batterie: positiver Wert = Entladen","Below the hub":"Unter dem Hub","Blocklist":"Blockliste","Border color":"Rahmenfarbe","Border style":"Rahmenart","Border width (px)":"Rahmenstärke (px)","Both":"Beides","Bottom":"Unten","Bottom → top":"Unten → oben","Brightness":"Helligkeit","By name":"Nach Name","By total":"Nach Gesamtzahl","Cancel":"Abbrechen","Canceled":"Abgebrochen","Capacity":"Kapazität","Car charge level sensor (%)":"Ladestand des Autos (Sensor, %)","Car charging power sensor":"Ladeleistung des Autos (Sensor)","Car icon":"Auto-Icon","Car name (optional)":"Auto-Name (optional)","Card (off)":"Karte (aus)","Card (on)":"Karte (an)","Card type":"Kartentyp","Card-specific settings":"Kartenspezifische Einstellungen","Cards could not be created.":"Karten konnten nicht erstellt werden.","Center":"Mitte","Centered":"Zentriert","Charge level":"Ladestand","Charge level (%)":"Ladestand (%)","Charging":"Lädt","Charging power":"Ladeleistung","Chart type":"Diagrammtyp","Chip text":"Chip-Text","Choose color":"Farbe wählen","Choose music source …":"Musikquelle wählen …","Climate":"Climate · Klima","Clock":"Clock · Uhr","Clock (Music)":"Clock (Musik)","Close":"Schließen","Color":"Farbe","Color ":"Farbe ","Color (optional)":"Farbe (optional)","Color intensity of the boxes (%)":"Farbintensität der Boxen (%)","Color palette":"Farbpalette","Color picker colors (5 colors, e.g. #ff3b30, #ffb347, var(--primary-color), #4cd964, #4f9cff)":"Farben der Farbauswahl (5 Farben, z. B. #ff3b30, #ffb347, var(--primary-color), #4cd964, #4f9cff)","Color steps":"Farbstufen","Color temperature":"Farbtemperatur","Colored trend (good/bad)":"Trend farbig (gut/schlecht)","Colors and fill":"Farben und Füllung","Compact":"Kompakt","Compact (one row)":"Kompakt (eine Zeile)","Composer":"Komponist","Confirm unloading":"Entladen bestätigen","Consumers":"Verbraucher","Consumption":"Verbrauch","Control button size (px, default 44)":"Größe Bedienknöpfe (px, Standard 44)","Could not set the temperature.":"Temperatur konnte nicht eingestellt werden.","Covers and blinds":"Rollläden und Jalousien","Covers open":"Rollläden offen","Critical color (hex, default: theme error color)":"Farbe Kritisch (Hex, Standard: Fehlerfarbe des Themes)","Critical threshold":"Schwelle Kritisch","Current":"Aktuell","Current ":"Aktuell ","Custom presets":"Eigene Presets","Custom values (entities)":"Eigene Werte (Entitäten)","Cycles":"Zyklen","Daily":"Täglich","Dashed":"Gestrichelt","Date and time format (e.g. dd. MMMM or hh:mm)":"Datums- und Uhrzeitformat (z. B. dd. MMMM oder hh:mm)","Date font size":"Schriftgröße Datum","Daylight":"Tageslicht","Decimals":"Nachkommastellen","Decimals (empty = default)":"Dezimalstellen (leer = Standard)","Decimals (kW)":"Nachkommastellen (kW)","Decrease temperature":"Temperatur senken","Delayed start":"Startverzögerung","Delete":"Löschen","Delete preset?":"Preset löschen?","Detailed":"Ausführlich","Detect automatically":"Automatisch erkennen","Disable":"Deaktivieren","Disabled":"Deaktiviert","Discard":"Verwerfen","Discharging":"Entlädt","Display":"Anzeige","Distributed":"Verteilt","Domains on blocklist":"Domains auf Blockliste","Domains on lists":"Domains auf Listen","Doors":"Türen","Doors open":"Türen offen","Dotted":"Gepunktet","Double":"Doppelt","Double-tap action card":"Double-Tap-Action Karte","Double-tap action icon":"Double-Tap-Action Icon","Double-tap action name":"Double-Tap-Action Name","Double-tap action state":"Double-Tap-Action State","Drag to reorder":"Zum Sortieren ziehen","Due":"Fällig","E":"O","ENE":"ONO","ESE":"OSO","Edit":"Bearbeiten","Edit extra value":"Zusatzwert bearbeiten","Effect":"Effekt","Elapsed":"Verstrichen","Electric car":"E-Auto","Enable":"Aktivieren","Ending":"Endet","Energy":"Energie","Energy Power Flow":"Energy Power Flow (Energiefluss)","Energy Values":"Energy Values · Energiewerte","Energy collection key (optional)":"Energy-Collection-Key (optional)","Energy values":"Energie-Werte","Entities (one bar per entity)":"Entitäten (ein Balken pro Entität)","Entities for the history":"Entitäten für den Verlauf","Entity":"Entität","Entity as data source":"Entität als Datenquelle","Entity as data source (optional)":"Entität als Datenquelle (optional)","Entity state":"Entitätszustand","Exclude entities":"Entitäten ausschließen","Extra information":"Zusatzinformationen","Extra information font size":"Schriftgröße Zusatzinformationen","Extra values (entities)":"Zusatzwerte (Entitäten)","Extra values (optional)":"Zusatzwerte (optional)","Extreme weather warning":"Extreme Unwetterwarnung","Fan":"Lüfter","Fans":"Ventilatoren","Fans on":"Ventilatoren an","Feed-in":"Einspeisung","Feed-in power sensor (optional, if the grid sensor only counts import)":"Einspeise-Sensor (optional, wenn der Netz-Sensor nur den Bezug zählt)","Fill below the line":"Füllung unter der Linie","Finished":"Fertig","First series only":"Nur erste Serie","Flat (dark blue/orange)":"Flat (dunkelblau/orange)","Folder":"Ordner","Follow energy date selection":"Energy-Date-Selection folgen","Font color (off)":"Schriftfarbe (aus)","Font color (on)":"Schriftfarbe (an)","Force end of cycle":"Zyklusende erzwingen","Forecast border":"Forecast Rahmen","Forecast font size (px)":"Schriftgröße Vorhersage (px)","Forecast icon color (hex, RGB, color name or theme variable)":"Iconfarbe Vorhersage (Hex, RGB, Farbname oder Theme-Variable)","Forecast icon size (px)":"Icongröße Vorhersage (px)","Forecast period":"Vorhersagezeitraum","Forwarded":"Weitergeleitet","From cache":"Aus Cache","Full width":"Volle Breite","Gas consumption":"Gasverbrauch","Gauge":"Gauge · Rundanzeige","Gauge width (px)":"Gaugebreite (px)","Glowing bars with color steps and threshold markers. Uses the HA theme, horizontal or vertical layout, optionally with LED look and marquee.":"Glühende Balken mit Farbstufen und Schwellenmarkierungen. Übernimmt das HA-Theme, Layout horizontal oder vertikal, optional mit LED-Look und Laufschrift.","Gradient direction":"Richtung des Verlaufs","Gradient end color (optional)":"Endfarbe des Verlaufs (optional)","Gradient end opacity (0–1)":"Deckkraft Verlaufsende (0–1)","Gradient start opacity (0–1)":"Deckkraft Verlaufsstart (0–1)","Graph":"Graph · Verlauf","Green from":"Grün ab","Grid":"Raster","Grid export":"Einspeisung","Grid import":"Netzbezug","Grid name (optional)":"Netz-Name (optional)","Grid power sensor":"Netz-Leistungssensor","Groove":"Rille","Groups to show":"Anzuzeigende Gruppen","Hide \"Domains on lists\" tile":"Kachel „Domains auf Listen“ ausblenden","Hide \"Percent blocked\" tile":"Kachel „Anteil blockiert“ ausblenden","Hide \"Queries blocked\" tile":"Kachel „Anfragen blockiert“ ausblenden","Hide \"Total queries\" tile":"Kachel „Anfragen gesamt“ ausblenden","Hide Home Assistant media (\"Media\" folder)":"Home-Assistant-Medien (Ordner „Medien“) ausblenden","Hide X axis":"X-Achse ausblenden","Hide X axis labels":"X-Achsenbeschriftung ausblenden","Hide Y axis":"Y-Achse ausblenden","Hide Y axis labels":"Y-Achsenbeschriftung ausblenden","Hide autarky tile":"Kachel Autarkie ausblenden","Hide card and detail icons":"Karten- und Detail-Icons ausblenden","Hide consumption tile":"Kachel Hausverbrauch ausblenden","Hide extra information":"Zusatzinformation ausblenden","Hide grid lines":"Gitterlinien ausblenden","Hide icon":"Icon ausblenden","Hide legend":"Legende ausblenden","Hide name":"Name ausblenden","Hide names":"Namen ausblenden","Hide production tile":"Kachel Erzeugung ausblenden","Hide region":"Region ausblenden","Hide self-consumption tile":"Kachel Eigenverbrauch ausblenden","Hide status":"Status ausblenden","Hide tiles":"Kacheln ausblenden","Hide update time":"Aktualisierungszeit ausblenden","History could not be loaded.":"Verlauf konnte nicht geladen werden.","History of the last 7 days":"Verlauf der letzten 7 Tage","History of the last seven days":"Verlauf der letzten sieben Tage","Hold action card":"Hold-Action Karte","Hold action icon":"Hold-Action Icon","Hold action name":"Hold-Action Name","Hold action state":"Hold-Action State","Home":"Haus","Home Assistant theme":"Home-Assistant-Theme","Home batteries":"Heimspeicher","Home batteries (AC, at the home grid)":"Heimspeicher (AC, am Hausnetz)","Home battery":"Heimspeicher","Home consumption":"Hausverbrauch","Home consumption sensor (optional, otherwise calculated)":"Hausverbrauch-Sensor (optional, sonst berechnet)","Hour marks":"Stundenmarken","Hourly":"Stündlich","Hub":"Hub","Humidity":"Feuchte","Icon (off)":"Icon (aus)","Icon (on)":"Icon (an)","Icon (optional, e.g. mdi:lightbulb)":"Symbol (optional, z. B. mdi:lightbulb)","Icon color":"Farbe Icon","Icon size (px)":"Icongröße (px)","Import":"Bezug","Increase temperature":"Temperatur erhöhen","Inner shadow (angle)":"Schatten innen (Winkel)","Inner shadow (color)":"Schatten innen (Farbe)","Inner shadow (opacity)":"Schatten innen (Deckkraft)","Inner shadow (size)":"Schatten innen (Größe)","Interrupted":"Unterbrochen","Invalid configuration":"Ungültige Konfiguration","Inverter":"Wechselrichter","Inverter AC output sensor (optional)":"AC-Ausgang des Wechselrichters (Sensor, optional)","Inverter and home":"Wechselrichter und Haus","Inverter input label (e.g. A)":"Bezeichnung des Wechselrichter-Eingangs (z. B. A)","Inverter name (optional)":"Wechselrichter-Name (optional)","Key figures (tiles)":"Kennzahlen (Kacheln)","Kilowatt (kW)":"Kilowatt (kW)","Lamps":"Lampen","Lamps on":"Lampen an","Large":"Groß","Large (with cover)":"Groß (mit Cover)","Last 7 days history in the tiles":"Verlauf der letzten 7 Tage in den Kacheln","Last cycle":"Letzter Zyklus","Last cycle cost":"Kosten letzter Zyklus","Last cycle energy":"Energie letzter Zyklus","Last value":"Letzter Wert","Layout":"Darstellung","Left":"Links","Left → right":"Links → rechts","Legend alignment":"Ausrichtung der Legende","Less":"Weniger","Light":"Light · Licht","Line":"Linie","Line width (px)":"Linienstärke (px)","List":"Liste","Loading energy data…":"Lade Energiedaten…","Loading history …":"Verlauf wird geladen …","Loading …":"Lädt …","Loading…":"Lädt…","Locks":"Schlösser","Low-carbon energy":"CO₂-neutraler Strom","Maintenance":"Wartung","Manage custom presets":"Eigene Presets verwalten","Marquee":"Laufschrift","Marquee for long names":"Laufschrift bei langen Namen","Marquee speed in px per second":"Laufschrift-Tempo in px pro Sekunde","Maximum number of warnings":"Maximale Anzahl Warnungen","Maximum power for line width (W, optional)":"Maximale Leistung für die Linienstärke (W, optional)","Maximum rows":"Maximale Zeilenanzahl","Maximum value":"Maximalwert","Media player for music cover":"Mediaplayer für Musikcover","Media players":"Mediaplayer","Mediaplayer":"Mediaplayer · Medienplayer","Medium":"Mittel","Middle":"Mittig","Minimal":"Minimal","Minimum value":"Minimalwert","Minute marks":"Minutenmarken","Mode":"Modus","More":"Mehr","More information":"Weitere Informationen","Morph (glass)":"Morph (Glas)","Morph (metal)":"Morph (Metall)","Morph (neo dark)":"Morph (Neo-dunkel)","Morph (neo light)":"Morph (Neo-hell)","Move value":"Value verschieben","Move value via drag and drop":"Value per Drag-and-drop verschieben","Music":"Musik","Music library":"Musikbibliothek","Music source":"Musikquelle","Mute":"Stumm","My preset":"Mein Preset","NE":"NO","NNE":"NNO","Name":"Name","Name (e.g. floor or area)":"Name (z. B. Etage oder Bereich)","Name (off)":"Name (aus)","Name (on)":"Name (an)","Name color":"Farbe Name","Name font size (px)":"Schriftgröße Namen (px)","Names of the values (empty = default)":"Bezeichnungen der Werte (leer = Standard)","Neon (Flow)":"Neon (Flow)","Next track":"Nächster Titel","Next up":"Als Nächstes","No action":"Keine Aktion","No album is known for this track.":"Zu diesem Titel ist kein Album bekannt.","No area":"Kein Bereich","No border":"Kein Rahmen","No data available for this statistic function.":"Keine Daten für diese Statistikfunktion verfügbar.","No data yet":"Noch keine Daten","No entries.":"Keine Einträge.","No fill":"Keine Füllung","No forecast available.":"Keine Vorhersage verfügbar.","No history data available.":"Keine Verlaufsdaten verfügbar.","No marks":"Keine Marken","No presets saved yet.":"Noch keine Presets gespeichert.","No results.":"Keine Treffer.","No slider is available for this entity.":"Für diese Entität ist kein Schieberegler verfügbar.","No values selected or no matching sources in the energy dashboard.":"Keine Werte ausgewählt oder keine passenden Quellen im Energy-Dashboard.","No warning":"Keine Warnung","Normal color (hex, default: theme primary color)":"Farbe Normal (Hex, Standard: Primärfarbe des Themes)","Normal threshold":"Schwelle Normal","Nothing active":"Nichts aktiv","Now":"Jetzt","Number of LED segments":"Anzahl LED-Segmente","Number of PV inputs":"Anzahl PV-Eingänge","Number of forecast entries (days or hours)":"Anzahl Einträge in der Vorhersage (Tage bzw. Stunden)","Off":"Aus","On tap":"Beim Antippen","Opacity":"Deckkraft","Operating mode":"Betriebsmodus","Order (drag the handle)":"Reihenfolge (am Griff ziehen)","Outer shadow (angle)":"Schatten außen (Winkel)","Outer shadow (color)":"Schatten außen (Farbe)","Outer shadow (opacity)":"Schatten außen (Deckkraft)","Outer shadow (size)":"Schatten außen (Größe)","Output":"Ausgang","Output to inverter (power, optional)":"Ausgang zum Wechselrichter (Leistung, optional)","Override background (optional, CSS color or gradient)":"Hintergrund überschreiben (optional, CSS-Farbe oder Verlauf)","Override unit (optional)":"Einheit überschreiben (optional)","PV input 1 (power)":"PV-Eingang 1 (Leistung)","PV input 2 (power)":"PV-Eingang 2 (Leistung)","PV input 3 (power)":"PV-Eingang 3 (Leistung)","PV input 4 (power)":"PV-Eingang 4 (Leistung)","Panel":"Panel","Pause cycle":"Pausieren","Paused":"Pausiert","Paused by user":"Vom Nutzer pausiert","Percent":"Prozent","Percent blocked":"Anteil blockiert","Period in hours":"Zeitraum in Stunden","Phase sensor":"Phasen-Sensor","Pi-hole · DNS ad blocker":"Pi-hole · DNS-Werbeblocker","Play":"Abspielen","Play next":"Als Nächstes abspielen","Play now (insert into queue)":"Sofort abspielen (in Warteschlange einfügen)","Play now (replace queue)":"Sofort abspielen (Warteschlange ersetzen)","Players active":"Wiedergabe aktiv","Playlist":"Wiedergabeliste","Please select an entity.":"Bitte eine Entität auswählen.","Please select at least one entity.":"Bitte mindestens eine Entität auswählen.","Please specify at least one entity under 'entities'.":"Bitte mindestens eine Entität unter 'entities' angeben.","Popup":"Popup","Popup dashboard (URL path, default: popups)":"Popup-Dashboard (URL-Pfad, Standard: popups)","Popup dashboard could not be loaded:":"Popup-Dashboard konnte nicht geladen werden:","Popup not found:":"Popup nicht gefunden:","Popup width":"Popup-Breite","Positive value = discharging":"Positiver Wert = Entladen","Positive value = feed-in":"Positiver Wert = Einspeisung","Power":"Leistung","Power grid":"Stromnetz","Power sensor":"Leistungs-Sensor","Power sensors (summed)":"Leistungs-Sensoren (summiert)","Pressure":"Druck","Trend comparison for the running period":"Trendvergleich für den laufenden Zeitraum","Previous period up to the same time":"Vorzeitraum bis zur gleichen Uhrzeit","Complete previous period":"Kompletter Vorzeitraum","Previous period":"Vorperiode","Previous track":"Vorheriger Titel","Profile":"Profil","Program selection (select)":"Programmauswahl (select)","Program sensor":"Programm-Sensor","Progress sensor":"Fortschritt-Sensor","Projected energy":"Projizierte Energie","Queries blocked":"Anfragen blockiert","Query distribution":"Verteilung der Anfragen","Ready":"Bereit","Recommendations":"Empfehlungen","Red from":"Rot ab","Remaining":"Restzeit","Remaining ":"Restzeit ","Remaining runtime":"Restlaufzeit","Remaining time":"Restzeit","Remaining time sensor":"Restzeit-Sensor","Remove":"Entfernen","Rename":"Umbenennen","Rename preset":"Preset umbenennen","Repeat":"Wiederholen","Resume":"Fortsetzen","Ridge":"Kante","Right":"Rechts","Right → left":"Rechts → links","Round temperature":"Temperatur runden","Running":"Läuft","SE":"SO","SSE":"SSO","Save":"Speichern","Save current styling …":"Aktuelles Styling speichern …","Save preset":"Preset speichern","Save preset?":"Preset speichern?","Saves this card's styling as a new preset.":"Speichert das Styling dieser Karte als neues Preset.","Scale marks":"Skalenmarken","Search music":"Musik suchen","Search …":"Suchen …","Search:":"Suche:","Search: ":"Suche: ","Segmented bars (LED look)":"Segmentierte Balken (LED-Look)","Select program":"Programm wählen","Self-consumption":"Eigenverbrauch","Self-sufficiency":"Autarkie","Series colors (comma-separated, e.g. #ff9800, rgb(0,150,136), var(--u-good))":"Farben der Serien (kommagetrennt, z. B. #ff9800, rgb(0,150,136), var(--u-good))","Set brightness":"Helligkeit einstellen","Set value":"Wert einstellen","Set value by dragging":"Wert durch Ziehen einstellen","Severe weather warning":"Unwetterwarnung","Shadow (off)":"Schatten (aus)","Shadow (off) – CSS or theme variable":"Schatten (aus) – CSS oder Theme-Variable","Shadow (on)":"Schatten (an)","Shadow (on) – CSS or theme variable":"Schatten (an) – CSS oder Theme-Variable","Show":"Anzeigen","Show advance information":"Vorabinformationen anzeigen","Show animated music visualizer":"Animierten Musik-Visualizer anzeigen","Show area":"Bereich anzeigen","Show border":"Rahmen anzeigen","Show charge level in percent":"Ladestand in Prozent anzeigen","Show chart (ring and distribution)":"Grafik anzeigen (Ring und Verteilung)","Show controls":"Bedienelemente anzeigen","Show cover":"Cover anzeigen","Show current weather":"Aktuelles Wetter anzeigen","Show date":"Datum anzeigen","Show daylight bar":"Tageslicht-Leiste anzeigen","Show enable/disable switch":"Schalter zum Aktivieren/Deaktivieren anzeigen","Show forecast":"Vorhersage anzeigen","Show group names":"Gruppennamen anzeigen","Show hands":"Zeiger anzeigen","Show icon":"Icon anzeigen","Show icons":"Icons anzeigen","Show last change":"Letzte Änderung anzeigen","Show legend":"Legende anzeigen","Show music cover as background":"Musikcover als Hintergrund anzeigen","Show music library (Music Assistant)":"Musikbibliothek (Music Assistant) anzeigen","Show mute button":"Stummschalten-Taste anzeigen","Show on/off button":"Ein/Aus-Knopf anzeigen","Show operating modes":"Betriebsmodi anzeigen","Show period":"Zeitraum anzeigen","Show program overview":"Programmübersicht anzeigen","Show progress bar":"Fortschrittsbalken anzeigen","Show room names under the icons":"Raumnamen unter den Icons anzeigen","Show round knob":"Runden Knopf anzeigen","Show seconds":"Sekunden anzeigen","Show selection chips in the card":"Auswahl-Chips in der Karte anzeigen","Show shuffle and repeat":"Zufall und Wiederholen anzeigen","Show source selection":"Quellenauswahl anzeigen","Show the album of this track":"Titel des Albums anzeigen","Show thresholds as markers":"Schwellen als Markierung anzeigen","Show title":"Titel anzeigen","Show trend":"Trend anzeigen","Show trendline":"Trendlinie anzeigen","Show values in the cells":"Werte in den Zellen anzeigen","Show volume slider":"Lautstärkeregler anzeigen","Show weather warnings":"Wetterwarnungen anzeigen","Shuffle":"Zufällige Wiedergabe","Significant weather warning":"Markante Wetterwarnung","Size":"Größe","Slider":"Slider · Schieberegler","Small":"Klein","Solar":"Solar","Solar hubs":"Solar-Hubs","Solar production":"Solarerzeugung","Solar systems":"Solaranlagen","Solar systems (directly at the inverter)":"Solaranlagen (direkt am Wechselrichter)","Solid":"Durchgezogen","Sort rows":"Zeilen sortieren","Source":"Quelle","Species detections per hour":"Artnachweise pro Stunde","Start playback":"Wiedergabe","Start radio":"Radio starten","Starting":"Startet","State":"State · Zustand","State (off)":"State (aus)","State (on)":"State (an)","State color":"Farbe State","Station":"Sender","Statistic function":"Statistikfunktion","Statistic value":"Wert aus Statistik","Status colors":"Status-Farben","Status font size (px)":"Schriftgröße Status (px)","Stop":"Stopp","Stored for your HA user, available in every card. A preset contains colors, background, border, shadow, status colors, font and icon sizes and the style.":"Gespeichert für deinen HA-Benutzer, in jeder Karte verfügbar. Ein Preset enthält Farben, Hintergrund, Rahmen, Schatten, Status-Farben, Schrift- und Icongrößen und den Style.","Subtitle":"Untertitel","Sum/change in period":"Summe/Änderung im Zeitraum","Sun entity (for the daylight bar)":"Sonnen-Entität (für die Tageslicht-Leiste)","Switch":"Switch · Schalter","Switch lamps, details for others":"Lampen schalten, bei anderen Details","Switches":"Schalter","Switches on":"Schalter an","Switching …":"Schaltet …","Tap action card":"Tap-Action Karte","Tap action icon":"Tap-Action Icon","Tap action name":"Tap-Action Name","Tap action state":"Tap-Action State","Target temperature":"Zieltemperatur","Text when nothing is active":"Text, wenn nichts aktiv ist","The energy dashboard has not been set up yet.":"Das Energy-Dashboard ist noch nicht eingerichtet.","The library could not be loaded.":"Die Bibliothek konnte nicht geladen werden.","The search failed.":"Die Suche ist fehlgeschlagen.","The styling values of this card will be reset so the selected style takes full effect. Save as a custom preset first?":"Die Styling-Werte dieser Karte werden zurückgesetzt, damit der gewählte Style wieder rein wirkt. Vorher als eigenes Preset speichern?","Many card types with a shared visual editor.":"Viele Kartentypen mit einem gemeinsamen visuellen Editor.","Sources in energy dashboard:":"Quellen im Energie-Dashboard:","Collection: –":"Sammlung: –","Icon (optional)":"Icon (optional)","Name (optional)":"Name (optional)","Forecast max / min":"Vorhersage Max / Min","Card not found in the popup:":"Karte im Popup nicht gefunden:","This popup has no cards.":"Dieses Popup enthält keine Karten.","Thresholds":"Schwellenwerte","Tiles":"Kacheln","Time font size":"Schriftgröße Uhrzeit","Time format":"Zeitformat","Time series":"Zeitverlauf","Time zone (optional, e.g. Europe/Berlin)":"Zeitzone (optional, z. B. Europe/Berlin)","Title":"Titel","Title (optional)":"Titel (optional)","Today":"Heute","Today: feed-in (kWh sensor, optional)":"Heute: Einspeisung (kWh-Sensor, optional)","Today: grid import (kWh sensor, optional)":"Heute: Netzbezug (kWh-Sensor, optional)","Today: home consumption (kWh sensor, optional)":"Heute: Hausverbrauch (kWh-Sensor, optional)","Today: solar production (kWh sensor, optional)":"Heute: Solarerzeugung (kWh-Sensor, optional)","Toggle":"Schalten","Top":"Oben","Top → bottom":"Oben → unten","Total clients":"Clients gesamt","Total duration":"Gesamtdauer","Total energy":"Energie gesamt","Total queries":"Anfragen gesamt","Track":"Titel","Trend display":"Trend-Darstellung","Trend is good for":"Trend ist gut bei","Turn all off":"Alle ausschalten","Turn off":"Ausschalten","Turn on":"Einschalten","Twice daily":"Zweimal täglich","UV index":"UV-Index","Unavailable":"Nicht verfügbar","Unique domains":"Eindeutige Domains","Unit":"Einheit","Unit (optional)":"Einheit (optional)","Unit of the power sensors":"Einheit der Leistungs-Sensoren","Unknown":"Unbekannt","Unknown values: ":"Unbekannte Werte: ","Unloading":"Entladen","Unlocked":"Entriegelt","Updated:":"Stand:","Use color gradient":"Farbverlauf verwenden","Use design from HA theme":"Design aus dem HA-Theme übernehmen","Values to show":"Anzuzeigende Werte","Vertical":"Vertikal","Vertical position of date, time and extra info":"Vertikale Position von Datum, Uhrzeit und Zusatzinfos","Volume":"Lautstärke","Warning (entity, e.g. DWD current warning level)":"Warnung (Entität, z. B. DWD aktuelle Warnstufe)","Warning color (hex, default: theme warning color)":"Farbe Warnung (Hex, Standard: Warnfarbe des Themes)","Warning layout":"Warnungs-Layout","Warning threshold":"Schwelle Warnung","WashData · Washer/Dryer":"WashData · Waschmaschine/Trockner","Water consumption":"Wasserverbrauch","Watt (W)":"Watt (W)","Weather Forecast":"Weather Forecast · Wettervorhersage","Weather Warning":"Wetter-Warnung","Weather warning":"Wetterwarnung","Weather warnings":"Wetterwarnungen","When tapping a track":"Beim Antippen eines Titels","Windows":"Fenster","Windows open":"Fenster offen","Yellow from":"Gelb ab","Zero-point mode (negative and positive values; Min < 0 < Max)":"Nullpunkt-Modus (negative und positive Werte; Min < 0 < Max)","decrease":"Rückgang","from":"ab","increase":"Anstieg","min.":"Min.","more":"weitere","no CO2 signal entity found":"keine CO2-Signal-Entität gefunden","no grid consumption configured":"kein Netzbezug konfiguriert","pp":"%-Pkt.","until":"bis","until ":"bis ","{n} detection at {h}:00":"{n} Erkennung um {h}:00 Uhr","{n} detections at {h}:00":"{n} Erkennungen um {h}:00 Uhr","BirdNET":"BirdNET","Overview":"Übersicht","Analysis summary":"Analysen – Zusammenfassung","Species analysis":"Arten – Analysen","Daily activity":"Tagesaktivität","Just heard":"Gerade gehört","Species are identified in real time":"Arten werden in Echtzeit identifiziert","All quiet – no birds detected right now":"Alles ruhig – derzeit keine Vögel erkannt","New and returning species":"Neue und zurückkehrende Arten","First detections and recently returned species":"Erstnachweise und kürzlich zurückgekehrte Arten","{n} detection":"{n} Erkennung","{n} detections":"{n} Erkennungen","Max.":"Max.","Total detections":"Erkennungen gesamt","Unique species":"Einzigartige Arten","Average confidence":"Durchschn. Konfidenz","Most frequent":"Häufigste","Top 10 species":"Top 10 Arten","Detections by time of day":"Erkennungen nach Tageszeit","Night":"Nacht","Morning":"Morgen","Day":"Tag","Evening":"Abend","Detection trend":"Erkennungstrend","Last {n} days":"Letzte {n} Tage","Recent detections":"Aktuelle Erkennungen","Date and time":"Datum & Zeit","Species":"Art","Confidence":"Konfidenz","Time of day":"Tageszeit","Species total":"Arten gesamt","Overall average":"Gesamtdurchschnitt","Filter data":"Daten filtern","Sort by":"Sortieren nach","Most detections":"Meiste Erkennungen","Highest confidence":"Höchste Konfidenz","Newest":"Neueste","Search species":"Art suchen","Search by name…":"Nach Name suchen…","Species list":"Artenliste","Detections":"Erkennungen","First":"Erste","Statistics entity (BirdNET package)":"Statistik-Entität (BirdNET-Package)","Start tab":"Start-Tab","Fewest detections":"Wenigste Erkennungen","Name (A–Z)":"Name (A–Z)","Name (Z–A)":"Name (Z–A)","Recently first seen":"Kürzlich zum ersten Mal gesehen","Earliest first seen":"Am frühesten zum ersten Mal gesehen","Recently last seen":"Kürzlich zuletzt gesehen","Earliest last seen":"Am frühesten zuletzt gesehen","Lowest confidence":"Niedrigste Konfidenz","Highest max. confidence":"Höchste maximale Konfidenz","Lowest max. confidence":"Niedrigste maximale Konfidenz","Last":"Zuletzt","All time":"Gesamter Zeitraum","Image URL (optional)":"Bild-URL (optional)","Species images from the internet":"Artenbilder aus dem Internet","Automatic (width of the section)":"Automatisch (Breite des Abschnitts)","Full width (90 % of the window)":"Volle Breite (90 % des Fensters)","Style wrapper (other cards)":"Style-Hülle (andere Karten)","Wrapped card (YAML, e.g. type: energy-date-selection)":"Eingebettete Karte (YAML, z. B. type: energy-date-selection)","No wrapped card configured.":"Keine Karte eingebettet.","Card could not be created:":"Karte konnte nicht erstellt werden:","Vertical padding of the wrapped card (px, default 4)":"Vertikaler Innenabstand der eingebetteten Karte (px, Standard 4)","Hide the footer card of the popup dashboard in popups":"Footer-Karte des Popup-Dashboards in Popups ausblenden","Names per entity (optional)":"Namen je Entität (optional)","Climate view":"Ansicht","Dial":"Rad","Hide current temperature":"Ist-Temperatur ausblenden","Power (live)":"Leistung (live)","Energy (period)":"Energie (Zeitraum)","Display mode":"Anzeigemodus","Show the Power/Energy switch in the card":"Umschalter Leistung/Energie in der Karte anzeigen","Do not take energy values from the Energy dashboard":"Energiewerte nicht automatisch aus dem Energie-Dashboard übernehmen","Grid import (energy sensor, optional)":"Netzbezug (Energiesensor, optional)","Feed-in (energy sensor, optional)":"Einspeisung (Energiesensor, optional)","Car charging (energy sensor, optional)":"Auto laden (Energiesensor, optional)","Inverter AC output (energy sensor, optional)":"Wechselrichter AC-Ausgang (Energiesensor, optional)","Home consumption (energy sensor, optional)":"Hausverbrauch (Energiesensor, optional)","PV input 1 (energy)":"PV-Eingang 1 (Energie)","PV input 2 (energy)":"PV-Eingang 2 (Energie)","PV input 3 (energy)":"PV-Eingang 3 (Energie)","PV input 4 (energy)":"PV-Eingang 4 (Energie)","Battery charged (energy)":"Batterie geladen (Energie)","Battery discharged (energy)":"Batterie entladen (Energie)","Output to inverter (energy, optional)":"Ausgang zum Wechselrichter (Energie, optional)","Energy sensor":"Energiesensor","Energy sensors (summed)":"Energiesensoren (summiert)","Period":"Zeitraum","Arrangement":"Anordnung","Horizontal":"Horizontal","More consumers":"Weitere Verbraucher","Popup trigger (entity)":"Popup-Auslöser (Entität)","Trigger state (e.g. on)":"Auslöser-Status (z. B. on)","Popup to open":"Popup, das geöffnet wird","Opens this popup automatically (like the action path, without \"popup:\") when the trigger entity changes to the trigger state. Leave the state empty to open on every change. Works while the dashboard with this card is open.":"Öffnet dieses Popup automatisch (wie der Pfad der Aktion, aber ohne \"popup:\"), wenn die Auslöser-Entität auf den Auslöser-Status wechselt. Status leer lassen = bei jeder Änderung. Funktioniert, solange das Dashboard mit dieser Karte geöffnet ist.","Close popup automatically after (seconds, 0 = off)":"Popup automatisch schließen nach (Sekunden, 0 = aus)","Timeline":"Zeitleiste","States shown as on (comma-separated, empty = on)":"Zustände, die als „an“ gelten (kommagetrennt, leer = on)","Row height (px)":"Zeilenhöhe (px)","Show total on-time per row":"Gesamtlaufzeit je Zeile anzeigen","The following {n} lamps are on:":"Es sind folgende {n} Lampen eingeschaltet:","The following lamp is on:":"Es ist folgende Lampe eingeschaltet:","The following {n} switches are on:":"Es sind folgende {n} Schalter eingeschaltet:","The following switch is on:":"Es ist folgender Schalter eingeschaltet:","The following {n} fans are on:":"Es sind folgende {n} Ventilatoren eingeschaltet:","The following fan is on:":"Es ist folgender Ventilator eingeschaltet:","The following {n} windows are open:":"Es sind folgende {n} Fenster geöffnet:","The following window is open:":"Es ist folgendes Fenster geöffnet:","The following {n} doors are open:":"Es sind folgende {n} Türen geöffnet:","The following door is open:":"Es ist folgende Tür geöffnet:","The following {n} covers are open:":"Es sind folgende {n} Rollläden und Jalousien geöffnet:","The following cover is open:":"Es ist folgender Rollladen geöffnet:","The following {n} locks are unlocked:":"Es sind folgende {n} Schlösser entsperrt:","The following lock is unlocked:":"Es ist folgendes Schloss entsperrt:","The following {n} media players are active:":"Es laufen folgende {n} Mediaplayer:","The following media player is active:":"Es läuft folgender Mediaplayer:","The following {n} entities are active:":"Es sind folgende {n} Entitäten aktiv:","The following entity is active:":"Es ist folgende Entität aktiv:","Marquee text ({n} = number, {label} = group name; empty = automatic sentence per group)":"Text der Laufschrift ({n} = Anzahl, {label} = Gruppenname; leer = automatischer Satz je Gruppe)","Marquee speed (px per second, default 60)":"Geschwindigkeit der Laufschrift (px pro Sekunde, Standard 60)","Show consumers":"Verbraucher anzeigen","Marquee always on (off: only when the text does not fit)":"Laufschrift immer an (aus: nur wenn der Text nicht in die Karte passt)","Bar colors per entity (optional, hex e.g. #00b7eb)":"Balkenfarben je Entität (optional, Hex, z. B. #00b7eb)","Open a popup with the action \"Navigate\" and the path popup:Section name (heading of a section in the popup dashboard). Optionally popup:dashboard::Section name. Show only one card: popup:Section name#2 (number) or popup:Section name#Card name. Scroll the page to the top with the action \"Navigate\" and the path scroll:top.":"Popup öffnen: Aktion „Navigieren“ mit dem Pfad popup:Abschnittsname (Überschrift eines Abschnitts im Popup-Dashboard). Optional popup:Dashboard::Abschnittsname. Nur eine Karte zeigen: popup:Abschnittsname#2 (Nummer) oder popup:Abschnittsname#Kartenname. Die Seite nach oben scrollen: Aktion „Navigieren“ mit dem Pfad scroll:top.","Updates":"Updates","Installing…":"Wird installiert …","{n} not available":"{n} nicht verfügbar","Only these entities (optional, replaces the selection above)":"Nur diese Entitäten (optional, ersetzt die Auswahl oben)","Show updates from":"Updates anzeigen von","Marketplace":"Marketplace","Supervisor":"Supervisor","Home Assistant Supervisor (apps)":"Home Assistant Supervisor (Apps)","Exclude update entities":"Update-Entitäten ausschließen","Show versions":"Versionen anzeigen","Also show up-to-date entries":"Auch aktuelle Einträge anzeigen","Supervisor color (optional)":"Farbe Supervisor (optional)","Marketplace color (optional)":"Farbe Marketplace (optional)","Installed":"Installiert","Latest":"Neu","Show list":"Liste anzeigen","Hide list":"Liste ausblenden"}};
  const loadFile = (code) => state.cache[code] ??= EMBEDDED[code] ? Promise.resolve(EMBEDDED[code]) : fetch(`${base}translations/${code}.json${query}`, { cache: "no-cache" })
    .then((response) => response.ok ? response.json() : null).catch(() => null);
  async function load(lang) {
    for (const code of [...new Set([lang, lang.split("-")[0]])]) {
      if (code === "en") return null;
      const dict = await loadFile(code);
      if (dict && typeof dict === "object") return dict;
    }
    return null;
  }
  const t = (text) => {
    const dict = state.dict;
    return dict && typeof text === "string" && Object.hasOwn(dict, text) ? dict[text] : text;
  };
  const ATTRS = ["aria-label", "title", "placeholder", "aria-valuetext", "alt"];
  function translateDom(root) {
    const dict = state.dict;
    if (!dict || !root) return;
    const walker = document.createTreeWalker(root, 1 | 4);
    for (let node = walker.currentNode; node; node = walker.nextNode()) {
      if (node.nodeType === 3) {
        if (state.seen.has(node)) continue;
        const raw = node.nodeValue, text = raw.trim();
        if (text && Object.hasOwn(dict, text)) { state.seen.add(node); node.nodeValue = raw.replace(text, dict[text]); }
      } else if (node.nodeType === 1 && node.localName !== "style" && node.localName !== "script") {
        for (const name of ATTRS) {
          const value = node.getAttribute(name);
          if (value && Object.hasOwn(dict, value)) node.setAttribute(name, dict[value]);
        }
      }
    }
  }
  function walkSchema(value) {
    if (Array.isArray(value)) return value.map(walkSchema);
    if (!value || typeof value !== "object") return value;
    const out = {};
    for (const [key, item] of Object.entries(value)) {
      out[key] = (key === "title" || key === "label" || key === "description" || key === "helper") && typeof item === "string" ? t(item)
        : item && typeof item === "object" ? walkSchema(item) : item;
    }
    return out;
  }
  const refreshAll = () => {
    for (const ref of [...state.listeners]) {
      const el = ref.deref();
      if (!el) { state.listeners.delete(ref); continue; }
      try {
        if (!el.isConnected) continue;
        if ("_markup" in el) el._markup = null;
        (el._i18nRefresh ?? el._render)?.call(el);
        translateDom(el.shadowRoot ?? el);
      } catch { /* ignore */ }
    }
  };
  function setLang(raw) {
    const lang = normalize(raw);
    if (lang === state.requested) return;
    state.requested = lang;
    load(lang).then((dict) => {
      if (state.requested !== lang) return;
      const changed = (dict ?? null) !== state.dict;
      state.dict = dict;
      if (changed) refreshAll();
    });
  }
  const attached = new WeakSet();
  function attach(el) {
    if (attached.has(el)) return;
    attached.add(el);
    state.listeners.add(new WeakRef(el));
    const root = el.shadowRoot ?? el;
    new MutationObserver((records) => {
      if (!state.dict) return;
      for (const record of records) {
        if (record.type === "characterData") { const node = record.target; if (!state.seen.has(node)) { const text = node.nodeValue.trim(); if (text && Object.hasOwn(state.dict, text)) { state.seen.add(node); node.nodeValue = node.nodeValue.replace(text, state.dict[text]); } } }
        else for (const node of record.addedNodes) { if (node.nodeType === 1) translateDom(node); else if (node.nodeType === 3 && node.parentNode) translateDom(node.parentNode); }
      }
    }).observe(root, { childList: true, characterData: true, subtree: true });
    translateDom(root);
  }
  globalThis.__UCP_PKG_I18N = { t, setLang, attach, schema: (schema) => state.dict ? walkSchema(schema) : schema, translateDom, base,
    label: (fn) => (...args) => t(fn(...args)) };
})();

/* Energy Values Card v1.0.0 bundled for HA Ultimate Card Package */
(() => {
const ucpT = (text) => globalThis.__UCP_PKG_I18N.t(text);
const ucpTrSchema = (schema) => globalThis.__UCP_PKG_I18N.schema(schema);
const ucpAttach = (el) => globalThis.__UCP_PKG_I18N.attach(el);
const ucpSetLang = (hass) => globalThis.__UCP_PKG_I18N.setLang(hass?.locale?.language || hass?.language);
const DEFAULT_VALUES = [
  "consumption",
  "grid_import",
  "grid_export",
  "solar",
  "battery_charge",
  "battery_discharge",
  "autarky",
  "co2_signal",
  "gas",
  "water",
];

const VALUES = {
  consumption: { icon: "mdi:home-lightning-bolt", color: "var(--primary-color, #03a9f4)" },
  grid_import: { icon: "mdi:transmission-tower-export", color: "var(--energy-grid-consumption-color, #488fc2)" },
  grid_export: { icon: "mdi:transmission-tower-import", color: "var(--energy-grid-return-color, #8353d1)" },
  solar: { icon: "mdi:solar-power", color: "var(--energy-solar-color, #ff9800)" },
  battery_charge: { icon: "mdi:battery-plus", color: "var(--energy-battery-in-color, #f06292)" },
  battery_discharge: { icon: "mdi:battery-minus", color: "var(--energy-battery-out-color, #4db6ac)" },
  autarky: { icon: "mdi:shield-home", color: "var(--energy-non-fossil-color, #0f9d58)" },
  co2_signal: { icon: "mdi:molecule-co2", color: "#7cb342" },
  gas: { icon: "mdi:fire", color: "var(--energy-gas-color, #8ab4f8)" },
  water: { icon: "mdi:water", color: "var(--energy-water-color, #00bcd4)" },
};

/** Werte, die in Prozent statt in kWh angezeigt werden. */
const PCT_KEYS = new Set(["autarky", "co2_signal"]);

/** Werte in Volumen- bzw. Gaseinheiten (kein Vergleichsbalken mit den kWh-Werten). */
const VOL_KEYS = new Set(["gas", "water"]);

const I18N = {
  en: {
    title: "Energy",
    consumption: "Consumption",
    grid_import: "Grid import",
    grid_export: "Grid export",
    solar: "Solar",
    battery_charge: "Battery charge",
    battery_discharge: "Battery discharge",
    autarky: "Self-sufficiency",
    gas: "Gas consumption",
    water: "Water consumption",
    co2_signal: "Low-carbon energy",
    loading: "Loading energy data…",
    no_prefs: "The energy dashboard has not been set up yet.",
    nothing: "No values selected or no matching sources in the energy dashboard.",
    ed_title: "Title",
    ed_show_title: "Show title",
    pp: "pp",
    prev_period: "Previous period",
    ed_trend_short: "Trend",
    ed_trend_mode: "Trend comparison for the running period",
    ed_trend_same: "Previous period up to the same time",
    ed_trend_full: "Complete previous period",
    cv_show_trend: "Show trend",
    cv_show_trendline: "Show trendline",
    tr_percent: "Percent",
    tr_absolute: "Absolute difference",
    tr_both: "Both",
    cv_trend_good: "Trend is good for",
    cv_trend_display: "Trend display",
    cv_trend_colors: "Colored trend (good/bad)",
    tg_none: "neutral",
    tg_up: "increase",
    tg_down: "decrease",
    ed_values: "Values to show",
    ed_layout: "Layout",
    ed_decimals: "Decimals",
    ed_selector: "Show selection chips in the card",
    ed_date: "Show date",
    ed_icons: "Show icons",
    cv_show_icon: "Show icon",
    ed_bg_combined: "Background colors and opacity of the values",
    ed_bg_color: "Background color",
    ed_names: "Names of the values (empty = default)",
    ed_unit: "Unit",
    ed_decimals_value: "Decimals (empty = default)",
    ed_custom: "Custom values (entities)",
    cv_entity: "Entity",
    cv_name: "Name",
    cv_stat: "Statistic value",
    st_auto: "Automatic",
    st_change: "Sum/change in period",
    st_mean: "Average",
    st_min: "Minimum",
    st_max: "Maximum",
    st_state: "Last value",
    cv_unit: "Unit (optional)",
    cv_decimals: "Decimals",
    cv_icon: "Icon",
    cv_color: "Color",
    ed_alpha: "Opacity",
    ed_list: "List",
    ed_grid: "Tiles",
    ed_compact: "Compact",
  },
};

const tr = () => new Proxy(I18N.en, { get: (target, key) => typeof target[key] === "string" ? ucpT(target[key]) : target[key] });

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/** Wandelt einen Konfigurationswert in eine nutzbare CSS-Farbe um (oder null). */
function cssColor(v) {
  if (v == null || v === "") return null;
  if (Array.isArray(v) && v.length >= 3) {
    const rgb = v.slice(0, 3).map((n) => Math.max(0, Math.min(255, Math.round(Number(n)) || 0))).join(", ");
    const alpha = v.length >= 4 && v[3] != null && v[3] !== "" ? Number(v[3]) : NaN;
    return Number.isNaN(alpha) ? `rgb(${rgb})` : `rgba(${rgb}, ${Math.max(0, Math.min(1, alpha))})`;
  }
  if (typeof v !== "string") return null;
  const s = v.trim();
  if (!s) return null;
  if (/^var\(--[\w-]+(\s*,[^;{}]*)?\)$/.test(s)) return s;
  if (typeof CSS !== "undefined" && CSS.supports && CSS.supports("color", s)) return s;
  // Theme-Farbnamen wie "red" oder "deep-orange" -> var(--red-color)
  if (/^[a-z]+(-[a-z]+)*$/i.test(s)) return `var(--${s.toLowerCase()}-color)`;
  return null;
}


/** Wandelt ältere Farbwerte nach Möglichkeit in rgba(...) für das Editorfeld um. */
function editorRgbaColor(value, legacyOpacity) {
  let rgb = null;
  let alpha = 1;
  if (Array.isArray(value) && value.length >= 3) {
    rgb = value.slice(0, 3).map(Number);
    if (value.length >= 4 && value[3] != null) alpha = Number(value[3]);
  } else if (typeof value === "string") {
    const color = value.trim();
    let match = color.match(/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i);
    if (match) {
      rgb = match.slice(1, 4).map(Number);
      alpha = Number(match[4]);
    } else {
      match = color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
      if (match) rgb = match.slice(1, 4).map(Number);
      else {
        match = color.match(/^#([0-9a-f]{6})$/i);
        if (match) rgb = [0, 2, 4].map((i) => parseInt(match[1].slice(i, i + 2), 16));
        else {
          match = color.match(/^#([0-9a-f]{3})$/i);
          if (match) rgb = match[1].split("").map((channel) => parseInt(channel + channel, 16));
        }
      }
    }
  }
  if (!rgb || !rgb.every((n) => Number.isFinite(n) && n >= 0 && n <= 255)) {
    // Keep non-empty text while the user is typing an rgba(...) value.
    // cssColor() ignores incomplete/invalid CSS colors for card rendering.
    return typeof value === "string" ? value : "";
  }
  if (!Number.isFinite(alpha)) alpha = 1;
  if (legacyOpacity != null && legacyOpacity !== "" && Number.isFinite(Number(legacyOpacity))) {
    let opacity = Number(legacyOpacity);
    if (opacity > 1) opacity /= 100;
    alpha *= Math.max(0, Math.min(1, opacity));
  }
  return `rgba(${rgb.map(Math.round).join(", ")}, ${Math.max(0, Math.min(1, alpha))})`;
}

/** Hintergrundfarbe eines Werts; Transparenz wird direkt über rgba(...) definiert. */
function backgroundFor(config, key) {
  const color = cssColor(config.background_colors?.[key]);
  if (!color) return null;
  // New rgba(...) values carry their own alpha; only legacy non-rgba colors
  // still use the old separate background_opacity option.
  if (/^rgba\(/i.test(String(config.background_colors?.[key] || "").trim())) return color;
  const raw = config.background_opacity?.[key];
  if (raw == null || raw === "" || Number.isNaN(Number(raw))) return color;
  let alpha = Number(raw);
  if (alpha > 1) alpha /= 100;
  alpha = Math.max(0, Math.min(1, alpha));
  return alpha >= 1 ? color : `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;
}

const DAY = 86400000;
const PREFS_TTL = 5 * 60 * 1000;
const REFRESH_MS = 60 * 1000;

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
const endOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

/** Vor-Zeitraum zum gewählten Zeitraum (wie die Vergleichsfunktion des Energy-Dashboards). */
function previousRange(start, end) {
  const shiftDays = (d, n) => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  };
  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  const lastOfMonth = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
  if (start.toDateString() === end.toDateString()) {
    return { start: shiftDays(start, -1), end: shiftDays(end, -1) }; // Tag
  }
  if (start.getDate() === 1 && sameMonth && end.getDate() === lastOfMonth) {
    // Monat: voriger Kalendermonat
    return {
      start: new Date(start.getFullYear(), start.getMonth() - 1, 1, start.getHours(), start.getMinutes(), start.getSeconds(), start.getMilliseconds()),
      end: new Date(start.getFullYear(), start.getMonth(), 0, end.getHours(), end.getMinutes(), end.getSeconds(), end.getMilliseconds()),
    };
  }
  if (start.getMonth() === 0 && start.getDate() === 1 && end.getMonth() === 11 && end.getDate() === 31 && start.getFullYear() === end.getFullYear()) {
    // Jahr: voriges Kalenderjahr
    return {
      start: new Date(start.getFullYear() - 1, 0, 1, start.getHours(), start.getMinutes(), start.getSeconds(), start.getMilliseconds()),
      end: new Date(end.getFullYear() - 1, 11, 31, end.getHours(), end.getMinutes(), end.getSeconds(), end.getMilliseconds()),
    };
  }
  // Woche und eigene Zeiträume: um die Anzahl der Tage zurückschieben
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const days = Math.round((endDay - startDay) / 86400000) + 1;
  return { start: shiftDays(start, -days), end: shiftDays(end, -days) };
}

/** Bei welcher Richtung eines Werts der Trend "gut" ist (up = Anstieg gut, down = Rückgang gut). */
const TREND_GOOD = {
  consumption: "down",
  grid_import: "down",
  grid_export: "up",
  solar: "up",
  battery_charge: "none",
  battery_discharge: "none",
  autarky: "up",
  co2_signal: "up",
  gas: "down",
  water: "down",
};

/* ---------- Datenaufbereitung ---------- */

/** Sammelt rekursiv alle String-Werte einer Eigenschaft. */
function findProp(obj, name, out = []) {
  if (Array.isArray(obj)) {
    obj.forEach((o) => findProp(o, name, out));
  } else if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === name && typeof v === "string" && v) out.push(v);
      else findProp(v, name, out);
    }
  }
  return out;
}

/** Ordnet die Statistik-IDs einer Energiequelle den Werten der Card zu. */
function sourceStatIds(s) {
  const r = { grid_import: [], grid_export: [], solar: [], battery_discharge: [], battery_charge: [], gas: [], water: [] };
  if (s?.type === "grid") {
    r.grid_import = findProp(s.flow_from, "stat_energy_from");
    r.grid_export = findProp(s.flow_to, "stat_energy_to");
    // Ältere/abweichende Strukturen: falls im jeweiligen Flow-Objekt
    // keine Statistik-ID gefunden wird, die gesamte Grid-Quelle durchsuchen.
    if (!r.grid_import.length) r.grid_import = findProp(s, "stat_energy_from");
    if (!r.grid_export.length) r.grid_export = findProp(s, "stat_energy_to");
  } else if (s?.type === "solar") {
    r.solar = findProp(s, "stat_energy_from");
  } else if (s?.type === "gas") {
    r.gas = findProp(s, "stat_energy_from");
  } else if (s?.type === "water") {
    r.water = findProp(s, "stat_energy_from");
  } else if (s?.type === "battery") {
    // stat_energy_from = aus der Batterie entnommen, stat_energy_to = in die Batterie geladen
    r.battery_discharge = findProp(s, "stat_energy_from");
    r.battery_charge = findProp(s, "stat_energy_to");
  }
  return r;
}

function collectIds(prefs) {
  const ids = new Set();
  for (const s of prefs?.energy_sources || []) {
    Object.values(sourceStatIds(s)).forEach((list) => list.forEach((id) => ids.add(id)));
  }
  return [...ids];
}

/** Summe aller "change"-Werte einer Statistik (bereits in kWh). */
function sumChange(rows) {
  if (!Array.isArray(rows)) return 0;
  let t = 0;
  for (const r of rows) t += Number(r.change) || 0;
  return t;
}

const ENERGY_UNITS = new Set(["Wh", "kWh", "MWh", "GWh", "TWh", "MJ", "GJ", "cal", "kcal"]);
// Faktor = Menge der Basiseinheit (kWh) je Einheit
const ENERGY_FACTORS = { kWh: 1, Wh: 0.001, MWh: 1000, MJ: 1 / 3.6, GJ: 1000 / 3.6 };
const VOLUME_FACTORS = { "m³": 1, L: 0.001, mL: 1e-6, gal: 0.003785411784, "ft³": 0.028316846592, CCF: 2.8316846592, MCF: 28.316846592 };

/** Einheit und Umrechnungsfaktor einer Gas-/Wasser-Statistik (Ziel: kWh bzw. m³). */
function volumeInfo(meta, converted) {
  const unit = meta?.statistics_unit_of_measurement || meta?.display_unit_of_measurement || "";
  const cls = meta?.unit_class;
  // Energie wurde bereits vom Recorder in kWh umgerechnet
  if (cls === "energy" || (!cls && ENERGY_UNITS.has(unit))) return { unit: "kWh", factor: 1 };
  if (cls === "volume" && converted) return { unit: "m³", factor: 1 };
  return { unit: "m³", factor: VOLUME_FACTORS[unit] ?? 1 };
}

/** Liefert { totals, has, perId, groups, units, skipped } (Strom in kWh, Gas/Wasser in units[key]) */
function compute(prefs, stats, meta = {}, volumeConverted = true) {
  const perId = {};
  const groups = {};
  const units = {};
  const skipped = [];
  const sum = (id) => {
    if (!(id in perId)) perId[id] = sumChange(stats?.[id]);
    return perId[id];
  };
  const totals = { grid_import: 0, grid_export: 0, solar: 0, battery_charge: 0, battery_discharge: 0, gas: 0, water: 0 };
  const has = { grid_import: false, grid_export: false, solar: false, battery_charge: false, battery_discharge: false, gas: false, water: false };

  for (const s of prefs?.energy_sources || []) {
    const g = sourceStatIds(s);
    for (const key of Object.keys(g)) {
      for (const id of g[key]) {
        if (key === "gas" || key === "water") {
          const vi = volumeInfo(meta?.[id], volumeConverted);
          if (units[key] && units[key] !== vi.unit) { skipped.push(id); continue; }
          units[key] = vi.unit;
          totals[key] += sum(id) * vi.factor;
        } else {
          totals[key] += sum(id);
        }
        has[key] = true;
        if (!groups[key]) groups[key] = [];
        groups[key].push(id);
      }
    }
  }

  // Gleiche Formel wie im Energy-Dashboard
  totals.consumption = Math.max(
    0,
    totals.grid_import + totals.solar + totals.battery_discharge - totals.grid_export - totals.battery_charge
  );
  has.consumption = has.grid_import || has.solar || has.battery_discharge;

  // Autarkie (in %): Anteil des Verbrauchs, der nicht aus dem Netz stammt.
  // Strom aus dem Netz, der in die Batterie geladen wurde, zählt nicht als Netzbezug fürs Haus.
  const solarSurplus = Math.max(0, totals.solar - totals.grid_export);
  const gridToBattery = Math.max(0, totals.battery_charge - solarSurplus);
  const gridToHome = Math.max(0, totals.grid_import - gridToBattery);
  totals.autarky = totals.consumption > 0 ? Math.max(0, Math.min(1, 1 - gridToHome / totals.consumption)) * 100 : 0;
  has.autarky = has.consumption && has.grid_import;
  has.co2_signal = false; // wird in _load() nach dem Abruf der fossilen Energie gesetzt
  return { totals, has, perId, groups, units, skipped };
}

/* ---------- Card ---------- */

const CARD_CSS = `
        :host { display: block; height: 100%; }
        ha-card { height: 100%; box-sizing: border-box; }
        .content { padding: 16px; }
        .header { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; margin-bottom: 12px; }
        .title { font-size: 18px; font-weight: 500; color: var(--primary-text-color); }
        .period { font-size: 13px; color: var(--secondary-text-color); white-space: nowrap; }
        .chips { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; margin-bottom: 12px; }
        .chip {
          font: inherit; font-size: 13px; cursor: pointer;
          padding: 4px 10px; border-radius: 16px;
          width: 100%; min-width: 0; text-align: center;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          border: 1px solid var(--divider-color); background: none;
          color: var(--secondary-text-color);
        }
        .chip.on {
          border-color: var(--c);
          background: color-mix(in srgb, var(--c) 18%, transparent);
          color: var(--primary-text-color);
        }
        .list { display: flex; flex-direction: column; gap: 14px; }
        .list .item {
          display: grid; grid-template-columns: 40px 1fr auto;
          grid-template-areas: "i l v";
          column-gap: 12px; row-gap: 6px; align-items: center;
        }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; }
        .grid .item {
          display: flex; flex-direction: column; align-items: flex-start; gap: 6px;
          padding: 12px; border-radius: 12px;
          background: color-mix(in srgb, var(--c) 10%, transparent);
        }
        .compact { display: grid; grid-template-columns: repeat(auto-fit, minmax(115px, 1fr)); gap: 5px; }
        .compact .item {
          display: flex; flex-direction: row; align-items: center; justify-content: space-between;
          gap: 6px; min-width: 0; padding: 5px 7px; border-radius: 6px;
          background: color-mix(in srgb, var(--c) 8%, transparent);
        }
        .compact .label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
        .compact .value { flex: 0 0 auto; font-size: 14px; white-space: nowrap; }
        .compact .unit { font-size: 10px; }
        .compact .item.has-chart { padding-bottom: 5px !important; }
        .list.no-icon .item, .list .item.no-icon {
          grid-template-columns: 1fr auto;
          grid-template-areas: "l v";
        }
        .item.has-bg { background: var(--bg); }
        .list .item.has-bg { padding: 10px 12px; border-radius: 12px; }
        .icon {
          grid-area: i; width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--c); background: color-mix(in srgb, var(--c) 18%, transparent);
        }
        .label { grid-area: l; color: var(--secondary-text-color); font-size: 14px; }
        .value { grid-area: v; font-size: 18px; font-weight: 500; color: var(--primary-text-color); }
        .unit { font-size: 12px; font-weight: 400; color: var(--secondary-text-color); }
        .trend { grid-column: 3; grid-row: 2; justify-self: end; font-size: 12px; white-space: nowrap; color: var(--secondary-text-color); }
        .list.no-icon .trend, .list .item.no-icon .trend { grid-column: 2; }
        .item.has-trend .icon, .item.has-trend .label { grid-row: 1 / span 2; }
        /* Diagramm absolut an der Unterkante verankern: kein Restabstand durch Padding oder Flex/Grid-Gap. */
        .item.has-chart { position: relative; overflow: hidden; padding-bottom: 48px !important; }
        .item.has-chart .trend-chart {
          position: absolute; left: 0; right: 0; bottom: 0;
          display: block; width: 100%; height: 42px; min-height: 0;
          margin: 0; grid-column: auto;
        }
        .trend-chart .line { fill: none; stroke: var(--c); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .trend-chart .area { fill: var(--c); opacity: .12; }
        .msg { color: var(--secondary-text-color); padding: 8px 0; }
        .msg.error { color: var(--error-color); }
        .note { margin-top: 10px; font-size: 12px; color: var(--secondary-text-color); }
        .debug {
          margin: 12px 0 0; padding: 8px; font-size: 11px; line-height: 1.4;
          overflow-x: auto; border-radius: 8px;
          background: var(--secondary-background-color); color: var(--primary-text-color);
        }
      `;

class EnergyValuesCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._hidden = new Set();
    this._data = null;
    this._range = null;
    this._rangeKey = null;
    this._source = null;
    this._error = null;
    this._prefs = null;
    this._prefsAt = 0;
    this._loadId = 0;
    this._lastState = null;
    this._refreshTimer = null;



    this.shadowRoot.addEventListener("click", (ev) => {
      const btn = ev.target.closest?.("[data-key]");
      if (!btn) return;
      const key = btn.dataset.key;
      if (this._hidden.has(key)) this._hidden.delete(key);
      else this._hidden.add(key);
      this._saveHidden();
      this._render();
    });
  }

  static getConfigElement() {
    return document.createElement("ha-ultimate-energy-values-editor");
  }

  static getStubConfig() {
    return { values: [...DEFAULT_VALUES] };
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    if (config.values != null && !Array.isArray(config.values)) {
      throw new Error("'values' must be a list");
    }
    if (config.custom_values != null && !Array.isArray(config.custom_values)) {
      throw new Error("'custom_values' must be a list, e.g. - entity: sensor.my_sensor");
    }
    // Einträge ohne Entität (z. B. frisch im Editor angelegt) werden ignoriert
    const custom = [];
    for (const cv of config.custom_values || []) {
      if (!cv || typeof cv !== "object" || typeof cv.entity !== "string" || !cv.entity.trim()) continue;
      const entity = cv.entity.trim();
      if (custom.some((x) => x.key === entity)) continue;
      custom.push({ ...cv, entity, key: entity });
    }
    const customKeys = new Set(custom.map((x) => x.key));
    const values = Array.isArray(config.values) ? config.values : DEFAULT_VALUES;
    const bad = values.filter((v) => !VALUES[v] && !customKeys.has(v));
    if (bad.length) {
      throw new Error(`Unknown values: ${bad.join(", ")}. Allowed: ${[...Object.keys(VALUES), ...customKeys].join(", ")}`);
    }
    if (config.background_colors != null && (typeof config.background_colors !== "object" || Array.isArray(config.background_colors))) {
      throw new Error("'background_colors' must be an object, e.g. solar: \"#ff9800\"");
    }
    if (config.trends != null && (typeof config.trends !== "object" || Array.isArray(config.trends))) {
      throw new Error("'trends' must be an object, e.g. solar: false");
    }
    if (config.names != null && (typeof config.names !== "object" || Array.isArray(config.names))) {
      throw new Error("'names' must be an object, e.g. solar: \"PV\"");
    }
    const trends = { ...(config.trends || {}) };
    const trendDisplayByValue = { ...(config.trend_display_by_value || {}) };
    const trendColorsByValue = { ...(config.trend_colors_by_value || {}) };
    const trendGoodByValue = { ...(config.trend_good_by_value || {}) };
    const decimalsByValue = { ...(config.decimals_by_value || {}) };
    // Alte globale Optionen einmalig auf die einzelnen Werte übertragen.
    for (const k of DEFAULT_VALUES) {
      if (config.show_trend === false && trends[k] == null) trends[k] = false;
      if (trendDisplayByValue[k] == null && config.trend_display) trendDisplayByValue[k] = config.trend_display;
      if (trendColorsByValue[k] == null && config.trend_colors != null) trendColorsByValue[k] = config.trend_colors;
    }
    // volume_decimals / liter_decimals gibt es nicht mehr (Dezimalstellen je Wert: decimals_by_value)
    const { show_trend: _oldShowTrend, trend_display: _oldTrendDisplay, trend_colors: _oldTrendColors, volume_decimals: _oldVolumeDecimals, liter_decimals: _oldLiterDecimals, ...cleanConfig } = config;
    this._config = {
      layout: "list", decimals: 1, show_date: true, show_icons: true,
      show_title: true, show_selector: false, water_unit: "m³", gas_unit: "m³",
      debug: false,
      ...cleanConfig,
      background_colors: config.background_colors || {},
      background_opacity: config.background_opacity || {},
      names: config.names || {}, trends,
      trend_display_by_value: trendDisplayByValue,
      trend_colors_by_value: trendColorsByValue,
      trend_good_by_value: trendGoodByValue,
      decimals_by_value: decimalsByValue,
      values, custom,
    };
    this._loadHidden();
    this._render();
    // geänderte eigene Werte sofort neu laden (z. B. im Editor)
    if (this._hass && this._range) this._load();
  }

  set hass(hass) {
    ucpSetLang(hass); ucpAttach(this);
    this._hass = hass;
    if (this.isConnected) this._connect();
    if (this._range && !this._data && !this._loading) this._load();
  }

  connectedCallback() {
    this._connect();
  }

  disconnectedCallback() {
    clearInterval(this._refreshTimer);
    clearInterval(this._energySelectionTimer);
    this._refreshTimer = this._energySelectionTimer = null;
    this._rangeKey = null;
    this._loadId++;
    this._loading = false;
  }

  getCardSize() {
    const n = this._config?.values?.length || 6;
    return this._config?.layout === "grid" ? 2 + Math.ceil(n / 3) : 1 + n;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 6 };
  }

  /* --- Zeitraum aus der Dashboard-Datumsauswahl --- */

  _connect() {
    if (!this._hass || !this._config || !this.isConnected) return;
    if (!this._energySelectionTimer) {
      this._energySelectionTimer = setInterval(() => this._syncEnergyRange(), 500);
    }
    this._syncEnergyRange();
  }

  _syncEnergyRange() {
    const connection = this._hass.connection;
    const custom = this._config.collection_key?.trim?.();
    const panel = this._hass.panelUrl || window.location.pathname.split("/")[1];
    const keys = custom
      ? [...new Set([custom.startsWith("_") ? custom : "_" + custom, "_energy_" + custom, custom])]
      : panel ? ["_energy_" + panel, "_energy"] : ["_energy"];
    for (const key of keys) {
      const collection = connection?.[key];
      if (collection?.start == null) continue;
      const start = new Date(collection.start);
      const end = collection.end == null ? endOfDay(new Date()) : new Date(collection.end);
      if (Number.isFinite(+start) && Number.isFinite(+end) && end > start) {
        this._applyRange(start, end, "collection");
        return;
      }
    }
    const now = new Date();
    this._applyRange(startOfDay(now), endOfDay(now), "today");
  }

  _applyRange(start, end, source) {
    const key = `${start.getTime()}|${end.getTime()}|${source}`;
    if (key === this._rangeKey) return;
    this._rangeKey = key;
    this._range = { start, end };
    this._source = source;
    if (!this._refreshTimer) {
      this._refreshTimer = setInterval(() => this._load(), REFRESH_MS);
    }
    this._load();
  }

  /* --- Daten laden --- */

  async _getPrefs() {
    if (this._prefs && Date.now() - this._prefsAt < PREFS_TTL) return this._prefs;
    try {
      this._prefs = await this._hass.callWS({ type: "energy/get_prefs" });
    } catch (e) {
      if (e?.code === "not_found") this._prefs = { energy_sources: [] };
      else throw e;
    }
    this._prefsAt = Date.now();
    return this._prefs;
  }

  /** Sucht die CO2-Signal-Entität (Anteil fossiler Energie im Netz, in %), wie das Energy-Dashboard. */
  _findCo2Entity() {
    const hass = this._hass;
    const states = hass?.states || {};
    let ids = Object.values(hass?.entities || {})
      .filter((e) => e.platform === "co2signal")
      .map((e) => e.entity_id);
    if (!ids.length) {
      ids = Object.keys(states).filter(
        (id) => id.startsWith("sensor.") && /fossil_fuel_percentage|co2signal|electricity_maps/.test(id)
      );
    }
    return ids.find((id) => states[id]?.attributes?.unit_of_measurement === "%") || null;
  }

  /** Holt die fossile Energie im Netzbezug (wie die CO2-Anzeige im Energy-Dashboard). */
  async _loadCo2(result, range, period) {
    const info = { entity: null, fossil: null, error: null };
    const c = this._config;
    if (!c.values.includes("co2_signal")) return info;
    const gridIds = result.groups.grid_import || [];
    if (!gridIds.length) { info.error = "no grid consumption configured"; return info; }
    const entity = this._findCo2Entity();
    info.entity = entity;
    if (!entity) { info.error = "no CO2 signal entity found"; return info; }
    try {
      const res = await this._hass.callWS({
        type: "energy/fossil_energy_consumption",
        start_time: range.start.toISOString(),
        end_time: range.end.toISOString(),
        energy_statistic_ids: gridIds,
        co2_statistic_id: entity,
        period,
      });
      info.fossil = Object.values(res || {}).reduce((a, v) => a + (Number(v) || 0), 0);
      const grid = result.totals.grid_import;
      const home = result.totals.consumption;
      const clamp = (v) => Math.max(0, Math.min(100, v));
      info.gridShare = grid > 0 ? clamp((1 - info.fossil / grid) * 100) : null;
      info.homeShare = home > 0 ? clamp((1 - info.fossil / home) * 100) : null;
      info.grid = grid;
      info.home = home;
      // Anteil CO2-neutraler Energie am gesamten Verbrauch (inkl. Solar und Batterie)
      if (info.homeShare != null) {
        result.totals.co2_signal = info.homeShare;
        result.has.co2_signal = true;
      }
    } catch (e) {
      info.error = e?.message || e?.code || JSON.stringify(e);
    }
    return info;
  }

  /** Wertet die Statistiken der eigenen Entitäten für den gewählten Zeitraum aus. */
  _customResults(customs, stats, meta, volumeConverted) {
    const out = {};
    for (const cv of customs) {
      const rows = stats?.[cv.entity];
      const m = meta?.[cv.entity];
      const type = ["change", "mean", "min", "max", "state"].includes(cv.stat) ? cv.stat : m?.has_sum ? "change" : "mean";
      let value = null;
      if (Array.isArray(rows) && rows.length) {
        const nums = rows
          .map((r) => r[type])
          .filter((v) => v != null && Number.isFinite(Number(v)))
          .map(Number);
        if (nums.length) {
          if (type === "change") value = nums.reduce((a, b) => a + b, 0);
          else if (type === "mean") value = nums.reduce((a, b) => a + b, 0) / nums.length;
          else if (type === "min") value = Math.min(...nums);
          else if (type === "max") value = Math.max(...nums);
          else value = nums[nums.length - 1];
        }
      }
      // Energie wurde vom Recorder in kWh, Volumen in m³ umgerechnet
      let unit = m?.statistics_unit_of_measurement ?? m?.display_unit_of_measurement ?? "";
      if (m?.unit_class === "energy") unit = "kWh";
      else if (m?.unit_class === "volume" && volumeConverted) unit = "m³";
      // Eigene Einheit (unit): Wert aus der vom Recorder gelieferten Basiseinheit (kWh bzw. m³) umrechnen, nicht nur das Etikett tauschen
      const want = String(cv.unit ?? "").trim();
      if (value != null && want && want !== unit) {
        const factors = unit === "m³" ? VOLUME_FACTORS : unit === "kWh" ? ENERGY_FACTORS : null;
        const f = factors && (factors[want] ?? factors[Object.keys(factors).find((k) => k.toLowerCase() === want.toLowerCase())]);
        if (f) { value /= f; unit = want; }
      }
      out[cv.key] = { value, type, unit, rows: Array.isArray(rows) ? rows.length : 0 };
    }
    return out;
  }

  async _load() {
    const hass = this._hass;
    const range = this._range;
    if (!hass || !range) return;
    const id = ++this._loadId;
    this._loading = true;
    try {
      const prefs = await this._getPrefs();
      if (id !== this._loadId) return;
      const hasPrefs = !!prefs?.energy_sources?.length;
      const customs = this._config?.custom || [];
      const customIds = customs.map((cv) => cv.entity);
      const ids = [...new Set([...(hasPrefs ? collectIds(prefs) : []), ...customIds])];

      if (!ids.length) {
        this._data = { empty: true, customValues: {} };
        this._error = null;
      } else {
        const span = range.end - range.start;
        const period = span <= 2 * DAY ? "hour" : span <= 400 * DAY ? "day" : "month";
        // Metadaten (Einheiten): Gas, Wasser und eigene Werte
        const volIds = hasPrefs
          ? prefs.energy_sources.flatMap((src) => {
              const g = sourceStatIds(src);
              return [...g.gas, ...g.water];
            })
          : [];
        const metaIds = [...new Set([...volIds, ...customIds])];
        let meta = {};
        if (metaIds.length) {
          try {
            const rows = await hass.callWS({ type: "recorder/get_statistics_metadata", statistic_ids: metaIds });
            meta = Object.fromEntries((rows || []).map((m) => [m.statistic_id, m]));
          } catch (_) {
            meta = {};
          }
        }
        const types = customIds.length ? ["change", "mean", "min", "max", "state"] : ["change"];
        const query = (units, r = range) =>
          hass.callWS({
            type: "recorder/statistics_during_period",
            start_time: r.start.toISOString(),
            end_time: r.end.toISOString(),
            statistic_ids: ids,
            period,
            types,
            units,
          });
        let stats = {};
        let volumeConverted = true;
        try {
          stats = await query({ energy: "kWh", volume: "m³" });
        } catch (_) {
          // ältere HA-Versionen kennen die Einheitenklasse "volume" evtl. nicht
          volumeConverted = false;
          stats = await query({ energy: "kWh" });
        }
        if (id !== this._loadId) return;
        const customValues = this._customResults(customs, stats, meta, volumeConverted);

        // Vor-Zeitraum für den Trend (Fehler hier dürfen die Hauptwerte nicht verhindern)
        let prev = null;
        const cfg = this._config || {};
        const trendWanted =
          (cfg.values || []).some((k) => VALUES[k] && cfg.trends?.[k] !== false) ||
          customs.some((cv) => cv.show_trend !== false && cfg.trends?.[cv.key] !== false);
        if (trendWanted) {
          try {
            const pr = previousRange(range.start, range.end);
            // Läuft der gewählte Zeitraum noch (heute, diese Woche …), den Vorzeitraum nur bis zur gleichen relativen Zeit auswerten
            const nowMs = Date.now();
            if (cfg.trend_mode !== "full" && nowMs >= range.start.getTime() && nowMs < range.end.getTime()) {
              pr.end = new Date(Math.min(pr.end.getTime(), pr.start.getTime() + (nowMs - range.start.getTime())));
            }
            const prevStats = await query(volumeConverted ? { energy: "kWh", volume: "m³" } : { energy: "kWh" }, pr);
            const prevCustom = this._customResults(customs, prevStats, meta, volumeConverted);
            let totals = {};
            let has = {};
            if (hasPrefs) {
              const pres = compute(prefs, prevStats, meta, volumeConverted);
              await this._loadCo2(pres, pr, period);
              totals = pres.totals;
              has = pres.has;
            }
            prev = { totals, has, customValues: prevCustom, label: this._periodLabel(pr.start, pr.end) };
          } catch (_) {
            prev = null;
          }
        }
        // Tageswerte der letzten sieben Tage (einschließlich heute) für die Mini-Liniendiagramme.
        let weekly = {};
        const graphWanted =
          (cfg.values || []).some((k) =>
            VALUES[k] &&
            (cfg.trends?.[k] !== false || cfg.show_trendline_by_value?.[k] !== false)
          ) ||
          customs.some((cv) =>
            (cv.show_trend !== false && cfg.trends?.[cv.key] !== false) ||
            cv.show_trendline !== false
          );
        if (graphWanted) {
          try {
            const weekEnd = endOfDay(new Date());
            const weekStart = startOfDay(new Date(weekEnd.getFullYear(), weekEnd.getMonth(), weekEnd.getDate() - 6));
            const weekStats = await hass.callWS({
              type: "recorder/statistics_during_period",
              start_time: weekStart.toISOString(),
              end_time: weekEnd.toISOString(),
              statistic_ids: ids,
              period: "day",
              types,
              units: volumeConverted ? { energy: "kWh", volume: "m³" } : { energy: "kWh" },
            });
            const dayKey = (v) => {
              const dt = v instanceof Date ? v : new Date(v);
              return Number.isNaN(dt.getTime()) ? "" : `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`;
            };
            const days = Array.from({ length: 7 }, (_, i) => {
              const dt = new Date(weekStart); dt.setDate(dt.getDate() + i); return dt;
            });
            for (const day of days) {
              const key = dayKey(day);
              const oneDay = Object.fromEntries(ids.map((sid) => [sid, (weekStats?.[sid] || []).filter((row) => dayKey(row.start) === key)]));
              const dayCustom = this._customResults(customs, oneDay, meta, volumeConverted);
              const dayTotals = hasPrefs ? compute(prefs, oneDay, meta, volumeConverted) : { totals: {}, has: {} };
              if (hasPrefs && cfg.values?.includes("co2_signal") && cfg.trends?.co2_signal !== false) {
                await this._loadCo2(dayTotals, { start: day, end: endOfDay(day) }, "day");
              }
              for (const [k, v] of Object.entries(dayTotals.totals)) {
                if (!weekly[k]) weekly[k] = [];
                weekly[k].push(Number.isFinite(v) ? v : null);
              }
              for (const [k, v] of Object.entries(dayCustom)) {
                if (!weekly[k]) weekly[k] = [];
                weekly[k].push(Number.isFinite(v.value) ? v.value : null);
              }
            }
          } catch (_) { weekly = {}; }
        }
        if (id !== this._loadId) return;

        if (!hasPrefs) {
          this._data = { empty: true, customValues, prev, weekly };
        } else {
          const result = compute(prefs, stats, meta, volumeConverted);
          const co2 = await this._loadCo2(result, range, period);
          if (id !== this._loadId) return;
          this._data = {
            ...result,
            co2,
            period,
            customValues,
            prev,
            weekly,
            sources: prefs.energy_sources.map((s) => `${s.type}: ${Object.keys(s).join(", ")}`),
          };
        }
        this._error = null;
      }
    } catch (e) {
      if (id !== this._loadId) return;
      this._error = e?.message || e?.code || JSON.stringify(e);
    }
    this._loading = false;
    this._render();
  }

  /* --- Auswahl (Chips) --- */

  _storageKey() {
    return `energy-values-card:${this._config?.title || "default"}`;
  }

  _loadHidden() {
    try {
      const raw = localStorage.getItem(this._storageKey());
      this._hidden = new Set(raw ? JSON.parse(raw) : []);
      // grid_export wurde in älteren Versionen teils versehentlich als ausgeblendet
      // gespeichert. Da die Quelle inzwischen korrekt erkannt wird, den Eintrag
      // einmalig zurücksetzen, damit "Einspeisung" wieder sichtbar ist.
      this._hidden.delete("grid_export");
      this._saveHidden();
    } catch (_) {
      this._hidden = new Set();
    }
  }

  _saveHidden() {
    try {
      localStorage.setItem(this._storageKey(), JSON.stringify([...this._hidden]));
    } catch (_) { /* ignorieren */ }
  }

  /* --- Darstellung --- */

  _lang() {
    return this._hass?.locale?.language || this._hass?.language || "en";
  }

  _periodLabel(start, end) {
    if (!(start instanceof Date)) return "";
    const lang = this._lang();
    const e = end instanceof Date ? end : start;
    const fmt = (d, o) => new Intl.DateTimeFormat(lang, o).format(d);
    if (start.toDateString() === e.toDateString()) {
      return fmt(start, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
    }
    const lastOfMonth = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    if (
      start.getDate() === 1 &&
      start.getMonth() === e.getMonth() &&
      start.getFullYear() === e.getFullYear() &&
      e.getDate() === lastOfMonth
    ) {
      return fmt(start, { month: "long", year: "numeric" });
    }
    if (
      start.getMonth() === 0 && start.getDate() === 1 &&
      e.getMonth() === 11 && e.getDate() === 31 &&
      start.getFullYear() === e.getFullYear()
    ) {
      return String(start.getFullYear());
    }
    return `${fmt(start, { day: "numeric", month: "short" })} – ${fmt(e, { day: "numeric", month: "short", year: "numeric" })}`;
  }

  _render() {
    if (!this._config) return;
    const c = this._config;
    const t = tr(this._lang());
    const customs = this._data ? c.custom || [] : [];
    const customMap = new Map(customs.map((cv) => [cv.key, cv]));
    const stateOf = (cv) => this._hass?.states?.[cv.entity];
    const label = (k) => {
      const own = String(c.names?.[k] ?? "").trim();
      if (own) return own;
      const cv = customMap.get(k);
      return cv ? cv.name || stateOf(cv)?.attributes?.friendly_name || cv.entity : t[k];
    };
    const d = this._data;

    let period = "";
    let body = "";
    let note = "";
    let debug = "";

    let totals = {};
    let has = {};
    let builtinOk = false;
    let message = "";
    if (this._error) {
      message = `<div class="msg error">${esc(this._error)}</div>`;
    } else if (!d || !this._range) {
      message = `<div class="msg">${esc(t.loading)}</div>`;
    } else if (d.empty) {
      message = `<div class="msg">${esc(t.no_prefs)}</div>`;
    } else {
      builtinOk = true;
      period = this._periodLabel(this._range.start, this._range.end);
      totals = d.totals;
      has = d.has;
    }

    // Reihenfolge: wie in "values"; eigene Werte, die dort nicht stehen, kommen am Ende
    const wantsBuiltin = c.values.some((k) => VALUES[k]);
    const order = [];
    for (const k of c.values) {
      if (customMap.has(k)) order.push(k);
      else if (VALUES[k] && builtinOk && has[k]) order.push(k);
    }
    for (const cv of customs) if (!order.includes(cv.key)) order.push(cv.key);
    const shown = order.filter((k) => !this._hidden.has(k));

    const clampDec = (n) => Math.min(6, Math.max(0, Math.round(Number(n)) || 0));
    const fmt = (v, dec) =>
      new Intl.NumberFormat(this._lang(), { minimumFractionDigits: clampDec(dec), maximumFractionDigits: clampDec(dec) }).format(v);
    const isLiter = (x) => /^(l|liter|litre)$/i.test(String(x ?? "").trim());
    const useLiter = { water: isLiter(c.water_unit), gas: isLiter(c.gas_unit) };

    /** Trendanzeige im Vergleich zum Vor-Zeitraum (leer, wenn kein Vergleichswert vorhanden ist). */
    const trendHtml = (k, cur, prev, unit, dec, good, options = {}) => {
      if (c.trends?.[k] === false || options.show === false || typeof cur !== "number" || typeof prev !== "number") return "";
      if (!Number.isFinite(cur) || !Number.isFinite(prev)) return "";
      const diff = cur - prev;
      const isPctKey = PCT_KEYS.has(k);
      const pct = prev !== 0 ? (diff / Math.abs(prev)) * 100 : null;
      const signed = (n, dd) => {
        const r = Number(n.toFixed(clampDec(dd)));
        return (r > 0 ? "+" : r < 0 ? "−" : "") + fmt(Math.abs(n), dd);
      };
      const configuredMode = c.trend_display_by_value?.[k] ?? options.display;
      const mode = ["percent", "absolute", "both"].includes(configuredMode) ? configuredMode : "percent";
      const absText = `${signed(diff, dec)}${unit ? " " + unit : ""}`;
      let text;
      let flat;
      if (isPctKey) {
        // Autarkie und CO2-Signal werden als Prozentwerte geführt; auch der Trend nutzt %.
        text = `${signed(diff, 1)} %`;
        flat = Math.abs(diff) < 0.05;
      } else if (mode === "absolute" || pct === null) {
        text = absText;
        flat = Math.abs(diff) < 0.5 * Math.pow(10, -clampDec(dec));
      } else if (mode === "both") {
        text = `${absText} · ${signed(pct, 1)} %`;
        flat = Math.abs(diff) < 0.5 * Math.pow(10, -clampDec(dec));
      } else {
        text = `${signed(pct, 1)} %`;
        flat = Math.abs(pct) < 0.05;
      }
      const arrow = flat ? "→" : diff > 0 ? "▲" : "▼";
      let color = "var(--secondary-text-color)";
      const useColors = c.trend_colors_by_value?.[k] ?? options.colors ?? true;
      if (!flat && useColors && (good === "up" || good === "down")) {
        const isGood = (diff > 0) === (good === "up");
        color = isGood ? "var(--success-color, #43a047)" : "var(--error-color, #db4437)";
      }
      const prevText = `${fmt(prev, dec)}${unit ? " " + unit : ""}`;
      const title = `${t.prev_period}${d.prev?.label ? " (" + d.prev.label + ")" : ""}: ${prevText}`;
      return `<div class="trend" style="color:${esc(color)}" title="${esc(title)}">${arrow} ${esc(text)}</div>`;
    };

    /** Kleine SVG-Linie für die letzten sieben Tage. */
    const sparklineHtml = (k) => {
      if (c.layout === "compact" || c.show_trendline_by_value?.[k] === false) return "";
      const cv = customMap.get(k);
      if (cv?.show_trendline === false) return "";
      const values = d?.weekly?.[k];
      if (!Array.isArray(values) || values.length < 2) return "";
      const nums = values.map((v) => Number.isFinite(v) ? v : null);
      const valid = nums.filter((v) => v != null);
      if (valid.length < 2) return "";
      const min = Math.min(...valid), max = Math.max(...valid);
      const span = max - min || 1;
      const pts = nums.map((v, i) => v == null ? null : [i * (100 / (nums.length - 1)), 32 - ((v - min) / span) * 26]);
      const segments = [];
      let current = [];
      for (const pt of pts) { if (pt) current.push(pt); else if (current.length) { segments.push(current); current = []; } }
      if (current.length) segments.push(current);
      // Catmull-Rom-ähnliche kubische Bézier-Kurven glätten die Übergänge,
      // ohne die vorhandenen Messpunkte oder Lücken in den Daten zu verändern.
      const smoothSegment = (seg) => {
        if (seg.length < 3) {
          return seg.map((pt, i) => `${i ? "L" : "M"}${pt[0].toFixed(1)},${pt[1].toFixed(1)}`).join(" ");
        }
        let dPath = `M${seg[0][0].toFixed(1)},${seg[0][1].toFixed(1)}`;
        for (let i = 0; i < seg.length - 1; i++) {
          const p0 = seg[Math.max(0, i - 1)];
          const p1 = seg[i];
          const p2 = seg[i + 1];
          const p3 = seg[Math.min(seg.length - 1, i + 2)];
          const c1x = p1[0] + (p2[0] - p0[0]) / 6;
          const c1y = p1[1] + (p2[1] - p0[1]) / 6;
          const c2x = p2[0] - (p3[0] - p1[0]) / 6;
          const c2y = p2[1] - (p3[1] - p1[1]) / 6;
          dPath += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
        }
        return dPath;
      };
      const path = segments.map(smoothSegment).join(" ");
      if (!path) return "";
      const first = pts.find(Boolean), last = [...pts].reverse().find(Boolean);
      const area = segments.length === 1 ? `${path} L${last[0].toFixed(1)},36 L${first[0].toFixed(1)},36 Z` : "";
      return `<svg class="trend-chart" viewBox="0 0 100 36" preserveAspectRatio="none" role="img" aria-label="History of the last seven days">${area ? `<path class="area" d="${area}"></path>` : ""}<path class="line" d="${path}"></path></svg>`;
    };

    /** Alles, was zur Darstellung eines Werts nötig ist (Icon, Farbe, Text, Hintergrund). */
    const describe = (k) => {
      const cv = customMap.get(k);
      if (cv) {
        const st = stateOf(cv);
        const res = d?.customValues?.[k];
        const num = typeof res?.value === "number" ? res.value : NaN;
        const isNum = Number.isFinite(num);
        const unit = cv.unit ?? res?.unit ?? "";
        const dec = cv.decimals ?? this._hass?.entities?.[cv.entity]?.display_precision ?? c.decimals;
        const text = isNum ? `${esc(fmt(num, dec))}${unit ? `<span class="unit"> ${esc(unit)}</span>` : ""}` : "–";
        return {
          icon: cv.icon || st?.attributes?.icon || "mdi:gauge",
          showIcon: cv.show_icon !== false,
          color: cssColor(cv.color) || "var(--primary-color, #03a9f4)",
          text,
          trend:
            cv.show_trend === false
              ? ""
              : trendHtml(k, isNum ? num : undefined, d.prev?.customValues?.[k]?.value, unit, dec, cv.trend_good || "none", { display: cv.trend_display, colors: cv.trend_colors }),
          bg:
            backgroundFor(c, k) ||
            backgroundFor({ background_colors: { [k]: cv.background_color }, background_opacity: { [k]: cv.background_opacity } }, k),
        };
      }
      let v = totals[k];
      let pv = d.prev?.has?.[k] ? d.prev.totals[k] : undefined;
      const isPct = PCT_KEYS.has(k);
      let unit = isPct ? "%" : d.units?.[k] || "kWh";
      if (VOL_KEYS.has(k) && unit === "m³" && useLiter[k]) {
        v *= 1000;
        if (typeof pv === "number") pv *= 1000;
        unit = "L";
      }
      // Eigene Dezimalstellen je Wert, sonst: kWh = decimals, % = 0, m³ = 2, L = 0
      const own = c.decimals_by_value?.[k];
      const decimals =
        own != null && own !== "" && Number.isFinite(Number(own))
          ? Number(own)
          : isPct ? 0 : unit === "kWh" ? c.decimals : unit === "L" ? 0 : 2;
      return {
        icon: c.icons?.[k] || VALUES[k].icon,
        showIcon: c.show_icons_by_value?.[k] !== false,
        color: VALUES[k].color,
        text: `${esc(fmt(v, decimals))}<span class="unit"> ${esc(unit)}</span>`,
        trend: trendHtml(k, v, pv, unit, decimals, c.trend_good_by_value?.[k] ?? TREND_GOOD[k] ?? "none"),
        bg: backgroundFor(c, k),
      };
    };

    if ((wantsBuiltin || !d || this._error) && !builtinOk && message) body += message;

    if (c.show_selector && order.length) {
      body += `<div class="chips">${order
        .map(
          (k) =>
            `<button class="chip ${this._hidden.has(k) ? "" : "on"}" data-key="${esc(k)}" style="--c:${esc(describe(k).color)}">${esc(label(k))}</button>`
        )
        .join("")}</div>`;
    }

    if (!shown.length) {
      if (builtinOk || (!wantsBuiltin && d && !this._error)) body += `<div class="msg">${esc(t.nothing)}</div>`;
    } else {
      const compact = c.layout === "compact";
      const showIcons = !compact;
      body += `<div class="${compact ? "compact" : c.layout === "grid" ? "grid" : "list"}${showIcons ? "" : " no-icon"}">${shown
        .map((k) => {
          const it = describe(k);
          const chart = sparklineHtml(k);
          return `
            <div class="item${!it.showIcon ? " no-icon" : ""}${it.bg ? " has-bg" : ""}${it.trend ? " has-trend" : ""}${chart ? " has-chart" : ""}" style="--c:${esc(it.color)};${it.bg ? `--bg:${esc(it.bg)};` : ""}">
              ${showIcons && it.showIcon ? `<div class="icon"><ha-icon icon="${esc(it.icon)}"></ha-icon></div>` : ""}
              <div class="label">${esc(label(k))}</div>
              <div class="value">${it.text}</div>
              ${compact ? "" : it.trend || ""}
              ${chart}
            </div>`;
        })
        .join("")}</div>`;
    }

    if (builtinOk && c.debug) {
      const lines = [
        `Period source: ${this._source}`,
        `Start: ${this._range.start.toISOString()}`,
        `End:   ${this._range.end.toISOString()}`,
        `Period: ${d.period}`,
        `Previous period: ${d.prev ? d.prev.label : "-"}`,
        `CO2 signal entity: ${d.co2?.entity ?? "-"} | fossil: ${d.co2?.fossil == null ? "-" : d.co2.fossil.toFixed(3) + " kWh"}${d.co2?.error ? " | Error: " + d.co2.error : ""}`,
        `CO2-neutral: consumption=${d.co2?.home?.toFixed?.(3) ?? "-"} kWh -> ${d.co2?.homeShare?.toFixed?.(3) ?? "-"} % | grid consumption=${d.co2?.grid?.toFixed?.(3) ?? "-"} kWh -> ${d.co2?.gridShare?.toFixed?.(3) ?? "-"} %`,
        `Gas/water units: ${JSON.stringify(d.units || {})}${d.skipped?.length ? " | skipped (different unit): " + d.skipped.join(", ") : ""}`,
        `Custom values: ${JSON.stringify(d.customValues || {})}`,
        `Sources in energy dashboard:`,
        ...(this._prefs?.energy_sources || []).map((s, i) => {
          const ids = sourceStatIds(s);
          return [
            `  Source ${i + 1} (${s.type || "unbekannt"}): ${Object.keys(s).join(", ")}`,
            `    stat_energy_to found: ${JSON.stringify(findProp(s, "stat_energy_to"))}`,
            `    grid_export mapping: ${JSON.stringify(ids.grid_export || [])}`,
            `    flow_to structure: ${JSON.stringify(s.flow_to ?? null)}`,
          ].join("\\n");
        }),
        `grid_export in card selection: ${(c.values || []).includes("grid_export") ? "ja" : "nein"}`,
        `grid_export hidden: ${this._hidden.has("grid_export") ? "ja" : "nein"}`,
        `Display list: ${shown.join(", ") || "-"}`,
        `grid_export detected: ${has.grid_export ? "ja" : "nein"}`,
        `Not found: ${Object.keys(has).filter((k) => !has[k]).join(", ") || "-"}`,
        `--`,
        ...Object.entries(d.groups || {}).flatMap(([key, ids]) => [
          `${key}:`,
          ...ids.map((id) => {
            const rows = this._lastState?.stats?.[id];
            const unit = this._lastState?.statsMetadata?.[id]?.display_unit_of_measurement || "?";
            let coll = "Collection: –";
            if (Array.isArray(rows)) {
              const ch = rows.reduce((a, r) => a + (Number(r.change) || 0), 0);
              const hasSum = rows.length > 1 && rows[0].sum != null && rows[rows.length - 1].sum != null;
              const sg = hasSum ? (rows[rows.length - 1].sum - rows[0].sum).toFixed(3) : "–";
              coll = `Collection: change=${ch.toFixed(3)} sumΔ=${sg} (${rows.length} rows, ${unit})`;
            }
            return `  ${id}: eigen=${d.perId[id].toFixed(3)} kWh | ${coll}`;
          }),
        ]),
        `--`,
        ...Object.entries(totals).map(([k, v]) => `${k}: ${v.toFixed(3)} ${PCT_KEYS.has(k) ? "%" : d.units?.[k] || "kWh"}`),
      ];
      debug = `<pre class="debug">${esc(lines.join("\n"))}</pre>`;
    }

    const title = c.show_title !== false ? (c.title || t.title) : "";
    const showPeriod = c.show_date !== false ? period : "";
    const header =
      title || showPeriod
        ? `<div class="header">
          <div class="title">${esc(title)}</div>
          <div class="period">${esc(showPeriod)}</div>
        </div>`
        : "";
    if (!this._content) {
      this.shadowRoot.innerHTML = `<style>${CARD_CSS}</style><ha-card><div class="content"></div></ha-card>`;
      this._content = this.shadowRoot.querySelector(".content");
    }
    this._content.innerHTML = `${header}${body}${note}${debug}`;
  }
}

/* ---------- Visueller Editor ---------- */

class EnergyValuesCardEditor extends HTMLElement {
  setConfig(config) {
    ucpAttach(this);
    this._config = config;
    this._render();
  }

  set hass(hass) {
    ucpSetLang(hass); ucpAttach(this);
    this._hass = hass;
    if (this._form) this._form.hass = hass;
    this._render();
  }

  _bindValueDragHandles() {
    if (!this._form?.shadowRoot) return;

    const expandables = [];
    const scan = (root) => {
      for (const element of root.querySelectorAll?.("*") || []) {
        if (element.localName === "ha-form-expandable") expandables.push(element);
        if (element.shadowRoot) scan(element.shadowRoot);
      }
    };
    scan(this._form.shadowRoot);

    for (const expandable of expandables) {
      const schemaName = expandable.schema?.name;
      if (!schemaName || !schemaName.endsWith("_section")) continue;
      const valueKey = schemaName.slice(0, -"_section".length);
      if (!DEFAULT_VALUES.includes(valueKey)) continue;

      Promise.resolve(expandable.updateComplete).then(() => {
        const handle = expandable.shadowRoot?.querySelector('ha-icon[slot="leading-icon"]');
        const panel = expandable.shadowRoot?.querySelector("ha-expansion-panel");
        if (!handle || !panel) return;

        return Promise.resolve(panel.updateComplete).then(() => {
          const summary = panel.shadowRoot?.querySelector("#summary");
          if (!summary) return;

          if (handle.dataset.energyValueDragBound !== "true") {
            handle.dataset.energyValueDragBound = "true";
            handle.draggable = true;
            handle.style.cursor = "grab";
            handle.style.display = "inline-flex";
            handle.style.alignItems = "center";
            handle.style.justifyContent = "center";
            handle.style.width = "36px";
            handle.style.height = "36px";
            handle.style.marginInlineEnd = "8px";
            handle.style.borderRadius = "8px";
            handle.style.touchAction = "none";
            handle.title = ucpT("Move value via drag and drop");
            handle.setAttribute("aria-label", ucpT("Move value"));

            handle.addEventListener("dragstart", (event) => {
              const currentName = expandable.schema?.name || "";
              const key = currentName.endsWith("_section")
                ? currentName.slice(0, -"_section".length)
                : "";
              if (!DEFAULT_VALUES.includes(key)) {
                event.preventDefault();
                return;
              }
              this._draggedValueKey = key;
              event.dataTransfer.effectAllowed = "move";
              event.dataTransfer.setData("text/plain", key);
              expandable.style.opacity = "0.45";
              handle.style.cursor = "grabbing";
            });

            handle.addEventListener("dragend", () => {
              this._draggedValueKey = null;
              expandable.style.opacity = "";
              handle.style.cursor = "grab";
              for (const el of expandables) {
                el.style.outline = "";
                el.style.outlineOffset = "";
              }
            });
          }

          if (summary.dataset.energyValueDropBound !== "true") {
            summary.dataset.energyValueDropBound = "true";
            summary.addEventListener("dragover", (event) => {
              event.preventDefault();
              if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
              if (this._draggedValueKey && this._draggedValueKey !== valueKey) {
                expandable.style.outline = "2px dashed var(--primary-color)";
                expandable.style.outlineOffset = "-2px";
              }
            });
            summary.addEventListener("dragleave", (event) => {
              if (!summary.contains(event.relatedTarget)) {
                expandable.style.outline = "";
                expandable.style.outlineOffset = "";
              }
            });
            summary.addEventListener("drop", (event) => {
              for (const el of expandables) {
                el.style.outline = "";
                el.style.outlineOffset = "";
              }
              event.preventDefault();
              const currentName = expandable.schema?.name || "";
              const targetKey = currentName.endsWith("_section")
                ? currentName.slice(0, -"_section".length)
                : "";
              const sourceKey = event.dataTransfer?.getData("text/plain") || this._draggedValueKey;
              if (
                !DEFAULT_VALUES.includes(sourceKey) ||
                !DEFAULT_VALUES.includes(targetKey) ||
                sourceKey === targetKey
              ) return;

              const configuredOrder = Array.isArray(this._config?.value_order)
                ? this._config.value_order.filter((key) => DEFAULT_VALUES.includes(key))
                : [...DEFAULT_VALUES];
              const order = [...new Set([...configuredOrder, ...DEFAULT_VALUES])];
              const from = order.indexOf(sourceKey);
              const to = order.indexOf(targetKey);
              if (from < 0 || to < 0) return;

              const [moved] = order.splice(from, 1);
              order.splice(to, 0, moved);

              const previousValues = Array.isArray(this._config.values)
                ? [...this._config.values]
                : [...DEFAULT_VALUES];
              const enabledInNewOrder = order.filter((key) => previousValues.includes(key));
              let enabledIndex = 0;
              const reorderedValues = previousValues.map((key) =>
                DEFAULT_VALUES.includes(key)
                  ? (enabledInNewOrder[enabledIndex++] ?? key)
                  : key
              );

              const next = {
                ...this._config,
                value_order: order,
                values: reorderedValues,
              };
              this._config = next;
              this._render();
              this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: next },
                bubbles: true,
                composed: true,
              }));
            });
          }
        });
      });
    }
  }


  _render() {
    if (!this._config) return;
    const t = tr(this._hass?.locale?.language || this._hass?.language);
    if (!this._form) {
      this._form = document.createElement("ha-form");
      this._form.addEventListener("value-changed", (ev) => {
        ev.stopPropagation();
        const next = { ...ev.detail.value };
        delete next.show_trend;
        delete next.trend_display;
        delete next.trend_colors;
        delete next.volume_decimals;
        delete next.liter_decimals;
        const ve = next.values_edit;
        delete next.values_edit;
        if (ve) {
          const prev = Array.isArray(this._config?.values) ? this._config.values : DEFAULT_VALUES;
          const kept = prev.filter((k) => !VALUES[k] || ve[`${k}_enabled`] !== false);
          const preferredOrder = Array.isArray(this._config?.value_order)
            ? [...this._config.value_order.filter((k) => DEFAULT_VALUES.includes(k)), ...DEFAULT_VALUES]
            : [...DEFAULT_VALUES];
          for (const k of [...new Set(preferredOrder)]) {
            if (ve[`${k}_enabled`] !== false && !kept.includes(k)) kept.push(k);
          }
          next.values = kept;

          const names = { ...(this._config?.names || {}) };
          const trends = { ...(this._config?.trends || {}) };
          const trendlines = { ...(this._config?.show_trendline_by_value || {}) };
          const displays = { ...(this._config?.trend_display_by_value || {}) };
          const trendColors = { ...(this._config?.trend_colors_by_value || {}) };
          const good = { ...(this._config?.trend_good_by_value || {}) };
          const backgrounds = { ...(this._config?.background_colors || {}) };
          const icons = { ...(this._config?.icons || {}) };
          const decimalsBy = { ...(this._config?.decimals_by_value || {}) };
          const iconVisibility = { ...(this._config?.show_icons_by_value || {}) };
          const opacity = { ...(this._config?.background_opacity || {}) };
          for (const k of DEFAULT_VALUES) {
            const n = typeof ve[k] === "string" ? ve[k] : "";
            if (typeof ve[`${k}_icon`] === "string" && ve[`${k}_icon`].trim()) icons[k] = ve[`${k}_icon`].trim();
            else delete icons[k];
            if (ve[`${k}_icon_enabled`] === false) iconVisibility[k] = false;
            else delete iconVisibility[k];
            if (n.trim()) names[k] = n;
            else delete names[k];
            if (ve[`${k}_trend`] === false) trends[k] = false;
            else delete trends[k];
            if (ve[`${k}_trendline`] === false) trendlines[k] = false;
            else delete trendlines[k];
            if (["percent", "absolute", "both"].includes(ve[`${k}_trend_display`])) displays[k] = ve[`${k}_trend_display`];
            else delete displays[k];
            trendColors[k] = ve[`${k}_trend_colors`] === true;
            if (["none", "up", "down"].includes(ve[`${k}_trend_good`])) good[k] = ve[`${k}_trend_good`];
            else delete good[k];
            const dv = ve[`${k}_decimals`];
            if (typeof dv === "number" && Number.isFinite(dv)) decimalsBy[k] = Math.max(0, Math.min(6, Math.round(dv)));
            else delete decimalsBy[k];
            const rgba = typeof ve[`${k}_bg`] === "string" ? ve[`${k}_bg`].trim() : "";
            if (rgba === "") {
              delete backgrounds[k];
            } else {
              // Auch unvollständige Eingaben zwischenspeichern, damit der Text-Input
              // während des Tippens nicht durch den letzten gültigen Wert ersetzt wird.
              // Ungültige CSS-Farben werden von cssColor() bei der Darstellung ignoriert.
              backgrounds[k] = rgba;
            }
            // Transparenz steckt direkt im rgba-Wert; alte separate Deckkraft entfernen.
            delete opacity[k];
          }
          next.names = names;
          next.trends = trends;
          next.show_trendline_by_value = trendlines;
          next.trend_display_by_value = displays;
          next.trend_colors_by_value = trendColors;
          next.trend_good_by_value = good;
          next.icons = icons;
          next.decimals_by_value = decimalsBy;
          if (["m³", "L"].includes(ve.gas_unit)) next.gas_unit = ve.gas_unit;
          if (["m³", "L"].includes(ve.water_unit)) next.water_unit = ve.water_unit;
          next.show_icons_by_value = iconVisibility;
          next.background_colors = backgrounds;
          next.background_opacity = opacity;
        }
        this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
      });
      this.appendChild(this._form);
    }
    const labels = {
      title: t.ed_title,
      values: t.ed_values,
      layout: t.ed_layout,
      decimals: t.ed_decimals,
      show_title: t.ed_show_title,
      show_selector: t.ed_selector,
      trend_mode: t.ed_trend_mode,
      show_date: t.ed_date,
      show_icons: t.ed_icons,
      water_unit: t.ed_unit,
      gas_unit: t.ed_unit,
      custom_values: t.ed_custom,
    };
    for (const k of DEFAULT_VALUES) {
      labels[k] = t.cv_name;
      labels[`${k}_enabled`] = "Show";
      labels[`${k}_icon_enabled`] = t.cv_show_icon;
      labels[`${k}_icon`] = t.cv_icon;
      labels[`${k}_bg`] = "Background color (rgba)";
      labels[`${k}_trend`] = t.cv_show_trend;
      labels[`${k}_trendline`] = t.cv_show_trendline;
      labels[`${k}_trend_display`] = t.cv_trend_display;
      labels[`${k}_trend_colors`] = t.cv_trend_colors;
      labels[`${k}_trend_good`] = t.cv_trend_good;
      labels[`${k}_decimals`] = t.ed_decimals_value;
    }
    this._form.hass = this._hass;
    this._form.data = {
      layout: "list",
      trend_mode: "same_time",
      decimals: 1,
      show_date: true,
      show_title: true,
      show_selector: false,
      water_unit: "m³",
      gas_unit: "m³",
      ...this._config,
      custom_values: (this._config.custom_values || []).map((cv) => ({
        ...cv,
        show_icon: cv.show_icon !== false,
        show_trendline: cv.show_trendline !== false,
      })),
      values_edit: Object.fromEntries(
        DEFAULT_VALUES.flatMap((k) => {
          const col = this._config.background_colors?.[k];
          return [
            [`${k}_enabled`, (Array.isArray(this._config.values) ? this._config.values : DEFAULT_VALUES).includes(k)],
            [`${k}_icon_enabled`, this._config.show_icons_by_value?.[k] !== false],
            [`${k}_icon`, this._config.icons?.[k] ?? ""],
            [k, this._config.names?.[k] ?? ""],
            [`${k}_bg`, editorRgbaColor(col, this._config.background_opacity?.[k])],
            [`${k}_trend`, this._config.trends?.[k] !== false],
            [`${k}_trendline`, this._config.show_trendline_by_value?.[k] !== false],
            [`${k}_trend_display`, this._config.trend_display_by_value?.[k] ?? "percent"],
            [`${k}_trend_colors`, this._config.trend_colors_by_value?.[k] !== false],
            [`${k}_trend_good`, this._config.trend_good_by_value?.[k] ?? TREND_GOOD[k] ?? "none"],
            [`${k}_decimals`, this._config.decimals_by_value?.[k] ?? undefined],
            ...(k === "gas" || k === "water"
              ? [[`${k}_unit`, /^(l|liter|litre)$/i.test(String(this._config[`${k}_unit`] ?? "").trim()) ? "L" : "m³"]]
              : []),
          ];
        })
      ),
    };
    const valueOrder = [...new Set([
      ...(Array.isArray(this._config.value_order)
        ? this._config.value_order.filter((key) => DEFAULT_VALUES.includes(key))
        : DEFAULT_VALUES),
      ...DEFAULT_VALUES,
    ])];
    // Kopffelder (Titel, Darstellung, Nachkommastellen, Datum, Chips) liegen im kompakten Modus im Hauptformular der Package-Karte
    const head = [
      { name: "title", selector: { text: {} } },
      { name: "show_title", selector: { boolean: {} } },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "layout",
            selector: {
              select: {
                mode: "dropdown",
                options: [
                  { value: "list", label: t.ed_list },
                  { value: "grid", label: t.ed_grid },
                  { value: "compact", label: t.ed_compact },
                ],
              },
            },
          },
          { name: "decimals", selector: { number: { min: 0, max: 3, mode: "box" } } },
        ],
      },
      { name: "show_date", selector: { boolean: {} } },
      { name: "show_selector", selector: { boolean: {} } },
      { name: "trend_mode", selector: { select: { mode: "dropdown", options: [
        { value: "same_time", label: t.ed_trend_same },
        { value: "full", label: t.ed_trend_full },
      ] } } },
    ];
    this._form.schema = ucpTrSchema([
      ...(this.compact ? [] : head),
      {
        type: "expandable",
        name: "values_edit",
        title: "Energy values",
        expanded: true,
        schema: valueOrder.flatMap((k, index) => [
          ...(index > 0 ? [{ type: "divider" }] : []),
          {
            type: "expandable",
            name: `${k}_section`,
            title: t[k] || k,
            icon: "mdi:drag",
            expanded: false,
            // Die Felder bleiben durch flatten direkt in values_edit erhalten.
            flatten: true,
            schema: [
              {
                type: "grid",
                name: "",
                flatten: true,
                column_min_width: "150px",
                schema: [
                  { name: `${k}_enabled`, selector: { boolean: {} } },
                  { name: `${k}_icon_enabled`, selector: { boolean: {} } },
                  { name: `${k}_icon`, selector: { icon: {} } },
                  { name: k, selector: { text: {} } },
                  ...(k === "gas" || k === "water"
                    ? [{ name: `${k}_unit`, selector: { select: { mode: "dropdown", options: [{ value: "m³", label: "m³" }, { value: "L", label: "L" }] } } }]
                    : []),
                  { name: `${k}_decimals`, selector: { number: { min: 0, max: 6, mode: "box" } } },
                  { name: `${k}_bg`, selector: { text: {} } },
                  { name: `${k}_trend`, selector: { boolean: {} } },
                  { name: `${k}_trendline`, selector: { boolean: {} } },
                  ...(PCT_KEYS.has(k) ? [] : [{ name: `${k}_trend_display`, selector: { select: { mode: "dropdown", options: [
                    { value: "percent", label: t.tr_percent },
                    { value: "absolute", label: t.tr_absolute },
                    { value: "both", label: t.tr_both },
                  ] } } }]),
                  { name: `${k}_trend_colors`, selector: { boolean: {} } },
                  { name: `${k}_trend_good`, selector: { select: { mode: "dropdown", options: [
                    { value: "none", label: t.tg_none },
                    { value: "up", label: t.tg_up },
                    { value: "down", label: t.tg_down },
                  ] } } },
                ],
              },
            ],
          },
        ]),
      },
      {
        name: "custom_values",
        selector: {
          object: {
            multiple: true,
            label_field: "name",
            description_field: "entity",
            fields: {
              entity: { label: t.cv_entity, required: true, selector: { entity: {} } },
              name: { label: t.cv_name, selector: { text: {} } },
              stat: {
                label: t.cv_stat,
                selector: {
                  select: {
                    mode: "dropdown",
                    options: [
                      { value: "auto", label: t.st_auto },
                      { value: "change", label: t.st_change },
                      { value: "mean", label: t.st_mean },
                      { value: "min", label: t.st_min },
                      { value: "max", label: t.st_max },
                      { value: "state", label: t.st_state },
                    ],
                  },
                },
              },
              unit: { label: t.cv_unit, selector: { text: {} } },
              decimals: { label: t.cv_decimals, selector: { number: { min: 0, max: 6, mode: "box" } } },
              icon: { label: t.cv_icon, selector: { icon: {} } },
              show_icon: { label: t.cv_show_icon, selector: { boolean: {} } },
              color: { label: t.cv_color, selector: { text: {} } },
              show_trend: { label: t.cv_show_trend, selector: { boolean: {} } },
              show_trendline: { label: t.cv_show_trendline, selector: { boolean: {} } },
              trend_display: { label: t.cv_trend_display, selector: { select: { mode: "dropdown", options: [
                { value: "percent", label: t.tr_percent },
                { value: "absolute", label: t.tr_absolute },
                { value: "both", label: t.tr_both },
              ] } } },
              trend_colors: { label: t.cv_trend_colors, selector: { boolean: {} } },
              trend_good: {
                label: t.cv_trend_good,
                selector: {
                  select: {
                    mode: "dropdown",
                    options: [
                      { value: "none", label: t.tg_none },
                      { value: "up", label: t.tg_up },
                      { value: "down", label: t.tg_down },
                    ],
                  },
                },
              },
            },
          },
        },
      },
    ]);
    this._form.computeLabel = (s) => ucpT(labels[s.name] || s.name);
    Promise.resolve(this._form.updateComplete).then(() => this._bindValueDragHandles());
  }
}

if (!customElements.get("ha-ultimate-energy-values")) customElements.define("ha-ultimate-energy-values", EnergyValuesCard);
if (!customElements.get("ha-ultimate-energy-values-editor")) customElements.define("ha-ultimate-energy-values-editor", EnergyValuesCardEditor);
})();

(() => {
const ucpT = (text) => globalThis.__UCP_PKG_I18N.t(text);
const ucpTrSchema = (schema) => globalThis.__UCP_PKG_I18N.schema(schema);
const ucpAttach = (el) => globalThis.__UCP_PKG_I18N.attach(el);
const ucpSetLang = (hass) => globalThis.__UCP_PKG_I18N.setLang(hass?.locale?.language || hass?.language);
/*
 * Neon Bar Card for Home Assistant
 *
 * Eine Lovelace-Card mit glühenden Balken:
 *   type: custom:neon-bar-card
 *   layout: horizontal | vertical      (Auswahlfeld im Editor)
 *   marquee: true                      (Laufschrift für zu lange Namen)
 *   show_knob: false                   (runden Knopf ausblenden)
 *   zero_center: true                  (Nullpunkt-Modus: negative und positive Werte, min < 0 < max;
 *                                       Schwellen gelten dann als Betrag, Farbe nach Abstand zur Null)
 *   follow_theme: true                 (Standard: Design aus dem HA-Theme)
 *
 * Mit follow_theme (Standard) übernimmt die Card Hintergrund, Rahmen, Radius,
 * Schatten, Schriftart, Schriftgrößen und Farben aus dem in Home Assistant
 * gewählten Theme (auch beim Wechsel zwischen hell und dunkel).
 * Mit follow_theme: false bleibt das dunkle Neon-Design erhalten.
 *
 * Aus Kompatibilitätsgründen bleiben custom:neon-hbar-card (horizontal) und
 * custom:neon-vbar-card (vertikal) als Kurzformen erhalten.
 * Keine Abhängigkeiten, kein Build-Schritt: reines JavaScript mit Shadow DOM.
 */

/* Farben des Neon-Designs (follow_theme: false) */
const NB_DEFAULT_COLORS = { normal: "#14b8cc", warning: "#ff8a1f", critical: "#ff3b3b" };
/* Rückfallwerte, falls das Theme eine Farbe nicht definiert (HA-Standardtheme) */
const NB_THEME_FALLBACK = { normal: "#03a9f4", warning: "#ff9800", critical: "#db4437" };

const nbClamp = (v, a, b) => Math.max(a, Math.min(b, v));
const nbLerp = (a, b, t) => a + (b - a) * t;
const nbEaseOut = (t) => 1 - Math.pow(1 - t, 3);
const NB_HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

function nbToRgb(hex) {
  let s = hex.slice(1);
  if (s.length === 3) s = [...s].map((c) => c + c).join("");
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16));
}

function nbMix(a, b, t) {
  const A = nbToRgb(a);
  const B = nbToRgb(b);
  return (
    "#" +
    A.map((v, i) => Math.round(nbLerp(v, B[i], t)).toString(16).padStart(2, "0")).join("")
  );
}

function nbSafeColor(c, fallback) {
  return typeof c === "string" && NB_HEX.test(c.trim()) ? c.trim() : fallback;
}

/** Farbstufen aus normal / warning / critical (Werte + Hex-Farben). */
function nbBuildStops(cfg, defaults) {
  const min = cfg.min;
  const max = cfg.max;
  const range = Math.max(1e-9, max - min);
  const mk = (value, color) => ({
    t: nbClamp((value - min) / range, 0, 1),
    c1: color,
    c2: nbMix(color, "#000000", 0.35),
  });
  return [
    mk(cfg.normal ?? min + 0.2 * range, nbSafeColor(cfg.normal_color, defaults.normal)),
    mk(cfg.warning ?? min + 0.6 * range, nbSafeColor(cfg.warning_color, defaults.warning)),
    mk(cfg.critical ?? max, nbSafeColor(cfg.critical_color, defaults.critical)),
  ].sort((a, b) => a.t - b.t);
}

function nbPickColor(p, stops) {
  if (p <= stops[0].t) return stops[0];
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    if (p <= b.t) {
      const span = b.t - a.t;
      const f = span > 0 ? (p - a.t) / span : 1;
      return { c1: nbMix(a.c1, b.c1, f), c2: nbMix(a.c2, b.c2, f) };
    }
  }
  return stops[stops.length - 1];
}

function nbFormat(value, precision) {
  if (precision <= 0) return Math.round(value).toLocaleString();
  return value.toLocaleString(undefined, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
}

const NB_STYLES = `
  :host { display: block; height: 100%; }
  ha-card { height: 100%; box-sizing: border-box; }

  /* ---------- Design aus dem Home-Assistant-Theme ---------- */
  ha-card.theme {
    --nb-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --nb-text: var(--primary-text-color, #212121);
    --nb-muted: var(--secondary-text-color, #727272);
    --nb-border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    --nb-radius: var(--ha-card-border-radius, 12px);
    --nb-shadow: var(--ha-card-box-shadow, none);
    --nb-font: var(--primary-font-family, var(--paper-font-body1_-_font-family, Roboto, Noto, sans-serif));
    --nb-mono: var(--nb-font);
    --nb-fs-title: var(--ha-card-header-font-size, var(--ha-font-size-2xl, inherit));
    --nb-fs-label: var(--ha-font-size-m, var(--paper-font-body1_-_font-size, inherit));
    --nb-fs-value: var(--ha-font-size-m, var(--paper-font-body1_-_font-size, inherit));
    --nb-fs-value-v: var(--nb-fs-value);
    --nb-fs-unit: var(--ha-font-size-s, inherit);
    --nb-title-font: var(--ha-card-header-font-family, var(--nb-font));
    --nb-title-color: var(--ha-card-header-color, var(--primary-text-color, #212121));
    --nb-title-transform: none;
    --nb-title-weight: var(--ha-font-weight-normal, 400);
    --nb-title-spacing: -0.012em;
    --nb-label-weight: var(--ha-font-weight-normal, 400);
    --nb-value-weight: var(--ha-font-weight-medium, 500);
    --nb-pad: 16px;
    --nb-cap-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --nb-cap-border: var(--primary-text-color, #212121);
    --nb-cap-ring: color-mix(in oklab, currentColor 14%, transparent);
    --nb-glow: 0.28;
  }

  /* ---------- Dunkles Neon-Design (follow_theme: false) ---------- */
  ha-card.neon {
    --nb-bg: linear-gradient(180deg, #0b1326, #060a14);
    --nb-text: #eef3ff;
    --nb-muted: #6b7894;
    --nb-border: 1px solid color-mix(in oklab, #eef3ff 12%, transparent);
    --nb-radius: var(--ha-card-border-radius, 14px);
    --nb-shadow: 0 12px 28px rgba(0, 0, 0, 0.35), 0 0 0 1px color-mix(in oklab, #eef3ff 2%, transparent) inset;
    --nb-font: 'Inter', var(--primary-font-family, system-ui, sans-serif);
    --nb-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    --nb-fs-title: var(--ha-font-size-m, inherit);
    --nb-fs-label: var(--ha-font-size-s, inherit);
    --nb-fs-value: var(--ha-font-size-m, inherit);
    --nb-fs-value-v: var(--ha-font-size-m, inherit);
    --nb-fs-unit: var(--ha-font-size-s, inherit);
    --nb-title-font: var(--nb-font);
    --nb-title-color: color-mix(in oklab, currentColor 70%, transparent);
    --nb-title-transform: uppercase;
    --nb-title-weight: 600;
    --nb-title-spacing: 0.4px;
    --nb-label-weight: 500;
    --nb-value-weight: 500;
    --nb-pad: 14px;
    --nb-cap-bg: #0a1020;
    --nb-cap-border: rgba(255, 255, 255, 0.65);
    --nb-cap-ring: rgba(0, 0, 0, 0.4);
    --nb-glow: 0.45;
  }
  ha-card.neon .v .value { text-shadow: 0 0 14px color-mix(in oklab, var(--c1) 55%, transparent); }

  ha-card {
    background: var(--nb-bg);
    color: var(--nb-text);
    border: var(--nb-border);
    border-radius: var(--nb-radius);
    box-shadow: var(--nb-shadow);
    overflow: hidden;
    font-family: var(--nb-font);
  }
  .wrap { padding: var(--nb-pad); display: flex; flex-direction: column; gap: 12px; }
  .card-title {
    font-family: var(--nb-title-font); font-size: var(--nb-fs-title);
    font-weight: var(--nb-title-weight); letter-spacing: var(--nb-title-spacing);
    text-transform: var(--nb-title-transform); color: var(--nb-title-color);
    line-height: 1.2; padding: 2px 2px 0;
  }

  .list.h { display: flex; flex-direction: column; gap: 10px; }
  .list.v { display: flex; flex-direction: row; gap: 10px; justify-content: space-around; }

  .item {
    --c1: #03a9f4; --c2: #01658f; --p: 0%;
    position: relative; border-radius: calc(var(--nb-radius) * 0.8); min-width: 0;
    background: linear-gradient(180deg,
      color-mix(in oklab, currentColor 3%, transparent),
      color-mix(in oklab, currentColor 0.5%, transparent));
    border: 1px solid color-mix(in oklab, currentColor 10%, transparent);
    box-shadow: inset 0 1px 0 color-mix(in oklab, currentColor 3%, transparent);
  }
  .h .item {
    padding: 10px 14px 12px; display: grid; grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 14px; row-gap: 10px; align-items: center;
  }
  .v .item {
    flex: 1; padding: 12px 6px 10px; display: flex;
    flex-direction: column; align-items: center; gap: 12px;
  }

  /* ---- Beschriftung (mit optionaler Laufschrift) ---- */
  .label {
    font-size: var(--nb-fs-label); font-weight: var(--nb-label-weight); max-width: 100%;
    color: color-mix(in oklab, currentColor 78%, transparent);
    overflow: hidden; white-space: nowrap; min-width: 0;
  }
  .h .label { grid-column: 1; grid-row: 1; }
  .v .label { text-align: center; width: 100%; }

  .label .txt { display: block; overflow: hidden; text-overflow: ellipsis; }
  .marquee .label .txt { display: inline-block; overflow: visible; text-overflow: clip; }
  .marquee .label.scroll .txt {
    animation: nb-marquee var(--nb-dur, 6s) ease-in-out infinite alternate;
    will-change: transform;
  }
  @keyframes nb-marquee {
    0%, 18% { transform: translateX(0); }
    82%, 100% { transform: translateX(var(--nb-shift, 0px)); }
  }

  .value {
    font-family: var(--nb-mono);
    font-size: var(--nb-fs-value); font-weight: var(--nb-value-weight);
    font-variant-numeric: tabular-nums; letter-spacing: -0.2px;
    color: var(--nb-text); white-space: nowrap;
  }
  .h .value { grid-column: 2; grid-row: 1; }
  .v .value { font-size: var(--nb-fs-value-v); }
  .value .unit {
    font-size: var(--nb-fs-unit); font-weight: 400; margin-left: 3px;
    color: color-mix(in oklab, currentColor 55%, transparent);
  }

  .track { position: relative; }
  .h .track { grid-column: 1 / -1; grid-row: 2; height: var(--nb-size, 8px); }
  .v .track { width: var(--nb-size, 14px); height: var(--nb-h, 180px); }

  .bar {
    position: absolute; inset: 0; border-radius: 999px; overflow: hidden;
    background: color-mix(in oklab, currentColor 10%, transparent);
  }
  .fill, .glow { position: absolute; border-radius: 999px; }
  .h .fill, .h .glow { left: var(--s, 0%); top: 0; bottom: 0; width: var(--w, var(--p)); }
  .v .fill, .v .glow { left: 0; right: 0; bottom: var(--s, 0%); height: var(--w, var(--p)); }
  .h .fill { background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .v .fill { background: linear-gradient(0deg, var(--c1), var(--c2)); }
  /* Nullpunkt-Modus: Füllung wächst von der Null aus, negative Werte in die Gegenrichtung */
  .h .zc .fill, .h .zc .glow { border-radius: 0 999px 999px 0; }
  .v .zc .fill, .v .zc .glow { border-radius: 999px 999px 0 0; }
  .h .zc.neg .fill, .h .zc.neg .glow { border-radius: 999px 0 0 999px; }
  .v .zc.neg .fill, .v .zc.neg .glow { border-radius: 0 0 999px 999px; }
  .h .item.neg .fill { background: linear-gradient(270deg, var(--c1), var(--c2)); }
  .v .item.neg .fill { background: linear-gradient(180deg, var(--c1), var(--c2)); }
  .zero { position: absolute; background: color-mix(in oklab, currentColor 60%, transparent); pointer-events: none; }
  .h .zero { top: -4px; bottom: -4px; width: 2px; left: var(--at); transform: translateX(-50%); }
  .v .zero { left: -4px; right: -4px; height: 2px; bottom: var(--at); transform: translateY(50%); }
  .glow { background: var(--c1); filter: blur(7px); opacity: var(--nb-glow); pointer-events: none; }

  .segmented.h .bar {
    -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 9px, transparent 9px 12px);
    mask-image: repeating-linear-gradient(90deg, #000 0 9px, transparent 9px 12px);
  }
  .segmented.v .bar {
    -webkit-mask-image: repeating-linear-gradient(0deg, #000 0 9px, transparent 9px 12px);
    mask-image: repeating-linear-gradient(0deg, #000 0 9px, transparent 9px 12px);
  }

  .cap {
    position: absolute; width: 12px; height: 12px; border-radius: 50%;
    background: var(--nb-cap-bg); border: 1.5px solid var(--nb-cap-border);
    box-shadow: 0 0 0 3px var(--nb-cap-ring), 0 0 12px color-mix(in oklab, var(--c1) 70%, transparent);
    display: grid; place-items: center; pointer-events: none;
  }
  .cap::after { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--c1); }
  .h .cap { top: 50%; left: var(--p); transform: translate(-50%, -50%); }
  .v .cap { left: 50%; bottom: var(--p); transform: translate(-50%, 50%); }

  .tick { position: absolute; background: color-mix(in oklab, currentColor 35%, transparent); pointer-events: none; }
  .h .tick { top: -3px; bottom: -3px; width: 1px; left: var(--at); }
  .v .tick { left: -3px; right: -3px; height: 1px; bottom: var(--at); }

  .no-data .fill, .no-data .glow, .no-data .cap { opacity: 0; }
  .no-data .value { color: var(--nb-muted); }

  @media (prefers-reduced-motion: reduce) {
    .marquee .label.scroll .txt { animation: none; }
    .marquee .label .txt { display: block; overflow: hidden; text-overflow: ellipsis; }
  }
`;

class NeonBarCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._state = new Map();
    this._raf = 0;
    this._tick = this._tick.bind(this);
    this._measure = this._measure.bind(this);
  }

  static getConfigElement() {
    return document.createElement("neon-bar-card-editor");
  }

  static getStubConfig() {
    return { type: "custom:neon-bar-card", layout: "horizontal", entities: [], min: 0, max: 100 };
  }

  setConfig(config) {
    if (!config || !Array.isArray(config.entities) || config.entities.length === 0) {
      throw new Error("Please specify at least one entity under 'entities'.");
    }
    const layout = config.layout === "vertical" ? "vertical" : "horizontal";
    this._config = {
      min: 0,
      max: 100,
      precision: 0,
      segmented: false,
      show_thresholds: true,
      show_knob: true,
      zero_center: false,
      follow_theme: true,
      animate: true,
      marquee: false,
      marquee_speed: 30,
      ...config,
      layout,
    };
    this._rows = this._makeRows();
    this._state.clear();
    this._build();
    if (this.isConnected) this._refreshStops();
    if (this._hass) this._update();
  }

  set hass(hass) {
    ucpSetLang(hass); ucpAttach(this);
    const key = `${hass?.themes?.darkMode}|${hass?.selectedTheme?.theme ?? hass?.themes?.theme}`;
    const themeChanged = this._themeKey !== undefined && key !== this._themeKey;
    this._themeKey = key;
    this._hass = hass;
    if (this._config) this._update();
    if (themeChanged) {
      // HA setzt die Theme-Variablen kurz nach dem hass-Update
      clearTimeout(this._themeTimer);
      this._themeTimer = setTimeout(() => this._refreshStops(), 150);
    }
  }

  get _vertical() {
    return this._config?.layout === "vertical";
  }

  getCardSize() {
    if (this._vertical) {
      return Math.ceil((Number(this._config?.height) || 180) / 50) + 2;
    }
    return Math.max(1, (this._rows?.length ?? 1) + 1);
  }

  getGridOptions() {
    return { columns: 12, min_columns: 4 };
  }

  connectedCallback() {
    if (this._config && this._hass) this._update();
    if (typeof ResizeObserver !== "undefined" && !this._ro) {
      this._ro = new ResizeObserver(() => this._scheduleMeasure());
    }
    const wrap = this.shadowRoot.querySelector(".wrap");
    if (this._ro && wrap) this._ro.observe(wrap);
    // Theme-Farben lesen, sobald die Card im DOM hängt
    requestAnimationFrame(() => this._refreshStops());
    document.fonts?.ready?.then(() => this._scheduleMeasure());
  }

  disconnectedCallback() {
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
    if (this._measureRaf) cancelAnimationFrame(this._measureRaf);
    this._measureRaf = 0;
    clearTimeout(this._themeTimer);
    this._ro?.disconnect();
  }

  /* ---------- Theme ---------- */

  /** Liest eine CSS-Farbvariable des aktiven Themes und liefert #rrggbb. */
  _themeColor(varName, fallback) {
    const raw = getComputedStyle(this).getPropertyValue(varName).trim();
    if (!raw) return fallback;
    const ctx = (NeonBarCard._ctx ??= document.createElement("canvas").getContext("2d"));
    const sentinel = "#010203";
    ctx.fillStyle = sentinel;
    ctx.fillStyle = raw; // ungültige Werte werden ignoriert
    const out = ctx.fillStyle;
    return NB_HEX.test(out) && out !== sentinel ? out : fallback;
  }

  _defaults() {
    if (this._config?.follow_theme === false) return NB_DEFAULT_COLORS;
    return this._themeDefaults ?? NB_THEME_FALLBACK;
  }

  _refreshStops() {
    if (!this._config || !this._els) return;
    if (this._config.follow_theme !== false) {
      this._themeDefaults = {
        normal: this._themeColor("--primary-color", NB_THEME_FALLBACK.normal),
        warning: this._themeColor("--warning-color", NB_THEME_FALLBACK.warning),
        critical: this._themeColor("--error-color", NB_THEME_FALLBACK.critical),
      };
    }
    this._rows = this._makeRows();
    this._paint();
  }

  _makeRows() {
    return this._config.entities
      .map((e) => this._resolveRow(typeof e === "string" ? { entity: e } : e))
      .filter(Boolean);
  }

  _resolveRow(row) {
    if (!row || !row.entity) return null;
    const cfg = { ...this._config, ...row };
    delete cfg.entities;
    const range = cfg.max - cfg.min;
    const zc = cfg.zero_center && cfg.min < 0 && cfg.max > 0
      ? { z: -cfg.min / range, maxAbs: Math.max(-cfg.min, cfg.max) } : null;
    const stopCfg = zc ? { ...cfg, min: 0, max: zc.maxAbs } : cfg;
    return { entity: row.entity, cfg, zc, stops: nbBuildStops(stopCfg, this._defaults()) };
  }

  _build() {
    const c = this._config;
    const vertical = this._vertical;
    const theme = c.follow_theme !== false;

    const items = this._rows
      .map((row) => {
        const min = row.cfg.min;
        const range = Math.max(1e-9, row.cfg.max - min);
        const zc = row.zc;
        const limits = zc
          ? [row.cfg.warning ?? 0.6 * zc.maxAbs, row.cfg.critical ?? zc.maxAbs].flatMap((v) => [v, -v])
          : [row.cfg.warning ?? min + 0.6 * range, row.cfg.critical ?? row.cfg.max];
        const ticks = (c.show_thresholds
          ? limits
              .map((v) => (v - min) / range)
              .filter((p) => p > 0.02 && p < 0.98)
              .map((p) => `<i class="tick" style="--at:${(p * 100).toFixed(2)}%"></i>`)
              .join("")
          : "") + (zc ? `<i class="zero" style="--at:${(zc.z * 100).toFixed(2)}%"></i>` : "");
        const label = `<div class="label"><span class="txt"></span></div>`;
        const value = `<div class="value"><span class="num">—</span><span class="unit"></span></div>`;
        const track = `
          <div class="track">
            <div class="glow"></div>
            <div class="bar"><div class="fill"></div></div>
            ${ticks}
            ${row.cfg.show_knob !== false ? '<div class="cap"></div>' : ""}
          </div>`;
        return `<div class="item no-data${zc ? " zc" : ""}">${vertical ? value + track + label : label + value + track}</div>`;
      })
      .join("");

    this.shadowRoot.innerHTML = `
      <style>${NB_STYLES}</style>
      <ha-card class="${theme ? "theme" : "neon"} ${c.marquee ? "marquee" : ""}">
        <div class="wrap">
          <div class="card-title" hidden></div>
          <div class="list ${vertical ? "v" : "h"} ${c.segmented ? "segmented" : ""}">${items}</div>
        </div>
      </ha-card>`;

    const card = this.shadowRoot.querySelector("ha-card");
    const bg = String(c.background ?? "").trim();
    if (bg) {
      card.style.setProperty("--nb-bg", bg);
      if (!theme && bg.toLowerCase() === "transparent") {
        card.style.setProperty("--nb-text", "var(--primary-text-color, #eef3ff)");
        card.style.setProperty("--nb-muted", "var(--secondary-text-color, #6b7894)");
      }
    }
    if (c.bar_size) card.style.setProperty("--nb-size", `${Number(c.bar_size)}px`);
    if (c.height) card.style.setProperty("--nb-h", `${Number(c.height)}px`);

    const title = this.shadowRoot.querySelector(".card-title");
    if (c.title) {
      title.textContent = c.title;
      title.hidden = false;
    }

    this._els = [...this.shadowRoot.querySelectorAll(".item")].map((el) => ({
      el,
      label: el.querySelector(".label"),
      txt: el.querySelector(".txt"),
      num: el.querySelector(".num"),
      unit: el.querySelector(".unit"),
    }));

    if (this._ro && this.isConnected) {
      this._ro.disconnect();
      this._ro.observe(this.shadowRoot.querySelector(".wrap"));
    }
  }

  _read(entity) {
    const s = this._hass?.states?.[entity];
    if (!s) return null;
    const raw = String(s.state).trim();
    if (raw === "" || raw === "unavailable" || raw === "unknown") return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  _update() {
    if (!this._rows || !this._els) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const animate = this._config.animate !== false && !reduced;

    this._rows.forEach((row, i) => {
      const v = this._read(row.entity);
      const st = this._state.get(i) ?? {};
      if (v === null) {
        st.target = null;
        st.shown = null;
        st.start = null;
      } else if (st.shown == null || !animate) {
        st.shown = v;
        st.target = v;
        st.start = null;
      } else if (v !== st.target) {
        st.from = st.shown;
        st.target = v;
        st.start = performance.now();
      }
      this._state.set(i, st);
    });

    this._paint();
    if (!this._raf && [...this._state.values()].some((s) => s.start != null)) {
      this._raf = requestAnimationFrame(this._tick);
    }
  }

  _tick(now) {
    let active = false;
    for (const st of this._state.values()) {
      if (st.target != null && st.start != null) {
        const t = nbClamp((now - st.start) / 500, 0, 1);
        st.shown = nbLerp(st.from, st.target, nbEaseOut(t));
        if (t < 1) active = true;
        else st.start = null;
      }
    }
    this._paint();
    this._raf = active ? requestAnimationFrame(this._tick) : 0;
  }

  _paint() {
    let namesChanged = false;
    this._rows.forEach((row, i) => {
      const ref = this._els[i];
      const st = this._state.get(i);
      if (!ref || !st) return;
      const has = st.shown != null;
      const { min, max } = row.cfg;
      const p = has ? nbClamp((st.shown - min) / Math.max(1e-9, max - min), 0, 1) : 0;
      const zc = row.zc;
      const col = nbPickColor(zc && has ? nbClamp(Math.abs(st.shown) / zc.maxAbs, 0, 1) : p, row.stops);
      const entityState = this._hass?.states?.[row.entity];

      ref.el.classList.toggle("no-data", !has);
      ref.el.style.setProperty("--p", `${(p * 100).toFixed(2)}%`);
      if (zc) {
        ref.el.classList.toggle("neg", has && st.shown < 0);
        ref.el.style.setProperty("--s", `${(Math.min(p, zc.z) * 100).toFixed(2)}%`);
        ref.el.style.setProperty("--w", `${(Math.abs(p - zc.z) * 100).toFixed(2)}%`);
      }
      ref.el.style.setProperty("--c1", col.c1);
      ref.el.style.setProperty("--c2", col.c2);

      const name = row.cfg.name ?? entityState?.attributes?.friendly_name ?? row.entity;
      if (ref.txt.textContent !== name) {
        ref.txt.textContent = name;
        ref.label.title = name;
        namesChanged = true;
      }
      ref.num.textContent = has ? nbFormat(st.shown, row.cfg.precision ?? 0) : "—";
      ref.unit.textContent = has
        ? row.cfg.unit ?? entityState?.attributes?.unit_of_measurement ?? ""
        : "";
    });
    if (namesChanged) this._scheduleMeasure();
  }

  /** Laufschrift nur dort aktivieren, wo der Name wirklich nicht passt. */
  _scheduleMeasure() {
    if (this._measureRaf) return;
    this._measureRaf = requestAnimationFrame(() => {
      this._measureRaf = 0;
      this._measure();
    });
  }

  _measure() {
    if (!this._els) return;
    const enabled = !!this._config?.marquee;
    const speed = Math.max(5, Number(this._config?.marquee_speed) || 30);
    for (const ref of this._els) {
      if (!enabled) {
        ref.label.classList.remove("scroll");
        continue;
      }
      const overflow = Math.ceil(ref.txt.offsetWidth - ref.label.clientWidth);
      if (overflow > 1) {
        const shift = -(overflow + 2);
        // Hin- und Rücklauf mit Pausen an den Enden (je 18 % der Dauer)
        const dur = Math.max(4, overflow / speed / 0.64);
        ref.label.style.setProperty("--nb-shift", `${shift}px`);
        ref.label.style.setProperty("--nb-dur", `${dur.toFixed(2)}s`);
        ref.label.classList.add("scroll");
      } else {
        ref.label.classList.remove("scroll");
      }
    }
  }
}

/* Kurzformen für bestehende Konfigurationen */
class NeonHBarCard extends NeonBarCard {
  setConfig(config) {
    super.setConfig({ layout: "horizontal", ...config });
  }
  static getStubConfig() {
    return { type: "custom:neon-hbar-card", entities: [], min: 0, max: 100 };
  }
}

class NeonVBarCard extends NeonBarCard {
  setConfig(config) {
    super.setConfig({ layout: "vertical", ...config });
  }
  static getStubConfig() {
    return { type: "custom:neon-vbar-card", entities: [], min: 0, max: 100, height: 180 };
  }
}

/* ---------- Visueller Editor ---------- */

const NB_NUM = { number: { mode: "box", step: "any" } };

const NB_LABELS = {
  title: "Title (optional)",
  layout: "Layout",
  entities: "Entities (one bar per entity)",
  min: "Minimum value",
  max: "Maximum value",
  precision: "Decimals",
  unit: "Override unit (optional)",
  height: "Bar height in px",
  bar_size: "Bar thickness in px (optional)",
  follow_theme: "Use design from HA theme",
  segmented: "Segmented bars (LED look)",
  show_thresholds: "Show thresholds as markers",
  show_knob: "Show round knob",
  zero_center: "Zero-point mode (negative and positive values; Min < 0 < Max)",
  animate: "Animate values",
  marquee: "Marquee for long names",
  marquee_speed: "Marquee speed in px per second",
  background: "Override background (optional, CSS color or gradient)",
  normal: "Normal threshold",
  normal_color: "Normal color (hex, default: theme primary color)",
  warning: "Warning threshold",
  warning_color: "Warning color (hex, default: theme warning color)",
  critical: "Critical threshold",
  critical_color: "Critical color (hex, default: theme error color)",
};

function nbEditorSchema(layout) {
  const vertical = layout === "vertical";
  return [
    { name: "title", selector: { text: {} } },
    {
      name: "layout",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: "horizontal", label: "Horizontal" },
            { value: "vertical", label: "Vertical" },
          ],
        },
      },
    },
    {
      name: "entities",
      required: true,
      selector: { entity: { multiple: true, domain: ["sensor", "input_number", "number"] } },
    },
    {
      name: "",
      type: "grid",
      schema: [
        { name: "min", selector: NB_NUM },
        { name: "max", selector: NB_NUM },
        { name: "precision", selector: { number: { mode: "box", min: 0, max: 4, step: 1 } } },
        { name: "unit", selector: { text: {} } },
        ...(vertical
          ? [{ name: "height", selector: { number: { mode: "box", min: 60, step: 10 } } }]
          : []),
        { name: "bar_size", selector: { number: { mode: "box", min: 2, step: 1 } } },
      ],
    },
    {
      name: "",
      type: "grid",
      schema: [
        { name: "follow_theme", selector: { boolean: {} } },
        { name: "segmented", selector: { boolean: {} } },
        { name: "show_thresholds", selector: { boolean: {} } },
        { name: "show_knob", selector: { boolean: {} } },
        { name: "zero_center", selector: { boolean: {} } },
        { name: "animate", selector: { boolean: {} } },
        { name: "marquee", selector: { boolean: {} } },
      ],
    },
    { name: "marquee_speed", selector: { number: { mode: "box", min: 5, max: 200, step: 5 } } },
    { name: "background", selector: { text: {} } },
    {
      name: "",
      type: "expandable",
      title: "Color steps",
      schema: ["normal", "warning", "critical"].map((k) => ({
        name: "",
        type: "grid",
        schema: [
          { name: k, selector: NB_NUM },
          { name: `${k}_color`, selector: { text: {} } },
        ],
      })),
    },
  ];
}

class NeonBarCardEditor extends HTMLElement {
  set hass(hass) {
    ucpSetLang(hass); ucpAttach(this);
    this._hass = hass;
    if (this._form) this._form.hass = hass;
  }

  setConfig(config) {
    ucpAttach(this);
    this._config = config;
    this._render();
  }

  _render() {
    if (!this._form) {
      this._form = document.createElement("ha-form");
      this._form.computeLabel = (s) => ucpT(NB_LABELS[s.name] ?? s.name);
      this._form.addEventListener("value-changed", (ev) => {
        this.dispatchEvent(
          new CustomEvent("config-changed", {
            detail: { config: ev.detail.value },
            bubbles: true,
            composed: true,
          })
        );
      });
      this.appendChild(this._form);
    }
    this._form.hass = this._hass;
    this._form.schema = ucpTrSchema(nbEditorSchema(this._config?.layout));
    this._form.data = { layout: "horizontal", follow_theme: true, ...this._config };
  }
}

if (!customElements.get("neon-bar-card-editor")) customElements.define("neon-bar-card-editor", NeonBarCardEditor);
if (!customElements.get("neon-bar-card")) customElements.define("neon-bar-card", NeonBarCard);
if (!customElements.get("neon-hbar-card")) customElements.define("neon-hbar-card", NeonHBarCard);
if (!customElements.get("neon-vbar-card")) customElements.define("neon-vbar-card", NeonVBarCard);

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "neon-bar-card")) window.customCards.push({
  type: "neon-bar-card",
  name: "Neon Bar Card",
  description:
    "Glowing bars with color steps and threshold markers. Uses the HA theme, horizontal or vertical layout, optionally with LED look and marquee.",
  preview: true,
});


/* ---------- HA Ultimate Card Package ---------- */

const UCP_TAG = "ha-ultimate-card-package";
const UCP_TYPE = "custom:" + UCP_TAG;
const UCP_EDITOR = UCP_TAG + "-editor";
const UCP_ENERGY_TAG = "ha-ultimate-energy-values";
const UCP_ENERGY_TYPE = "custom:" + UCP_ENERGY_TAG;
const UCP_NUMERIC = ["sensor", "number", "input_number"];
const ucpText = (name) => ({ name, selector: { text: {} } });
const ucpBool = (name) => ({ name, selector: { boolean: {} } });
const ucpNumber = (name, limits = {}) => ({
  name, selector: { number: { mode: "box", step: "any", ...limits } },
});
const ucpSelect = (name, options) => ({
  name, selector: { select: { mode: "dropdown",
    options: Object.entries(options).map(([value, label]) => ({ value, label })),
  } },
});
// ids: vom Editor aus den HA-Zuständen berechnete Liste der für den Kartentyp sinnvollen Entitäten (hat Vorrang vor der Domain-Liste)
const ucpEntity = (domains, multiple = false, ids) => ({
  name: multiple ? "entities" : "entity",
  required: true,
  selector: { entity: { multiple, ...(ids?.length ? { include_entities: ids } : domains ? { domain: domains } : {}) } },
});
const ucpDomain = (id) => id.split(".")[0];
const ucpNumeric = (id, state) => UCP_NUMERIC.slice(1).includes(ucpDomain(id)) || ucpNum(state.state) != null ||
  (["unavailable", "unknown"].includes(state.state) && !!(state.attributes.unit_of_measurement || state.attributes.state_class));
// Welche Entitäten eine Karte als Hauptentität sinnvoll bedienen kann (ergänzt die Domain-Auswahl um Zustand und Attribute)
const UCP_ENTITY_FILTERS = {
  "dwd-warnings": (id, state) => ucpDomain(id) === "sensor" && (state.attributes.warning_count !== undefined ||
    /(current_warning_level|aktuelle_warnstufe)$/i.test(id)),
  washdata: (id, state) => ucpDomain(id) === "sensor" && (Array.isArray(state.attributes.options) && state.attributes.options.includes("finished") ||
    state.attributes.sub_state !== undefined || /(zustand|_state)$/i.test(id)),
  battery: (id, state) => UCP_NUMERIC.includes(ucpDomain(id)) && ucpNumeric(id, state) &&
    (state.attributes.device_class === "battery" || state.attributes.unit_of_measurement === "%"),
  gauge: (id, state) => UCP_NUMERIC.includes(ucpDomain(id)) && ucpNumeric(id, state),
  graph: (id, state) => ucpNumeric(id, state),
  slider: (id, state) => {
    const domain = ucpDomain(id);
    const a = state.attributes;
    if (domain === "cover" || domain === "media_player") return !!(Number(a.supported_features) & 4);
    if (domain === "light") return !Array.isArray(a.supported_color_modes) || a.supported_color_modes.some((mode) => !["onoff", "unknown"].includes(mode));
    return domain === "number" || domain === "input_number";
  },
};
const UCP_SLIDERS = {
  cover: "cover-position",
  light: "light-brightness",
  number: "numeric-input",
  input_number: "numeric-input",
  media_player: "media-player-volume-slider",
};

// Abspielmodi für play_media (enqueue); Music Assistant unterstützt alle vier
const UCP_MP_ENQUEUE = { replace: "Play now (replace queue)", play: "Play now (insert into queue)",
  next: "Play next", add: "Add to end of queue" };
// Feature-Flags von MediaPlayerEntityFeature
const UCP_MP = { PAUSE: 1, SEEK: 2, VOLUME_SET: 4, VOLUME_MUTE: 8, PREV: 16, NEXT: 32, SELECT_SOURCE: 2048, STOP: 4096,
  TURN_ON: 128, TURN_OFF: 256, PLAY: 16384, SHUFFLE: 32768, BROWSE: 131072, REPEAT: 262144, ENQUEUE: 2097152, SEARCH: 4194304 };
const UCP_MP_CLASS = { album: "Album", artist: "Artist", track: "Track", playlist: "Playlist", radio: "Radio",
  directory: "Folder", music: "Music", podcast: "Podcast", genre: "Genre", app: "Source", channel: "Station", composer: "Composer" };
const UCP_MP_ICON = { album: "mdi:album", artist: "mdi:account-music", track: "mdi:music-note", playlist: "mdi:playlist-music",
  radio: "mdi:radio", directory: "mdi:folder-music", music: "mdi:music", podcast: "mdi:podcast", genre: "mdi:music-box-multiple", app: "mdi:server" };
// Cover bevorzugt über die HA-eigene Adresse (entity_picture_local): gleiche Herkunft, kein CORS, auch wenn die Original-Adresse
// (z. B. der Music-Assistant-Imageproxy auf Port 8095) im Browser nicht erreichbar ist
const ucpCover = (attrs) => typeof attrs?.entity_picture_local === "string" && attrs.entity_picture_local ? attrs.entity_picture_local : attrs?.entity_picture;
const ucpClock = (seconds) => {
  const total = Math.max(0, Math.round(seconds));
  const h = Math.floor(total / 3600), m = Math.floor(total % 3600 / 60), sec = total % 60;
  return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(sec).padStart(2, "0");
};

// Energy Power Flow: Editor-Felder (Entitäten und Listen)
const ucpPfEntity = (name, multiple = false, deviceClass) => ({ name, selector: { entity: { domain: ["sensor", "number", "input_number"], multiple, ...(deviceClass ? { device_class: deviceClass } : {}) } } });
const ucpPfList = (name, fields, labelField = "name") => ({ name, selector: { object: { multiple: true, label_field: labelField, fields } } });
function ucpPowerFlowSchema() {
  const f = (label, selector, extra = {}) => ({ label: ucpT(label), selector, ...extra });
  const entity = (label, multiple = false) => f(label, { entity: { domain: ["sensor", "number", "input_number"], multiple } });
  const text = (label) => f(label, { text: {} });
  const icon = () => f("Icon", { icon: {} });
  const color = () => f("Color (optional)", { text: {} });
  return [
    ucpGrid(ucpSelect("pf_mode", { power: "Power (live)", energy: "Energy (period)" }), ucpBool("pf_mode_toggle")),
    ucpGrid(ucpBool("pf_show_consumers"), ucpBool("pf_energy_no_auto")),
    ucpSelect("pf_layout", { auto: "Automatic", horizontal: "Horizontal", vertical: "Vertical" }),
    ucpGrid(ucpSelect("pf_unit", { w: "Watt (W)", kw: "Kilowatt (kW)" }), ucpNumber("pf_decimals", { min: 0, max: 3, step: 1 })),
    ucpGrid(ucpBool("pf_animate"), ucpNumber("pf_max_power", { min: 0, step: 100 })),
    ucpGrid(ucpNumber("pf_fill", { min: 5, max: 60, step: 5 })),
    ucpGroup("Key figures (tiles)", [ucpGrid(ucpBool("pf_hide_autarky"), ucpBool("pf_hide_selfuse")), ucpGrid(ucpBool("pf_hide_production"), ucpBool("pf_hide_consumption")),
      ucpPfEntity("pf_day_import", false, "energy"), ucpPfEntity("pf_day_export", false, "energy"), ucpPfEntity("pf_day_production", false, "energy"), ucpPfEntity("pf_day_consumption", false, "energy")]),
    ucpGroup("Solar hubs", [ucpPfList("pf_hubs", { name: text("Name"), icon: icon(), pv_inputs: f("Number of PV inputs", { number: { min: 1, max: 4, mode: "box" } }),
      pv1_entity: entity("PV input 1 (power)"), pv2_entity: entity("PV input 2 (power)"), pv3_entity: entity("PV input 3 (power)"), pv4_entity: entity("PV input 4 (power)"),
      pv1_energy_entity: entity("PV input 1 (energy)"), pv2_energy_entity: entity("PV input 2 (energy)"), pv3_energy_entity: entity("PV input 3 (energy)"), pv4_energy_entity: entity("PV input 4 (energy)"),
      battery_charge_energy_entity: entity("Battery charged (energy)"), battery_discharge_energy_entity: entity("Battery discharged (energy)"), output_energy_entity: entity("Output to inverter (energy, optional)"),
      battery_name: text("Battery name (optional)"), battery_charge_entity: entity("Battery charging power sensor"), battery_discharge_entity: entity("Battery discharging power sensor"),
      battery_entity: entity("Battery power sensor (alternative: one sensor with sign)"), battery_invert: f("Battery: positive value = discharging", { boolean: {} }),
      soc_entity: entity("Charge level (%)"), bms_entity: entity("BMS value (optional)"), output_entity: entity("Output to inverter (power, optional)"),
      battery_position: f("Battery position", { select: { mode: "dropdown", options: [{ value: "auto", label: ucpT("Automatic (symmetric)") }, { value: "top", label: ucpT("Above the hub") }, { value: "bottom", label: ucpT("Below the hub") }] } }),
      inverter_input: text("Inverter input label (e.g. A)") })]),
    ucpGroup("Solar systems (directly at the inverter)", [ucpPfList("pf_pv", { entity: entity("Power sensor"), energy_entity: entity("Energy sensor"), name: text("Name"), icon: icon(), color: color(), inverter_input: text("Inverter input label (e.g. A)") })]),
    ucpGroup("Inverter and home", [ucpText("pf_inverter_name"), ucpPfEntity("pf_inverter_entity"), ucpPfEntity("pf_home_entity"), ucpPfEntity("pf_inverter_energy_entity", false, "energy"), ucpPfEntity("pf_home_energy_entity", false, "energy")]),
    ucpGroup("Power grid", [ucpPfEntity("pf_grid_entity"), ucpPfEntity("pf_grid_export_entity"), ucpPfEntity("pf_grid_in_energy_entity", false, "energy"), ucpPfEntity("pf_grid_out_energy_entity", false, "energy"),
      ucpGrid(ucpText("pf_grid_name"), ucpBool("pf_grid_invert"))]),
    ucpGroup("Home batteries (AC, at the home grid)", [ucpPfList("pf_batteries", { charge_energy_entity: entity("Battery charged (energy)"), discharge_energy_entity: entity("Battery discharged (energy)"), charge_entity: entity("Battery charging power sensor"), discharge_entity: entity("Battery discharging power sensor"), entity: entity("Battery power sensor (alternative: one sensor with sign)"), soc_entity: entity("Charge level (%)"),
      bms_entity: entity("BMS value (optional)"), name: text("Name"), icon: icon(), color: color(),
      invert: f("Positive value = discharging", { boolean: {} }) })]),
    ucpGroup("Consumers", [ucpPfList("pf_loads", { name: text("Name (e.g. floor or area)"), entities: entity("Power sensors (summed)", true), energy_entities: entity("Energy sensors (summed)", true), icon: icon(), color: color() })]),
    ucpGroup("Electric car", [ucpPfEntity("pf_car_entity"), ucpPfEntity("pf_car_energy_entity", false, "energy"), ucpPfEntity("pf_car_soc_entity"), ucpGrid(ucpText("pf_car_name"), ucpIconField("pf_car_icon"))]),
  ];
}
// Aktive Entitäten: Gruppen (Zugehörigkeit, "aktiv"-Bedingung, Farbe, Schalten per Tipp)
const UCP_AL_GROUPS = {
  light: { label: "Lamps on", pick: "Lamps", ticker: "The following {n} lamps are on:", tickerOne: "The following lamp is on:", icon: "mdi:lightbulb", color: "#f5b942", toggle: true,
    member: (id) => ucpDomain(id) === "light", active: (s) => s.state === "on" },
  switch: { label: "Switches on", pick: "Switches", ticker: "The following {n} switches are on:", tickerOne: "The following switch is on:", icon: "mdi:toggle-switch", color: "#f5b942", toggle: true,
    member: (id) => ["switch", "input_boolean"].includes(ucpDomain(id)), active: (s) => s.state === "on" },
  fan: { label: "Fans on", pick: "Fans", ticker: "The following {n} fans are on:", tickerOne: "The following fan is on:", icon: "mdi:fan", color: "#3ba7d9", toggle: true,
    member: (id) => ucpDomain(id) === "fan", active: (s) => s.state === "on" },
  window: { label: "Windows open", pick: "Windows", ticker: "The following {n} windows are open:", tickerOne: "The following window is open:", icon: "mdi:window-open-variant", color: "#3b82d9",
    member: (id, s) => ucpDomain(id) === "binary_sensor" && ["window", "opening"].includes(s.attributes.device_class), active: (s) => s.state === "on" },
  door: { label: "Doors open", pick: "Doors", ticker: "The following {n} doors are open:", tickerOne: "The following door is open:", icon: "mdi:door-open", color: "#d9823b",
    member: (id, s) => ucpDomain(id) === "binary_sensor" && ["door", "garage_door"].includes(s.attributes.device_class), active: (s) => s.state === "on" },
  cover: { label: "Covers open", pick: "Covers and blinds", ticker: "The following {n} covers are open:", tickerOne: "The following cover is open:", icon: "mdi:window-shutter-open", color: "#8b7fd9",
    member: (id) => ucpDomain(id) === "cover", active: (s) => ["open", "opening"].includes(s.state) },
  lock: { label: "Unlocked", pick: "Locks", ticker: "The following {n} locks are unlocked:", tickerOne: "The following lock is unlocked:", icon: "mdi:lock-open-variant", color: "#d94f4f",
    member: (id) => ucpDomain(id) === "lock", active: (s) => s.state === "unlocked" },
  media: { label: "Players active", pick: "Media players", ticker: "The following {n} media players are active:", tickerOne: "The following media player is active:", icon: "mdi:play-circle", color: "#3fb68b",
    member: (id) => ucpDomain(id) === "media_player", active: (s) => s.state === "playing" },
};
// Quellen der Update-Karte: Schlüssel = Integration (Plattform der Entität in der Entitätsregistrierung)
const UCP_UPDATE_SOURCES = { marketplace: "Marketplace", hassio: "Home Assistant Supervisor (apps)" };
const UCP_CARDS = {
  energy: { label: "Energy Values", schema: () => [] },
  bar: {
    label: "Bar",
    defaults: { layout: "horizontal", entities: [], min: 0, max: 100, follow_theme: true,
      show_thresholds: true, show_knob: true, zero_center: false, animate: true },
    schema: (c) => nbEditorSchema(c.layout)
      .filter((field) => !["title", "background"].includes(field.name))
      .map((field) => field.type === "expandable" ? { ...field, title: "Thresholds",
        schema: field.schema.flatMap((group) => group.schema.filter((entry) => !entry.name.endsWith("_color"))) }
        : field.type === "grid" ? { ...field, schema: field.schema.filter((entry) => entry.name !== "follow_theme") } : field),
  },
  battery: {
    label: "Battery",
    defaults: { show_value: true },
    schema: (c, ids) => [ucpEntity(["sensor", "number", "input_number"], false, ids), ucpBool("show_value")],
  },
  climate: {
    label: "Climate",
    schema: (c) => [ucpEntity(["climate"]), ucpSelect("climate_view", { dial: "Dial", compact: "Compact" }),
      ...(c.climate_view === "compact" ? [] : [ucpBool("show_modes")])],
    defaults: { show_modes: false, climate_view: "dial" },
  },
  clock: {
    label: "Clock",
    defaults: { clock_style: "digital", clock_size: "medium", show_seconds: false },
    schema: (c) => [
      ucpSelect("clock_style", { digital: "Digital", analog: "Analog" }),
      ...(c.clock_style === "analog" ? [ucpSelect("clock_size", { small: "Small", medium: "Medium", large: "Large" }),
        { name: "analog_options", type: "grid", schema: [
          ucpSelect("ticks", { hour: "Hour marks", minute: "Minute marks", none: "No marks" }), ucpBool("border")] }] : []),
      ...(c.clock_style === "analog" ? [] : [
        ucpSelect("time_format", { 12: "12 hours", 24: "24 hours" }),
        ucpNumber("clock_time_font_size", { min: 1, step: 1, unit_of_measurement: "px" }),
      ]),
      ucpNumber("clock_date_font_size", { min: 1, step: 1, unit_of_measurement: "px" }),
      ucpNumber("clock_detail_font_size", { min: 1, step: 1, unit_of_measurement: "px" }),
      ucpText("time_zone"), ucpBool("show_seconds"),
      ucpBool("clock_show_media_cover"),
      { name: "clock_media_player", selector: { entity: { domain: "media_player" } } },
    ],
  },
  "clock-music": {
    label: "Clock (Music)",
    defaults: { show_seconds: false, clock_show_media_cover: true, clock_music_visualizer: true, clock_vertical_align: "top" },
    schema: () => [
      { name: "clock_media_player", selector: { entity: { domain: "media_player" } } },
      ucpBool("clock_show_media_cover"), ucpBool("clock_music_visualizer"),
      ucpSelect("clock_vertical_align", { top: "Top", center: "Middle", bottom: "Bottom" }),
      ucpSelect("time_format", { 12: "12 hours", 24: "24 hours" }),
      ucpText("time_zone"), ucpBool("show_seconds"),
      ...["time", "date", "detail"].map((part) =>
        ucpNumber("clock_" + part + "_font_size", { min: 1, step: 1, unit_of_measurement: "px" })),
    ],
  },
  gauge: {
    label: "Gauge",
    defaults: { min: 0, max: 100, needle: false },
    schema: (c, ids) => [ucpEntity(UCP_NUMERIC, false, ids),
      ucpGrid(ucpNumber("min"), ucpNumber("max"), ucpText("unit"), ucpNumber("gauge_width", { min: 2, max: 24, step: 1 })),
      ucpGrid(ucpBool("needle"))],
  },
  graph: {
    label: "Graph",
    defaults: { entities: [], hours_to_show: 24, follow_energy_date: true, line_width: 2, graph_function: "history" },
    schema: (c, ids) => [ucpEntity(undefined, true, ids), ucpNumber("hours_to_show", { min: 1, step: 1 })],
  },
  light: {
    label: "Light",
    schema: () => [ucpEntity(["light"]), ucpText("icon"), ucpText("light_colors")],
  },
  mediaplayer: {
    label: "Mediaplayer",
    defaults: { layout: "large", mp_show_cover: true, mp_show_progress: true, mp_show_volume: true, mp_show_mute: true,
      mp_show_source: true, mp_show_shuffle_repeat: true, mp_show_library: true, mp_show_power: true, mp_show_visualizer: false, mp_enqueue: "replace" },
    schema: () => [ucpEntity(["media_player"]),
      ucpSelect("layout", { large: "Large (with cover)", compact: "Compact (one row)" }),
      ucpNumber("mp_button_size", { min: 28, max: 80, step: 1 }),
      ucpGroup("Display", [ucpGrid(ucpBool("mp_show_cover"), ucpBool("mp_show_progress")),
        ucpGrid(ucpBool("mp_show_volume"), ucpBool("mp_show_mute")),
        ucpGrid(ucpBool("mp_show_source"), ucpBool("mp_show_shuffle_repeat")), ucpBool("mp_show_visualizer")]),
      ucpGroup("Music Assistant", [ucpBool("mp_show_library"), ucpBool("mp_show_power"), ucpBool("mp_hide_media_source"), ucpSelect("mp_enqueue", UCP_MP_ENQUEUE)])],
  },
  slider: {
    label: "Slider",
    schema: (c, ids) => [ucpEntity(Object.keys(UCP_SLIDERS), false, ids), ],
  },
  state: {
    label: "State",
    defaults: { vertical: true },
    schema: (c, ids, hass) => {
      const attributes = hass?.states?.[c?.entity]?.attributes ?? {};
      const keys = [...new Set([...Object.keys(attributes), ...(c?.state_attribute ? [c.state_attribute] : [])])].sort();
      const raw = c?.state_attribute && Object.hasOwn(attributes, c.state_attribute) ? attributes[c.state_attribute] : undefined;
      return [ucpEntity(), { name: "state_attribute", selector: { select: { mode: "dropdown", options: [
        { value: "", label: "Entity state" }, ...keys.map((value) => ({ value, label: value })) ] } } },
        ...(ucpDetailDate(raw) || c?.state_date_format ? [ucpText("state_date_format")] : []), ucpBool("show_last_changed")];
    },
  },
  switch: {
    label: "Switch",
    defaults: { vertical: true },
    schema: () => [ucpEntity(["switch", "input_boolean", "light", "fan"]), ucpText("icon")],
  },
  washdata: {
    label: "WashData · Washer/Dryer",
    defaults: { wd_show_controls: true, wd_show_profiles: true, wd_blink: true },
    schema: () => [ucpEntity(["sensor"]), ucpText("icon"), ucpGrid(ucpBool("wd_show_controls"), ucpBool("wd_show_profiles")), ucpBool("wd_blink"),
      ucpGroup("Assign entities manually (optional, otherwise automatic)",
        ["wd_program", "wd_remaining", "wd_progress", "wd_power", "wd_phase", "wd_select"].map((name) => ({ name, selector: { entity: {} } })))],
  },
  "active-list": {
    label: "Active Entities",
    defaults: { al_layout: "detailed", al_groups: ["light", "window"], al_show_area: true, al_tap: "auto", al_chip_label: "name", al_ticker_always: true },
    schema: (c) => [
      ucpSelect("al_layout", { detailed: "Detailed", compact: "Compact", minimal: "Minimal", ticker: "Marquee" }),
      { name: "al_groups", selector: { select: { multiple: true, mode: "list",
        options: Object.entries(UCP_AL_GROUPS).map(([value, g]) => ({ value, label: g.pick })) } } },
      { name: "entities", selector: { entity: { multiple: true } } },
      { name: "al_exclude", selector: { entity: { multiple: true } } },
      ...(c.al_layout === "ticker" ? [ucpSelect("al_chip_label", { name: "Name", area: "Area" }), ucpText("al_ticker_text"), ucpNumber("al_ticker_speed", { min: 10, max: 400, step: 5 }), ucpBool("al_ticker_always")] : c.al_layout === "compact" ? [ucpSelect("al_chip_label", { name: "Name", area: "Area" })] : c.al_layout === "minimal" ? [ucpGrid(ucpBool("al_tile_names"), ucpBool("al_group_names"))] : [ucpBool("al_show_area")]),
      ucpSelect("al_tap", { auto: "Switch lamps, details for others", info: "Always show details", none: "No action" }),
      ucpText("al_empty_text")],
  },
  updates: {
    label: "Updates",
    defaults: { up_show_versions: true, up_sources: ["marketplace"] },
    schema: () => [{ name: "up_sources", selector: { select: { multiple: true, mode: "dropdown", options: Object.entries(UCP_UPDATE_SOURCES).map(([value, label]) => ({ value, label })) } } },
      { name: "entities", selector: { entity: { multiple: true, domain: "update" } } },
      { name: "up_exclude", selector: { entity: { multiple: true, domain: "update" } } },
      ucpGrid(ucpBool("up_show_versions"), ucpBool("up_show_all")), ucpGrid(ucpText("up_color_supervisor"), ucpText("up_color_marketplace"))],
  },
  birdnet: {
    label: "BirdNET",
    defaults: { name: "BirdNET", entity: "sensor.birdnet_erkennungen_heute", hm_attribute: "stunden", hm_max_rows: 10, hm_sort: "total", hm_show_values: true, hm_show_legend: true, hm_show_daylight: true, hm_sun_entity: "sun.sun", follow_energy_date: true, hm_subtitle: "Species detections per hour", bn_stats_entity: "sensor.birdnet_statistik", bn_default_tab: "overview", bn_wiki_images: true },
    schema: (c) => [ucpEntity(["sensor"]), { name: "bn_stats_entity", selector: { entity: { domain: ["sensor"] } } },
      ucpSelect("bn_default_tab", { overview: "Overview", analysis: "Analysis summary", species: "Species analysis" }),
      ucpGrid(ucpBool("follow_energy_date"), ...(c.follow_energy_date !== false ? [ucpText("collection_key")] : [])),
      ucpGrid(ucpNumber("hm_max_rows", { min: 1, max: 50, step: 1 }), ucpSelect("hm_sort", { total: "By total", name: "By name" })),
      ucpGrid(ucpBool("hm_show_values"), ucpBool("hm_show_legend")),
      ucpGrid(ucpBool("hm_show_daylight"), { name: "hm_sun_entity", selector: { entity: { domain: ["sun"] } } }),
      ucpBool("bn_wiki_images"), ucpText("bn_image_url")],
  },
  "dwd-warnings": {
    label: "Weather Warning",
    defaults: { dwd_show_advance: true, dwd_max_items: 5 },
    schema: () => [ucpEntity(["sensor"]), { name: "dwd_advance_entity", selector: { entity: { domain: ["sensor"] } } },
      ucpGrid(ucpBool("dwd_show_advance"), ucpBool("dwd_expand_all")),
      ucpGrid(ucpBool("dwd_hide_region"), ucpBool("dwd_hide_updated")),
      ucpNumber("dwd_max_items", { min: 1, max: 20, step: 1 })],
  },
  pihole: {
    label: "Pi-hole · DNS ad blocker",
    defaults: { ph_show_graph: true, ph_show_toggle: true, ph_show_history: true },
    schema: () => [ucpEntity(["binary_sensor", "switch", "sensor"]), ucpText("icon"),
      ucpGrid(ucpBool("ph_show_graph"), ucpBool("ph_show_toggle")), ucpBool("ph_show_history"),
      ucpGroup("Hide tiles", [ucpGrid(ucpBool("ph_hide_queries"), ucpBool("ph_hide_blocked")), ucpGrid(ucpBool("ph_hide_percent"), ucpBool("ph_hide_domains"))])],
  },
  "power-flow": {
    label: "Energy Power Flow",
    defaults: { hide_title: true, pf_layout: "auto", pf_show_consumers: true, pf_mode: "power", pf_mode_toggle: true, pf_unit: "w", pf_decimals: 1, pf_animate: true, pf_hubs: [{ name: "Hub 1200", pv_inputs: 2, inverter_input: "A" }, { name: "Hub 2000", pv_inputs: 2, inverter_input: "B" }], pf_pv: [], pf_batteries: [], pf_loads: [] },
    schema: () => ucpPowerFlowSchema(),
  },
  wrapper: {
    label: "Style wrapper (other cards)",
    defaults: { hide_title: true, wrapper_padding: 4, wrapped_card: { type: "energy-date-selection" } },
    schema: () => [{ name: "wrapped_card", selector: { object: {} } }, ucpNumber("wrapper_padding", { min: 0, max: 32, step: 1 })],
  },
  "weather-forecast": {
    label: "Weather Forecast",
    defaults: { forecast_type: "daily", forecast_days: 5, show_current: true, show_forecast: true, forecast_minmax: true, forecast_border: true, dwd_show_advance: true, dwd_max_items: 5 },
    schema: () => [
      ucpEntity(["weather"]),
      ucpBool("show_current"), ucpBool("show_forecast"),
      ucpSelect("forecast_type", { daily: "Daily", hourly: "Hourly", twice_daily: "Twice daily" }),
      ucpNumber("forecast_days", { min: 1, max: 48, step: 1 }),
      ucpBool("round_temperature"), ucpGrid(ucpBool("forecast_minmax"), ucpBool("forecast_border")),
      ucpGrid(ucpNumber("forecast_font_size", { min: 1, step: 1, unit_of_measurement: "px" }), ucpNumber("forecast_icon_size", { min: 1, step: 1, unit_of_measurement: "px" })),
      ucpText("forecast_icon_color"),
      ucpGroup("Weather warnings", [
        ucpBool("show_warnings"),
        { name: "dwd_entity", selector: { entity: { domain: ["sensor"] } } },
        { name: "dwd_advance_entity", selector: { entity: { domain: ["sensor"] } } },
        ucpGrid(ucpBool("dwd_show_advance"), ucpBool("dwd_expand_all")),
        ucpGrid(ucpBool("dwd_hide_region"), ucpBool("dwd_hide_updated")),
        ucpGrid(ucpSelect("dwd_layout", { horizontal: "Horizontal", vertical: "Vertical" }), ucpNumber("dwd_max_items", { min: 1, max: 20, step: 1 })),
      ]),
    ],
  },
};

const UCP_ALIGN = { left: "Left", center: "Centered", right: "Right" };
// Style-Presets der Karten; weitere Styles hier eintragen (Schlüssel = Wert von card_style, am Host als data-card-style gesetzt)
// Ohne Preset ("default") reagieren die Karten ausschließlich auf das aktive Home-Assistant-Theme; Preset-CSS steht in UCP_PRESETS.
// Öffentliche Namen (YAML) = Bezeichnung im Karteneditor in Kleinschreibung, mit Bindestrichen und ohne Klammern; intern bleiben die alten Schlüssel, die alten Namen werden weiter gelesen
const UCP_STYLE_PUBLIC = { neon_flow: "neon-flow", glassmorphism: "morph-glass", neumorphism: "morph-neo-light", neumorphism_dark: "morph-neo-dark", flat: "flat-dark-blue-orange", skeuomorph: "morph-metal" };
const UCP_TYPE_PUBLIC = { energy: "energy-values", "power-flow": "energy-power-flow", "active-list": "active-entities", "dwd-warnings": "weather-warning", pihole: "pi-hole", wrapper: "style-wrapper" };
const ucpReverse = (map) => Object.fromEntries(Object.entries(map).map(([key, value]) => [value, key]));
const UCP_STYLE_INTERNAL = ucpReverse(UCP_STYLE_PUBLIC), UCP_TYPE_INTERNAL = ucpReverse(UCP_TYPE_PUBLIC);
const ucpStyleId = (style) => UCP_STYLE_INTERNAL[style] ?? style;
const ucpStyleOut = (style) => UCP_STYLE_PUBLIC[style] ?? style;
const ucpTypeId = (type) => UCP_TYPE_INTERNAL[type] ?? type;
const ucpTypeOut = (type) => UCP_TYPE_PUBLIC[type] ?? type;
const UCP_STYLES = { default: "Home Assistant theme", neon: "Neon", [ucpStyleOut("neon_flow")]: "Neon (Flow)", [ucpStyleOut("glassmorphism")]: "Morph (glass)",
  [ucpStyleOut("neumorphism")]: "Morph (neo light)", [ucpStyleOut("neumorphism_dark")]: "Morph (neo dark)", [ucpStyleOut("flat")]: "Flat (dark blue/orange)",
  [ucpStyleOut("skeuomorph")]: "Morph (metal)", minimal: "Minimal" };
// Kartentypen, die das horizontale Layout (Name links, Inhalt rechts) unterstützen
// Tap-Actions: Karte, Icon, Name, State (Standard: toggle bei Light und Switch, sonst keine)
// Nach oben scrollen: alle scrollbaren Elemente oberhalb der Karte (auch über Shadow-DOM-Grenzen) sowie das Fenster
// Popup-Fuß: nur zeigen, was gebraucht wird. Datumsauswahl nur, wenn eine Karte im Popup der Energie-Datumsauswahl folgt; "Nach oben" nur, wenn das Popup scrollt.
function ucpWalk(node, test, depth = 0) {
  if (!node || typeof node !== "object" || depth > 40) return false;
  if (!Array.isArray(node) && test(node)) return true;
  return Object.values(node).some((value) => ucpWalk(value, test, depth + 1));
}
function ucpUsesEnergyDate(cards) {
  return ucpWalk(cards, (o) => {
    if (o.follow_energy_date === true) return true;
    const type = typeof o.type === "string" ? o.type.toLowerCase() : "";
    if (type === "energy-date-selection") return false;
    if (type.startsWith("energy-") || /energy|birdnet/.test(type.replace(/^custom:ha-ultimate-card-package$/, ""))) return true;
    if (type === "custom:ha-ultimate-card-package") {
      const kind = o.card_type;
      if (kind === "energy") return true;
      if (kind === "power-flow") return o.pf_mode === "energy" || o.pf_mode_toggle !== false;
      if (kind === "graph" || kind === "birdnet") return o.follow_energy_date !== false;
    }
    return false;
  });
}
const ucpIsDateSelection = (item) => ucpWalk(item, (o) => o.type === "energy-date-selection");
const ucpIsScrollTop = (item) => ucpWalk(item, (o) => o.action === "navigate" && /^scroll:\s*top$/i.test(String(o.navigation_path ?? "").trim()));
// Fuß-Konfiguration auf das Nötige kürzen (Stacks/Layouts mit "cards" werden durchsucht); null = nichts übrig
function ucpPruneFooter(item, need) {
  if (!item || typeof item !== "object") return item;
  if (Array.isArray(item.cards)) {
    const cards = item.cards.map((child) => ucpPruneFooter(child, need)).filter(Boolean);
    return cards.length ? { ...item, cards } : null;
  }
  const date = ucpIsDateSelection(item), top = ucpIsScrollTop(item);
  if (!date && !top) return item;
  return (date && need.energy) || (top && need.scroll) ? item : null;
}
function ucpScrollTop(from) {
  const up = (el) => { if (el && el.scrollTop > 0) { try { el.scrollTo({ top: 0, behavior: "smooth" }); } catch { el.scrollTop = 0; } } };
  for (let node = from, guard = 0; node && guard < 200; guard++) {
    up(node);
    // Popup: der Fuß liegt neben dem Scrollbereich (nicht darin), deshalb den Scrollbereich des Popups gezielt mitnehmen
    if (node.classList?.contains?.("ucp-popup")) up(node.querySelector(".ucp-popup-body"));
    node = node.assignedSlot ?? node.parentNode ?? node.host;
  }
  up(document.scrollingElement);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const UCP_TAP_KEYS = ["tap_action", "icon_tap_action", "name_tap_action", "state_tap_action"];
const UCP_DOUBLE_KEYS = ["double_tap_action", "icon_double_tap_action", "name_double_tap_action", "state_double_tap_action"];
const UCP_HOLD_KEYS = ["hold_action", "icon_hold_action", "name_hold_action", "state_hold_action"];
const UCP_ACTION_KEYS = [...UCP_TAP_KEYS, ...UCP_DOUBLE_KEYS, ...UCP_HOLD_KEYS];
const UCP_POPUP_WIDTHS = { auto: "Automatic (width of the section)", small: "Small", medium: "Medium", large: "Large", full: "Full width (90 % of the window)" };
const ucpActionFields = (keys, def) => keys.map((name) => ({ name, selector: { ui_action: { default_action: def } } }));
// Bereich "Actions": Tap-, Double-Tap- und Hold-Actions (je Karte, Icon, Name, State)
const ucpTapGroup = (type) => ucpGroup("Actions", [
  ucpGroup("Tap-Actions", ucpActionFields(UCP_TAP_KEYS, ["light", "switch"].includes(type) ? "toggle" : "none")),
  ucpGroup("Double-Tap-Actions", ucpActionFields(UCP_DOUBLE_KEYS, "none")),
  ucpGroup("Hold-Actions", ucpActionFields(UCP_HOLD_KEYS, "none")),
  ucpGroup("Popup", [{ name: "popup_dashboard", selector: { text: {} },
      helper: "Open a popup with the action \"Navigate\" and the path popup:Section name (heading of a section in the popup dashboard). Optionally popup:dashboard::Section name. Show only one card: popup:Section name#2 (number) or popup:Section name#Card name. Scroll the page to the top with the action \"Navigate\" and the path scroll:top." },
    { name: "popup_trigger_entity", selector: { entity: {} } },
    { name: "popup_trigger_state", selector: { text: {} } },
    { name: "popup_trigger_popup", selector: { text: {} }, helper: "Opens this popup automatically (like the action path, without \"popup:\") when the trigger entity changes to the trigger state. Leave the state empty to open on every change. Works while the dashboard with this card is open." },
    ucpSelect("popup_width", UCP_POPUP_WIDTHS), ucpNumber("popup_auto_close", { min: 0, max: 3600, step: 1 }), ucpBool("popup_hide_footer")])]);
const UCP_H_LAYOUT = ["battery", "light", "state", "switch", "slider", "gauge", "climate"];
// Gemeinsame Optionen im Bereich "Styling" (für alle Kartentypen)
// px-Felder im Styling-Bereich: reine Zahleneingabe (Textfeld) statt Zahlenfeld mit Mini-Pfeilen
const UCP_PX_FIELDS = new Set(["title_font_size", "state_font_size", "title_icon_size", "clock_time_font_size", "clock_date_font_size",
  "clock_detail_font_size", "forecast_font_size", "forecast_icon_size"]);
// Karten ohne Zustandswert (Status): Schriftgröße/Farbe/„Status ausblenden“ wären wirkungslos
const UCP_NO_STATE_TYPES = ["energy", "dwd-warnings", "power-flow", "active-list", "updates", "birdnet", "wrapper"];
const ucpStylingBase = (type) => [...(type === "dwd-warnings" ? [ucpGrid(ucpSelect("dwd_layout", { horizontal: "Horizontal", vertical: "Vertical" }))]
    : UCP_H_LAYOUT.includes(type) ? [ucpGrid(ucpSelect("card_layout", { vertical: "Vertical", horizontal: "Horizontal" }))] : []),
  ucpGrid(ucpText("title_font_size"), ucpText("title_color")),
  ...(UCP_NO_STATE_TYPES.includes(type) ? [] : [ucpGrid(ucpText("state_font_size"), ucpText("state_color"))]),
  ucpGrid(ucpText("title_icon_size"), ucpText("title_icon_color")),
  ucpGrid(ucpText("bg_color"), ucpText("border_color")),
  ucpGrid(ucpText("border_width"), ucpSelect("border_style", UCP_BORDER_STYLES)),
  ucpGrid(ucpText("shadow_size"), ucpText("shadow_angle")),
  ucpGrid(ucpText("shadow_opacity"), ucpText("shadow_color")),
  ucpGrid(ucpText("inset_size"), ucpText("inset_angle")),
  ucpGrid(ucpText("inset_opacity"), ucpText("inset_color"))];
const ucpAlign = (value, fallback = "left") => Object.hasOwn(UCP_ALIGN, value) ? value : fallback;
const ucpGrid = (...schema) => ({ name: "", type: "grid", schema });
const ucpIconField = (name) => ({ name, selector: { icon: {} } });
const ucpGroup = (title, schema) => ({ name: "", type: "expandable", title, schema });
const UCP_DIAL_TYPES = ["gauge", "climate"];
// Kopfzeilen des Editors (für alle Kartentypen gleich): Name | Icon, Name ausblenden | Icon ausblenden, Status ausblenden | Laufschrift
const ucpHeadFields = (type) => [ucpGrid(ucpText("name"), ucpIconField("title_icon")),
  ucpGrid(ucpBool("hide_title"), ucpBool("hide_title_icon")), ucpGrid(...(UCP_NO_STATE_TYPES.includes(type) ? [] : [ucpBool("hide_state")]), ucpBool("name_marquee"))];
// Optionen, die im aufklappbaren Bereich "Styling" (Farben, Größen, Schriftgrößen) landen
const UCP_STYLING_NAMES = new Set(["state_font_size", "clock_time_font_size", "clock_date_font_size", "clock_detail_font_size",
  "forecast_font_size", "forecast_icon_size", "forecast_icon_color", "heating_color", "light_colors", "gauge_width", "line_width",
  "led_segments", "background", "bar_size", "mp_button_size"]);
function ucpSplitStyling(fields) {
  const styling = [], rest = [];
  for (const field of fields) {
    if (field.type === "grid") {
      const [s, r] = ucpSplitStyling(field.schema);
      if (s.length) styling.push(ucpGrid(...s));
      if (r.length) rest.push(ucpGrid(...r));
    } else if ((field.type === "expandable" && /^Farben/.test(field.title)) || UCP_STYLING_NAMES.has(field.name)) styling.push(UCP_PX_FIELDS.has(field.name) ? ucpText(field.name) : field);
    else rest.push(field);
  }
  return [styling, rest];
}
const UCP_DETAIL_LABELS = {
  battery: ["Charging power", "Remaining runtime", "Capacity"], climate: ["Mode", "Air humidity", "Fan", "Profile"],
  light: ["Brightness", "Color temperature", "Effect"], mediaplayer: ["Source", "Volume", "Status"],
  slider: ["Status"],
  pihole: ["Domains on blocklist", "Unique domains", "Active clients", "Total clients", "From cache", "Forwarded", "Updates"],
  washdata: ["Power", "Remaining time", "Total duration", "Elapsed", "Phase", "Cycles", "Total energy", "Projected energy", "Last cycle", "Last cycle energy", "Last cycle cost", "Maintenance", "Recommendations"],
  "weather-forecast": ["Humidity", "Wind", "UV index", "Pressure"],
};
const ucpDetailName = (index) => "detail_builtin_" + index;
// Sortiert [token, eintrag]-Paare nach der gespeicherten Reihenfolge (detail_order); nicht gelistete Einträge folgen in Standardreihenfolge
const ucpSortDetails = (entries, order) => {
  const list = Array.isArray(order) ? order : [];
  const rank = (token) => { const at = list.indexOf(token); return at < 0 ? list.length : at; };
  return entries.map((entry, index) => [entry, index]).sort(([a, i], [b, j]) => rank(a[0]) - rank(b[0]) || i - j).map(([entry]) => entry);
};
function ucpDetailDate(value, timeZone) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  const date = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](.*))?$/.exec(text);
  const time = /^(\d{1,2}):([0-5]\d)(?::([0-5]\d)(?:\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/i.exec(date ? date[4] ?? "" : text);
  if ((!date && !time) || (date?.[4] != null && !time) || (time && Number(time[1]) > 23)) return null;
  const [, yyyy, mm, dd] = date ?? [];
  if (date) {
    const calendar = new Date(yyyy + "-" + mm + "-" + dd + "T00:00:00Z");
    if (!Number.isFinite(+calendar) || calendar.toISOString().slice(0, 10) !== text.slice(0, 10)) return null;
  }
  const parts = { year: yyyy, month: mm, day: dd, hour: time?.[1].padStart(2, "0"), minute: time?.[2], second: time?.[3] ?? "00" };
  if (date && time?.[4]) {
    const instant = new Date(text.replace(" ", "T"));
    if (!Number.isFinite(+instant)) return null;
    if (timeZone) {
      const formatter = new Intl.DateTimeFormat("de-DE", {timeZone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"});
      for (const {type, value} of formatter.formatToParts(instant)) {
        if (Object.hasOwn(parts, type)) parts[type] = value;
      }
    }
  }
  return {kind: date && time ? "datetime" : date ? "date" : "time", ...parts};
}

// Winkel (0–360°) → Himmelsrichtung; Texte (z. B. "NW") bleiben unverändert
const UCP_COMPASS = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
function ucpCompass(value) {
  if (value == null || value === "" || typeof value === "boolean" || typeof value === "object") return null;
  const deg = Number(value);
  if (!Number.isFinite(deg)) return null;
  return ucpT(UCP_COMPASS[Math.round((((deg % 360) + 360) % 360) / 22.5) % 16]);
}
// Einheit eines Attributs (alle Entitätsklassen): 1) "<attribut>_unit"  2) Einheit laut Attributname/Muster
// (Systemeinheiten aus hass.config.unit_system)  3) Min/Max/Step-Attribute erben die Einheit der Entität
const UCP_ATTR_UNIT_KEYS = { apparent_temperature: "temperature_unit", dew_point: "temperature_unit", templow: "temperature_unit",
  wind_gust_speed: "wind_speed_unit" };
const UCP_ATTR_FIXED = { humidity: "%", current_humidity: "%", target_humidity: "%", min_humidity: "%", max_humidity: "%", cloud_coverage: "%",
  battery_level: "%", battery: "%", precipitation_probability: "%", brightness_pct: "%", volume_level: "%", percentage: "%", position: "%",
  current_position: "%", tilt_position: "%", current_tilt_position: "%", color_temp_kelvin: "K", min_color_temp_kelvin: "K", max_color_temp_kelvin: "K",
  rssi: "dBm", signal_strength: "dBm", voltage: "V", current: "A", power: "W", energy: "kWh", frequency: "Hz", illuminance: "lx", uv_index: "",
  wind_bearing: "°", elevation: "°", azimuth: "°", latitude: "°", longitude: "°", gps_accuracy: "m", ozone: "µg/m³" };
const UCP_ATTR_PATTERNS = [
  [/(^|_)temperature(_|$)|^(temp|current_temp|target_temp\w*|min_temp|max_temp|temp_step|target_temperature_step)$/, "temperature"],
  [/(^|_)(wind_)?speed(_|$)/, "wind_speed"], [/(^|_)pressure(_|$)/, "pressure"], [/(^|_)(distance|altitude|visibility)(_|$)/, "length"],
  [/(_|^)(percent|percentage|pct)$/, "%"], [/_kwh$/, "kWh"], [/_wh$/, "Wh"], [/_(w|watt|watts)$/, "W"], [/_(v|volt|volts)$/, "V"],
  [/_(a|amp|amps)$/, "A"], [/_(seconds?|secs?)$/, "s"], [/_minutes?$/, "min"], [/_hours?$/, "h"], [/_days?$/, "d"], [/_(dbm)$/, "dBm"] ];
function ucpAttrUnit(hass, state, attribute, raw) {
  if (raw == null || raw === "" || typeof raw === "object" || typeof raw === "boolean" || !Number.isFinite(Number(raw))) return "";
  if (/(^|_)(bearing|direction)$/.test(String(attribute).toLowerCase()) && /wind|bearing/.test(String(attribute).toLowerCase())) return "";
  const attrs = state?.attributes || {};
  const u = hass?.config?.unit_system || {};
  const str = (v) => (typeof v === "string" ? v.trim() : "");
  const own = str(attrs[attribute + "_unit"]) || str(attrs[UCP_ATTR_UNIT_KEYS[attribute]]);
  if (own) return own;
  const key = String(attribute).toLowerCase();
  if (Object.hasOwn(UCP_ATTR_FIXED, key)) return UCP_ATTR_FIXED[key];
  if (/^(min|max|step|min_value|max_value|mean|median|last_period|last_changed_value)$/.test(key)) return str(attrs.unit_of_measurement);
  for (const [re, kind] of UCP_ATTR_PATTERNS) {
    if (!re.test(key)) continue;
    if (kind === "temperature") return str(attrs.temperature_unit) || str(u.temperature);
    if (kind === "wind_speed") return str(attrs.wind_speed_unit) || str(u.wind_speed);
    if (kind === "pressure") return str(attrs.pressure_unit) || str(u.pressure);
    if (kind === "length") return str(attrs.visibility_unit) || str(u.length);
    return kind;
  }
  return "";
}
function ucpFormatDetailDate(value, format, timeZone, language = "de") {
  if (typeof format !== "string" || !format.trim()) return undefined;
  const date = ucpDetailDate(value, timeZone);
  if (!date) return undefined;
  if (format === "dd.mm") format = "dd.mm.";
  const {kind, year, month, day, hour, minute, second} = date;
  const fields = {yyyy: year, yy: year?.slice(-2), dd: day, MM: month, hh: hour, min: minute, ss: kind === "date" ? undefined : second};
  let clock = kind === "time";
  let substituted = false;
  let missing = false;
  const formatted = format.replace(/\[[^\]]*\]|MMMM|mmmm|yyyy|yy|dd|MM|hh|min|mm|ss/g, (token) => {
    if (token.startsWith("[")) return token.slice(1, -1);
    if (token === "MMMM" || token === "mmmm") {
      clock = false;
      substituted = true;
      if (!month) {
        missing = true;
        return "";
      }
      const calendarDate = new Date(Date.UTC(2000, Number(month) - 1, 1));
      return new Intl.DateTimeFormat(language, {month: "long", timeZone: "UTC"}).format(calendarDate);
    }
    if (token === "hh" || token === "min" || token === "ss") clock = true;
    if (token === "dd" || token === "MM" || token === "yyyy" || token === "yy") clock = false;
    const part = token === "mm" ? (clock ? minute : month) : fields[token];
    substituted = true;
    missing ||= part == null;
    return part ?? "";
  });
  return substituted && !missing ? formatted : undefined;
}
const UCP_DETAIL_FIELDS = {
  name: ["Name", ucpText], align: ["Alignment", (name) => ucpSelect(name, UCP_ALIGN)],
  icon: ["Icon (optional)", ucpIconField], hide_name: ["Hide names", ucpBool], hide_icon: ["Hide icon", ucpBool],
  color_on: ["Font color (on)", ucpText], color_off: ["Font color (off)", ucpText],
  bg_on: ["Background (on)", ucpText], bg_off: ["Background (off)", ucpText],
  shadow_on: ["Shadow (on)", ucpText], shadow_off: ["Shadow (off)", ucpText],
};
const ucpDetailKey = (kind, index) => "ucp_detail_" + kind + "_" + index + "_";
const ucpLedCount = (value, fallback = 24) => nbClamp(Math.round(ucpNum(value) ?? fallback), 1, 100);
// Temporarily expose only the verified statistics functions.
const UCP_LEGEND_ALIGNS = { start: "Left", center: "Center", end: "Right", "space-between": "Distributed" };
const UCP_GRADIENT_DIRS = { auto: "Automatic", "top-bottom": "Top → bottom", "bottom-top": "Bottom → top",
  "left-right": "Left → right", "right-left": "Right → left" };
const UCP_LINE_FILLS = { first: "First series only", all: "All series", none: "No fill" };
// Farbwert für alle Farbfelder: gültige CSS-Farbe, var(--…) oder Theme-Variable auch ohne var() ("primary-color", "--primary-color"); sonst ""
function ucpColorValue(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  if (/^var\(\s*--[\w-]+\s*(,[^;{}]*)?\)$/.test(text)) return text;
  if (globalThis.CSS?.supports?.("color", text)) return text;
  const name = text.match(/^(?:--)?([a-z][\w-]*)$/i);
  return name ? "var(--" + name[1] + ")" : "";
}
// Löst eine (ggf. Theme-)Farbe in [r, g, b] auf, z. B. für Home-Assistant-Dienste
function ucpResolveRgb(parent, color) {
  try {
    const probe = document.createElement("span");
    probe.style.color = color;
    parent.append(probe);
    const computed = getComputedStyle(probe).color;
    probe.remove();
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = "#000"; ctx.fillStyle = computed; ctx.fillRect(0, 0, 1, 1);
    return [...ctx.getImageData(0, 0, 1, 1).data].slice(0, 3);
  } catch { return null; }
}
const ucpSplitColors = (value) => (Array.isArray(value) ? value : String(value ?? "").split(/,(?![^(]*\))/))
  .map((item) => String(item).trim()).filter(Boolean);
const UCP_GRAPH_FUNCTIONS = { sum: "Sum", change: "Change" };
const UCP_BATTERY_ENTITIES = ["power_entity", "runtime_entity", "capacity_entity"];
// Standard-Details, die ohne eigene Einstellung ausgeblendet sind (Wert steht schon an anderer Stelle der Karte)
// Farbauswahl der Light-Karte: fünf Farben (Konfiguration light_colors, Hex kommagetrennt); Lampen ohne Farbe nutzen fünf Farbtemperaturen
const UCP_LIGHT_COLORS = ["#ff3b30", "#ffb347", "#ffffff", "#4cd964", "#4f9cff"];
const UCP_LIGHT_WHITES = { colors: ["#ffa24d", "#ffb87a", "#ffe3c4", "#eef0ff", "#d6e6ff"], kelvin: [2200, 2700, 4000, 5000, 6500] };
const UCP_LIGHT_LEVELS = [25, 50, 100];
const ucpLightColors = (input) => {
  const parts = ucpSplitColors(input).map(ucpColorValue);
  return UCP_LIGHT_COLORS.map((fallback, index) => parts[index] && /^[^;"<>{}]+$/.test(parts[index]) ? parts[index] : fallback);
};
const UCP_DEFAULT_HIDDEN = { slider: [0], mediaplayer: [1], light: [0], washdata: [2, 3, 7, 9, 10, 12], pihole: [0, 1, 3] };
const UCP_GRAPH_FLAGS = ["hide_legend", "hide_grid", "hide_x_axis", "hide_y_axis", "hide_x_labels", "hide_y_labels"];
const UCP_LABELS = {
  bn_wiki_images: "Species images from the internet", bn_stats_entity: "Statistics entity (BirdNET package)", bn_default_tab: "Start tab", bn_image_url: "Image URL (optional)",
  hm_max_rows: "Maximum rows", hm_sort: "Sort rows", hm_show_values: "Show values in the cells", hm_show_legend: "Show legend", hm_show_daylight: "Show daylight bar", hm_sun_entity: "Sun entity (for the daylight bar)",
  al_layout: "Layout", al_groups: "Groups to show", al_exclude: "Exclude entities", up_sources: "Show updates from", up_exclude: "Exclude update entities", up_show_versions: "Show versions", up_show_all: "Also show up-to-date entries", up_color_supervisor: "Supervisor color (optional)", up_color_marketplace: "Marketplace color (optional)", al_show_area: "Show area", al_tap: "On tap", al_chip_label: "Chip text", al_ticker_text: "Marquee text ({n} = number, {label} = group name; empty = automatic sentence per group)", al_ticker_speed: "Marquee speed (px per second, default 60)", al_ticker_always: "Marquee always on (off: only when the text does not fit)", al_tile_names: "Show room names under the icons", al_group_names: "Show group names", al_empty_text: "Text when nothing is active",
  pf_mode: "Display mode", pf_mode_toggle: "Show the Power/Energy switch in the card", pf_energy_no_auto: "Do not take energy values from the Energy dashboard",
  pf_grid_in_energy_entity: "Grid import (energy sensor, optional)", pf_grid_out_energy_entity: "Feed-in (energy sensor, optional)", pf_car_energy_entity: "Car charging (energy sensor, optional)",
  pf_inverter_energy_entity: "Inverter AC output (energy sensor, optional)", pf_home_energy_entity: "Home consumption (energy sensor, optional)",
  pf_show_consumers: "Show consumers", pf_layout: "Arrangement",
  pf_unit: "Unit of the power sensors", pf_decimals: "Decimals (kW)", pf_animate: "Animate flow", pf_max_power: "Maximum power for line width (W, optional)",
  pf_grid_entity: "Grid power sensor", pf_grid_export_entity: "Feed-in power sensor (optional, if the grid sensor only counts import)", pf_grid_name: "Grid name (optional)", pf_grid_invert: "Positive value = feed-in",
  pf_car_entity: "Car charging power sensor", pf_car_soc_entity: "Car charge level sensor (%)", pf_car_name: "Car name (optional)", pf_car_icon: "Car icon",
  pf_inverter_name: "Inverter name (optional)", pf_home_entity: "Home consumption sensor (optional, otherwise calculated)", pf_pv: "Solar systems", pf_hubs: "Solar hubs", pf_fill: "Color intensity of the boxes (%)", pf_hide_autarky: "Hide autarky tile", pf_hide_selfuse: "Hide self-consumption tile", pf_hide_production: "Hide production tile", pf_hide_consumption: "Hide consumption tile",
  pf_day_import: "Today: grid import (kWh sensor, optional)", pf_day_export: "Today: feed-in (kWh sensor, optional)", pf_day_production: "Today: solar production (kWh sensor, optional)", pf_day_consumption: "Today: home consumption (kWh sensor, optional)", pf_inverter_entity: "Inverter AC output sensor (optional)", pf_batteries: "Home batteries", pf_loads: "Consumers",
  popup_trigger_entity: "Popup trigger (entity)", popup_trigger_state: "Trigger state (e.g. on)", popup_trigger_popup: "Popup to open",
  wrapped_card: "Wrapped card (YAML, e.g. type: energy-date-selection)", wrapper_padding: "Vertical padding of the wrapped card (px, default 4)", popup_dashboard: "Popup dashboard (URL path, default: popups)", popup_width: "Popup width", popup_auto_close: "Close popup automatically after (seconds, 0 = off)", popup_hide_footer: "Hide the footer card of the popup dashboard in popups",
  name: "Name (optional)", name_marquee: "Marquee for long names",
  tap_action: "Tap action card", icon_tap_action: "Tap action icon", name_tap_action: "Tap action name", state_tap_action: "Tap action state",
  double_tap_action: "Double-tap action card", icon_double_tap_action: "Double-tap action icon", name_double_tap_action: "Double-tap action name", state_double_tap_action: "Double-tap action state",
  hold_action: "Hold action card", icon_hold_action: "Hold action icon", name_hold_action: "Hold action name", state_hold_action: "Hold action state", title_font_size: "Name font size (px)", title_color: "Name color", title_icon_color: "Icon color", card_shadow_on: "Shadow (on) – CSS or theme variable", card_shadow_off: "Shadow (off) – CSS or theme variable", card_color_on: "Card (on)", card_color_off: "Card (off)", icon_color_on: "Icon (on)", icon_color_off: "Icon (off)",
  name_color_on: "Name (on)", name_color_off: "Name (off)", state_color_on: "State (on)", state_color_off: "State (off)", bg_color: "Background (color or gradient)", border_color: "Border color", border_width: "Border width (px)", border_style: "Border style",
  shadow_size: "Outer shadow (size)", shadow_angle: "Outer shadow (angle)", shadow_opacity: "Outer shadow (opacity)", shadow_color: "Outer shadow (color)",
  inset_size: "Inner shadow (size)", inset_angle: "Inner shadow (angle)", inset_opacity: "Inner shadow (opacity)", inset_color: "Inner shadow (color)", state_color: "State color", title_icon_size: "Icon size (px)", card_layout: "Layout", dwd_layout: "Warning layout", title_icon: "Icon", card_style: "Style",
  ticks: "Scale marks", border: "Show border", green: "Green from", yellow: "Yellow from", red: "Red from",
  hide_title_icon: "Hide icon", hide_title: "Hide name", dwd_advance_entity: "Advance warning (entity, optional – otherwise automatic)", dwd_show_advance: "Show advance information",
  dwd_expand_all: "Always show description", dwd_hide_region: "Hide region", dwd_hide_updated: "Hide update time", dwd_max_items: "Maximum number of warnings", forecast_days: "Number of forecast entries (days or hours)", state_font_size: "Status font size (px)",
  forecast_font_size: "Forecast font size (px)", forecast_icon_size: "Forecast icon size (px)", forecast_icon_color: "Forecast icon color (hex, RGB, color name or theme variable)", led_segments: "Number of LED segments",
  climate_view: "Climate view", climate_hide_current: "Hide current temperature",
  heating_color: "Accent color when heating (hex, RGB or theme variable)",
  line_width: "Line width (px)", follow_energy_date: "Follow energy date selection",
  collection_key: "Energy collection key (optional)",
  ph_show_history: "Last 7 days history in the tiles", ph_hide_queries: "Hide \"Total queries\" tile",
  ph_hide_blocked: "Hide \"Queries blocked\" tile", ph_hide_percent: "Hide \"Percent blocked\" tile",
  ph_hide_domains: "Hide \"Domains on lists\" tile",
  ph_show_graph: "Show chart (ring and distribution)", ph_show_toggle: "Show enable/disable switch",
  wd_blink: "Background pulses green when finished", wd_show_controls: "Show controls", wd_show_profiles: "Show program overview",
  wd_program: "Program sensor", wd_remaining: "Remaining time sensor", wd_progress: "Progress sensor",
  wd_power: "Power sensor", wd_phase: "Phase sensor", wd_select: "Program selection (select)",
  light_colors: "Color picker colors (5 colors, e.g. #ff3b30, #ffb347, var(--primary-color), #4cd964, #4f9cff)",
  hide_icons: "Hide card and detail icons", detail_align: "Alignment",
  mp_show_cover: "Show cover", mp_show_progress: "Show progress bar", mp_show_volume: "Show volume slider",
  mp_show_mute: "Show mute button", mp_show_source: "Show source selection",
  mp_show_power: "Show on/off button", mp_show_shuffle_repeat: "Show shuffle and repeat", mp_show_library: "Show music library (Music Assistant)",
  mp_hide_media_source: "Hide Home Assistant media (\"Media\" folder)", mp_enqueue: "When tapping a track", mp_show_visualizer: "Show animated music visualizer",
  mp_button_size: "Control button size (px, default 44)", gauge_width: "Gauge width (px)", gauge_drag: "Set value by dragging",
  timeline_on_state: "States shown as on (comma-separated, empty = on)", timeline_height: "Row height (px)", timeline_show_total: "Show total on-time per row",
  graph_type: "Chart type", graph_function: "Statistic function", hide_legend: "Hide legend", legend_align: "Legend alignment",
  graph_colors: "Series colors (comma-separated, e.g. #ff9800, rgb(0,150,136), var(--u-good))",
  graph_gradient: "Use color gradient", graph_color_end: "Gradient end color (optional)",
  graph_gradient_direction: "Gradient direction", fill_opacity_start: "Gradient start opacity (0–1)",
  fill_opacity_end: "Gradient end opacity (0–1)", line_fill: "Fill below the line",
  bar_border_width: "Bar border width (px)", bar_border_color: "Bar border color (optional)",
  hide_x_labels: "Hide X axis labels", hide_y_labels: "Hide Y axis labels",
  hide_x_axis: "Hide X axis", hide_y_axis: "Hide Y axis", hide_grid: "Hide grid lines",
  ...NB_LABELS, detail_entities: "Extra values (optional)", card_type: "Card type", entity: "Entity", icon: "Icon (optional, e.g. mdi:lightbulb)",
  power_entity: "Entity as data source", runtime_entity: "Entity as data source",
  capacity_entity: "Entity as data source", show_value: "Show charge level in percent",
  show_modes: "Show operating modes", clock_style: "Layout", clock_size: "Size",
  clock_time_font_size: "Time font size", clock_date_font_size: "Date font size",
  clock_detail_font_size: "Extra information font size",
  clock_show_media_cover: "Show music cover as background", clock_media_player: "Media player for music cover",
  clock_music_visualizer: "Show animated music visualizer",
  clock_vertical_align: "Vertical position of date, time and extra info",
  time_format: "Time format", time_zone: "Time zone (optional, e.g. Europe/Berlin)",
  show_seconds: "Show seconds", needle: "Show hands", hours_to_show: "Period in hours",
  show_warnings: "Show weather warnings", dwd_entity: "Warning (entity, e.g. DWD current warning level)", show_last_changed: "Show last change", state_attribute: "Attribute instead of state", state_date_format: "Date and time format (e.g. dd. MMMM or hh:mm)",
  hide_state: "Hide status", forecast_type: "Forecast period",
  show_current: "Show current weather", show_forecast: "Show forecast", forecast_minmax: "Forecast max / min", forecast_border: "Forecast border",
  round_temperature: "Round temperature",
};
const UCP_TYPE_FIELD = ucpSelect("card_type",
  Object.fromEntries(Object.entries(UCP_CARDS)
    .sort(([, a], [, b]) => a.label.localeCompare(b.label, "de"))
    .map(([key, card]) => [ucpTypeOut(key), card.label])));
const ucpIsClock = (type) => type === "clock" || type === "clock-music";
const ucpType = (type) => Object.hasOwn(UCP_CARDS, type) ? type : "bar";
const ucpId = (entity) => typeof entity === "string" ? entity : entity?.entity;

function ucpConfig(config) {
  const { title, ...settings } = config;
  const card_type = ucpType(ucpTypeId(config.card_type));
  if (settings.card_style != null) settings.card_style = ucpStyleId(settings.card_style);
  const name = config.name ?? title;
  const name_marquee = config.name_marquee ?? (card_type !== "bar" && !!config.marquee);
  const horizontal = config.card_layout === "horizontal" && UCP_H_LAYOUT.includes(card_type);
  const toggleTap = ["light", "switch"].includes(card_type) ? Object.fromEntries(UCP_TAP_KEYS.map((key) => [key, { action: "toggle" }])) : {};
  return { detail_align: horizontal ? "left" : "center", led_segments: 24, ...toggleTap,
    ...(UCP_DIAL_TYPES.includes(card_type) ? { animate: true, gauge_width: 6 } : {}),
    ...UCP_CARDS[card_type].defaults, ...settings, title_align: horizontal ? "left" : "center", // Das große Icon in der Mitte gibt es nicht mehr (Schalten über den Status-Text)
    hide_main_icon: true, name, name_marquee, type: UCP_TYPE, card_type };
}

function ucpEnergyConfig(config, EnergyCard) {
  return { ...EnergyCard.getStubConfig?.(), ...config.energy, ...(config.name ? { title: config.name } : {}), ...(config.hide_title ? { show_title: false } : {}), type: UCP_ENERGY_TYPE };
}

class UltimateCardEditor extends HTMLElement {
  _i18nRefresh() {
    this._schemaKey = null;
    if (this._form) { const fn = this._form.computeLabel; this._form.computeLabel = (...args) => fn(...args); }
    if (this._config) this._render();
  }

  set hass(hass) {
    ucpSetLang(hass); ucpAttach(this);
    const first = !this._hass;
    this._hass = hass;
    if (first) this._loadPresets();
    if (first && this._config) this._render();
    if (this._form) this._form.hass = hass;
    if (this._energyEditor) this._energyEditor.hass = hass;
  }

  setConfig(config) {
    ucpAttach(this);
    this._drafts ??= new Map();
    this._config = ucpConfig(config);
    this._render();
  }

  _entityIds(c) {
    const test = c.card_type === "graph" && c.graph_type === "timeline" ? null : UCP_ENTITY_FILTERS[c.card_type];
    const states = this._hass?.states;
    if (!test || !states) return undefined;
    const keep = new Set([].concat(c.entity ?? c.entities ?? []).filter((id) => typeof id === "string"));
    const ids = Object.keys(states).filter((id) => keep.has(id) || test(id, states[id]));
    return ids.length ? ids : undefined;
  }

  _render() {
    this._renderForm();
    this._renderPresetPanel();
  }

  _styleField() {
    const custom = Object.fromEntries((this._presets ?? []).map((preset) => ["preset:" + preset.id, "★ " + preset.name]));
    return ucpSelect("card_style", { ...UCP_STYLES, ...custom });
  }

  async _loadPresets() {
    let list = [];
    try {
      const result = await this._hass.callWS({ type: "frontend/get_user_data", key: UCP_PRESET_STORE });
      list = result?.value?.presets;
    } catch {
      try { list = JSON.parse(localStorage.getItem(UCP_PRESET_STORE) || "[]"); } catch { list = []; }
    }
    this._presets = (Array.isArray(list) ? list : []).filter((p) => p && typeof p.id === "string" && typeof p.name === "string" && p.values && typeof p.values === "object");
    if (this._config) this._render();
  }

  async _savePresets(list) {
    this._presets = list;
    try {
      await this._hass.callWS({ type: "frontend/set_user_data", key: UCP_PRESET_STORE, value: { presets: list } });
    } catch {
      try { localStorage.setItem(UCP_PRESET_STORE, JSON.stringify(list)); } catch { /* ignorieren */ }
    }
    this._render();
  }

  _presetKey(c, style) { return JSON.stringify([style || "default", ucpPick(c, UCP_RESET_KEYS)]); }
  _hasStyling(c) { return Object.keys(ucpPick(c, UCP_RESET_KEYS)).length > 0; }
  _matchesPreset(c) {
    const key = this._presetKey(c, c.card_style);
    return (this._presets ?? []).some((preset) => this._presetKey(preset.values, preset.style) === key);
  }

  async _saveCurrentAs(name, c) {
    const preset = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5), name, style: c.card_style || "default", values: ucpPick(c, UCP_PRESET_KEYS) };
    await this._savePresets([...(this._presets ?? []), preset]);
  }

  // Style-Wechsel (vordefinierter Style oder eigenes Preset): Styling-Werte zurücksetzen, vorher ggf. als Preset sichern
  async _styleChange(old, target) {
    const apply = () => {
      const next = { ...old };
      for (const key of UCP_RESET_KEYS) delete next[key];
      let style = target;
      if (target.startsWith("preset:")) {
        const preset = (this._presets ?? []).find((p) => "preset:" + p.id === target);
        if (preset) { Object.assign(next, preset.values); style = preset.style || "default"; } else style = old.card_style || "default";
      }
      if (style && style !== "default") next.card_style = style; else delete next.card_style;
      this._config = ucpConfig(next);
      this._emitConfig();
      this._render();
    };
    if (!this._hasStyling(old) || this._matchesPreset(old)) { apply(); return; }
    const answer = await ucpDialog({
      title: "Save preset?", input: "My preset",
      text: "The styling values of this card will be reset so the selected style takes full effect. Save as a custom preset first?",
      buttons: [{ id: "save", label: "Save", primary: true }, { id: "discard", label: "Discard" }, { id: "cancel", label: "Cancel" }],
    });
    if (!answer || answer.button === "cancel") { this._render(); return; }
    if (answer.button === "save") await this._saveCurrentAs(answer.value || "My preset", old);
    apply();
  }

  // Button im Editor, der den Preset-Manager (Popup) öffnet
  _renderPresetPanel() {
    if (!this._presetButton) {
      const b = document.createElement("button");
      b.type = "button";
      b.style.cssText = "margin:12px 0;padding:8px 14px;border-radius:8px;border:1px solid var(--divider-color,#888);background:transparent;color:var(--primary-text-color,inherit);cursor:pointer;font-size:14px";
      b.addEventListener("click", () => this._openPresetManager());
      this._presetButton = b;
    }
    this._presetButton.textContent = ucpT("Manage custom presets") + (this._presets?.length ? " (" + this._presets.length + ")" : "") + " …";
    this.append(this._presetButton);
    this._refreshManager?.();
  }

  _openPresetManager() {
    if (this._manager) return;
    const el = (tag, css, content) => { const node = document.createElement(tag); node.style.cssText = css; if (content != null) node.textContent = ucpT(content); return node; };
    const btnCss = "padding:6px 12px;border-radius:6px;border:1px solid var(--divider-color,#888);background:transparent;color:inherit;cursor:pointer;font-size:13px";
    const overlay = el("dialog", "padding:0;border:0;border-radius:12px;background:transparent;max-width:none;max-height:none;overflow:visible");
    const box = el("div", "background:var(--card-background-color,#fff);color:var(--primary-text-color,#212121);padding:20px;border-radius:12px;width:min(480px,92vw);max-height:80vh;overflow:auto;box-sizing:border-box;font-family:var(--paper-font-body1_-_font-family,inherit);box-shadow:0 8px 32px rgba(0,0,0,.4)");
    const close = () => { this._manager = null; this._refreshManager = null; try { overlay.close(); } catch { /* ignorieren */ } overlay.remove(); };
    const mkBtn = (label, handler, primary) => {
      const b = el("button", btnCss + (primary ? ";background:var(--primary-color,#03a9f4);color:var(--text-primary-color,#fff);border-color:transparent" : ""), label);
      b.type = "button"; b.addEventListener("click", handler); return b;
    };
    const draw = () => {
      box.replaceChildren(el("h3", "margin:0 0 4px;font-size:18px;font-weight:500", "Custom presets"),
        el("p", "margin:0 0 12px;font-size:13px;opacity:.75", "Stored for your HA user, available in every card. A preset contains colors, background, border, shadow, status colors, font and icon sizes and the style."));
      if (!this._presets?.length) box.append(el("p", "margin:12px 0;font-size:14px", "No presets saved yet."));
      for (const preset of this._presets ?? []) {
        const row = el("div", "display:flex;align-items:center;gap:6px;margin:8px 0;flex-wrap:wrap");
        row.append(el("span", "flex:1 1 140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap", "★ " + preset.name),
          mkBtn("Apply", async () => { await this._styleChange(this._config, "preset:" + preset.id); }),
          mkBtn("Rename", async () => {
            const answer = await ucpDialog({ title: "Rename preset", input: preset.name, buttons: [{ id: "ok", label: "OK", primary: true }, { id: "cancel", label: "Cancel" }] });
            if (answer?.button === "ok" && answer.value) await this._savePresets(this._presets.map((p) => p.id === preset.id ? { ...p, name: answer.value } : p));
          }),
          mkBtn("Delete", async () => {
            const answer = await ucpDialog({ title: "Delete preset?", text: ucpT("\"{name}\" will be deleted. Cards that already use it keep their values.").replace("{name}", preset.name),
              buttons: [{ id: "ok", label: "Delete", primary: true }, { id: "cancel", label: "Cancel" }] });
            if (answer?.button === "ok") await this._savePresets(this._presets.filter((p) => p.id !== preset.id));
          }));
        box.append(row);
      }
      const foot = el("div", "display:flex;gap:8px;justify-content:space-between;margin-top:16px;flex-wrap:wrap");
      foot.append(mkBtn("Save current styling …", async () => {
        const answer = await ucpDialog({ title: "Save preset", input: "My preset", text: "Saves this card's styling as a new preset.",
          buttons: [{ id: "ok", label: "Save", primary: true }, { id: "cancel", label: "Cancel" }] });
        if (answer?.button === "ok") await this._saveCurrentAs(answer.value || "My preset", this._config);
      }), mkBtn("Close", close, true));
      box.append(foot);
    };
    this._manager = overlay;
    this._refreshManager = draw;
    overlay.addEventListener("click", (event) => { if (event.target === overlay) close(); });
    overlay.addEventListener("cancel", (event) => { event.preventDefault(); close(); });
    draw();
    overlay.append(box);
    document.body.append(overlay);
    if (overlay.showModal) overlay.showModal(); else overlay.setAttribute("open", "");
  }

  _renderForm() {
    if (!this._form) {
      this._form = document.createElement("ha-form");
      this._form.computeLabel = (field) => ucpT(((field) => {
        const detail = /^ucp_detail_(?:entity|builtin)_\d+_(.+)$/.exec(field.name);
        if (detail) return ({ hide: "Hide extra information", source: "Entity as data source (optional)" })[detail[1]] ?? UCP_DETAIL_FIELDS[detail[1]]?.[0];
        const barName = /^ucp_bar_(?:name|color)_(\d+)$/.exec(field.name);
        if (barName) { const id = ucpId(this._config.entities?.[Number(barName[1])]); return this._hass?.states?.[id]?.attributes?.friendly_name ?? id ?? field.name; }
        if (field.name === "marquee" && this._config.card_type === "bar") return "Marquee";
        if (this._config.card_type === "energy") {
          const label = { layout: "Layout", decimals: "Decimals", show_title: "Show title", show_date: "Show period",
            show_selector: "Show selection chips in the card" }[field.name];
          if (label) return label;
        }
        if (field.name === "entities" && this._config.card_type === "graph") return "Entities for the history";
        if (field.name === "entities" && this._config.card_type === "active-list") return "Additional entities (optional)";
        if (field.name === "entities" && this._config.card_type === "updates") return "Only these entities (optional, replaces the selection above)";
        return UCP_LABELS[field.name] ?? field.name;
      })(field));
      this._form.addEventListener("value-changed", (event) => {
        event.stopPropagation();
        this._change({ ...this._detailForm?.data, ...event.detail.value });
      });
      this.append(this._form);
    }
    const c = this._config;
    if (c.card_type === "energy") {
      this._form.hass = this._hass;
      this._schemaKey = null;
      this._form.schema = ucpTrSchema([UCP_TYPE_FIELD, this._styleField(), ...ucpHeadFields("energy"),
        ucpGroup("Styling", ucpStylingBase("energy")),
        ucpGroup("Card-specific settings", [
          ucpSelect("layout", { list: "List", grid: "Grid", compact: "Compact" }),
          ucpGrid(ucpNumber("decimals", { min: 0, max: 3, step: 1 }), ucpBool("show_title")),
          ucpGrid(ucpBool("show_date"), ucpBool("show_selector")),
          ucpText("collection_key")]), ucpTapGroup("energy")]);
      const e = c.energy ?? {};
      this._form.data = { card_type: ucpTypeOut(c.card_type), card_style: ucpStyleOut(c.card_style ?? "default"), name: c.name, title_color: c.title_color, title_icon_color: c.title_icon_color, state_color: c.state_color, state_font_size: c.state_font_size == null ? undefined : String(c.state_font_size), title_font_size: c.title_font_size == null ? undefined : String(c.title_font_size), title_icon_size: c.title_icon_size == null ? undefined : String(c.title_icon_size), ...Object.fromEntries(UCP_CUSTOM_KEYS.map((key) => [key, c[key] == null ? undefined : String(c[key])])), card_layout: c.card_layout ?? "vertical", ...Object.fromEntries(UCP_ACTION_KEYS.map((key) => [key, c[key]])),
        title_icon: c.title_icon, hide_title_icon: c.hide_title_icon, hide_state: c.hide_state, name_marquee: c.name_marquee, hide_title: c.hide_title,
        layout: e.layout ?? "list", decimals: e.decimals ?? 1, show_title: e.show_title !== false, show_date: e.show_date !== false,
        show_selector: e.show_selector === true, collection_key: e.collection_key };
      this._detailPanel?.remove();
      this._detailPanel = this._detailForm = this._detailRows = this._detailOrder = null;
      this._renderEnergyEditor();
      return;
    }
    this._energyEditorInitialized = false;
    this._energyEditor?.remove();
    this._energyEditor = this._energyEditorConfig = null;
    const key = JSON.stringify([c.card_type, c.layout, c.clock_style, c.follow_energy_date, c.segmented, c.climate_view, !!this._hass?.states, c.card_type === "state" ? [c.entity, c.state_attribute, !!c.state_date_format] : null, c.card_type === "bar" ? (c.entities ?? []).map(ucpId) : null]);
    if (key !== this._schemaKey) {
      this._schemaKey = key;
      const dial = UCP_DIAL_TYPES.includes(c.card_type);
      const original = UCP_CARDS[c.card_type].schema(c, this._entityIds(c), this._hass).filter((field) => field.name !== "icon");
      let cardFields = original;
      if (c.card_type !== "bar") {
        const full = original.filter((field) => field.type || field.selector?.entity || field.selector?.select);
        const compact = original.filter((field) => !full.includes(field));
        cardFields = [...full, ...(compact.length ? [ucpGrid(...compact)] : [])];
      }
      const ccCompact = c.card_type === "climate" && c.climate_view === "compact";
      if (ccCompact) cardFields.push(ucpBool("climate_hide_current"));
      if (dial && !ccCompact) {
        if (c.card_type !== "gauge") cardFields.push(ucpGrid(ucpNumber("gauge_width", { min: 2, max: 24, step: 1 }), ucpBool("gauge_drag")));
        cardFields.push(ucpGrid(...["segmented", "show_thresholds", "show_knob", "animate"].map(ucpBool)));
      }
      if (c.card_type === "gauge") cardFields.push(ucpGroup("Thresholds", [
        ucpGrid(...["normal", "warning", "critical"].map((name) => ucpNumber(name))),
        { name: "severity", type: "grid", schema: ["green", "yellow", "red"].map((name) => ucpNumber(name)) },
      ]));
      if (c.card_type === "climate" && !ccCompact) cardFields.push(ucpText("heating_color"));
      if (c.card_type === "graph" && c.graph_type === "timeline") cardFields.push(
        ucpSelect("graph_type", { line: "Line", bar: "Bars", stacked: "Stacked", timeline: "Timeline" }),
        ucpGrid(ucpText("timeline_on_state"), ucpNumber("timeline_height", { min: 10, max: 100, step: 1 })),
        ucpGrid(ucpBool("follow_energy_date"), ...(c.follow_energy_date ? [ucpText("collection_key")] : [])),
        ucpBool("timeline_show_total"),
        ucpText("graph_colors"));
      else if (c.card_type === "graph") cardFields.push(
        ucpGrid(ucpSelect("graph_type", { line: "Line", bar: "Bars", stacked: "Stacked", timeline: "Timeline" }),
          ucpNumber("line_width", { min: 0.5, max: 12, step: 0.5 })),
        ucpSelect("graph_function", UCP_GRAPH_FUNCTIONS),
        ucpGrid(ucpBool("follow_energy_date"), ...(c.follow_energy_date ? [ucpText("collection_key")] : [])),
        ucpGroup("Axes and legend", [ucpGrid(...UCP_GRAPH_FLAGS.map(ucpBool)),
          ...(c.hide_legend ? [] : [ucpSelect("legend_align", UCP_LEGEND_ALIGNS)])]),
        ucpGroup("Colors and fill", [
          ucpText("graph_colors"),
          ucpBool("graph_gradient"),
          ...(c.graph_gradient === false ? [ucpNumber("fill_opacity_start", { min: 0, max: 1, step: 0.05 })] : [
            ucpText("graph_color_end"),
            ucpSelect("graph_gradient_direction", UCP_GRADIENT_DIRS),
            ucpGrid(ucpNumber("fill_opacity_start", { min: 0, max: 1, step: 0.05 }),
              ucpNumber("fill_opacity_end", { min: 0, max: 1, step: 0.05 }))]),
          ...(["bar", "bars", "stacked"].includes(c.graph_type)
            ? [ucpGrid(ucpNumber("bar_border_width", { min: 0, max: 6, step: 0.5 }), ucpText("bar_border_color"))]
            : [ucpSelect("line_fill", UCP_LINE_FILLS)]),
        ]));
      if (["battery", "climate", "graph", "light", "slider", "weather-forecast"].includes(c.card_type)) cardFields.push(ucpText("unit"));
      if ((dial || c.card_type === "bar") && c.segmented) {
        cardFields.push(ucpNumber("led_segments", { min: 1, max: 100, step: 1 }));
      }
      // Haupteinstellungen für alle Kartentypen einheitlich; das Layout-Feld (Bar: layout, Uhr: clock_style) rückt nach oben
      const layoutField = cardFields.find((field) => field.name === "layout" || field.name === "clock_style");
      cardFields = cardFields.filter((field) => field !== layoutField);
      // Pflichtfelder (Entität) bleiben sichtbar, alles Übrige steckt in einer aufklappbaren Gruppe
      const primary = cardFields.filter((field) => field.required && (field.name === "entity" || field.name === "entities") || field.name === "state_attribute" || field.name === "state_date_format");
      // Balken: optionaler eigener Name je Entität (steckt als { entity, name } in entities)
      if (c.card_type === "bar" && Array.isArray(c.entities) && c.entities.length) {
        primary.push(ucpGroup("Names per entity (optional)", c.entities.map((_, index) => ({ name: "ucp_bar_name_" + index, selector: { text: {} } }))));
        primary.push(ucpGroup("Bar colors per entity (optional, hex e.g. #00b7eb)", c.entities.map((_, index) => ({ name: "ucp_bar_color_" + index, selector: { text: {} } }))));
      }
      const specific = cardFields.filter((field) => !primary.includes(field));
      const [styling, restFields] = ucpSplitStyling(specific);
      const rest = layoutField ? [layoutField, ...restFields] : restFields;
      this._form.schema = ucpTrSchema([UCP_TYPE_FIELD, ...primary, this._styleField(), ...ucpHeadFields(c.card_type),
        ucpGroup("Styling", [...ucpStylingBase(c.card_type), ...styling, ...(UCP_STATUS_TYPES.includes(c.card_type) ? [ucpGroup("Status colors", ucpStatusRows())] : [])]),
        ...(rest.length ? [ucpGroup("Card-specific settings", rest)] : []), ucpTapGroup(c.card_type)]);
      this._ensureDetailPanel();
      this._detailForm.schema = ucpTrSchema((UCP_DETAIL_LABELS[c.card_type] ?? []).map((label, index) =>
        this._detailSchema(label, ucpDetailKey("builtin", index), c.card_type === "battery" ? UCP_BATTERY_ENTITIES[index] : undefined)));
    }
    this._ensureDetailPanel();
    this._form.hass = this._detailForm.hass = this._hass;
    const data = { ...c };
    data.card_style = ucpStyleOut(c.card_style ?? "default");
    if (c.card_type === "bar") (c.entities ?? []).forEach((item, index) => { data["ucp_bar_name_" + index] = typeof item === "object" ? item?.name : undefined; data["ucp_bar_color_" + index] = typeof item === "object" ? item?.color : undefined; });
    data.card_type = ucpTypeOut(c.card_type);
    data.card_layout = c.card_layout ?? "vertical";
    data.dwd_layout = c.dwd_layout === "vertical" ? "vertical" : "horizontal";
    for (const key of [...UCP_PX_FIELDS, ...UCP_CUSTOM_KEYS]) if (data[key] != null) data[key] = String(data[key]);
    if (c.card_type === "graph") {
      if (!Object.hasOwn(UCP_GRAPH_FUNCTIONS, c.graph_function)) delete data.graph_function;
      if (c.graph_type === "bars") data.graph_type = "bar";
      if (!Object.hasOwn(UCP_LEGEND_ALIGNS, c.legend_align)) data.legend_align = "start";
      const lineMode = !["bar", "bars", "stacked"].includes(c.graph_type);
      data.graph_gradient = c.graph_gradient !== false;
      if (!Object.hasOwn(UCP_GRADIENT_DIRS, c.graph_gradient_direction)) data.graph_gradient_direction = "auto";
      if (!Object.hasOwn(UCP_LINE_FILLS, c.line_fill)) data.line_fill = "first";
      data.fill_opacity_start ??= lineMode ? 0.29 : 0.85;
      data.fill_opacity_end ??= lineMode ? 0 : 0.12;
      data.bar_border_width ??= 0;
      if (c.graph_type === "timeline") data.timeline_show_total ??= true;
    }
    if (c.card_type === "active-list" && c.al_layout === "ticker") data.al_ticker_always ??= true;
    if (c.card_type === "updates") { data.up_show_versions ??= true; data.up_sources ??= c.up_platform ? [c.up_platform] : ["marketplace"]; }
    if (Array.isArray(c.entities)) data.entities = c.entities.map(ucpId).filter(Boolean);
    const detailData = {};
    (UCP_DETAIL_LABELS[c.card_type] ?? []).forEach((_, index) => {
      this._detailData(detailData, ucpDetailKey("builtin", index), this._builtinDetail(c, index));
    });
    if (c.card_type === "battery") UCP_BATTERY_ENTITIES.forEach((key) => { if (c[key]) detailData[key] = c[key]; });
    this._detailForm.data = detailData;
    if (c.card_type === "clock" && c.clock_style === "analog") data.analog_options = { ticks: "hour", border: true, ...c.analog_options };
    this._form.data = data;
    this._renderDetailRows();
    this._renderDetailOrder();
  }

  // Aufklappbarer Bereich "Zusatzinformationen": Standard-Details der Karte plus frei hinzufügbare Zusatzwerte
  _ensureDetailPanel() {
    if (this._detailPanel) return;
    const panel = document.createElement("ha-expansion-panel");
    panel.setAttribute("header", "Extra information");
    panel.setAttribute("outlined", "");
    panel.style.marginTop = "24px";
    this._detailForm = document.createElement("ha-form");
    this._detailForm.computeLabel = this._form.computeLabel;
    this._detailForm.addEventListener("value-changed", (event) => {
      event.stopPropagation();
      this._change({ ...this._form.data, ...event.detail.value });
    });
    const caption = document.createElement("div");
    caption.textContent = "Extra values (entities)";
    caption.style.cssText = "font-weight:500;margin:16px 0 8px;color:var(--secondary-text-color)";
    this._detailRows = document.createElement("div");
    this._detailOrder = document.createElement("div");
    panel.append(this._detailForm, caption, this._detailRows, this._detailOrder);
    this._detailPanel = panel;
    this.append(panel);
  }

  _renderDetailRows() {
    const rows = Array.isArray(this._config.detail_entities) ? this._config.detail_entities : [];
    const button = (label, action, icon) => {
      const element = document.createElement(icon ? "ha-icon-button" : "ha-button");
      element.setAttribute("aria-label", label);
      if (icon) {
        const symbol = document.createElement("ha-icon");
        symbol.icon = icon;
        element.append(symbol);
      } else element.textContent = label;
      element.addEventListener("click", action);
      return element;
    };
    this._detailRows.replaceChildren(...rows.map((row, index) => {
      const line = document.createElement("div");
      line.style.cssText = "display:flex;align-items:center;gap:6px";
      const label = document.createElement("span");
      label.style.flex = "1";
      const entity = ucpId(row);
      label.textContent = row.name || this._hass?.states?.[entity]?.attributes?.friendly_name || entity;
      line.append(label, button("Edit", () => this._editDetailRow(index), "mdi:pencil"),
        button("Remove", () => this._saveDetailRows(rows.filter((_, i) => i !== index), index), "mdi:close"));
      return line;
    }), button("Add extra value", () => this._editDetailRow(rows.length)));
  }

  _saveDetailRows(rows, removed) {
    let order = this._config.detail_order;
    if (removed != null && Array.isArray(order)) {
      order = order.filter((token) => token !== "e" + removed)
        .map((token) => token[0] === "e" && Number(token.slice(1)) > removed ? "e" + (Number(token.slice(1)) - 1) : token);
    }
    this._config = { ...this._config, detail_entities: rows, ...(order ? { detail_order: order } : {}) };
    this._renderDetailRows();
    this._renderDetailOrder();
    this._emitConfig();
  }

  // Reihenfolge der Zusatzinformationen: Einträge per Ziehen am Griff sortieren (Maus und Touch)
  _renderDetailOrder() {
    const c = this._config;
    const items = [
      ...(UCP_DETAIL_LABELS[c.card_type] ?? []).map((label, index) => {
        const settings = ucpBuiltinDetail(c, index);
        return { token: "b" + index, label: ucpDetailSetting(c, settings, "name") || label, hidden: settings.hide === true };
      }),
      ...(Array.isArray(c.detail_entities) ? c.detail_entities : []).map((row, index) => {
        const entity = ucpId(row);
        return { token: "e" + index, label: row.name || this._hass?.states?.[entity]?.attributes?.friendly_name || entity, hidden: false };
      }),
    ];
    const box = this._detailOrder;
    if (items.length < 2) {
      box.replaceChildren();
      return;
    }
    const sorted = ucpSortDetails(items.map((item) => [item.token, item]), c.detail_order).map(([, item]) => item);
    const caption = document.createElement("div");
    caption.textContent = "Order (drag the handle)";
    caption.style.cssText = "font-weight:500;margin:16px 0 8px;color:var(--secondary-text-color)";
    const list = document.createElement("div");
    list.style.cssText = "display:grid;gap:6px";
    list.append(...sorted.map((item) => {
      const line = document.createElement("div");
      line.dataset.token = item.token;
      line.style.cssText = "display:flex;align-items:center;gap:8px;padding:6px 8px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color)" + (item.hidden ? ";opacity:.55" : "");
      const grip = document.createElement("ha-icon");
      grip.icon = "mdi:drag";
      grip.setAttribute("role", "button");
      grip.setAttribute("aria-label", "Drag to reorder");
      grip.style.cssText = "cursor:grab;touch-action:none;flex:none";
      const text = document.createElement("span");
      text.textContent = item.label;
      text.style.cssText = "flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap";
      line.append(grip, text);
      grip.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        list.setPointerCapture(event.pointerId);
        line.style.boxShadow = "0 2px 8px rgba(0,0,0,.35)";
        const move = (moveEvent) => {
          const next = [...list.children].filter((el) => el !== line)
            .find((el) => { const box = el.getBoundingClientRect(); return moveEvent.clientY < box.top + box.height / 2; });
          if (next !== line.nextElementSibling) list.insertBefore(line, next ?? null);
        };
        const end = () => {
          list.removeEventListener("pointermove", move);
          list.removeEventListener("pointerup", end);
          list.removeEventListener("pointercancel", end);
          line.style.boxShadow = "";
          const order = [...list.children].map((el) => el.dataset.token);
          if (JSON.stringify(order) === JSON.stringify(this._config.detail_order)) return;
          this._config = { ...this._config, detail_order: order };
          this._emitConfig();
        };
        list.addEventListener("pointermove", move);
        list.addEventListener("pointerup", end);
        list.addEventListener("pointercancel", end);
      });
      return line;
    }));
    box.replaceChildren(caption, list);
  }

  _editDetailRow(index) {
    const rows = [...(this._config.detail_entities ?? [])];
    const prior = rows[index];
    let draft = { ...(typeof prior === "object" ? prior : {}), entity: ucpId(prior) };
    if (draft.date_format === "dd.mm") draft.date_format = "dd.mm.";
    const dialog = document.createElement("dialog");
    dialog.style.cssText = "width:min(440px,90vw);box-sizing:border-box;border:0;border-radius:16px;padding:20px;background:var(--card-background-color);color:var(--primary-text-color)";
    const heading = document.createElement("h3");
    heading.textContent = "Edit extra value";
    const form = document.createElement("ha-form");
    form.hass = this._hass;
    form.computeLabel = ({name}) => ucpT(({entity: "Entity", attribute: "Attribute (optional)", date_format: "Date and time format (e.g. dd. MMMM or hh:mm)"})[name] ?? UCP_DETAIL_FIELDS[name]?.[0]);
    const update = () => {
      const attributes = this._hass?.states?.[draft.entity]?.attributes ?? {};
      const keys = [...new Set([...Object.keys(attributes), ...(draft.attribute ? [draft.attribute] : [])])].sort();
      const rawAttribute = draft.attribute && Object.hasOwn(attributes, draft.attribute) ? attributes[draft.attribute] : undefined;
      const date = ucpDetailDate(rawAttribute);
      const dateFields = date || draft.date_format ? [ucpText("date_format")] : [];
      form.schema = ucpTrSchema([ucpEntity(), { name: "attribute", selector: { select: { mode: "dropdown", options: [
        { value: "", label: "Entity state" }, ...keys.map((value) => ({value, label: value})),
      ] } } }, ...dateFields, ...Object.entries(UCP_DETAIL_FIELDS).map(([name, [, make]]) => make(name))]);
      form.data = draft;
    };
    form.addEventListener("value-changed", (event) => {
      event.stopPropagation();
      const entityChanged = draft.entity !== event.detail.value.entity;
      const attributeChanged = (draft.attribute || "") !== (event.detail.value.attribute || "");
      draft = {...event.detail.value};
      if (entityChanged) delete draft.attribute;
      if (entityChanged || attributeChanged) {
        delete draft.date_format;
        update();
      }
      save.disabled = !draft.entity;
    });
    const cancel = document.createElement("ha-button");
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", () => dialog.close());
    const save = document.createElement("ha-button");
    save.textContent = "Save";
    save.disabled = !draft.entity;
    save.addEventListener("click", () => {
      if (!draft.entity) return;
      if (!draft.attribute) delete draft.attribute;
      if (typeof draft.date_format === "string") draft.date_format = draft.date_format.trim();
      if (!draft.attribute || !draft.date_format) delete draft.date_format;
      rows[index] = draft;
      dialog.close();
      this._saveDetailRows(rows);
    });
    dialog.addEventListener("close", () => dialog.remove(), {once:true});
    dialog.append(heading, form, cancel, save);
    this.append(dialog);
    update();
    dialog.showModal();
  }

  _renderEnergyEditor() {
    const EnergyCard = customElements.get(UCP_ENERGY_TAG);
    if (!this._energyEditor) {
      this._energyEditor = EnergyCard.getConfigElement();
      this._energyEditor.compact = true;
      this._energyEditor.style.display = "block";
      this._energyEditor.style.marginTop = "24px";
      this._energyEditor.addEventListener("config-changed", (event) => {
        event.stopPropagation();
        if (this._config.card_type !== "energy" || !event.detail?.config) return;
        const { type: _type, ...energy } = event.detail.config;
        this._energyEditorConfig = energy;
        this._config = ucpConfig({ ...this._config, energy });
        this._emitConfig();
      });
      this.append(this._energyEditor);
    }
    this._energyEditor.hass = this._hass;
    if (!this._energyEditorInitialized || this._energyEditorConfig !== this._config.energy) {
      this._energyEditorInitialized = true;
      this._energyEditorConfig = this._config.energy;
      this._energyEditor.setConfig(ucpEnergyConfig({ energy: this._config.energy }, EnergyCard));
    }
  }

  _detailSchema(label, prefix, entityName) {
    const fields = Object.fromEntries(Object.entries(UCP_DETAIL_FIELDS).map(([key, [,make]]) => [key, make(prefix + key)]));
    return ucpGroup(label, [
      ucpGrid(fields.name, fields.align),
      fields.icon, fields.hide_name, fields.hide_icon,
      ucpGrid(fields.color_on, fields.color_off), ucpGrid(fields.bg_on, fields.bg_off), ucpGrid(fields.shadow_on, fields.shadow_off),
      ucpGrid(ucpBool(prefix + "hide"), { ...ucpEntity(), name: entityName ?? prefix + "source", required: false }),
    ]);
  }

  _builtinDetail(config, index) {
    return ucpBuiltinDetail(config, index);
  }

  _detailData(data, prefix, settings) {
    for (const key of [...Object.keys(UCP_DETAIL_FIELDS), "hide", "source"]) {
      const value = ucpDetailSetting(this._config, settings, key);
      if (value != null) data[prefix + key] = value;
    }
  }

  _readDetail(value, prefix, previous) {
    const next = { ...(typeof previous === "object" && previous !== null ? previous : {}) };
    for (const key of [...Object.keys(UCP_DETAIL_FIELDS), "hide", "source"]) {
      const field = prefix + key;
      if (!Object.hasOwn(value, field)) continue;
      const input = typeof value[field] === "string" ? value[field].trim() : value[field];
      if ((input ?? null) === (ucpDetailSetting(this._config, previous, key) ?? null)) continue;
      next[key] = input === "" || input == null ? null : input;
    }
    return next;
  }

  _change(value) {
    if (!value) return;
    value = { ...value };
    if (value.card_type != null) value.card_type = ucpTypeId(value.card_type);
    if (value.card_style != null) value.card_style = ucpStyleId(value.card_style);
    const old = this._config;
    const type = ucpType(value.card_type ?? old.card_type);
    if (type === old.card_type && value.card_style !== undefined && (value.card_style || "default") !== (old.card_style || "default")) {
      this._styleChange(old, value.card_style || "default");
      return;
    }
    if (type !== old.card_type) {
      this._drafts.set(old.card_type, old);
      this._config = ucpConfig({ name: old.name, name_marquee: old.name_marquee, hide_title: old.hide_title, card_style: old.card_style, ...this._drafts.get(type), card_type: type });
    } else {
      if (type === "energy") {
        const energy = { ...old.energy };
        for (const key of ["layout", "decimals", "show_title", "show_date", "show_selector", "collection_key"]) {
          const entry = typeof value[key] === "string" ? value[key].trim() : value[key];
          if (entry === undefined || entry === null || entry === "") delete energy[key];
          else energy[key] = entry;
        }
        const next = { ...old, energy };
        for (const key of [...UCP_ACTION_KEYS, "name", "title_color", "title_icon_color", "state_color", "state_font_size", "title_font_size", "title_icon_size", ...UCP_CUSTOM_KEYS, "card_layout", "title_align", "title_icon", "hide_title_icon", "hide_state", "name_marquee", "hide_title"]) {
          const entry = value[key];
          if (entry === undefined || entry === null || entry === "" || entry === false) delete next[key];
          else next[key] = entry;
        }
        if (value.card_style && value.card_style !== "default") next.card_style = value.card_style;
        else delete next.card_style;
        this._config = ucpConfig(next);
        this._emitConfig();
        return;
      }
      const next = { ...old };
      const fields = (schema) => schema.flatMap((field) => field.schema && !field.name ? fields(field.schema) : [field.name]);
      for (const name of [...fields(this._form.schema), ...fields(this._detailForm?.schema ?? [])]) {
        if (name.startsWith("ucp_detail_") || name.startsWith("ucp_bar_name_") || name.startsWith("ucp_bar_color_") || (name === "clock_size" && value.clock_style !== "analog")) continue;
        let fieldValue = value[name];
        if (fieldValue && typeof fieldValue === "object" && !Array.isArray(fieldValue)) {
          fieldValue = Object.fromEntries(Object.entries(fieldValue).filter(([, v]) => v !== undefined && v !== null && v !== ""));
          if (!Object.keys(fieldValue).length) fieldValue = undefined;
        }
        if (fieldValue === undefined || fieldValue === null || fieldValue === "") {
          delete next[name];
        } else {
          next[name] = fieldValue;
        }
      }
      if (next.card_style === "default") delete next.card_style;
      if (Array.isArray(next.entities)) {
        const previous = Array.isArray(old.entities) ? old.entities : [];
        const overrides = new Map(previous.map((item) => [ucpId(item), item]));
        next.entities = next.entities.map((id) => overrides.get(ucpId(id)) ?? id);
        // Eigene Namen der Balken: nur übernehmen, wenn sich die Entitätenliste in dieser Änderung nicht verändert hat
        if (type === "bar" && previous.length === next.entities.length && previous.every((item, index) => ucpId(item) === ucpId(next.entities[index]))) {
          next.entities = next.entities.map((item, index) => {
            const raw = value["ucp_bar_name_" + index], rawColor = value["ucp_bar_color_" + index];
            if (raw === undefined && rawColor === undefined) return item;
            const row = typeof item === "object" && item ? { ...item } : { entity: item };
            if (raw !== undefined) { const name = String(raw).trim(); if (name) row.name = name; else delete row.name; }
            if (rawColor !== undefined) { const color = String(rawColor).trim(); if (color) row.color = color; else delete row.color; }
            return Object.keys(row).length === 1 ? row.entity : row;
          });
        }
      }
      const builtins = { ...old.detail_builtin_settings };
      (UCP_DETAIL_LABELS[type] ?? []).forEach((_, index) => {
        const settings = this._readDetail(value, ucpDetailKey("builtin", index), this._builtinDetail(old, index));
        if (Object.values(settings).some((setting) => setting !== undefined)) builtins[index] = settings;
      });
      if (Object.keys(builtins).length) next.detail_builtin_settings = builtins;
      this._config = ucpConfig(next);
    }
    this._render();
    this._emitConfig();
  }

  _emitConfig() {
    const config = { ...this._config, card_type: ucpTypeOut(this._config.card_type) };
    if (config.card_style != null) config.card_style = ucpStyleOut(config.card_style);
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config }, bubbles: true, composed: true,
    }));
  }
}


// Eigene Styling-Werte (Hintergrund, Rahmen, Schatten) überschreiben Theme und Style-Preset; nur aktiv, wenn ein Wert gesetzt ist
const UCP_CUSTOM_CSS = `
  :host([data-c-bg]) ha-card { background-color: var(--c-bgc) !important; background-image: var(--c-bgi, none) !important; }
  :host([data-c-border]) ha-card { border: var(--c-bw, 1px) var(--c-bs, solid) var(--c-bc, var(--divider-color, currentColor)) !important; }
  :host([data-c-shadow]) ha-card { box-shadow: var(--c-shadow) !important; }
`;
const UCP_BORDER_STYLES = { solid: "Solid", dashed: "Dashed", dotted: "Dotted", double: "Double", groove: "Groove", ridge: "Ridge", none: "No border" };
const UCP_CUSTOM_TEXT = ["bg_color", "border_color", "border_width", "shadow_size", "shadow_angle", "shadow_opacity", "shadow_color",
  "inset_size", "inset_angle", "inset_opacity", "inset_color"];
const UCP_CUSTOM_KEYS = [...UCP_CUSTOM_TEXT, "border_style"];
const ucpCssNum = (value) => { const text = String(value ?? "").trim().replace(",", "."); const n = Number(text); return text !== "" && Number.isFinite(n) ? n : null; };
const ucpCssColor = (value) => ucpColorValue(value);
// Hintergrund: Farbe oder Farbverlauf (linear-/radial-/conic-gradient, auch repeating)
const ucpBgValue = (value) => {
  const text = String(value ?? "").trim();
  if (/^(?:repeating-)?(?:linear|radial|conic)-gradient\(/i.test(text) && /^[^;"<>{}]+$/.test(text) && globalThis.CSS?.supports?.("background-image", text)) return text;
  return ucpColorValue(text);
};
// Statusfarben (an/aus) für Karte, Icon, Name und State
const UCP_STATUS_TYPES = ["battery", "climate", "gauge", "light", "mediaplayer", "slider", "state", "switch", "washdata", "pihole"];
const UCP_STATUS_KEYS = [...["card", "icon", "name", "state"].flatMap((part) => [part + "_color_on", part + "_color_off"]), "card_shadow_on", "card_shadow_off"];
// Eigene Styling-Presets (pro HA-Benutzer gespeichert). Zurückgesetzt wird beim Style-Wechsel: Farben, Hintergrund, Rahmen, Schatten, Status-Farben
const UCP_RESET_KEYS = ["title_color", "state_color", "title_icon_color", "bg_color", "border_color", "border_width", "border_style",
  "shadow_size", "shadow_angle", "shadow_opacity", "shadow_color", "inset_size", "inset_angle", "inset_opacity", "inset_color", ...UCP_STATUS_KEYS];
const UCP_PRESET_KEYS = [...UCP_RESET_KEYS, "title_font_size", "state_font_size", "title_icon_size"];
const UCP_PRESET_STORE = "ucp_presets";
const ucpPick = (c, keys) => Object.fromEntries(keys.filter((key) => String(c[key] ?? "").trim() !== "").map((key) => [key, String(c[key]).trim()]));
// Einfacher Dialog (an document.body): liefert { button, value } oder null bei Abbruch
function ucpDialog({ title, text, input, buttons }) {
  return new Promise((resolve) => {
    const el = (tag, css, content) => { const node = document.createElement(tag); node.style.cssText = css; if (content != null) node.textContent = ucpT(content); return node; };
    // <dialog> mit showModal() liegt in der Top-Layer-Ebene und damit über dem (ebenfalls modalen) Home-Assistant-Editor-Dialog
    const overlay = el("dialog", "padding:0;border:0;border-radius:12px;background:transparent;max-width:none;max-height:none;overflow:visible");
    overlay.setAttribute("data-ucp-dialog", "");
    const box = el("div", "background:var(--card-background-color,#fff);color:var(--primary-text-color,#212121);padding:20px;border-radius:12px;width:min(420px,90vw);box-sizing:border-box;font-family:var(--paper-font-body1_-_font-family,inherit);box-shadow:0 8px 32px rgba(0,0,0,.4)");
    box.append(el("h3", "margin:0 0 8px;font-size:18px;font-weight:500", title));
    if (text) box.append(el("p", "margin:0 0 12px;font-size:14px;line-height:1.4", text));
    let field;
    if (input != null) {
      field = el("input", "width:100%;box-sizing:border-box;padding:8px;margin:0 0 12px;border:1px solid var(--divider-color,#888);border-radius:6px;background:var(--secondary-background-color,transparent);color:inherit;font-size:14px");
      field.value = ucpT(input);
      box.append(field);
    }
    const row = el("div", "display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap");
    const done = (result) => { try { overlay.close(); } catch { /* ignorieren */ } overlay.remove(); resolve(result); };
    for (const b of buttons) {
      const btn = el("button", "padding:8px 14px;border-radius:6px;border:1px solid var(--divider-color,#888);cursor:pointer;font-size:14px;" +
        (b.primary ? "background:var(--primary-color,#03a9f4);color:var(--text-primary-color,#fff);border-color:transparent" : "background:transparent;color:inherit"), b.label);
      btn.type = "button";
      btn.addEventListener("click", () => done({ button: b.id, value: field ? field.value.trim() : undefined }));
      row.append(btn);
    }
    box.append(row);
    overlay.addEventListener("click", (event) => { if (event.target === overlay) done(null); });
    overlay.addEventListener("cancel", (event) => { event.preventDefault(); done(null); });
    overlay.append(box);
    document.body.append(overlay);
    if (overlay.showModal) overlay.showModal(); else overlay.setAttribute("open", "");
    (field ?? row.firstChild)?.focus();
    field?.select();
  });
}
const ucpStatusRows = () => [...["card", "icon", "name", "state"].map((part) => ucpGrid(ucpText(part + "_color_on"), ucpText(part + "_color_off"))), ucpGrid(ucpText("card_shadow_on"), ucpText("card_shadow_off"))];
// Status-Stil einer Zusatzinformation: Hintergrund/Schatten je nach an/aus der zugehörigen Entität
function ucpStatStyle(settings, type, state) {
  if (!state || !settings || !["color_on", "color_off", "bg_on", "bg_off", "shadow_on", "shadow_off"].some((k) => settings[k])) return "";
  const on = ucpIsOn(type, state), pick = (key) => String(settings[key + (on ? "_on" : "_off")] ?? "").trim();
  let out = "";
  let fg = ucpColorValue(pick("color"));
  if (fg) { if (/^var\(\s*--[\w-]+\s*\)$/.test(fg)) fg = fg.replace(/\)$/, ", var(--u-text))"); out += "--stat-fg:" + fg + ";"; }
  let bg = ucpBgValue(pick("bg"));
  if (bg) { if (/^var\(\s*--[\w-]+\s*\)$/.test(bg)) bg = bg.replace(/\)$/, ", transparent)"); out += "background:" + bg + ";"; }
  let sh = pick("shadow");
  if (sh) {
    sh = /^(?:--)?[a-z][\w-]*$/i.test(sh) ? "var(--" + sh.replace(/^--/, "") + ", none)" : /^var\(\s*--[\w-]+\s*\)$/.test(sh) ? sh.replace(/\)$/, ", none)") : sh;
    if (/^[^;"<>{}]+$/.test(sh) && (/^var\(/.test(sh) || globalThis.CSS?.supports?.("box-shadow", sh))) out += "box-shadow:" + sh + ";";
  }
  return out;
}
// "an" = Entität eingeschaltet/aktiv; Climate: heizt/kühlt, Mediaplayer: spielt, sonst alles außer aus/zu/inaktiv/nicht verfügbar
function ucpIsOn(type, state) {
  if (!state) return false;
  const v = String(state.state).toLowerCase();
  if (["unavailable", "unknown", "off", "closed", "idle", "standby", "paused", "locked", "not_home", "away", "false", "0", "none", "inactive", "stopped"].includes(v)) return false;
  if (type === "climate") { const a = state.attributes?.hvac_action; return a ? !["idle", "off"].includes(a) : true; }
  if (type === "mediaplayer") return ["playing", "buffering"].includes(v);
  return true;
}
// Schatten: Größe = Unschärfe in px (Versatz halb so groß), Winkel in Grad (0° = oben, 90° = rechts, 180° = unten), Deckkraft in %
function ucpShadowPart(size, angle, opacity, color, inset) {
  const sz = ucpCssNum(size);
  if (sz == null || sz <= 0) return "";
  const a = (ucpCssNum(angle) ?? 180) * Math.PI / 180, d = sz / 2;
  const dx = Math.round(Math.sin(a) * d * 10) / 10, dy = Math.round(-Math.cos(a) * d * 10) / 10;
  const o = Math.max(0, Math.min(100, ucpCssNum(opacity) ?? 30));
  return (inset ? "inset " : "") + dx + "px " + dy + "px " + sz + "px color-mix(in srgb, " + (ucpCssColor(color) || "#000") + " " + o + "%, transparent)";
}
// Setzt die CSS-Variablen am Host und liefert, welche Schalter-Attribute gesetzt werden sollen
function ucpCustomVars(host, c) {
  const set = (name, value) => value ? host.style.setProperty(name, value) : host.style.removeProperty(name);
  const bg = ucpBgValue(c.bg_color), bc = ucpCssColor(c.border_color), bw = ucpCssNum(c.border_width);
  const bs = Object.hasOwn(UCP_BORDER_STYLES, c.border_style) ? c.border_style : "";
  // Farbe -> background-color; Verlauf -> background-image; Theme-Variable (kann beides enthalten) -> beide (die unpassende Zuweisung entfällt von selbst)
  const grad = /gradient\(/i.test(bg), isVar = /^var\(/.test(bg);
  // Theme-Variable ohne Wert (nicht im Theme vorhanden): normaler Kartenhintergrund statt transparent
  const withFallback = (v, fb) => isVar && /^var\(\s*--[\w-]+\s*\)$/.test(v) ? v.replace(/\)$/, ", " + fb + ")") : v;
  set("--c-bgc", grad ? "var(--u-bg)" : withFallback(bg, "var(--u-bg)")); set("--c-bgi", grad ? bg : isVar ? withFallback(bg, "none") : ""); set("--c-bc", bc); set("--c-bw", bw != null && bw >= 0 ? bw + "px" : ""); set("--c-bs", bs);
  const parts = [ucpShadowPart(c.shadow_size, c.shadow_angle, c.shadow_opacity, c.shadow_color, false),
    ucpShadowPart(c.inset_size, c.inset_angle, c.inset_opacity, c.inset_color, true)].filter(Boolean);
  const shadowSet = ucpCssNum(c.shadow_size) != null || ucpCssNum(c.inset_size) != null;
  // Vollständiger Schatten für den Status (an/aus): CSS-Wert (box-shadow) oder Theme-Variable; ersetzt Schatten außen/innen
  const fullText = String(c.shadow_full ?? "").trim();
  const full = !fullText ? "" : /^(?:--)?[a-z][\w-]*$/i.test(fullText) ? "var(--" + fullText.replace(/^--/, "") + ")"
    : /^var\(\s*--[\w-]+\s*(,[^;{}]*)?\)$/.test(fullText) || (/^[^;"<>{}]+$/.test(fullText) && globalThis.CSS?.supports?.("box-shadow", fullText)) ? fullText : "";
  set("--c-shadow", (/^var\(\s*--[\w-]+\s*\)$/.test(full) ? full.replace(/\)$/, ", none)") : full) || (shadowSet ? parts.join(", ") || "none" : ""));
  return { "data-c-bg": !!bg, "data-c-border": !!(bc || bw != null || bs), "data-c-shadow": !!full || shadowSet };
}

// Vorhandenes DOM an neues Markup angleichen, statt es zu ersetzen: Elemente (und ihre CSS-Animationen) bleiben erhalten
function ucpMorph(oldEl, newEl) {
  for (const a of [...oldEl.attributes]) if (!newEl.hasAttribute(a.name)) oldEl.removeAttribute(a.name);
  for (const a of newEl.attributes) if (oldEl.getAttribute(a.name) !== a.value) oldEl.setAttribute(a.name, a.value);
  const from = [...oldEl.childNodes], to = [...newEl.childNodes];
  if (from.length !== to.length) { oldEl.replaceChildren(...to); return; }
  to.forEach((node, i) => {
    const cur = from[i];
    if (cur.nodeType !== node.nodeType || cur.nodeName !== node.nodeName) cur.replaceWith(node);
    else if (node.nodeType === 3) { if (cur.data !== node.data) cur.data = node.data; }
    else if (node.nodeType === 1) ucpMorph(cur, node);
  });
}

const UCP_PF_CSS = /* css */ `
  .pf-wrap { padding: 4px 2px 2px; }
  .pf-tiles { margin-bottom: 10px; }
  .pf-mode { display: flex; align-items: center; gap: 10px; margin: 0 0 8px; }
  .pf-mode button { cursor: pointer; font: inherit; font-size: 12px; padding: 4px 14px; border: 1px solid var(--divider-color, rgba(127,127,127,.45)); background: transparent; color: var(--u-text, var(--primary-text-color)); }
  .pf-mode button:nth-of-type(1) { border-radius: 14px 0 0 14px; }
  .pf-mode button:nth-of-type(2) { border-radius: 0 14px 14px 0; margin-left: -1px; }
  .pf-mode button.on { background: var(--u-accent, var(--primary-color)); border-color: var(--u-accent, var(--primary-color)); color: var(--text-primary-color, #fff); }
  .pf-range { font-size: 12px; opacity: .65; }
  .pf { display: block; width: 100%; height: auto; overflow: visible; }
  .pf-name { font-size: 13px; font-weight: 500; }
  .pf-val { font-size: 12px; opacity: .85; }
  .pf-sub { font-size: 11px; opacity: .65; }
  .pf-hub { font-size: 18px; font-weight: 500; }
  .pf-big { font-size: 20px; font-weight: 500; }
  .pf-val2 { font-size: 15px; font-weight: 500; }
  .pf-node:not(.on) { opacity: .75; }
  /* Boxen folgen dem Grund-Style der Karte (card_style); Standard und „Neon (Flow)“: getönte Flächen mit Rahmen und Schein */
  .pf-box { fill: color-mix(in srgb, var(--pf-c) var(--pf-fill, 36%), transparent); stroke: var(--pf-c); stroke-width: 2; }
  :host([data-card-style="neon"]) .pf-box { fill: color-mix(in srgb, var(--pf-c) 14%, var(--u-bg, #0b0d14)); }
  :host([data-card-style="neon"]) .pf-tiles .ph-tile { background: color-mix(in srgb, var(--tile) 28%, var(--u-bg, #0b0d14)); border: 1px solid color-mix(in srgb, var(--tile) 70%, #fff); box-shadow: 0 0 10px color-mix(in srgb, var(--tile) 70%, transparent); border-radius: 12px; }
  :host([data-card-style="neon"]) .pf-tiles .ph-tile-value { text-shadow: 0 0 8px color-mix(in srgb, var(--tile) 60%, #fff); }
  :host([data-card-style="neumorphism"]) .pf-box, :host([data-card-style="neumorphism_dark"]) .pf-box { fill: var(--u-bg); stroke: color-mix(in srgb, var(--pf-c) 55%, transparent); stroke-width: 1.5; }
  :host([data-card-style="neumorphism"]) .pf-node, :host([data-card-style="neumorphism_dark"]) .pf-node { filter: drop-shadow(4px 4px 5px var(--neu-lo)) drop-shadow(-4px -4px 5px var(--neu-hi)); }
  :host([data-card-style="glassmorphism"]) .pf-box { fill: color-mix(in srgb, var(--pf-c) 16%, rgba(255, 255, 255, .14)); stroke: rgba(255, 255, 255, .45); stroke-width: 1.5; }
  :host([data-card-style="skeuomorph"]) .pf-box { fill: #00000030; stroke: #1c1f24; stroke-width: 1; }
  :host([data-card-style="flat"]) .pf-box { fill: var(--u-surface); stroke: color-mix(in srgb, var(--pf-c) 70%, transparent); stroke-width: 1.5; }
  :host([data-card-style="minimal"]) .pf-box { fill: transparent; stroke: color-mix(in srgb, var(--pf-c) 70%, transparent); stroke-width: 1.5; }
  :host([data-card-style="flat"]) .pf-glow, :host([data-card-style="minimal"]) .pf-glow { display: none; }
  .pf-glow { opacity: .6; }
  .pf-glow.anim { animation: pf-pulse 2.6s ease-in-out infinite; }
  @keyframes pf-pulse { 0%, 100% { opacity: .3; } 50% { opacity: .95; } }
  .pf-dots.anim { animation: pf-flow 1.4s linear infinite; }
  @keyframes pf-flow { to { stroke-dashoffset: calc(-1 * var(--pf-d, 12px)); } }
  @media (prefers-reduced-motion: reduce) { .pf-dots.anim, .pf-glow.anim { animation: none; } }
`;
const UCP_STYLE = /* css */ `
  ${UCP_CUSTOM_CSS}
  :host {
    display: block; height: 100%;
    --u-bg: var(--ha-card-background, var(--card-background-color));
    --u-text: var(--primary-text-color);
    --u-muted: var(--secondary-text-color, var(--u-text));
    --u-accent: var(--primary-color, var(--u-text));
    --u-second: var(--accent-color, var(--u-accent));
    --u-good: var(--success-color, var(--u-accent));
    --u-warn: var(--warning-color, var(--u-second));
    --u-error: var(--error-color, var(--u-warn));
    --u-surface: color-mix(in srgb, var(--u-text) 6%, transparent);
    --u-edge: var(--divider-color, color-mix(in srgb, var(--u-text) 18%, transparent));
  }
  .body { height: 100%; }
  /* Layout vertikal: Icon, Name, State, Zusatzinformationen von oben nach unten, alles zentriert */
  h3 .title-label { display: inline-flex; flex-direction: column; align-items: center; gap: 4px; }
  h3 .title-icon { margin-inline-end: 0; }
  /* Layout horizontal: Icon | Name | State nebeneinander, mittig zwischen Kartenoberseite und Zusatzinformationen */
  :host([data-layout="horizontal"]) ha-card { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; align-content: center; column-gap: 12px; }
  :host([data-layout="horizontal"]) ha-card > * { grid-column: 1 / -1; }
  :host([data-layout="horizontal"]) ha-card > h3 { grid-column: 1 / 3; margin: 0; text-align: start; }
  :host([data-layout="horizontal"]) ha-card > h3 + .center { grid-column: 3; }
  :host([data-layout="horizontal"]) h3 .title-label { flex-direction: row; gap: 8px; }
  :host([data-layout="horizontal"]) h3 .title-icon { margin-inline-end: 0; }
  :host([data-layout="horizontal"]) ha-card > h3 { display: flex; align-items: center; align-self: center; line-height: 1; min-height: var(--title-icon-size, 25px); }
  :host([data-layout="horizontal"]) h3 .title-label { align-items: center; line-height: 1; }
  :host([data-layout="horizontal"]) h3 .title-icon { display: inline-flex; align-items: center; line-height: 0; }
  :host([data-layout="horizontal"]) ha-card > h3 + .center { align-self: center; align-content: center; margin: 0; }
  :host([data-layout="horizontal"]) .light-foot { height: 36px; width: auto; grid-template-columns: 36px auto 36px; }
  ha-card {
    box-sizing: border-box; height: 100%;
    display: flex; flex-direction: column; justify-content: flex-start;
    padding: 15px; overflow: hidden; color: var(--u-text);
    background: var(--u-bg);
    border-radius: var(--ha-card-border-radius, 16px);
    box-shadow: var(--ha-card-box-shadow, none);
    font-family: var(--primary-font-family, inherit);
  }
  ha-card > .center { flex: 1 1 auto; align-content: center; }
  h3 { margin: 0 0 14px; font-weight: 500; overflow-wrap: anywhere; }
  .center { display: grid; justify-items: center; gap: 8px; text-align: center; min-width: 0; }
  .muted, .stat dt, .scale, .graph-label { color: var(--u-muted);  }
  .value { font-weight: 650; font-variant-numeric: tabular-nums; line-height: 1.1; }
  .unit { color: var(--u-muted); }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 82px), 1fr)); gap: 8px;
    padding: 10px 0 0; margin: 12px 0 0; border-top: 1px solid var(--u-edge); }
  .clock-stats { grid-template-columns: minmax(0, 1fr); }
  ha-card.clock-with-cover { position: relative; isolation: isolate; }
  .clock-cover { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
    z-index: -1; opacity: .28; filter: blur(2px); pointer-events: none;
    mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent),
      linear-gradient(to bottom, transparent, black 14%, black 86%, transparent);
    mask-composite: intersect; }
  ha-card.music-clock {
    container-type: inline-size;
    display: flex; flex-direction: column; min-height: 100%;
    padding: clamp(16px, 4%, 34px) 0 10px;
    position: relative; isolation: isolate;
    --music-glass-inset: clamp(6px, 1.4cqi, 16px);
    border-radius: max(18px, var(--ha-card-border-radius, 16px));
  }
  .music-clock > :not(.clock-cover) { position: relative; z-index: 1; }
  .music-clock .clock-cover { opacity: .64; }
  .music-clock > :is(h3, .center, .clock-stats, .feedback) { margin-inline: 5%; }
  .music-clock .center { gap: 10px; }
  .music-clock-body { flex: 1 1 auto; display: flex; flex-direction: column; justify-content: flex-start; padding-top: 8px; min-height: 0; }
  .music-clock-body.v-center { justify-content: center; padding-top: 0; }
  .music-clock-body.v-bottom { justify-content: flex-end; padding-top: 0; }
  .music-clock-body > :is(.center, .clock-stats) { margin-inline: 5%; }
  .music-clock .music-clock-date { color: var(--u-text); font-size: clamp(15px, 5cqi, 42px); font-weight: 600; }
  .music-clock .music-clock-time { color: var(--u-text); font-size: clamp(20px, 15cqi, 192px); }
  .music-clock-layout .clock-stats { display: flex; flex-wrap: wrap; justify-content: center; }
  .music-clock-layout .clock-stats .stat { max-width: 100%; }
  .music-clock .clock-stats { border: 0; padding: 0; }
  .music-clock .stat { display: flex; flex-wrap: wrap; justify-content: center; gap: .45em;
    border: 1px solid var(--u-edge); border-radius: 999px; padding: 4px 12px; }
  .music-clock-footer { display: grid; justify-items: center; gap: 10px; margin-top: auto; padding-top: 18px; }
  ha-card.music-clock:has(.music-clock-footer) { min-height: max(100%, 220px); }
  .music-clock-track { display: grid; grid-template-rows: repeat(2, 1.2em); line-height: 1.2; gap: 2px; text-align: center;
    min-width: 0; max-width: 90%; font-size: clamp(var(--u-font-m), 4cqi, var(--u-font-xl)); }
  .music-clock-track > * { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .music-clock-bars { display: flex; align-items: end; gap: clamp(1px, .45cqi, 5px); width: 90cqi; height: clamp(12px, 4cqi, 30px);
    position: relative;
  }
  .music-clock-bars i { flex: 1; min-width: 0; height: var(--bar-height); border-radius: 2px;
    color: var(--music-bar-color, color-mix(in oklab, var(--u-accent) var(--bar-mix), var(--u-second)));
    border: .5px solid currentColor; box-sizing: border-box;
    background: color-mix(in srgb, currentColor 55%, transparent);
    transform-origin: bottom;
    animation: ucp-music-bars var(--bar-speed) var(--bar-phase) infinite; }
  @keyframes ucp-music-bars {
    0%, 100% { transform: scaleY(.28); animation-timing-function: cubic-bezier(.15,.8,.35,1); }
    11% { transform: scaleY(var(--bar-peak)); animation-timing-function: ease-out; }
    32% { transform: scaleY(.37); animation-timing-function: ease-out; }
    45% { transform: scaleY(.72); }
    57% { transform: scaleY(.30); animation-timing-function: ease-out; }
    76% { transform: scaleY(.57); }
  }
  @media (prefers-reduced-motion: reduce) {
    .music-clock-bars i { animation: none; }
  }
  .stat { min-width: 0; overflow-wrap: anywhere; }
  .stat dt, .stat dd { margin: 0; }
  .stat dd { font-weight: 600; color: var(--stat-fg, inherit); }
  .stat[style*="--stat-fg"] dt, .stat[style*="--stat-fg"] dt ha-icon { color: var(--stat-fg); }
  .stat dt ha-icon { color: var(--title-icon-color, var(--u-accent)); --mdc-icon-size: 14px; margin-inline-end: 3px; }
  button, select { font: inherit; color: inherit; }
  button { cursor: pointer; background: var(--u-surface); border: 1px solid var(--u-edge); border-radius: 999px; }
  button:disabled, input:disabled { opacity: .45; cursor: default; }
  button:focus-visible, input:focus-visible, select:focus-visible { outline: 2px solid var(--u-accent); outline-offset: 3px; }
  button:hover:not(:disabled) { border-color: var(--u-accent); }
  .orb, .round { display: inline-grid; place-items: center; }
  .orb { width: 76px; height: 76px; color: var(--u-accent); border: 2px solid currentColor; }
  .orb.on { color: var(--u-good); }
  .orb ha-icon { --mdc-icon-size: 36px; }
  .round { width: 36px; height: 36px; color: var(--title-icon-color, var(--u-accent)); }
  .controls { display: flex; justify-content: center; align-items: center; gap: 7px; flex-wrap: wrap; }
  .dial { width: min(100%, 220px); display: grid; grid-template: "dial" 1fr / minmax(0,1fr); }
  .dial > * { grid-area: dial; min-width: 0; }
  .dial svg { width: 100%; overflow: visible; }
  .dial-center { align-self: end; justify-self: center; display: grid; justify-items: center; gap: 3px; margin-bottom: 11%; }
  .dial-center ha-icon { color: var(--title-icon-color, var(--u-accent)); --mdc-icon-size: 21px; }
  .dial-scale { align-self: end; display: flex; justify-content: space-between; padding-inline: 5%; }
  .dial-controls { margin-top: -4px; }
  .battery-orb { border-radius: 50%; }
  .battery-orb.on { color: var(--level-color); }
  .clock { color: var(--u-accent); font-weight: 700;
    font-variant-numeric: tabular-nums; line-height: 1.05; }
  .analog { width: min(100%, var(--clock-size)); color: var(--u-accent); }
  .range { width: 100%; min-width: 0; accent-color: var(--u-accent); margin: 0; }
  .light .orb.on { color: var(--u-warn); }
  ha-card.wd-finished { animation: wd-pulse 2.4s ease-in-out infinite; }
  @keyframes wd-pulse { 0%, 100% { box-shadow: inset 0 0 0 999px transparent; } 50% { box-shadow: inset 0 0 0 999px color-mix(in srgb, var(--u-good, #3ecf6a) 22%, transparent); } }
  @media (prefers-reduced-motion: reduce) { ha-card.wd-finished { animation: none; } }
  .ph { width: 100%; gap: 10px; }
  .wx-warnings { margin-top: 12px; }
  .al { --al-c: var(--title-icon-color, var(--u-accent, #3ba7d9)); display: grid; gap: 14px; width: 100%; text-align: start; }
  .al-group { display: grid; gap: 2px; }
  .al-head { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: var(--u-font-m, 14px); color: var(--u-text); padding-bottom: 2px; }
  .al-head ha-icon { --mdc-icon-size: 20px; color: var(--al-c); flex: none; }
  .al-count { margin-inline-start: auto; min-width: 20px; text-align: center; padding: 1px 8px; border-radius: 10px; font-size: var(--u-font-s, 12px); font-weight: 600;
    background: color-mix(in srgb, var(--al-c) 24%, transparent); color: var(--u-text); }
  .al-row, .al-chip { appearance: none; font: inherit; color: var(--u-text); cursor: pointer; text-align: start; }
  .al-row { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px 2px; background: none; border: 0; border-top: 1px solid var(--u-edge, rgba(127,127,127,.25)); border-radius: 0; }
  .al-row ha-state-icon { --mdc-icon-size: 20px; color: var(--al-c); flex: none; }
  .al-name { font-size: var(--u-font-m, 14px); min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .al-area { margin-inline-start: auto; font-size: var(--u-font-s, 12px); color: var(--u-text); opacity: .65; white-space: nowrap; padding-inline-start: 8px; }
  .al-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .al-ticker { display: flex; flex: 1 1 auto; align-items: center; }
  .al-tk-view { flex: 1 1 0; min-width: 0; width: 0; margin: 0 2%; overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); }
  .al-tk-track { display: flex; align-items: center; gap: 10px; width: max-content; padding-inline-start: 100%; white-space: nowrap; animation: al-tk var(--al-dur, 20s) linear infinite; }
  .al-tk-view:hover .al-tk-track { animation-play-state: paused; }
  .al-tk-text { font-size: var(--u-font-m, 14px); color: var(--u-text); }
  .al-tk-chips { display: inline-flex; gap: 6px; }
  .al-tk-gap { width: 28px; flex: none; }
  .al-tk-static .al-tk-view { display: flex; justify-content: center; }
  .al-tk-static .al-tk-view { -webkit-mask-image: none; mask-image: none; }
  .al-tk-static .al-tk-track { animation: none; padding-inline-start: 0; }
  .al-tk-n { cursor: default; flex: none; }
  .al-tk-n:hover { filter: none; }
  @keyframes al-tk { from { transform: translateX(0); } to { transform: translateX(-100%); } }
  @media (prefers-reduced-motion: reduce) { .al-tk-track { animation: none; width: auto; padding-inline-start: 0; flex-wrap: wrap; white-space: normal; } .al-tk-chips { flex-wrap: wrap; } }
  .al-chip { padding: 5px 12px; border-radius: 16px; border: 1px solid color-mix(in srgb, var(--al-c) 45%, transparent); background: color-mix(in srgb, var(--al-c) 20%, transparent); font-size: var(--u-font-m, 14px); }
  .al-row:hover, .al-chip:hover { filter: brightness(1.15); }
  .al-row:focus-visible, .al-chip:focus-visible { outline: 2px solid var(--al-c); outline-offset: 1px; }
  .al-minimal { gap: 6px; }
  ha-card.al-min-card { height: 100%; display: flex; align-items: center; justify-content: center; box-sizing: border-box; }
  ha-card.al-min-card .al-minimal { width: 100%; }
  .al-minimal .al-group { position: relative; display: flex; align-items: center; justify-content: center; padding-inline: 34px; min-height: 30px; }
  .al-minimal .al-head { position: absolute; inset-inline-start: 0; top: 50%; transform: translateY(-50%); gap: 6px; font-weight: 500; font-size: var(--u-font-s, 12px); opacity: .9; padding: 0; }
  .al-minimal .al-head ha-icon { --mdc-icon-size: 22px; }
  .al-tiles { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: center; gap: 2px 8px; min-width: 0; }
  .al-tile { appearance: none; background: none; border: 0; padding: 2px 4px; font: inherit; color: var(--u-text); cursor: pointer; display: grid; justify-items: center; gap: 0; min-width: 34px; line-height: 1.15; }
  .al-tile ha-icon { --mdc-icon-size: 24px; color: var(--al-c); }
  .al-tile b { font-size: var(--u-font-m, 14px); font-weight: 600; }
  .al-tile-name { font-size: var(--u-font-s, 12px); opacity: .7; max-width: 80px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .al-tile:hover { filter: brightness(1.2); }
  .al-tile:focus-visible { outline: 2px solid var(--al-c); outline-offset: 1px; border-radius: 6px; }
  .al-all { appearance: none; margin-top: 10px; width: 100%; padding: 8px 12px; border-radius: 10px; font: inherit; cursor: pointer; color: var(--u-text); background: color-mix(in srgb, var(--al-c) 18%, transparent); border: 1px solid color-mix(in srgb, var(--al-c) 40%, transparent); }
  .al-pop { --al-c: var(--title-icon-color, var(--u-accent, #3ba7d9)); }
  .hm { --hm-c: var(--title-icon-color, var(--u-accent, #3ba7d9)); container-type: inline-size; width: 100%; text-align: start; }
  .hm-sub { font-size: var(--u-font-s, 12px); color: var(--u-text); opacity: .65; margin: -4px 0 12px; }
  .hm-grid { display: grid; grid-template-columns: fit-content(28%) repeat(24, minmax(0, 1fr)); gap: 4px 4px; align-items: center; }
  .hm-hh { font-size: 10px; text-align: center; opacity: .65; color: var(--u-text); }
  .hm-name { display: flex; align-items: center; gap: 8px; min-width: 0; font-size: var(--u-font-s, 12px); font-weight: 500; color: var(--u-text); padding-inline-end: 6px; }
  .hm-nt { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .hm-img { width: 26px; height: 26px; border-radius: 6px; object-fit: cover; flex: none; }
  .hm-dl-label { font-weight: 400; opacity: .7; }
  .hm-c { display: grid; place-items: center; height: 26px; border-radius: 5px; min-width: 0;
    background: color-mix(in srgb, var(--hm-c) calc(var(--lv) * 11.5%), color-mix(in srgb, var(--u-text, #888) 7%, transparent)); }
  .hm-v { font-size: 11px; font-weight: 600; color: var(--u-text); }
  .hm-d { display: grid; place-items: center; height: 22px; border-radius: 5px; min-width: 0; background: #1b1d4a; }
  .hm-d ha-icon { --mdc-icon-size: 14px; color: #fff; }
  .hm-dawn { background: #3a3f8f; } .hm-dusk { background: #4a3a85; }
  .hm-rise { background: #ff9f2e; } .hm-set { background: #c58be8; }
  .hm-day { background: color-mix(in srgb, #d8c13a calc(35% + var(--dl, 0) * 45%), #4b3d1c); }
  ha-card.hm-card .title-label { display: inline-flex; flex-direction: row; align-items: center; gap: 8px; }
  ha-card.hm-card .title-icon { display: inline-flex; }
  ha-card.hm-card .title-icon ha-icon, ha-card.hm-card .title-icon ha-state-icon { --title-icon-size: 22px; }
  ha-card.hm-light .hm-d { background: #b9b6c8; }
  ha-card.hm-light .hm-dawn, ha-card.hm-light .hm-dusk { background: #e1def8; }
  ha-card.hm-light .hm-rise { background: #ff8c1a; } ha-card.hm-light .hm-set { background: #c85fd8; }
  ha-card.hm-light .hm-day { background: color-mix(in srgb, #ffcf4d calc(30% + var(--dl, 0) * 60%), #fff3b8); }
  .bn { container-type: inline-size; width: 100%; text-align: start; color: var(--u-text); --hm-c: var(--title-icon-color, var(--u-accent, #3ba7d9)); }
  .bn-tabs { display: flex; gap: 2px; border-bottom: 1px solid color-mix(in srgb, var(--u-text, #888) 18%, transparent); margin-bottom: 14px; overflow-x: auto; }
  .bn-tab { appearance: none; background: none; border: 0; border-bottom: 2px solid transparent; color: var(--u-text); opacity: .65; font: inherit; font-size: var(--u-font-s, 13px); padding: 8px 12px; cursor: pointer; white-space: nowrap; border-radius: 0; }
  .bn-tab.on { opacity: 1; font-weight: 600; border-bottom-color: var(--hm-c); }
  .bn-range { display: flex; align-items: center; gap: 6px; font-size: var(--u-font-s, 12px); opacity: .7; margin: -6px 0 10px; --mdc-icon-size: 16px; }
  .bn-h { display: flex; flex-direction: column; margin-bottom: 8px; } .bn-h b { font-size: var(--u-font-m, 14px); font-weight: 600; } .bn-h span { font-size: var(--u-font-s, 12px); opacity: .65; }
  .bn-sec { margin-top: 16px; } .bn-quiet { text-align: center; opacity: .6; font-size: var(--u-font-s, 12px); padding: 14px 0; }
  .bn-box { border: 1px solid color-mix(in srgb, var(--u-text, #888) 14%, transparent); border-radius: 10px; padding: 12px; margin-top: 12px; min-width: 0; }
  .bn-kpis { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; } .bn-kpis2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bn-kpi { display: flex; flex-direction: column; border: 1px solid color-mix(in srgb, var(--u-text, #888) 14%, transparent); border-radius: 10px; padding: 10px 12px; min-width: 0; }
  .bn-kpi b { font-size: 22px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .bn-kl, .bn-ks { font-size: var(--u-font-s, 12px); opacity: .65; }
  .bn-two { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 12px; }
  .bn-bar { display: grid; grid-template-columns: minmax(70px, 28%) 1fr auto; align-items: center; gap: 8px; margin: 5px 0; font-size: var(--u-font-s, 12px); }
  .bn-bar i { display: block; height: 16px; border-radius: 4px; } .bn-bar em { font-style: normal; opacity: .7; } .bn-bl { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: end; }
  .bn-cols { display: flex; align-items: flex-end; gap: 10px; height: 130px; } .bn-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; gap: 4px; font-size: 11px; }
  .bn-col i { display: block; width: 100%; border-radius: 4px 4px 0 0; } .bn-col em { font-style: normal; opacity: .7; } .bn-col span { opacity: .7; }
  .bn-trend { width: 100%; height: 120px; display: block; } .bn-axis { display: flex; justify-content: space-between; font-size: 11px; opacity: .6; }
  .bn-sel, .bn-q input { font: inherit; font-size: var(--u-font-s, 12px); color: var(--u-text); background: transparent; border: 1px solid color-mix(in srgb, var(--u-text, #888) 25%, transparent); border-radius: 8px; padding: 6px 8px; min-width: 0; }
  .bn-sel option { color: #222; }
  .bn-tbl { width: 100%; border-collapse: collapse; font-size: var(--u-font-s, 12px); } .bn-tbl th { text-align: start; font-weight: 600; opacity: .75; padding: 6px 6px; } .bn-tbl td { padding: 6px; border-top: 1px solid color-mix(in srgb, var(--u-text, #888) 12%, transparent); vertical-align: middle; }
  .bn-cbar { display: inline-block; width: 60px; height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--u-text, #888) 14%, transparent); vertical-align: middle; overflow: hidden; } .bn-cbar i { display: block; height: 100%; }
  .bn-pic { position: relative; display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 6px; overflow: hidden; flex: none; background: color-mix(in srgb, var(--hm-c) 22%, transparent); }
  a.bn-pic { color: inherit; text-decoration: none; cursor: pointer; } a.bn-pic:hover img, a.bn-pic:hover .bn-ph { filter: brightness(1.12); }
  .bn-ph { font-size: 12px; font-weight: 600; } .bn-pic img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .bn-spl { display: inline-flex; align-items: center; gap: 8px; min-width: 0; } .bn-spn { display: flex; flex-direction: column; min-width: 0; } .bn-spn b { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .bn-spn small, .bn-ai small { opacity: .65; font-size: 11px; }
  .bn-nm { display: flex; align-items: center; gap: 4px; min-width: 0; }
  .bn-star { --mdc-icon-size: 14px; color: #f0a030; }
  .bn-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 8px; }
  .bn-sp { display: flex; align-items: center; justify-content: space-between; gap: 8px; border: 1px solid color-mix(in srgb, var(--u-text, #888) 14%, transparent); border-left: 3px solid #f0a030; border-radius: 8px; padding: 8px 10px; min-width: 0; font-size: var(--u-font-s, 12px); }
  .bn-sp .bn-spl { flex: 1; }
  .bn-live { border-left-color: #2fb86a; justify-content: flex-start; }
  .bn-badge { background: #2fb86a; color: #06240f; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 999px; white-space: nowrap; }
  .bn-filter { display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-end; } .bn-filter label { display: flex; flex-direction: column; gap: 4px; font-size: var(--u-font-s, 12px); } .bn-q { flex: 1; min-width: 140px; } .bn-q input { width: 100%; box-sizing: border-box; }
  .bn-views { display: inline-flex; gap: 4px; margin-inline-start: auto; } .bn-views button { appearance: none; border: 1px solid color-mix(in srgb, var(--u-text, #888) 25%, transparent); background: transparent; color: var(--u-text); border-radius: 8px; width: 34px; height: 32px; cursor: pointer; display: grid; place-items: center; --mdc-icon-size: 18px; } .bn-views button.on { background: color-mix(in srgb, var(--hm-c) 22%, transparent); border-color: var(--hm-c); }
  .bn-arts { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
  .bn-art { display: flex; flex-direction: column; gap: 8px; border-radius: 10px; padding: 10px; background: color-mix(in srgb, var(--u-text, #888) 6%, transparent); min-width: 0; }
  .bn-art .bn-pic { width: 100%; height: 110px; border-radius: 8px; } .bn-art .bn-ph { font-size: 32px; }
  .bn-ai b { display: block; font-weight: 600; } .bn-ai small { display: block; font-style: italic; margin-bottom: 6px; }
  .bn-ai dl { display: grid; grid-template-columns: 1fr auto; gap: 2px 8px; margin: 0; font-size: 11px; } .bn-ai dt { opacity: .65; } .bn-ai dd { margin: 0; font-weight: 600; text-align: end; }
  .bn-list { grid-template-columns: 1fr; } .bn-list .bn-art { flex-direction: row; align-items: center; } .bn-list .bn-art .bn-pic { width: 44px; height: 44px; } .bn-list .bn-ai { flex: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 0 12px; } .bn-list .bn-ai small { margin: 0; grid-column: 1; } .bn-list .bn-ai dl { grid-column: 2; grid-row: 1 / span 2; display: flex; gap: 12px; } .bn-list .bn-ai dt { display: none; }
  @container (max-width: 520px) { .bn-kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); } .bn-two { grid-template-columns: 1fr; } .bn-tbl th:nth-child(4), .bn-tbl td:nth-child(4) { display: none; } }
  ha-card.hm-light .bn-sp { background: transparent; }
  .hm-legend { display: flex; align-items: center; justify-content: flex-end; gap: 3px; margin-top: 10px; font-size: 11px; color: var(--u-text); opacity: .75; }
  .hm-legend i { width: 10px; height: 10px; border-radius: 2px; background: color-mix(in srgb, var(--hm-c) calc(var(--lv) * 11.5%), color-mix(in srgb, var(--u-text, #888) 7%, transparent)); }
  .hm-legend span:first-child { margin-inline-end: 3px; } .hm-legend span:last-child { margin-inline-start: 3px; }
  @container (max-width: 480px) { .hm-x { visibility: hidden; } .hm-v { display: none; } .hm-grid { gap: 3px 2px; } .hm-c { height: 18px; border-radius: 3px; } .hm-d { height: 16px; } .hm-img { display: none; } }
  .up { --up-c: var(--u-accent, var(--primary-color, #3b82d9)); display: grid; gap: 2px; }
  .up .up-stats { display: flex; justify-content: center; gap: 12px; margin: 0 0 10px; padding: 0; border-top: 0 !important; box-shadow: none !important; }
  .up .up-stats .stat { flex: 0 1 130px; min-width: 96px; }
  .up .up-toggle { display: flex; align-items: center; justify-content: center; width: 40px; height: 26px; margin: 0 auto 4px; padding: 0; background: none; border: 0; border-radius: 999px; color: var(--u-text); opacity: .75; }
  .up .up-toggle ha-icon { --mdc-icon-size: 24px; }
  .up .up-toggle:hover:not(:disabled) { opacity: 1; background: color-mix(in srgb, var(--u-text) 10%, transparent); }
  .up-row { font: inherit; color: var(--u-text); cursor: pointer; text-align: start; display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px 2px; background: none; border: 0; border-top: 1px solid var(--u-edge, rgba(127,127,127,.25)); border-radius: 0; }
  .up-row ha-state-icon { --mdc-icon-size: 20px; color: var(--up-c); flex: none; }
  .up-row:hover { filter: brightness(1.15); }
  .up-row:focus-visible { outline: 2px solid var(--up-c); outline-offset: 1px; }
  .up-ok { opacity: .6; }
  .up-name { font-size: var(--u-font-m, 14px); min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .up .up-vers { display: flex; flex: none; gap: 8px; margin: 0 0 0 auto; padding: 0; border-top: 0 !important; box-shadow: none !important; }
  .up .up-vers .stat { min-width: 72px; }
  .up-note { font-size: var(--u-font-s, 12px); opacity: .65; padding-top: 6px; }
  .al-empty { width: 100%; font-size: var(--u-font-m, 14px); color: var(--u-text); opacity: .75; padding: 4px 0; }
  .dwd { display: grid; gap: 10px; width: 100%; text-align: start; }
  /* Farbstreifen (einheitlich 40 px) links, Fläche leicht in der Warnfarbe getönt; passt sich dem Theme an */
  .dwd-summary { display: flex; align-items: stretch; border-radius: 10px; overflow: hidden; color: var(--u-text); border: 1px solid var(--u-edge); background: color-mix(in srgb, var(--lvl) 12%, transparent); }
  .dwd-summary .muted { color: var(--u-muted); }
  .dwd-level { flex: none; width: 40px; display: grid; place-items: center; --mdc-icon-size: 24px; background: var(--lvl); color: var(--lvl-text); }
  .dwd-none { background: none; }
  .dwd-none .dwd-level { background: none; color: var(--u-good); border-inline-end: 1.5px solid var(--u-edge); }
  .dwd-summary .dwd-text, .dwd-head .dwd-text { padding: 8px 10px; }
  .dwd-text { display: grid; gap: 2px; min-width: 0; flex: 1; }
  .dwd-text strong { font-weight: 650; overflow-wrap: anywhere; }
  .dwd-section { display: grid; gap: 6px; }
  .dwd-title { font-size: var(--u-font-s); text-transform: uppercase; letter-spacing: .04em; }
  .dwd-item { border: 1px solid var(--u-edge); border-radius: 10px; background: color-mix(in srgb, var(--lvl) 8%, transparent); overflow: hidden; }
  .dwd-head, :host([data-card-style]) .dwd-head { display: flex; align-items: stretch; gap: 0; width: 100%; padding: 0; text-align: start;
    background: none !important; border: 0 !important; border-radius: 0; box-shadow: none !important; color: inherit; font: inherit; }
  .dwd-head:disabled { opacity: 1; cursor: default; }
  .dwd-badge { flex: none; display: grid; place-items: center; width: 40px; background: var(--lvl); color: var(--lvl-text); font-weight: 600; font-size: 1.1em; }
  .dwd-chevron { flex: none; display: inline-grid; align-self: center; margin-inline-end: 8px; --mdc-icon-size: 20px; opacity: .7; }
  .dwd-details { padding: 0 12px 10px 12px; font-size: var(--u-font-s); display: grid; gap: 6px; }
  .dwd-details p { margin: 0; overflow-wrap: anywhere; }
  .dwd-instruction { font-weight: 600; }
  /* Warnungs-Layout vertikal: Inhalt zentriert, zu breite Zeilen laufen als Laufschrift */
  .dwd-v .dwd-text { flex: 1 1 0; min-width: 0; text-align: center; }
  .dwd-v .dwd-head { text-align: center; position: relative; }
  /* Text mittig zur ganzen Karte: rechts 40 px (Streifenbreite) mehr Abstand als links */
  .dwd-v .dwd-summary .dwd-text, .dwd-v .dwd-head .dwd-text { padding-inline: 10px 50px; }
  .dwd-v .dwd-chevron { position: absolute; inset-inline-end: 8px; top: 50%; transform: translateY(-50%); margin: 0; }
  .dwd-line { display: block; overflow: hidden; white-space: nowrap; text-align: center; min-width: 0; }
  .dwd-line-in { display: inline-block; }
  .dwd-line.scrolling { text-align: start; }
  .dwd-line.scrolling .dwd-line-in { animation: ucp-marquee 5s ease-in-out infinite alternate; }
  @media (prefers-reduced-motion: reduce) { .dwd-line.scrolling .dwd-line-in { animation: none; } }
  .dwd-pop { position: fixed; margin: 0; inset: auto; box-sizing: border-box; overflow: auto; max-height: min(60vh, 420px); padding: 12px 14px; text-align: start;
    font-size: var(--u-font-m, 14px); line-height: 1.4;
    color: var(--u-text); background-color: var(--card-background-color, #1c1c1c); background-image: linear-gradient(var(--u-bg, transparent), var(--u-bg, transparent));
    border: 1px solid var(--u-edge); border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,.45); }
  .dwd-empty, .dwd-updated, .dwd-more { text-align: center; font-size: var(--u-font-s); }
  .ph-tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; width: 100%; }
  .ph-tile { background: var(--tile); color: #fff; border-radius: 6px; overflow: hidden; display: grid; text-align: start; }
  .ph-tile-body { position: relative; display: grid; gap: 2px; padding: 10px 12px; min-height: 58px; }
  .ph-tile-label { font-size: var(--u-font-s); }
  .ph-tile-value { font-size: var(--u-font-xl); font-weight: 700; line-height: 1.1; }
  .ph-tile-icon { position: absolute; inset-inline-end: 8px; top: 8px; opacity: .22; --mdc-icon-size: 48px; }
  .ph-tile-icon ha-icon { --mdc-icon-size: 48px; }
  .ph-spark { display: block; width: 100%; height: 26px; }
  .ph-dist { width: 100%; display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; }
  .ph-legend { display: grid; gap: 6px; font-size: var(--u-font-s); text-align: start; }
  .ph-legend i { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-inline-end: 5px; }
  .wd { width: 100%; gap: 10px; }
  .wd-head { display: grid; justify-items: center; gap: 2px; }
  .orb.warn { color: var(--u-warn); }
  .wd-progress { width: 100%; display: grid; gap: 4px; }
  .wd-bar { width: 100%; height: 8px; border-radius: 6px; background: var(--u-edge); overflow: hidden; }
  .wd-bar span { display: block; height: 100%; width: var(--level); background: var(--u-accent); border-radius: 6px; transition: width .4s; }
  .wd-meta { display: flex; justify-content: space-between; gap: 8px; font-size: var(--u-font-s); }
  .wd-actions { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 7px; width: 100%; }
  .wd-select { min-width: 0; padding: 6px 8px; }
  .wd-btn { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; font-size: var(--u-font-s); }
  .wd-profiles { width: 100%; display: grid; gap: 3px; font-size: var(--u-font-s); text-align: start; border-top: 1px solid var(--u-edge); padding-top: 8px; }
  .wd-prof { display: flex; justify-content: space-between; gap: 10px; }
  .wd-prof span:last-child { color: var(--u-muted, inherit); text-align: end; }
  .light-range { accent-color: var(--u-warn); }
  .light { width: 100%; }
  .light-main { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 76px; width: 100%; overflow: hidden; }
  .light-foot { display: grid; grid-template-columns: 36px minmax(0, 1fr) 36px; align-items: center; gap: 6px; width: 100%; height: 24px; }
  .light-colors { display: grid; gap: 6px; width: min(100%, 230px); }
  .light-colors .controls { justify-content: space-between; flex-wrap: nowrap; gap: 0; }
  .color-field { width: 100%; height: 26px; border-radius: 8px; cursor: crosshair; border: 1px solid var(--u-edge); touch-action: none;
    background: linear-gradient(to bottom, transparent, #fff), linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); }
  .light-state { min-width: 0; text-align: center; }
  .swatch { width: 34px; height: 34px; flex: none; padding: 0; border-radius: 50%; border: 2px solid var(--u-edge); background: var(--sw); cursor: pointer; }
  .swatch:hover { border-color: var(--u-text); }
  .presets button.on { border-color: var(--u-warn); color: var(--u-warn); }
  .range.vertical { writing-mode: vertical-lr; direction: rtl; width: 28px; height: 96px; }
  .slider-card:not(.vertical) { min-height: 56px; flex: 1 1 auto; align-content: space-between; gap: 0; overflow: hidden; width: 100%; }
  .slider-card:not(.vertical) .slider-track { width: min(100%, 280px); gap: 2px; }
  ha-card > .center.slider-state { flex: 0 0 auto; }
  /* Horizontal: Icon | Name | State auf gleicher Höhe wie in der State-Karte (mittig in der Karte), der Regler mittig darunter */
  :host([data-layout="horizontal"]) ha-card:has(> .slider-row) { grid-template-rows: 1fr auto 1fr auto; align-content: stretch; }
  :host([data-layout="horizontal"]) ha-card:has(> .slider-row) > h3, :host([data-layout="horizontal"]) ha-card > .slider-state { grid-row: 2; }
  :host([data-layout="horizontal"]) ha-card > .slider-row { grid-row: 3; align-self: center; }
  :host([data-layout="horizontal"]) ha-card:has(> .slider-row) > :not(h3):not(.slider-state):not(.slider-row) { grid-row: 4; }
  ha-card > .center.slider-row { flex: 1 1 auto; align-content: center; width: 100%; }
  /* contain: inline-size verhindert, dass die Reglerbreite die Spalten von Icon/Name/State im horizontalen Layout aufweitet */
  .slider-row { contain: inline-size; }
  .slider-row .range { width: min(100%, 280px); position: relative; top: 8px; }
  .slider-head { display: flex; align-items: center; justify-content: center; gap: 8px; min-height: 24px; }
  .slider-card:not(.vertical) .presets button { min-height: 28px; }
  .slider-track { width: min(100%, 280px); position: relative; display: grid; gap: 5px; }
  .progress { width: min(100%, 280px); height: 3px; border-radius: 4px; overflow: hidden; background: var(--u-edge); }
  .progress span { display: block; height: 100%; width: var(--level); background: var(--u-accent); }
  .presets button { min-width: 36px; min-height: 30px; padding: 3px 5px; }
  .media-ring { width: 88px; height: 88px; border-radius: 50%; border: 2px solid var(--u-accent);
    display: grid; place-items: center; overflow: hidden; }
  .media-ring img { width: 100%; height: 100%; object-fit: cover; }
  .media-ring ha-icon { color: var(--title-icon-color, var(--u-accent)); --mdc-icon-size: 34px; }
  /* ===== Mediaplayer ===== */
  ha-card.mp { display: grid; grid-template-columns: minmax(0, 1fr); gap: 10px; align-content: start; }
  .mp-main { display: grid; gap: 10px; min-width: 0; }
  .mp-main > h3 { margin: 0; text-align: var(--title-align, left); }
  .mp-now { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .mp-large .mp-now { flex-direction: column; text-align: center; }
  .mp-cover { flex: none; width: 52px; height: 52px; border-radius: 10px; overflow: hidden; display: grid; place-items: center;
    background: var(--u-surface); border: 1px solid var(--u-edge); }
  .mp-cover-btn { padding: 0; margin: 0; cursor: pointer; font: inherit; color: inherit; }
  .mp-cover-btn:hover { filter: brightness(1.12); }
  .mp-large .mp-cover { width: min(72%, 220px); height: auto; aspect-ratio: 1; border-radius: 14px; }
  .mp-cover img, .mp-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .mp-cover ha-icon { color: var(--title-icon-color, var(--u-accent)); --mdc-icon-size: 30px; }
  .mp-large .mp-cover ha-icon { --mdc-icon-size: 64px; }
  .mp-meta { display: grid; gap: 2px; min-width: 0; flex: 1; }
  .mp-title { font-weight: 650; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mp-sub { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mp-large .mp-meta { justify-items: center; max-width: 100%; flex: none; }
  .hide-state .mp-now .mp-meta { display: none; }
  .mp-seekwrap { display: grid; gap: 3px; }
  .mp-bar { height: 4px; border-radius: 4px; overflow: hidden; background: var(--u-edge); }
  .mp-bar span { display: block; height: 100%; width: var(--level, 0%); background: var(--u-accent); }
  .mp-times { display: flex; justify-content: space-between; color: var(--u-muted); font-size: var(--u-font-s); font-variant-numeric: tabular-nums; }
  .mp-row { display: flex; align-items: center; justify-content: center; gap: 7px; flex-wrap: wrap; }
  .mp-extras .range { flex: 1 1 110px; width: auto; min-width: 80px; }
  .mp-extras select { flex: 1 1 120px; }
  .mp-controls { flex: none; flex-wrap: nowrap; margin-inline-start: auto; }
  .round.sm { width: 30px; height: 30px; flex: none; }
  /* Mediaplayer: Bedienknöpfe in der Icon-Color der Karte, Größe einstellbar (Touch) */
  ha-card.mp .round { width: var(--mp-btn, 44px); height: var(--mp-btn, 44px); flex: none; color: var(--title-icon-color, var(--u-accent)); }
  ha-card.mp .round.sm { width: var(--mp-btn, 44px); height: var(--mp-btn, 44px); }
  ha-card.mp .round.on { color: var(--title-icon-color, var(--u-second)); }
  ha-card.mp .round ha-icon { --mdc-icon-size: calc(var(--mp-btn, 44px) * .55); }
  .round.on { color: var(--u-second); border-color: var(--u-second); }
  .mp-panel { box-sizing: border-box; width: min(92vw, 480px); max-height: 82vh; margin: auto; padding: 14px; gap: 8px; border: 1px solid var(--u-edge);
    border-radius: 16px; background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, var(--u-text)); overflow: hidden; }
  .mp-panel[open] { display: grid; grid-template-columns: minmax(0, 1fr); }
  :host([data-wrapper]), :host([data-cc]) { height: auto; }
  :host([data-cc]) ha-card { padding: 8px 10px; }
  .cc-row { display: flex; align-items: center; gap: 10px; }
  .cc-mid { flex: 1; min-width: 0; text-align: center; display: grid; justify-items: center; gap: 1px; line-height: 1.2; }
  .cc-name { display: flex; align-items: center; justify-content: center; gap: 5px; max-width: 100%; font-size: var(--title-font-size, var(--u-font-s)); color: var(--title-color, var(--u-muted)); }
  .cc-name span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
  .cc-name ha-state-icon, .cc-name ha-icon { --mdc-icon-size: var(--title-icon-size, 15px); color: var(--title-icon-color, var(--u-accent)); flex: none; }
  .cc-set { font-size: var(--state-font-size, 22px); font-weight: 500; color: var(--state-color, var(--u-text)); }
  .cc-set .unit { font-size: .6em; font-weight: 400; }
  .cc-act { font-size: var(--u-font-s); color: var(--u-muted); }
  .round.cc-btn { width: 48px; height: 48px; flex: none; }
  .round.cc-btn ha-icon { --mdc-icon-size: 26px; }
  :host ha-card.ucp-wrap { height: auto; padding: 0; }
  .ucp-wrap-inner { padding: 0; color: var(--u-text); --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0px; --ha-card-border-color: transparent;
    --primary-text-color: var(--u-text); --secondary-text-color: var(--u-muted); --primary-color: var(--u-accent); --divider-color: var(--u-edge);
    --ha-color-form-background: var(--u-surface); --mdc-text-field-fill-color: var(--u-surface); --input-fill-color: var(--u-surface); }
  .ucp-popup { max-width: 90vw; max-height: 85vh; }
  .ucp-popup[open] { grid-template-rows: auto minmax(0, 1fr); }
  .mp-panel-head .round { padding: 0; }
  .ucp-popup-body > * { flex: none; height: auto; max-height: none; }
  .ucp-popup-body { scrollbar-width: thin; }
  .mp-panel-head .round ha-icon { display: grid; place-items: center; line-height: 0; }
  .mp-panel::backdrop { background: rgba(0, 0, 0, .55); }
  :host([data-card-style="neon"]) .mp-panel { background: radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--u-accent) 14%, transparent), transparent 72%), var(--card-background-color, #10131c);
    border: 1px solid var(--u-accent); box-shadow: 0 0 18px color-mix(in srgb, var(--u-accent) 45%, transparent), inset 0 0 12px color-mix(in srgb, var(--u-accent) 18%, transparent); }
  :host([data-card-style="neon"]) .mp-panel::backdrop { background: rgba(0, 0, 8, .7); }
  :host([data-card-style="glassmorphism"]) .mp-panel { --u-text: #f6f9fd; --u-muted: #d7e4ed; color: #f6f9fd; border: 1px solid rgba(218, 234, 243, .58);
    background: linear-gradient(155deg, #344352 0%, #151b24 48%, #090d14 100%); box-shadow: inset 0 1px 9px #d8eeff33, inset 0 -2px 14px #d8eeff18, 0 12px 40px #0009; }
  :host([data-card-style="glassmorphism"]) .mp-panel::backdrop { background: rgba(8, 14, 22, .55); backdrop-filter: blur(6px); }
  :host([data-card-style="neumorphism"]) .mp-panel, :host([data-card-style="neumorphism_dark"]) .mp-panel { background: var(--u-bg); color: var(--u-text); border: none; border-radius: 24px; box-shadow: var(--neu-out); }
  :host([data-card-style="neumorphism"]) .mp-panel::backdrop, :host([data-card-style="neumorphism_dark"]) .mp-panel::backdrop { background: color-mix(in srgb, var(--u-bg) 60%, transparent); backdrop-filter: blur(3px); }
  :host([data-card-style="flat"]) .mp-panel { background: var(--u-bg); color: var(--u-text); border: none; border-radius: 12px; box-shadow: none; }
  :host([data-card-style="flat"]) .mp-panel::backdrop { background: color-mix(in srgb, var(--u-bg) 55%, #000 25%); opacity: .85; }
  :host([data-card-style="skeuomorph"]) .mp-panel { background: linear-gradient(180deg, #4d535c 0%, #3a3f47 45%, #2b2f36 100%); color: var(--u-text); border: 1px solid #1c1f24; border-radius: 14px;
    box-shadow: inset 0 1px 0 #ffffff44, inset 0 -2px 6px #0006, 0 10px 30px #000b; }
  :host([data-card-style="skeuomorph"]) .mp-panel::backdrop { background: rgba(10, 11, 13, .7); }
  :host([data-card-style="minimal"]) .mp-panel { border: none; border-radius: 20px; padding: 20px; box-shadow: 0 12px 40px #0004; }
  :host([data-card-style="minimal"]) .mp-panel::backdrop { background: rgba(0, 0, 0, .35); }
  .mp-panel-head { display: flex; align-items: center; gap: 6px; }
  .mp-panel-title { flex: 1; min-width: 0; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mp-search { box-sizing: border-box; width: 100%; padding: 7px 12px; border-radius: 999px; border: 1px solid var(--u-edge);
    background: var(--u-surface); color: inherit; font: inherit; }
  .mp-list { display: grid; grid-template-columns: minmax(0, 1fr); gap: 2px; max-height: calc(82vh - 130px); min-height: 0; overflow-y: auto; overscroll-behavior: contain; }
  .mp-item { display: flex; align-items: center; gap: 4px; min-width: 0; }
  .mp-item .mp-open { flex: 1; min-width: 0; display: flex; align-items: center; gap: 10px; text-align: start;
    padding: 4px 6px; border-radius: 10px; border-color: transparent; background: transparent; }
  .mp-item .mp-open:hover:not(:disabled) { background: var(--u-surface); }
  .mp-item .mp-meta { flex: 1; }
  .mp-thumb { flex: none; width: 40px; height: 40px; border-radius: 8px; overflow: hidden; display: grid; place-items: center;
    background: var(--u-surface); }
  .mp-thumb ha-icon { color: var(--title-icon-color, var(--u-accent)); --mdc-icon-size: 22px; }
  .mp-actions { display: flex; gap: 3px; flex: none; }
  ha-card.mp { container-type: inline-size; }
  .mp-vis { display: grid; justify-items: center; }
  .mp-vis:empty { display: none; }
  .mp-vis .music-clock-bars { width: 100%; }

  .weather-current { display: flex; justify-content: center; align-items: center; text-align: start; gap: 12px; }
  .weather-current ha-icon { color: var(--title-icon-color, var(--u-accent)); --mdc-icon-size: 54px; }
  .weather-icon { position: relative; display: inline-flex; align-items: center; }
  .weather-period { position: absolute; inset: 0 0 auto auto; display: inline-flex;
    padding: 0; }
  .weather-current .weather-period ha-icon { --mdc-icon-size: 17px; }
  .forecast .weather-period ha-icon { --mdc-icon-size: 9px; }
  /* Vorhersage: geringer Rand und gleichmäßig verteilte Tage, damit möglichst viele nebeneinander passen */
  .forecast { display: flex; justify-content: center; flex-wrap: wrap; gap: 2px; margin: 12px -8px 0; }
  .forecast > div { flex: 1 1 46px; min-width: 46px; padding: 5px 3px; border: 1px solid var(--u-edge); border-radius: 9px;
    display: grid; justify-items: center; gap: 3px; }
  .forecast > div > span { white-space: nowrap; }
  .forecast.no-border > div { border-color: transparent; }
  /* bis 8 Tage immer in einer Zeile (sonst rutscht der letzte Tag in eine abgeschnittene zweite Zeile) */
  .forecast.fit { flex-wrap: nowrap; }
  .forecast.fit > div { flex: 1 1 0; min-width: 0; padding-inline: 1px; }
  .forecast ha-icon { --mdc-icon-size: var(--fc-icon, 19px); color: var(--fc-icon-color, var(--title-icon-color, var(--u-accent))); }
  .graph-plot { display: grid; grid-template-columns: auto minmax(0, 1fr); grid-template-rows: minmax(90px, 1fr) auto; }
  .chart { display: block; width: 100%; height: 100%; grid-column: 2; }
  .graph-axis-labels { color: var(--u-muted); font-size: var(--u-font-s); display: flex; justify-content: space-between; gap: .25em; }
  .graph-y-labels { grid-row: 1; grid-column: 1; flex-direction: column; text-align: end; padding-inline-end: .4em; }
  .graph-x-labels { grid-row: 2; grid-column: 2; margin-top: .2em; flex-wrap: wrap; }
  .chart .grid { stroke: var(--u-edge); }
  .graph-label { display: flex; flex-wrap: wrap; gap: 6px 12px; margin-top: 5px; justify-content: var(--legend-justify, flex-start); }
  .graph-label > span::before { content: ""; display: inline-block; width: 8px; height: 8px; margin-inline-end: 4px;
    background: var(--line); border-radius: 50%; }
  .status:not(.stacked) { grid-template-columns: auto minmax(0,1fr); align-items: center; text-align: start; }
  .status .value { overflow-wrap: anywhere; }
  .battery-level .value, .light-state .value, .status .value { font-size: var(--state-font-size, inherit); }
  .state-btn { background: none; border: 0; border-radius: 0; padding: 0; margin: 0; color: inherit; font: inherit; text-align: inherit; }
  .state-btn, :host([data-card-style]) .state-btn { background: none !important; border: 0 !important; box-shadow: none !important; text-shadow: none; padding: 0; border-radius: 0; }
  .light-main:empty { display: none; }
  .tl { display: grid; grid-template-columns: fit-content(30%) minmax(0, 1fr); column-gap: 10px; row-gap: 6px; align-items: center; width: 100%; position: relative; text-align: start; }
  .tl-name { display: flex; flex-direction: column; min-width: 0; font-size: var(--u-font-s, 12px); color: var(--u-text); }
  .tl-nt { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .tl-name small { opacity: .65; font-size: 11px; white-space: nowrap; }
  .tl-lane { position: relative; height: var(--tl-h, 28px); border-radius: 5px; overflow: hidden; background: color-mix(in srgb, var(--u-text, #888) 8%, transparent); }
  .tl-lane i { position: absolute; top: 0; bottom: 0; min-width: 2px; background: var(--tl-c); opacity: .9; cursor: pointer; }
  .tl-grid { position: relative; z-index: 1; pointer-events: none; }
  .tl-grid i { position: absolute; top: 0; bottom: 0; width: 1px; background: color-mix(in srgb, var(--u-text, #888) 14%, transparent); }
  .tl-axis { position: relative; height: 16px; font-size: 11px; color: var(--u-muted); }
  .tl-axis span { position: absolute; top: 0; white-space: nowrap; }
  .tl-info { min-height: 1.2em; margin-top: 6px; font-size: var(--u-font-s, 12px); color: var(--u-muted); }
  .history-band { height: 13px; position: relative; border-radius: 5px; overflow: hidden; background: var(--u-edge); margin: 3px 0 8px; }
  .history-band span { position: absolute; top: 0; bottom: 0; opacity: .8; }
  select { border-radius: 8px; border: 1px solid var(--u-edge); background: var(--u-bg); padding: 4px; max-width: 100%; }
  .bar-stats { padding-top: 0; }
  .bar-stats .stats { border-top: 0; margin-top: 0; }
  :host { --u-font-m: var(--ha-font-size-m, var(--paper-font-body1_-_font-size, inherit));
    --u-font-s: var(--ha-font-size-s, var(--u-font-m)); --u-font-l: var(--ha-font-size-l, var(--u-font-m));
    --u-font-xl: var(--ha-font-size-xl, var(--u-font-l)); --u-font-xxl: var(--ha-font-size-2xl, var(--u-font-xl)); }
  ha-card { font-size: var(--u-font-m); }
  h3 { font-size: var(--title-font-size, var(--u-font-m)); text-align: var(--title-align, left); color: var(--title-color, inherit); }
  :host([data-state-size]) :is(.wd-head, .slider-head, .dial-center) .value, :host([data-state-size]) .state-btn .value { font-size: var(--state-font-size); }
  :host([data-state-color]) :is(.value, .state-btn, .battery-level, .light-state, .status, .clock, .graph-state, .weather-state) { color: var(--state-color); }
  :host([data-state-size]) :is(.clock, .graph-state) { font-size: var(--state-font-size); }
  :host([data-state-size]) .weather-current .value { font-size: var(--state-font-size); }
  .value { font-size: var(--u-font-xl); }
  .hide-state :is(.value, .clock, .analog, .dial-center > .muted, .graph-state, .weather-state) { display: none; }
  .unit, .muted, .scale, .graph-label { font-size: var(--u-font-s); }
  .stat dt { font-size: var(--clock-detail-font-size, var(--ha-ultimate-card-detail-title-font-size, var(--u-font-s))); }
  .stat dd { font-size: var(--clock-detail-font-size, var(--ha-ultimate-card-detail-info-font-size, var(--u-font-s))); }
  .stat { text-align: var(--detail-align, left); }
  .clock { font-size: var(--ha-ultimate-card-clock-font-size, var(--u-font-xxl)); }
  .clock-seconds { font-size: .5em; margin-inline-start: .12em; }
  .battery-level .value { font-size: var(--state-font-size, var(--u-font-l)); }
  .presets button { font-size: var(--u-font-s); }
  .forecast > div { font-size: var(--fc-font, var(--u-font-s)); }
  .dial-scale { grid-area: auto; padding: 3px 4% 0; }
  .dial-hit { touch-action: none; cursor: grab; outline: none; -webkit-tap-highlight-color: transparent; }
  .dial-hit:focus-visible { stroke: var(--u-edge); }
  .dial-hit:active, .dragging .dial-hit { cursor: grabbing; stroke: transparent; }
  .dragging .dial-progress { transition: none; }
  .dial-progress.animated { transition: stroke-dasharray 160ms ease; }
  .title-label { display: inline-block; max-width: 100%; }
  .title-icon { display: inline-flex; vertical-align: middle; margin-inline-end: 5px; }
  .title-icon ha-icon, .title-icon ha-state-icon, .card-title ha-icon { --mdc-icon-size: var(--title-icon-size, 25px); color: var(--title-icon-color, var(--u-accent)); }
  .marquee-title { overflow: hidden; white-space: nowrap; min-width: 0; }
  .marquee-title .title-label { max-width: none; }
  .marquee-title.scrolling { text-align: start; }
  .marquee-title.scrolling .title-label { max-width: none; animation: ucp-marquee 5s ease-in-out infinite alternate; }
  @keyframes ucp-marquee { 0%, 15% { transform: translateX(0); } 85%, 100% { transform: translateX(var(--title-shift)); } }
  @media (prefers-reduced-motion: reduce) { .marquee-title.scrolling .title-label { animation: none; }
    .dial-progress.animated { transition: none; } }
  .feedback { margin: 8px 0 0; color: var(--u-error); font-size: var(--u-font-s); }
  /* ===== Preset: Neon ===== */
  :host([data-card-style="neon"]) {
    --u-surface: color-mix(in srgb, var(--u-accent) 8%, transparent);
    --u-edge: color-mix(in srgb, var(--u-accent) 25%, transparent);
  }
  :host([data-card-style="neon"]) ha-card { background: radial-gradient(ellipse at 50% 0%, var(--u-surface), transparent 72%), var(--u-bg); }
  :host([data-card-style="neon"]) .orb { background: radial-gradient(circle, var(--u-surface), transparent);
    box-shadow: 0 0 17px var(--u-edge), inset 0 0 15px var(--u-edge); }
  :host([data-card-style="neon"]) .orb.on { box-shadow: 0 0 18px color-mix(in srgb, currentColor 45%, transparent), inset 0 0 14px var(--u-edge); }
  :host([data-card-style="neon"]) .clock { text-shadow: 0 0 15px var(--u-edge); }
  :host([data-card-style="neon"]) .progress span { background: linear-gradient(90deg, var(--u-accent), var(--u-second)); }
  :host([data-card-style="neon"]) .media-ring { box-shadow: 0 0 14px var(--u-edge); }
  :host([data-card-style="neon"]) .weather-current ha-icon { filter: drop-shadow(0 0 6px var(--u-edge)); }
  :host([data-card-style="neon"]) .music-clock-bars i { background: linear-gradient(to top, color-mix(in srgb, currentColor 82%, transparent),
    color-mix(in srgb, currentColor 30%, transparent)); }
  :host([data-card-style="neon"]) ha-card.theme { --nb-glow: .65; --nb-bg: radial-gradient(ellipse at 50% 0%, var(--u-surface), transparent 72%), var(--u-bg); }
  :host([data-card-style="neon"]) .bar { border: 1px solid color-mix(in srgb, var(--c1) 38%, transparent); }
  :host([data-card-style="neon"]) .h .fill { background: linear-gradient(90deg, color-mix(in srgb,var(--u-good) 72%,var(--c1)), var(--c1)); }
  :host([data-card-style="neon"]) .v .fill { background: linear-gradient(0deg, var(--c1), color-mix(in srgb,var(--u-text) 22%,var(--c1))); }
  :host([data-card-style="neon"]) .h .item.neg .fill { background: linear-gradient(270deg, color-mix(in srgb,var(--u-good) 72%,var(--c1)), var(--c1)); }
  :host([data-card-style="neon"]) .v .item.neg .fill { background: linear-gradient(180deg, var(--c1), color-mix(in srgb,var(--u-text) 22%,var(--c1))); }
  :host([data-card-style="neon"]) .cap { box-shadow: 0 0 0 3px var(--nb-cap-ring), 0 0 12px color-mix(in oklab, var(--c1) 70%, transparent); }

  /* ===== Preset: Glassmorphism ===== */
  :host([data-card-style="glassmorphism"]) ha-card {
    position: relative;
    --u-text: #f6f9fd; --u-muted: #d7e4ed; --u-edge: color-mix(in srgb, #dceaf3 30%, transparent);
    --u-surface: #a5d2eb1a;
    --nb-text: var(--u-text); --nb-muted: var(--u-muted); --nb-title-color: var(--u-text);
    --nb-bg: linear-gradient(155deg, #344352 0%, #151b24 48%, #090d14 100%);
    border: 1px solid rgba(218, 234, 243, .58);
    background: linear-gradient(155deg, #344352 0%, #151b24 48%, #090d14 100%);
    box-shadow: inset 0 1px 9px #d8eeff33, inset 0 -2px 14px #d8eeff18, var(--ha-card-box-shadow, none);
  }
  :host([data-card-style="glassmorphism"]) .stat, :host([data-card-style="glassmorphism"]) button { backdrop-filter: blur(8px); }
  :host([data-card-style="glassmorphism"]) .music-clock .stat { background: #a5d2eb1a; }
  :host([data-card-style="glassmorphism"]) ha-card.music-clock-playing::before {
    content: ""; position: absolute; pointer-events: none; border-radius: inherit;
    inset: 0; z-index: 0;
    background: linear-gradient(0deg, #05080ee8, transparent 52%),
      radial-gradient(ellipse at 50% 38%, #e4a05b32, transparent 65%),
      radial-gradient(ellipse at center, transparent 42%, #07121a90);
  }
  :host([data-card-style="glassmorphism"]) ha-card::after {
    content: ""; position: absolute; pointer-events: none; z-index: 2;
    inset: var(--music-glass-inset, 8px);
    border-radius: max(10px, calc(max(18px, var(--ha-card-border-radius, 16px)) - var(--music-glass-inset, 8px)));
    border: 1px solid #a9e3efc7;
    box-shadow: inset 0 1px 8px #92daef38, 0 0 9px #92daef24;
    mask-image: linear-gradient(#000, #000c 24%, transparent 86%);
  }
  :host([data-card-style="glassmorphism"]) .music-clock .clock-cover { filter: blur(4px) brightness(.72) contrast(1.12) saturate(.82);
    mask-image: radial-gradient(ellipse at 50% 38%, #000 18%, #000e 52%, transparent 100%); }
  :host([data-card-style="glassmorphism"]) .music-clock .music-clock-date,
  :host([data-card-style="glassmorphism"]) .music-clock .music-clock-time,
  :host([data-card-style="glassmorphism"]) .music-clock-track { text-shadow: 0 2px 3px #000e, 0 6px 16px #000b; }
  :host([data-card-style="glassmorphism"]) .music-clock-bars:has(i)::after {
    content: ""; position: absolute; inset: auto 0 0; height: 1px;
    background: linear-gradient(90deg, transparent, #c9e2ee55 22%, #e7eef069 50%, #c9e2ee55 78%, transparent);
    box-shadow: 0 3px 6px 2px #0009;
  }
  :host([data-card-style="glassmorphism"]) .music-clock-bars i { background: linear-gradient(to top, color-mix(in srgb, currentColor 82%, transparent),
    color-mix(in srgb, currentColor 30%, transparent)); }
  /* ===== Preset: neumorphism (Neumorphismus: gleiche Color fuer Flaeche und Element, helle + dunkle Schatten, eine Lichtquelle) ===== */
  :host([data-card-style="neumorphism"]) {
    --u-bg: #e0e5ec; --u-text: #44566c; --u-muted: #7a8aa0; --u-accent: #0ea5b7; --u-second: #ff8a1f; --u-good: #16a085;
    --u-surface: #e0e5ec; --u-edge: transparent;
    --neu-hi: #ffffff; --neu-lo: #a3b1c6;
    --neu-out: 10px 10px 22px var(--neu-lo), -10px -10px 22px var(--neu-hi);
    --neu-out-s: 4px 4px 8px var(--neu-lo), -4px -4px 8px var(--neu-hi);
    --neu-in: inset 5px 5px 10px var(--neu-lo), inset -5px -5px 10px var(--neu-hi);
  }
  :host([data-card-style="neumorphism"]) ha-card { background: var(--u-bg); border: none; border-radius: 24px; box-shadow: var(--neu-out);
    --nb-bg: #e0e5ec; --nb-text: #44566c; --nb-muted: #7a8aa0; --nb-title-color: #44566c; --nb-radius: 24px; --nb-shadow: var(--neu-out); --nb-border: 0 solid transparent; }
  :host([data-card-style="neumorphism"]) button, :host([data-card-style="neumorphism"]) .chip, :host([data-card-style="neumorphism"]) .round { background: var(--u-bg); border: none; box-shadow: var(--neu-out-s); transition: box-shadow .15s; }
  :host([data-card-style="neumorphism"]) button:active:not(:disabled), :host([data-card-style="neumorphism"]) .chip.on { box-shadow: var(--neu-in); }
  :host([data-card-style="neumorphism"]) button:hover:not(:disabled) { border: none; color: var(--u-accent); }
  :host([data-card-style="neumorphism"]) .orb { background: var(--u-bg); border: none; box-shadow: var(--neu-out); }
  :host([data-card-style="neumorphism"]) .orb.on { box-shadow: var(--neu-in); color: var(--u-accent); }
  :host([data-card-style="neumorphism"]) .stat, :host([data-card-style="neumorphism"]) .item, :host([data-card-style="neumorphism"]) .grid .item:not(.has-bg), :host([data-card-style="neumorphism"]) .compact .item:not(.has-bg) { background: var(--u-bg) !important; border-radius: 16px; box-shadow: var(--neu-in) !important; }
  :host([data-card-style="neumorphism"]) .stats { border-top: none; }
  :host([data-card-style="neumorphism"]) .progress { height: 8px; }
  :host([data-card-style="neumorphism"]) .progress, :host([data-card-style="neumorphism"]) .bar { background: var(--u-bg); box-shadow: var(--neu-in); border: none; border-radius: 999px; }
  :host([data-card-style="neumorphism"]) .progress span { background: var(--u-accent); border-radius: 999px; box-shadow: 0 0 6px color-mix(in srgb, var(--u-accent) 45%, transparent); }
  :host([data-card-style="neumorphism"]) .media-ring { box-shadow: var(--neu-out-s); }
  :host([data-card-style="neumorphism"]) input, :host([data-card-style="neumorphism"]) select { background: var(--u-bg); border: none; box-shadow: var(--neu-in); border-radius: 12px; }

  /* ===== Preset: neumorphism_dark (Neumorphismus: gleiche Color fuer Flaeche und Element, helle + dunkle Schatten, eine Lichtquelle) ===== */
  :host([data-card-style="neumorphism_dark"]) {
    --u-bg: #2b2f36; --u-text: #d5dbe5; --u-muted: #8f9aab; --u-accent: #22d3ee; --u-second: #ff8a1f; --u-good: #34d399;
    --u-surface: #2b2f36; --u-edge: transparent;
    --neu-hi: #3d4350; --neu-lo: #15171b;
    --neu-out: 10px 10px 22px var(--neu-lo), -10px -10px 22px var(--neu-hi);
    --neu-out-s: 4px 4px 8px var(--neu-lo), -4px -4px 8px var(--neu-hi);
    --neu-in: inset 5px 5px 10px var(--neu-lo), inset -5px -5px 10px var(--neu-hi);
  }
  :host([data-card-style="neumorphism_dark"]) ha-card { background: var(--u-bg); border: none; border-radius: 24px; box-shadow: var(--neu-out);
    --nb-bg: #2b2f36; --nb-text: #d5dbe5; --nb-muted: #8f9aab; --nb-title-color: #d5dbe5; --nb-radius: 24px; --nb-shadow: var(--neu-out); --nb-border: 0 solid transparent; }
  :host([data-card-style="neumorphism_dark"]) button, :host([data-card-style="neumorphism_dark"]) .chip, :host([data-card-style="neumorphism_dark"]) .round { background: var(--u-bg); border: none; box-shadow: var(--neu-out-s); transition: box-shadow .15s; }
  :host([data-card-style="neumorphism_dark"]) button:active:not(:disabled), :host([data-card-style="neumorphism_dark"]) .chip.on { box-shadow: var(--neu-in); }
  :host([data-card-style="neumorphism_dark"]) button:hover:not(:disabled) { border: none; color: var(--u-accent); }
  :host([data-card-style="neumorphism_dark"]) .orb { background: var(--u-bg); border: none; box-shadow: var(--neu-out); }
  :host([data-card-style="neumorphism_dark"]) .orb.on { box-shadow: var(--neu-in); color: var(--u-accent); }
  :host([data-card-style="neumorphism_dark"]) .stat, :host([data-card-style="neumorphism_dark"]) .item, :host([data-card-style="neumorphism_dark"]) .grid .item:not(.has-bg), :host([data-card-style="neumorphism_dark"]) .compact .item:not(.has-bg) { background: var(--u-bg) !important; border-radius: 16px; box-shadow: var(--neu-in) !important; }
  :host([data-card-style="neumorphism_dark"]) .stats { border-top: none; }
  :host([data-card-style="neumorphism_dark"]) .progress { height: 8px; }
  :host([data-card-style="neumorphism_dark"]) .progress, :host([data-card-style="neumorphism_dark"]) .bar { background: var(--u-bg); box-shadow: var(--neu-in); border: none; border-radius: 999px; }
  :host([data-card-style="neumorphism_dark"]) .progress span { background: var(--u-accent); border-radius: 999px; box-shadow: 0 0 6px color-mix(in srgb, var(--u-accent) 45%, transparent); }
  :host([data-card-style="neumorphism_dark"]) .media-ring { box-shadow: var(--neu-out-s); }
  :host([data-card-style="neumorphism_dark"]) input, :host([data-card-style="neumorphism_dark"]) select { background: var(--u-bg); border: none; box-shadow: var(--neu-in); border-radius: 12px; }

  /* ===== Preset: Neon (Flow): getönte Flächen, farbiger Rahmen, leuchtender Rand ===== */
  :host([data-card-style="neon_flow"]) {
    --u-surface: color-mix(in srgb, var(--u-accent) 14%, transparent);
    --u-edge: color-mix(in srgb, var(--u-accent) 60%, transparent);
  }
  :host([data-card-style="neon_flow"]) ha-card { background: color-mix(in srgb, var(--u-accent) 12%, var(--u-bg)); border: 2px solid var(--u-accent); border-radius: 14px; box-shadow: 0 0 14px color-mix(in srgb, var(--u-accent) 40%, transparent); }
  :host([data-card-style="neon_flow"]) ha-card.theme { --nb-glow: .5; --nb-bg: color-mix(in srgb, var(--u-accent) 12%, var(--u-bg)); }
  :host([data-card-style="neon_flow"]) .bar { border: 1px solid color-mix(in srgb, var(--c1) 55%, transparent); }
  :host([data-card-style="neon_flow"]) .orb.on { box-shadow: 0 0 18px color-mix(in srgb, currentColor 45%, transparent), inset 0 0 14px var(--u-edge); }
  :host([data-card-style="neon_flow"]) .media-ring { box-shadow: 0 0 14px var(--u-edge); }

  /* ===== Preset: Flat (klare Linien, volle Farben, keine Schatten; dunkelblau mit orangen Akzenten) ===== */
  :host([data-card-style="flat"])  {
    --u-bg: #1b2a49; --u-text: #ffffff; --u-muted: #b4c0d8; --u-accent: #ff8a1f; --u-second: #14b8cc; --u-good: #2ecc71;
    --u-surface: #ffffff14; --u-edge: #ffffff1f;
  }
  :host([data-card-style="flat"]) ha-card { background: var(--u-bg); border: none; border-radius: 12px; box-shadow: none;
    --nb-bg: #1b2a49; --nb-text: #fff; --nb-muted: #b4c0d8; --nb-title-color: #fff; --nb-radius: 12px; --nb-shadow: none; --nb-border: 0 solid transparent; }
  :host([data-card-style="flat"]) button, :host([data-card-style="flat"]) .chip, :host([data-card-style="flat"]) .round { background: var(--u-surface); border: none; border-radius: 10px; box-shadow: none; }
  :host([data-card-style="flat"]) .chip.on { background: var(--u-accent); color: #1b2a49; }
  :host([data-card-style="flat"]) button:hover:not(:disabled) { background: var(--u-accent); color: #1b2a49; border: none; }
  :host([data-card-style="flat"]) .orb { background: var(--u-surface); border: none; box-shadow: none; }
  :host([data-card-style="flat"]) .orb.on { background: var(--u-accent); color: #1b2a49; }
  :host([data-card-style="flat"]) .stat, :host([data-card-style="flat"]) .item { background: var(--u-surface); border-radius: 10px; }
  :host([data-card-style="flat"]) .stats { border-top: none; }
  :host([data-card-style="flat"]) .progress, :host([data-card-style="flat"]) .bar { background: #ffffff1f; border: none; border-radius: 6px; box-shadow: none; }
  :host([data-card-style="flat"]) .progress span { background: var(--u-accent); border-radius: 6px; }
  :host([data-card-style="flat"]) .value, :host([data-card-style="flat"]) .clock { color: #fff; }

  /* ===== Preset: Skeuomorph (gebuerstetes Metall, Pruefkanten, Glanzlichter) ===== */
  :host([data-card-style="skeuomorph"])  {
    --u-bg: #3a3f47; --u-text: #eceff3; --u-muted: #aab2bd; --u-accent: #ffb454; --u-second: #5ec8d8; --u-good: #7bd88f;
    --u-surface: #00000030; --u-edge: #00000066;
  }
  :host([data-card-style="skeuomorph"]) ha-card { background: linear-gradient(180deg, #4d535c 0%, #3a3f47 45%, #2b2f36 100%); border: 1px solid #1c1f24; border-radius: 14px;
    box-shadow: inset 0 1px 0 #ffffff40, inset 0 -2px 4px #00000066, 0 4px 10px #0009; text-shadow: 0 1px 0 #000a;
    --nb-bg: linear-gradient(180deg, #4d535c, #2b2f36); --nb-text: #eceff3; --nb-muted: #aab2bd; --nb-title-color: #eceff3; --nb-radius: 14px; --nb-border: 1px solid #1c1f24; }
  :host([data-card-style="skeuomorph"]) button, :host([data-card-style="skeuomorph"]) .chip, :host([data-card-style="skeuomorph"]) .round { background: linear-gradient(180deg, #666d78, #3b4048); border: 1px solid #1c1f24; border-radius: 10px;
    box-shadow: inset 0 1px 0 #ffffff55, 0 2px 3px #0008; }
  :host([data-card-style="skeuomorph"]) button:active:not(:disabled), :host([data-card-style="skeuomorph"]) .chip.on { background: linear-gradient(180deg, #2b2f36, #3b4048); box-shadow: inset 0 2px 5px #000b; }
  :host([data-card-style="skeuomorph"]) button:hover:not(:disabled) { border-color: var(--u-accent); }
  :host([data-card-style="skeuomorph"]) .orb { background: radial-gradient(circle at 35% 28%, #7b838f, #3a3f47 62%, #23262c); border: 2px solid #1c1f24;
    box-shadow: inset 0 2px 3px #ffffff55, 0 4px 8px #000a; }
  :host([data-card-style="skeuomorph"]) .orb.on { color: var(--u-accent); box-shadow: inset 0 2px 3px #ffffff55, 0 0 14px color-mix(in srgb, var(--u-accent) 55%, transparent), 0 4px 8px #000a; }
  :host([data-card-style="skeuomorph"]) .stat, :host([data-card-style="skeuomorph"]) .item { background: linear-gradient(180deg, #00000040, #00000020); border: 1px solid #1c1f24; border-radius: 8px; box-shadow: inset 0 2px 5px #0009, 0 1px 0 #ffffff22; }
  :host([data-card-style="skeuomorph"]) .stats { border-top: 1px solid #1c1f24; box-shadow: 0 -1px 0 #ffffff22; }
  :host([data-card-style="skeuomorph"]) .progress, :host([data-card-style="skeuomorph"]) .bar { background: #15171b; border: 1px solid #0c0d10; border-radius: 999px; box-shadow: inset 0 2px 4px #000c, 0 1px 0 #ffffff22; }
  :host([data-card-style="skeuomorph"]) .progress span { background: linear-gradient(180deg, #ffd08a, var(--u-accent) 45%, #c47a1c); border-radius: 999px; box-shadow: inset 0 1px 0 #ffffff88; }
  :host([data-card-style="skeuomorph"]) .media-ring { box-shadow: inset 0 2px 3px #ffffff44, 0 3px 6px #000a; }
  :host([data-card-style="neumorphism"]) .ph-tile, :host([data-card-style="neumorphism_dark"]) .ph-tile { background: var(--u-bg); color: var(--u-text); border-radius: 16px; box-shadow: var(--neu-out-s); }
  :host([data-card-style="neumorphism"]) .ph-tile-value, :host([data-card-style="neumorphism_dark"]) .ph-tile-value { color: var(--tile); }
  :host([data-card-style="neumorphism_dark"]) .ph-tile-value { color: color-mix(in srgb, var(--tile) 45%, #fff); }
  :host([data-card-style="neumorphism_dark"]) .ph-tile .ph-spark polyline { stroke: color-mix(in srgb, var(--tile) 45%, #fff); }
  :host([data-card-style="neumorphism"]) .ph-tile-label, :host([data-card-style="neumorphism_dark"]) .ph-tile-label { color: var(--u-muted); }
  :host([data-card-style="neumorphism"]) .ph-tile-icon, :host([data-card-style="neumorphism_dark"]) .ph-tile-icon { color: var(--tile); opacity: .3; }
  :host([data-card-style="neumorphism"]) .ph-spark polyline, :host([data-card-style="neumorphism_dark"]) .ph-spark polyline { stroke: var(--tile); }
  :host([data-card-style="neumorphism"]) .ph-spark polygon, :host([data-card-style="neumorphism_dark"]) .ph-spark polygon { fill: color-mix(in srgb, var(--tile) 22%, transparent); }
  :host([data-card-style="neumorphism"]) .ph-dist svg, :host([data-card-style="neumorphism_dark"]) .ph-dist svg { overflow: visible; filter: drop-shadow(4px 4px 5px var(--neu-lo)) drop-shadow(-4px -4px 5px var(--neu-hi)); }
  :host([data-card-style="neumorphism"]) .ph-hole, :host([data-card-style="neumorphism_dark"]) .ph-hole { fill: var(--u-bg); }
  :host([data-card-style="neumorphism"]) .ph-legend, :host([data-card-style="neumorphism_dark"]) .ph-legend { color: var(--u-text); }
  :host([data-card-style="skeuomorph"]) .ph-dist svg { overflow: visible; filter: drop-shadow(0 3px 3px #000a); }
  :host([data-card-style="skeuomorph"]) .ph-dist circle:not(.ph-hole) { stroke-opacity: .92; }
  :host([data-card-style="skeuomorph"]) .ph-hole { fill: #23262c; stroke: #1c1f24; stroke-width: 2; }
  :host([data-card-style="skeuomorph"]) .ph-legend i { box-shadow: inset 0 1px 1px #ffffff77, 0 1px 2px #000a; }
  :host([data-card-style="skeuomorph"]) .ph-tile { background: linear-gradient(180deg, #00000040, #00000020); color: var(--u-text); border: 1px solid #1c1f24; border-inline-start: 4px solid var(--tile); border-radius: 8px; box-shadow: inset 0 2px 5px #000a, 0 1px 0 #ffffff22; }
  :host([data-card-style="skeuomorph"]) .ph-tile-value { color: #fff; text-shadow: 0 1px 2px #000a; }
  :host([data-card-style="skeuomorph"]) .ph-tile-label { color: var(--u-muted); }
  :host([data-card-style="skeuomorph"]) .ph-tile-icon { color: var(--tile); opacity: .45; }
  :host([data-card-style="skeuomorph"]) .ph-spark polyline { stroke: color-mix(in srgb, var(--tile) 55%, #fff); }
  :host([data-card-style="skeuomorph"]) .ph-spark polygon { fill: color-mix(in srgb, var(--tile) 35%, transparent); }

  /* ===== Preset: Minimal (grosse, leichte Schrift, viel Weissraum, kaum Flaechen; Akzent nur dezent) ===== */
  :host([data-card-style="minimal"])  { --u-surface: transparent; --u-edge: color-mix(in srgb, var(--u-text) 12%, transparent); }
  :host([data-card-style="minimal"]) ha-card { background: var(--u-bg); border: none; border-radius: 20px; box-shadow: none; padding: 20px;
    --nb-border: 0 solid transparent; --nb-shadow: none; --nb-radius: 20px; }
  :host([data-card-style="minimal"]) .value, :host([data-card-style="minimal"]) .clock { font-weight: 300; letter-spacing: -.02em; }
  :host([data-card-style="minimal"]) h3, :host([data-card-style="minimal"]) .title { font-weight: 400; text-transform: none; letter-spacing: .02em; }
  :host([data-card-style="minimal"]) button, :host([data-card-style="minimal"]) .chip, :host([data-card-style="minimal"]) .round { background: transparent; border: 1px solid var(--u-edge); box-shadow: none; }
  :host([data-card-style="minimal"]) button:hover:not(:disabled), :host([data-card-style="minimal"]) .chip.on { border-color: var(--u-accent); color: var(--u-accent); }
  :host([data-card-style="minimal"]) .orb { background: transparent; border-width: 1px; box-shadow: none; }
  :host([data-card-style="minimal"]) .stat, :host([data-card-style="minimal"]) .item { background: transparent; box-shadow: none; }
  :host([data-card-style="minimal"]) .progress, :host([data-card-style="minimal"]) .bar { background: var(--u-edge); border: none; border-radius: 2px; height: 4px; box-shadow: none; }
  :host([data-card-style="minimal"]) .progress span { background: var(--u-accent); border-radius: 2px; }
`;

const ucpEscape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const ucpNum = (value) => value == null || String(value).trim() === "" || !Number.isFinite(Number(value))
  ? null : Number(value);
const ucpPct = (value, min, max) => !Number.isFinite(value) || max <= min ? 0 : nbClamp((value - min) / (max - min), 0, 1);
const ucpIcon = (name) => !name ? "" : '<ha-icon icon="' + ucpEscape(name) + '"></ha-icon>';
const ucpTitleIcon = (name) => {
  const icon = typeof name === "string" ? name.trim() : "";
  return icon ? '<ha-icon data-title-icon="' + ucpEscape(icon.includes(":") ? icon.replace(/\s*:\s*/, ":") : "mdi:" + icon) + '" aria-hidden="true"></ha-icon>' : "";
};
function ucpBindTitleIcons(container) {
  container.querySelectorAll?.("[data-title-icon]").forEach((element) => {
    const icon = element.dataset.titleIcon;
    element.setAttribute("icon", icon);
    if (customElements.get("ha-icon")) element.icon = icon;
    else customElements.whenDefined?.("ha-icon").then(() => { if (element.isConnected) element.icon = icon; });
  });
}
const ucpHeatingColor = (input) => {
  const color = ucpColorValue(input);
  return color && /^[^;"<>{}]+$/.test(color) ? color : "var(--u-warn)";
};
const ucpValue = (value, unit) => '<span class="value">' + ucpEscape(value ?? "—") +
  (unit ? ' <span class="unit">' + ucpEscape(unit) + '</span>' : "") + '</span>';
const ucpAction = (action, icon, label, disabled = false, classes = "round") =>
  '<button type="button" class="' + classes + '" data-action="' + action + '" aria-label="' +
  ucpEscape(label) + '" title="' + ucpEscape(label) + '"' + (disabled ? " disabled" : "") + ">" +
  (ucpIcon(icon) || ucpEscape(label)) + "</button>";
const ucpBuiltinDetail = (config, index) => ({
  name: config[ucpDetailName(index)],
  ...(UCP_DEFAULT_HIDDEN[config.card_type]?.includes(index) ? { hide: true } : {}),
  ...(config.card_type === "light" && index === 0 && config.show_brightness_info === false ? { hide: true } : {}),
  ...(config.card_type === "climate" && config.climate_view === "compact" ? { hide: true } : {}),
  ...config.detail_builtin_settings?.[index],
});
const ucpDetailSetting = (config, settings, key) => {
  if (settings && Object.hasOwn(settings, key)) return settings[key];
  return { align: config.detail_align, hide_icon: config.hide_icons }[key];
};
const UCP_WEATHER_ICONS = {
  clear: "sunny", "clear-night": "night", cloudy: "cloudy", exceptional: "cloud-alert", fog: "fog",
  hail: "hail", lightning: "lightning", "lightning-rainy": "lightning-rainy", partlycloudy: "partly-cloudy",
  pouring: "pouring", rainy: "rainy", snowy: "snowy", "snowy-rainy": "snowy-rainy",
  sunny: "sunny", windy: "windy", "windy-variant": "windy-variant",
};
function ucpWeatherIcon(state, night = state === "clear-night") {
  if (["clear", "clear-night", "sunny"].includes(state)) return ucpIcon(night ? "mdi:weather-night" : "mdi:weather-sunny");
  if (state === "partlycloudy") return ucpIcon(night ? "mdi:weather-night-partly-cloudy" : "mdi:weather-partly-cloudy");
  const icon = ucpIcon("mdi:weather-" + (Object.hasOwn(UCP_WEATHER_ICONS, state) ? UCP_WEATHER_ICONS[state] : "cloudy"));
  return `<span class="weather-icon">${icon}<span class="weather-period">${ucpIcon(night ? "mdi:moon-waning-crescent" : "mdi:white-balance-sunny")}</span></span>`;
}

let ucpEnergyThemeSheet;
function ucpApplyEnergyTheme(card) {
  const root = card.shadowRoot;
  if (!root) return;
  if (!ucpEnergyThemeSheet) {
    ucpEnergyThemeSheet = new CSSStyleSheet();
    ucpEnergyThemeSheet.replaceSync(`
      ha-card {
        height: 100%; box-sizing: border-box;
        background: var(--u-bg);
        color: var(--u-text);
        font-family: var(--primary-font-family, inherit);
        font-size: var(--u-font-m);
      }
      :host([data-c-bg]) ha-card { background-color: var(--c-bgc) !important; background-image: var(--c-bgi, none) !important; }
      :host([data-c-border]) ha-card { border: var(--c-bw, 1px) var(--c-bs, solid) var(--c-bc, var(--divider-color, currentColor)) !important; }
      :host([data-c-shadow]) ha-card { box-shadow: var(--c-shadow) !important; }
      .content { padding: 15px; }
      .header { flex-wrap: wrap; margin-bottom: 14px; }
      :host([data-hide-state]) :is(.value, .trend, .trend-chart) { display: none; }
      :host([data-hide-state]) .item.has-chart { padding-bottom: 0 !important; }
      .title { font-size: var(--title-font-size, var(--u-font-m)); color: var(--title-color, inherit); }
      .title ha-icon { color: var(--title-icon-color, inherit); }
      .header .title { flex: 1 1 auto; min-width: 0; text-align: var(--title-align, left); }
      .title ha-icon { --mdc-icon-size: var(--title-icon-size, 25px); margin-inline-end: 6px; vertical-align: -0.2em; }
      .title.marquee-title { min-width: 0; overflow: hidden; white-space: nowrap; }
      .title-label { display: inline-block; }
      .scrolling .title-label { animation: ucp-energy-marquee 5s ease-in-out infinite alternate; }
      @keyframes ucp-energy-marquee { 0%, 15% { transform: translateX(0); } 85%, 100% { transform: translateX(var(--title-shift)); } }
      @media (prefers-reduced-motion: reduce) { .scrolling .title-label { animation: none; } }
      .label { font-size: var(--u-font-m); }
      .value { font-size: var(--u-font-xl); font-weight: 650; font-variant-numeric: tabular-nums; }
      .period, .chip, .unit, .trend, .note, .debug,
      .compact .label, .compact .unit { font-size: var(--u-font-s); }
      .compact .value { font-size: var(--u-font-m); }
      .grid .item:not(.has-bg), .compact .item:not(.has-bg) { background: var(--u-surface); }
      :host([data-card-style="neon"]) ha-card { background: radial-gradient(ellipse at 50% 0%, var(--u-surface), transparent 72%), var(--u-bg); }
      :host([data-card-style="glassmorphism"]) ha-card { --u-text: #f6f9fd; --u-muted: #d7e4ed;
        background: linear-gradient(155deg, #344352 0%, #151b24 48%, #090d14 100%); border: 1px solid rgba(218, 234, 243, .58); position: relative; }
      :host([data-card-style="glassmorphism"]) ha-card::after { content: ""; position: absolute; pointer-events: none; z-index: 2; inset: 8px;
        border-radius: max(10px, calc(max(18px, var(--ha-card-border-radius, 16px)) - 8px)); border: 1px solid #a9e3efc7;
        box-shadow: inset 0 1px 8px #92daef38, 0 0 9px #92daef24; mask-image: linear-gradient(#000, #000c 24%, transparent 86%); }
 
      :host([data-card-style="neumorphism"]) ha-card { background: var(--u-bg); border: none; border-radius: 24px; box-shadow: var(--neu-out) !important; }
      :host([data-card-style="neumorphism"]) .chip { background: var(--u-bg); border: none; box-shadow: var(--neu-out-s); color: var(--u-muted); }
      :host([data-card-style="neumorphism"]) .chip.on { box-shadow: var(--neu-in); color: var(--u-text); }
      :host([data-card-style="neumorphism"]) .item, :host([data-card-style="neumorphism"]) .grid .item:not(.has-bg), :host([data-card-style="neumorphism"]) .compact .item:not(.has-bg) { background: var(--u-bg) !important; border-radius: 16px; box-shadow: var(--neu-in) !important; }
      :host([data-card-style="neumorphism_dark"]) ha-card { background: var(--u-bg); border: none; border-radius: 24px; box-shadow: var(--neu-out) !important; }
      :host([data-card-style="neumorphism_dark"]) .chip { background: var(--u-bg); border: none; box-shadow: var(--neu-out-s); color: var(--u-muted); }
      :host([data-card-style="neumorphism_dark"]) .chip.on { box-shadow: var(--neu-in); color: var(--u-text); }
      :host([data-card-style="neumorphism_dark"]) .item, :host([data-card-style="neumorphism_dark"]) .grid .item:not(.has-bg), :host([data-card-style="neumorphism_dark"]) .compact .item:not(.has-bg) { background: var(--u-bg) !important; border-radius: 16px; box-shadow: var(--neu-in) !important; }
      :host([data-card-style="flat"]) ha-card { background: var(--u-bg); border: none; border-radius: 12px; box-shadow: none; }
      :host([data-card-style="flat"]) .chip { background: var(--u-surface); border: none; border-radius: 10px; color: var(--u-muted); }
      :host([data-card-style="flat"]) .chip.on { background: var(--u-accent); color: #1b2a49; }
      :host([data-card-style="flat"]) .item, :host([data-card-style="flat"]) .grid .item:not(.has-bg), :host([data-card-style="flat"]) .compact .item:not(.has-bg) { background: var(--u-surface); border-radius: 10px; }
      :host([data-card-style="skeuomorph"]) ha-card { background: linear-gradient(180deg, #4d535c 0%, #3a3f47 45%, #2b2f36 100%); border: 1px solid #1c1f24; border-radius: 14px;
        box-shadow: inset 0 1px 0 #ffffff40, inset 0 -2px 4px #00000066, 0 4px 10px #0009; text-shadow: 0 1px 0 #000a; }
      :host([data-card-style="skeuomorph"]) .chip { background: linear-gradient(180deg, #666d78, #3b4048); border: 1px solid #1c1f24; box-shadow: inset 0 1px 0 #ffffff55, 0 2px 3px #0008; color: var(--u-text); }
      :host([data-card-style="skeuomorph"]) .chip.on { background: linear-gradient(180deg, #2b2f36, #3b4048); box-shadow: inset 0 2px 5px #000b; color: var(--u-accent); }
      :host([data-card-style="skeuomorph"]) .item, :host([data-card-style="skeuomorph"]) .grid .item:not(.has-bg), :host([data-card-style="skeuomorph"]) .compact .item:not(.has-bg) { background: linear-gradient(180deg, #00000040, #00000020); border: 1px solid #1c1f24; border-radius: 8px; box-shadow: inset 0 2px 5px #0009, 0 1px 0 #ffffff22; }
      :host([data-card-style="minimal"]) ha-card { background: var(--u-bg); border: none; border-radius: 20px; box-shadow: none; }
      :host([data-card-style="minimal"]) .value { font-weight: 300; letter-spacing: -.02em; }
      :host([data-card-style="minimal"]) .chip { background: transparent; border: 1px solid var(--u-edge); }
      :host([data-card-style="minimal"]) .chip.on { border-color: var(--u-accent); color: var(--u-accent); }
      :host([data-card-style="minimal"]) .item, :host([data-card-style="minimal"]) .grid .item:not(.has-bg), :host([data-card-style="minimal"]) .compact .item:not(.has-bg) { background: transparent; box-shadow: none; }
      :host([data-card-style="neumorphism"]) .title, :host([data-card-style="neumorphism"]) .value { color: var(--u-text); }
      :host([data-card-style="neumorphism"]) .label, :host([data-card-style="neumorphism"]) .unit, :host([data-card-style="neumorphism"]) .period, :host([data-card-style="neumorphism"]) .note, :host([data-card-style="neumorphism"]) .msg { color: var(--u-muted); }
      :host([data-card-style="neumorphism_dark"]) .title, :host([data-card-style="neumorphism_dark"]) .value { color: var(--u-text); }
      :host([data-card-style="neumorphism_dark"]) .label, :host([data-card-style="neumorphism_dark"]) .unit, :host([data-card-style="neumorphism_dark"]) .period, :host([data-card-style="neumorphism_dark"]) .note, :host([data-card-style="neumorphism_dark"]) .msg { color: var(--u-muted); }
      :host([data-card-style="flat"]) .title, :host([data-card-style="flat"]) .value { color: var(--u-text); }
      :host([data-card-style="flat"]) .label, :host([data-card-style="flat"]) .unit, :host([data-card-style="flat"]) .period, :host([data-card-style="flat"]) .note, :host([data-card-style="flat"]) .msg { color: var(--u-muted); }
      :host([data-card-style="skeuomorph"]) .title, :host([data-card-style="skeuomorph"]) .value { color: var(--u-text); }
      :host([data-card-style="skeuomorph"]) .label, :host([data-card-style="skeuomorph"]) .unit, :host([data-card-style="skeuomorph"]) .period, :host([data-card-style="skeuomorph"]) .note, :host([data-card-style="skeuomorph"]) .msg { color: var(--u-muted); }
      :host([data-card-style="minimal"]) .title, :host([data-card-style="minimal"]) .value { color: var(--u-text); }
      ${UCP_CUSTOM_CSS}
      :host([data-card-style="minimal"]) .label, :host([data-card-style="minimal"]) .unit, :host([data-card-style="minimal"]) .period, :host([data-card-style="minimal"]) .note, :host([data-card-style="minimal"]) .msg { color: var(--u-muted); }
    `);
  }
  if (!root.adoptedStyleSheets.includes(ucpEnergyThemeSheet)) {
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, ucpEnergyThemeSheet];
  }
}

// BirdNET: Artbilder und Artikel von Wikipedia (https), einmal geladen und im Browser gemerkt: Schlüssel -> { img, page }
const UCP_BN_IMG = new Map();
try { for (const [k, v] of Object.entries(JSON.parse(localStorage.getItem("ucp-bn-img-v3") || "{}"))) if (v?.img) UCP_BN_IMG.set(k, v); } catch { /* ohne Speicher weiter */ }
const UCP_BN_STATE = new Map();
let ucpBnChain = Promise.resolve();
const ucpBnQueue = (job) => { const run = ucpBnChain.then(job, job); ucpBnChain = run.then(() => new Promise((r) => setTimeout(r, 250))); return run; };

class UltimateCardPackage extends HTMLElement {
  _icon(fallback) {
    return this._config.hide_icons ? "" : this._config.icon || this._attrs.icon || fallback;
  }

  _unit(fallback) { return this._config.unit ?? fallback; }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>${UCP_STYLE}${UCP_PF_CSS}</style><div class="body"></div>`;
    this._body = this.shadowRoot.querySelector(".body");
    this._body.addEventListener("keydown", (ev) => {
      const row = ev.target?.closest?.("[data-up]");
      if (row && (ev.key === "Enter" || ev.key === " ")) { ev.preventDefault(); this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: row.dataset.up }, bubbles: true, composed: true })); }
    });
    this._body.addEventListener("click", (ev) => {
      const { target } = ev;
      if (target.closest?.("a[data-bn-link]")) return;
      const bnTab = target.closest?.("[data-bn-tab]");
      if (bnTab) { this._bnTab = Number(bnTab.dataset.bnTab); this._render(); return; }
      const bnView = target.closest?.("[data-bn-view]");
      if (bnView) { this._bnView = bnView.dataset.bnView; this._render(); return; }
      const pfMode = target.closest?.("[data-pf-mode]");
      if (pfMode) { this._pfMode = pfMode.dataset.pfMode; this._pfShown = null; this._pfCache = null; this._render(); this._pfTick?.(); return; }
      const tlSeg = target.closest?.("[data-tl]");
      if (tlSeg) { const info = this._body.querySelector("[data-tl-info]"); if (info) info.textContent = tlSeg.dataset.tlText || ""; return; }
      const upToggle = target.closest?.("[data-up-toggle]");
      if (upToggle) { this._upOpen = !this._upOpen; this._render(); return; }
      const upRow = target.closest?.("[data-up]");
      if (upRow) { this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: upRow.dataset.up }, bubbles: true, composed: true })); return; }
      const alRow = target.closest?.("[data-al]");
      if (alRow) { this._alTap(alRow.dataset.al); return; }
      const alRoom = target.closest?.("[data-al-room]");
      if (alRoom) { this._alRoomPopup(alRoom.dataset.alRoom); return; }
      if (!this._noTap(target)) {
        this._gesture(this._zone(target));
        return;
      }
      const field = target.closest?.("[data-palette]");
      if (field) {
        const box = field.getBoundingClientRect();
        if (box.width > 0 && box.height > 0) this._act("light-hs", [
          nbClamp(Math.round((ev.clientX - box.left) / box.width * 360), 0, 360),
          nbClamp(Math.round((1 - (ev.clientY - box.top) / box.height) * 100), 0, 100)].join(","));
        return;
      }
      const button = target.closest("button[data-action]");
      if (button) this._act(button.dataset.action, button.dataset.value);
    });
    this._body.addEventListener("input", (ev) => {
      if (!ev.target.matches?.("[data-bn-q]")) return;
      this._bnQuery = ev.target.value;
      this._render();
    });
    this._body.addEventListener("change", (ev) => {
      const t = ev.target;
      if (t.matches?.("[data-bn-sort]")) { this._bnSort = t.value; this._render(); }
    });
    this._body.addEventListener("pointerdown", (ev) => {
      // Hold-Actions nur auf Geräten größer als ein Smartphone (kurze Bildschirmkante ab 600 px); auf dem Handy öffnet langes Drücken das System-Kontextmenü
      if (ev.button > 0 || this._noTap(ev.target) || Math.min(screen.width, screen.height) < 600) return;
      const zone = this._zone(ev.target);
      const hold = this._zoneAction(UCP_HOLD_KEYS, zone);
      clearTimeout(this._holdTimer);
      if (!hold?.action || hold.action === "none") return;
      this._holdTimer = setTimeout(() => { this._held = true; this._tap(zone, "hold"); }, 500);
    });
    for (const event of ["pointerup", "pointercancel", "pointerleave"]) {
      this._body.addEventListener(event, () => {
        clearTimeout(this._holdTimer);
        if (this._held) setTimeout(() => { this._held = false; }, 400);
      });
    }
    this._body.addEventListener("change", ({target}) => {
      if (target.dataset.action) this._act(target.dataset.action, target.value);
    });
    for (const event of ["pointerdown", "pointermove", "pointerup", "pointercancel", "lostpointercapture"]) {
      this._body.addEventListener(event, (e) => this._dialPointer(e));
    }
    this._body.addEventListener("keydown", (event) => {
      const field = event.target;
      if (!field.dataset.dial || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const { min, max, step, dial } = field.dataset;
      const current = Number(field.getAttribute("aria-valuenow"));
      const value = event.key === "Home" ? Number(min) : event.key === "End" ? Number(max)
        : this._dialValue(current + (["ArrowRight", "ArrowUp"].includes(event.key) ? 1 : -1) * Number(step), min, max, step);
      this._act(dial, value);
    });
    this._body.addEventListener("input", ({target}) => {
      const output = target.parentElement.querySelector("output");
      if (target.type === "range" && output) output.textContent = this._number(Number(target.value)) + (this._slider()?.unit || "");
    });
  }

  static getConfigElement() { return document.createElement(UCP_EDITOR); }
  static getStubConfig() { return ucpConfig({}); }
  getCardSize() { return this._energyCard?.getCardSize?.() ?? this._wrapEl?.getCardSize?.() ?? this._bar?.getCardSize() ?? this._gridSize().rows; }
  // Standardgröße im Sections-View: [Spalten, Zeilen]; Zeilen sind bewusst knapp (Zeile = 56 px + 8 px Abstand) und per Drag änderbar
  _gridSize() {
    const c = this._config ?? {};
    const sizes = { battery: [6, 2], light: [6, 2], slider: [6, 2], state: [6, 2], switch: [6, 2], gauge: [6, 3], climate: [6, 4],
      graph: [12, 3], clock: [6, 2], "clock-music": [6, 3], washdata: [12, 4], pihole: [12, 5], "dwd-warnings": [12, 3], "active-list": [12, 3], updates: [12, 3], birdnet: [12, 8], "weather-forecast": [12, 3], "power-flow": [12, 8], wrapper: [12, 2] };
    let [columns, rows] = sizes[c.card_type] ?? [6, 2];
    if (c.card_type === "mediaplayer") [columns, rows] = c.layout === "compact" ? [12, 2] : [12, 5];
    if (c.card_type === "clock" && c.clock_style === "analog") rows = 3;
    return { columns, rows };
  }
  getGridOptions() {
    const inner = this._energyCard ?? this._bar ?? this._wrapEl;
    if (this._config?.card_type === "wrapper") {
      // Höhe richtet sich nach der eingebetteten Karte (rows: auto), Breite wie bei ihr
      let own = {};
      try { own = inner?.getGridOptions?.() ?? {}; } catch { /* Standard */ }
      return { columns: own.columns ?? "full", min_columns: own.min_columns ?? 3, rows: "auto", min_rows: 1 };
    }
    if (this._config?.card_type === "climate" && this._config.climate_view === "compact") return { columns: 6, rows: "auto", min_columns: 3, min_rows: 1 };
    if (inner?.getGridOptions) {
      // Zeilen aus der Kartengröße der inneren Karte ableiten (1 Einheit ≈ 50 px, 1 Zeile = 64 px)
      const rows = Math.max(2, Math.ceil((inner.getCardSize?.() ?? 4) * 50 / 64));
      return { ...inner.getGridOptions(), rows, min_rows: 1 };
    }
    const { columns, rows } = this._gridSize();
    return { columns, rows, min_columns: 3, min_rows: 1 };
  }
  // Hintergrund/Rahmen/Schatten: Variablen am Host (erben in innere Karten), Schalter-Attribute auch an Balken-/Energie-Karte
  // Wirksame Farben: Statusfarbe (an/aus) hat Vorrang vor der normalen Farbe; Änderungen nur bei Statuswechsel neu anwenden
  _onOffStatus() {
    const c = this._config;
    if (!c || !UCP_STATUS_TYPES.includes(c.card_type) || !c.entity || !UCP_STATUS_KEYS.some((key) => String(c[key] ?? "").trim())) return "";
    return ucpIsOn(c.card_type, this._state) ? "on" : "off";
  }
  _applyColors() {
    const c = this._config, status = this._onOffStatus();
    this._statusKey = status;
    const eff = { ...c };
    if (status) for (const [part, target] of [["card", "bg_color"], ["icon", "title_icon_color"], ["name", "title_color"], ["state", "state_color"]]) {
      const value = c[part + "_color_" + status];
      if (String(value ?? "").trim()) eff[target] = value;
    }
    if (status && String(c["card_shadow_" + status] ?? "").trim()) eff.shadow_full = c["card_shadow_" + status];
    this._effConfig = eff;
    for (const [key, name] of [["title_color", "--title-color"], ["title_icon_color", "--title-icon-color"], ["state_color", "--state-color"]]) {
      const color = ucpColorValue(eff[key]);
      if (color) this.style.setProperty(name, color); else this.style.removeProperty(name);
    }
    this.toggleAttribute("data-state-color", !!this.style.getPropertyValue("--state-color"));
    if (status) this.setAttribute("data-ucp-status", status); else this.removeAttribute("data-ucp-status");
    this._syncCustomAttrs();
  }
  _syncCustomAttrs() {
    const flags = ucpCustomVars(this, this._effConfig ?? this._config);
    for (const el of [this, this._bar, this._energyCard]) {
      if (el) for (const [name, on] of Object.entries(flags)) el.toggleAttribute(name, on);
    }
  }
  get _state() { return this._hass?.states?.[this._config?.entity]; }
  get _attrs() { return this._state?.attributes ?? {}; }

  setConfig(config) {
    this._stopData();
    if (config?.pf_mode !== this._config?.pf_mode) this._pfMode = null;
    this._pfE = null; this._pfCache = null;
    this._config = ucpConfig(config);
    this.setAttribute("data-card-style", this._config.card_style || "default");
    if (this._config.card_layout === "horizontal" && UCP_H_LAYOUT.includes(this._config.card_type)) this.setAttribute("data-layout", "horizontal");
    else this.removeAttribute("data-layout");
    for (const [key, name] of [["title_font_size", "--title-font-size"], ["title_icon_size", "--title-icon-size"], ["state_font_size", "--state-font-size"]]) {
      const size = Number(this._config[key]);
      if (size > 0) this.style.setProperty(name, size + "px"); else this.style.removeProperty(name);
    }
    this.toggleAttribute("data-state-size", Number(this._config.state_font_size) > 0);
    this._statusKey = undefined;
    this._applyColors();
    clearTimeout(this._climateDebounce);
    clearTimeout(this._climateExpire);
    this._climatePending = this._drag = null;
    this._clearSwitchPending();
    this._body.classList.remove("dragging");
    this._nameResize?.disconnect();
    this._energyNameObserver?.disconnect();
    if (this._config.card_type !== "energy") this._energyCard = null;
    this._energyCardConfig = null;
    this._wrapShell = this._wrapEl = this._wrapKey = this._wrapToken = null;
    this._bar = this._markup = this._history = this._forecast = null;
    this._mp = this._mpShell = this._mpMarkup = this._mpPanelCache = null;
    this._feedback = "";
    this._render();
    this._startData();
  }

  set hass(hass) {
    ucpSetLang(hass); ucpAttach(this);
    if (this._hass?.connection !== hass?.connection) this._stopData();
    this._hass = hass;
    this._popupTrigger(hass);
    if (this._switchPending && this._state?.state === this._switchPending.expected) this._clearSwitchPending();
    if (this._climatePending?.sent && this._climateValues().actual === this._climatePending.value) {
      clearTimeout(this._climateExpire);
      this._climatePending = null;
    }
    this._startData();
    if (this._onOffStatus() !== this._statusKey) this._applyColors();
    this._render();
    if (this._config?.card_type === "birdnet") this._hmTheme();
    this._bindStateIcons();
    if (this._popup) { for (const card of this._popup.cards) card.hass = hass; this._popup.refresh?.(); }
  }

  // Icon neben dem Namen: eigenes Icon, sonst das Icon der Entität (dynamisch, z. B. Batteriestand oder Wetterzustand)
  _titleIcon() {
    const c = this._config;
    if (c.hide_title_icon) return "";
    const type = c.card_type;
    const own = c.title_icon || (!c.hide_icons && ["clock", "clock-music", "battery", "graph"].includes(type) ? c.icon : "");
    if (own) return ucpTitleIcon(own);
    if (type === "active-list") return "";
    if (type === "updates") return ucpTitleIcon("mdi:package-up");
    const id = c.entity || ucpId(Array.isArray(c.entities) ? c.entities[0] : null);
    return id && this._hass?.states?.[id] ? '<ha-state-icon data-state-icon="' + ucpEscape(id) + '" aria-hidden="true"></ha-state-icon>' : "";
  }

  // Elemente mit eigener Funktion lösen keine Tap-Action aus
  _noTap(target) {
    return !!target.closest?.("button[data-action], [data-pf-mode], [data-tl], input, select, textarea, a, dialog, [data-palette], [data-dial], .controls, .light-colors");
  }

  _zone(target) {
    return target.closest?.(".title-icon") ? "icon" : target.closest?.("h3") ? "name"
      : target.closest?.(".value, .state-btn, .battery-level, .light-state, .wd-head, .dial-center") ? "state" : "card";
  }

  // Aktion einer Zone (Icon, Name, State); ist dafür nichts gesetzt, gilt die Aktion der Karte (ausdrücklich "none" bleibt "none")
  _zoneAction(keys, zone) {
    const c = this._config;
    const own = c[keys[["card", "icon", "name", "state"].indexOf(zone)]];
    return zone !== "card" && !own?.action ? c[keys[0]] : own;
  }

  // Einfach- und Doppeltippen (Doppeltippen nur wartend, wenn dafür eine Aktion gesetzt ist)
  _gesture(zone) {
    if (this._held) { this._held = false; return; }
    const double = this._zoneAction(UCP_DOUBLE_KEYS, zone);
    if (!double?.action || double.action === "none") { this._tap(zone, "tap"); return; }
    if (this._doubleTimer && this._doubleZone === zone) {
      clearTimeout(this._doubleTimer);
      this._doubleTimer = null;
      this._tap(zone, "double");
      return;
    }
    clearTimeout(this._doubleTimer);
    this._doubleZone = zone;
    this._doubleTimer = setTimeout(() => { this._doubleTimer = null; this._tap(zone, "tap"); }, 250);
  }

  // Aktion ausführen (zone: card | icon | name | state; kind: tap | double | hold)
  _tap(zone, kind = "tap") {
    const c = this._config;
    const keys = { tap: UCP_TAP_KEYS, double: UCP_DOUBLE_KEYS, hold: UCP_HOLD_KEYS }[kind];
    const action = this._zoneAction(keys, zone);
    const type = action?.action;
    if (!type || type === "none" || !this._hass) return;
    const entityId = action.entity || c.entity || ucpId(Array.isArray(c.entities) ? c.entities[0] : null);
    if (type === "toggle") this._act("toggle");
    else if (type === "navigate" && String(action.navigation_path ?? "").startsWith("popup:")) this._openPopup(action.navigation_path.slice(6));
    else if (type === "navigate" && /^scroll:\s*top$/i.test(String(action.navigation_path ?? "").trim())) ucpScrollTop(this);
    else if (type === "more-info") {
      if (entityId) this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
    } else if (type === "navigate") {
      if (typeof action.navigation_path === "string" && action.navigation_path) {
        history[action.navigation_replace ? "replaceState" : "pushState"](null, "", action.navigation_path);
        window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: action.navigation_replace === true } }));
      }
    } else if (type === "url") {
      if (typeof action.url_path === "string" && /^(https?:\/\/|\/)/i.test(action.url_path)) window.open(action.url_path, "_blank", "noopener");
    } else if (type === "perform-action" || type === "call-service") {
      const [domain, service] = String(action.perform_action || action.service || "").split(".");
      if (domain && service) this._hass.callService(domain, service, action.data ?? action.service_data ?? {}, action.target);
    }
  }

  // Popup-Auslöser: öffnet das Popup beim Wechsel der Auslöser-Entität auf den Auslöser-Status (nicht beim Laden der Seite)
  _popupTrigger(hass) {
    const c = this._config, id = c?.popup_trigger_entity, ref = String(c?.popup_trigger_popup ?? "").trim().replace(/^popup:/, "");
    if (!id || !ref) { this._popTrigPrev = undefined; return; }
    const now = hass?.states?.[id]?.state, prev = this._popTrigPrev;
    this._popTrigPrev = now;
    if (prev === undefined || now === undefined || now === prev) return;
    const want = String(c.popup_trigger_state ?? "").trim().toLowerCase();
    if (want && String(now).toLowerCase() !== want) return;
    this._openPopup(ref);
  }

  // Popup: Abschnitt (Überschrift = Name) eines Popup-Dashboards als Dialog anzeigen.
  // Aufruf über die Aktion "Navigate" mit navigation_path "popup:<Abschnitt>" oder "popup:<Dashboard>::<Abschnitt>".
  // Einzelne Karte des Abschnitts: Zusatz "#<Nummer>" (1 = erste Karte nach der Überschrift) oder "#<Kartenname>" (name, title, heading oder entity der Karte).
  // Karte, die das aktuell geöffnete Popup besitzt, in dem diese Karte selbst liegt (verschachtelte Popups), sonst null
  _popupParent() {
    let node = this;
    for (let i = 0; i < 20 && node; i++) {
      const host = node.getRootNode?.()?.host;
      if (!host) return null;
      if (host !== this && host._popup?.dialog?.contains(node)) return host;
      node = host;
    }
    return null;
  }

  async _openPopup(ref, cfg) {
    // Wird aus einem Popup heraus ein weiteres geöffnet, übernimmt die äußere Karte (sie schließt das erste Popup, die Karte im Popup verschwindet dabei)
    const owner = this._popupParent();
    if (owner) return owner._openPopup(ref, cfg || this._config);
    cfg = cfg || this._config;
    this._closePopup();
    let [first, ...rest] = String(ref).split("::");
    // Toleranz: "popup:dashboard-name:Abschnitt" (ein Doppelpunkt), wenn der Teil davor wie ein Dashboard-Pfad aussieht (HA-Pfade enthalten einen Bindestrich)
    if (!rest.length) { const m = /^([a-z0-9_]+(?:-[a-z0-9_]+)+):(.+)$/.exec(first.trim()); if (m) { first = m[1]; rest = [m[2]]; } }
    const dash = String(rest.length ? first : cfg.popup_dashboard || "popups").trim();
    let name = String(rest.length ? rest.join("::") : first).trim();
    let pick = "";
    const widths = { small: 360, medium: 560, large: 860 };
    const mode = cfg.popup_width;
    const fixed = widths[mode];
    const css = (node, text) => { node.style.cssText = text; return node; };
    // Optik wie das Music-Assistant-Popup des Mediaplayers (Klassen mp-panel/mp-panel-head, Style-abhängig, abgedunkelter Hintergrund)
    const dialog = document.createElement("dialog");
    dialog.className = "mp-panel ucp-popup";
    // Breite: feste Stufe, "full" = 90 % des Fensters, sonst (automatisch) Breite des Abschnitts im Popup-Dashboard (nach dem Laden)
    dialog.style.width = fixed ? `min(${fixed}px,90vw)` : mode === "full" ? "90vw" : "min(520px,90vw)";
    const head = document.createElement("div");
    head.className = "mp-panel-head";
    const title = document.createElement("span");
    title.className = "mp-panel-title";
    title.textContent = name;
    const close = document.createElement("button");
    close.type = "button"; close.className = "round sm"; close.innerHTML = ucpIcon("mdi:close");
    close.setAttribute("aria-label", ucpT("Close")); close.title = ucpT("Close");
    head.append(title, close);
    const body = css(document.createElement("div"), "display:flex;flex-direction:column;gap:12px;overflow-x:hidden;overflow-y:auto;min-height:0;max-height:calc(85vh - 76px);overscroll-behavior:contain;-webkit-overflow-scrolling:touch");
    body.className = "ucp-popup-body";
    const note = (text) => { body.replaceChildren(); const p = css(document.createElement("div"), "opacity:.7;font-size:14px;padding:8px 0"); p.textContent = text; body.append(p); };
    dialog.append(head, body);
    const popup = this._popup = { dialog, cards: [] };
    const finish = () => { clearTimeout(popup.timer); popup.ro?.disconnect(); (popup.timers ?? []).forEach(clearTimeout); if (this._popup === popup) this._popup = null; dialog.remove(); };
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", finish);
    this.shadowRoot.append(dialog);
    if (dialog.showModal) dialog.showModal(); else dialog.setAttribute("open", "");
    // Automatisch schließen nach X Sekunden (0 = aus)
    const autoClose = Number(cfg.popup_auto_close);
    if (autoClose > 0) popup.timer = setTimeout(() => { try { dialog.close(); } catch { finish(); } }, autoClose * 1000);
    note(ucpT("Loading…"));
    try {
      const config = await this._hass.callWS({ type: "lovelace/config", url_path: ["", "lovelace", "default"].includes(dash) ? null : dash });
      const norm = (value) => String(value ?? "").trim().toLowerCase();
      const heading = (card) => card?.type === "heading" ? card.heading ?? card.title : undefined;
      const findSection = (sectionName) => {
        for (const view of config.views ?? []) {
          for (const section of view.sections ?? []) {
            const cards = section.cards ?? [];
            const index = cards.findIndex((card) => norm(heading(card)) === norm(sectionName));
            if (index >= 0) return { title: heading(cards[index]), span: Number(section.column_span) || 1, footer: view.footer, cards: cards.filter((_, i) => i !== index) };
          }
        }
        return null;
      };
      let found = findSection(name);
      // "Abschnitt#Karte": ganzer Name zuerst, sonst am letzten # trennen
      if (!found && name.includes("#")) {
        const cut = name.lastIndexOf("#");
        const sectionName = name.slice(0, cut).trim();
        const candidate = findSection(sectionName);
        if (candidate) { found = candidate; pick = name.slice(cut + 1).trim(); name = sectionName; }
      }
      // Rückfall: Ansicht mit passendem Pfad oder Titel
      if (!found) {
        const view = (config.views ?? []).find((v) => norm(v.path) === norm(name) || norm(v.title) === norm(name));
        if (view) found = { title: view.title ?? name, footer: view.footer, cards: [...(view.cards ?? []), ...(view.sections ?? []).flatMap((s) => s.cards ?? [])] };
      }
      if (this._popup !== popup) return;
      if (!found) { note(ucpT("Popup not found:") + " " + name); return; }
      title.textContent = String(found.title ?? name);
      let sectionWidth = 0;
      if (!fixed && mode !== "full" && found.span) {
        // Spaltenbreite und Abstand wie die Sections-Ansicht (Theme-Variablen, Standard 500 px / 32 px); plus Innenabstand und Rand des Popups
        const style = getComputedStyle(this);
        const px = (name, fallback) => parseFloat(style.getPropertyValue(name)) || fallback;
        const column = px("--ha-view-sections-column-max-width", 500), gap = px("--ha-view-sections-column-gap", 32);
        sectionWidth = Math.round(found.span * column + (found.span - 1) * gap);
        dialog.style.width = `min(${sectionWidth + 30}px,90vw)`;
      }
      if (pick) {
        const wanted = norm(pick);
        const labels = (card) => [card.name, card.title, card.heading, card.entity, card.entity_id].map(norm).filter(Boolean);
        const card = /^\d+$/.test(pick) ? found.cards[Number(pick) - 1]
          : found.cards.find((c) => labels(c).includes(wanted)) ?? found.cards.find((c) => labels(c).some((l) => l.includes(wanted)));
        if (!card) { note(ucpT("Card not found in the popup:") + " " + pick); return; }
        found.cards = [card];
      }
      const helpers = await window.loadCardHelpers?.();
      if (!helpers) { note(ucpT("Cards could not be created.")); return; }
      body.replaceChildren();
      // Raster wie in der Sections-Ansicht: 12 Spalten je Abschnittsspalte, Kartenbreite aus grid_options.columns ("full" = ganze Breite, sonst Standard der Karte, ersatzweise 12)
      const total = 12 * (found.span || 1);
      const useGrid = !!sectionWidth && !pick && found.cards.length > 0 && Math.min(sectionWidth + 30, window.innerWidth * 0.9) >= 600;
      if (useGrid) { body.style.display = "grid"; body.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`; body.style.gap = "8px"; body.style.alignContent = "start"; }
      const columnsOf = (cardConfig, element) => {
        const wanted = cardConfig.grid_options?.columns ?? cardConfig.layout_options?.grid_columns;
        if (wanted === "full") return total;
        const fromCard = Number(wanted) || Number(element.getGridOptions?.()?.columns) || 12;
        return Math.max(1, Math.min(total, Math.round(fromCard)));
      };
      for (const cardConfig of found.cards) {
        const element = await helpers.createCardElement(cardConfig);
        element.hass = this._hass;
        popup.cards.push(element);
        const columns = columnsOf(cardConfig, element);
        if (useGrid) {
          element.style.gridColumn = `span ${columns}`;
          const rows = Number(cardConfig.grid_options?.rows ?? cardConfig.layout_options?.grid_rows);
          if (rows > 0) element.style.minHeight = `${rows * 56 + (rows - 1) * 8}px`;
        } else if (pick && sectionWidth) {
          // Einzelne Karte: Breite im gleichen Verhältnis wie im Abschnitt
          dialog.style.width = `min(${Math.max(320, Math.round(sectionWidth * columns / total)) + 30}px,90vw)`;
        }
        body.append(element);
      }
      if (!found.cards.length) note(ucpT("This popup has no cards."));
      // Footer-Karte der Ansicht (z. B. Datumsauswahl, "Nach oben") als fester Fuß des Popups, außerhalb des Scrollbereichs.
      // Es erscheint nur, was gebraucht wird: Datumsauswahl bei Karten mit Energie-Datum, "Nach oben" bei scrollendem Inhalt.
      const footerConfig = found.footer?.card;
      if (footerConfig && typeof footerConfig === "object" && !cfg.popup_hide_footer && this._popup === popup) {
        const need = { energy: ucpUsesEnergyDate(found.cards), scroll: false };
        const box = css(document.createElement("div"), "min-width:0");
        const limit = Number(found.footer.max_width);
        if (limit > 0) box.style.cssText += `;max-width:${limit}px;width:100%;margin-inline:auto`;
        let shown = null, building = false, again = false;
        const applyFooter = async () => {
          if (building) { again = true; return; }
          building = true;
          try {
            do {
              again = false;
              if (this._popup !== popup) return;
              const pruned = ucpPruneFooter(footerConfig, need);
              const key = pruned ? JSON.stringify(pruned) : "";
              if (key === shown) continue;
              shown = key;
              if (popup.footerCard) popup.cards = popup.cards.filter((card) => card !== popup.footerCard);
              popup.footerCard = null;
              box.replaceChildren();
              if (!pruned) { box.remove(); dialog.style.gridTemplateRows = ""; continue; }
              const element = await helpers.createCardElement(pruned);
              if (this._popup !== popup) return;
              element.hass = this._hass;
              popup.cards.push(element);
              popup.footerCard = element;
              box.append(element);
              if (!box.isConnected) dialog.append(box);
              dialog.style.gridTemplateRows = "auto minmax(0, 1fr) auto";
            } while (again);
          } finally { building = false; }
        };
        // Scrollt der Inhalt? (einmal erkannt, bleibt es so; der Fuß selbst kann den Scrollbereich verkleinern)
        const measure = () => {
          if (need.scroll || this._popup !== popup) return;
          if (body.scrollHeight > body.clientHeight + 2) { need.scroll = true; applyFooter(); }
        };
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        if (this._popup !== popup) return;
        measure();
        await applyFooter();
        if (typeof ResizeObserver === "function" && this._popup === popup) {
          popup.ro = new ResizeObserver(measure);
          popup.ro.observe(body);
          for (const child of body.children) popup.ro.observe(child);
        }
        // Karten laden Inhalte nach (Verläufe, Bilder): später noch einmal messen
        for (const delay of [400, 1500, 4000]) popup.timers = [...(popup.timers ?? []), setTimeout(measure, delay)];
      }
    } catch (error) {
      if (this._popup === popup) note(ucpT("Popup dashboard could not be loaded:") + " " + (error?.message || dash));
    }
  }

  _closePopup() {
    const popup = this._popup;
    this._popup = null;
    if (!popup) return;
    clearTimeout(popup.timer);
    popup.ro?.disconnect();
    (popup.timers ?? []).forEach(clearTimeout);
    try { popup.dialog.close(); } catch { /* ignorieren */ }
    popup.dialog.remove();
  }

  _bindStateIcons(root = this._body) {
    root.querySelectorAll("[data-state-icon]").forEach((element) => {
      const state = this._hass?.states?.[element.dataset.stateIcon];
      if (!state) return;
      if (customElements.get("ha-state-icon")) {
        element.hass = this._hass;
        element.stateObj = state;
      } else if (state.attributes?.icon) {
        const icon = document.createElement("ha-icon");
        icon.setAttribute("icon", state.attributes.icon);
        icon.setAttribute("aria-hidden", "true");
        element.replaceWith(icon);
      }
    });
  }

  connectedCallback() { this._startData(); this._render(); }
  disconnectedCallback() { this._stopData(); this._closePopup(); this._clearSwitchPending(); this._nameResize?.disconnect(); this._dwdResize?.disconnect(); this._dwdUnbind(); this._energyNameObserver?.disconnect(); this._pfRO?.disconnect(); this._alRO?.disconnect(); this._alRO = null; this._alROTrack = null; this._pfRO = null; }

  _number(value, digits = 1) {
    return value == null ? "—" : value.toLocaleString(this._hass?.locale?.language, { maximumFractionDigits: digits });
  }

  // Wert eines Attributs (mit Einheit, Datumsformat, Windrichtung als Himmelsrichtung)
  _attributeText(state, attribute, dateFormat) {
    const attrs = state?.attributes;
    const raw = attribute && attrs && Object.hasOwn(attrs, attribute) ? attrs[attribute] : undefined;
    return ucpFormatDetailDate(raw, dateFormat, this._hass?.config?.time_zone, this._hass?.language) ??
      (/^wind_(bearing|direction)$/i.test(attribute) ? ucpCompass(raw) : null) ??
      (raw == null ? "—" : typeof raw === "object" ? JSON.stringify(raw) : [String(raw), ucpAttrUnit(this._hass, state, attribute, raw)].filter(Boolean).join(" "));
  }

  _stateText(state = this._state) {
    return state ? (this._hass?.formatEntityState?.(state) ?? state.state) : "—";
  }


  _stats(items = []) {
    const c = this._config;
    const extra = (Array.isArray(c.detail_entities) ? c.detail_entities : []).map((settings) => {
      const id = ucpId(settings);
      const state = this._hass?.states?.[id];
      const attribute = typeof settings?.attribute === "string" ? settings.attribute.trim() : "";
      const attrs = state?.attributes;
      const raw = attribute && attrs && Object.hasOwn(attrs, attribute) ? attrs[attribute] : undefined;
      const value = attribute
        ? ucpFormatDetailDate(raw, settings?.date_format, this._hass?.config?.time_zone, this._hass?.language) ??
           (/^wind_(bearing|direction)$/i.test(attribute) ? ucpCompass(raw) : null) ??
          (raw == null ? "—" : typeof raw === "object" ? JSON.stringify(raw) : [String(raw), ucpAttrUnit(this._hass, state, attribute, raw)].filter(Boolean).join(" "))
        : state ? this._stateText(state) : "—";
      return [state?.attributes?.friendly_name || id, value,
        state?.attributes?.icon || "mdi:chart-box-outline", settings, state, id.split(".")[0] === "media_player" ? "mediaplayer" : id.split(".")[0]];
    }).map((entry, index) => ["e" + index, entry]);
    const builtins = items.map(([label, value, icon]) => {
      const index = (UCP_DETAIL_LABELS[c.card_type] ?? []).indexOf(label);
      const settings = ucpBuiltinDetail(c, index);
      const source = this._hass?.states?.[settings.source];
      const display = source && !["unknown", "unavailable"].includes(source.state) ? this._stateText(source) : value;
      return ["b" + index, [label, display, icon, settings, source ?? this._state, c.card_type]];
    });
    const stats = ucpSortDetails([...builtins, ...extra], c.detail_order).map(([, entry]) => entry).filter(([label, value, , settings]) => label && value != null && value !== "" && settings?.hide !== true);
    if (!stats.length) return "";
    const detailFontSize = ucpIsClock(c.card_type) ? ucpNum(c.clock_detail_font_size) : null;
    const fontStyle = detailFontSize > 0 ? ` style="--clock-detail-font-size:${detailFontSize}px"` : "";
    return `<dl class="stats${ucpIsClock(c.card_type) ? " clock-stats" : ""}"${fontStyle}>${stats.map(([label, value, icon, settings, statState, statType]) => {
      const setting = (key) => ucpDetailSetting(c, settings, key);
      const styles = "--detail-align:" + ucpAlign(setting("align")) + ";" + ucpStatStyle(settings, statType, statState);
      const symbol = setting("hide_icon") ? "" : ucpTitleIcon(setting("icon") || icon);
      return `<div class="stat" style="${styles}">${symbol || !setting("hide_name") ? `<dt>${symbol}${setting("hide_name") ? "" : ucpEscape(setting("name") || label)}</dt>` : ""}<dd>${ucpEscape(value)}</dd></div>`;
    }).join("")}</dl>`;
  }

  _render() {
    const c = this._config;
    if (!c) return;
    const type = c.card_type;
    if (type === "energy") {
      this._renderEnergyCard();
      return;
    }
    this.toggleAttribute("data-wrapper", type === "wrapper");
    this.toggleAttribute("data-cc", type === "climate" && c.climate_view === "compact");
    if (type === "wrapper") { this._renderWrapper(); return; }
    const isList = type === "graph" || type === "bar";
    const missing = isList ? !Array.isArray(c.entities) || !c.entities.some(ucpId) : !ucpIsClock(type) && type !== "power-flow" && type !== "active-list" && type !== "updates" && !c.entity;
    if (type === "bar" && !missing) {
      if (!this._bar) {
        this._bar = document.createElement(UCP_TAG + "-bar");
        this._bar.setConfig({ ...c, title: c.hide_title ? "" : (c.name || "Bars"), follow_theme: true, background: undefined });
        this._body.replaceChildren(this._bar);
        this._watchName(this._bar.shadowRoot.querySelector(".marquee-title"));
      }
      this._bar.setAttribute("data-card-style", c.card_style || "default");
      this._syncCustomAttrs();
      if (this._hass) this._bar.hass = this._hass;
      const stats = this._stats();
      if (this._markup !== stats) {
        this._bar.setFooter(stats);
        this._markup = stats;
      }
      return;
    }
    if (type === "mediaplayer" && !missing) { this._renderMediaPlayer(); return; }
    const render = {
      battery: this._battery, climate: this._climate, clock: this._clock, gauge: this._gauge,
      graph: this._graph, light: this._light, slider: this._sliderCard,
      state: this._status, switch: this._status, washdata: this._washdata, pihole: this._pihole, "power-flow": this._powerFlow, "active-list": this._activeList, updates: this._updates, birdnet: this._birdnet, "dwd-warnings": this._dwd, "weather-forecast": this._weather,
    };
    const musicClock = type === "clock-music";
    const alMin = type === "active-list" && c.al_layout === "minimal";
    const title = (musicClock ? c.name : c.name || (type === "dwd-warnings" || type === "power-flow" || type === "active-list" || type === "birdnet" ? "" : type === "washdata" || type === "pihole" ? String(this._attrs.friendly_name ?? "").replace(/\s+(Zustand|State|Status)$/i, "") : this._attrs.friendly_name)) || ucpT(UCP_CARDS[type].label.split(" · ").at(-1));
    const content = missing ? `<div class="muted">${isList ? "Please select at least one entity." : "Please select an entity."}</div>`
      : (musicClock ? this._clock : render[type]).call(this);
    const ccView = type === "climate" && c.climate_view === "compact";
    const titleIcon = ccView ? "" : this._titleIcon();
    const cover = ucpIsClock(type) ? this._clockCover() : "";
    const paletteImage = musicClock && !cover && c.clock_music_visualizer !== false ? this._clockCover(true) : "";
    const classes = [c.hide_state && "hide-state", alMin && "al-min-card", type === "birdnet" && "hm-card", type === "washdata" && c.wd_blink !== false && this._state?.state === "finished" && "wd-finished", cover && "clock-with-cover", musicClock && "music-clock-layout music-clock", musicClock && this._clockMusic() && "music-clock-playing"].filter(Boolean).join(" ");
    const titleText = c.hide_title || alMin || ccView ? "" : musicClock ? c.name : title;
    const markup = `<ha-card${classes ? ` class="${classes}"` : ""} style="--title-align:${ucpAlign(type === "birdnet" ? "left" : c.title_align)}${Number(c.state_font_size) > 0 ? `;--state-font-size:${Number(c.state_font_size)}px` : ""}">${cover}${paletteImage}${titleText || titleIcon ? `<h3 class="${c.name_marquee ? "marquee-title" : ""}"><span class="title-label">${titleIcon ? `<span class="title-icon">${titleIcon}</span>` : ""}${ucpEscape(titleText)}</span></h3>` : ""}${content}${this._feedback ? `<p class="feedback" role="status">${ucpEscape(this._feedback)}</p>` : ""}</ha-card>`;
    const active = this.shadowRoot.activeElement;
    if (markup === this._markup || this._drag || active?.matches("input:active")) return;
    if (musicClock && this._markup) {
      const timePattern = /(<div class="clock music-clock-time"[^>]*>)(.*?)(<\/div>)/;
      const time = markup.match(timePattern);
      const current = this._body.querySelector(".music-clock-time");
      if (time && current && this._markup.replace(timePattern, "$1$3") === markup.replace(timePattern, "$1$3")) {
        current.innerHTML = time[2];
        this._markup = markup;
        return;
      }
    }
    if (type === "power-flow" && this._pfContent && this._markup && markup.replace(content, "") === this._markup.replace(this._pfContent, "")) {
      const wrap = this._body.querySelector(".pf-wrap");
      const next = document.createElement("template");
      next.innerHTML = content;
      if (wrap && next.content.firstElementChild) {
        ucpMorph(wrap, next.content.firstElementChild);
        this._pfContent = content;
        this._markup = markup;
        this._pfAfterRender();
        return;
      }
    }
    const bnCaret = active?.hasAttribute?.("data-bn-q") ? active.selectionStart : null;
    const restoreDialFocus = active?.dataset.dial && active.matches(":focus-visible");
    const previousProgress = this._body.querySelector?.(".dial-progress")?.getAttribute("stroke-dasharray");
    this._body.innerHTML = markup;
    if (musicClock) {
      const image = this._body.querySelector("[data-music-palette]");
      if (image?.complete) this._applyClockPalette(image);
      else image?.addEventListener("load", () => this._applyClockPalette(image), { once: true });
    }
    ucpBindTitleIcons(this._body);
    this._bindStateIcons();
    this._markup = markup;
    if (type === "power-flow") this._pfContent = content;
    const progress = this._body.querySelector?.(".dial-progress.animated");
    const targetProgress = progress?.getAttribute("stroke-dasharray");
    if (previousProgress && targetProgress && previousProgress !== targetProgress && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      progress.style.strokeDasharray = previousProgress;
      progress.getBoundingClientRect();
      requestAnimationFrame(() => { progress.style.strokeDasharray = targetProgress; });
    }
    this._watchName(this._body.querySelector(".marquee-title"));
    if (type === "dwd-warnings" || type === "weather-forecast") this._dwdAfterRender();
    if (type === "power-flow") this._pfAfterRender();
    if (type === "birdnet") this._hmTheme();
    if (type === "active-list") this._alTickerFit();

    if (bnCaret != null) { const q = this._body.querySelector("[data-bn-q]"); q?.focus({ preventScroll: true }); q?.setSelectionRange?.(bnCaret, bnCaret); }
    if (restoreDialFocus) this._body.querySelector("[data-dial]")?.focus({ preventScroll: true });
    if (active?.dataset.action) [...this._body.querySelectorAll("[data-action]")]
      .find((field) => field.dataset.action === active.dataset.action && field.dataset.value === active.dataset.value)
      ?.focus({ preventScroll: true });
  }


  // DWD: Laufschrift für zu breite Zeilen (vertikales Layout) und Popover für aufgeklappte Beschreibungen
  _dwdAfterRender() {
    const lines = [...this._body.querySelectorAll(".dwd-line")];
    this._dwdResize?.disconnect();
    if (lines.length) {
      const measure = () => lines.forEach((box) => {
        const overflow = Math.ceil(box.firstElementChild.getBoundingClientRect().width - box.clientWidth);
        box.classList.toggle("scrolling", overflow > 1);
        if (overflow > 1) box.style.setProperty("--title-shift", -overflow + "px");
      });
      this._dwdResize = new ResizeObserver(measure);
      lines.forEach((box) => this._dwdResize.observe(box));
      measure();
    }
    this._dwdPlace(true);
    this._dwdBox?.disconnect();
    this._dwdBox = new ResizeObserver(() => this._dwdPlace(true));
    this._dwdBox.observe(this._body);
  }

  _dwdPlace(show) {
    const pops = [...this._body.querySelectorAll(".dwd-pop")];
    if (!pops.length) { this._dwdUnbind(); return; }
    for (const pop of pops) {
      if (show && !pop.matches(":popover-open")) { try { pop.showPopover(); } catch { /* ignorieren */ } }
      const anchor = pop.closest(".dwd-item").getBoundingClientRect();
      if (anchor.width < 20) {
        // Karte noch nicht gelayoutet: Overlay verbergen und erneut versuchen
        try { pop.hidePopover(); } catch { /* ignorieren */ }
        cancelAnimationFrame(this._dwdRetry);
        this._dwdRetry = requestAnimationFrame(() => this.isConnected && this._dwdPlace(true));
        continue;
      }
      const height = pop.offsetHeight;
      const below = anchor.bottom + 4, fits = below + height <= innerHeight - 8;
      pop.style.width = anchor.width + "px";
      pop.style.left = Math.max(0, anchor.left) + "px";
      pop.style.top = Math.max(8, fits ? below : anchor.top - height - 4) + "px";
    }
    if (!this._dwdBound) {
      this._dwdBound = { move: () => this._dwdPlace(false), outside: (event) => {
        const path = event.composedPath();
        if (path.some((node) => node instanceof Element && node.getRootNode() === this.shadowRoot && (node.classList.contains("dwd-pop") || node.classList.contains("dwd-head")))) return;
        if (this._dwdOpen?.size) { this._dwdOpen = new Set(); this._render(); }
      } };
      addEventListener("scroll", this._dwdBound.move, true);
      addEventListener("resize", this._dwdBound.move);
      document.addEventListener("pointerdown", this._dwdBound.outside, true);
    }
  }

  _dwdUnbind() {
    this._dwdBox?.disconnect();
    if (!this._dwdBound) return;
    removeEventListener("scroll", this._dwdBound.move, true);
    removeEventListener("resize", this._dwdBound.move);
    document.removeEventListener("pointerdown", this._dwdBound.outside, true);
    this._dwdBound = null;
  }

  _watchName(heading) {
    this._nameResize?.disconnect();
    if (!heading?.firstElementChild) return;
    const label = heading.firstElementChild;
    this._nameResize ??= new ResizeObserver((entries) => {
      const current = entries[0].target;
      const text = current.classList.contains("title-label") ? current : current.firstElementChild;
      const box = text.parentElement;
      const overflow = Math.ceil(text.getBoundingClientRect().width - box.clientWidth);
      box.classList.toggle("scrolling", overflow > 1);
      if (overflow > 1) box.style.setProperty("--title-shift", -overflow + "px");
    });
    this._nameResize.observe(heading);
    this._nameResize.observe(label);
  }

  // Style-Hülle: bettet eine beliebige Karte (Home Assistant oder Custom) in unseren Rahmen ein; die innere Karte wird transparent, Farben kommen aus dem gewählten Style
  _renderWrapper() {
    const c = this._config;
    if (this._wrapShell !== c) {
      this._wrapShell = c;
      this._wrapEl = null; this._wrapKey = null;
      this._markup = null;
      this._body.innerHTML = '<ha-card class="ucp-wrap"><div class="ucp-wrap-inner"></div></ha-card>';
    }
    const inner = this._body.querySelector(".ucp-wrap-inner");
    if (!inner) return;
    const cfg = c.wrapped_card;
    const key = JSON.stringify(cfg ?? null);
    if (this._wrapKey !== key) {
      this._wrapKey = key;
      this._wrapEl = null;
      const token = this._wrapToken = {};
      if (!cfg || typeof cfg !== "object" || !cfg.type) {
        inner.innerHTML = '<div style="padding:12px;opacity:.7">' + ucpEscape(ucpT("No wrapped card configured.")) + "</div>";
        return;
      }
      (async () => {
        const helpers = await window.loadCardHelpers?.();
        if (!helpers) throw new Error("loadCardHelpers");
        const element = await helpers.createCardElement(cfg);
        if (this._wrapToken !== token) return;
        if (this._hass) element.hass = this._hass;
        inner.replaceChildren(element);
        this._wrapEl = element;
      })().catch((error) => {
        if (this._wrapToken === token) inner.innerHTML = '<div style="padding:12px;opacity:.7">' + ucpEscape(ucpT("Card could not be created:") + " " + (error?.message || "")) + "</div>";
      });
    }
    if (this._wrapEl && this._hass) this._wrapEl.hass = this._hass;
    this._wrapTighten();
  }

  // Innenabstand der eingebetteten Home-Assistant-Karte (.card-content) verringern; die Karte zeichnet ihren Inhalt neu, daher als Stylesheet in ihrer Shadow-DOM
  _wrapTighten() {
    const root = this._wrapEl?.shadowRoot;
    if (!root) return;
    const pad = Number(this._config.wrapper_padding);
    const px = Number.isFinite(pad) ? Math.max(0, Math.min(32, pad)) : 4;
    if (this._wrapSheet?.root === root) { if (this._wrapSheet.px === px) return; }
    try {
      const sheet = this._wrapSheet?.root === root ? this._wrapSheet.sheet : new CSSStyleSheet();
      sheet.replaceSync(`.card-content { padding-top: ${px}px; padding-bottom: ${px}px; }`);
      if (this._wrapSheet?.root !== root) root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
      this._wrapSheet = { root, sheet, px };
    } catch { /* ältere Browser: Abstand bleibt */ }
  }

  _renderEnergyCard() {
    const EnergyCard = customElements.get(UCP_ENERGY_TAG);
    const card = this._energyCard ?? document.createElement(UCP_ENERGY_TAG);
    if (this._energyCardConfig !== this._config) {
      card.setConfig(ucpEnergyConfig(this._config, EnergyCard));
      ucpApplyEnergyTheme(card);
      card.toggleAttribute("data-hide-state", !!this._config.hide_state);
      card.setAttribute("data-card-style", this._config.card_style || "default");
      for (const [name, on] of Object.entries(ucpCustomVars(this, this._effConfig ?? this._config))) card.toggleAttribute(name, on);
      card.style.setProperty("--title-align", ucpAlign(this._config.title_align));
      this._energyCardConfig = this._config;
    }
    if (card !== this._energyCard) {
      this._energyCard = card;
      this._body.replaceChildren(card);
    }
    if (this._hass) card.hass = this._hass;
    const root = card.shadowRoot;
    const titleIcon = this._config.hide_title_icon ? "" : this._config.title_icon;
    if (root && (this._config.name_marquee || titleIcon)) {
      // Die Karte zeichnet ihren Kopf bei jedem Datenupdate neu; Icon und Laufschrift werden danach erneut angewendet
      this._energyApply = () => {
        const title = root.querySelector(".header .title");
        if (!title) return;
        if (titleIcon && !title.querySelector("[data-title-icon]")) {
          title.insertAdjacentHTML("afterbegin", ucpTitleIcon(titleIcon));
          ucpBindTitleIcons(title);
        }
        if (!this._config.name_marquee || title.firstElementChild?.classList.contains("title-label")) return;
        const label = document.createElement("span");
        label.className = "title-label";
        label.append(...title.childNodes);
        title.append(label);
        title.classList.add("marquee-title");
        this._watchName(title);
      };
      this._energyNameObserver ??= new MutationObserver(() => this._energyApply?.());
      this._energyNameObserver.observe(root, { childList: true, subtree: true });
      this._energyApply();
    } else {
      this._energyNameObserver?.disconnect();
      this._energyApply = null;
    }
  }

  _dial(fraction, value, icon, {color = "var(--u-accent)", needle, sub, scale, thresholds = [], control} = {}) {
    const c = this._config;
    const width = nbClamp(ucpNum(c.gauge_width) ?? 6, 2, 24);
    const progress = Math.round(fraction * 1000) / 10;
    const period = 100 / ucpLedCount(c.led_segments);
    const arc = "M 18 98 A 82 82 0 0 1 182 98";
    const point = (f, radius) => [100 - Math.cos(Math.PI * f) * radius, 98 - Math.sin(Math.PI * f) * radius];
    const at = (f, radius) => point(f, radius).map((v) => v.toFixed(1)).join(" ");
    const ticks = c.show_thresholds ? thresholds.filter((f) => f > 0 && f < 1).map((f) =>
      `<path d="M${at(f, 82 + width / 2 + 2)} L${at(f, 82 - width / 2 - 2)}" stroke="var(--u-text)" stroke-width="1.4"/>`).join("") : "";
    const mark = c.show_knob ? `<circle class="dial-knob" cx="${point(fraction,82)[0]}" cy="${point(fraction,82)[1]}"
      r="${Math.max(width / 2, 4)}" fill="var(--u-bg)" stroke="${color}" stroke-width="2"/>` : "";
    return `<div class="dial"><svg viewBox="0 0 200 112" ${control ? "" : 'aria-hidden="true"'}>
      <defs><linearGradient id="dial-gradient"><stop stop-color="var(--u-second)"/><stop offset="1" stop-color="${color}"/></linearGradient>
      ${c.segmented ? `<mask id="dial-segments"><path d="${arc}" fill="none" pathLength="100" stroke="white" stroke-width="${width+1}" stroke-dasharray="${period * .76} ${period * .24}"/></mask>` : ""}</defs>
      <g ${c.segmented ? 'mask="url(#dial-segments)"' : ""}>
      <path d="${arc}" fill="none" stroke="var(--u-edge)" stroke-width="${width}" stroke-linecap="round"/>
      <path d="${arc}" fill="none" pathLength="100" stroke="url(#dial-gradient)" stroke-width="${width}"
        class="dial-progress${c.animate ? " animated" : ""}" stroke-dasharray="${progress} 100"
        style="visibility:${progress ? "visible" : "hidden"};filter:drop-shadow(0 0 4px ${color})"/></g>
      ${ticks}${needle ? `<path d="M${at(fraction, 75-width/2)} L${at(fraction, 64-width/2)}" stroke="${color}" stroke-width="3"/>` : ""}${mark}
      ${control ? `<path class="dial-hit" d="${arc}" fill="none" stroke="transparent" stroke-width="${Math.max(width + 14, 27)}"
        tabindex="0" role="slider" aria-label="${control.label}" aria-valuemin="${control.min}" aria-valuemax="${control.max}"
        aria-valuenow="${control.value}" data-dial="${control.action}" data-min="${control.min}" data-max="${control.max}" data-step="${control.step}"/>` : ""}
      </svg><div class="dial-center">${ucpIcon(icon)}${value}${sub ? `<span class="muted">${ucpEscape(sub)}</span>` : ""}</div>
      ${scale ? `<div class="dial-scale scale"><span>${ucpEscape(scale[0])}</span><span>${ucpEscape(scale[1])}</span></div>` : ""}</div>`;
  }

  _dialPointer(event) {
    const hit = event.target.closest?.("[data-dial]");
    if (event.type === "pointerdown") {
      if (!hit || event.button !== 0 || this._drag) return;
      event.preventDefault();
      hit.focus({ preventScroll: true });
      hit.setPointerCapture(event.pointerId);
      this._drag = {hit, id: event.pointerId};
      this._body.classList.add("dragging");
    }
    const drag = this._drag;
    if (!drag || drag.id !== event.pointerId) return;
    if (event.type === "pointercancel" || event.type === "lostpointercapture") {
      this._drag = null;
      this._body.classList.remove("dragging");
      this._markup = null;
      this._render();
      return;
    }
    const svg = drag.hit.ownerSVGElement;
    const matrix = svg.getScreenCTM();
    if (!matrix) {
      this._drag = null;
      this._body.classList.remove("dragging");
      this._markup = null;
      this._render();
      return;
    }
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    const fraction = 1 - Math.atan2(Math.max(0, 98 - point.y), point.x - 100) / Math.PI;
    const { min, max, step, dial } = drag.hit.dataset;
    const value = this._dialValue(Number(min) + fraction * (Number(max) - Number(min)), min, max, step);
    const level = ucpPct(value, Number(min), Number(max));
    drag.hit.setAttribute("aria-valuenow", value);
    const progress = svg.querySelector(".dial-progress");
    progress.setAttribute("stroke-dasharray", `${100*level} 100`);
    progress.style.visibility = level ? "visible" : "hidden";
    const knob = svg.querySelector(".dial-knob");
    knob?.setAttribute("cx", 100 - Math.cos(Math.PI*level)*82);
    knob?.setAttribute("cy", 98 - Math.sin(Math.PI*level)*82);
    const readout = svg.closest(".dial").querySelector(".dial-reading");
    if (readout) {
      const t = this._climateValues();
      if (t.ranged) {
        const offset = nbClamp(value-t.actual,t.min-t.low,t.max-t.high);
        readout.textContent = this._number(t.low+offset) + "–" + this._number(t.high+offset);
      } else readout.textContent = this._number(value);
    }
    if (event.type === "pointerup") {
      this._drag = null;
      this._body.classList.remove("dragging");
      this._act(dial, value);
    }
  }

  _dialValue(value, min, max, step) {
    min = Number(min); max = Number(max); step = Number(step);
    return nbClamp(Number((min + Math.round((value-min)/step)*step).toFixed(8)), min, max);
  }

  _climateValues() {
    const a = this._attrs;
    const target = ucpNum(a.temperature);
    const low = ucpNum(a.target_temp_low);
    const high = ucpNum(a.target_temp_high);
    const ranged = target == null && low != null && high != null;
    const actual = target ?? (ranged ? (low + high) / 2 : null);
    const current = this._climatePending?.value ?? actual;
    return {target, low, high, ranged, actual, current, min: ucpNum(a.min_temp) ?? 7,
      max: ucpNum(a.max_temp) ?? 35, step: ucpNum(a.target_temp_step) || .5};
  }

  _setTemperature(action, value) {
    const t = this._climateValues();
    if (t.actual == null || t.max <= t.min || t.step <= 0) return;
    const desired = action === "temperature" ? value : t.current + (action === "temp-up" ? t.step : -t.step);
    if (desired == null) return;
    const delta = t.ranged ? nbClamp(Number((desired-t.actual).toFixed(8)), t.min-t.low, t.max-t.high) : 0;
    const next = t.ranged ? t.actual + delta : nbClamp(desired, t.min, t.max);
    const pending = { value: next, config: this._config, data: t.ranged
      ? { target_temp_low: Number((t.low+delta).toFixed(8)), target_temp_high: Number((t.high+delta).toFixed(8)) }
      : { temperature: next } };
    this._climatePending = pending;
    clearTimeout(this._climateDebounce);
    clearTimeout(this._climateExpire);
    this._render();
    this._climateDebounce = setTimeout(() => this._flushTemperature(), 90);
  }

  async _flushTemperature() {
    const pending = this._climatePending;
    if (this._climateSending || !pending || pending.sent) return;
    pending.sent = true;
    this._climateSending = true;
    try {
      await this._hass.callService("climate", "set_temperature", { entity_id: pending.config.entity, ...pending.data });
      if (this._climatePending === pending) {
        this._climateExpire = setTimeout(() => {
          if (this._climatePending === pending) { this._climatePending = null; this._render(); }
        }, 2500);
      }
    } catch (error) {
      if (this._climatePending === pending) {
        this._climatePending = null;
        this._feedback = error?.message || "Could not set the temperature.";
        this._render();
      }
    } finally {
      this._climateSending = false;
      if (this._climatePending !== pending) this._flushTemperature();
    }
  }

  _battery() {
    const c = this._config;
    const raw = ucpNum(this._state?.state);
    const level = raw == null ? null : nbClamp(raw, 0, 100);
    const color = level == null ? "var(--u-muted)" : level < 20 ? "var(--u-error)" : level < 50 ? "var(--u-warn)" : "var(--u-good)";
    const items = [["power_entity", "Charging power", "mdi:flash"], ["runtime_entity", "Remaining runtime", "mdi:clock-outline"],
      ["capacity_entity", "Capacity", "mdi:battery-high"]].filter(([key]) => c[key]).map(([key, label, icon]) => {
        const state = this._hass?.states?.[c[key]];
        return [label, state ? this._stateText(state) : "—", icon];
      });
    const icon = level == null ? "mdi:battery-unknown" : level < 10 ? "mdi:battery-outline"
      : level >= 95 ? "mdi:battery" : "mdi:battery-" + Math.min(90, Math.round(level / 10) * 10);
    return `<div class="center">
      ${c.hide_main_icon ? "" : `<div class="orb on battery-orb" role="meter" aria-label="Charge level" aria-valuemin="0" aria-valuemax="100"
        ${level == null ? 'aria-valuetext="Unavailable"' : `aria-valuenow="${level}"`}
        style="--level-color:${color}">${ucpIcon(this._icon(icon) || icon)}</div>`}
      ${c.show_value !== false || level == null ? `<div class="battery-level">${ucpValue(this._number(level, 0), level == null ? "" : this._unit("%"))}</div>` : ""}
      </div>${this._stats(items)}`;
  }

  _gauge() {
    const c = this._config;
    const value = ucpNum(this._state?.state);
    const min = ucpNum(c.min) ?? 0;
    const max = ucpNum(c.max) ?? 100;
    const unit = c.unit ?? this._attrs.unit_of_measurement;
    const levels = [["green", "good"], ["yellow", "warn"], ["red", "error"]]
      .map(([key, tone]) => [ucpNum(c.severity?.[key]), tone]).filter(([limit]) => limit !== null && value !== null && value >= limit)
      .sort(([a], [b]) => b - a);
    return `<div class="center">${this._dial(ucpPct(value, min, max), ucpValue(this._number(value), unit),
      this._icon("mdi:flash"), { thresholds: ["normal", "warning", "critical"].map((key, index) =>
        ucpPct(ucpNum(c[key]) ?? min + (max-min)*[.25,.5,.75][index], min, max)), needle: c.needle && value != null,
        color: levels.length ? `var(--u-${levels[0][1]})` : "var(--u-good)", scale: [this._number(min), this._number(max)] })}</div>${this._stats()}`;
  }

  _climateCompact() {
    const a = this._attrs, c = this._config;
    const t = this._climateValues();
    const { low, high, ranged, min, max } = t;
    const current = ucpNum(a.current_temperature);
    const humidity = ucpNum(a.current_humidity);
    const offset = t.actual == null ? 0 : t.current - t.actual;
    const unit = this._unit(this._hass?.config?.unit_system?.temperature || "");
    const shown = ranged ? `${this._number(low + offset)}–${this._number(high + offset)}` : this._number(t.current ?? current);
    const disabled = !this._available() || t.current == null;
    const name = c.hide_title ? "" : String(c.name || a.friendly_name || "");
    const icon = this._titleIcon();
    const head = name || icon ? `<div class="cc-name">${icon}${name ? `<span>${ucpEscape(name)}</span>` : ""}</div>` : "";
    return `<div class="cc"><div class="cc-row">${ucpAction("temp-down", "mdi:minus", "Decrease temperature", disabled || (ranged ? low + offset : t.current) <= min, "round cc-btn")}
      <div class="cc-mid">${head}<div class="cc-set">${ucpEscape(shown)} <span class="unit">${ucpEscape(unit)}</span></div>
      ${current == null || c.climate_hide_current ? "" : `<div class="cc-act">${ucpEscape(this._number(current))} ${ucpEscape(unit)}</div>`}</div>
      ${ucpAction("temp-up", "mdi:plus", "Increase temperature", disabled || (ranged ? high + offset : t.current) >= max, "round cc-btn")}</div></div>
      ${this._stats([["Mode", this._stateText(), "mdi:thermostat"], ["Air humidity", humidity == null ? null : `${this._number(humidity)} %`, "mdi:water-percent"],
        ["Fan", a.fan_mode, "mdi:fan"], ["Profile", a.preset_mode, "mdi:tune"]])}`;
  }

  _climate() {
    if (this._config.climate_view === "compact") return this._climateCompact();
    const a = this._attrs;
    const t = this._climateValues();
    const { target, low, high, ranged, min, max } = t;
    const current = ucpNum(a.current_temperature);
    const humidity = ucpNum(a.current_humidity);
    const offset = t.actual == null ? 0 : t.current - t.actual;
    const unit = this._unit(this._hass?.config?.unit_system?.temperature || "");
    const modes = this._config.show_modes && Array.isArray(a.hvac_modes)
      ? `<select data-action="climate-mode" aria-label="Operating mode">${a.hvac_modes.map((mode) => `<option value="${ucpEscape(mode)}"${mode === this._state?.state ? " selected" : ""}>${ucpEscape(this._hass?.formatEntityState?.(this._state, mode) ?? mode)}</option>`).join("")}</select>` : "";
    const shown = ranged ? `${this._number(low+offset)}–${this._number(high+offset)}` : this._number(t.current ?? current);
    const disabled = !this._available() || t.current == null;
    const control = this._config.gauge_drag && !disabled && max > min && t.step > 0
      ? { action: "temperature", label: "Target temperature", min, max, step: t.step, value: t.current } : null;
    const readout = `<span class="value"><span class="dial-reading">${ucpEscape(shown)}</span> <span class="unit">${ucpEscape(unit)}</span></span>`;
    return `<div class="center">${this._dial(ucpPct(t.current ?? current, min, max), readout,
      this._icon(a.hvac_action === "cooling" ? "mdi:snowflake" : "mdi:thermometer"),
      { control, thresholds: [.25,.5,.75], color: a.hvac_action === "heating" ? ucpHeatingColor(this._config.heating_color) : "var(--u-accent)",
        sub: current == null || target == null && !ranged ? "" : `${ucpT("Current")} ${this._number(current)} ${unit}` })}
      <div class="controls dial-controls">${ucpAction("temp-down", "mdi:minus", "Decrease temperature", disabled || (ranged ? low+offset : t.current) <= min)}
      ${modes}${ucpAction("temp-up", "mdi:plus", "Increase temperature", disabled || (ranged ? high+offset : t.current) >= max)}</div></div>
      ${this._stats([["Mode", this._stateText(), "mdi:thermostat"], ["Air humidity", humidity == null ? null : `${this._number(humidity)} %`, "mdi:water-percent"],
        ["Fan", a.fan_mode, "mdi:fan"], ["Profile", a.preset_mode, "mdi:tune"]])}`;
  }


  _light() {
    const a = this._attrs;
    const c = this._config;
    const on = this._state?.state === "on";
    const available = this._available();
    const modes = Array.isArray(a.supported_color_modes) ? a.supported_color_modes : [];
    const dimmable = modes.length ? modes.some((mode) => !["onoff", "unknown"].includes(mode)) : a.brightness != null;
    const adjustableColor = modes.some((mode) => ["color_temp", "hs", "xy", "rgb", "rgbw", "rgbww"].includes(mode));
    const level = on ? nbClamp(Math.round((ucpNum(a.brightness) ?? 255)*100/255),0,100) : 0;
    const icon = this._icon("mdi:lightbulb");
    const mired = ucpNum(a.color_temp);
    const kelvin = ucpNum(a.color_temp_kelvin) ?? (mired > 0 ? Math.round(1000000 / mired) : null);
    const state = this._stateText() + (dimmable && on && available ? ` · ${level} ${this._unit("%")}`.trimEnd() : "");
    const panel = (this._lightPanel === "color" && adjustableColor) || (this._lightPanel === "brightness" && dimmable) ? this._lightPanel : null;
    const fullColor = modes.some((mode) => ["hs", "xy", "rgb", "rgbw", "rgbww"].includes(mode));
    const swatches = fullColor ? ucpLightColors(c.light_colors) : UCP_LIGHT_WHITES.colors;
    const main = panel === "color"
      ? `<div class="light-colors"><div class="controls">${swatches.map((color, index) =>
        `<button type="button" class="swatch" data-action="light-color" data-value="${index}" style="--sw:${color}" aria-label="${ucpT("Color")} ${index + 1}" title="${ucpT("Color")} ${index + 1}"${available ? "" : " disabled"}></button>`).join("")}</div>${fullColor
        ? `<div class="color-field" data-palette role="slider" tabindex="0" aria-label="Color palette" title="Color palette"${available ? "" : ' aria-disabled="true"'}></div>` : ""}</div>`
      : panel === "brightness"
        ? `<input class="range light-range" type="range" min="0" max="100" value="${level}" data-action="brightness" aria-label="Brightness"${available ? "" : " disabled"}>
          <div class="controls presets">${UCP_LIGHT_LEVELS.map((percent) =>
          `<button type="button" class="${Math.abs(level - percent) <= 5 ? "on" : ""}" data-action="brightness" data-value="${percent}"${available ? "" : " disabled"}>${percent} %</button>`).join("")}</div>`
        : c.hide_main_icon ? "" : ucpAction("toggle", icon, on ? "Turn off" : "Turn on", !available, `orb${on ? " on" : ""}`);
    const side = (action, symbol, label, shown) => shown
      ? ucpAction("light-panel", symbol, label, !available, "round" + (this._lightPanel === action ? " on" : "")).replace('data-action="light-panel"', `data-action="light-panel" data-value="${action}"`)
      : "<span></span>";
    return `<div class="center light"><div class="light-main">${main}</div>
      <div class="light-foot">${side("brightness", "mdi:brightness-6", "Set brightness", dimmable)}
        <div class="light-state">${c.hide_state ? "" : c.hide_main_icon && !panel
          ? `<button type="button" class="state-btn" data-tap="state" aria-label="${on ? "Turn off" : "Turn on"}"${available ? "" : " disabled"}>${ucpValue(state)}</button>` : ucpValue(state)}</div>
        ${side("color", "mdi:palette-outline", "Choose color", adjustableColor)}</div></div>
      ${this._stats([["Brightness", dimmable && available ? `${level} ${this._unit("%")}`.trim() : null, "mdi:brightness-6"],
        ["Color temperature", kelvin == null ? null : `${this._number(kelvin, 0)} K`, "mdi:thermometer"],
        ["Effect", a.effect, "mdi:creation"]])}`;
  }

  _dateOptions() {
    const zone = this._config.time_zone || this._hass?.config?.time_zone;
    try { if (zone) new Intl.DateTimeFormat(undefined, { timeZone: zone }); }
    catch { return {}; }
    return zone ? { timeZone: zone } : {};
  }

  _clockMusic() {
    const id = this._config.clock_media_player;
    if (typeof id !== "string" || !id.startsWith("media_player.")) return null;
    const player = this._hass?.states?.[id];
    if (player?.state !== "playing") return null;
    const a = player.attributes ?? {};
    const type = String(a.media_content_type ?? "").toLowerCase();
    const music = ["music", "audio", "song", "track", "album", "playlist", "artist", "radio"].includes(type)
      || (!type && Boolean(a.media_artist || a.media_album_name));
    return music || (this._config.card_type === "clock-music" && !type) ? a : null;
  }

  _clockCover(paletteOnly = false) {
    if (!paletteOnly && !this._config.clock_show_media_cover) return "";
    const image = ucpCover(this._clockMusic());
    if (typeof image !== "string" || !/^(?:\/(?![\\/])|https?:\/\/)/i.test(image)) return "";
    return `<img class="clock-cover" data-music-palette${paletteOnly ? " hidden" : ""} src="${ucpEscape(image)}" alt="" aria-hidden="true">`;
  }

  async _applyClockPalette(image) {
    const bars = this._body.querySelector(".music-clock-bars");
    if (!bars || !this._body.contains(image) || !image.naturalWidth) return;
    if (this._clockPalette?.src !== image.src) {
      const palette = { src: image.src };
      this._clockPalette = palette;
      let bitmap;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 48;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) return;
        let pixels;
        try {
          context.drawImage(image, 0, 0, 48, 48);
          pixels = context.getImageData(0, 0, 48, 48).data;
        } catch {
          const player = this._config.clock_media_player || this._config.entity;
          const response = await this._hass.fetchWithAuth(
            "/api/media_player_proxy/" + encodeURIComponent(player), { cache: "no-store" });
          if (!response.ok) return;
          bitmap = await createImageBitmap(await response.blob());
          // Resizing resets the origin-clean flag after drawing a remote image.
          canvas.width = 48;
          context.drawImage(bitmap, 0, 0, 48, 48);
          pixels = context.getImageData(0, 0, 48, 48).data;
        }
        const colors = new Map();
        for (let i = 0; i < pixels.length; i += 4) {
          if (pixels[i + 3] < 128) continue;
          const rgb = [pixels[i], pixels[i + 1], pixels[i + 2]];
          const max = Math.max(...rgb);
          if (max < 32) continue;
          const key = rgb.map((channel) => channel >> 5).join(",");
          const bucket = colors.get(key) ?? { rgb: [0, 0, 0], count: 0, score: 0 };
          rgb.forEach((channel, index) => { bucket.rgb[index] += channel; });
          bucket.count++;
          bucket.score += 1 + (max - Math.min(...rgb)) / 60;
          colors.set(key, bucket);
        }
        const ranked = [...colors.values()].sort((a, b) => b.score - a.score)
          .map(({ rgb, count }) => rgb.map((channel) => Math.round(channel / count)));
        const selected = [];
        for (const rgb of ranked) {
          if (selected.every((color) => rgb.reduce((distance, channel, i) => distance + Math.abs(channel - color[i]), 0) > 78)) {
            selected.push(rgb);
            if (selected.length === 4) break;
          }
        }
        if (!selected.length) return;
        while (selected.length < 3) {
          const rgb = selected[0];
          selected.push(rgb.map((channel) => Math.round(channel + (255 - channel) * selected.length * .16)));
        }
        palette.colors = selected.sort((a, b) => (a[0] - a[2]) - (b[0] - b[2]))
          .map((rgb) => "rgb(" + rgb.join(" ") + ")");
      } catch {
        // The visualizer keeps its theme colors if Home Assistant cannot supply the image.
      } finally {
        bitmap?.close();
      }
    }
    const activeImage = this._body.querySelector("[data-music-palette]");
    const activeBars = this._body.querySelector(".music-clock-bars");
    const colors = this._clockPalette?.colors;
    if (activeImage?.src !== image.src || this._clockPalette?.src !== image.src || !activeBars || !colors) return;
    [...activeBars.children].forEach((bar, index) => {
      const position = index / (activeBars.children.length - 1) * (colors.length - 1);
      const left = Math.min(Math.floor(position), colors.length - 2);
      const weight = Math.round((1 - position + left) * 100);
      bar.style.setProperty("--music-bar-color", "color-mix(in oklab, " + colors[left] + " " + weight + "%, " + colors[left + 1] + ")");
    });
  }

  _clock() {
    const c = this._config;
    const now = new Date();
    const locale = this._hass?.locale?.language;
    const zone = this._dateOptions();
    const size = ({small: 39, medium: 58, large: 80})[c.clock_size] || 58;
    const date = new Intl.DateTimeFormat(locale, { ...zone, dateStyle: "full" }).format(now);
    let face;
    const musicClock = c.card_type === "clock-music";
    if (!musicClock && c.clock_style === "analog") {
      const parts = new Intl.DateTimeFormat("en-GB", { ...zone, hour: "numeric", minute: "numeric",
        second: "numeric", hourCycle: "h23" }).formatToParts(now);
      const part = (type) => Number(parts.find((item) => item.type === type)?.value) || 0;
      const hand = (angle, length, width) => `<line x1="50" y1="50" x2="50" y2="${50-length}" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" transform="rotate(${angle} 50 50)"/>`;
      const step = c.analog_options?.ticks === "minute" ? 6 : 30;
      const ticks = c.analog_options?.ticks === "none" ? "" : Array.from({length: 360 / step}, (_, i) =>
        `<line x1="50" y1="7" x2="50" y2="${i * step % 30 ? 9 : 12}" stroke="currentColor" transform="rotate(${i * step} 50 50)"/>`).join("");
      face = `<svg class="analog" style="--clock-size:${size*2}px" viewBox="0 0 100 100" aria-label="${ucpEscape(`${part("hour")}:${String(part("minute")).padStart(2,"0")}`)}" role="img">
        ${c.analog_options?.border === false ? "" : '<circle cx="50" cy="50" r="47" fill="none" stroke="currentColor"/>'}${ticks}
        ${hand(part("hour")*30 + part("minute")/2, 23, 4)}${hand(part("minute")*6, 34, 2.5)}${c.show_seconds ? hand(part("second")*6, 40, 1) : ""}
        <circle cx="50" cy="50" r="3" fill="currentColor"/></svg>`;
    } else {
      const preference = c.time_format || this._hass?.locale?.time_format;
      const format = preference === "12" || preference === "24" ? { hour12: preference === "12" } : {};
      const timeFormat = new Intl.DateTimeFormat(locale, { ...zone, ...format, hour: "2-digit", minute: "2-digit",
        ...(c.show_seconds ? { second: "2-digit" } : {}) });
      const time = c.show_seconds ? timeFormat.formatToParts(now).map((part, index, parts) => {
        if (part.type === "literal" && parts[index - 1]?.type === "minute" && parts[index + 1]?.type === "second") return "";
        const value = ucpEscape(part.value);
        return part.type === "second" ? '<span class="clock-seconds">' + value + '</span>' : value;
      }).join("") : ucpEscape(timeFormat.format(now));
      const timeFontSize = ucpNum(c.clock_time_font_size);
      face = `<div class="clock${musicClock ? " music-clock-time" : ""}"${timeFontSize > 0 ? ` style="font-size:${timeFontSize}px"` : ""}>${time}</div>`;
    }
    const dateFontSize = ucpNum(c.clock_date_font_size);
    const dateMarkup = `<div class="muted music-clock-date"${dateFontSize > 0 ? ` style="font-size:${dateFontSize}px"` : ""}>${ucpEscape(date)}</div>`;
    if (!musicClock) return `<div class="center">${face}${dateMarkup}</div>${this._stats()}`;
    const music = this._clockMusic();
    const track = music?.media_title;
    const artist = music?.media_artist || music?.media_album_artist;
    const bars = c.clock_music_visualizer !== false
      ? '<div class="music-clock-bars" aria-hidden="true">' + (music ? Array.from({ length: 48 }, (_, index) =>
        `<i style="--bar-mix:${100 - index * 100 / 47}%;--bar-height:${38 + (index * 31 % 43) + 19 * Math.sin(index / 47 * Math.PI)}%;--bar-peak:${.76 + (index * 7 % 10) / 38};--bar-speed:${870 + (index * 17 % 5) * 47}ms;--bar-phase:-${Math.floor(index / 4) * 28 + index * 11 % 39}ms"></i>`).join("") : "") + "</div>"
      : "";
    const metadata = `<div class="music-clock-track"${track || artist ? "" : ' aria-hidden="true"'}><strong>${ucpEscape(track)}</strong><span>${ucpEscape(artist)}</span></div>`;
    const vAlign = ["center", "bottom"].includes(c.clock_vertical_align) ? c.clock_vertical_align : "top";
    return `<div class="music-clock-body v-${vAlign}"><div class="center">${dateMarkup}${face}</div>${this._stats()}</div><div class="music-clock-footer">${metadata}${bars}</div>`;
  }

  _available() {
    return !!this._state && !["unknown", "unavailable"].includes(this._state.state);
  }

  _status() {
    const c = this._config;
    const toggle = c.card_type === "switch";
    const pending = toggle && this._switchPending;
    const on = this._state?.state === "on";
    const icon = this._icon(toggle ? "mdi:power" : "mdi:information-outline");
    const button = ucpAction(toggle ? "toggle" : "info", icon,
      toggle ? pending?.show ? "Switching …" : on ? "Turn off" : "Turn on" : "More information",
      toggle ? !!pending || !this._available() : !this._state, `orb${on ? " on" : ""}`);
    const changed = c.show_last_changed && this._state?.last_changed ? new Date(this._state.last_changed) : null;
    const attr = c.card_type === "state" && typeof c.state_attribute === "string" ? c.state_attribute.trim() : "";
    const stateValue = ucpValue(pending?.show ? "Switching …" : attr && this._state ? this._attributeText(this._state, attr, c.state_date_format) : this._stateText());
    const stateText = c.hide_main_icon
      ? `<button type="button" class="state-btn" data-tap="state" aria-label="${toggle ? "Toggle" : "More information"}"${(toggle ? pending || !this._available() : !this._state) ? " disabled" : ""}>${stateValue}</button>` : stateValue;
    return `<div class="center status${c.vertical ? " stacked" : ""}">${c.hide_main_icon ? "" : button}
      ${c.hide_state ? "" : `<div>${stateText}${changed && !Number.isNaN(+changed)
        ? `<div class="muted">${ucpEscape(changed.toLocaleString(this._hass?.locale?.language))}</div>` : ""}</div>`}</div>${this._stats()}`;
  }

  // WashData: zugehörige Entitäten werden über den Gerätenamen (friendly_name-Präfix) und die Rollenbezeichnung gefunden
  _wd() {
    const c = this._config;
    const states = this._hass?.states ?? {};
    const key = [c.entity, Object.keys(states).length, ["wd_program", "wd_remaining", "wd_progress", "wd_power", "wd_phase", "wd_select"].map((k) => c[k] || "").join("|")].join("#");
    if (this._wdCache?.key === key) return this._wdCache.map;
    const main = states[c.entity];
    const roles = {
      state: ["sensor", /^(zustand|state)$/], program: ["sensor", /^(programm|program)$/],
      remaining: ["sensor", /^(verbleibende zeit|time remaining)$/], total: ["sensor", /^(gesamtdauer|total duration)$/],
      elapsed: ["sensor", /^(verstrichene zeit|elapsed time)$/], progress: ["sensor", /^(fortschritt|progress)$/],
      phase: ["sensor", /^(aktuelle phase|current phase)$/], power: ["sensor", /^(aktuelle leistung|current power)$/],
      cycles: ["sensor", /^(zyklusanzahl|cycle count)$/], energyTotal: ["sensor", /^(energie gesamt|energy total)$/],
      lastDuration: ["sensor", /^(dauer des letzten zyklus|last cycle duration)$/], lastEnergy: ["sensor", /^(energie des letzten zyklus|last cycle energy)$/],
      lastCost: ["sensor", /^(kosten des letzten zyklus|last cycle cost)$/], suggestions: ["sensor", /^(empfohlene einstellungen|suggested settings)/],
      running: ["binary_sensor", /^(läuft|running)$/], maintenance: ["binary_sensor", /^(wartung fällig|maintenance due)$/],
      select: ["select", /^(zyklusprogramm|cycle program)$/],
      pause: ["button", /(pausieren|pause cycle)$/], resume: ["button", /(fortsetzen|resume cycle)$/],
      end: ["button", /(zyklusende erzwingen|force end cycle)$/], unload: ["button", /(entladen|unloaded|geleert)/],
    };
    const map = { profiles: [] };
    const name = String(main?.attributes?.friendly_name ?? "").replace(/\s+/g, " ").trim().toLowerCase();
    const prefix = name.replace(/\s+(zustand|state)$/, "");
    if (main) map.state = c.entity;
    const best = {};
    if (prefix) for (const [id, state] of Object.entries(states)) {
      const friendly = String(state.attributes?.friendly_name ?? "").replace(/\s+/g, " ").trim().toLowerCase();
      if (!friendly.startsWith(prefix + " ")) continue;
      const tail = friendly.slice(prefix.length + 1);
      const domain = ucpDomain(id);
      const profile = domain === "sensor" && tail.match(/^(?:profil|profile)\s+(.+?)\s+(?:anzahl|count)$/);
      if (profile) { map.profiles.push({ id, label: state.attributes.friendly_name.replace(/\s+/g, " ").slice(prefix.length + 1).replace(/^(profil|profile)\s+/i, "").replace(/\s+(anzahl|count)$/i, "") }); continue; }
      for (const [role, [roleDomain, pattern]] of Object.entries(roles)) {
        if (role === "state" || domain !== roleDomain || !pattern.test(tail)) continue;
        const score = (state.attributes.unit_of_measurement ? 1 : 0) + (role === "energyTotal" && state.attributes.state_class === "total_increasing" ? 2 : 0);
        if (!(role in best) || score > best[role]) { best[role] = score; map[role] = id; }
      }
    }
    for (const [role, option] of [["program", "wd_program"], ["remaining", "wd_remaining"], ["progress", "wd_progress"], ["power", "wd_power"], ["phase", "wd_phase"], ["select", "wd_select"]]) {
      if (c[option] && states[c[option]]) map[role] = c[option];
    }
    map.profiles.sort((a, b) => (ucpNum(states[b.id]?.state) ?? 0) - (ucpNum(states[a.id]?.state) ?? 0));
    this._wdCache = { key, map };
    return map;
  }

  _wdMinutes(value) {
    if (value == null || !Number.isFinite(value)) return null;
    const total = Math.max(0, Math.round(value));
    return total >= 60 ? `${Math.floor(total / 60)} h ${String(total % 60).padStart(2, "0")} ${ucpT("min.")}` : `${total} ${ucpT("min.")}`;
  }

  _washdata() {
    const c = this._config;
    const map = this._wd();
    const states = this._hass?.states ?? {};
    const st = (role) => states[map[role]];
    const live = (role) => { const s = st(role); return s && !["unknown", "unavailable", ""].includes(s.state) ? s : null; };
    const num = (role) => ucpNum(live(role)?.state);
    const names = { off: "Off", idle: "Ready", starting: "Starting", running: "Running", paused: "Paused", user_paused: "Paused by user",
      ending: "Ending", finished: "Finished", anti_wrinkle: "Anti-crease", interrupted: "Interrupted", force_stopped: "Canceled",
      clean: "Unloading", delay_wait: "Delayed start", unknown: "Unknown" };
    const raw = this._state?.state ?? "unknown";
    const available = this._available();
    const text = raw in names ? names[raw] : this._stateText();
    const active = ["starting", "running", "paused", "user_paused", "ending", "interrupted"].includes(raw);
    const program = live("program")?.state;
    const guess = this._attrs.current_program_guess;
    const programText = [program, guess].find((value) => value && !["off", "none", "unknown", "unavailable"].includes(String(value).toLowerCase()));
    const phase = live("phase")?.state;
    const sub = raw === "paused" ? this._attrs.sub_state : null;
    const subtitle = [programText, phase && phase !== "unknown" ? phase : null, sub && !["Off", "off"].includes(sub) ? sub : null].filter(Boolean).join(" · ");
    const progress = num("progress");
    const remaining = num("remaining");
    const level = progress == null ? 0 : nbClamp(progress, 0, 100);
    const bar = (active || level > 0) && progress != null
      ? `<div class="wd-progress"><div class="wd-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(level)}"><span style="--level:${level}%"></span></div>
        <div class="wd-meta"><span>${ucpEscape(this._number(level, 0))} %</span><span>${remaining != null ? ucpEscape(ucpT("Remaining") + " " + this._wdMinutes(remaining)) : ""}</span></div></div>` : "";
    // Bedienelemente: nur vorhandene Entitäten, passend zum Zustand
    let actions = "";
    if (c.wd_show_controls !== false) {
      const select = st("select");
      const options = Array.isArray(select?.attributes?.options) ? select.attributes.options : [];
      const optionText = (option) => option === "auto_detect" ? "Detect automatically" : option;
      const selectMarkup = options.length
        ? `<select class="wd-select" data-action="wd-program" aria-label="Select program"${select.state === "unavailable" ? " disabled" : ""}>${options.map((option) =>
          `<option value="${ucpEscape(option)}"${option === select.state ? " selected" : ""}>${ucpEscape(optionText(option))}</option>`).join("")}</select>` : "";
      const press = (role, label, icon) => map[role] && states[map[role]]?.state !== "unavailable"
        ? `<button type="button" class="wd-btn" data-action="wd-press" data-value="${role}" title="${label}">${ucpIcon(icon)}<span>${label}</span></button>` : "";
      const buttons = [
        raw === "running" ? press("pause", "Pause cycle", "mdi:pause") : "",
        ["paused", "user_paused"].includes(raw) ? press("resume", "Resume", "mdi:play") : "",
        raw === "clean" ? press("unload", "Confirm unloading", "mdi:check") : "",
        active || raw === "ending" ? press("end", "Force end of cycle", "mdi:stop-circle-outline") : "",
      ].join("");
      if (selectMarkup || buttons) actions = `<div class="wd-actions">${selectMarkup}${buttons}</div>`;
    }
    // Programmübersicht aus den Profil-Sensoren
    let profiles = "";
    if (c.wd_show_profiles !== false && map.profiles.length) {
      profiles = `<div class="wd-profiles">${map.profiles.map(({ id, label }) => {
        const s = states[id];
        const a = s?.attributes ?? {};
        const parts = [`${ucpEscape(s?.state ?? "—")}×`, a.average_length_min != null ? "Ø " + ucpEscape(this._wdMinutes(Number(a.average_length_min))) : "",
          a.average_consumption_kwh != null ? "Ø " + ucpEscape(this._number(Number(a.average_consumption_kwh), 2)) + " kWh" : ""].filter(Boolean);
        return `<div class="wd-prof"><span>${ucpEscape(label)}</span><span>${parts.join(" · ")}</span></div>`;
      }).join("")}</div>`;
    }
    const withUnit = (role, digits, fallback = "") => { const s = live(role); const v = ucpNum(s?.state); return v == null ? null : `${this._number(v, digits)} ${s.attributes.unit_of_measurement ?? fallback}`.trim(); };
    const seconds = num("elapsed");
    const lastDuration = num("lastDuration");
    const lastEnergy = num("lastEnergy");
    const lastCost = live("lastCost");
    const due = states[map.maintenance]?.state === "on"
      ? (Array.isArray(states[map.maintenance].attributes.due_tasks) ? states[map.maintenance].attributes.due_tasks.map((task) => task?.name ?? task?.id) : states[map.maintenance].attributes.due_task_ids ?? []).filter(Boolean).join(", ") || "Due" : null;
    const suggestions = ucpNum(st("suggestions")?.state);
    const stats = this._stats([
      ["Power", withUnit("power", 1, "W"), "mdi:flash"],
      ["Remaining time", this._wdMinutes(remaining), "mdi:timer-sand"],
      ["Total duration", this._wdMinutes(num("total")), "mdi:timer-check-outline"],
      ["Elapsed", seconds == null ? null : this._wdMinutes(seconds / 60), "mdi:timer-outline"],
      ["Phase", phase && phase !== "unknown" ? phase : null, "mdi:water-sync"],
      ["Cycles", num("cycles") == null ? null : this._number(num("cycles"), 0), "mdi:counter"],
      ["Total energy", withUnit("energyTotal", 2, "kWh"), "mdi:lightning-bolt"],
      ["Projected energy", st("progress")?.attributes?.projected_energy_kwh == null ? null : `${this._number(Number(st("progress").attributes.projected_energy_kwh), 2)} kWh`, "mdi:lightning-bolt-outline"],
      ["Last cycle", lastDuration == null && lastEnergy == null ? null : [lastDuration == null ? null : this._wdMinutes(lastDuration), lastEnergy == null ? null : `${this._number(lastEnergy, 2)} kWh`].filter(Boolean).join(" · "), "mdi:history"],
      ["Last cycle energy", lastEnergy == null ? null : `${this._number(lastEnergy, 2)} kWh`, "mdi:lightning-bolt-outline"],
      ["Last cycle cost", lastCost && ucpNum(lastCost.state) != null ? `${this._number(ucpNum(lastCost.state), 2)} ${lastCost.attributes.unit_of_measurement ?? ""}`.trim() : null, "mdi:cash"],
      ["Maintenance", due, "mdi:wrench-clock"],
      ["Recommendations", suggestions > 0 ? String(suggestions) : null, "mdi:lightbulb-on-outline"],
    ]);
    return `<div class="center wd">
      ${c.hide_state ? "" : `<div class="wd-head"><button type="button" class="state-btn" data-tap="state" aria-label="Status"${this._state ? "" : " disabled"}>${ucpValue(available ? text : "Unavailable")}</button>${subtitle ? `<div class="muted">${ucpEscape(subtitle)}</div>` : ""}</div>`}
      ${bar}${actions}${profiles}</div>${stats}`;
  }

  async _wdAct(action, raw) {
    const map = this._wd();
    const hass = this._hass;
    try {
      if (action === "wd-program" && map.select && raw) await hass.callService("select", "select_option", { entity_id: map.select, option: raw });
      else if (action === "wd-press" && map[raw]?.startsWith("button.")) await hass.callService("button", "press", { entity_id: map[raw] });
    } catch (error) {
      this._feedback = error?.message || "Action failed.";
      this._render();
    }
  }

  // Pi-hole: Entitäten werden über das friendly_name-Präfix und die Rollenbezeichnung (deutsch/englisch) gefunden
  _ph() {
    const c = this._config;
    const states = this._hass?.states ?? {};
    const key = c.entity + "#" + Object.keys(states).length;
    if (this._phCache?.key === key) return this._phCache.map;
    const roles = [
      ["cached", "sensor", /(cached|zwischengespeichert|cache)/], ["forwarded", "sensor", /(forwarded|weitergeleitet)/],
      ["domains", "sensor", /(domains blocked|domains on blocklist|blockierte domains|domains.*(blockliste|gesperrt)|domains_blocked)/],
      ["uniqueDomains", "sensor", /(unique domains|eindeutige (dns-)?domains|dns_unique_domains)/],
      ["uniqueClients", "sensor", /(unique clients|eindeutige (dns-)?clients|dns_unique_clients)/],
      ["seenClients", "sensor", /(seen clients|gesehene clients|clients gesehen|seen_clients)/],
      ["percent", "sensor", /(percentage|prozent|anteil|%)/],
      ["queries", "sensor", /(dns queries|dns-anfragen|dns-abfragen|anfragen|abfragen|queries)/],
      ["blocked", "sensor", /(ads blocked|blockierte anzeigen|blockierte|blockiert|werbung|ads_blocked)/],
      ["status", "binary_sensor", /(status|zustand)/],
    ];
    const test = (role, domain, text) => roles.find(([r, d, p]) => d === domain && p.test(text))?.[0] === role;
    const main = states[c.entity];
    const clean = (value) => String(value ?? "").replace(/\s+/g, " ").trim().toLowerCase();
    const name = clean(main?.attributes?.friendly_name);
    let prefix = name;
    if (ucpDomain(c.entity ?? "") !== "switch") {
      const words = name.split(" ");
      prefix = words[0];
      for (let n = 1; n <= Math.min(5, words.length - 1); n++) {
        const tail = words.slice(-n).join(" ");
        if (roles.some(([, , p]) => p.test(tail))) { prefix = words.slice(0, -n).join(" "); break; }
      }
    }
    const map = {};
    if (main) map[ucpDomain(c.entity) === "binary_sensor" ? "status" : ucpDomain(c.entity) === "switch" ? "switch" : "main"] = c.entity;
    for (const [id, state] of Object.entries(states)) {
      const friendly = clean(state.attributes?.friendly_name);
      const domain = ucpDomain(id);
      if (!prefix || !(friendly === prefix || friendly.startsWith(prefix + " "))) continue;
      const tail = friendly.slice(prefix.length).trim();
      if (domain === "switch" && !tail) { map.switch ??= id; continue; }
      if (domain === "update") { (map.updates ??= []).push(id); continue; }
      if (domain === "binary_sensor" && roles.find(([r]) => r === "status")[2].test(tail)) { map.status ??= id; continue; }
      if (domain === "sensor") {
        const role = roles.find(([, d, p]) => d === "sensor" && p.test(tail))?.[0];
        if (role === "percent" && state.attributes.unit_of_measurement !== "%" && !/(blocked|blockiert)/.test(tail)) continue;
        const resolved = role === "percent" || role === "queries" || role === "blocked" ? role : role;
        if (resolved && !(resolved in map)) map[resolved] = id;
      }
    }
    this._phCache = { key, map };
    return map;
  }

  // DWD-Wetterwarnungen: Sensoren der Integration „Deutscher Wetterdienst (DWD) Weather Warnings"
  _dwdWarnings(state, kind) {
    const a = state?.attributes ?? {};
    const colors = { 1: "#ffeb3b", 2: "#ffa726", 3: "#ef5350", 4: "#b71c1c" };
    const list = [];
    const count = Math.max(Number(a.warning_count) || 0, 0);
    for (let i = 1; i <= (a.warning_count == null ? 40 : Math.min(count, 40)); i++) {
      if (a["warning_" + i + "_level"] == null && a["warning_" + i + "_name"] == null && a["warning_" + i + "_headline"] == null) { if (a.warning_count == null) break; continue; }
      const level = Math.min(Math.max(Number(a["warning_" + i + "_level"]) || 0, 0), 4);
      const color = /^#[0-9a-f]{6}$/i.test(String(a["warning_" + i + "_color"] ?? "")) ? a["warning_" + i + "_color"] : colors[level] ?? "#9e9e9e";
      list.push({ id: kind + i, level, color, name: a["warning_" + i + "_name"], headline: a["warning_" + i + "_headline"],
        start: a["warning_" + i + "_start"], end: a["warning_" + i + "_end"], description: a["warning_" + i + "_description"],
        instruction: a["warning_" + i + "_instruction"] });
    }
    return list.sort((x, y) => y.level - x.level);
  }

  // Heller Karten-Hintergrund (dunkle Schrift): helle Tageslicht-Farben
  _hmTheme() {
    const card = this._body.querySelector("ha-card.hm-card");
    if (!card) return;
    const m = /rgba?\((\d+)[ ,]+(\d+)[ ,]+(\d+)/.exec(getComputedStyle(card).color || "");
    card.classList.toggle("hm-light", !!m && (0.299 * m[1] + 0.587 * m[2] + 0.114 * m[3]) < 140);
  }

  // Tagesaktivität (BirdNET): Zeilen (Name) x 24 Stunden aus einem Attribut {Name: [24 Werte]}, Zellfarbe nach Anzahl
  _heatmap() {
    const c = this._config;
    const raw = this._attrs[c.hm_attribute || "stunden"];
    const period = this._energyPeriod();
    const todayStart = new Date().setHours(0, 0, 0, 0);
    const includesToday = !period || (period.selectedEnd ?? Infinity) >= todayStart;
    const live = includesToday && raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
    const map = {};
    for (const source of [live, this._hmPast?.map ?? {}]) for (const [name, values] of Object.entries(source)) {
      const sum = map[name] ??= Array(24).fill(0);
      if (Array.isArray(values)) for (let i = 0; i < 24; i++) sum[i] += Number(values[i]) || 0;
    }
    const lang = this._hass?.locale?.language;
    let rows = Object.entries(map).map(([name, v]) => {
      const a = Array.from({ length: 24 }, (_, i) => Math.max(0, Number(Array.isArray(v) ? v[i] : 0) || 0));
      return { name, a, total: a.reduce((x, y) => x + y, 0) };
    }).filter((r) => r.total > 0);
    rows.sort(c.hm_sort === "name" ? (a, b) => a.name.localeCompare(b.name, lang) : (a, b) => b.total - a.total || a.name.localeCompare(b.name, lang));
    rows = rows.slice(0, Math.max(1, Number(c.hm_max_rows) || 10));
    if (!rows.length) return `<div class="al-empty">${ucpEscape(c.hm_empty_text || ucpT("No data yet"))}</div>`;
    const max = Math.max(1, ...rows.flatMap((r) => r.a));
    const level = (n) => n <= 0 ? 0 : Math.max(1, Math.ceil(n / max * 8));
    const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
    // Tageslicht aus der Sonnen-Entität: Aufgangs-/Untergangsstunde, dazwischen Tag, davor/danach Dämmerung und Nacht
    const sun = c.hm_show_daylight !== false ? this._hass?.states?.[c.hm_sun_entity || "sun.sun"] : null;
    const hourOf = (v) => { const d = v ? new Date(v) : null; return d && !Number.isNaN(+d) ? d.getHours() : null; };
    const rise = hourOf(sun?.attributes?.next_rising), set = hourOf(sun?.attributes?.next_setting);
    let daylight = "";
    if (rise != null && set != null && set > rise) {
      const cells = hours.map((h, i) => {
        let kind = "night", extra = "";
        if (i === rise) kind = "rise"; else if (i === set) kind = "set";
        else if (i > rise && i < set) { kind = "day"; extra = `--dl:${Math.sin(Math.PI * (i - rise) / (set - rise)).toFixed(2)}`; }
        else if (i >= rise - 2 && i < rise) kind = "dawn"; else if (i > set && i <= set + 2) kind = "dusk";
        const icon = kind === "rise" ? "mdi:weather-sunset-up" : kind === "set" ? "mdi:weather-sunset-down" : "";
        return `<span class="hm-d hm-${kind}" style="${extra}" title="${ucpEscape(h + ":00")}">${icon ? `<ha-icon icon="${icon}"></ha-icon>` : ""}</span>`;
      }).join("");
      daylight = `<span class="hm-name hm-dl-label">${ucpEscape(ucpT("Daylight"))}</span>${cells}`;
    }
    const head = `<span></span>${hours.map((h, i) => `<span class="hm-hh${i % 3 ? " hm-x" : ""}">${h}</span>`).join("")}`;
    const img = (name) => c.hm_image_url ? `<img class="hm-img" src="${ucpEscape(String(c.hm_image_url).replace("{name}", encodeURIComponent(name)))}" alt="" loading="lazy" onerror="this.remove()">` : "";
    const body = rows.map((r) => `<span class="hm-name" title="${ucpEscape(r.name)}">${img(r.name)}<span class="hm-nt">${ucpEscape(r.name)}</span></span>${r.a.map((n, i) =>
      `<span class="hm-c" style="--lv:${level(n)}" title="${ucpEscape(`${r.name}: ` + ucpT(n === 1 ? "{n} detection at {h}:00" : "{n} detections at {h}:00").replace("{n}", n).replace("{h}", hours[i]))}">${n > 0 && c.hm_show_values !== false ? `<b class="hm-v">${n}</b>` : ""}</span>`).join("")}`).join("");
    const legend = c.hm_show_legend === false ? "" : `<div class="hm-legend"><span>${ucpEscape(ucpT("Less"))}</span>${Array.from({ length: 9 }, (_, i) => `<i style="--lv:${i}"></i>`).join("")}<span>${ucpEscape(ucpT("More"))}</span></div>`;
    const sub = c.hm_subtitle ? `<div class="hm-sub">${ucpEscape(ucpT(c.hm_subtitle))}</div>` : "";
    return `<div class="hm">${sub}<div class="hm-grid">${daylight}${head}${body}</div>${legend}</div>`;
  }

  // Zeitraum der Karte: ohne Energie-Datumsauswahl die Gesamtstatistik, sonst Summe der Tageswerte aus der Historie
  _bnAgg() {
    const d = this._bnData();
    const period = this._energyPeriod();
    const lang = this._hass?.locale?.language;
    const todayStart = new Date().setHours(0, 0, 0, 0);
    const key = (t) => { const x = new Date(t); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`; };
    const out = { mode: "all", species: {}, part: {}, perDay: [], total: 0, log: d.log, caption: ucpT("All time"), wiss: {}, ok: d.ok };
    for (const [name, s] of Object.entries(d.species)) out.wiss[name] = s.wiss || "";
    if (!period) {
      for (const [name, s] of Object.entries(d.species)) out.species[name] = { n: +s.n || 0, sum: +s.sum || 0, max: +s.max || 0, first: +s.first || 0, last: +s.last || +s.first || 0, wiss: s.wiss || "" };
      out.part = d.part; out.total = d.total;
      for (let i = 29; i >= 0; i--) { const t = new Date(todayStart); t.setDate(t.getDate() - i); out.perDay.push({ label: key(t).slice(5), n: Number(d.days[key(t)]) || 0 }); }
      return out;
    }
    out.mode = "range";
    const endMs = Math.min(period.selectedEnd ?? Infinity, todayStart + 86400000);
    const days = [...(this._hmPast?.days ?? [])];
    if ((period.selectedEnd ?? Infinity) >= todayStart) days.push({ ts: todayStart, arten: this._attrs.arten, konf: this._attrs.konf, zeit: this._attrs.zeit });
    const perDay = new Map();
    const obj = (v) => v && typeof v === "object" && !Array.isArray(v) ? v : {};
    for (const day of days) {
      let n = 0;
      for (const [name, k] of Object.entries(obj(day.arten))) {
        const sp = out.species[name] ??= { n: 0, sum: 0, max: 0, first: +d.species[name]?.first || 0, last: 0, wiss: d.species[name]?.wiss || "" };
        sp.n += +k || 0; n += +k || 0;
        const o = obj(day.konf)[name];
        if (Array.isArray(o)) { sp.sum += +o[0] || 0; sp.max = Math.max(sp.max, +o[1] || 0); sp.last = Math.max(sp.last, +o[2] || 0); }
      }
      for (const [k, v] of Object.entries(obj(day.zeit))) out.part[k] = (out.part[k] || 0) + (+v || 0);
      perDay.set(key(day.ts), (perDay.get(key(day.ts)) || 0) + n);
    }
    for (const [name, sp] of Object.entries(out.species)) {
      const all = d.species[name];
      if (!all) continue;
      if (!sp.sum && +all.n) { sp.sum = (+all.sum / +all.n) * sp.n; sp.max = +all.max || 0; }
      if (!sp.last) sp.last = +all.last || +all.first || 0;
    }
    out.total = [...perDay.values()].reduce((x, y) => x + y, 0);
    const from = Math.max(period.start, todayStart - 365 * 86400000);
    for (let t = new Date(from).setHours(0, 0, 0, 0); t < endMs; t += 86400000) {
      const x = new Date(t); const k = key(x);
      out.perDay.push({ label: `${String(x.getDate()).padStart(2, "0")}.${String(x.getMonth() + 1).padStart(2, "0")}.`, n: perDay.get(k) || 0 });
    }
    out.log = d.log.filter((e) => e.ts * 1000 >= period.start && e.ts * 1000 < endMs);
    const f = (t) => new Date(t).toLocaleDateString(lang, { day: "2-digit", month: "2-digit", year: "numeric" });
    out.caption = endMs - period.start <= 86400000 ? f(period.start) : `${f(period.start)} – ${f(endMs - 1)}`;
    return out;
  }

  // BirdNET: drei Tabs (Übersicht, Analysen – Zusammenfassung, Arten – Analysen) auf Basis des Packages birdnet_auswertung
  _bnData() {
    const c = this._config;
    const obj = (v) => v && typeof v === "object" && !Array.isArray(v) ? v : {};
    const stat = this._hass?.states?.[c.bn_stats_entity || "sensor.birdnet_statistik"];
    const a = stat?.attributes ?? {};
    return { species: obj(a.arten_gesamt), log: Array.isArray(a.verlauf) ? a.verlauf : [], days: obj(a.tage), part: obj(a.tageszeit), total: Number(stat?.state) || 0, ok: !!stat };
  }

  _bnWiki(sci, name) {
    // lateinischer Name: englische Wikipedia; deutscher Artname: deutsche Wikipedia, erst „Name (Art)“, dann „Name“
    // Anfragen laufen nacheinander (Wikipedia bremst viele gleichzeitige Anfragen aus); bei Fehlern wird später erneut versucht
    const term = String(sci || name || "").trim();
    if (!term) return {};
    // Schlüssel aus Art- UND Artname: ein falscher wissenschaftlicher Name einer anderen Art darf kein fremdes Bild liefern
    const key = `${sci ? String(sci).trim() : ""}|${String(name || "").trim()}`;
    const hl = String(this._hass?.locale?.language || this._hass?.language || "en").split("-")[0].toLowerCase();
    const norm = (t) => String(t ?? "").toLowerCase().replace(/\s*\(.*?\)\s*$/, "").trim();
    const hit = UCP_BN_IMG.get(key);
    if (hit?.img) return hit;
    const st = UCP_BN_STATE.get(key) || { n: 0, at: 0, busy: false };
    if (st.busy || st.n >= 6 || Date.now() < st.at) return {};
    st.busy = true;
    UCP_BN_STATE.set(key, st);
    // Deutsche Artnamen: Seite über den wissenschaftlichen Namen (Weiterleitung) nur akzeptieren, wenn ihr Titel zum Artnamen passt; sonst über den Artnamen suchen
    const byName = name ? [["de", `${String(name).trim()} (Art)`], ["de", String(name).trim()]] : [];
    const cands = sci ? (hl === "de" && name ? [["de", term, true], ...byName] : [["en", term]]) : byName;
    const next = async (i, transient) => {
      if (i >= cands.length) return { res: null, transient };
      const [lg, t, check] = cands[i];
      try {
        const r = await fetch(`https://${lg}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.replace(/ /g, "_"))}`);
        if (r.ok) {
          const j = await r.json();
          const img = j?.thumbnail?.source;
          if (j?.type !== "disambiguation" && img && String(img).startsWith("https://") && (!check || norm(j?.title) === norm(name))) return { res: { img, page: j?.content_urls?.desktop?.page } };
        } else if (r.status === 429 || r.status >= 500) transient = true;
      } catch { transient = true; }
      return next(i + 1, transient);
    };
    ucpBnQueue(() => next(0, false)).then(({ res, transient }) => {
      st.busy = false;
      if (!res) {
        // Kein Bild gefunden: endgültig; Fehler/Begrenzung: später erneut (4 s, 8 s, 16 s …)
        st.n = transient ? st.n + 1 : 99;
        if (transient) { st.at = Date.now() + Math.min(60000, 4000 * 2 ** st.n); setTimeout(() => { if (this.isConnected) this._render(); }, st.at - Date.now() + 50); }
        return;
      }
      UCP_BN_IMG.set(key, res);
      try { localStorage.setItem("ucp-bn-img-v3", JSON.stringify(Object.fromEntries([...UCP_BN_IMG].filter(([, v]) => v?.img)))); } catch { /* ohne Speicher weiter */ }
      this._render();
    });
    return {};
  }

  _bnPic(name, sci) {
    const c = this._config;
    const wiki = c.bn_wiki_images !== false ? this._bnWiki(sci, name) : {};
    const url = c.bn_image_url ? String(c.bn_image_url).replace("{name}", encodeURIComponent(name)).replace("{sci}", encodeURIComponent(sci || name)) : wiki.img || "";
    const term = String(sci || name).trim().replace(/ /g, "_");
    const hl = String(this._hass?.locale?.language || this._hass?.language || "en").split("-")[0].toLowerCase();
    const guess = `https://${sci ? (/^[a-z]{2,3}$/.test(hl) ? hl : "en") : "de"}.wikipedia.org/wiki/${encodeURIComponent(term)}`;
    // Link: die tatsächlich gefundene Seite (passt zum Bild); ohne Treffer bei deutscher Oberfläche über den Artnamen, sonst über den wissenschaftlichen Namen
    const nameGuess = `https://de.wikipedia.org/wiki/${encodeURIComponent(String(name).trim().replace(/ /g, "_"))}`;
    const page = /^https:\/\/[a-z]{2,3}\.wikipedia\.org\//.test(wiki.page || "") ? wiki.page : sci && hl !== "de" ? guess : nameGuess;
    return `<a class="bn-pic" href="${ucpEscape(page)}" target="_blank" rel="noopener noreferrer" data-bn-link title="${ucpEscape(name)} – Wikipedia"><span class="bn-ph">${ucpEscape(String(name).charAt(0).toUpperCase())}</span>${url ? `<img src="${ucpEscape(url)}" alt="" loading="lazy" onerror="this.remove()">` : ""}</a>`;
  }

  _birdnet() {
    const c = this._config;
    const lang = this._hass?.locale?.language;
    const tab = [0, 1, 2].includes(this._bnTab) ? this._bnTab : Math.max(0, ["overview", "analysis", "species"].indexOf(c.bn_default_tab));
    const d = this._bnAgg();
    const fmtDate = (ts, time = true) => new Date(ts * 1000).toLocaleString(lang, time ? { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" } : { day: "2-digit", month: "2-digit", year: "numeric" });
    const colors = ["#7aa7f7", "#6fd1b0", "#f6c66f", "#f08fc0", "#b79cf0", "#f2927c", "#8fd35f", "#5fc9e0", "#e6b0e0", "#b3b3b3"];
    const kpi = (label, value, sub = "") => `<div class="bn-kpi"><span class="bn-kl">${ucpEscape(ucpT(label))}</span><b>${ucpEscape(String(value))}</b>${sub ? `<span class="bn-ks">${ucpEscape(sub)}</span>` : ""}</div>`;
    const names = Object.keys(d.species).filter((n) => d.species[n].n > 0);
    const sumN = names.reduce((s, n) => s + (Number(d.species[n].n) || 0), 0);
    const sumC = names.reduce((s, n) => s + (Number(d.species[n].sum) || 0), 0);
    const sumNC = names.reduce((s, n) => s + (Number(d.species[n].sum) ? Number(d.species[n].n) || 0 : 0), 0);
    const avg = sumNC ? (sumC / sumNC).toFixed(1).replace(".", lang?.startsWith("de") ? "," : ".") + " %" : "–";
    const tabs = ["Overview", "Analysis summary", "Species analysis"];
    const bar = `<div class="bn-tabs" role="tablist">${tabs.map((t, i) => `<button type="button" role="tab" class="bn-tab${i === tab ? " on" : ""}" aria-selected="${i === tab}" data-bn-tab="${i}">${ucpEscape(ucpT(t))}</button>`).join("")}</div>`;
    const head = (title, sub) => `<div class="bn-h"><b>${ucpEscape(ucpT(title))}</b>${sub ? `<span>${ucpEscape(ucpT(sub))}</span>` : ""}</div>`;
    const today0 = new Date().setHours(0, 0, 0, 0) / 1000;
    let pane = "";
    if (!d.ok && tab !== 0) return `<div class="bn">${bar}<div class="al-empty">${ucpEscape(ucpT("No data yet"))}</div></div>`;
    if (tab === 0) {
      const last = d.log[0];
      const heard = last && Date.now() / 1000 - last.ts < 60;
      const todayMap = this._attrs.arten && typeof this._attrs.arten === "object" ? this._attrs.arten : {};
      const maxToday = {};
      for (const e of d.log) if (e.ts >= today0) maxToday[e.art] = Math.max(maxToday[e.art] ?? 0, Number(e.konf) || 0);
      const konfToday = this._attrs.konf && typeof this._attrs.konf === "object" ? this._attrs.konf : {};
      for (const [n, o] of Object.entries(konfToday)) if (Array.isArray(o) && +o[1]) maxToday[n] = Math.max(maxToday[n] ?? 0, +o[1]);
      for (const n of Object.keys(todayMap)) if (!maxToday[n] && +d.species[n]?.max) maxToday[n] = +d.species[n].max;
      const cards = Object.entries(todayMap).sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0], lang)).map(([n, k]) => {
        const s = d.species[n], isNew = s && s.first >= today0;
        return `<div class="bn-sp"><span class="bn-spl">${this._bnPic(n, s?.wiss)}<span class="bn-spn"><span class="bn-nm"><b>${ucpEscape(n)}</b>${isNew ? `<ha-icon icon="mdi:star" class="bn-star"></ha-icon>` : ""}</span><small>${ucpEscape(ucpT(k === 1 ? "{n} detection" : "{n} detections").replace("{n}", k))}</small></span></span>${maxToday[n] ? `<span class="bn-badge">${ucpEscape(ucpT("Max."))} ${Math.round(maxToday[n])} %</span>` : ""}</div>`;
      }).join("");
      pane = `${head("Daily activity", "")}${this._heatmap()}
        <div class="bn-sec">${head("Just heard", "Species are identified in real time")}${heard ? `<div class="bn-sp bn-live">${this._bnPic(last.art, last.wiss)}<span class="bn-spn"><b>${ucpEscape(last.art)}</b><small>${ucpEscape(Math.round(last.konf) + " %")}</small></span></div>` : `<div class="bn-quiet">${ucpEscape(ucpT("All quiet – no birds detected right now"))}</div>`}</div>
        <div class="bn-sec">${head("New and returning species", "First detections and recently returned species")}${cards ? `<div class="bn-grid">${cards}</div>` : `<div class="bn-quiet">${ucpEscape(ucpT("No data yet"))}</div>`}</div>`;
    } else if (tab === 1) {
      const top = names.map((n) => [n, Number(d.species[n].n) || 0]).sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0], lang)).slice(0, 10);
      const topMax = Math.max(1, ...top.map((t) => t[1]));
      const partKeys = [["nacht", "Night"], ["morgen", "Morning"], ["tag", "Day"], ["abend", "Evening"]];
      const partMax = Math.max(1, ...partKeys.map(([k]) => Number(d.part[k]) || 0));
      const vals = d.perDay.map((p) => p.n);
      const vMax = Math.max(1, ...vals);
      const W = 600, H = 120, px = (i) => 10 + i * (W - 20) / Math.max(1, vals.length - 1), py = (v) => H - 8 - v / vMax * (H - 20);
      const trend = `<svg class="bn-trend" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img"><polyline fill="none" stroke="var(--hm-c)" stroke-width="2" vector-effect="non-scaling-stroke" points="${vals.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ")}"/>${vals.map((v, i) => v ? `<circle cx="${px(i).toFixed(1)}" cy="${py(v).toFixed(1)}" r="3" fill="var(--hm-c)"/>` : "").join("")}</svg><div class="bn-axis"><span>${ucpEscape(d.perDay[0]?.label ?? "")}</span><span>${ucpEscape(d.perDay.at(-1)?.label ?? "")}</span></div>`;
      const rows = d.log.slice(0, 8).map((e) => {
        const h = new Date(e.ts * 1000).getHours();
        const p = h >= 5 && h < 11 ? "Morning" : h >= 11 && h < 17 ? "Day" : h >= 17 && h < 21 ? "Evening" : "Night";
        const col = e.konf >= 85 ? "#2fb86a" : e.konf >= 75 ? "#f0a030" : "#e0603a";
        return `<tr><td>${ucpEscape(fmtDate(e.ts))}</td><td><span class="bn-spl">${this._bnPic(e.art, e.wiss)}<span class="bn-spn"><b>${ucpEscape(e.art)}</b><small>${ucpEscape(e.wiss || "")}</small></span></span></td><td><span class="bn-cbar"><i style="width:${Math.min(100, Math.round(e.konf))}%;background:${col}"></i></span> ${ucpEscape(String(e.konf).replace(".", lang?.startsWith("de") ? "," : "."))} %</td><td>${ucpEscape(ucpT(p))}</td></tr>`;
      }).join("");
      pane = `<div class="bn-kpis">${kpi("Total detections", d.total)}${kpi("Unique species", names.length)}${kpi("Average confidence", avg)}${kpi("Most frequent", top[0]?.[0] ?? "–", top[0] ? ucpT("{n} detections").replace("{n}", top[0][1]) : "")}</div>
        <div class="bn-two"><div class="bn-box">${head("Top 10 species", "")}${top.map(([n, k], i) => `<div class="bn-bar"><span class="bn-bl">${ucpEscape(n)}</span><i style="width:${Math.max(3, k / topMax * 100)}%;background:${colors[i % colors.length]}"></i><em>${k}</em></div>`).join("") || `<div class="bn-quiet">${ucpEscape(ucpT("No data yet"))}</div>`}</div>
        <div class="bn-box">${head("Detections by time of day", "")}<div class="bn-cols">${partKeys.map(([k, l], i) => `<div class="bn-col"><em>${Number(d.part[k]) || 0}</em><i style="height:${Math.max(2, (Number(d.part[k]) || 0) / partMax * 100)}%;background:${colors[i * 2 % colors.length]}"></i><span>${ucpEscape(ucpT(l))}</span></div>`).join("")}</div></div></div>
        <div class="bn-box">${head("Detection trend", "")}${trend}</div>
        <div class="bn-box">${head("Recent detections", "")}${rows ? `<table class="bn-tbl"><thead><tr><th>${ucpEscape(ucpT("Date and time"))}</th><th>${ucpEscape(ucpT("Species"))}</th><th>${ucpEscape(ucpT("Confidence"))}</th><th>${ucpEscape(ucpT("Time of day"))}</th></tr></thead><tbody>${rows}</tbody></table>` : `<div class="bn-quiet">${ucpEscape(ucpT("No data yet"))}</div>`}</div>`;
    } else {
      const q = String(this._bnQuery ?? "").trim().toLowerCase();
      const sort = this._bnSort || "count";
      const view = this._bnView === "list" ? "list" : "grid";
      let list = names.map((name) => ({ name, ...d.species[name] })).filter((s) => !q || s.name.toLowerCase().includes(q) || String(s.wiss ?? "").toLowerCase().includes(q));
      const avgOf = (x) => x.n ? x.sum / x.n : 0;
      const by = { count: (x, y) => y.n - x.n, fewest: (x, y) => x.n - y.n, name: (x, y) => x.name.localeCompare(y.name, lang), namez: (x, y) => y.name.localeCompare(x.name, lang),
        firstnew: (x, y) => y.first - x.first, firstold: (x, y) => x.first - y.first, lastnew: (x, y) => y.last - x.last, lastold: (x, y) => x.last - y.last,
        conf: (x, y) => avgOf(y) - avgOf(x), confl: (x, y) => avgOf(x) - avgOf(y), max: (x, y) => y.max - x.max, maxl: (x, y) => x.max - y.max };
      list.sort((x, y) => (by[sort] ?? by.count)(x, y) || x.name.localeCompare(y.name, lang));
      const dec = (v) => v.toFixed(1).replace(".", lang?.startsWith("de") ? "," : ".");
      const cards = list.map((s) => `<div class="bn-art">${this._bnPic(s.name, s.wiss)}<div class="bn-ai"><b>${ucpEscape(s.name)}</b><small>${ucpEscape(s.wiss || "")}</small>
        <dl><dt>${ucpEscape(ucpT("Detections"))}</dt><dd>${s.n}</dd><dt>${ucpEscape(ucpT("Confidence"))}</dt><dd>${s.sum ? dec(s.sum / s.n) + " %" : "–"}</dd><dt>${ucpEscape(ucpT("First"))}</dt><dd>${s.first ? ucpEscape(fmtDate(s.first, false)) : "–"}</dd><dt>${ucpEscape(ucpT("Last"))}</dt><dd>${s.last ? ucpEscape(fmtDate(s.last, false)) : "–"}</dd></dl></div></div>`).join("");
      pane = `<div class="bn-kpis bn-kpis2">${kpi("Species total", names.length, ucpT("{n} detections").replace("{n}", sumN))}${kpi("Average confidence", avg, ucpT("Overall average"))}</div>
        <div class="bn-box">${head("Filter data", "")}<div class="bn-filter"><label>${ucpEscape(ucpT("Sort by"))}<select class="bn-sel" data-bn-sort>${[["count", "Most detections"], ["fewest", "Fewest detections"], ["name", "Name (A–Z)"], ["namez", "Name (Z–A)"], ["firstnew", "Recently first seen"], ["firstold", "Earliest first seen"], ["lastnew", "Recently last seen"], ["lastold", "Earliest last seen"], ["conf", "Highest confidence"], ["confl", "Lowest confidence"], ["max", "Highest max. confidence"], ["maxl", "Lowest max. confidence"]].map(([k, l]) => `<option value="${k}"${k === sort ? " selected" : ""}>${ucpEscape(ucpT(l))}</option>`).join("")}</select></label>
        <label class="bn-q">${ucpEscape(ucpT("Search species"))}<input type="search" data-bn-q value="${ucpEscape(this._bnQuery ?? "")}" placeholder="${ucpEscape(ucpT("Search by name…"))}"></label>
        <span class="bn-views"><button type="button" class="${view === "grid" ? "on" : ""}" data-bn-view="grid" aria-label="${ucpEscape(ucpT("Tiles"))}"><ha-icon icon="mdi:view-grid"></ha-icon></button><button type="button" class="${view === "list" ? "on" : ""}" data-bn-view="list" aria-label="${ucpEscape(ucpT("List"))}"><ha-icon icon="mdi:view-list"></ha-icon></button></span></div></div>
        <div class="bn-box">${head("Species list", "")}${cards ? `<div class="bn-arts ${view === "list" ? "bn-list" : ""}">${cards}</div>` : `<div class="bn-quiet">${ucpEscape(ucpT("No data yet"))}</div>`}</div>`;
    }
    return `<div class="bn">${bar}${tab ? `<div class="bn-range"><ha-icon icon="mdi:calendar"></ha-icon>${ucpEscape(d.caption)}</div>` : ""}${pane}</div>`;
  }

  // Aktive Entitäten: nach Gruppen (Lampen, Fenster …) sortierte Liste dessen, was gerade an/offen ist
  _alGroups() {
    const c = this._config, hass = this._hass;
    const states = hass?.states ?? {};
    const exclude = new Set((c.al_exclude ?? []).map(ucpId));
    const wanted = new Set(Array.isArray(c.al_groups) ? c.al_groups : []);
    const ids = new Set([...(Array.isArray(c.entities) ? c.entities.map(ucpId).filter(Boolean) : [])]);
    const explicit = new Set(ids);
    if (wanted.size) for (const id of Object.keys(states)) {
      for (const key of wanted) if (UCP_AL_GROUPS[key]?.member(id, states[id])) { ids.add(id); break; }
    }
    const groups = new Map();
    for (const id of ids) {
      const state = states[id];
      if (!state || exclude.has(id)) continue;
      let key = Object.keys(UCP_AL_GROUPS).find((k) => (explicit.has(id) || wanted.has(k)) && UCP_AL_GROUPS[k].member(id, state));
      if (!key) { if (!["on", "open", "opening", "playing", "unlocked", "home"].includes(state.state)) continue; key = "other"; }
      else if (!UCP_AL_GROUPS[key].active(state)) continue;
      if (!groups.has(key)) groups.set(key, []);
      { const a = this._alArea(id); groups.get(key).push({ id, name: state.attributes.friendly_name ?? id, area: a.name, areaId: a.id, areaIcon: a.icon }); }
    }
    const order = [...Object.keys(UCP_AL_GROUPS), "other"];
    return order.filter((k) => groups.has(k)).map((k) => ({ key: k,
      def: UCP_AL_GROUPS[k] ?? { label: "Active", icon: "mdi:circle-medium", color: "#8a8f98" },
      items: groups.get(k).sort((a, b) => a.name.localeCompare(b.name, this._hass?.locale?.language)) }));
  }

  _alArea(id) {
    const h = this._hass;
    const entity = h?.entities?.[id];
    const areaId = entity?.area_id ?? h?.devices?.[entity?.device_id]?.area_id;
    const area = areaId && h?.areas?.[areaId];
    return { id: area ? areaId : "", name: area?.name || "", icon: area?.icon || "mdi:home-outline" };
  }

  _activeList() {
    const c = this._config;
    const groups = this._alGroups();
    if (!groups.length) return `<div class="al-empty">${ucpEscape(c.al_empty_text || ucpT("Nothing active"))}</div>`;
    const compact = c.al_layout === "compact";
    const minimal = c.al_layout === "minimal";
    if (c.al_layout === "ticker") {
      // Laufschrift: je Gruppe ein Satz mit Anzahl, danach die aktiven Entitäten als Chips (wie in der Kompakt-Ansicht), von rechts nach links
      const custom = String(c.al_ticker_text ?? "").trim();
      const part = ({ def, items }) => {
        const n = items.length;
        const text = (custom || ucpT(n === 1 ? def.tickerOne ?? "The following entity is active:" : def.ticker ?? "The following {n} entities are active:")).replace("{label}", ucpT(def.label));
        // Die Anzahl wird wie die Geräte als Chip dargestellt (nicht anklickbar)
        const [pre, ...rest] = text.split("{n}");
        const count = rest.length ? `<span class="al-chip al-tk-n">${n}</span><span class="al-tk-text">${ucpEscape(rest.join(String(n)))}</span>` : "";
        const chips = items.map((it) => `<button type="button" class="al-chip" data-al="${ucpEscape(it.id)}" title="${ucpEscape(it.name)}">${ucpEscape(c.al_chip_label === "area" && it.area ? it.area : it.name)}</button>`).join("");
        return `<span class="al-tk-text">${ucpEscape(pre)}</span>${count}<span class="al-tk-chips">${chips}</span>`;
      };
      return `<div class="al al-ticker${c.al_ticker_always === false ? " al-tk-static" : ""}"><div class="al-tk-view"><div class="al-tk-track">${groups.map(part).join('<span class="al-tk-gap"></span>')}</div></div></div>`;
    }
    const rooms = (items) => {
      const map = new Map();
      for (const it of items) { if (!map.has(it.areaId)) map.set(it.areaId, { areaId: it.areaId, name: it.area || ucpT("No area"), icon: it.areaIcon, n: 0 }); map.get(it.areaId).n++; }
      return [...map.values()].sort((a, b) => (a.areaId === "") - (b.areaId === "") || a.name.localeCompare(b.name, this._hass?.locale?.language));
    };
    if (minimal) return `<div class="al al-minimal">${groups.map(({ key, def, items }) => `<section class="al-group">
      <div class="al-head" title="${ucpEscape(ucpT(def.label))}"><ha-icon icon="${ucpEscape(def.icon)}"></ha-icon>${c.al_group_names ? `<span>${ucpEscape(ucpT(def.label))}</span>` : ""}</div>
      <div class="al-tiles">${rooms(items).map((r) => `<button type="button" class="al-tile" data-al-room="${ucpEscape(key + "|" + r.areaId)}" title="${ucpEscape(r.name)}"><ha-icon icon="${ucpEscape(r.icon)}"></ha-icon><b>${r.n}</b>${c.al_tile_names ? `<span class="al-tile-name">${ucpEscape(r.name)}</span>` : ""}</button>`).join("")}</div>
    </section>`).join("")}</div>`;
    return `<div class="al${compact ? " al-compact" : ""}">${groups.map(({ def, items }) => `<section class="al-group">
      <div class="al-head"><ha-icon icon="${ucpEscape(def.icon)}"></ha-icon><span>${ucpEscape(ucpT(def.label))}</span><b class="al-count">${items.length}</b></div>
      ${compact ? `<div class="al-chips">${items.map((it) => `<button type="button" class="al-chip" data-al="${ucpEscape(it.id)}" title="${ucpEscape(it.name)}">${ucpEscape(c.al_chip_label === "area" && it.area ? it.area : it.name)}</button>`).join("")}</div>`
      : items.map((it) => `<button type="button" class="al-row" data-al="${ucpEscape(it.id)}"><ha-state-icon data-state-icon="${ucpEscape(it.id)}" aria-hidden="true"></ha-state-icon><span class="al-name">${ucpEscape(it.name)}</span>${c.al_show_area !== false && it.area ? `<span class="al-area">${ucpEscape(it.area)}</span>` : ""}</button>`).join("")}
    </section>`).join("")}</div>`;
  }

  // Updates: Liste der update.*-Entitäten mit verfügbarem Update (nur lesen; Tippen öffnet die Details der Entität)
  _updates() {
    const c = this._config, hass = this._hass, states = hass?.states ?? {};
    // Quellen: Auswahl im Dropdown; ohne Eintrag (leere Liste) alle update.*-Entitäten; ältere Konfiguration mit up_platform wird weiter gelesen
    const sources = (Array.isArray(c.up_sources) ? c.up_sources : c.up_platform ? [c.up_platform] : ["marketplace"]).map((x) => String(x).trim().toLowerCase()).filter(Boolean);
    const exclude = new Set((c.up_exclude ?? []).map(ucpId));
    const manual = Array.isArray(c.entities) ? c.entities.map(ucpId).filter(Boolean) : [];
    // Spalten der Kopfzeile: links Supervisor (Integration hassio), rechts Marketplace; Farben je Quelle einstellbar
    const safe = (value, fallback) => { const v = ucpColorValue(value); return v && /^[^;"<>{}]+$/.test(v) ? v : fallback; };
    const defs = { hassio: { label: "Supervisor", color: safe(c.up_color_supervisor, "#41bdf5") }, marketplace: { label: "Marketplace", color: safe(c.up_color_marketplace, "#f0a030") } };
    const cols = Object.keys(defs).filter((k) => !sources.length || sources.includes(k));
    const ids = manual.length ? manual : Object.keys(states).filter((id) => ucpDomain(id) === "update");
    const rows = [];
    let unavailable = 0;
    for (const id of ids) {
      const state = states[id];
      if (!state || exclude.has(id) || ucpDomain(id) !== "update") continue;
      const platform = String(hass?.entities?.[id]?.platform ?? "").toLowerCase();
      if (!manual.length && sources.length && !sources.includes(platform)) continue;
      if (state.state === "unavailable" || state.state === "unknown") { unavailable++; continue; }
      const pending = state.state === "on";
      if (!pending && !c.up_show_all) continue;
      const a = state.attributes ?? {};
      rows.push({ id, pending, platform, busy: !!a.in_progress, from: a.installed_version, to: a.latest_version,
        name: String(a.friendly_name ?? a.title ?? id).replace(/\s+(Update|Aktualisierung)$/i, "") });
    }
    rows.sort((x, y) => (y.pending - x.pending) || x.name.localeCompare(y.name, hass?.locale?.language));
    const showVersions = c.up_show_versions !== false;
    // Chips und Versionen nutzen dieselben Elemente wie die Zusatzinformationen der State-Karte (dl.stats / div.stat mit dt und dd), damit jeder Style sein eigenes Aussehen liefert
    const stat = (label, value, extra = "") => `<div class="stat" style="--detail-align:center${extra}">${label ? `<dt>${ucpEscape(ucpT(label))}</dt>` : ""}<dd>${ucpEscape(value)}</dd></div>`;
    const version = (r) => {
      if (r.busy) return `<dl class="stats up-vers">${stat("", ucpT("Installing…"))}</dl>`;
      if (!showVersions || !(r.from || r.to)) return "";
      return `<dl class="stats up-vers">${r.pending && r.from && r.to ? stat("Installed", r.from) + stat("Latest", r.to) : stat(r.from || !r.pending ? "Installed" : "Latest", r.from ?? r.to)}</dl>`;
    };
    const col = (label, n, color) => stat(label, String(n), `${color ? `;--stat-fg:${color}` : ""}${n ? "" : ";opacity:.6"}`);
    const head = cols.length ? cols.map((k) => col(defs[k].label, rows.filter((r) => r.pending && r.platform === k).length, defs[k].color)).join("")
      : col("", rows.filter((r) => r.pending).length, "");
    const open = !!this._upOpen && rows.length > 0;
    const toggle = rows.length ? `<button type="button" class="up-toggle" data-up-toggle aria-expanded="${open}" aria-label="${ucpEscape(ucpT(open ? "Hide list" : "Show list"))}" title="${ucpEscape(ucpT(open ? "Hide list" : "Show list"))}"><ha-icon icon="${open ? "mdi:chevron-up" : "mdi:chevron-down"}"></ha-icon></button>` : "";
    return `<div class="up"><dl class="stats up-stats">${head}</dl>${toggle}${(open ? rows : []).map((r) =>
      `<div class="up-row${r.pending ? "" : " up-ok"}" role="button" tabindex="0" data-up="${ucpEscape(r.id)}"${defs[r.platform] ? ` style="--up-c:${defs[r.platform].color}"` : ""}><ha-state-icon data-state-icon="${ucpEscape(r.id)}" aria-hidden="true"></ha-state-icon><span class="up-name">${ucpEscape(r.name)}</span>${version(r)}</div>`).join("")}${unavailable ? `<div class="up-note">${ucpEscape(ucpT("{n} not available").replace("{n}", unavailable))}</div>` : ""}</div>`;
  }

  // Laufschrift: Dauer des Durchlaufs aus der Breite berechnen, damit die Geschwindigkeit (px pro Sekunde) immer gleich bleibt
  _alTickerFit() {
    if (this._config?.al_layout !== "ticker") return;
    if (!this._alRO && typeof ResizeObserver !== "undefined") { this._alRO = new ResizeObserver(() => this._alTickerFit()); this._alRO.observe(this._body); }
    const root = this._body?.querySelector(".al-ticker");
    const view = root?.querySelector(".al-tk-view"), track = root?.querySelector(".al-tk-track");
    if (!view || !track) return;
    // Auch auf Größenänderungen des Inhalts reagieren (Schriften laden nach, Entitäten ändern sich)
    if (this._alRO && this._alROTrack !== track) { this._alRO.disconnect(); this._alRO.observe(this._body); this._alRO.observe(track); this._alROTrack = track; }
    if (!this._alFonts && document.fonts?.ready) { this._alFonts = true; document.fonts.ready.then(() => this._alTickerFit()); }
    // Breite des Inhalts ohne den Anlauf-Abstand (Summe der Teile plus Lücken); die Ansicht ist die Kartenbreite abzüglich 2 x 2 %
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const parts = [...track.children];
    const content = parts.reduce((sum, el) => sum + el.offsetWidth, 0) + gap * Math.max(0, parts.length - 1);
    const room = view.clientWidth;
    if (!(room > 0) || !(content > 0)) return;
    // Immer an (Standard) oder Text zu breit: laufen; sonst stehen lassen
    root.classList.toggle("al-tk-static", this._config.al_ticker_always === false && content <= room);
    track.style.setProperty("--al-dur", ((room + content) / nbClamp(ucpNum(this._config.al_ticker_speed) ?? 60, 10, 400)).toFixed(1) + "s");
  }

  // Raum-Dialog der Minimal-Ansicht: Geräte dieses Raums in der Gruppe, bei Lampen/Schaltern mit "Alle ausschalten"
  _alRoomPopup(ref) {
    this._closePopup();
    const [groupKey, areaId = ""] = String(ref).split("|");
    const dialog = document.createElement("dialog");
    dialog.className = "mp-panel ucp-popup";
    dialog.style.width = "min(420px,92vw)";
    const head = document.createElement("div");
    head.className = "mp-panel-head";
    const title = document.createElement("span");
    title.className = "mp-panel-title";
    const close = document.createElement("button");
    close.type = "button"; close.className = "round sm"; close.innerHTML = ucpIcon("mdi:close");
    close.setAttribute("aria-label", ucpT("Close")); close.title = ucpT("Close");
    head.append(title, close);
    const body = document.createElement("div");
    body.className = "al al-pop";
    body.style.cssText = "overflow:auto;min-height:0";
    dialog.append(head, body);
    const popup = this._popup = { dialog, cards: [] };
    const draw = () => {
      const group = this._alGroups().find((g) => g.key === groupKey);
      const items = (group?.items ?? []).filter((it) => it.areaId === areaId);
      if (!items.length) { dialog.close(); return; }
      title.textContent = `${items[0].area || ucpT("No area")} · ${ucpT(group.def.label)}`;
      const all = group.def.toggle ? `<button type="button" class="al-all" data-al-all="${ucpEscape(items.map((i) => i.id).join(","))}">${ucpEscape(ucpT(group.def.toggle ? "Turn all off" : ""))}</button>` : "";
      const markup = `<div class="al-group">${items.map((it) => `<button type="button" class="al-row" data-al="${ucpEscape(it.id)}"><ha-state-icon data-state-icon="${ucpEscape(it.id)}" aria-hidden="true"></ha-state-icon><span class="al-name">${ucpEscape(it.name)}</span></button>`).join("")}</div>${all}`;
      if (markup === popup.markup) return;
      popup.markup = markup;
      body.innerHTML = markup;
      this._bindStateIcons(body);
    };
    popup.refresh = draw;
    body.addEventListener("click", (event) => {
      const all = event.target.closest?.("[data-al-all]");
      if (all) { this._hass.callService("homeassistant", "turn_off", { entity_id: all.dataset.alAll.split(",") }); return; }
      const row = event.target.closest?.("[data-al]");
      if (row) this._alTap(row.dataset.al);
    });
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => { if (this._popup === popup) this._popup = null; dialog.remove(); });
    this.shadowRoot.append(dialog);
    if (dialog.showModal) dialog.showModal(); else dialog.setAttribute("open", "");
    draw();
  }

  _alTap(id) {
    const mode = this._config.al_tap ?? "auto";
    if (mode === "none" || !this._hass) return;
    const toggle = mode === "auto" && ["light", "switch", "input_boolean", "fan"].includes(ucpDomain(id));
    if (toggle) this._hass.callService("homeassistant", "toggle", { entity_id: id });
    else this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: id }, bubbles: true, composed: true }));
  }

  _dwd(entityId = this._config.entity) {
    const c = this._config;
    const states = this._hass?.states ?? {};
    const mainState = entityId === c.entity ? this._state : states[entityId];
    const a = mainState?.attributes ?? {};
    const colors = { 0: "var(--u-good)", 1: "#ffeb3b", 2: "#ffa726", 3: "#ef5350", 4: "#b71c1c" };
    const names = { 0: "No warning", 1: "Weather warning", 2: "Significant weather warning", 3: "Severe weather warning", 4: "Extreme weather warning" };
    const advanceId = c.dwd_advance_entity || String(entityId).replace(/aktuelle_warnstufe$/i, "vorwarnstufe").replace(/current_warning_level$/i, "advance_warning_level");
    const advanceState = c.dwd_show_advance === false || advanceId === entityId ? null : states[advanceId];
    const current = this._dwdWarnings(mainState, "c");
    const advance = this._dwdWarnings(advanceState, "a");
    const max = Math.max(1, Math.round(Number(c.dwd_max_items)) || 5);
    const level = Math.min(Math.max(Number(mainState?.state) || current[0]?.level || 0, 0), 4);
    const options = { ...this._dateOptions() };
    const locale = this._hass?.locale?.language;
    const day = new Intl.DateTimeFormat(locale, { ...options, weekday: "short", day: "2-digit", month: "2-digit" });
    const time = new Intl.DateTimeFormat(locale, { ...options, hour: "2-digit", minute: "2-digit" });
    const when = (start, end) => {
      const from = new Date(start), to = new Date(end);
      const valid = (date) => !Number.isNaN(+date);
      const label = (date) => `${day.format(date)} ${time.format(date)}`;
      if (valid(from) && valid(to)) return day.format(from) === day.format(to) ? `${label(from)} – ${time.format(to)}` : `${label(from)} – ${label(to)}`;
      return valid(from) ? `${ucpT("from")} ${label(from)}` : valid(to) ? `${ucpT("until")} ${label(to)}` : "";
    };
    const open = this._dwdOpen ?? new Set();
    const vertical = c.dwd_layout === "vertical";
    const overlay = typeof HTMLElement.prototype.showPopover === "function";
    const item = (w) => {
      const expanded = c.dwd_expand_all || open.has(w.id);
      const details = w.description || w.instruction;
      const text = ucpEscape(w.headline || w.name || names[w.level]);
      const range = when(w.start, w.end);
      const line = (html) => vertical ? `<span class="dwd-line"><span class="dwd-line-in">${html}</span></span>` : html;
      // Aufgeklappte Beschreibung als Popover (oberste Ebene): überdeckt darunterliegende Karten, statt sie zu verschieben
      const popover = overlay && !c.dwd_expand_all;
      return `<div class="dwd-item${expanded ? " open" : ""}" style="--lvl:${w.color};--lvl-text:${w.level === 1 ? "#3a3200" : "#fff"}">
        <button type="button" class="dwd-head" data-action="dwd-toggle" data-value="${ucpEscape(w.id)}" aria-expanded="${expanded}"${c.dwd_expand_all ? " disabled" : ""}>
          <span class="dwd-badge">${w.level}</span>
          <span class="dwd-text">${line(`<strong>${text}</strong>`)}${range ? line(`<span class="muted">${ucpEscape(range)}</span>`) : ""}</span>
          ${details && !c.dwd_expand_all ? `<span class="dwd-chevron">${ucpIcon(expanded ? "mdi:chevron-up" : "mdi:chevron-down")}</span>` : ""}
        </button>
        ${expanded && details ? `<div class="dwd-details${popover ? " dwd-pop" : ""}"${popover ? " popover=\"manual\"" : ""}>${w.description ? `<p>${ucpEscape(w.description)}</p>` : ""}${w.instruction ? `<p class="dwd-instruction">${ucpEscape(w.instruction)}</p>` : ""}</div>` : ""}</div>`;
    };
    const section = (title, list) => list.length ? `<div class="dwd-section">${title ? `<div class="dwd-title muted">${ucpEscape(title)}</div>` : ""}${list.slice(0, max).map(item).join("")}
      ${list.length > max ? `<div class="muted dwd-more">+ ${list.length - max} ${ucpT("more")}</div>` : ""}</div>` : "";
    const updated = a.last_update ? new Date(a.last_update) : null;
    const region = c.dwd_hide_region ? "" : ucpEscape(a.region_name ?? "");
    const head = `<div class="dwd-summary${level ? "" : " dwd-none"}" style="--lvl:${colors[level]};--lvl-text:${level === 1 ? "#3a3200" : "#fff"}">
      <span class="dwd-level">${ucpIcon(level ? "mdi:alert" : "mdi:check-circle-outline")}</span>
      <span class="dwd-text">${vertical ? `<span class="dwd-line"><span class="dwd-line-in"><strong>${ucpEscape(names[level])}</strong></span></span>` : `<strong>${ucpEscape(names[level])}</strong>`}${region ? vertical ? `<span class="dwd-line"><span class="dwd-line-in muted">${region}</span></span>` : `<span class="muted">${region}</span>` : ""}</span></div>`;
    const empty = "";
    const foot = !c.dwd_hide_updated && updated && !Number.isNaN(+updated)
      ? `<div class="muted dwd-updated">${ucpT("Updated:")} ${ucpEscape(day.format(updated))} ${ucpEscape(time.format(updated))}</div>` : "";
    return `<div class="dwd${vertical ? " dwd-v" : ""}">${head}${section("", current)}${empty}${section(advance.length ? "Advance information" : "", advance)}${foot}</div>`;
  }

  // Energy Power Flow: Energie-/Leistungsfluss des Hauses als SVG (Netz, PV, Speicher, Verbraucher, E-Auto um den Wechselrichter)
  // Animationen nach jedem Neuaufbau auf dieselbe Zeitbasis legen, damit Schein und Punkte gleichmäßig und im selben Takt laufen
  // Die Karte wird 1:1 in Pixeln gezeichnet (Schrift, Rahmen, Linien skalieren nicht); nur die Abstände zwischen den Spalten passen sich der Kartenbreite an
  _pfFit() {
    const svg = this._body?.querySelector("svg.pf");
    const w = svg ? Math.round(svg.getBoundingClientRect().width) : 0;
    if (w > 0 && w !== this._pfW) { this._pfW = w; this._pfCache = null; this._render(); }
  }

  _pfAfterRender() {
    if (!this._pfRO && typeof ResizeObserver !== "undefined") { this._pfRO = new ResizeObserver(() => this._pfFit()); this._pfRO.observe(this._body); }
    this._pfFit();
    for (const el of this._body.querySelectorAll(".pf-glow.anim, .pf-dots.anim")) for (const a of el.getAnimations?.() ?? []) a.startTime = 0;
    // Werte laufen weich vom alten auf den neuen Wert (immer aktiv, außer bei „Bewegung reduzieren“)
    const fmt = this._pfFmt, shown = this._pfShown ??= new Map();
    if (this._pfRaf) cancelAnimationFrame(this._pfRaf);
    this._pfRaf = 0;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const tweens = [];
    for (const el of this._body.querySelectorAll("[data-pf-k]")) {
      const key = el.dataset.pfK, to = Number(el.dataset.pfV), from = shown.get(key);
      shown.set(key, to);
      if (fmt && !reduced && from != null && from !== to && Number.isFinite(to)) { tweens.push({ el, key, from, to, suffix: el.dataset.pfS ?? "" }); el.textContent = fmt(from) + (el.dataset.pfS ?? ""); }
    }
    if (!tweens.length) return;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / 600), e = 1 - (1 - t) ** 3;
      for (const w of tweens) {
        const v = w.from + (w.to - w.from) * e;
        shown.set(w.key, v);
        if (w.el.isConnected) w.el.textContent = fmt(v) + w.suffix;
      }
      this._pfRaf = t < 1 ? requestAnimationFrame(tick) : 0;
    };
    this._pfRaf = requestAnimationFrame(tick);
  }

  _powerFlow() {
    const c = this._config;
    const states = this._hass?.states ?? {};
    const lang = this._hass?.locale?.language;
    // Nur neu berechnen, wenn sich Konfiguration oder einer der eigenen Sensorwerte geändert hat
    const ids = [];
    const collect = (v) => { if (typeof v === "string") { if (v.includes(".")) ids.push(v); } else if (Array.isArray(v)) v.forEach(collect); else if (v && typeof v === "object") Object.values(v).forEach(collect); };
    for (const key of Object.keys(c)) if (key.startsWith("pf_")) collect(c[key]);
    const sig = JSON.stringify([c, lang, ucpT("Today"), this._pfModeNow(), this._pfEVer ?? 0, this._pfW ?? 0, ids.map((id) => { const s = states[id]; return s ? [s.state, s.attributes?.unit_of_measurement] : null; })]);
    if (this._pfCache?.sig === sig) return this._pfCache.html;
    const html = this._powerFlowBuild(c, states, lang);
    this._pfCache = { sig, html };
    return html;
  }

  _powerFlowBuild(c, states, lang) {
    const fallback = c.pf_unit === "kw" ? 1000 : 1;
    // Energiemodus: Werte in Wh über den Zeitraum der Datumsauswahl (eigene Energiesensoren, Energie-Dashboard, sonst Integration der Leistung)
    const E = this._pfModeNow() === "energy" ? (this._pfE ?? { change: {}, power: {}, prefs: {} }) : null;
    const auto = !!E && !c.pf_energy_no_auto;
    const eid = (v) => (Array.isArray(v) ? v : v ? [v] : []).map(ucpId).filter(Boolean);
    const ch = (ids) => { const l = eid(ids).map((i) => E.change[i]).filter((v) => v != null); return l.length ? l.reduce((a, b) => a + b, 0) * 1000 : null; };
    const ig = (id, part = "pos") => { const p = id ? E.power[ucpId(id)] : null; return p ? (part === "neg" ? p.neg : part === "net" ? p.pos - p.neg : p.pos) * 1000 : null; };
    const igSum = (ids, part) => { const l = eid(ids).map((i) => ig(i, part)).filter((v) => v != null); return l.length ? l.reduce((a, b) => a + b, 0) : null; };
    const eRead = (eids, pid, part) => ch(eids) ?? ig(pid, part);
    const dec = Number.isFinite(Number(c.pf_decimals)) ? Math.min(3, Math.max(0, Number(c.pf_decimals))) : 1;
    // Leistung in W; die Einheit des Sensors (W, kW, MW) hat Vorrang vor der Karteneinstellung
    const read = (rawId) => {
      const id = ucpId(rawId);
      const s = id ? states[id] : null;
      const value = s ? ucpNum(s.state) : null;
      if (value == null) return null;
      const unit = s.attributes?.unit_of_measurement;
      return value * (unit === "kW" ? 1000 : unit === "MW" ? 1e6 : unit === "W" ? 1 : fallback);
    };
    const sum = (ids) => { const values = (Array.isArray(ids) ? ids : ids ? [ids] : []).map(read).filter((v) => v != null); return values.length ? values.reduce((a, b) => a + b, 0) : null; };
    const friendly = (id) => states[ucpId(id)]?.attributes?.friendly_name;
    const list = (value) => Array.isArray(value) ? value.filter((item) => item && typeof item === "object") : [];
    const pos = (v) => Math.max(0, v ?? 0);
    const fmt = (watts) => {
      if (watts == null) return "—";
      const abs = Math.abs(watts);
      return abs >= 1000 ? (abs / 1000).toLocaleString(lang, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (E ? " kWh" : " kW") : Math.round(abs).toLocaleString(lang) + (E ? " Wh" : " W");
    };
    // Paar „↓ rein ↑ raus“ mit gemeinsamer Einheit (kompakt für kleine Boxen)
    const pair = (a, b) => { const big = Math.max(Math.abs(a ?? 0), Math.abs(b ?? 0)) >= 1000, n = (v) => big ? ((v ?? 0) / 1000).toLocaleString(lang, { minimumFractionDigits: dec, maximumFractionDigits: dec }) : Math.round(v ?? 0).toLocaleString(lang); return `↓${n(a)} ↑${n(b)} ${big ? "kWh" : "Wh"}`; };
    this._pfFmt = fmt;
    const cut = (text, max = 15) => { const t = String(text ?? ""); return t.length > max ? t.slice(0, max - 1) + "…" : t; };
    const colors = { solar: "var(--energy-solar-color, #ff9800)", grid: "var(--energy-grid-consumption-color, #488fc2)", battery: "var(--energy-battery-out-color, #4db6ac)",
      load: "var(--primary-color, #03a9f4)", car: "var(--energy-non-fossil-color, #0f9d58)", home: "var(--primary-color, #03a9f4)" };
    const soc = (id) => { const v = id ? ucpNum(states[ucpId(id)]?.state) : null; return v == null ? null : Math.max(0, Math.min(100, v)); };
    const batteryNode = (name, icon, color, raw, invert, socId, bmsId, chargeId, dischargeId, chargeEId, dischargeEId, autoBat, rawId) => {
      if (E) {
        let chE = eRead(chargeEId, chargeId), dcE = eRead(dischargeEId, dischargeId);
        if (chE == null && dcE == null && !chargeId && !dischargeId) { const pp = ig(rawId, "pos"), nn = ig(rawId, "neg"); if (pp != null) { chE = invert ? nn : pp; dcE = invert ? pp : nn; } }
        if (chE == null && dcE == null && autoBat) { chE = ch(E.prefs.batTo); dcE = ch(E.prefs.batFrom); }
        const known = chE != null || dcE != null, net = known ? pos(chE) - pos(dcE) : null, bmsE = bmsId ? states[ucpId(bmsId)] : null;
        return { name, icon, color, raw: net, p: Math.abs(net ?? 0), dir: net > 0 ? "out" : "in", soc: soc(socId), sub: known ? pair(chE, dcE) : "", noLevel: true,
          bms: bmsE ? [bmsE.state, bmsE.attributes?.unit_of_measurement].filter(Boolean).join(" ") : "", charging: net ?? 0 };
      }
      // Getrennte Lade- und Entlade-Sensoren haben Vorrang vor einem einzelnen Sensor mit Vorzeichen
      if (chargeId || dischargeId) {
        const ch = read(chargeId), dc = read(dischargeId);
        raw = ch == null && dc == null ? null : pos(ch) - pos(dc);
        invert = false;
      }
      const charging = raw == null ? 0 : invert ? -raw : raw;
      const bms = bmsId ? states[ucpId(bmsId)] : null;
      return { name, icon, color, raw, p: Math.abs(charging), dir: charging > 0 ? "out" : "in", soc: soc(socId),
        sub: charging > 0 ? ucpT("Charging") : charging < 0 ? ucpT("Discharging") : "",
        bms: bms ? [bms.state, bms.attributes?.unit_of_measurement].filter(Boolean).join(" ") : "", charging };
    };
    const hasBat = (h) => !!(h.battery_entity || h.battery_charge_entity || h.battery_discharge_entity || h.battery_charge_energy_entity || h.battery_discharge_energy_entity || h.soc_entity || h.bms_entity);
    const autoBat = auto && list(c.pf_hubs).filter(hasBat).length + list(c.pf_batteries).length === 1;
    // Solar-Hubs: Panels -> Hub (-> Batterie) -> Wechselrichter
    const hubs = list(c.pf_hubs).map((h, i) => {
      const count = Math.min(4, Math.max(1, Math.round(Number(h.pv_inputs)) || 2));
      const panels = Array.from({ length: count }, (_, k) => {
        const raw = E ? eRead(h["pv" + (k + 1) + "_energy_entity"], h["pv" + (k + 1) + "_entity"]) : read(h["pv" + (k + 1) + "_entity"]);
        return { name: ucpT("Panel") + " " + (k + 1), icon: "mdi:solar-panel", color: colors.solar, raw, p: pos(raw), dir: "in" };
      });
      const pvSum = panels.reduce((a, n) => a + n.p, 0);
      const hasBattery = hasBat(h);
      const battery = hasBattery ? batteryNode(h.battery_name || friendly(h.battery_entity) || ucpT("Home battery"), "mdi:battery", colors.battery, read(h.battery_entity), h.battery_invert, h.soc_entity, h.bms_entity, h.battery_charge_entity, h.battery_discharge_entity, h.battery_charge_energy_entity, h.battery_discharge_energy_entity, autoBat, h.battery_entity) : null;
      const eOut = E ? eRead(h.output_energy_entity, h.output_entity) : null;
      const known = !E || eOut != null || panels.some((n) => n.raw != null);
      const out = E ? (eOut != null ? pos(eOut) : pos(pvSum - (battery?.charging ?? 0))) : h.output_entity ? pos(read(h.output_entity)) : pos(pvSum - (battery?.charging ?? 0));
      return { name: h.name || ucpT("Hub") + " " + (i + 1), icon: h.icon || "mdi:solar-power-variant", color: colors.solar, raw: !known ? null : E ? out : h.output_entity ? read(h.output_entity) : out, p: out,
        dir: "in", sub: ucpT("Output"), panels, battery, batteryPosition: h.battery_position, label: h.inverter_input ? String(h.inverter_input) : "" };
    });
    // Solaranlagen direkt am Wechselrichter
    const direct = list(c.pf_pv).map((i) => { const raw = E ? eRead(i.energy_entity, i.entity) : read(i.entity);
      return { name: i.name || friendly(i.entity) || ucpT("Solar"), icon: i.icon || "mdi:solar-power", color: i.color || colors.solar, raw, p: pos(raw), dir: "in", label: i.inverter_input ? String(i.inverter_input) : "" }; });
    // Netz, AC-Speicher, Verbraucher, E-Auto am Hausnetz
    const gridRaw = read(c.pf_grid_entity), exportRaw = read(c.pf_grid_export_entity);
    let gE = null; // Energiemodus: [Bezug, Einspeisung]
    if (E) {
      let gi = ch(c.pf_grid_in_energy_entity), go = ch(c.pf_grid_out_energy_entity);
      if (gi == null && go == null && auto) { gi = ch(E.prefs.gridFrom); go = ch(E.prefs.gridTo); }
      if (gi == null && go == null) {
        const inv = !!c.pf_grid_invert;
        if (c.pf_grid_entity) { gi = ig(c.pf_grid_entity, inv ? "neg" : "pos"); go = c.pf_grid_export_entity ? ig(c.pf_grid_export_entity) : ig(c.pf_grid_entity, inv ? "pos" : "neg"); }
        else if (c.pf_grid_export_entity) go = ig(c.pf_grid_export_entity);
      }
      if (gi != null || go != null) gE = [pos(gi), pos(go)];
    }
    const signed = E ? (gE ? gE[0] - gE[1] : null) : gridRaw == null ? null : c.pf_grid_invert ? -gridRaw : gridRaw;
    const gridIn = E ? (gE ? gE[0] : 0) : pos(signed);
    const gridOut = E ? (gE ? gE[1] : 0) : c.pf_grid_export_entity ? pos(exportRaw) : pos(signed == null ? 0 : -signed);
    const grid = c.pf_grid_entity || c.pf_grid_export_entity || c.pf_grid_in_energy_entity || c.pf_grid_out_energy_entity || (auto && (E.prefs.gridFrom?.length || E.prefs.gridTo?.length)) ? { name: c.pf_grid_name || ucpT("Power grid"), icon: "mdi:transmission-tower", color: colors.grid, raw: signed, p: E ? Math.abs(signed ?? 0) : Math.max(gridIn, gridOut),
      dir: gridOut > gridIn ? "out" : "in", glow: gridOut > gridIn ? "var(--success-color, #43a047)" : "var(--error-color, #e53935)", sub: E ? "" : gridOut > gridIn ? ucpT("Feed-in") : ucpT("Import"), ...(E ? { valueText: gE ? pair(gE[0], gE[1]) : "—" } : {}) } : null;
    const acBatteries = list(c.pf_batteries).map((i) => ({ ...batteryNode(i.name || friendly(i.entity) || ucpT("Home battery"), i.icon || "mdi:battery", i.color || colors.battery, read(i.entity), i.invert, i.soc_entity, i.bms_entity, i.charge_entity, i.discharge_entity, i.charge_energy_entity, i.discharge_energy_entity, autoBat, i.entity) }));
    // Energiemodus (automatisch): Solar, Batterien und Geräte so anzeigen, wie sie im Energie-Dashboard konfiguriert sind, sofern die Karte dafür keine eigenen Werte hat
    if (auto) {
      const hubData = (h) => h.raw != null || (h.battery && h.battery.raw != null);
      if (E.prefs.solar?.length && !direct.some((n) => n.raw != null) && !hubs.some(hubData)) {
        hubs.length = 0; direct.length = 0;
        E.prefs.solar.forEach((id, k) => { const raw = ch(id); direct.push({ name: E.prefs.solarNames?.[k] || friendly(id) || (E.prefs.solar.length > 1 ? ucpT("Solar") + " " + (k + 1) : ucpT("Solar")), icon: "mdi:solar-power", color: colors.solar, raw, p: pos(raw), dir: "in", label: "" }); });
      }
      if (!acBatteries.length && !hubs.some((h) => h.battery) && E.prefs.batList?.length) {
        E.prefs.batList.forEach((b, k) => acBatteries.push(batteryNode(b.name || (E.prefs.batList.length > 1 ? ucpT("Home battery") + " " + (k + 1) : ucpT("Home battery")), "mdi:battery", colors.battery, null, false, null, null, null, null, b.to, b.from, false, null)));
      }
    }
    const loads = list(c.pf_loads).map((i) => { const raw = E ? (ch(i.energy_entities) ?? igSum(i.entities ?? i.entity)) : sum(i.entities ?? i.entity);
      return { name: i.name || ucpT("Consumers"), icon: i.icon || "mdi:home-lightning-bolt-outline", color: i.color || colors.load, raw, p: pos(raw), dir: "out" }; });
    if (auto && !loads.length && E.prefs.devices?.length) {
      E.prefs.devices.map((d) => ({ d, raw: ch(d.id) })).filter((x) => x.raw != null).sort((x, y) => y.raw - x.raw).slice(0, 10)
        .forEach(({ d, raw }) => loads.push({ name: d.name || friendly(d.id) || d.id, icon: "mdi:flash", color: colors.load, raw, p: pos(raw), dir: "out" }));
    }
    const carRaw = E ? eRead(c.pf_car_energy_entity, c.pf_car_entity) : read(c.pf_car_entity);
    const car = c.pf_car_entity || c.pf_car_energy_entity ? { name: c.pf_car_name || friendly(c.pf_car_entity) || ucpT("Electric car"), icon: c.pf_car_icon || "mdi:car-electric", color: colors.car, raw: carRaw, p: pos(carRaw), dir: "out", soc: soc(c.pf_car_soc_entity) } : null;
    if (grid) grid.chip = true;
    loads.forEach((n) => { n.chip = true; });
    if (car) car.chip = true;
    if (!hubs.length && !direct.length && !grid && !acBatteries.length && !loads.length && !car) return `<div class="muted">${ucpEscape(ucpT("Add solar hubs, a grid sensor, batteries or consumers in the card settings."))}</div>`;
    // Wechselrichter und Hausnetz
    const inputs = [...hubs, ...direct];
    const inputSum = inputs.reduce((a, n) => a + n.p, 0);
    const inputsKnown = inputs.some((n) => n.raw != null);
    const solarAuto = auto ? ch(E.prefs.solar) : null;
    const acRaw = E ? eRead(c.pf_inverter_energy_entity, c.pf_inverter_entity) : read(c.pf_inverter_entity);
    const invP = !E ? (c.pf_inverter_entity ? pos(acRaw) : inputSum) : acRaw != null ? pos(acRaw) : !inputsKnown && solarAuto != null ? solarAuto : inputSum;
    const invKnown = !E || acRaw != null || inputsKnown || solarAuto != null;
    const inverter = { name: c.pf_inverter_name || ucpT("Inverter"), raw: invKnown ? invP : null, p: invP, icon: "mdi:current-ac", color: colors.home };
    const batIn = acBatteries.reduce((a, n) => a + (n.dir === "in" ? n.p : 0), 0), batOut = acBatteries.reduce((a, n) => a + (n.dir === "out" ? n.p : 0), 0);
    const homeOwn = E ? eRead(c.pf_home_energy_entity, c.pf_home_entity) : c.pf_home_entity ? read(c.pf_home_entity) : null;
    const homeP = (E ? homeOwn != null : c.pf_home_entity) ? pos(homeOwn) : pos(invP + gridIn + batIn - gridOut - batOut);
    const homeKnown = !E || homeOwn != null || invKnown || !!gE || acBatteries.some((n) => n.raw != null);
    const house = { name: ucpT("Home"), raw: homeKnown ? homeP : null, p: homeP, icon: "mdi:home-lightning-bolt", color: colors.home };
    // Layout (viewBox 940 breit, Höhe richtet sich nach den Inhalten)
    const neon = c.card_style === "neon";
    const metal = c.card_style === "skeuomorph";
    const fillPct = Math.min(60, Math.max(5, Number(c.pf_fill) || 36));
    const hw = Math.max(120, 64 + fmt(homeP).length * 11), iw = Math.max(150, 64 + fmt(invP).length * 11), pad = 12, pw = 118, ph = 34, pgap = 8, nw = 150, nh = 66, rh = 46, vgap = 22, ih = 84, hh = 84;
    // Spalten: nur vorhandene (Panels, Hubs/Anlagen, Wechselrichter, Haus, Verbraucher); überschüssige Breite wird gleichmäßig auf die Abstände verteilt
    const right = c.pf_show_consumers === false ? [] : car ? [...loads, car] : loads;
    const hasP = hubs.length > 0, hasH = hasP || direct.length > 0, hasL = right.length > 0;
    const cols = [["P", pw, hasP, 0], ["H", nw, hasH, 56], ["I", iw, true, 64], ["G", hw, true, 56], ["L", nw, hasL, 52]].filter((x) => x[2]);
    const Wmin = 2 * pad + cols.reduce((a, x, i) => a + x[1] + (i ? x[3] : 0), 0);
    const vertical = c.pf_layout === "vertical" || (c.pf_layout !== "horizontal" && (this._pfW || 0) > 0 && this._pfW < Wmin);
    const W = vertical ? Math.max(320, this._pfW || 0) : Math.max(Wmin, this._pfW || 0), gx = (W - Wmin) / Math.max(1, cols.length - 1);
    // Vertikal: höchstens 5 Verbraucher, der Rest wird in einer Zeile „Weitere Verbraucher“ zusammengefasst
    const mkMore = (rest) => { const vals = rest.map((n) => n.raw).filter((v) => v != null), tot = vals.reduce((a, b) => a + b, 0);
      return { name: ucpT("More consumers") + " (" + rest.length + ")", icon: "mdi:dots-horizontal", color: colors.load, raw: vals.length ? tot : null, p: pos(tot), dir: "out", chip: true }; };
    const vRight = right.length > 5 ? [...right.slice(0, 5), mkMore(right.slice(5))] : right;
    let vCons = vRight;
    const X = {};
    { let cx = pad; cols.forEach((x, i) => { if (i) cx += x[3] + gx; X[x[0]] = cx; cx += x[1]; }); }
    const xP = X.P ?? pad, xH = X.H ?? pad, xI = X.I, xG = X.G, xL = X.L ?? W - pad - nw;
    const bottom = [...acBatteries, ...(grid ? [grid] : [])];
    let H;
    const flows = [];
    const add = (d, p, color, label) => flows.push({ d, p, color, label });
    // Knickstellen einer Linienschar gestaffelt, damit parallele Linien nebeneinander statt übereinander laufen und sich nicht kreuzen (ax 1: Versatz in y, 0: in x)
    const stagger = (pairs, ax = 1) => {
      const d = (i) => pairs[i][1][ax] - pairs[i][0][ax], idx = pairs.map((_, i) => i);
      const fwd = idx.filter((i) => d(i) > 2).sort((i, j) => pairs[j][0][ax] - pairs[i][0][ax]);
      const back = idx.filter((i) => d(i) < -2).sort((i, j) => pairs[i][0][ax] - pairs[j][0][ax]);
      const order = [...fwd, ...back], t = pairs.map(() => .5);
      order.forEach((i, k) => { t[i] = order.length > 1 ? .3 + .4 * k / (order.length - 1) : .5; });
      return t;
    };
    if (vertical) {
    const cx = W / 2, panW = 2 * pw + 20, rg = 36;
    const sp = (i, n, from, size) => from + size * (i + 1) / (n + 1);
    const wOf = (n) => n === grid ? 190 : nw;
    const poly = (pts0, r = 12) => {
      const pts = pts0.filter((q, i) => !i || q[0] !== pts0[i - 1][0] || q[1] !== pts0[i - 1][1]);
      let d = `M${pts[0][0]},${pts[0][1]}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], q = pts[i], nx = pts[i + 1];
        if (!nx) { d += ` L${q[0]},${q[1]}`; break; }
        const l1 = Math.hypot(q[0] - p0[0], q[1] - p0[1]), l2 = Math.hypot(nx[0] - q[0], nx[1] - q[1]), rr = Math.min(r, l1 / 2, l2 / 2);
        d += ` L${q[0] - (q[0] - p0[0]) / l1 * rr},${q[1] - (q[1] - p0[1]) / l1 * rr} Q${q[0]},${q[1]} ${q[0] + (nx[0] - q[0]) / l2 * rr},${q[1] + (nx[1] - q[1]) / l2 * rr}`;
      }
      return d;
    };
    const wide3 = W >= 2 * pad + nw + (grid ? 190 : nw) + hw + 48;
    if (wide3) {
      // Reihe 1 Solar, Reihe 2 Wechselrichter, Reihe 3 Heimspeicher | Haus | Netz, Reihe 4 Verbraucher nebeneinander
      const gw = grid ? 190 : nw, cap = Math.max(1, Math.floor((W - 2 * pad + 10) / (nw + 10)));
      const items = [...hubs, ...direct];
      const perRow = Math.max(1, Math.min(items.length, cap));
      let y = pad;
      for (let r = 0; r * perRow < items.length; r++) {
        const row = items.slice(r * perRow, (r + 1) * perRow);
        const maxP = Math.max(0, ...row.map((n) => n.panels ? n.panels.length * ph + (n.panels.length - 1) * pgap + 28 : 0));
        const sx0 = cx - (row.length * nw + (row.length - 1) * 10) / 2;
        row.forEach((n, i) => {
          n.cx = sx0 + i * (nw + 10) + nw / 2;
          Object.assign(n, { x: n.cx - nw / 2, y: y + maxP, w: nw, h: nh });
          if (n.panels) { const pH = n.panels.length * ph + (n.panels.length - 1) * pgap; n.panels.forEach((q, k) => Object.assign(q, { x: n.cx - pw / 2, y: y + maxP - 28 - pH + k * (ph + pgap), w: pw, h: ph, compact: true })); }
        });
        y += maxP + nh + rg;
      }
      Object.assign(inverter, { x: cx - iw / 2, y, w: iw, h: ih }); y += ih + 44;
      const batts = [...hubs.map((h) => h.battery).filter(Boolean), ...acBatteries];
      const colH3 = batts.length * nh + Math.max(0, batts.length - 1) * 14, r3h = Math.max(colH3, hh, grid ? rh : 0);
      batts.forEach((b, i) => Object.assign(b, { x: pad, y: y + (r3h - colH3) / 2 + i * (nh + 14), w: nw, h: nh }));
      Object.assign(house, { x: cx - hw / 2, y: y + (r3h - hh) / 2, w: hw, h: hh });
      if (grid) Object.assign(grid, { x: W - pad - gw, y: y + (r3h - rh) / 2, w: gw, h: rh });
      y += r3h;
      const cons = right.length > cap ? [...right.slice(0, cap - 1), mkMore(right.slice(cap - 1))] : right;
      vCons = cons;
      if (cons.length) y += 44;
      const cx0 = cx - (cons.length * nw + (cons.length - 1) * 10) / 2;
      cons.forEach((n, i) => Object.assign(n, { x: cx0 + i * (nw + 10), y, w: nw, h: rh }));
      H = (cons.length ? y + rh : y) + pad;
      const ip = items.map((n, i) => [[n.cx, n.y + nh], [sp(i, items.length, inverter.x, iw), inverter.y]]), iT = stagger(ip, 0);
      items.forEach((n, i) => {
        const [a, b] = ip[i], my = a[1] + (b[1] - a[1]) * iT[i];
        add(poly([a, [a[0], my], [b[0], my], b]), n.p, n.color, null);
        const m = (n.panels || []).length;
        (n.panels || []).forEach((q, k) => { const ey = q.y + ph / 2, bx = n.cx + pw / 2 + 6 + (m - 1 - k) * 5, lv = n.y - 8 - k * 5, ex = n.cx + ((m - 1) / 2 - k) * 8;
          add(poly([[q.x + pw, ey], [bx, ey], [bx, lv], [ex, lv], [ex, n.y]]), q.p, q.color); }); });
      add(poly([[cx, inverter.y + ih], [cx, house.y]]), invP, colors.solar);
      const hp = (a, b, t = .5) => { const mx = a[0] + (b[0] - a[0]) * t; return poly([a, [mx, a[1]], [mx, b[1]], b]); };
      const bpairs = batts.map((b, i) => { const a = [b.x + nw, b.y + nh / 2], t = [house.x, sp(i, batts.length, house.y, hh)]; return b.dir === "in" ? [a, t] : [t, a]; }), btT = stagger(bpairs, 1);
      batts.forEach((b, i) => add(hp(bpairs[i][0], bpairs[i][1], btT[i]), b.p, b.color));
      if (grid) { const a = [house.x + hw, house.y + hh / 2], t = [grid.x, grid.y + rh / 2]; add(grid.dir === "in" ? hp(t, a) : hp(a, t), grid.p, grid.color); }
      const hb = house.y + hh;
      const cp = cons.map((n, i) => [[sp(i, cons.length, house.x, hw), hb], [n.x + nw / 2, n.y]]), cT = stagger(cp, 0);
      cons.forEach((n, i) => { const [a, b] = cp[i], my = a[1] + (b[1] - a[1]) * cT[i]; add(poly([a, [a[0], my], [b[0], my], b]), n.p, n.color); });
    } else {
    let y = pad;
    const railR = cx + Math.max(nw / 2, panW / 2) + 14;
    for (const hub of hubs) {
      const n = hub.panels.length, rows = Math.ceil(n / 2);
      hub.panels.forEach((p, k) => Object.assign(p, { x: n === 1 ? cx - pw / 2 : k % 2 ? cx + 10 : cx - 10 - pw, y: y + Math.floor(k / 2) * (ph + pgap), w: pw, h: ph, compact: true }));
      y += rows * ph + (rows - 1) * pgap + 28;
      Object.assign(hub, { x: cx - nw / 2, y, w: nw, h: nh }); y += nh;
      if (hub.battery) { y += 40; Object.assign(hub.battery, { x: cx - nw / 2, y, w: nw, h: nh }); y += nh; }
      y += rg;
    }
    for (const node of direct) { Object.assign(node, { x: cx - nw / 2, y, w: nw, h: nh }); y += nh + rg; }
    if (inputs.length) y += 8;
    Object.assign(inverter, { x: cx - iw / 2, y, w: iw, h: ih }); y += ih + 40;
    Object.assign(house, { x: cx - hw / 2, y, w: hw, h: hh }); y += hh + 44;
    const listV = [...bottom, ...vRight];
    listV.forEach((n) => { Object.assign(n, { x: cx - wOf(n) / 2, y, w: wOf(n), h: n.chip ? rh : nh }); y += n.h + 14; });
    H = (listV.length ? y - 14 : y - 44) + pad;
    inputs.forEach((n, k) => { const ty = sp(k, inputs.length, inverter.y, ih); add(poly([[n.x + nw, n.y + nh / 2], [railR, n.y + nh / 2], [railR, ty], [inverter.x + iw, ty]]), n.p, n.color, null); });
    for (const hub of hubs) {
      const n = hub.panels.length;
      hub.panels.forEach((p, k) => { const ey = p.y + ph / 2;
        add(poly(n === 1 ? [[cx, p.y + ph], [cx, hub.y]] : [[k % 2 ? p.x : p.x + pw, ey], [cx, ey], [cx, hub.y]]), p.p, p.color); });
      const b = hub.battery;
      if (b) add(poly(b.dir === "out" ? [[cx, hub.y + nh], [cx, b.y]] : [[cx, b.y], [cx, hub.y + nh]]), b.p, b.color);
    }
    add(poly([[cx, inverter.y + ih], [cx, house.y]]), invP, colors.solar);
    const railL = cx - Math.max(0, ...listV.map(wOf)) / 2 - 14, y0 = house.y + hh, yb = y0 + 20;
    listV.forEach((n, i) => { const sx = sp(i, listV.length, house.x, hw), ty = n.y + n.h / 2, pts = [[sx, y0], [sx, yb], [railL, yb], [railL, ty], [n.x, ty]];
      add(poly(n.dir === "in" ? pts.reverse() : pts), n.p, n.color); });
    }
    } else {
    const blocks = [];
    for (const hub of hubs) {
      const panelsH = hub.panels.length * ph + (hub.panels.length - 1) * pgap;
      const row = Math.max(panelsH, nh);
      const pos = hub.batteryPosition === "top" || (hub.batteryPosition !== "bottom" && hubs.length > 1 && hubs.indexOf(hub) < hubs.length / 2) ? "top" : "bottom";
      blocks.push({ hub, row, h: row + (hub.battery ? 40 + nh : 0), panelsH, top: !!hub.battery && pos === "top" });
    }
    for (const node of direct) blocks.push({ node, row: nh, h: nh });
    const stackH = blocks.reduce((a, b) => a + b.h, 0) + Math.max(0, blocks.length - 1) * vgap;
    const colH = (n) => n ? n * rh + (n - 1) * 14 : 0;
    const M = Math.max(stackH, colH(right.length), ih, hh);
    let y = pad + (M - stackH) / 2;
    for (const b of blocks) {
      if (b.hub) {
        const hub = b.hub;
        const off = b.top ? nh + 40 : 0;
        Object.assign(hub, { x: xH, y: y + off + (b.row - nh) / 2, w: nw, h: nh });
        hub.panels.forEach((p, k) => Object.assign(p, { x: xP, y: y + off + (b.row - b.panelsH) / 2 + k * (ph + pgap), w: pw, h: ph, compact: true }));
        if (hub.battery) Object.assign(hub.battery, { x: xH, y: b.top ? y : y + b.row + 40, w: nw, h: nh });
      } else Object.assign(b.node, { x: xH, y, w: nw, h: nh });
      y += b.h + vgap;
    }
    Object.assign(inverter, { x: xI, y: pad + (M - ih) / 2, w: iw, h: ih });
    Object.assign(house, { x: xG, y: pad + (M - hh) / 2, w: hw, h: hh });
    right.forEach((n, i) => Object.assign(n, { x: xL, y: pad + (M - colH(right.length)) / 2 + i * (rh + 14), w: nw, h: rh }));
    const widthOf = (n) => n === grid ? 190 : nw;
    const bottomW = bottom.reduce((a, n) => a + widthOf(n), 0) + Math.max(0, bottom.length - 1) * 20;
    const bottomX = Math.max(pad, Math.min((hasL ? xL - 14 : W - pad) - bottomW, xG + hw / 2 - bottomW / 2));
    let bx = bottomX;
    bottom.forEach((n) => { Object.assign(n, { x: bx, y: pad + M + 54, w: widthOf(n), h: n.chip ? rh : nh }); bx += widthOf(n) + 20; });
    H = pad * 2 + M + (bottom.length ? 54 + nh : 0);
    // Flusslinien (Pfad immer in Flussrichtung)
    const spread = (index, count, from, size) => from + size * (index + 1) / (count + 1);
    // Rechtwinklige Linien (waagerecht - senkrecht - waagerecht) mit gerundeten 90°-Ecken; t = Lage des Knicks
    const hPath = (a, b, t = .5) => {
      const dy = b[1] - a[1];
      if (Math.abs(dy) < 2) return `M${a[0]},${a[1]} L${b[0]},${b[1]}`;
      const mx = a[0] + (b[0] - a[0]) * t, sx = Math.sign(b[0] - a[0]) || 1, sy = Math.sign(dy);
      const r = Math.min(12, Math.abs(dy) / 2, Math.abs(mx - a[0]), Math.abs(b[0] - mx));
      return `M${a[0]},${a[1]} L${mx - sx * r},${a[1]} Q${mx},${a[1]} ${mx},${a[1] + sy * r} L${mx},${b[1] - sy * r} Q${mx},${b[1]} ${mx + sx * r},${b[1]} L${b[0]},${b[1]}`;
    };
    // Alle Linien einer Schar knicken an derselben Stelle, die senkrechten Stücke liegen also ohne Versatz untereinander
    const vPath = (a, b, t = .5) => {
      const dx = b[0] - a[0];
      if (Math.abs(dx) < 2) return `M${a[0]},${a[1]} L${b[0]},${b[1]}`;
      const my = a[1] + (b[1] - a[1]) * t, sx = Math.sign(dx), sy = Math.sign(b[1] - a[1]) || 1, r = Math.min(12, Math.abs(dx) / 2, Math.abs(my - a[1]));
      return `M${a[0]},${a[1]} L${a[0]},${my - sy * r} Q${a[0]},${my} ${a[0] + sx * r},${my} L${b[0] - sx * r},${my} Q${b[0]},${my} ${b[0]},${my + sy * r} L${b[0]},${b[1]}`;
    };
    const inTargets = inputs.map((n, k) => spread(k, inputs.length, inverter.y, ih));
    const inT = stagger(inputs.map((n, k) => [[n.x + nw, n.y + nh / 2], [inverter.x, inTargets[k]]]));
    inputs.forEach((n, k) => {
      const target = [inverter.x, inTargets[k]];
      add(hPath([n.x + nw, n.y + nh / 2], target, inT[k]), n.p, n.color, n.label ? { t: n.label, x: target[0] - 6, y: target[1] - 5 } : null);
    });
    for (const hub of hubs) {
      const pT = stagger(hub.panels.map((p, k) => [[p.x + pw, p.y + ph / 2], [hub.x, spread(k, hub.panels.length, hub.y, nh)]]));
      hub.panels.forEach((p, k) => add(hPath([p.x + pw, p.y + ph / 2], [hub.x, spread(k, hub.panels.length, hub.y, nh)], pT[k]), p.p, p.color));
      const b = hub.battery;
      if (b) { const above = b.y < hub.y, hubPt = [hub.x + nw / 2, above ? hub.y : hub.y + nh], batPt = [b.x + nw / 2, above ? b.y + nh : b.y]; add(vPath(...(b.dir === "out" ? [hubPt, batPt] : [batPt, hubPt])), b.p, b.color); }
    }
    add(hPath([inverter.x + iw, inverter.y + ih / 2], [house.x, house.y + hh / 2]), invP, colors.solar);
    const rT = stagger(right.map((n, i) => [[house.x + hw, spread(i, right.length, house.y, hh)], [n.x, n.y + n.h / 2]]));
    right.forEach((n, i) => add(hPath([house.x + hw, spread(i, right.length, house.y, hh)], [n.x, n.y + n.h / 2], rT[i]), n.p, n.color));
    const bp = bottom.map((n, i) => { const a = [n.x + n.w / 2, n.y], b = [spread(i, bottom.length, house.x, hw), house.y + hh]; return n.dir === "in" ? [a, b] : [b, a]; });
    const bT = stagger(bp, 0);
    bottom.forEach((n, i) => add(vPath(bp[i][0], bp[i][1], bT[i]), n.p, n.color));
    }
    const maxW = !E && Number(c.pf_max_power) > 0 ? Number(c.pf_max_power) : Math.max(1, ...flows.map((f) => f.p));
    const animate = c.pf_animate !== false;
    const textColor = "var(--u-text, var(--primary-text-color))";
    const lines = flows.map((f) => {
      const active = f.p >= 10;
      const width = 3 + 6 * Math.min(1, f.p / maxW);
      const space = Math.round(10 + width * 2);
      if (neon) return (active ? `<path d="${f.d}" fill="none" stroke="${f.color}" stroke-width="${(width + 5).toFixed(1)}" stroke-linecap="round" filter="url(#pf-blur-s)" opacity=".85"/>` : "") +
        `<path d="${f.d}" fill="none" stroke="${f.color}" stroke-width="${active ? (width * .8 + 2).toFixed(1) : 2.5}" stroke-linecap="round" stroke-linejoin="round" opacity="${active ? 1 : .3}"/>` +
        (active ? `<path class="pf-dots${animate ? " anim" : ""}" d="${f.d}" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="0.1 ${space}" style="--pf-d:${space}px" opacity=".9"/>` : "") +
        (f.label ? `<text class="pf-sub" x="${f.label.x}" y="${f.label.y}" text-anchor="end" fill="${textColor}">${ucpEscape(f.label.t)}</text>` : "");
      return `<path d="${f.d}" fill="none" stroke="${f.color}" stroke-width="${active ? (width * .8).toFixed(1) : 2.5}" stroke-linecap="round" opacity="${active ? .4 : .2}"/>` +
        (active ? `<path class="pf-dots${animate ? " anim" : ""}" d="${f.d}" fill="none" stroke="${f.color}" stroke-width="${(width + 1).toFixed(1)}" stroke-linecap="round" stroke-dasharray="0.1 ${space}" style="--pf-d:${space}px"/>` : "") +
        (f.label ? `<text class="pf-sub" x="${f.label.x}" y="${f.label.y}" text-anchor="end" fill="${textColor}">${ucpEscape(f.label.t)}</text>` : "");
    }).map((l) => `<g>${l}</g>`).join("");
    // Kennzahlen (Tiles): Tageswerte aus kWh-Sensoren, sonst Live-Werte aus den Leistungen
    const kwh = (id) => { const s = id ? states[ucpId(id)] : null; const v = s ? ucpNum(s.state) : null; if (v == null) return null; const u = s.attributes?.unit_of_measurement; return u === "Wh" ? v / 1000 : u === "MWh" ? v * 1000 : v; };
    let dImp = kwh(c.pf_day_import), dExp = kwh(c.pf_day_export), dPro = kwh(c.pf_day_production), dCon = kwh(c.pf_day_consumption);
    const clamp = (v) => Math.max(0, Math.min(100, v));
    let production = hubs.reduce((a, h) => a + h.panels.reduce((x, n) => x + n.p, 0), 0) + direct.reduce((a, n) => a + n.p, 0);
    if (E) {
      const pvKnown = hubs.some((h) => h.panels.some((n) => n.raw != null)) || direct.some((n) => n.raw != null);
      if (!pvKnown && solarAuto != null) production = solarAuto;
      dImp = gE ? gE[0] / 1000 : null; dExp = gE ? gE[1] / 1000 : null;
      dPro = pvKnown || solarAuto != null ? production / 1000 : null; dCon = homeKnown ? homeP / 1000 : null;
    }
    const pct = (v) => v == null ? "—" : Math.round(v).toLocaleString(lang) + " %";
    const kwhText = (v) => v.toLocaleString(lang, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + " kWh";
    const dayCon = dCon ?? (dPro != null && dExp != null && dImp != null ? dPro - dExp + dImp : null);
    const autarky = dImp != null && dayCon > 0 ? { v: clamp((1 - dImp / dayCon) * 100), day: true }
      : { v: grid && homeP > 0 ? clamp((1 - gridIn / homeP) * 100) : null, day: false };
    const selfUse = dPro > 0 && dExp != null ? { v: clamp((dPro - dExp) / dPro * 100), day: true }
      : { v: production >= 10 ? clamp((production - gridOut) / production * 100) : null, day: false };
    const tileDefs = [
      ["autarky", "#0a5c2f", "mdi:home-battery-outline", "Autarky", pct(autarky.v), autarky.day],
      ["selfuse", "#0d7b9a", "mdi:solar-power-variant", "Self-consumption", pct(selfUse.v), selfUse.day],
      ["production", "#b9770b", "mdi:white-balance-sunny", "Solar production", dPro != null ? kwhText(dPro) : fmt(production), dPro != null, dPro != null ? null : production],
      ["consumption", "#5c6bc0", "mdi:home-lightning-bolt", "Home consumption", dayCon != null ? kwhText(dayCon) : fmt(homeP), dayCon != null, dayCon != null ? null : homeP],
    ].filter(([key]) => !c["pf_hide_" + key]);
    const tiles = tileDefs.length ? `<div class="ph-tiles pf-tiles">${tileDefs.map(([key, color, icon, label, value, day, watts]) => `<div class="ph-tile" style="--tile:${color}"><div class="ph-tile-body">` +
      `<span class="ph-tile-label">${ucpEscape(ucpT(label) + " · " + ucpT(E ? "Period" : day ? "Today" : "Now"))}</span><span class="ph-tile-value"${watts != null ? ` data-pf-k="tile-${key}" data-pf-v="${Math.abs(watts)}" data-pf-s=""` : ""}>${ucpEscape(value)}</span><span class="ph-tile-icon">${ucpIcon(icon)}</span></div></div>`).join("")}</div>` : "";
    const toggle = c.pf_mode_toggle === true ? `<div class="pf-mode"><button type="button" data-pf-mode="power" class="${E ? "" : "on"}">${ucpEscape(ucpT("Power"))}</button><button type="button" data-pf-mode="energy" class="${E ? "on" : ""}">${ucpEscape(ucpT("Energy"))}</button>${E ? `<span class="pf-range">${ucpEscape(this._pfRangeLabel(lang))}</span>` : ""}</div>` : "";
    // Stil „Gestufte Karten“: Hubs, Wechselrichter und Haus groß, Panels und Verbraucher als kompakte Chips, Ladestand als Ring
    const tieredNode = (n) => {
      const { x, y, w, h } = n, color = n.color ?? colors.home, cy = y + h / 2, icx = x + 24, tx = x + 50, ICON = 20;
      // Pulsierender Schein nach innen (Inset) in allen Styles; Metall zusätzlich mit Akzentkante und Innenschatten wie die Kacheln
      const innerGlow = (radius) => n.p >= 10 ? `<rect class="pf-glow${animate ? " anim" : ""}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" style="fill:${n.glow ?? n.color ?? colors.home}" filter="url(#pf-inner)"/>` : "";
      const shape = (radius) => {
        const box = `<rect class="pf-box" style="--pf-c:${color};--pf-fill:${fillPct}%" x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}"/>`;
        const cp = `pf-cp-${Math.round(x)}-${Math.round(y)}`;
        const bar = metal ? `<clipPath id="${cp}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}"/></clipPath><rect x="${x}" y="${y}" width="4" height="${h}" fill="${color}" clip-path="url(#${cp})"/>` +
          `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="#000" opacity=".7" filter="url(#pf-inset)"/>` : "";
        return box + (neon ? `<rect x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h / 2 - 3}" rx="${Math.max(2, radius - 3)}" fill="#fff" opacity=".04"/>` : "") + bar + innerGlow(radius);
      };
      // Icon in festem Rahmen, immer gleich groß und mittig auf (icx, cy)
      const iconPlain = `<foreignObject x="${icx - ICON / 2}" y="${cy - ICON / 2}" width="${ICON}" height="${ICON}"><div style="width:${ICON}px;height:${ICON}px;display:flex;align-items:center;justify-content:center;line-height:0"><ha-icon icon="${ucpEscape(n.icon)}" style="--mdc-icon-size:${ICON}px;width:${ICON}px;height:${ICON}px;display:flex;align-items:center;justify-content:center;color:${neon ? "#fff" : color};${neon ? `filter:drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color})` : ""}"></ha-icon></div></foreignObject>`;
      const isBat0 = n.bms !== undefined;
      const icon = neon && !n.compact
        ? (isBat0 ? "" : `<circle cx="${icx}" cy="${cy}" r="21" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="1 3" opacity=".8"/>`) +
          `<circle cx="${icx}" cy="${cy}" r="15" fill="color-mix(in srgb, ${color} 50%, #05060a)" stroke="${color}" stroke-width="1.6"/><ellipse cx="${icx - 3}" cy="${cy - 7}" rx="7" ry="3" fill="#fff" opacity=".2"/>` + iconPlain
        : iconPlain;
      const text = (cls, t, tx0, ty, anchor, extra = "") => `<text class="${cls}" x="${tx0}" y="${ty}"${anchor ? ` text-anchor="${anchor}"` : ""}${extra} fill="${textColor}">${ucpEscape(t)}</text>`;
      const value = n.valueText ?? (n.raw == null ? "—" : fmt(n.p));
      const level = n.soc != null ? Math.round(n.soc) + " %" : "";
      const numAttr = (suffix = "") => n.raw == null || n.valueText ? "" : ` data-pf-k="${ucpEscape(n.name + "|" + Math.round(n.x) + "|" + Math.round(n.y))}" data-pf-v="${Math.abs(n.p)}" data-pf-s="${ucpEscape(suffix)}"`;
      const isBattery = n.bms !== undefined, big = !!n.panels || (!n.chip && !n.compact && !isBattery);
      const open = `<g class="pf-node${n.p >= 10 ? " on" : ""}"><title>${ucpEscape([n.name, value, n.sub, n.bms && "BMS " + n.bms].filter(Boolean).join(" · "))}</title>`;
      if (n.compact) return open + shape(h / 2) + icon + text("pf-val2", value, tx, cy + 5, undefined, numAttr()) + `</g>`;
      // Textblock: Name, Wert, Zusatzzeile; links in einer Spalte, als Block mittig in der Box
      const sub = isBattery ? [n.sub, n.noLevel ? "" : level].filter(Boolean).join(" · ") : n.chip ? "" : n.sub ?? "";
      const nameLine = n.chip && n.sub && n.soc == null ? n.name + " · " + n.sub : n.name;
      const rows = [{ cls: "pf-sub", t: cut(nameLine, Math.floor((w - 54) / 5.2) - (n.bms ? 6 : 0)), h: 14, b: 11 }, { cls: big ? "pf-big" : "pf-val2", t: [value, n.chip ? level : ""].filter(Boolean).join(" · "), h: big ? 26 : 21, b: big ? 20 : 16, v: true }];
      if (sub) rows.push({ cls: "pf-sub", t: sub, h: 14, b: 11 });
      let yy = cy - rows.reduce((a, r) => a + r.h, 0) / 2;
      const y0 = yy;
      const body = rows.map((r) => { const out = text(r.cls, r.t, tx, yy + r.b, undefined, r.v ? numAttr(n.chip && level ? " · " + level : "") : ""); yy += r.h; return out; }).join("");
      let extra = "";
      if (isBattery) {
        const r = neon ? 20 : 17, C = 2 * Math.PI * r;
        extra = `<circle cx="${icx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-opacity=".25" stroke-width="4"/>` +
          (n.soc != null ? `<circle cx="${icx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${(C * n.soc / 100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 ${icx} ${cy})"/>` : "") +
          (n.bms ? text("pf-sub", cut(n.bms, 9), x + w - 8, y0 + 11, "end") : "");
      } else if (n.chip && n.soc != null) {
        extra = `<rect x="${tx}" y="${y + h - 6}" width="${w - 62}" height="3" rx="1.5" fill="${color}" opacity=".25"/><rect x="${tx}" y="${y + h - 6}" width="${((w - 62) * n.soc / 100).toFixed(1)}" height="3" rx="1.5" fill="${color}"/>`;
      }
      return open + shape(n.chip ? 14 : 12) + extra + icon + body + `</g>`;
    };
    const all = [...hubs.flatMap((h) => [...h.panels, h, ...(h.battery ? [h.battery] : [])]), ...direct, ...(vertical ? vCons : right), ...bottom];
    return `<div class="pf-wrap">${toggle}${tiles}<svg class="pf" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${ucpEscape(ucpT("Energy Power Flow"))}"><defs><filter id="pf-inner" filterUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><feComponentTransfer in="SourceAlpha" result="inv"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur in="inv" stdDeviation="4.5" result="b0"/><feComponentTransfer in="b0" result="b"><feFuncA type="linear" slope="2.6"/></feComponentTransfer><feComposite in="SourceGraphic" in2="b" operator="in"/></filter><filter id="pf-inset" filterUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><feComponentTransfer in="SourceAlpha" result="inv"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feOffset in="inv" dy="2" result="o"/><feGaussianBlur in="o" stdDeviation="2.5" result="b"/><feFlood flood-color="#000"/><feComposite in2="b" operator="in" result="g"/><feComposite in="g" in2="SourceAlpha" operator="in"/></filter><filter id="pf-blur-s" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.5"/></filter><mask id="pf-clip" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><rect x="0" y="0" width="${W}" height="${H}" fill="#fff"/>${[...all, inverter, house].map((n) => `<rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" fill="#000"/>`).join("")}</mask></defs><g mask="url(#pf-clip)">${lines}</g>${all.map(tieredNode).join("")}${tieredNode(inverter) + tieredNode(house)}</svg></div>`;
  }

  _pihole() {
    const c = this._config;
    const map = this._ph();
    const states = this._hass?.states ?? {};
    const live = (role) => { const s = states[map[role]]; return s && !["unknown", "unavailable", ""].includes(s.state) ? s : null; };
    const num = (role) => ucpNum(live(role)?.state);
    const blocked = num("blocked");
    const queries = num("queries");
    const cached = num("cached");
    const forwarded = num("forwarded");
    let percent = num("percent");
    if (percent == null && blocked != null && queries) percent = blocked / queries * 100;
    const status = states[map.status ?? map.switch];
    const enabled = status ? status.state === "on" : null;
    const available = this._available();
    const text = !available ? "Unavailable" : enabled == null ? this._stateText() : enabled ? "Active" : "Disabled";
    const fmt = (value, digits = 0) => value == null ? "—" : this._number(value, digits);
    const history = c.ph_show_history !== false ? this._phHistory : null;
    const spark = (role) => {
      const series = history?.[role];
      if (!series || series.length < 2) return "";
      const lo = Math.min(...series), hi = Math.max(...series), span = hi - lo;
      const step = 100 / (series.length - 1);
      const points = series.map((v, i) => `${(i * step).toFixed(1)},${(span ? 22 - (v - lo) / span * 18 : 13).toFixed(1)}`);
      return `<svg class="ph-spark" viewBox="0 0 100 24" preserveAspectRatio="none" role="img" aria-label="History of the last 7 days"><polygon points="0,24 ${points.join(" ")} 100,24" fill="rgba(255,255,255,.18)"></polygon><polyline points="${points.join(" ")}" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="1.5" vector-effect="non-scaling-stroke"></polyline></svg>`;
    };
    const tile = (role, color, icon, label, value) => c["ph_hide_" + role] ? "" : `<div class="ph-tile" style="--tile:${color}"><div class="ph-tile-body">
      <span class="ph-tile-label">${ucpEscape(label)}</span><span class="ph-tile-value">${ucpEscape(value)}</span><span class="ph-tile-icon">${ucpIcon(icon)}</span></div>${spark(role)}</div>`;
    const tiles = `<div class="ph-tiles">
      ${tile("queries", "#0d7b9a", "mdi:earth", "Total queries", fmt(queries))}
      ${tile("blocked", "#9a2b25", "mdi:hand-back-right", "Queries blocked", fmt(blocked))}
      ${tile("percent", "#b9770b", "mdi:chart-pie", "Percent blocked", percent == null ? "—" : fmt(percent, 1) + " %")}
      ${tile("domains", "#0a5c2f", "mdi:format-list-bulleted", "Domains on lists", fmt(num("domains")))}</div>`;
    // Verteilung der Anfragen als Ring mit Legende (wie „Upstream servers“ im Pi-hole-Dashboard)
    const parts = [[blocked, "#f0614b", "Blocklist"], [cached, "#3b8dbd", "Cache"], [forwarded, "#00a65a", "Forwarded"]].filter(([v]) => v != null && v > 0);
    const total = parts.reduce((sum, [v]) => sum + v, 0);
    const radius = 38, circ = 2 * Math.PI * radius;
    let offset = 0;
    const distribution = c.ph_show_graph === false || !total ? "" : `<div class="ph-dist"><svg viewBox="0 0 100 100" width="110" height="110" role="img" aria-label="Query distribution">${parts.map(([v, color]) => {
      const length = circ * v / total;
      const piece = `<circle cx="50" cy="50" r="${radius}" fill="none" stroke="${color}" stroke-width="18" stroke-dasharray="${length.toFixed(2)} ${(circ - length).toFixed(2)}" stroke-dashoffset="${(-offset).toFixed(2)}" transform="rotate(-90 50 50)"></circle>`;
      offset += length;
      return piece;
    }).join("")}<circle class="ph-hole" cx="50" cy="50" r="29" fill="transparent"></circle></svg>
      <div class="ph-legend">${parts.map(([v, color, label]) => `<span><i style="background:${color}"></i>${label}: ${ucpEscape(fmt(v))}</span>`).join("")}</div></div>`;
    const toggle = c.ph_show_toggle !== false && map.switch && states[map.switch]?.state !== "unavailable"
      ? `<div class="wd-actions"><button type="button" class="wd-btn" data-action="ph-toggle">${ucpIcon(enabled ? "mdi:pause" : "mdi:play")}<span>${enabled ? "Disable" : "Enable"}</span></button></div>` : "";
    const updates = (map.updates ?? []).filter((id) => states[id]?.state === "on");
    const stats = this._stats([
      ["Domains on blocklist", num("domains") == null ? null : fmt(num("domains")), "mdi:playlist-remove"],
      ["Unique domains", num("uniqueDomains") == null ? null : fmt(num("uniqueDomains")), "mdi:web"],
      ["Active clients", num("uniqueClients") == null ? null : fmt(num("uniqueClients")), "mdi:lan-connect"],
      ["Total clients", num("seenClients") == null ? null : fmt(num("seenClients")), "mdi:lan"],
      ["From cache", cached == null ? null : fmt(cached), "mdi:cached"],
      ["Forwarded", forwarded == null ? null : fmt(forwarded), "mdi:share-outline"],
      ["Updates", updates.length ? updates.map((id) => states[id].attributes.title || states[id].attributes.friendly_name).join(", ") : null, "mdi:update"],
    ]);
    return `<div class="center ph">${c.hide_state ? "" : `<div class="wd-head"><button type="button" class="state-btn" data-tap="state" aria-label="Status"${this._state ? "" : " disabled"}>${ucpValue(text)}</button></div>`}
      ${tiles}${distribution}${toggle}</div>${stats}`;
  }

  async _phLoad(token) {
    if (token.loading) return;
    token.loading = true;
    try {
      const map = this._ph();
      const roles = ["queries", "blocked", "percent", "domains"].filter((role) => map[role]);
      const end = Date.now(), start = end - 7 * 86400000;
      if (!roles.length) return;
      const result = await this._hass.callApi("GET", `history/period/${new Date(start).toISOString()}?filter_entity_id=${roles.map((role) => map[role]).join(",")}&end_time=${encodeURIComponent(new Date(end).toISOString())}&minimal_response&no_attributes`);
      if (this._dataToken !== token) return;
      const buckets = 56, out = {};
      for (const rows of result ?? []) {
        const id = rows?.[0]?.entity_id;
        const role = roles.find((r) => map[r] === id);
        if (!role) continue;
        const points = rows.map((row) => [Date.parse(row.last_changed ?? row.last_updated), ucpNum(row.state)]).filter(([t, v]) => Number.isFinite(t) && v != null).sort((a, b) => a[0] - b[0]);
        if (!points.length) continue;
        const values = [];
        let index = 0, last = points[0][1];
        for (let i = 1; i <= buckets; i++) {
          const limit = start + (end - start) * i / buckets;
          while (index < points.length && points[index][0] <= limit) last = points[index++][1];
          values.push(last);
        }
        out[role] = values;
      }
      this._phHistory = out;
      this._render();
    } catch (error) {
      /* Verlauf ist optional */
    } finally {
      token.loading = false;
    }
  }

  async _phToggle() {
    const id = this._ph().switch;
    if (!id) return;
    try {
      await this._hass.callService("switch", this._hass.states[id]?.state === "on" ? "turn_off" : "turn_on", { entity_id: id });
    } catch (error) {
      this._feedback = error?.message || "Action failed.";
      this._render();
    }
  }

  _slider() {
    const a = this._attrs;
    const domain = this._config.entity?.split(".")[0];
    const numeric = domain === "number" || domain === "input_number";
    if (!Object.hasOwn(UCP_SLIDERS, domain)) return null;
    const value = domain === "cover" ? ucpNum(a.current_position)
      : domain === "light" ? this._state?.state === "off" ? 0 : Math.round((ucpNum(a.brightness) ?? 255) * 100 / 255)
      : domain === "media_player" ? ucpNum(a.volume_level) == null ? null : Math.round(a.volume_level * 100)
      : ucpNum(this._state?.state);
    return { domain, value: this._available() ? value : null, min: numeric ? ucpNum(a.min) ?? 0 : 0,
      max: numeric ? ucpNum(a.max) ?? 100 : 100, step: numeric ? ucpNum(a.step) || 1 : 1,
      unit: this._unit(numeric ? a.unit_of_measurement || "" : "%") };
  }

  _sliderCard() {
    const s = this._slider();
    if (!s) return '<div class="muted">No slider is available for this entity.</div>';
    const { min, max, step, value, unit, domain } = s;
    const enabled = this._available() && value != null && max > min &&
      (domain !== "cover" || !!(this._attrs.supported_features & 4)) &&
      (domain !== "media_player" || !!(this._attrs.supported_features & 4)) &&
      (domain !== "light" || !Array.isArray(this._attrs.supported_color_modes) ||
        this._attrs.supported_color_modes.some((mode) => !["onoff", "unknown"].includes(mode)));
    // Waagerechter Slider: State wie bei den anderen Karten (Layout vertikal: unter dem Namen, horizontal: rechts in der Namenszeile),
    // der Regler mittig im restlichen Kartenbereich
    if (!this._config.vertical) {
      return `<div class="center slider-head slider-state"><output class="value">${ucpEscape(this._number(value) + (value == null ? "" : unit))}</output></div>
      <div class="center slider-row"><input class="range" type="range" min="${min}" max="${max}" step="${step}"
        value="${value ?? min}" data-action="slide" aria-label="Set value"${enabled ? "" : " disabled"}></div>
      ${this._stats([["Status", this._stateText(), "mdi:information-outline"]])}`;
    }
    return `<div class="center slider-card${this._config.vertical ? " vertical" : ""}"><div class="slider-track center">
      <div class="slider-head">${this._config.hide_icons ? "" : ucpIcon(this._config.icon)}<output class="value">${ucpEscape(this._number(value) + (value == null ? "" : unit))}</output></div>
      <input class="range ${this._config.vertical ? "vertical" : ""}" type="range" min="${min}" max="${max}" step="${step}"
        value="${value ?? min}" data-action="slide" aria-label="Set value"${enabled ? "" : " disabled"}></div>
      </div>
      ${this._stats([["Status", this._stateText(), "mdi:information-outline"]])}`;
  }

  // ===== Mediaplayer (inkl. Music-Assistant-Bibliothek) =====
  _mpState() {
    return (this._mp ??= { open: false, loaded: false, stack: [], items: [], loading: false, error: "",
      query: "", results: null, searching: false, token: 0 });
  }

  // Beim Schließen zurück zur Bibliotheksübersicht (beim nächsten Öffnen wird sie neu geladen)
  _mpReset(mp) {
    mp.stack = []; mp.items = []; mp.results = null; mp.query = ""; mp.error = "";
    mp.loaded = false; mp.direct = false; mp.loading = false; mp.searching = false; ++mp.token;
  }

  // Optional: Einträge der Home-Assistant-Medienquelle (media-source://, z. B. Ordner „Medien“) ausblenden
  _mpFilter(list) {
    if (!this._config.mp_hide_media_source) return list ?? [];
    return (list ?? []).filter((item) => !String(item?.media_content_id ?? "").startsWith("media-source://"));
  }

  _mpUrl(value) {
    if (typeof value !== "string") return "";
    if (/^\/(?![\\/])/.test(value)) return this._hass?.hassUrl?.(value) ?? value;
    return /^https?:\/\//i.test(value) ? value : "";
  }

  // Aktuelle Wiedergabeposition (Sekunden), bei laufender Wiedergabe seit der letzten Aktualisierung fortgeschrieben
  _mpPosition() {
    const a = this._attrs;
    const dur = ucpNum(a.media_duration);
    let pos = ucpNum(a.media_position);
    if (pos == null || !dur || dur <= 0) return null;
    const updated = Date.parse(a.media_position_updated_at);
    if (this._state?.state === "playing" && Number.isFinite(updated)) pos += (Date.now() - updated) / 1000;
    return { pos: nbClamp(pos, 0, dur), dur };
  }

  _mpTick() {
    const root = this._mpShell;
    if (!root?.isConnected) return;
    const p = this._mpPosition();
    const seek = root.querySelector(".mp-seek");
    const bar = root.querySelector(".mp-bar");
    const pos = root.querySelector('[data-t="pos"]');
    const dur = root.querySelector('[data-t="dur"]');
    if (!p) return;
    const fraction = p.pos / p.dur;
    if (bar) bar.style.setProperty("--level", fraction * 100 + "%");
    if (seek && this.shadowRoot.activeElement !== seek) seek.value = String(Math.round(fraction * 1000));
    if (pos && this.shadowRoot.activeElement !== seek) pos.textContent = ucpClock(p.pos);
    if (dur) dur.textContent = ucpClock(p.dur);
  }

  _mpMain(lay) {
    const c = this._config;
    const a = this._attrs;
    const mp = this._mpState();
    const features = Number(a.supported_features) || 0;
    const ok = this._available();
    const playing = this._state?.state === "playing";
    const has = (flag) => !!(features & flag);
    const btn = (action, icon, label, enabled = true, pressed = null, cls = "round") =>
      `<button type="button" class="${cls}${pressed ? " on" : ""}" data-action="${action}" aria-label="${ucpEscape(label)}" title="${ucpEscape(label)}"` +
      `${pressed == null ? "" : ` aria-pressed="${!!pressed}"`}${ok && enabled ? "" : " disabled"}>${ucpIcon(icon)}</button>`;
    const type = this._config.card_type;
    const title = c.name || a.friendly_name || UCP_CARDS[type].label.split(" · ").at(-1);
    const titleIcon = this._titleIcon();
    const heading = (lay === "large" || c.name) && (!c.hide_title || titleIcon)
      ? `<h3 class="${c.name_marquee ? "marquee-title" : ""}"><span class="title-label">${titleIcon ? `<span class="title-icon">${titleIcon}</span>` : ""}${c.hide_title ? "" : ucpEscape(title)}</span></h3>` : "";
    const picture = this._mpUrl(ucpCover(a));
    const coverTag = ok && has(UCP_MP.BROWSE) && c.mp_show_library !== false ? "button" : "div";
    const cover = c.mp_show_cover === false ? ""
      : `<${coverTag} class="mp-cover${coverTag === "button" ? " mp-cover-btn" : ""}"${coverTag === "button" ? ` type="button" data-action="mp-cover" title="Show the album of this track" aria-label="Show the album of this track"` : ""}>${picture ? `<img src="${ucpEscape(picture)}" alt="" loading="lazy">` : ucpIcon(this._icon("mdi:music-note") || "mdi:music-note")}</${coverTag}>`;
    const sub = [a.media_artist || a.media_album_artist, a.media_album_name].filter(Boolean).join(" · ");
    const meta = `<div class="mp-meta"><span class="mp-title">${ucpEscape(a.media_title || this._stateText())}</span>${sub ? `<span class="muted mp-sub">${ucpEscape(sub)}</span>` : ""}</div>`;
    const play = playing ? btn("media_pause", "mdi:pause", "Pause", has(UCP_MP.PAUSE)) : btn("media_play", "mdi:play", "Start playback", has(UCP_MP.PLAY));
    const library = c.mp_show_library !== false && has(UCP_MP.BROWSE)
      ? btn("mp-lib", "mdi:music-box-multiple", "Music library", true, mp.open) : "";
    const progress = c.mp_show_progress !== false && a.media_duration
      ? `<div class="mp-seekwrap">${has(UCP_MP.SEEK)
        ? `<input class="range mp-seek" type="range" min="0" max="1000" value="0" data-action="mp-seek" aria-label="Position"${ok ? "" : " disabled"}>`
        : `<div class="mp-bar"><span></span></div>`}<div class="mp-times"><span data-t="pos">0:00</span><span data-t="dur">0:00</span></div></div>` : "";
    const feedback = this._feedback ? `<p class="feedback" role="status">${ucpEscape(this._feedback)}</p>` : "";
    if (lay === "compact") {
      return `${heading}<div class="mp-now">${cover}${meta}<div class="mp-row mp-controls">${btn("media_previous_track", "mdi:skip-previous", "Previous track", has(UCP_MP.PREV))}${play}${btn("media_next_track", "mdi:skip-next", "Next track", has(UCP_MP.NEXT))}${library}</div></div>${progress}${feedback}`;
    }
    const repeat = a.repeat ?? "off";
    const shuffleRepeat = c.mp_show_shuffle_repeat !== false;
    const controls = `<div class="mp-row controls">
      ${shuffleRepeat && has(UCP_MP.SHUFFLE) ? btn("mp-shuffle", a.shuffle ? "mdi:shuffle-variant" : "mdi:shuffle-disabled", "Shuffle", true, !!a.shuffle) : ""}
      ${btn("media_previous_track", "mdi:skip-previous", "Previous track", has(UCP_MP.PREV))}${play}
      ${btn("media_next_track", "mdi:skip-next", "Next track", has(UCP_MP.NEXT))}
      ${has(UCP_MP.STOP) ? btn("media_stop", "mdi:stop", "Stop") : ""}
      ${shuffleRepeat && has(UCP_MP.REPEAT) ? btn("mp-repeat", repeat === "one" ? "mdi:repeat-once" : repeat === "all" ? "mdi:repeat" : "mdi:repeat-off", "Repeat", true, repeat !== "off") : ""}</div>`;
    const sources = Array.isArray(a.source_list) ? a.source_list : [];
    const volume = c.mp_show_volume !== false && has(UCP_MP.VOLUME_SET)
      ? `<input class="range" type="range" min="0" max="100" value="${nbClamp(Math.round((ucpNum(a.volume_level) ?? 0) * 100), 0, 100)}" data-action="volume" aria-label="Volume"${ok ? "" : " disabled"}>` : "";
    const mute = c.mp_show_mute !== false && has(UCP_MP.VOLUME_MUTE)
      ? btn("mp-mute", a.is_volume_muted ? "mdi:volume-off" : "mdi:volume-high", "Mute", true, !!a.is_volume_muted) : "";
    const roots = (mp.root ?? []).filter((item) => item.can_expand);
    const sourceOptions = (list, selected) => list.map((name) => `<option value="${ucpEscape(name)}"${name === selected ? " selected" : ""}>${ucpEscape(name)}</option>`).join("");
    // Eigene Quellenliste des Players; ohne sie (z. B. Music Assistant) die Bereiche der Bibliothek als Musikquellen anbieten
    const source = c.mp_show_source === false ? ""
      : sources.length ? `<select data-action="mp-source" aria-label="Source"${ok ? "" : " disabled"}>${sourceOptions(sources, a.source)}</select>`
      : roots.length && has(UCP_MP.BROWSE) ? `<select data-action="mp-root" aria-label="Music source"${ok ? "" : " disabled"}><option value="">Choose music source …</option>${roots.map((item, i) =>
        `<option value="${i}">${ucpEscape(item.title)}</option>`).join("")}</select>` : "";
    const isOff = this._state?.state === "off";
    const power = c.mp_show_power !== false && (isOff ? has(UCP_MP.TURN_ON) : has(UCP_MP.TURN_OFF))
      ? btn("mp-power", "mdi:power", isOff ? "Turn on" : "Turn off", true, !isOff) : "";
    const extras = [mute, volume, source, power, library].filter(Boolean).join("");
    return `${heading}<div class="mp-now">${cover}${meta}</div>${progress}${controls}${extras ? `<div class="mp-row mp-extras">${extras}</div>` : ""}
      ${this._stats([["Source", c.mp_show_source === false ? null : a.source, "mdi:music-box-outline"], ["Volume", a.volume_level == null ? null : `${Math.round(a.volume_level * 100)} %`, "mdi:volume-high"],
        ["Status", this._stateText(), "mdi:play-circle-outline"]])}${feedback}`;
  }

  _renderMediaPlayer() {
    const c = this._config;
    if (!this._mpShell?.isConnected || !this._body.contains(this._mpShell)) {
      this._body.innerHTML = '<ha-card class="mp"><div class="mp-main"></div><dialog class="mp-panel"></dialog><div class="mp-vis"></div></ha-card>';
      this._mpShell = this._body.firstElementChild;
      const dialog = this._mpShell.querySelector(".mp-panel");
      // Schließen per Esc oder Klick auf den abgedunkelten Hintergrund
      dialog.addEventListener("close", () => { const state = this._mpState(); if (state.open) { state.open = false; this._mpReset(state); this._render(); } });
      dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
      this._mpMarkup = this._mpPanelCache = this._mpVisCache = this._markup = null;
    }
    const shell = this._mpShell;
    const mp = this._mpState();
    const lay = c.layout === "compact" ? "compact" : "large";
    shell.className = "mp mp-" + lay + (c.hide_state ? " hide-state" : "") + (mp.open ? " mp-open" : "");
    shell.style.setProperty("--title-align", ucpAlign(c.title_align));
    shell.style.setProperty("--mp-btn", nbClamp(ucpNum(c.mp_button_size) ?? 44, 28, 80) + "px");
    const active = this.shadowRoot.activeElement;
    const busy = active?.matches?.("input[type=range]:active");
    const markup = this._mpMain(lay);
    if (markup !== this._mpMarkup && !busy) {
      const main = shell.querySelector(".mp-main");
      main.innerHTML = markup;
      this._mpMarkup = markup;
      ucpBindTitleIcons(main);
      this._watchName(main.querySelector(".marquee-title"));
      if (active?.dataset?.action) [...main.querySelectorAll("[data-action]")]
        .find((field) => field.dataset.action === active.dataset.action && field.dataset.value === active.dataset.value)
        ?.focus({ preventScroll: true });
    }
    this._mpTick();
    this._mpPanelRender();
    this._mpVisualizer();
    if (c.mp_show_source !== false && lay === "large" && !mp.rootTried && this._available() && Number(this._attrs.supported_features) & UCP_MP.BROWSE
      && !(Array.isArray(this._attrs.source_list) && this._attrs.source_list.length)) {
      mp.rootTried = true;
      this._hass.callWS({ type: "media_player/browse_media", entity_id: c.entity })
        .then((result) => { mp.root = this._mpFilter(result?.children); if (this._config === c) this._render(); }).catch(() => {});
    }
  }

  // Visualizer wie beim Kartentyp Clock-Music: Balken am unteren Kartenrand, Farben aus dem Cover
  _mpVisualizer() {
    const vis = this._mpShell?.querySelector(".mp-vis");
    if (!vis) return;
    const enabled = this._config.mp_show_visualizer === true;
    const playing = enabled && this._state?.state === "playing";
    const picture = playing ? this._mpUrl(ucpCover(this._attrs)) : "";
    const key = [enabled, playing, picture].join("|");
    if (key === this._mpVisCache) return;
    this._mpVisCache = key;
    if (!enabled) { vis.innerHTML = ""; return; }
    vis.innerHTML = '<div class="music-clock-bars" aria-hidden="true">' + (playing ? Array.from({ length: 48 }, (_, index) =>
      `<i style="--bar-mix:${100 - index * 100 / 47}%;--bar-height:${38 + (index * 31 % 43) + 19 * Math.sin(index / 47 * Math.PI)}%;--bar-peak:${.76 + (index * 7 % 10) / 38};--bar-speed:${870 + (index * 17 % 5) * 47}ms;--bar-phase:-${Math.floor(index / 4) * 28 + index * 11 % 39}ms"></i>`).join("") : "") + "</div>"
      + (picture ? `<img data-music-palette hidden src="${ucpEscape(picture)}" alt="" aria-hidden="true">` : "");
    const image = vis.querySelector("[data-music-palette]");
    if (image?.complete) this._applyClockPalette(image);
    else image?.addEventListener("load", () => this._applyClockPalette(image), { once: true });
  }

  _mpPanelHtml() {
    const mp = this._mpState();
    const ok = this._available();
    const small = (action, value, icon, label) =>
      `<button type="button" class="round sm" data-action="${action}"${value == null ? "" : ` data-value="${value}"`} aria-label="${ucpEscape(label)}" title="${ucpEscape(label)}"${ok ? "" : " disabled"}>${ucpIcon(icon)}</button>`;
    const list = mp.results ?? mp.items;
    const mode = UCP_MP_ENQUEUE[this._config.mp_enqueue] ? this._config.mp_enqueue : "replace";
    const radioClasses = ["artist", "album", "track", "playlist"];
    const rows = list.map((item, i) => {
      const thumb = this._mpUrl(item.thumbnail);
      const kind = item.media_class;
      const icon = UCP_MP_ICON[kind] ?? (item.can_expand ? "mdi:folder" : "mdi:music-note");
      const sub = item._sub || UCP_MP_CLASS[kind] || "";
      const open = item.can_expand ? "mp-open" : item.can_play ? "mp-item-play" : "mp-open";
      // Radiosender sind Livestreams: „Als Nächstes“/„Zur Warteschlange“ startet sie nicht, daher immer sofort abspielen
      // Alben, Künstler, Playlists … lassen sich als Ganzes abspielen, auch wenn die Suche can_play nicht setzt
      const playable = item.can_play || (item.can_expand && ["album", "artist", "playlist", "podcast", "audiobook"].includes(kind));
      const radio = kind === "radio" || /^library:\/\/radio\//.test(String(item.media_content_id ?? ""));
      // „Als Nächstes“/„Zur Warteschlange“ startet nichts, solange nichts spielt; Ordner (Künstler, Alben, …) ersetzen immer
      const idle = !["playing", "paused", "buffering"].includes(this._state?.state);
      const itemMode = radio || item.can_expand || idle || mp.direct ? "replace" : mode;
      const value = open === "mp-item-play" ? `${i}:${itemMode}` : String(i);
      return `<div class="mp-item"><button type="button" class="mp-open" data-action="${open}" data-value="${value}"${open === "mp-open" && !item.can_expand ? " disabled" : ""}>
        <span class="mp-thumb">${thumb ? `<img src="${ucpEscape(thumb)}" alt="" loading="lazy">` : ucpIcon(icon)}</span>
        <span class="mp-meta"><span class="mp-title">${ucpEscape(item.title)}</span>${sub ? `<span class="muted mp-sub">${ucpEscape(sub)}</span>` : ""}</span></button>
        ${playable ? `<span class="mp-actions">${item.can_expand ? small("mp-item-play", `${i}:${itemMode}`, "mdi:play", "Play") : ""}${small("mp-item-play", `${i}:next`, "mdi:skip-next", "Next up")}${small("mp-item-play", `${i}:add`, "mdi:playlist-plus", "Add to queue")}${radioClasses.includes(kind) ? small("mp-item-play", `${i}:radio`, "mdi:radio-tower", "Start radio") : ""}</span>` : ""}</div>`;
    }).join("");
    const title = mp.results ? `${ucpT("Search:")} ${mp.query}` : mp.stack.at(-1)?.title || "Music Assistant";
    const state = mp.loading || mp.searching ? '<div class="muted">Loading …</div>'
      : mp.error ? `<div class="feedback" role="status">${ucpEscape(mp.error)}</div>`
      : list.length ? "" : `<div class="muted">${mp.results ? "No results." : "No entries."}</div>`;
    return `<div class="mp-panel-head">${mp.stack.length || mp.results ? small("mp-back", null, "mdi:arrow-left", "Back") : ""}
      <span class="mp-panel-title">${ucpEscape(title)}</span>${small("mp-close", null, "mdi:close", "Close")}</div>
      <input class="mp-search" type="search" data-action="mp-search" placeholder="Search …" value="${ucpEscape(mp.query)}" aria-label="Search music">
      ${state}<div class="mp-list">${rows}</div>`;
  }

  _mpPanelRender() {
    const panel = this._mpShell?.querySelector(".mp-panel");
    if (!panel) return;
    const mp = this._mpState();
    if (!mp.open) { if (panel.open) panel.close(); return; }
    if (!panel.open) { try { panel.showModal(); } catch { panel.setAttribute("open", ""); } }
    const markup = this._mpPanelHtml();
    if (markup === this._mpPanelCache) return;
    const search = this.shadowRoot.activeElement?.classList?.contains("mp-search");
    panel.innerHTML = markup;
    this._mpPanelCache = markup;
    if (search) {
      const input = panel.querySelector(".mp-search");
      input?.focus({ preventScroll: true });
      input?.setSelectionRange?.(input.value.length, input.value.length);
    }
  }

  async _mpBrowse(node) {
    const mp = this._mpState();
    const token = ++mp.token;
    mp.loading = true;
    mp.error = "";
    this._mpPanelRender();
    try {
      const message = { type: "media_player/browse_media", entity_id: this._config.entity };
      if (node) { message.media_content_id = node.media_content_id; message.media_content_type = node.media_content_type; }
      const result = await this._hass.callWS(message);
      if (mp.token !== token) return;
      mp.items = this._mpFilter(result?.children);
    } catch (error) {
      if (mp.token !== token) return;
      mp.items = [];
      mp.error = error?.message || "The library could not be loaded.";
    }
    mp.loading = false;
    this._mpPanelRender();
  }

  // Suche: bevorzugt media_player/search_media, sonst der Music-Assistant-Dienst music_assistant.search
  async _mpSearch(query) {
    const mp = this._mpState();
    const token = ++mp.token;
    const hass = this._hass;
    const id = this._config.entity;
    mp.query = query;
    mp.searching = true;
    mp.error = "";
    mp.results = [];
    this._mpPanelRender();
    let results = null;
    try {
      if (Number(this._attrs.supported_features) & UCP_MP.SEARCH) {
        try {
          results = (await hass.callWS({ type: "media_player/search_media", entity_id: id, search_query: query }))?.result ?? [];
        } catch { results = null; }
      }
      if (!results) {
        const entry = await hass.callWS({ type: "config/entity_registry/get", entity_id: id });
        const reply = await hass.callWS({ type: "call_service", domain: "music_assistant", service: "search", return_response: true,
          service_data: { config_entry_id: entry.config_entry_id, name: query, limit: 10 } });
        const found = reply?.response ?? {};
        results = ["artists", "albums", "tracks", "playlists", "radio"].flatMap((key) => (found[key] ?? []).map((item) => ({
          title: item.name, media_content_id: item.uri, media_content_type: item.media_type, media_class: item.media_type,
          can_play: true, can_expand: false, thumbnail: typeof item.image === "string" ? item.image : item.image?.path,
          _sub: [UCP_MP_CLASS[item.media_type], (item.artists ?? []).map((artist) => artist.name).join(", ") || item.artist?.name].filter(Boolean).join(" · "),
        })));
      }
    } catch (error) {
      if (mp.token !== token) return;
      mp.error = error?.message || "The search failed.";
      results = [];
    }
    if (mp.token !== token) return;
    mp.results = this._mpFilter(results);
    mp.searching = false;
    this._mpPanelRender();
  }

  async _mpAct(action, raw) {
    const c = this._config;
    const hass = this._hass;
    const a = this._attrs;
    const mp = this._mpState();
    const call = (service, data = {}) => hass.callService("media_player", service, { entity_id: c.entity, ...data });
    const current = () => mp.results ?? mp.items;
    this._feedback = "";
    try {
      if (action === "mp-lib") {
        mp.open = !mp.open;
        if (!mp.open) this._mpReset(mp);
        if (mp.open && !mp.loaded) { mp.loaded = true; this._render(); await this._mpBrowse(null); return; }
      } else if (action === "mp-cover") {
        // Titelliste des laufenden Albums: Album-URI aus der Music-Assistant-Warteschlange
        let album = null;
        try {
          const reply = await hass.callWS({ type: "call_service", domain: "music_assistant", service: "get_queue", return_response: true, target: { entity_id: c.entity } });
          album = reply?.response?.[c.entity]?.current_item?.media_item?.album ?? null;
        } catch { album = null; }
        if (!album?.uri) throw new Error("No album is known for this track.");
        const node = { title: album.name || "Album", media_content_id: album.uri, media_content_type: "album", media_class: "album", can_expand: true };
        this._mpReset(mp);
        mp.direct = true;
        mp.open = true; mp.loaded = true; mp.stack = [node];
        this._render();
        this._mpBrowse(node);
        return;
      } else if (action === "mp-close") {
        mp.open = false;
        this._mpReset(mp);
      } else if (action === "mp-back") {
        if (mp.results) { mp.results = null; mp.query = ""; mp.error = ""; this._mpPanelRender(); }
        else { mp.stack.pop(); this._mpBrowse(mp.stack.at(-1) ?? null); }
      } else if (action === "mp-open") {
        const item = current()[Number(raw)];
        if (item?.can_expand) {
          if (mp.results) { mp.results = null; mp.query = ""; }
          mp.stack.push(item);
          this._mpBrowse(item);
        }
      } else if (action === "mp-search") {
        const query = String(raw ?? "").trim();
        if (!query) { mp.results = null; mp.query = ""; mp.error = ""; ++mp.token; mp.searching = false; this._mpPanelRender(); }
        else await this._mpSearch(query);
      } else if (action === "mp-item-play") {
        const [index, mode] = String(raw).split(":");
        const item = current()[Number(index)];
        if (!item) return;
        const data = { media_content_id: item.media_content_id, media_content_type: item.media_content_type };
        if (mode === "radio") { data.extra = { radio_mode: true }; if (Number(a.supported_features) & UCP_MP.ENQUEUE) data.enqueue = "replace"; }
        else if (Number(a.supported_features) & UCP_MP.ENQUEUE) data.enqueue = mode;
        await call("play_media", data);
      } else if (action === "mp-shuffle") {
        await call("shuffle_set", { shuffle: !a.shuffle });
      } else if (action === "mp-repeat") {
        await call("repeat_set", { repeat: ({ off: "all", all: "one", one: "off" })[a.repeat ?? "off"] ?? "off" });
      } else if (action === "mp-power") {
        await call(this._state?.state === "off" ? "turn_on" : "turn_off");
      } else if (action === "mp-mute") {
        await call("volume_mute", { is_volume_muted: !a.is_volume_muted });
      } else if (action === "mp-root") {
        const item = (mp.root ?? []).filter((entry) => entry.can_expand)[Number(raw)];
        if (item) { mp.open = true; mp.loaded = true; mp.results = null; mp.query = ""; mp.stack = [item]; this._render(); this._mpBrowse(item); return; }
      } else if (action === "mp-source") {
        await call("select_source", { source: raw });
      } else if (action === "mp-seek") {
        const p = this._mpPosition();
        if (p) await call("media_seek", { seek_position: Math.round(nbClamp(Number(raw) / 1000, 0, 1) * p.dur) });
      }
    } catch (error) {
      if (this._config === c) this._feedback = error?.message || "Action failed.";
    }
    if (this._config === c) this._render();
  }

  _weather() {
    const c = this._config;
    const a = this._attrs;
    const temperature = (value) => this._number(ucpNum(value), c.round_temperature ? 0 : 1);
    const unit = this._unit(a.temperature_unit || this._hass?.config?.unit_system?.temperature || "");
    const sun = this._hass?.states?.["sun.sun"]?.state;
    const night = sun === "below_horizon" || (sun !== "above_horizon" && this._state?.state === "clear-night");
    const current = c.show_current === false ? "" : `<div class="weather-current">${c.hide_icons ? "" : c.icon ? ucpIcon(c.icon) : ucpWeatherIcon(this._state?.state, night)}
      <div>${ucpValue(temperature(a.temperature), unit)}<div class="muted weather-state">${ucpEscape(this._stateText())}</div></div></div>`;
    const forecast = this._forecast ?? (Array.isArray(a.forecast) ? a.forecast : []);
    const locale = this._hass?.locale?.language;
    const hourly = c.forecast_type === "hourly";
    const formatter = new Intl.DateTimeFormat(locale, { ...this._dateOptions(), ...(hourly ? {hour:"2-digit",minute:"2-digit"} : {weekday:"short"}) });
    const fcVars = [Number(c.forecast_font_size) > 0 && `--fc-font:${Number(c.forecast_font_size)}px`, Number(c.forecast_icon_size) > 0 && `--fc-icon:${Number(c.forecast_icon_size)}px`,
      ucpColorValue(c.forecast_icon_color) && /^[^;"<>{}]+$/.test(ucpColorValue(c.forecast_icon_color)) && `--fc-icon-color:${ucpColorValue(c.forecast_icon_color)}`].filter(Boolean).join(";");
    const fcUnit = /^°/.test(String(unit ?? "")) ? "°" : unit; // Vorhersage kompakt: "12° / 3°"
    const list = c.show_forecast === false ? "" : `<div class="forecast${c.forecast_border === false ? " no-border" : ""}${(Math.max(1, Math.round(Number(c.forecast_days)) || 5)) <= 8 ? " fit" : ""}"${fcVars ? ` style="${fcVars}"` : ""}>${forecast.length ? forecast.slice(0, Math.max(1, Math.round(Number(c.forecast_days)) || 5)).map((day) => {
      const when = new Date(day.datetime);
      const label = Number.isNaN(+when) ? "" : formatter.format(when);
      return `<div><span>${ucpEscape(label)}</span>${c.hide_icons ? "" : ucpWeatherIcon(day.condition, typeof day.is_daytime === "boolean" ? !day.is_daytime : day.condition === "clear-night")}<span>${ucpEscape(temperature(day.temperature))}${ucpEscape(fcUnit)}
        ${day.templow == null || c.forecast_minmax === false ? "" : ` / ${ucpEscape(temperature(day.templow))}${ucpEscape(fcUnit)}`}</span></div>`;
    }).join("") : '<span class="muted">No forecast available.</span>'}</div>`;
    const measure = (value, unit) => value == null ? null : `${value} ${unit || ""}`.trim();
    const warnings = c.show_warnings && c.dwd_entity && this._hass?.states?.[c.dwd_entity] ? `<div class="wx-warnings">${this._dwd(c.dwd_entity)}</div>` : "";
    return current + list + warnings + this._stats(c.show_current === false ? [] : [
      ["Humidity", measure(a.humidity,"%"), "mdi:water-percent"], ["Wind", [measure(a.wind_speed,a.wind_speed_unit), ucpCompass(a.wind_bearing) ?? (typeof a.wind_bearing === "string" ? a.wind_bearing : null)].filter(Boolean).join(" ") || null, "mdi:weather-windy"],
      ["UV index", a.uv_index, "mdi:weather-sunny"], ["Pressure", measure(a.pressure,a.pressure_unit), "mdi:gauge"],
    ]);
  }


  _graph() {
    const c = this._config;
    const colors = ["--u-accent","--u-good","--u-warn","--u-second","--u-error"];
    const colorsAt = (index) => `var(${colors[index % colors.length]})`;
    const palette = ucpSplitColors(c.graph_colors);
    const entries = c.entities.map((item, index) => {
      const id = ucpId(item);
      const state = this._hass?.states?.[id];
      const raw = this._history?.rows.find((row) => row[0]?.entity_id === id) ?? [];
      const statistics = this._history?.statistics?.[id];
      const unit = this._unit(state?.attributes?.unit_of_measurement || "");
      const value = c.unit != null && ucpNum(state?.state) != null
        ? [this._number(Number(state.state)), unit].filter(Boolean).join(" ")
        : state ? this._stateText(state) : "—";
      return { id, label: item?.name || state?.attributes?.friendly_name || id, unit, value,
        color: ucpColorValue(item?.color) || ucpColorValue(palette[index]) || colorsAt(index), values: statistics ?? raw.map((item) => [Date.parse(item.last_changed), ucpNum(item.state), item.state])
          .filter(([time]) => Number.isFinite(time)).sort(([a],[b]) => a-b) };
    }).filter(({id}) => id);
    const legendJustify = { start: "flex-start", center: "center", end: "flex-end", "space-between": "space-between" }[c.legend_align] ?? "flex-start";
    const legend = c.hide_legend ? "" : `<div class="graph-label" style="--legend-justify:${legendJustify}">${entries.map(({label,value,color}) =>
      `<span style="--line:${color}">${ucpEscape(label)}<span class="graph-state"> · <strong>${ucpEscape(value)}</strong></span></span>`).join("")}</div>`;
    if (!this._history) return `<div class="muted">${this._historyError ? "History could not be loaded." : "Loading history …"}</div>${legend}${this._stats()}`;
    const {start,end} = this._history;
    if (c.graph_type === "timeline") return this._timeline(entries, start, end) + this._stats();
    const numeric = entries.filter(({values}) => values.some(([,n]) => n !== null));
    const categorical = entries.filter((entry) => entry.values.length && !numeric.includes(entry));
    const mode = c.graph_type === "stacked" ? "stacked" : ["bar", "bars"].includes(c.graph_type) ? "bar" : "line";
    const isLine = mode === "line";
    const gradOn = c.graph_gradient !== false;
    const opA = nbClamp(ucpNum(c.fill_opacity_start) ?? (isLine ? .29 : .85), 0, 1);
    const opB = gradOn ? nbClamp(ucpNum(c.fill_opacity_end) ?? (isLine ? 0 : .12), 0, 1) : opA;
    const borderW = nbClamp(ucpNum(c.bar_border_width) ?? 0, 0, 6);
    const vectors = { "top-bottom": [0,0,0,1], "bottom-top": [0,1,0,0], "left-right": [0,0,1,0], "right-left": [1,0,0,0] };
    const gradient = (id, color, auto) => {
      const [x1,y1,x2,y2] = vectors[c.graph_gradient_direction] ?? vectors[auto];
      const end = gradOn && ucpColorValue(c.graph_color_end) ? ucpColorValue(c.graph_color_end) : color;
      return `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
        <stop stop-color="${color}" stop-opacity="${opA}"/><stop offset="100%" stop-color="${end}" stop-opacity="${opB}"/></linearGradient>`;
    };
    const left = 5, right = 315, top = 8, bottom = 110;
    const width = right-left;
    const x = (time) => left + ucpPct(time,start,end)*width;
    const axisFormat = new Intl.DateTimeFormat(this._hass?.locale?.language, {
      ...this._dateOptions(), ...(end-start > 86400000 ? {month:"numeric",day:"numeric"} : {hour:"2-digit",minute:"2-digit"}),
    });
    const domains = new Map();
    const add = (unit,value) => {
      const d = domains.get(unit) ?? (mode === "line" ? [Infinity,-Infinity] : [0,0]);
      domains.set(unit,[Math.min(d[0],value),Math.max(d[1],value)]);
    };
    const times = this._history.statistics ? [...new Set(numeric.flatMap(({values}) => values.map(([time]) => time)))].sort((a,b) => a-b) : null;
    const timeIndex = times && new Map(times.map((time, index) => [time, index]));
    const bins = times?.length || 24;
    const bucketEnds = new Map(times ? numeric.flatMap(({values}) => values.filter(([, , end]) => Number.isFinite(end)).map(([time, , end]) => [time, end])) : []);
    const stacks = new Map();
    for (const row of numeric) {
      row.bins = Array.from({length:bins}, () => null);
      for (const [time,n] of row.values) {
        if (mode === "line") { if (n !== null) add(row.unit,n); continue; }
        const i = timeIndex?.get(time) ?? Math.min(bins-1,Math.floor(ucpPct(time,start,end)*bins));
        const slot = row.bins[i];
        if (n !== null) row.bins[i] = slot
          ? { min: Math.min(slot.min,n), max: Math.max(slot.max,n), value:n } : {min:n,max:n,value:n};
      }
      if (mode !== "line") row.bins.forEach((slot,i) => {
        if (!slot) return;
        if (mode === "stacked") {
          const totals = stacks.get(row.unit) ?? Array.from({length:bins}, () => [0,0]);
          stacks.set(row.unit,totals);
          const sign = slot.value < 0 ? 0 : 1;
          slot.min = totals[i][sign];
          slot.max = totals[i][sign] += slot.value;
        } else if (mode === "bar" || this._history.statistics) {
          slot.min = 0;
          slot.max = slot.value;
        }
        add(row.unit,slot.min);
        add(row.unit,slot.max);
      });
    }
    const paths = numeric.map(({unit,values,color,bins: slots}, index) => {
      const [min,max] = domains.get(unit);
      const y = (n) => min === max ? (top+bottom)/2 : bottom - ucpPct(n,min,max)*(bottom-top);
      if (mode !== "line") {
        const columns = mode === "stacked" ? [...stacks.keys()] : numeric;
        const slotIndex = mode === "stacked" ? columns.indexOf(unit) : index;
        return slots.map((slot,i) => {
          if (!slot) return "";
          const from = times ? x(times[i]) : left + i * width / bins;
          const to = times ? x(bucketEnds.get(times[i]) ?? times[i+1] ?? end) : from + width / bins;
          const cell = Math.max(1, to - from);
          const barWidth = Math.max(.3, cell*.8/columns.length);
          const [a,b] = [y(slot.min),y(slot.max)];
          return `<rect x="${(from + .1*cell + slotIndex*barWidth).toFixed(2)}" y="${Math.min(a,b).toFixed(2)}"
            width="${barWidth.toFixed(2)}" height="${Math.max(1,Math.abs(a-b)).toFixed(2)}" rx=".6" fill="url(#chart-bar-${index}-${b > a ? "up" : "down"})"${borderW > 0
              ? ` stroke="${ucpColorValue(c.bar_border_color) || color}" stroke-width="${borderW}" vector-effect="non-scaling-stroke"` : ""}/>`;
        }).join("");
      }
      const segments = [];
      let points = [];
      for (const [time,n] of values) {
        if (n === null) { if (points.length) segments.push(points); points = []; }
        else points.push([x(time),y(n)]);
      }
      if (points.length) segments.push(this._history.statistics ? points : [...points,[x(this._history.dataEnd ?? end),points.at(-1)[1]]]);
      return segments.map((segment) => {
        const line = segment.map(([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
        if (segment.length === 1) return `<circle cx="${segment[0][0]}" cy="${segment[0][1]}" r="2" fill="${color}"/>`;
        return `${(c.line_fill === "all" || (c.line_fill !== "none" && index === 0)) ? `<polygon points="${segment[0][0]},${bottom} ${line} ${segment.at(-1)[0]},${bottom}" fill="url(#chart-fill-${index})"/>` : ""}
          <polyline points="${line}" fill="none" stroke="${color}" stroke-width="${nbClamp(ucpNum(c.line_width) ?? 2, .5, 12)}" stroke-linejoin="round" stroke-linecap="round"
          style="filter:drop-shadow(0 0 3px ${color})"/>`;
      }).join("");
    }).join("");
    const axis = (x1,y1,x2,y2) => `<line class="grid" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    const single = domains.size === 1 ? domains.values().next().value : null;
    const yLabels = !c.hide_y_labels && single ? `<div class="graph-axis-labels graph-y-labels">${[0,.5,1].map((f) =>
      `<span>${ucpEscape(this._number(single[1]-f*(single[1]-single[0]),2))}</span>`).join("")}</div>` : "";
    const xLabels = !c.hide_x_labels ? `<div class="graph-axis-labels graph-x-labels">${[0,.5,1].map((f) =>
      `<span>${ucpEscape(axisFormat.format(start+f*(end-start)))}</span>`).join("")}</div>` : "";
    const barGradients = isLine ? "" : numeric.map(({color}, index) =>
      ["up", "down"].map((direction) => gradient(`chart-bar-${index}-${direction}`, color, direction === "up" ? "top-bottom" : "bottom-top")).join("")).join("");
    const fillGradients = isLine ? numeric.map(({color}, index) => gradient(`chart-fill-${index}`, color, "top-bottom")).join("") : "";
    const chart = numeric.length ? `<div class="graph-plot">${yLabels}<svg class="chart" viewBox="0 0 320 118" preserveAspectRatio="none" role="img" aria-label="Time series">
      <defs>${fillGradients}${barGradients}</defs>
      ${[0,.25,.5,.75,1].map((f) => {
        const y = top + f*(bottom-top);
        return c.hide_grid || f === 1 ? "" : axis(left,y,right,y);
      }).join("")}
      ${c.hide_grid ? "" : [.25,.5,.75].map((f) => axis(left+width*f,top,left+width*f,bottom)).join("")}
      ${c.hide_x_axis ? "" : axis(left,bottom,right,bottom)}${c.hide_y_axis ? "" : axis(left,top,left,bottom)}
      ${paths}</svg>${xLabels}</div>` : "";
    const bands = categorical.map(({label,values,color: base}) => `<div class="muted">${ucpEscape(label)}</div><div class="history-band">${values.slice(-240).map(([time,,status],i,list) => {
      const from = ucpPct(time,start,end);
      const to = i === list.length-1 ? ucpPct(this._history.dataEnd ?? end,start,end) : ucpPct(list[i+1][0],start,end);
      // An/Aus: „an“ in der Serienfarbe der Entität, „aus“ ohne Füllung; andere Zustände wie bisher in wechselnden Farben
      const word = String(status).toLowerCase();
      if (word === "off") return "";
      const color = word === "on" ? base : colorsAt([...String(status)].reduce((sum,char) => sum+char.charCodeAt(0),0));
      return `<span title="${ucpEscape(`${status} · ${axisFormat.format(time)}`)}" style="left:${from*100}%;width:${Math.max(0,to-from)*100}%;background:${color}"></span>`;
    }).join("")}</div>`).join("");
    return (chart + bands || (this._history.statistics
      ? '<div class="muted">No data available for this statistic function.</div>'
      : '<div class="muted">No history data available.</div>')) + legend + this._stats();
  }

  // Zeitleiste (Graph, Diagrammtyp "timeline"): je Entität eine Zeile mit Bändern für die Zeiten, in denen sie „an“ ist
  // (Verlauf aus der Datenbank, folgt der Energie-Datumsauswahl); Bandbreite = tatsächliche Laufzeit
  _timeline(entries, start, end) {
    const c = this._config, hist = this._history;
    const lang = this._hass?.locale?.language;
    const span = Math.max(1, end - start);
    const dataEnd = Math.min(hist.dataEnd ?? end, end);
    const onList = String(c.timeline_on_state ?? "").split(",").map((t) => t.trim().toLowerCase()).filter(Boolean);
    const isOn = (state, n) => onList.length ? onList.includes(String(state).toLowerCase()) : String(state).toLowerCase() === "on" || (n !== null && n > 0);
    const when = new Intl.DateTimeFormat(lang, { ...this._dateOptions(), ...(span > 86400000 ? { month: "numeric", day: "numeric" } : {}), hour: "2-digit", minute: "2-digit" });
    const clock = new Intl.DateTimeFormat(lang, { ...this._dateOptions(), hour: "2-digit", minute: "2-digit" });
    const dayFmt = new Intl.DateTimeFormat(lang, { day: "numeric", month: "short" });
    const dur = (ms) => { const m = Math.round(ms / 60000), h = Math.floor(m / 60); return h ? `${h} h ${m % 60} min` : `${m} min`; };
    const pct = (t) => nbClamp((t - start) / span, 0, 1) * 100;
    const lanes = entries.map((entry) => {
      const segs = [];
      entry.values.forEach(([time, n, state], i, list) => {
        if (!isOn(state, n)) return;
        const a = Math.max(time, start), b = Math.min(i + 1 < list.length ? list[i + 1][0] : dataEnd, dataEnd);
        if (b <= a) return;
        const last = segs.at(-1);
        if (last && a - last[1] < 1000) last[1] = b; else segs.push([a, b]);
      });
      return { entry, segs, total: segs.reduce((sum, [a, b]) => sum + b - a, 0) };
    });
    if (!lanes.length) return `<div class="muted">${ucpEscape(ucpT("No history data available."))}</div>`;
    const h = nbClamp(ucpNum(c.timeline_height) ?? 28, 10, 100);
    const showTotal = c.timeline_show_total !== false;
    const rows = lanes.map(({ entry, segs, total }, li) => `<span class="tl-name" style="grid-area:${li + 1} / 1" title="${ucpEscape(entry.label)}"><span class="tl-nt">${ucpEscape(entry.label)}</span>${showTotal ? `<small>${ucpEscape(dur(total))}</small>` : ""}</span>
      <div class="tl-lane" style="grid-area:${li + 1} / 2;--tl-h:${h}px;--tl-c:${entry.color}">${segs.map(([a, b], si) => {
        const text = `${entry.label} · ${when.format(a)} – ${when.format(b)} · ${dur(b - a)}`;
        return `<i data-tl="${li}:${si}" data-tl-text="${ucpEscape(text)}" title="${ucpEscape(text)}" style="left:${pct(a).toFixed(3)}%;width:${(pct(b) - pct(a)).toFixed(3)}%"></i>`;
      }).join("")}</div>`).join("");
    const steps = [1, 2, 3, 4, 6, 12, 24, 48, 168].map((hrs) => hrs * 3600000);
    const step = steps.find((st) => span / st <= 8) ?? 30 * 86400000;
    const ticks = [], dt = new Date(start);
    dt.setHours(0, 0, 0, 0);
    while (dt.getTime() <= end && ticks.length < 60) {
      if (dt.getTime() >= start) ticks.push(dt.getTime());
      if (step >= 86400000) dt.setDate(dt.getDate() + Math.round(step / 86400000)); else dt.setTime(dt.getTime() + step);
    }
    const label = (t) => step >= 86400000 || (span > 86400000 && new Date(t).getHours() === 0 && new Date(t).getMinutes() === 0) ? dayFmt.format(t) : clock.format(t);
    const axis = ticks.map((t) => { const p = pct(t); return `<span style="left:${p.toFixed(2)}%;transform:translateX(${p < 4 ? "0" : p > 96 ? "-100%" : "-50%"})">${ucpEscape(label(t))}</span>`; }).join("");
    const grid = ticks.map((t) => `<i style="left:${pct(t).toFixed(2)}%"></i>`).join("");
    return `<div class="tl"><div class="tl-grid" style="grid-area:1 / 2 / ${lanes.length + 1} / 3">${grid}</div>${rows}<div class="tl-axis" style="grid-area:${lanes.length + 1} / 2">${axis}</div></div><div class="tl-info" data-tl-info></div>`;
  }

  _stopData() {
    this._dataToken = null;
    clearInterval(this._interval);
    clearInterval(this._energyWatch);
    if (this._unsubscribe) {
      Promise.resolve(this._unsubscribe()).catch(() => {});
      this._unsubscribe = null;
    }
  }

  _startData() {
    const c = this._config;
    if (!c || !this.isConnected || this._dataToken) return;
    const token = {};
    if (ucpIsClock(c.card_type)) {
      this._dataToken = token;
      this._interval = setInterval(() => this._render(), 1000);
    } else if (c.card_type === "mediaplayer") {
      this._dataToken = token;
      this._interval = setInterval(() => this._mpTick(), 1000);
    } else if (c.card_type === "graph" && c.entities?.some?.(ucpId) && this._hass?.callApi) {
      this._dataToken = token;
      this._historyError = false;
      this._loadHistory(token);
      this._interval = setInterval(() => this._loadHistory(token), 60000);
      if (c.follow_energy_date) this._energyWatch = setInterval(() => {
        const period = this._energyPeriod();
        if (period?.key !== token.periodKey) this._loadHistory(token);
      }, 500);
    } else if (c.card_type === "birdnet" && c.entity && c.follow_energy_date && this._hass?.callApi) {
      this._dataToken = token;
      this._hmLoad(token);
      this._interval = setInterval(() => this._hmLoad(token), 300000);
      this._energyWatch = setInterval(() => {
        if (this._energyPeriod()?.key !== token.periodKey) this._hmLoad(token);
      }, 500);
    } else if (c.card_type === "power-flow" && this._hass?.callWS) {
      this._dataToken = token;
      const tick = () => {
        if (this._dataToken !== token || this._pfModeNow() !== "energy" || token.pfBusy) return;
        const p = this._pfPeriod();
        const live = p && p.end >= Date.now() - 3e5;
        if (!token.pfRun || p?.key !== token.pfKey || (live && Date.now() - token.pfAt > 60000)) {
          token.pfBusy = true;
          this._pfEnergyLoad(token).finally(() => { token.pfBusy = false; });
        }
      };
      this._pfTick = tick;
      this._interval = setInterval(tick, 700);
      tick();
    } else if (c.card_type === "pihole" && c.entity && c.ph_show_history !== false && this._hass?.callApi) {
      this._dataToken = token;
      this._phLoad(token);
      this._interval = setInterval(() => this._phLoad(token), 300000);
    } else if (c.card_type === "weather-forecast" && c.entity && c.show_forecast !== false && this._hass?.connection?.subscribeMessage) {
      this._dataToken = token;
      this._hass.connection.subscribeMessage((event) => {
        if (this._dataToken !== token) return;
        this._forecast = event.forecast ?? [];
        this._render();
      }, { type: "weather/subscribe_forecast", entity_id: c.entity, forecast_type: c.forecast_type })
        .then((unsubscribe) => {
          if (this._dataToken === token) this._unsubscribe = unsubscribe;
          else return unsubscribe();
        }).catch(() => {
          if (this._dataToken === token) this._render();
        });
    }
  }


  /* --- Power Flow: Energiemodus (Zeitraum der Energie-Datumsauswahl) --- */
  _pfModeNow() { return (this._pfMode ?? this._config?.pf_mode) === "energy" ? "energy" : "power"; }

  _pfPeriod() {
    const c = this._config, connection = this._hass?.connection;
    if (!c || !connection) return null;
    const custom = typeof c.collection_key === "string" ? c.collection_key.trim() : "";
    const panel = this._hass.panelUrl || globalThis.location?.pathname.split("/")[1];
    const keys = custom ? [custom.startsWith("_") ? custom : "_" + custom] : panel ? ["_energy_" + panel, "_energy"] : ["_energy"];
    for (const key of keys) {
      const col = connection[key];
      if (!col || col.start == null) continue;
      const start = +new Date(col.start), end = col.end == null ? Date.now() : +new Date(col.end);
      if (Number.isFinite(start) && Number.isFinite(end) && end > start) return { start, end, key: [key, start, col.end == null ? "now" : end].join("/") };
    }
    const d = new Date(); d.setHours(0, 0, 0, 0);
    return { start: +d, end: Date.now(), key: "today/" + (+d) };
  }

  _pfRangeLabel(lang) {
    const p = this._pfPeriodCur;
    if (!p) return "";
    const day = (t) => new Date(t).toDateString();
    const f = (t) => day(t) === day(Date.now()) ? ucpT("Today") : new Date(t).toLocaleDateString(lang, { day: "numeric", month: "short" });
    return day(p.start) === day(p.end - 1) ? f(p.start) : new Date(p.start).toLocaleDateString(lang, { day: "numeric", month: "short" }) + " – " + new Date(p.end - 1).toLocaleDateString(lang, { day: "numeric", month: "short" });
  }

  async _pfPrefs() {
    if (this._pfPrefsData && Date.now() - this._pfPrefsAt < 300000) return this._pfPrefsData;
    let p;
    try { p = await this._hass.callWS({ type: "energy/get_prefs" }); } catch (_) { p = { energy_sources: [] }; }
    const out = { solarNames: [], gridFrom: [], gridTo: [], solar: [], batFrom: [], batTo: [], batList: [], devices: [] };
    for (const s of p?.energy_sources || []) {
      if (s.type === "grid") {
        for (const f of s.flow_from || []) if (f.stat_energy_from) out.gridFrom.push(f.stat_energy_from);
        for (const f of s.flow_to || []) if (f.stat_energy_to) out.gridTo.push(f.stat_energy_to);
        if (s.stat_energy_from) out.gridFrom.push(s.stat_energy_from);
        if (s.stat_energy_to) out.gridTo.push(s.stat_energy_to);
      } else if (s.type === "solar" && s.stat_energy_from) { out.solar.push(s.stat_energy_from); out.solarNames.push(s.name || ""); }
      else if (s.type === "battery") { if (s.stat_energy_from) out.batFrom.push(s.stat_energy_from); if (s.stat_energy_to) out.batTo.push(s.stat_energy_to); out.batList.push({ from: s.stat_energy_from, to: s.stat_energy_to, name: s.name || "" }); }
    }
    for (const d of p?.device_consumption || []) if (d.stat_consumption) out.devices.push({ id: d.stat_consumption, name: d.name });
    this._pfPrefsData = out; this._pfPrefsAt = Date.now();
    return out;
  }

  // Alle konfigurierten Energie- und Leistungssensoren der Karte (Leistung wird bei Bedarf per Riemann-Summe integriert)
  _pfIds(c) {
    const eng = new Set(), pw = new Set(), re = /^[a-z_]+\.[a-z0-9_]+$/;
    const walk = (v, key) => {
      if (typeof v === "string") { if (!re.test(v)) return; if (/energy_entit/.test(key)) eng.add(v); else if (!/^pf_day_|soc_entity|bms_entity/.test(key)) pw.add(v); }
      else if (Array.isArray(v)) v.forEach((x) => walk(x, key));
      else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, k);
    };
    for (const k of Object.keys(c)) if (k.startsWith("pf_")) walk(c[k], k);
    return { eng: [...eng], pw: [...pw] };
  }

  async _pfEnergyLoad(token) {
    const period = this._pfPeriod();
    if (!period) return;
    token.pfRun = (token.pfRun || 0) + 1;
    token.pfKey = period.key; token.pfAt = Date.now();
    const run = token.pfRun;
    try {
      const prefs = await this._pfPrefs();
      const { eng, pw } = this._pfIds(this._config);
      const eids = [...new Set([...eng, ...prefs.gridFrom, ...prefs.gridTo, ...prefs.solar, ...prefs.batFrom, ...prefs.batTo, ...prefs.devices.map((d) => d.id)])];
      const span = period.end - period.start;
      const q = (ids, types, units, per) => ids.length ? this._hass.callWS({ type: "recorder/statistics_during_period", start_time: new Date(period.start).toISOString(), end_time: new Date(period.end).toISOString(), statistic_ids: ids, period: per, types, units }) : Promise.resolve({});
      const [chg, mean] = await Promise.all([
        q(eids, ["change"], { energy: "kWh" }, span > 90 * 864e5 ? "day" : "hour").catch(() => ({})),
        q(pw, ["mean"], { power: "W" }, span <= 9 * 864e5 ? "5minute" : "hour").catch(() => ({})),
      ]);
      if (this._dataToken !== token || run !== token.pfRun) return;
      const t = (v) => typeof v === "number" ? v : +new Date(v);
      const change = {}, power = {}, now = Date.now();
      for (const [id, rows] of Object.entries(chg || {})) if (rows?.length) change[id] = rows.reduce((a, r) => a + (Number(r.change) || 0), 0);
      for (const [id, rows] of Object.entries(mean || {})) {
        if (!rows?.length) continue;
        let p = 0, n = 0;
        for (const r of rows) { const m = Number(r.mean); if (!Number.isFinite(m)) continue; const h = (Math.min(t(r.end), now) - t(r.start)) / 3.6e6; if (h <= 0) continue; if (m > 0) p += m * h; else n -= m * h; }
        power[id] = { pos: p / 1000, neg: n / 1000 };
      }
      this._pfE = { change, power, prefs }; this._pfPeriodCur = period;
      this._pfEVer = (this._pfEVer || 0) + 1;
      this._render();
    } catch (_) { /* Werte bleiben leer ("—") */ }
  }

  _energyPeriod() {
    const c = this._config;
    const connection = this._hass?.connection;
    if (!c?.follow_energy_date || !connection) return null;
    const custom = typeof c.collection_key === "string" ? c.collection_key.trim() : "";
    const panel = this._hass.panelUrl || globalThis.location?.pathname.split("/")[1];
    const keys = custom ? [custom.startsWith("_") ? custom : "_" + custom]
      : panel ? ["_energy_" + panel, "_energy"] : ["_energy"];
    for (const key of keys) {
      const collection = connection[key];
      if (!collection || collection.start == null) continue;
      const start = +new Date(collection.start);
      const selectedEnd = collection.end == null ? null : +new Date(collection.end);
      if (!Number.isFinite(start) || (selectedEnd !== null && (!Number.isFinite(selectedEnd) || selectedEnd <= start))) continue;
      return { start, selectedEnd, key: [key, start, selectedEnd].join("/") };
    }
    return null;
  }

  // BirdNET: vergangene Tage der Energie-Datumsauswahl aus der Verlaufs-Datenbank (letzter Zustand je Tag, Attribut {Name: [24 Werte]})
  async _hmLoad(token) {
    const period = this._energyPeriod();
    const key = period?.key ?? "live";
    const changed = token.periodKey !== key;
    token.periodKey = key;
    const todayStart = new Date().setHours(0, 0, 0, 0);
    if (!period || period.start >= todayStart) {
      if (this._hmPast) { this._hmPast = null; this._render(); }
      return;
    }
    if (token.loading && !changed) return;
    if (changed) { this._hmPast = null; this._render(); }
    const request = {};
    token.loading = request;
    const attr = this._config.hm_attribute || "stunden";
    const start = Math.max(period.start, todayStart - 366 * 86400000);
    const end = Math.min(period.selectedEnd ?? todayStart, todayStart);
    const current = () => this._dataToken === token && token.loading === request;
    let map = {};
    const days = [];
    try {
      const query = new URLSearchParams({ filter_entity_id: this._config.entity, end_time: new Date(end).toISOString(), significant_changes_only: "0" });
      const rows = await this._hass.callApi("GET", `history/period/${encodeURIComponent(new Date(start).toISOString())}?${query}`);
      const lastOfDay = new Map();
      for (const state of Array.isArray(rows?.[0]) ? rows[0] : []) {
        const d = new Date(state.last_changed ?? state.last_updated);
        if (Number.isNaN(+d)) continue;
        const day = d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDate();
        if (state.attributes?.[attr] && typeof state.attributes[attr] === "object") lastOfDay.set(day, { attrs: state.attributes, ts: new Date(d).setHours(0, 0, 0, 0) });
      }
      for (const { attrs, ts } of lastOfDay.values()) {
        days.push({ ts, arten: attrs.arten, konf: attrs.konf, zeit: attrs.zeit });
        for (const [name, values] of Object.entries(attrs[attr])) {
          const sum = map[name] ??= Array(24).fill(0);
          if (Array.isArray(values)) for (let i = 0; i < 24; i++) sum[i] += Number(values[i]) || 0;
        }
      }
    } catch { map = {}; }
    if (!current()) return;
    token.loading = null;
    this._hmPast = { key, map, days };
    this._render();
  }

  async _loadHistory(token) {
    const period = this._energyPeriod();
    const key = period?.key;
    if (token.loading && token.periodKey === key) return;
    const changed = token.periodKey !== key;
    token.periodKey = key;
    if (changed) {
      this._history = null;
      this._historyError = false;
      this._render();
    }
    const request = {};
    token.loading = request;
    const now = Date.now();
    const end = period?.selectedEnd ?? now;
    const start = period?.start ?? end - nbClamp(ucpNum(this._config.hours_to_show) ?? 24, 1, 8760) * 3600000;
    const dataEnd = Math.min(end, now);
    const current = () => this._dataToken === token && token.loading === request;
    try {
      const ids = [...new Set(this._config.entities.map(ucpId).filter(Boolean))];
      const operation = this._config.graph_function;
      const useStatistics = this._config.graph_type !== "timeline" && operation !== "history" && Object.hasOwn(UCP_GRAPH_FUNCTIONS, operation);
      let rows = [], statistics = null;
      if (useStatistics) {
        statistics = Object.create(null);
        if (dataEnd > start) {
          const spanHours = (end - start) / 3600000;
          const period = spanHours <= 3 ? "5minute" : spanHours <= 48 ? "hour" : spanHours <= 744 ? "day" : "month";
          const result = await this._hass.callWS({
            type: "recorder/statistics_during_period", statistic_ids: ids, period,
            start_time: new Date(start).toISOString(), end_time: new Date(dataEnd).toISOString(),
            types: operation === "delta" ? ["min", "max"] : [operation],
          });
          for (const id of ids) {
            statistics[id] = (result?.[id] ?? []).map((slot) => {
              const time = typeof slot.start === "number" ? slot.start : Date.parse(slot.start);
              const min = ucpNum(slot.min), max = ucpNum(slot.max);
              const value = operation === "delta" ? min === null || max === null ? null : max - min : ucpNum(slot[operation]);
              const end = typeof slot.end === "number" ? slot.end : Date.parse(slot.end);
              return [time, value, end];
            }).filter(([time]) => Number.isFinite(time) && time < dataEnd).sort(([a], [b]) => a - b);
          }
        }
      } else if (dataEnd > start) {
        const query = new URLSearchParams({ filter_entity_id: ids.join(","),
          end_time: new Date(dataEnd).toISOString(), minimal_response: "1", no_attributes: "1" });
        rows = await this._hass.callApi("GET", `history/period/${encodeURIComponent(new Date(start).toISOString())}?${query}`);
      }
      if (!current()) return;
      this._history = { start, end: Math.max(start + 1, end), dataEnd, rows: Array.isArray(rows) ? rows : [], statistics };
      this._historyError = false;
    } catch {
      if (!current()) return;
      this._historyError = true;
    } finally {
      if (current()) token.loading = null;
    }
    this._render();
  }

  _clearSwitchPending() {
    clearTimeout(this._switchPending?.timer);
    clearTimeout(this._switchPending?.showTimer);
    this._switchPending = null;
  }

  async _toggleSwitch(hass, id) {
    if (this._switchPending) return;
    const pending = { expected: this._state?.state === "on" ? "off" : "on" };
    this._switchPending = pending;
    this._feedback = "";
    // "Schaltet …" erst nach 0,5 s zeigen, damit es bei schnellen Geräten nicht aufblitzt
    pending.showTimer = setTimeout(() => {
      if (this._switchPending !== pending) return;
      pending.show = true;
      this._render();
    }, 500);
    pending.timer = setTimeout(() => {
      if (this._switchPending !== pending) return;
      this._clearSwitchPending();
      this._render();
    }, 5000);
    this._render();
    try {
      await hass.callService("homeassistant", "toggle", { entity_id: id });
    } catch {
      if (this._switchPending !== pending) return;
      this._clearSwitchPending();
      this._render();
    }
  }

  async _act(action, raw) {
    const c = this._config;
    const id = c.entity;
    const hass = this._hass;
    if (!hass || !id) return;
    if (action === "info") {
      this.dispatchEvent(new CustomEvent("hass-more-info", { detail: {entityId:id}, bubbles:true, composed:true }));
      return;
    }
    if (action === "light-panel") {
      this._lightPanel = this._lightPanel === raw ? null : raw;
      this._render();
      return;
    }
    if (action === "dwd-toggle") {
      const open = new Set(this._dwdOpen ?? []);
      if (open.has(raw)) open.delete(raw); else open.add(raw);
      this._dwdOpen = open;
      this._render();
      return;
    }
    if (!this._available()) return;
    if (action.startsWith("wd-")) return this._wdAct(action, raw);
    if (action === "ph-toggle") return this._phToggle();
    if (action.startsWith("mp-")) return this._mpAct(action, raw);
    if (action === "toggle" && c.card_type === "switch") return this._toggleSwitch(hass, id);
    const domain = id.split(".")[0];
    const target = { entity_id: id };
    const a = this._attrs;
    const call = (domain,service,data = {}) => hass.callService(domain,service,{...target,...data});
    const brightness = (value) => value <= 0 ? call("light","turn_off") : call("light","turn_on",{brightness_pct:Math.round(value)});
    const value = ucpNum(raw);
    this._feedback = "";
    if (action === "brightness") this._markup = null;
    try {
      if (action === "toggle") {
        await call("homeassistant","toggle");
      } else if (action === "brightness" && value !== null) {
        await brightness(nbClamp(value,0,100));
      } else if (action === "light-hs" && /^\d+,\d+$/.test(raw || "")) {
        await call("light", "turn_on", { hs_color: raw.split(",").map(Number) });
      } else if (action === "light-color" && value !== null) {
        const fullColor = (Array.isArray(a.supported_color_modes) ? a.supported_color_modes : []).some((mode) => ["hs", "xy", "rgb", "rgbw", "rgbww"].includes(mode));
        const swatchColor = ucpLightColors(c.light_colors)[nbClamp(value, 0, 4)];
        const rgb = fullColor ? ucpResolveRgb(this._body, swatchColor) : null;
        await call("light", "turn_on", fullColor ? { rgb_color: rgb ?? [255, 255, 255] }
          : { color_temp_kelvin: UCP_LIGHT_WHITES.kelvin[nbClamp(value, 0, 4)] });
      } else if (action === "volume" && value !== null) {
        await call("media_player","volume_set",{volume_level:nbClamp(value,0,100)/100});
      } else if (action === "slide" && value !== null) {
        const s = this._slider();
        if (!s || s.value == null || s.max <= s.min) return;
        const next = nbClamp(Number((s.min+Math.round((value-s.min)/s.step)*s.step).toFixed(8)),s.min,s.max);
        if (domain === "cover") await call(domain,"set_cover_position",{position:Math.round(next)});
        else if (domain === "light") await brightness(next);
        else if (domain === "media_player") await call(domain,"volume_set",{volume_level:next/100});
        else await call(domain,"set_value",{value:next});
      } else if (action === "climate-mode" && a.hvac_modes?.includes(raw)) {
        await call("climate","set_hvac_mode",{hvac_mode:raw});
      } else if (["temp-up", "temp-down", "temperature"].includes(action)) {
        this._setTemperature(action, value);
        return;
      } else if (["media_play","media_pause","media_stop","media_previous_track","media_next_track"].includes(action)) {
        await call("media_player",action);
      }
    } catch (error) {
      if (this._config === c) this._feedback = error?.message || "Action failed.";
    }
    if (this._config === c) this._render();
  }
}

class UltimateBarCard extends NeonBarCard {
  _build() {
    super._build();
    const style = document.createElement("style");
    style.textContent = UCP_STYLE + String.raw`
      ha-card.theme { --nb-glow: 0; --nb-title-weight: 500; --nb-title-color: var(--u-text);
        --nb-bg: var(--u-bg);
        padding: 0; }
      ha-card.theme { border: var(--nb-border); }
      .item { background: none; border: 0; box-shadow: none; }
      .h .item { padding: 8px 12px 10px; row-gap: 8px; }
      .v .item { padding: 3px 4px; gap: 8px; }
      .h .value { font-size: var(--nb-fs-value); }
      .v .value { margin-bottom: 8px; }
      .card-title { color: var(--title-color, var(--nb-title-color)); font-size: var(--title-font-size, var(--u-font-m)); text-align: var(--title-align, left); }
      .card-title ha-icon { margin-inline-end: 5px; }
      .h .track { height: var(--nb-size, 17px); }
      .v .track { width: var(--nb-size, 19px); height: var(--nb-h, 124px); }
      .segmented.h .bar, .segmented.v .bar {
        -webkit-mask-image: repeating-linear-gradient(var(--led-direction), #000 0 var(--led-fill),
          transparent var(--led-fill) var(--led-period));
        mask-image: repeating-linear-gradient(var(--led-direction), #000 0 var(--led-fill),
          transparent var(--led-fill) var(--led-period));
      }
      .segmented.h { --led-direction: 90deg; }
      .segmented.v { --led-direction: 0deg; }
      .h .fill, .v .fill, .h .item.neg .fill, .v .item.neg .fill { background: var(--c1); }
      .cap { border-color: var(--c1); box-shadow: none; }
      .wrap > .stats { margin: 0; }
    `;
    this.shadowRoot.append(style);
    const title = this.shadowRoot.querySelector(".card-title");
    title.style.setProperty("--title-align", ucpAlign(this._config.title_align));
    if (!this._config.hide_title_icon) {
      const iconHtml = ucpTitleIcon(this._config.title_icon || (!this._config.hide_icons ? this._config.icon : ""));
      if (iconHtml) {
        title.insertAdjacentHTML("afterbegin", iconHtml);
        if (this._config.hide_title) title.hidden = false;
      }
    }
    const card = title.closest("ha-card");
    card.classList.toggle("hide-state", !!this._config.hide_state);
    const period = 100 / ucpLedCount(this._config.led_segments);
    card.style.setProperty("--led-period", period + "%");
    card.style.setProperty("--led-fill", period * .76 + "%");
    if (this._config.name_marquee) {
      const label = document.createElement("span");
      label.className = "title-label";
      label.append(...title.childNodes);
      title.append(label);
      title.classList.add("marquee-title");
    }
    ucpBindTitleIcons(title);
  }

  setConfig(config) {
    // Eigene Farbe je Entität (color: "#rrggbb"): gilt für alle Stufen, damit der Balken unabhängig vom Wert diese Farbe behält
    const rowColor = (row) => {
      const themed = this._themeRow(row), color = nbSafeColor(row.color, "");
      delete themed.color;
      return color ? { ...themed, normal_color: color, warning_color: color, critical_color: color } : themed;
    };
    const themeConfig = { ...config, entities: config.entities.map((row) =>
      typeof row === "object" && row !== null ? rowColor(row) : row) };
    super.setConfig(this._themeRow(themeConfig));
  }

  _themeRow(row) {
    const themeRow = { ...row };
    for (const key of ["normal_color", "warning_color", "critical_color"]) delete themeRow[key];
    return themeRow;
  }

  setFooter(stats) {
    const wrap = this.shadowRoot.querySelector(".wrap");
    wrap.querySelector(".stats")?.remove();
    if (stats) {
      wrap.insertAdjacentHTML("beforeend", stats);
      ucpBindTitleIcons(wrap);
    }
  }
}
if (!customElements.get(UCP_EDITOR)) customElements.define(UCP_EDITOR, UltimateCardEditor);
if (!customElements.get(UCP_TAG + "-bar")) customElements.define(UCP_TAG + "-bar", UltimateBarCard);
if (!customElements.get(UCP_TAG)) customElements.define(UCP_TAG, UltimateCardPackage);
if (!window.customCards.some((card) => card.type === UCP_TAG)) {
  window.customCards.push({
    type: UCP_TAG,
    name: "HA Ultimate Card Package",
    description: "Many card types with a shared visual editor.",
    preview: true,
  });
}
})();
