import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import WinnieCard from './components/Winnie';
import Activities from './components/Activities';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WinnieCard />}></Route>
          <Route path='/activities' element={<Activities/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
