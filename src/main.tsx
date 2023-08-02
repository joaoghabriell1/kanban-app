import { ThemeContextProvider } from "./context/theme/ThemeContext.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <GlobalStyles />
    <App />
  </ThemeContextProvider>
);
