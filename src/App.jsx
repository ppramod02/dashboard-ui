import Navbar from './components/Navbar/Navbar';
import './App.css';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Menu />
      <Main />
    </div>
  )
}

export default App;
