# HA Ultimate Card Package

[![Home Assistant Marketplace](https://img.shields.io/badge/Home%20Assistant-Marketplace-blue.svg)](https://www.home-assistant.io/integrations/marketplace/) ![version](https://img.shields.io/github/v/release/Schwippser/ha-ultimate-card-package?include_prereleases&label=version&color=blue) ![status](https://img.shields.io/badge/status-beta-yellow)

<a href="https://www.buymeacoffee.com/tomreim0s" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" ></a>

One Lovelace resource, 21 card types, one visual editor. All cards share the same styling, status colors, extra values, actions and themes.

> **Beta release.** Things may change between versions. Please report problems in the [issue tracker](../../issues).

*[Deutsche Version](README.de.md)*

## Card types

Active List · Bar · Battery · BirdNET · Climate · Clock · Clock (Music) · Energy Values · Gauge · Graph · Heatmap · Light · Media Player · Pi-hole · Power Flow · Slider · State · Switch · WashData · Weather Forecast (with optional weather warnings) · Weather Warning

## Features

- Visual editor with collapsible groups (Styling, Card-specific settings, Actions) – no YAML required
- 8 designs: HA theme, Neon, Glassmorphism, Neumorphism (light/dark), Flat, Skeuomorph, Minimal, plus your own presets
- Status colors, backgrounds and shadows for *on* / *off*, including gradients and theme variables
- Extra values (additional entities/attributes) with their own name, icon, order and on/off background, shadow and font color
- Tap, double-tap and hold actions for card, icon, name and state
- Horizontal and vertical layouts for many card types
- English by default; follows the Home Assistant language (German is built in, more languages via translation files)

## Installation

### MARKETPLACE (custom repository)

[![Open your Home Assistant instance and open this repository in the Marketplace.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Schwippser&repository=ha-ultimate-card-package&category=plugin)

1. In Home Assistant open **Settings → Marketplace** and add a custom repository (menu **⋮ → Custom repositories**).
2. Enter `https://github.com/Schwippser/ha-ultimate-card-package` with type **Dashboard** (formerly "Lovelace").
3. Search for **HA Ultimate Card Package** and install it (enable *Show beta versions* to get beta releases).
4. Reload the browser (Ctrl+F5). The Marketplace registers the resource automatically.

### Manual

1. Download `ha-ultimate-card-package.js` from the latest [release](../../releases) and copy it to `config/www/ha-ultimate-card-package/`. It is a single file; the German translation is built in.
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

English is the default and German is built into the script. Further languages are loaded from an optional `translations/<lang>.json` next to the script (flat `"English text": "translation"`). The language of the Home Assistant user is used; if there is no translation, English is shown. To add a language, copy `translations/de.json` from the repository, translate the values and open a pull request.

## Known limitations (beta)

- Error messages for invalid configurations are English only.
- Not every card type supports every layout option yet.

## License

[MIT](LICENSE)
