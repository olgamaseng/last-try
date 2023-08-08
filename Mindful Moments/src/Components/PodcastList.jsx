import React from 'react';

const PodcastList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.podcasts.map((movie, index) => (
        <div key={index} className=" image-container col-md-3 col-sm-6 mb-2 mx-1"> 
            <img className='  img-fluid mt-1' src={movie.image} alt='podcast' width='180px' 
             style={{ padding: '5px', marginRight:'-200px' }}/>
             <div className='overlay d-flex align-items-center justify content-center'>
              <FavouriteComponent/>
             </div>
          </div>
      ))}
    </>
  );
};

export default PodcastList;
