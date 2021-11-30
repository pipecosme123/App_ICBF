import { Button, Container, Typography } from '@mui/material';
import { Create } from '@mui/icons-material';
// import CreateIcon from '@mui/icons-material/Create';
import React from 'react';
import { RoutersLinks } from '../Constants/RoutersLinks';

const Profile = () => {
   return (
      <div className='Profile'>
         <Container>
            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Paciente</b></Typography>

            <Button variant="contained" disableElevation startIcon={<Create />} href={RoutersLinks.createUser}>
               Editar Informacion Personal
            </Button>
            <Button variant="contained" disableElevation startIcon={<Create />} href={RoutersLinks.clinicalHistory}>
               Editar Antecedentes
            </Button>
            <Button variant="contained" disableElevation startIcon={<Create />} href={RoutersLinks.aiepi}>
               Editar Evaluacion de salud bucal
            </Button>
         </Container>
      </div>
   );
};

export default Profile;