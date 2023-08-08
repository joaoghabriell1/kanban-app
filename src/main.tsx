import { ThemeContextProvider } from "./context/Theme/ThemeContext.tsx";
import { AuthContextProvider } from "./context/Auth/AuthContext.tsx";
import { UIContextProvider } from "./context/UI/UiContext.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <UIContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UIContextProvider>
  </AuthContextProvider>
);
