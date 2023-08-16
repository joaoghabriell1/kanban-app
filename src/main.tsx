import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeContextProvider } from "./context/Theme/ThemeContext.tsx";
import { AuthContextProvider } from "./context/Auth/AuthContext.tsx";
import { UIContextProvider } from "./context/UI/UIContext.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <UIContextProvider>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeContextProvider>
    </UIContextProvider>
  </AuthContextProvider>
);
