import './App.css';
import AppContextProvider from './components/context/appContextProvider';
import Page from './components/landing/landing'

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Page />
      </div>
    </AppContextProvider>
  );
}

export default App;
