# HA Ultimate Card Package

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
![Status](https://img.shields.io/badge/status-beta-yellow)

One Lovelace resource, 17 card types, one visual editor. All cards share the same styling, status colors, extra values, actions and themes.

> **Beta release.** Things may change between versions. Please report problems in the [issue tracker](../../issues).

*[Deutsche Version](README.de.md)*

## Card types

Bar · Battery · Climate · Clock · Clock (Music) · Energy Values · Gauge · Graph · Light · Media Player · Pi-hole · Slider · State · Switch · WashData · Weather Forecast (with optional weather warnings) · Weather Warning

## Features

- Visual editor with collapsible groups (Styling, Card-specific settings, Actions) – no YAML required
- 8 designs: HA theme, Neon, Glassmorphism, Neumorphism (light/dark), Flat, Skeuomorph, Minimal, plus your own presets
- Status colors, backgrounds and shadows for *on* / *off*, including gradients and theme variables
- Extra values (additional entities/attributes) with their own name, icon, order and on/off background, shadow and font color
- Tap, double-tap and hold actions for card, icon, name and state
- Horizontal and vertical layouts for many card types
- English by default; follows the Home Assistant language via translation files (German included)

## Installation via HACS (custom repository)

1. In Home Assistant open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Schwippser/ha-ultimate-card-package` with type **Dashboard** (formerly "Lovelace").
3. Search for **HA Ultimate Card Package**, install it (enable *Show beta versions* to get beta releases).
4. Reload the browser (Ctrl+F5). HACS registers the resource automatically.

## Manual installation

1. Download `ha-ultimate-card-package.zip` from the latest [release](../../releases) and extract it to `config/www/ha-ultimate-card-package/` (script and `translations` folder together).
2. Add the resource `/local/ha-ultimate-card-package/ha-ultimate-card-package.js` of type *JavaScript module* (Settings → Dashboards → ⋮ → Resources).
3. Reload the browser (Ctrl+F5).

## Usage

Add a card, choose **HA Ultimate Card Package**, select the card type and configure it in the editor. Or in YAML:

```yaml
type: custom:ha-ultimate-card-package
card_type: light
entity: light.living_room
card_style: glassmorphism
card_layout: horizontal
card_color_on: linear-gradient(135deg, #4FE3C8 0%, #38A8FF 100%)
detail_entities:
  - entity: sensor.living_room_temperature
    name: Temperature
```

A full German manual is in [`docs/`](docs/HA-Ultimate-Card-Package-Dokumentation.docx).

## Translations

English is the default. Translations live in `translations/<lang>.json` (flat `"English text": "translation"`). The language of the Home Assistant user is used; if there is no file, English is shown. To add a language copy `translations/de.json`, translate the values and open a pull request.

## Known limitations (beta)

- Error messages for invalid configurations are English only.
- Not every card type supports every layout option yet.

## License

[MIT](LICENSE)
