# Landing DASC | Diseño Interactivo

Landing estática para trabajar en GitHub Pages o en un repositorio independiente.

## Archivos

```text
index.html
styles.css
script.js
assets/
  hero-diseno-interactivo.png
  logo-DASC-Blanco.png
README.md
```

## Cómo probar localmente

Abre `index.html` en el navegador.

## Imágenes

Ya quedaron configuradas en `styles.css`:

```css
--hero-image: url("./assets/hero-diseno-interactivo.png");
--logo-image: url("./assets/logo-DASC-Blanco.png");
```

Para cambiar imágenes después, reemplaza los archivos dentro de la carpeta `assets/` o edita esas variables.

## WhatsApp

Número configurado:

```text
+52 1 222 360 6438
```

Los mensajes incluyen el identificador:

```text
🌐🎯
```

## Analytics

El código dispara este evento cuando existe `gtag`:

```js
gtag("event", "click_whatsapp", {
  programa: "diseno_interactivo",
  origen: "..."
});
```

## Sección nueva agregada

Se agregó la sección:

```text
Te invitamos a conocer la carrera de Diseño Interactivo
```

con CTA para registro a sesión informativa vía WhatsApp.
