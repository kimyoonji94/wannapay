import './App.css';
import './style.css';
import { Header } from './components/Header';
import { Main } from './Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='mainBox'>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
