import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Button, Container, Typography } from '@mui/material';

const Treatment = () => {
    return (
        <Container sx={{mt:5}}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
              <img style={{width:'450px'}} src={treatment} alt="" />
           
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
              <Typography sx={{ textAlign: 'left',color:'info.main',mt:9,fontWeight: 500 }} variant="h4" component="div" gutterBottom>
                  Exceptional Dental 
                  <br />
                  Care, on Your Terms
              </Typography>
              <Typography sx={{ textAlign: 'left',mt:3}} variant="body1" gutterBottom>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, minima officia? Ullam accusamus praesentium provident iste magni repellat, facere dolor, perferendis eligendi officia impedit beatae amet, dicta consequuntur suscipit cum?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur natus culpa autem iure iste, tempora unde non deleniti ullam?
              </Typography>
              <Typography  sx={{ textAlign: 'left',mt:5}}>
              <Button  variant="contained">Learn More</Button>
              </Typography>
          
          </Grid>
        </Grid>
      </Box>
      </Container>
    );
};

export default Treatment;