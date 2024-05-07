import './App.css';
import './style.css';
import { Header } from './components/Header';
import { Main } from './page/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
