# Carzino WordPress Plugin

This plugin embeds the Carzino React app into WordPress.

## Development
- React source in `/frontend`
- Build output goes to `/build`
- WordPress loads React app via `carzino-plugin.php`

## Usage
Activate the plugin in WordPress, and insert:
```html
<div id="carzino-root"></div>
```
where you want the app to appear.
