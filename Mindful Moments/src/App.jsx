import './App.css'
import Header from './Components/Header';
import SimpleBottomNavigation from './Components/MainNav';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {



  return (

    <BrowserRouter>
      <Header />
      <div className='app'>
        <container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/seasons' component={Seasons} />
            <Route path='/episodes' component={Episodes} />
            <Route path='/search' component={Search} />
          </Switch>
        </container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}


export default App
