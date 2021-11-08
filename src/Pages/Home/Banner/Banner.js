import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography ,Container} from '@mui/material';
import { Box } from '@mui/system';
const bannerBg= {
    background:`url(${bg})`,
   

}
const verticalCenter ={
    display:'flex',
    alignItems :'center',
    height:400
}


const Banner = () => {
    return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter,textAlign:'left'}} item xs={12} md={6}>
            <Box >
            <Typography variant="h3" sx={{textAlign:'left'}}>
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography variant="body2"sx={{fontSize:14,color:'gray',fontWeight:300,textAlign:'left',my:3}} >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ad cupiditate nemo explicabo laboriosam possimus voluptas ut? Tempora, totam asperiores.
            </Typography>
            <Button variant="contained" sx={{}} >Get Appointment</Button>
            </Box>
            
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter }>
            <img style={{width:'400px'}} src={chair} alt="" />
          
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;