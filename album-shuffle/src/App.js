import './App.css';
import { Navbar } from './components/Navbar';
import { ShuffleList } from './components/ShuffleList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShuffleList />
      <Footer />
    </div>
  );
}

export default App;
