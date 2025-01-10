import { StrictMode } from 'react'
//Enables additional checks and warnings in development to catch potential issues.
import { createRoot } from 'react-dom/client'
//A modern API for rendering React applications into the DOM, replacing the older ReactDOM.render method
import './index.css'
import App from './App.jsx'
//create root function import krane se root ke andar App dikhana hai means render krana hai 
//and root toh already html (browser dom) me hi bna hai means rendered hai therefore root k andar App render krane se vo automatically html me render hogya .
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/* React Components Depend on JavaScript:
Components like App are written in JSX (a syntax extension of JavaScript), which must be transpiled into pure JavaScript using tools like Babel. React interprets this JavaScript to create and manage a virtual DOM.

The Role of HTML (index.html):
The App component and the React app itself need a target in the browser's DOM to render their output. This target is typically the <div id="root"> in index.html. Without this link to the actual DOM, React wouldn't display anything on the screen.

How App Fits into the Workflow
The App Component's Code:

Includes JavaScript logic (e.g., state management, event handling).
Contains JSX for structuring UI elements.
Rendered Through React:

React executes this JavaScript logic and converts the JSX into actual HTML/CSS/JavaScript the browser understands.
Needs HTML as a Base:

React injects the processed App output into the specified root in the HTML file.
In Summary:
The main.jsx file initializes the React app by linking the App component with the HTML's root element.
The App component cannot work independently—it needs JavaScript for functionality and the HTML root to display the UI.

Vite processes your CSS via PostCSS when the app is built.
Vite handles the inclusion of index.css and ensures that all the styles are applied correctly during the build process
main.jsx - index.css, root-App ki milan ki jagah . 

*/