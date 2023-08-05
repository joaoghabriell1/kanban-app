import ThemeContext from "./context/theme/ThemeContext.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { useContext } from "react";

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes />;
    </ThemeProvider>
  );
}

export default App;
