import { Dashboard } from './components/Dashboard';
import { Header } from './components/header';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </>
    </div>
  );
}