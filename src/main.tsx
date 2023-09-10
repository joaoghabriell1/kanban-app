import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeContextProvider } from "./context/theme/ThemeContext.tsx";
import { AuthContextProvider } from "./context/Auth/AuthContext.tsx";
import { UIContextProvider } from "./context/ui/UiContext.tsx";
import App from "./App.tsx";
import "./index.css";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
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
