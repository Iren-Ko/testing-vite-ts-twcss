import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'


// This is the non-null assertion operator in TypeScript. 
// It asserts that the expression before it will not be null or undefined at runtime. 
// In this context, it tells TypeScript that the querySelector() call is guaranteed to find an element with the ID "app". 
// Using this operator should be done with caution, as it bypasses null checks and can lead to runtime errors if the element is not actually found.
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div class="flex">
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
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
//   <img src="/vite.svg">
// `

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let num : any = 10
console.log(num)

type funcValueType = number | string

// Access function from browser console by assigning it to window
window.setValue = (val: number | string): void => {
  console.log(val)
};

setValue(false);