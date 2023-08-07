import { ThemeContextProvider } from "./context/theme/ThemeContext.tsx";
import { UIContextProvider } from "./context/ui/UiContext.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UIContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </UIContextProvider>
);
