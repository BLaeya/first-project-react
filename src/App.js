import logo from "./logo.svg";
import "./App.css";

function App() {
  const tasks = {
    titles: [
      "Comprendre les Fondamentaux de JavaScript:",
      "Apprendre les Concepts de Base de React :",
      "Installer Node.js et npm :",
      "Installer et Configurer Create React App :",
      "Créer un Premier Composant React :",
      "Comprendre le JSX :",
      "Gérer l'État et les Props :",
      "Travailler avec les Événements :",
      "Utiliser les Listes et les Clés (Keys) :",
      "Gérer les Formulaires :",
      "Comprendre le Cycle de Vie des Composants :",
      "Introduire les Hooks :",
      "Routage dans React :",
      "Gestion de l'État Globale avec Context :",
      "Apprendre à Utiliser Redux (en option) :",
      "Travailler avec les Requêtes Réseaux :",
      "Tester ses Composants :",
      "Explorer les Bonnes Pratiques de React :",
      "Construire des Applications Réelles :",
      "Participer à la Communauté :",
    ],
    descriptions: [
      "S'assurer d'avoir une bonne compréhension des bases de JavaScript, car React est une bibliothèque JavaScript.",
      "Comprendre les concepts fondamentaux de React tels que les composants, l'état (state), les propriétés (props), le cycle de vie des composants, etc",
      "Node.js est nécessaire pour exécuter des applications React, et npm (Node Package Manager) est utilisé pour gérer les dépendances.",
      "Utiliser Create React App pour créer rapidement un environnement de développement React sans configuration initiale complexe.",
      "Créer un simple composant React, comprendre comment les composants sont structurés et comment ils interagissent les uns avec les autres.",
      "Se familiariser avec le JSX, la syntaxe qui ressemble à XML/HTML utilisée dans React.",
      "Apprendre à gérer l'état local dans les composants et à passer des données via les propriétés (props).",
      "Comprendre comment gérer les événements dans React, par exemple, les clics de bouton, les changements de formulaire, etc.",
      "Apprendre à travailler avec des listes dynamiques de données et comprendre l'importance des clés dans la réconciliation virtuelle.",
      "Comprendre comment gérer les formulaires dans React, en utilisant l'état pour suivre les saisies de l'utilisateur.",
      "Se familiariser avec le cycle de vie des composants React et comment utiliser les méthodes de cycle de vie.",
      "Apprendre à utiliser les Hooks, introduits dans React 16.8, pour gérer l'état et d'autres fonctionnalités dans les composants fonctionnels.",
      "Apprendre à utiliser React Router pour gérer la navigation dans une application React à plusieurs pages.",
      "Comprenez comment utiliser le contexte (Context API) pour gérer l'état global de l'application.",
      "Si nécessaire, explorer Redux pour gérer l'état global de manière plus avancée.",
      "Apprendre à effectuer des requêtes réseau, par exemple avec Fetch ou Axios, pour récupérer ou envoyer des données depuis/vers un serveur.",
      "Se familiariser avec les tests unitaires et les bibliothèques de test comme Jest pour garantir la qualité du code.",
      "Apprendre les bonnes pratiques de développement React, notamment en matière de structuration du code, de gestion de l'état et de performances.",
      "Mettre en pratique mes compétences en construisant des applications réelles pour renforcer ma compréhension et mon expérience.",
      "Rejoindre des forums, des groupes de discussion et des communautés en ligne pour poser des questions, partager des connaissances et rester informé sur les derniers développements dans le monde de React.",
    ],
  };
  const tasklist = [];

  for (let i = 0; i < tasks.titles.length; i++) {
    const title = tasks.titles[i];
    const descritpion = tasks.descriptions[i];
    tasklist.push(
      <li key={i}>
        <h4>{title}</h4>
        <p>{descritpion}</p>
      </li>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Bonjour John Doe</h1> */}
      </header>
      <main className="App-main">
        <h2>Découvrons ensemble la librairie React !</h2>
        {/* <p>
          Editez <code>src/App.js</code> et sauvegardee pour recharger
        </p> */}
        <h3>Ma ToDo list React</h3>
        <ol>{tasklist}</ol>
      </main>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pour apprendre React
        </a>
      </footer>
    </div>
  );
}

export default App;
