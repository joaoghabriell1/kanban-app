import GlobalStyles from "./styles/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { useContext } from "react";
import ThemeContext from "context/Theme/ThemeContext.tsx";

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
