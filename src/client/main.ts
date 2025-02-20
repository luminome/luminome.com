// import "./style.css";

const mySVG = document.querySelector<HTMLObjectElement>("#main-svg");
let svgDoc;

mySVG?.addEventListener("load", function () {
  svgDoc = mySVG.contentDocument;
  console.log("SVG contentDocument Loaded!", mySVG);
}, false);


// const p = document.querySelector<HTMLObjectElement>("#main-svg");
// console.log('loaded', p?.contentDocument);
// import { setupCounter } from "./counter";
// import typescriptLogo from "./typescript.svg";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
