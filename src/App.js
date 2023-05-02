import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import WinnieCard from './components/Winnie';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WinnieCard />}></Route>
        </Routes>
          <Welcome />
      </main>
    </div>
  );
}

export default App;
