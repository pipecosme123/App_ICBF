import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Grid, Box, Typography, TextField, RadioGroup, FormControlLabel, FormLabel, Radio, Button, FormControl, CircularProgress, Paper } from '@mui/material';
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
   } else if (!form.nombrePaciente.trim()) {
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
      <Box component="form"
         sx={{
            '& .MuiTextField-root': { my: 1.5, mx: 0.5, px: 0, width: '26ch' },
         }}
         noValidate
         autoComplete="off"
         // className="boxContainer"
         onSubmit={handleSubmit}
      >

         {/* <form > */}
         <Paper sx={{ py: 1, px: 3, my: 3, borderRadius: '16px' }} md={7} xs={12} elevation={3}>
            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Información Personal del Paciente</b></Typography>

            <Grid container>
               <Grid item sx={{ display: "flex", flexWrap: "wrap" }} xs={12}>
                  <TextField
                     type="number" variant="outlined" name="noDocumentoPaciente" label="Número de documento"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     helperText={error.noDocumentoPaciente ? "Este campo es requerido" : ""} error={error.noDocumentoPaciente ? true : false}
                  // className="inputLarge"
                  />

                  <TextField
                     type="text" variant="outlined" name="nombrePaciente" label="Nombres"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                     helperText={error.nombrePaciente ? "Este campo es requerido" : ""} error={error.nombrePaciente ? true : false}
                  // className="inputLarge"
                  />

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
               <Grid item sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }} xs={12}>
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

                  <TextField
                     type="text" variant="outlined" name="lugarNacimiento" label="Lugar de nacimiento"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.lugarNacimiento ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <FormControl component="fieldset" required sx={{ mx: 1 }}>
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
               <Grid item sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="direccionResidencial" label="Dirección de residencia"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.direccionResidencial ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <TextField
                     type="text" variant="outlined" name="barrioResidencial" label="Barrio"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.barrioResidencial ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <TextField
                     type="text" variant="outlined" name="ciudadResidencial" label="Ciudad/Municipio"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.ciudadResidencial ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <FormControl component="fieldset" required sx={{ mx: 1 }}>
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
               <Grid item sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }} xs={12}>
                  <TextField
                     type="text" variant="outlined" name="eps" label="E.P.S."
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.eps ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <FormControl component="fieldset" required sx={{ mx: 1 }}>
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
         </Paper>


         {/* <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Información Personal del Acudiente</b></Typography> */}

         <Paper sx={{ py: 1, px: 3, my: 3, borderRadius: '16px' }} md={7} xs={12} elevation={3}>
            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Información Personal del Acudiente</b></Typography>
            <Grid container>
               <Grid item sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }} xs={12}>
                  <TextField
                     type="number" variant="outlined" name="acudienteIdentificación" label="Número de documento"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.acudienteIdentificación ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <TextField
                     type="text" variant="outlined" name="acudienteNombre" label="Nombre"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.acudienteNombre ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <TextField
                     type="text" variant="outlined" name="acudienteApellido" label="Apellidos"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.acudienteApellido ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
            </Grid>

            <Grid container>
               <Grid item sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }} xs={12}>
                  <TextField
                     type="number" variant="outlined" name="acudienteTeléfono" label="Telefono"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.acudienteTeléfono ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />

                  <TextField
                     type="text" variant="outlined" name="acudienteParentesco" label="Parentesco con el niño(a)"
                     onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.acudienteParentesco ? "Este campo es requerido" : ""}
                  // className="inputLarge"
                  />
               </Grid>
            </Grid>
         </Paper>

         <Box sx={{ width: "100%" }} className="submitButton">
            {!loading &&
               <Button type="submit" variant="outlined" disableElevation size="large" >
                  Enviar
               </Button>
            }
            {loading && <CircularProgress />}

            {responseApi === true ?
               (<Alerts alertType="success" alertText="El formulario de <b>Informacion Personal del Paciente</b> se ha guardado correctamente." />) : ""}
            {responseApi === false ?
               (<Alerts alertType="error" alertText="El formulario de <b>Informacion Personal del Paciente</b> no se pudo guardar correctamente." />) : ""}

         </Box>
      </Box >
   );
};

export default FormPersonalInformation;