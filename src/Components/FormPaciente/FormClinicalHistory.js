// import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import '../../css/styles.css';
import Alerts from '../Alerts';

const initialForm = {
   documentoPaciente: "1",
   motivoConsulta: "",
   complicacionEmbarazo: "",
   enfermedadAntiguna: "",
   hospitalizacion: "",
   medicamento: "",
   cirugia: "",
   cuidadoEspecial: ""
}

const validationForm = (form) => {

   let errors = {}

   // if (!form.escuela.trim()) {
   //    errors.escuela = "El campo del nombre del paciete es requerido";
   // }

   return errors;
};

const FormClinicalHistory = ({ idPatient }) => {

   const {
      form,
      // error,
      loading,
      responseApi,
      handleChange,
      handleBlur,
      handleSubmitClinicalHistory
   } = useForm(initialForm, validationForm, idPatient);

   return (
      <Box
         component="form"
         sx={{
            '& .MuiTextField-root': { my: 2, mx: 1, width: '25ch' }
         }}
         noValidate
         autoComplete="off" onSubmit={handleSubmitClinicalHistory}
         // className="boxContainer"
         >

         <Paper sx={{ py: 3, px: 7, my: 3, borderRadius: '16px' }} md={7} xs={12} elevation={3}>

            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Antecedentes de salud general y bucal del niño(a)</b></Typography>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿Cuándo fue la última vez que el niño(a) asistió a consulta con el Médico?:</FormLabel>
                     <RadioGroup
                        aria-label="¿Cuándo fue la última vez que el niño(a) asistió a consulta con el Médico?"
                        // defaultValue="female"
                        name="ultimaConsulta"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="1mes" control={<Radio />} label="1 mes" />
                        <FormControlLabel value="3a6meses" control={<Radio />} label="3 a 6 meses" />
                        <FormControlLabel value="6meses" control={<Radio />} label="Más de 6 meses" />
                        <FormControlLabel value="1año" control={<Radio />} label="Más de 1 año" />
                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿Cuál fue el motivo de la Consulta Médica del niño(a)?:</FormLabel>
                     <RadioGroup
                        name="motivoConsulta"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="control" control={<Radio />} label="Control (Crecimiento y desarrollo)" />
                        <FormControlLabel value="vacunacion" control={<Radio />} label="Vacunación" />
                        <FormControlLabel value="urgencias" control={<Radio />} label="Urgencias" />
                        <FormControlLabel value="otros" control={<Radio />} label="Otra" />
                        <div className={`${form.motivoConsulta === "otros" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="motivoConsulta_cual" label="¿Cual?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                              required
                           />
                        </div>
                     </RadioGroup>
                  </FormControl>
               </Grid>

               <Grid item xs={4}>
               </Grid>
            </Grid>

            <Box>
               <FormLabel component="legend" m={2}>Fecha, talla y peso del último control médico:</FormLabel>
               <TextField
                  type="date" variant="outlined" name="fechaControlMedico" label="Fecha:" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputLabelProps={{ shrink: true }} py={1} my={2}
               />

               <TextField
                  type="number" variant="outlined" name="talla" label="Talla (Altura):" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputProps={{
                     endAdornment: <InputAdornment position="start">m</InputAdornment>,
                  }}
               />

               <TextField
                  type="number" variant="outlined" name="peso" label="Peso:" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputProps={{
                     endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }}
               />

            </Box>

            <Box>
               <FormControl component="fieldset" required>
                  <FormLabel component="legend">¿Durante el periodo de embarazo hubo alguna complicación?:</FormLabel>
                  <RadioGroup
                     aria-label="ubicacion Lugar Nacimiento"
                     // defaultValue="female"
                     name="complicacionEmbarazo"
                     row required
                     onChange={handleChange} onBlur={handleBlur}
                  >
                     <FormControlLabel value="s" control={<Radio />} label="Si" />
                     <FormControlLabel value="n" control={<Radio />} label="No" />
                     <div className={`${form.complicacionEmbarazo === "s" ? "visible" : "noVisible"}`}>
                        <TextField
                           type="text" variant="outlined" name="complicacionEmbarazo_cual" label="¿Cual?:" size="small"
                           onChange={handleChange} onBlur={handleBlur}
                           className="inputLarge"
                        />
                     </div>
                  </RadioGroup>
               </FormControl>


            </Box>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿El parto fue en el tiempo esperado?:</FormLabel>
                     <RadioGroup
                        aria-label="¿Cuándo fue la última vez que el niño(a) asistió a consulta con el Médico?"
                        // defaultValue="female"
                        name="tiempoEsperado"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <FormControlLabel value="antes" control={<Radio />} label="Antes de lo esperado" />
                        <FormControlLabel value="despues" control={<Radio />} label="Después de lo esperado" />
                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿Desde que el niño(a) nació hasta la fecha, ha sufrido de alguna enfermedad?:</FormLabel>
                     <RadioGroup
                        name="enfermedadAntiguna"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.enfermedadAntiguna === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="enfermedadAntiguna_cual" label="¿Cual?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                              className="inputLarge"
                           />
                        </div>
                     </RadioGroup>
                  </FormControl>

               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿El niño(a) ha estado hospitalizado?:</FormLabel>
                     <RadioGroup
                        name="hospitalizacion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.hospitalizacion === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="hospitalizacion_cuantoTiempo" label="Cuánto tiempo?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                           // className="inputLarge"
                           />
                           <TextField
                              type="text" variant="outlined" name="hospitalizacion_porque" label="Por qué?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                           // className="inputLarge"
                           />
                        </div>
                     </RadioGroup>
                  </FormControl>

               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿El niño(a) está tomando algún medicamento de rutina?:</FormLabel>
                     <RadioGroup
                        name="medicamento"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.medicamento === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="medicamento_cual" label="¿Cual?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                              className="inputLarge"
                           />
                        </div>
                     </RadioGroup>
                  </FormControl>

               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿Le han practicado al niño(a) alguna cirugía?:</FormLabel>
                     <RadioGroup
                        name="cirugia"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.cirugia === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="cirugia_cual" label="¿Cual?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                           // className="inputLarge"
                           />
                           <TextField
                              type="text" variant="outlined" name="cirugia_haceCuanto" label="¿Hace cuánto?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                           // className="inputLarge"
                           />
                        </div>
                     </RadioGroup>
                  </FormControl>

               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={12}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿De acuerdo con recomendación del médico, el niño(a) requiere algún cuidado especial para la atención odontológica?:</FormLabel>
                     <RadioGroup
                        name="cuidadoEspecial"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.cuidadoEspecial === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="cuidadoEspecial_cual" label="¿Cual?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                           // className="inputLarge"
                           />
                        </div>
                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Box>
               <FormLabel component="legend">Fecha en la que se tomó talla y peso al niño(a):</FormLabel>
               <TextField
                  type="date" variant="outlined" name="fechaPregunta7" label="Fecha:" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputLabelProps={{ shrink: true }} py={1} my={2}
               />

               <TextField
                  type="number" variant="outlined" name="tallaPregunta7" label="Talla (Altura):" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputProps={{
                     endAdornment: <InputAdornment position="start">m</InputAdornment>,
                  }}
               />

               <TextField
                  type="number" variant="outlined" name="pesoPregunta7" label="Peso:" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputProps={{
                     endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }}
               />
            </Box>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿Lo ha llevado al odontólogo en el último año?:</FormLabel>
                     <RadioGroup
                        name="ultimaConsultaOdontologo"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />

                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Box>
               <FormLabel component="legend">¿Cada cuánto tiempo acostumbra llevarlo?:</FormLabel>
               <TextField
                  type="text" variant="outlined" name="ultimaConsultaOdontologo_cual" label="Tiempo:" size="small"
                  onChange={handleChange} onBlur={handleBlur} fullWidth
                  className="inputLarge"
               />
            </Box>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={12}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿La última vez que llevo al niño(a) al odontólogo cuál fue el motivo?:</FormLabel>
                     <RadioGroup
                        name="motivoUltimaConsulta"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="valoración" control={<Radio />} label="Valoración" />
                        <FormControlLabel value="aplicacionFluor" control={<Radio />} label="Aplicación Flúor" />
                        <FormControlLabel value="limpieza" control={<Radio />} label="Limpieza" />
                        <FormControlLabel value="calzarDientes" control={<Radio />} label="Calzar Dientes" />
                        <FormControlLabel value="retirarNervio" control={<Radio />} label="Retirar nervio del diente" />
                        <FormControlLabel value="retirarDiente" control={<Radio />} label="Retirar un diente" />
                        <FormControlLabel value="urgencia" control={<Radio />} label="Urgencia (dolor, absceso...)" />
                        <div className={`${form.motivoUltimaConsulta === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="motivoUltimaConsulta_haceCuanto" label="¿Hace cuánto?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                              className="inputLarge"
                           />
                        </div>
                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">La experiencia en las visitas previas del niño(a) al odontólogo han sido:</FormLabel>
                     <RadioGroup
                        name="experiencias"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="muyBuenas" control={<Radio />} label="Muy buenas" />
                        <FormControlLabel value="buenas" control={<Radio />} label="Buenas" />
                        <FormControlLabel value="pocoAgradables" control={<Radio />} label="Poco agradables" />
                        <FormControlLabel value="malas" control={<Radio />} label="Malas" />
                     </RadioGroup>
                  </FormControl>
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
               (<Alerts alertType="success" alertText="El formulario de <b>Antecedentes</b> se ha guardado correctamente." />) : ""}
            {responseApi === false ?
               (<Alerts alertType="error" alertText="El formulario de <b>Antecedentes</b> no se ha guardado correctamente." />) : ""}

         </Box>
      </Box >
   );
};

export default FormClinicalHistory;