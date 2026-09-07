# Cuaderno de viaje — Viajes de febrero

Sitio estático (HTML/CSS/JS puro, sin instalación ni dependencias) para comparar los 4 viajes armados en el Excel: España, Bariloche, Brasil y Miami+Orlando.

## Cómo abrirlo

1. Descomprimí el zip y abrí la carpeta `viajes` en VS Code.
2. La forma más cómoda de verlo es con la extensión **Live Server** (botón derecho sobre `index.html` → "Open with Live Server"). También funciona haciendo doble clic en `index.html` para abrirlo directo en el navegador, pero algunos navegadores restringen el guardado local (`localStorage`) al abrir archivos con `file://`, así que Live Server es más confiable.

No hace falta `npm install` ni ningún servidor: son 4 archivos.

## Estructura

```
viajes/
├── index.html          → toda la estructura de la página (inicio + detalle)
├── assets/
│   ├── style.css        → estilos
│   ├── app.js            → lógica: render de tarjetas, tabs, pasajes y alojamientos
│   └── data.js            → itinerarios y gastos, generados a partir del Excel
```

## Qué podés hacer

- **Inicio:** una tarjeta tipo "boarding pass" por cada viaje, con fechas, noches y gasto total. Click para entrar.
- **Itinerario:** el día a día completo, tal como está en el Excel.
- **Gastos:** el desglose de precios y el total del viaje.
- **Pasajes y alojamiento:**
  - Subís imágenes de los pasajes (capturas o fotos) — se guardan en el navegador.
  - Agregás links de Airbnb/Booking/hoteles con nombre y notas — también se guardan en el navegador.

## Sobre el guardado de datos

Los pasajes y alojamientos que agregues **se guardan en el navegador donde los cargaste** (`localStorage`), no en un servidor ni en la nube. Esto significa:

- Van a seguir ahí la próxima vez que abras el sitio, **en la misma compu y el mismo navegador**.
- Si lo abrís desde otro dispositivo o navegador, no vas a ver lo que cargaste en otro lado.
- Si borrás el historial/datos de navegación del navegador, se pierden.
- Las imágenes de pasajes pesan bastante en base64; si cargás muchas y el navegador se queda sin espacio, vas a ver un aviso al guardar.

## Actualizar el itinerario o los gastos

Si en algún momento cambian el Excel, decime y te regenero `assets/data.js` con los datos nuevos — no hace falta tocar nada más del sitio.
