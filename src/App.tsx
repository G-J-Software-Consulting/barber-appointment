import { AppRoutes } from "./routes/app.routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}
