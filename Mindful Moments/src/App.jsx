import './App.css'
import Header from './Components/Header';
import SimpleBottomNavigation from './Components/MainNav';
import {BrowserRouter} from 'react-router-dom';

function App() {



  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        Home
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}


export default App
