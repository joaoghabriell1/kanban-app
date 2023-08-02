import { ThemeProvider } from "styled-components";
import ThemeContext from "./context/theme/ThemeContext.tsx";
import Routes from "./routes/Routes";
import { useContext } from "react";
import GlobalStyles from "./styles/GlobalStyles.ts";

function App() {
  const { currentTheme } = useContext(ThemeContext);
  console.log(currentTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes />;
    </ThemeProvider>
  );
}

export default App;
