import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { App } from "./App";
import { defaultTheme } from "./styles/themes/default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={defaultTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
