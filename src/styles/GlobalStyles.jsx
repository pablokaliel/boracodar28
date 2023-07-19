import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
	--gray-01: #f8fafc;
	--gray-02: #e2e8f0;
	--gray-03: #94a3b8;
	--gray-04: #334155;
	--gray-05: #1e293b;
	--gray-06: #0f172a;
	--gray-07: #020617;
  }

  body{
    width:100%;
    height:100%;

    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    color: var(--gray-01);
  }

  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: IBM Plex Sans;
  }

  button {
    cursor:pointer;
  }
`;
