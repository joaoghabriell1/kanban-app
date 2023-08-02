import { ThemeProvider } from "styled-components";
import ThemeContext from "./context/theme/ThemeContext.tsx";
import Routes from "./routes/Routes";
import { useContext } from "react";

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <Routes />;
    </ThemeProvider>
  );
}

export default App;
