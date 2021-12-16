import { Create } from '@mui/icons-material';
import { Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const DividerButton = ({title, url}) => {

   const windowSize = window.screen.width;

   const toUrl = () => {
      window.location.href = url;
   }

   return (
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
         <Grid item xs={12} md={10}>
            <Divider textAlign={windowSize < 480 ? "center" : "left"} sx={{ my: 3 }}>
               <Typography variant="h5"><b>{title}</b></Typography>
            </Divider>
         </Grid>
         <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" disableElevation startIcon={<Create />} onClick={toUrl}>Editar</Button>
         </Grid>
      </Grid>
   );
};

export default DividerButton;