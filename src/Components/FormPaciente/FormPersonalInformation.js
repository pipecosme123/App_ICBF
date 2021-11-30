// import axios from 'axios';
import React from 'react';
import { useForm } from '../../hooks/useForm';
// import InputText from './InputText';

import { Grid, Box, Typography, TextField, RadioGroup, FormControlLabel, FormLabel, Radio, Button, Container, FormControl, CircularProgress } from '@mui/material';

import 'react-toastify/dist/ReactToastify.css';
import Alerts from '../Alerts';

const initialForm = {
   escuela: "",
   ubicacionEscuela: "",
   noDocumentoPaciente: "",
   nombrePaciente: "",
   apellidoPaciente: "",
   fechaNacimiento: "",
   lugarNacimiento: "",
   ubicacionLugarNacimiento: "",
   direccionResidencial: "",
   barrioResidencial: "",
   ciudadResidencial: "",
   ubicacionResidencial: "",
   subsidio: "",
   eps: "",
   acudienteIdentificación: "",
   acudienteNombre: "",
   acudienteApellido: "",
   acudienteTeléfono: "",
   acudienteParentesco: ""
};

const validationForm = (form) => {

   let errors = {}

   if (!form.noDocumentoPaciente.trim()) {
      errors.noDocumentoPaciente = true;
   }else if (!form.nombrePaciente.trim()) {
      errors.nombrePaciente = true;
   }

   // console.log(form)
   return errors;
};

const FormPersonalInformation = ({ submitFormPaciente }) => {

   // const [value, setValue] = useState(null);

   const {
      // form,
      error,
      loading,
      responseApi,
      handleChange,
      handleBlur,
      handleSubmit
   } = useForm(initialForm, validationForm);

   return (

      <Container>
         <Box component="form"
            sx={{
               '& .MuiTextField-root': { my: 0.5, px: 0, width: '26ch' },
            }}
            noValidate
            autoComplete="off"
            className="boxContainer"
            onSubmit={handleSubmit}
         >

            {/* <form > */}
            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Información Personal del Paciente</b></Typography>

            <Grid container>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="number" variant="outlined" name="noDocumentoPaciente" label="Numero de documento"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     helperText={error.noDocumentoPaciente ? "Este campo es requerido" : ""} error={error.noDocumentoPaciente ? true : false}
                  // className="inputLarge"
                  />
               </Grid>
            </Grid>

            <Grid container>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="nombrePaciente" label="Nombres"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     helperText={error.nombrePaciente ? "Este campo es requerido" : ""} error={error.nombrePaciente ? true : false}
                  // className="inputLarge"
                  />
               </Grid>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="apellidoPaciente" label="Apellidos"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.apellidoPaciente ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
            </Grid>

            <Grid container>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="date" variant="outlined" name="fechaNacimiento" label="Fecha de nacimiento"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.fechaNacimiento ? "Este campo es requerido" : ""}
                     // className="inputLarge"
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
               </Grid>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="lugarNacimiento" label="Lugar de nacimiento"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.lugarNacimiento ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
               <Grid item lg={3} md={4} xs={12}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">Ubicacion:</FormLabel>
                     <RadioGroup
                        name="ubicacionLugarNacimiento"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="urbano" control={<Radio />} label="Urbano" />
                        <FormControlLabel value="rural" control={<Radio />} label="Rural" />
                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Grid container>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="direccionResidencial" label="Dirección de residencia"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.direccionResidencial ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="barrioResidencial" label="Barrio"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.barrioResidencial ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="ciudadResidencial" label="Ciudad/Municipio"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.ciudadResidencial ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
               <Grid item>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">Ubicacion:</FormLabel>
                     <RadioGroup
                        name="ubicacionResidencial"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="urbano" control={<Radio />} label="Urbano" />
                        <FormControlLabel value="rural" control={<Radio />} label="Rural" />
                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Grid container>

               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="eps" label="E.P.S."
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.eps ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>

               <Grid item>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">....................:</FormLabel>
                     <RadioGroup
                        name="subsidio"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="aseguramiento" control={<Radio />} label="Aseguramiento subsidiado" />
                        <FormControlLabel value="contributivo" control={<Radio />} label="Contributivo" />
                        <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                     </RadioGroup>
                  </FormControl>
               </Grid>

            </Grid>

            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Información Personal del Acudiente</b></Typography>

            <Grid container>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="number" variant="outlined" name="acudienteIdentificación" label="Numero de documento"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.acudienteIdentificación ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
            </Grid>

            <Grid container>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="acudienteNombre" label="Nombre"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.acudienteNombre ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="acudienteApellido" label="Apellidos"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.acudienteApellido ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="number" variant="outlined" name="acudienteTeléfono" label="Telefono"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.acudienteTeléfono ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
               {/* </Grid> */}

               {/* <Grid container> */}
               <Grid item lg={3} md={4} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="acudienteParentesco" label="Parentesco con el niño(a)"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     // helperText={error.acudienteParentesco ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
            </Grid>

            <Box sx={{ width: "100%" }} className="submitButton">
               {!loading &&
                  <Button type="submit" variant="outlined" disableElevation size="large" >
                     Enviar
                  </Button>
               }
               {loading && <CircularProgress />}
               
               {responseApi === true ? 
               (<Alerts alertType="success" alertText="El formulario de <b>Antecedentes</b> se ha guardado correctamente." />) : ""}
               {responseApi === false ? 
               (<Alerts alertType="error" alertText="El formulario de <b>Antecedentes</b> no se ha guardado correctamente." />) : ""}

            </Box>
         </Box >
      </Container>


   );
};

export default FormPersonalInformation;