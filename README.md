Portafolio (Frontend)
Descripción

Una sola sección: Header, Proyectos (3 tarjetas), Contacto.
Frontend-only. Contenido editable en src/mock.js.
Comandos

Desarrollo: yarn start
Build producción: yarn build
Estructura

public/ — HTML base
src/App.js — Layout principal
src/mock.js — Datos (nombre/tagline/proyectos/contacto)
src/portfolio.css — Estilos globales (una sola hoja)
src/components/ui/ — Componentes UI (Button, Card)
Despliegue rápido

Vercel/Netlify: usa yarn build y publica la carpeta build.
Notas

Email: mailto: lopezvarelajuan@hotmail.com
Enlaces: GitHub y LinkedIn abren en nueva pestaña.
Para cambiar placeholders, edita projects[1] y projects[2] en src/mock.js.
Instrucciones para crear los archivos

Crea una carpeta vacía, p. ej. portfolio-juan-felipe.
Dentro, crea package.json y la carpeta public con index.html.
Crea src/ con los archivos listados (App.js, index.js, portfolio.css, mock.js).
Crea src/components/ui/ y añade button.jsx y card.jsx.
Ejecuta:
yarn
yarn start
yarn build (opcional para publicar)
Confirmación solicitada

App.js está incluido en src/App.js.
package.json está en la raíz.
src y public quedan completos para ejecutar yarn start de inmediato.
