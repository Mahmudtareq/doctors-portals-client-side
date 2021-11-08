import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
    <Container sx={{my:8}}>
        <Typography sx={{color:"info.main",textAlign: 'left',mb:2}} variant='body2'>
            TESTIMONIAL
        </Typography>


        <Typography sx={{textAlign: 'left',mt:3, mb:5}} variant="h4" component="div" gutterBottom>
            What's our Patients 
            <br />
            Says
        </Typography>

        
    <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          bgcolor: 'background.paper',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center' ,
          alignContent: 'center',
         
        }}>
         <Card sx={{ maxWidth: 345,mb:3,py:4,px:2, boxShadow: 2 }}>
        <CardContent>
        <Typography sx={{textAlign: 'left',mb:1,p:4}} variant="subtitle2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Grid  sx={{mt:3,p:1}} container spacing={2}>
          <Grid  item xs={4}>
              <img src={people1} alt="" />

          </Grid>
          <Grid  item xs={8}>
              <Typography sx={{textAlign: 'left',color:'success.main'}} variant="body2" component="div" gutterBottom>
                  Winson Herry
              </Typography>
              <Typography sx={{textAlign: 'left',color:'info.main',fontWeight: 'medium'}} variant="caption" display="block" gutterBottom>
                    California
                </Typography>

          </Grid>
      </Grid>
    </Card>
    <Card sx={{ maxWidth: 345,mb:3,py:4,px:2, boxShadow: 2 }}>
        <CardContent>
        <Typography sx={{textAlign: 'left',mb:1,p:4}} variant="subtitle2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Grid sx={{mt:3,p:1}} container spacing={2}>
          <Grid  item xs={4}>
              <img src={people2} alt="" />

          </Grid>
          <Grid  item xs={8}>
              <Typography sx={{textAlign: 'left',color:'success.main'}} variant="body2" component="div" gutterBottom>
                  Winson Herry
              </Typography>
              <Typography sx={{textAlign: 'left',color:'info.main',fontWeight: 'medium'}} variant="caption" display="block" gutterBottom>
                    California
                </Typography>

          </Grid>


      </Grid>
    </Card>
    <Card sx={{ maxWidth: 345,mb:3,py:4,px:2, boxShadow: 2 }}>
        <CardContent>
        <Typography sx={{textAlign: 'left',mb:1,p:4}} variant="subtitle2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Grid  container sx={{mt:3,p:1}} spacing={2}>
          <Grid  item xs={4}>
              <img src={people3} alt="" />

          </Grid>
          <Grid  item xs={8}>
              <Typography sx={{textAlign: 'left',color:'success.main'}} variant="body2" component="div" gutterBottom>
                  Winson Herry
              </Typography>
              <Typography sx={{textAlign: 'left',color:'info.main',fontWeight: 'medium'}} variant="caption" display="block" gutterBottom>
                    California
                </Typography>

          </Grid>


      </Grid>
    </Card>
    </Box>
    </Container>
    );
};

export default Testimonial;