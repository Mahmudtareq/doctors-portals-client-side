import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
    {
        name : "Fluoride Treatment",
        description :"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
        img:fluoride
    },
    {
        name: "Cavity Filling",
        description:"On average, you can expect a metal filling to last for about 15 years before needing to be replaced, but the length of time can vary based on several factors, such as if you grind or clench your teeth. Tooth-colored fillings ",
        img:cavity
    },
    {
        name : "Teeth Whitening",
        description:"Having your teeth whitened in-office will cost approximately $600, and while this is significantly more money than the cost of take-home kits or other teeth whitening products, such as gels, gums, or whitening toothpastes",
        img:whitening
    }
]


const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ fontWeight: 500 ,color: 'success.main' ,m:2 }} variant="body2" component="div">
         OUR SERVICES
        </Typography>
      <Typography sx={{ fontWeight: 600,m:5, color: 'info.main' }} variant="h4" component="div">
         Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service =><Service
              key={service.name}
              service = {service}
              >
              </Service>)
          }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;