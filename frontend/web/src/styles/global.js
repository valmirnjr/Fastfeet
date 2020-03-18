import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
  }

  select + svg {
    float: right;
    margin-top: -40px;
    margin-right: 5px;
    /* this is so when you click on the chevron, your click actually goes on the dropdown menu */
    pointer-events: none;
    /* everything after this is just to cover up the original arrow */
    /* (for browsers that don't support the syntax used above) */
    background-color: #fff;
    padding-right: 5px;
  }
`;
