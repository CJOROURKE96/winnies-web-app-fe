import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import WinnieCard from './components/Winnie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Routes>
        <Route path='/' element={<WinnieCard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
