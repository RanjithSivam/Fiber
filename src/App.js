import { DarkModeProvider } from "./context/darkMode";
import GlobalStyles from "./GlobalStyles";
import ErrorBoundary from "./pages/ErrorBoundary";
import Home from "./pages/Home";


function App() {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <GlobalStyles />
        <Home />
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;
