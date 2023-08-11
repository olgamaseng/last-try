import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="trending" icon={<WhatshotIcon/>} />

        <BottomNavigationAction label="Podcasts" icon={<PodcastsIcon/>} />

        <BottomNavigationAction label="Seasons" icon={<FavoriteIcon />} />

        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}





// import * as React from 'react';
// import makeStyles from '@mui/styles/makeStyles';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import WhatshotIcon from '@mui/icons-material/Whatshot';

// const useStyles = makeStyles({
//     root: {
//         width: 500,
//         position: 'fixed',
//         bottom: 0,
//         backgroundColor: '#2d313a',
//         zIndex: 100

//     },
// })

// export default function SimpleBottomNavigation() {
//     const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box sx={{ width: 500 }}>
//       <BottomNavigation
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         showLabels
//         className= {classes.root}
//       >
//         <BottomNavigationAction 
//         style={{ color: 'white'}}label="Trending" icon={<WhatshotIcon />} />

//         <BottomNavigationAction
//         style={{ color: 'white'}} 
//         label="Podcast" icon={<FavoriteIcon />} />

// <BottomNavigationAction
//         style={{ color: 'white'}} 
//         label="Seasons" icon={<FavoriteIcon />} />

//         <BottomNavigationAction
//         style={{ color: 'white'}} label="Search" icon={<LocationOnIcon />} />
//       </BottomNavigation>
// </Box>
//   );
// }