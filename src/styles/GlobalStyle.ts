import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        color: white;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.5rem;
        background-color: #141414;
    }
`