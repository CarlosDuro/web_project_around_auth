# Proyecto Web Project Around Auth (Sprint 17)

## 🧠 Descripción general

En este Sprint 17 profundicé en la autenticación y autorización en aplicaciones web con React. Ya sabía cómo conectar una app Express a una base de datos y crear una API para el front-end, pero ahora di un paso más para que la app sea totalmente funcional, gestionando usuarios en grupos con distintos niveles de acceso.

Estudié y apliqué los fundamentos de la autenticación tanto en back-end como en front-end, e implementé el registro y la autorización de usuarios usando React, consumiendo una API externa real. Además, aprendí a manejar el almacenamiento seguro de tokens JWT con localStorage y a controlar las rutas protegidas según el estado de sesión.

También integré la gestión del usuario global mediante React Context, mostrando información dinámica en el header y asegurando que el usuario permanezca logueado entre recargas. Por último, reforcé conceptos de seguridad web para proteger la aplicación y los datos que se intercambian.

La aplicación permite gestionar tarjetas de usuario con información, imágenes y funcionalidades como "like", edición, eliminación y visualización en popups. Además, se conecta con una API REST externa real para persistir datos, lo cual representa un paso importante en la preparación para proyectos profesionales.

---

## 🆕 Novedades del Sprint 14

- 🔌 Implementación completa de autenticación y autorización en front-end con React y API externa.
- ⚙️ Manejo de tokens JWT con localStorage para sesiones persistentes.
- 🔒 Protección de rutas privadas usando React Router y componente ProtectedRoute.
- 🧩 Estado global del usuario con React Context para facilitar acceso y actualización en toda la app.
- 🖥️ Visualización dinámica del email del usuario autenticado en el Header.
- 🏗️ Manejo de carga y datos seguros para perfil, avatar y tarjetas desde la API.
- 🎯 Popups de información (éxito/error) mejorados, con estilos y posicionamiento ajustados.
- 🔄 Unificación de lógica para "like/unlike" mediante changeLikeCardStatus.
- 🚀 Vite + React conectado correctamente a la API remota y preparado para producción.
- 🛡️ Conceptos de seguridad web integrados para proteger datos y autenticación.

---

## ⚙️ Tecnologías usadas

| Herramienta            | Descripción                                            |
| ---------------------- | ------------------------------------------------------ |
| **React**              | Librería declarativa para construir UI componible      |
| **Vite**               | Bundler moderno para desarrollo rápido con React       |
| **React Router DOM**   | Navegación estructurada y protección de rutas          |
| **Context API**        | Manejo de estado global del usuario                    |
| **JavaScript (ES6+)**  | Lógica, promesas, módulos, async/await                 |
| **CSS Modular + BEM**  | Estilizado escalable y reutilizable                    |
| **API REST externa**   | Conexión real con backend (usuarios, tarjetas, avatar) |
| **Git + GitHub Pages** | Control de versiones, despliegue y colaboración        |

---

## 📁 Estructura del Proyecto

```plaintext
public/
├── vite.svg
└── images/
    ├── Addbutton.png
    ├── Avatar.jpg
    ├── baldmountains.jpg
    ├── Closeicon.svg
    ├── Editbutton.png
    ├── lake.jpg
    ├── lagobraies.jpg
    ├── latemar.jpg
    ├── logoaround.png
    ├── moved_project-4-01-eng.gif
    ├── Trash.png
    ├── Union.svg
    ├── Vector.svg
    ├── vanoise.jpg
    └── yosemite.jpg

src/
├── index.css             # Estilos globales
├── main.jsx              # Punto de entrada de React
│
├── assets/
│   └── react.svg         # Recursos estáticos
│
├── components/
│   ├── App.jsx           # Componente principal
│   │
│   ├── Footer/
│   │   └── Footer.jsx
│   │
│   ├── Header/
│   │   └── Header.jsx
│   │
│   ├── ImagePopup/
│   │   └── ImagePopup.jsx
│   │
│   ├── InfoTooltip/
│   │   └── InfoTooltip.jsx
│   │
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ProtectedRoute.jsx
│   │
│   └── Main/
│       ├── Main.jsx
│       │
│       ├── components/
│       │   ├── Card/
│       │   │   └── Card.jsx
│       │   │
│       │   ├── ImagePopup/
│       │   │   └── ImagePopup.jsx
│       │   │
│       │   └── Popup/
│       │       └── Popup.jsx
│       │
│       └── form/
│           ├── EditAvatar/
│           │   └── EditAvatar.jsx
│           │
│           ├── EditProfile/
│           │   └── EditProfile.jsx
│           │
│           └── NewCard/
│               └── NewCard.jsx

vendor/
├── normalize.css         # Reset de estilos
└── fonts/
    ├── fonts.css
    ├── Inter-Bold.woff2
    ├── Inter-Regular.woff2
    ├── Inter-SemiBold.woff2
    └── .DS_Store (puede eliminarse)


```

## Funcionalidades principales

- Visualización de tarjetas con nombre, imagen y descripción.
- Añadir, editar o eliminar tarjetas mediante formularios.
- Actualizar el perfil del usuario y el avatar.
- Likes funcionales que se reflejan en la API.
- Popups accesibles: cierre con clic fuera, botón o tecla Escape.
- Uso de React Hooks (useState, useEffect) para manejar estado y efectos.
- Estado global del usuario con React Context.
- Rutas protegidas según estado de sesión.
- Peticiones reales al servidor con fetch (GET, POST, PATCH, DELETE).
- Arquitectura limpia: separación de lógica de red, UI y estado.
- Persistencia de sesión usando tokens JWT en localStorage.
- Mensajes de éxito y error con popups visuales y estilizados.
- Visualización dinámica del email autenticado en el header.

## Scripts disponibles

Desde la carpeta raíz del proyecto, puedes ejecutar:

| Comando           | Descripción                                              |
| ----------------- | -------------------------------------------------------- |
| `npm install`     | Instala las dependencias del proyecto                    |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga en caliente |
| `npm run build`   | Construye la aplicación para producción                  |
| `npm run preview` | Previsualiza localmente la versión de producción         |

## Funcionalidades principales

- Visualización de tarjetas con nombre, imagen y descripción.
- Añadir, editar o eliminar tarjetas mediante formularios.
- Actualizar el perfil del usuario y el avatar.
- Likes funcionales que se reflejan en la API.
- Popups accesibles: cierre con clic fuera, botón o tecla Escape.
- Uso de React Hooks (useState, useEffect) para manejar estado y efectos.
- Estructura modular y mantenible de componentes.
- Peticiones reales al servidor con fetch (GET, POST, PATCH, DELETE).
- Arquitectura limpia: separación de lógica de red, UI y estado.

## 📡 Clase Api.js (resumen)

class Api {
constructor({ baseUrl, headers }) { ... }

getUserInfo() { ... }
getInitialCards() { ... }
updateUserInfo(data) { ... }
addCard(data) { ... }
deleteCard(cardId) { ... }
changeLikeCardStatus(cardId, isLiked) { ... }
updateAvatar(data) { ... }
}

👉 Define una instancia api exportada, conectada a:
https://around-api.es.tripleten-services.com/v1

## 🤝 Cómo contribuir

- Clona el repositorio.
- Instala dependencias con npm install.
- Crea una rama para tu feature o fix: git checkout -b mi-rama.
- Realiza tus cambios.
- Haz commit y push.
- Abre un Pull Request para revisión.

🌐 Ver el proyecto en línea:
👉 https://carlosduro.github.io/web_project_around_auth/
