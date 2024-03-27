import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-black : #000000;
  --color-black-dark: #020c1b;
  --color-black-light: #041226;
  --color-blue-dark: #173d77;
  --color-blue-light: #1c4b91;
  --color-pink: #da2f68;
  --color-orange: #f89e00;
  --color-orange-dark: #f24a20;
  
  --color-white : #ffffff;
  //grey
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;
  

  --gradient: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  --gradient-hover: linear-gradient(98.37deg,#da2f68  0.99%,#f89e00  100%);
  --max-width: 1500px;
  --tablet: 1024px;
  --mobile : 760px;


  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-pink: 0 0 1rem var(--color-pink);
  --shadow-orange: 0 0 1rem var(--color-orange);
  --shadow-orange-dark: 0 0 1rem var(--color-orange-dark);


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  color: var(--color-white);
  font-weight: 600;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--color-black-light);
  position: relative;
  min-height: 100vh;
  line-height: 1;
  font-size: 16px;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}



/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-thumb {
    background: var(--color-pink);
    border-radius: .5rem
}

::-webkit-scrollbar-track {
    background: var(--color-black-light);
}

`;

export default GlobalStyles;
