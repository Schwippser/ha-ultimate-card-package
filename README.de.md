# HA Ultimate Card Package

[![Home Assistant Marketplace](https://img.shields.io/badge/Home%20Assistant-Marketplace-blue.svg)](https://www.home-assistant.io/integrations/marketplace/) ![version](https://img.shields.io/github/v/release/Schwippser/ha-ultimate-card-package?include_prereleases&label=version&color=blue) ![status](https://img.shields.io/badge/status-beta-yellow)

<a href="https://www.buymeacoffee.com/tomreim0s" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" ></a>

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
- Standardsprache Englisch; die Sprache von Home Assistant wird übernommen (Deutsch ist eingebaut, weitere Sprachen über Übersetzungsdateien)

## Installation

### MARKETPLACE (benutzerdefiniertes Repository)

[![Open your Home Assistant instance and open this repository in the Marketplace.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Schwippser&repository=ha-ultimate-card-package&category=plugin)

1. In Home Assistant **Einstellungen → Marketplace** öffnen und ein benutzerdefiniertes Repository hinzufügen (Menü **⋮ → Benutzerdefinierte Repositories**).
2. `https://github.com/Schwippser/ha-ultimate-card-package` mit dem Typ **Dashboard** (früher „Lovelace“) eintragen.
3. **HA Ultimate Card Package** suchen und installieren (für Beta-Versionen „Beta-Versionen anzeigen“ aktivieren).
4. Browser neu laden (Strg+F5). Der Marketplace trägt die Ressource automatisch ein.

### Manuell

1. `ha-ultimate-card-package.js` vom neuesten [Release](../../releases) laden und nach `config/www/ha-ultimate-card-package/` kopieren. Es ist eine einzelne Datei, die deutsche Übersetzung ist eingebaut.
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

Standard ist Englisch, Deutsch ist ins Skript eingebaut. Weitere Sprachen werden aus einer optionalen `translations/<sprache>.json` neben dem Skript geladen (flach: `"Englischer Text": "Übersetzung"`). Verwendet wird die Sprache des Home-Assistant-Benutzers; fehlt eine Übersetzung, erscheint Englisch. Für eine neue Sprache `translations/de.json` aus dem Repository kopieren, die Werte übersetzen und einen Pull Request öffnen.

## Bekannte Einschränkungen (Beta)

- Fehlermeldungen bei ungültiger Konfiguration sind nur auf Englisch.
- Nicht jeder Kartentyp unterstützt jede Layout-Option.

## Lizenz

[MIT](LICENSE)
