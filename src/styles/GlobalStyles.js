import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-blue-dark: #0D6EFD;
  --color-blue-light: #E3F0FF;
  --color-green-blue : #55BDC3;
  --color-green-dark: #00B517;
  --color-green-light: #C3FFCB;
  --color-orange-darker: #FF6F00;
  --color-orange-dark: #FF9017;
  --color-orange-dark: #FFE5BF;
  --color-red : #FA3434;
  
  --color-white : #ffffff;
  --color-black : #000000;
  //gray
  --color-gray-100: #F7FAFC;
  --color-gray-200: #EFF2F4;
  --color-gray-300: #DEE2E7;
  --color-gray-400: #BDC4CD;
  --color-gray-500: #8B96A5;
  --color-gray-600: #505050;
  --color-gray-dark: #1C1C1C;

  --navbar-height-desctop: 8.6rem;
  --navbar-height-mobile: 5.6rem;

  --max-width: 1200px;
  --tablet: 1024px;
  --mobile : 768px;
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
  color: var(--color-gray-dark);
  font-weight: 400;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-gray-100);
  position: relative;
  min-height: 100vh;
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
  border: none;
  background-color: transparent;
  outline: none;
}

*:disabled {
  cursor: not-allowed;
}



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

h1,
h2,
h3,
h4,
h5,
h6 {
color: var(--color-gray-dark);
font-weight: 600;
line-height: normal;
letter-spacing: -1.6px;
}
h1{
font-size: 4.8rem;
}
h2{
font-size: 3.2rem;
}
h3{
font-size: 2.4rem;
}
h4{
font-size: 2rem;
}
h5{
font-size: 1.8rem;
}
h6{
font-size: 1.6rem;
}
p,div{
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--color-gray-600);
}

img {
  max-width: 100%;
}

/* ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-thumb {
    background: var(--color-pink);
    border-radius: .5rem
}

::-webkit-scrollbar-track {
    background: var(--color-black-light);
} */

`;

export default GlobalStyles;
