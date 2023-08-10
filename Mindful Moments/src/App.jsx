import { useEffect, useState } from 'react';
import PodcastList from './Components/PodcastList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import PodcastHeading from './Components/PodcastHeader.jsx';
import SearchBox from './Components/Search.jsx';

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const getPodcastRequest = async () => {
    const url = 'https://podcast-api.netlify.app/shows';

    const response = await fetch(url);
    const responseJson = await response.json();

   
    setPodcasts(responseJson);
  };
 
   
  useEffect(() => {
    getPodcastRequest(searchValue);
  }, [searchValue]);


  return (

    <div className='container-fluid podcast-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
      <PodcastHeading heading='Preview'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <PodcastList podcasts={podcasts} />
       
      </div>
 
    </div>

  );
}


export default App
