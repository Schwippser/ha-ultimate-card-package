# HA Ultimate Card Package

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
![Status](https://img.shields.io/badge/status-beta-yellow)

Eine Lovelace-Ressource, 21 Kartentypen, ein visueller Editor. Alle Karten teilen Styling, Status-Farben, Zusatzwerte, Aktionen und Designs.

> **Beta-Release.** Zwischen Versionen kann sich noch etwas ändern. Probleme bitte im [Issue-Tracker](../../issues) melden.

*[English version](README.md)*

## Kartentypen

Active List · Bar · Battery · BirdNET · Climate · Clock · Clock (Musik) · Energy Values · Gauge · Graph · Heatmap · Light · Mediaplayer · Pi-hole · Power Flow · Slider · State · Switch · WashData · Weather Forecast (mit optionalen Wetterwarnungen) · Weather Warning

## Funktionen

- Visueller Editor mit aufklappbaren Gruppen (Styling, Kartenspezifische Einstellungen, Actions) – kein YAML nötig
- 8 Designs: HA-Theme, Neon, Glassmorphism, Neumorphism (hell/dunkel), Flat, Skeuomorph, Minimal sowie eigene Presets
- Status-Farben, Hintergründe und Schatten für *an* / *aus*, auch als Verlauf oder Theme-Variable
- Zusatzwerte (weitere Entitäten/Attribute) mit eigenem Namen, Icon, Reihenfolge sowie Hintergrund, Schatten und Schriftfarbe bei an/aus
- Tap-, Double-Tap- und Hold-Aktionen für Karte, Icon, Name und Status
- Horizontales und vertikales Layout für viele Kartentypen
- Standardsprache Englisch; die Sprache von Home Assistant wird über Übersetzungsdateien übernommen (Deutsch liegt bei)

## Installation über HACS (benutzerdefiniertes Repository)

1. In Home Assistant **HACS → ⋮ → Benutzerdefinierte Repositories** öffnen.
2. `https://github.com/Schwippser/ha-ultimate-card-package` mit dem Typ **Dashboard** (früher „Lovelace“) hinzufügen.
3. **HA Ultimate Card Package** suchen und installieren (für Beta-Versionen „Beta-Versionen anzeigen“ aktivieren).
4. Browser neu laden (Strg+F5). HACS trägt die Ressource automatisch ein.

## Manuelle Installation

1. `ha-ultimate-card-package.zip` vom neuesten [Release](../../releases) laden und nach `config/www/ha-ultimate-card-package/` entpacken (Skript und Ordner `translations` zusammen).
2. Ressource `/local/ha-ultimate-card-package/ha-ultimate-card-package.js` vom Typ *JavaScript-Modul* hinzufügen (Einstellungen → Dashboards → ⋮ → Ressourcen).
3. Browser neu laden (Strg+F5).

## Verwendung

Karte hinzufügen, **HA Ultimate Card Package** wählen, Kartentyp auswählen und im Editor konfigurieren. Oder per YAML:

```yaml
type: custom:ha-ultimate-card-package
card_type: light
entity: light.wohnzimmer
card_style: glassmorphism
card_layout: horizontal
card_color_on: linear-gradient(135deg, #4FE3C8 0%, #38A8FF 100%)
detail_entities:
  - entity: sensor.wohnzimmer_temperatur
    name: Temperatur
```

Ein ausführliches Handbuch liegt unter [`docs/`](docs/HA-Ultimate-Card-Package-Dokumentation.docx).

## Übersetzungen

Standard ist Englisch. Übersetzungen liegen in `translations/<sprache>.json` (flach: `"Englischer Text": "Übersetzung"`). Verwendet wird die Sprache des Home-Assistant-Benutzers; fehlt die Datei, erscheint Englisch. Für eine neue Sprache `translations/de.json` kopieren, die Werte übersetzen und einen Pull Request öffnen.

## Bekannte Einschränkungen (Beta)

- Fehlermeldungen bei ungültiger Konfiguration sind nur auf Englisch.
- Nicht jeder Kartentyp unterstützt jede Layout-Option.

## Lizenz

[MIT](LICENSE)
