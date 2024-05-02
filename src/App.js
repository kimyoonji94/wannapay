import logo from './logo.svg';
import './App.css';
import './style.css';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainBox">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
