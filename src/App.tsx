import GlobalStyles from "./styles/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { useThemeContext } from "./context/Theme/ThemeContext.tsx";

function App() {
  const { currentTheme } = useThemeContext();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
