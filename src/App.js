import React, { useState }  from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import {Avatar, Divider, Link, Button, Chip} from '@material-ui/core';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@mui/icons-material/Home';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleMapReact from 'google-map-react';


import useStyles from './style'


const App = () => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b5b163f5c3msh115ef8964cddc11p154c3ejsndc14aeeafbf7',
      'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=Sun%20Siyam%20Iru%20Fushi&languagecode=en-us', options)
    .then(response => response.json())
    .then(response => {
      
      response.forEach(select => {
        console.log(response);

        document.getElementById('hotelName').innerHTML = select.name;
        document.getElementById('hotelName2').innerHTML = select.name;
        document.getElementById('hotelName3').innerHTML = select.name;
        document.getElementById('cityName').innerHTML = select.city_name;
        document.getElementById('countryName').innerHTML = select.country;
        document.getElementById('hotelImage').src = select.image_url;

      })})


    .catch(err => console.error(err));


  const classes = useStyles();
  const [center] = useState({lat: 5.7445693, lng: 73.323296});
  const [zoom] = useState(17);
  
  return (
    <>
      <CssBaseline />
      {/*Header Section*/}
      <AppBar position='fixed'  style={{opacity:0.95}}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Traveler
          </Typography>
          <Box display='flex'>
            <Typography variant='h6' className={classes.title}>
              Discover the world
            </Typography>
            {/* <Autocomplete> */}
              <div className= {classes.search}>
                <div className= {classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder='Enter Distination' classes={{root: classes.InputRoot, input: classes.inputInput}}/>
              </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
      {/*Profile Section*/}
      <div className={classes.container} style={{marginTop:70}}>
        <Grid container spacing={3}>
          <Grid item md={1}>
            <Avatar alt="Kritika Goel" src="https://thenewscrunch.com/wp-content/uploads/2020/08/Kritika-Goel.jpg" style={{width: 65, height: 65}}/>
          </Grid>
          <Grid item md={11}>
            <Typography>Travel Journey by<Link href='https://www.instagram.com/kritika_goel/?hl=en' variant="button"><br/>Kritika Goel</Link><br/></Typography>
            <Typography>from <Link href='https://www.britannica.com/place/India'>India</Link></Typography>
          </Grid>
        </Grid><br/>
        <Divider/>
      </div>
      {/*About Trip Section*/}
      <div className={classes.container} style={{paddingTop: 10}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' style={{fontSize: 18 }}>How Much I papaid, From R10,000/pp</Typography>
            <Button size="small" variant="outlined">Enquire</Button>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant='h6'>Trip Length</Typography>
          <Typography style={{color: 'gray', fontWeight: 'bold'}}>6 days</Typography>
          <Typography variant='h6'>Availability</Typography>
          <Typography style={{color: 'gray', fontWeight: 'bold'}}>All year round</Typography>
          <Typography variant='h6'>Hotel Name</Typography>
          <Typography id='hotelName' style={{color: 'gray', fontWeight: 'bold'}}></Typography>
          </Grid>
        </Grid><br/>
        <Divider /> 
      </div>
      {/*Info about Hotel Section*/}
      <div className={classes.container} style={{paddingTop: 10}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Typography variant='h6' id='hotelName2'></Typography>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="small"/>
            <Typography style={{color: 'gray'}}>
            From the moment you arrive, shoes are left at the door, so forget dress codes and come as you are. 
            Here we live the barefoot idyll, so sit back and sink your toes into the softest white sand – it doesn’t get better than this.
            </Typography><br/>
            <Typography style={{color: 'gray'}}>
            Priding ourselves on innovation, our main restaurant has a daily-changing menu to mix up seasonal flavours, 
            and we serve plenty of the ocean’s bounty with the best seafood you’ll ever taste. 
            You can even watch exotic fish pass under the glass floor below as you sink into a relaxing massage. 
            It’s time to discover the true meaning of rest and rejuvenation here on our sapphire waters.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img id= 'hotelImage' alt="hotel logo" style={{width: 400, height: 400}}/>
          </Grid>
        </Grid>
        <Stack style={{paddingTop: 15, paddingBottom: 15}} direction="row" spacing={1}>
          <Typography style={{fontSize: 17, color: 'green' }}>Activities:</Typography>
            <Chip label="Reaching Sun Siyam Iru Veli Resort" variant="outlined" component="a" href="https://www.wikimotors.org/what-is-a-speed-boat.htm" clickable/>
            <Chip label="Maldives and Sunset and dinner" variant="outlined" component="a" href="https://dreamingofmaldives.wordpress.com/2009/11/20/maldives-photo-of-the-week-10/" clickable/>
            <Chip label="Speedboat to Sun Siyam Vilu Reef" variant="outlined" component="a" href="https://www.tropicbreeze.co.uk/blog/2019/02/resort-transfers-in-the-maldives/" clickable/>
            <Chip label="Snorkeling in the Maldivest" variant="outlined" component="a" href="https://traveltriangle.com/blog/snorkeling-in-maldives/" clickable/>
        </Stack >
        <Divider />
      </div>

      {/*Activities Section*/}

      <div className={classes.container} style={{paddingTop: 15}}>
        <Typography variant='h6' style={{fontSize: 20, textAlign: 'center' }}>What's Included</Typography><br/>
        <Grid container spacing={5} style={{paddingLeft:'120px', paddingRight:'120px,', alignContent: 'center'}}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' style={{fontSize: 17 }}><CheckCircleOutlineIcon sx={{ fontSize: 15 }}/>
              Accomodation
              <Typography style={{fontSize: 12 }}>3 Nights' Accommodation at 4 Star Protea Hotel by Marriott Kruger Gate, in a guest room.</Typography>
            </Typography><br/>
            <Typography variant='h6' style={{fontSize: 17 }}><DangerousIcon sx={{ fontSize: 15 }}/>
              Flight
              <Typography style={{fontSize: 12 }}>All International/Domestic flights and visas.</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant='h6' style={{fontSize: 17 }}><CheckCircleOutlineIcon sx={{ fontSize: 15 }}/>
              Meal
              <Typography style={{fontSize: 12 }}>Breakfast and Dinner.</Typography>
            </Typography>
          </Grid>
        </Grid><br/>
        <Divider /> 
      </div>
      {/*Map Info Section*/}
      <div className={classes.container} style={{paddingTop:15, paddingBottom:50}}>
       
        <Typography variant='h6' style={{fontSize: 16, textAlign: 'left' }}>Where you'll be</Typography><br/>
        <div style={{display:'flex'}}>
          <LocationOnIcon sx={{ fontSize: 20 }}/>
          <Typography id = 'hotelName3' style={{fontSize: 14, color:'darkblue'}}> </Typography> 
          <Typography style={{ marginLeft: '1.5rem' }}></Typography> 
          <Typography id = 'cityName' style={{fontSize: 14, color:'darkblue'}}> </Typography>
          <Typography style={{ marginLeft: '1.5rem' }}></Typography> 
          <Typography id = 'countryName' style={{fontSize: 14, color:'darkblue'}}> </Typography>
       </div><br/>
       <div style={{ height: '40vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2MXWQSCAi5x9yLat7Ta7rlFPmT7XwIAo' }}
          defaultCenter={center}
          defaultZoom={zoom} >
          <CircleIcon sx={{ color: 'paleturquoise', fontSize: 80, opacity: 0.4, position:'absolute', left: -18, top:-18  }}/>
          <HomeIcon sx={{ color: 'red', fontSize: 40, position: 'absolute' }}/>
          
        </GoogleMapReact>
       </div>
      </div>
    </>
  );
}

export default App;

