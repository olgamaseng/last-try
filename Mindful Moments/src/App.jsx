import { useEffect, useState } from 'react';
import PodcastList from './Components/PodcastList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import PodcastHeading from './Components/PodcastHeader.jsx';
import SearchBox from './Components/Search.jsx';
import AddFavourite from './Components/AddFavourites.jsx';

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  // fetch('https://podcast-api.netlify.app/shows')
  // .then(response => response.json())
  // .then((data=> setPodcasts(data))) 
  // const [showValue, setshowValue] = useState('');

  const getPodcastRequest = async () => {
    const url = 'https://podcast-api.netlify.app/shows';

    const response = await fetch(url);
    const responseJson = await response.json();

   
    setPodcasts(responseJson);
  };
 
   
  useEffect(() => {
    getPodcastRequest();
  }, []);
 


  return (

    <div className='container-fluid podcast-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
      <PodcastHeading heading='Preview'/>
      <SearchBox />
      </div>
      <div className='row'>
        <PodcastList podcasts={podcasts} favouriteComponent={AddFavourite}/>
       
      </div>

    </div>

  );
}


export default App
