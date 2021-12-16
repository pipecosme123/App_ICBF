// import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import '../../css/styles.css';
import Alerts from '../Alerts';

const initialForm = {
   tiempoUltimaConsultaMedica: "",
   motivoConsulta_Opcion: "",
   motivoConsulta_Cual: "",
   controlMedico_Fecha: "",
   controlMedico_Talla: "",

   controlMedico_Peso: "",
   complicacionEmbarazo_Opcion: "",
   complicacionEmbarazo_Cual: "",
   tiempoEsperado: "",
   enfermedadAntiguna_Opcion: "",

   enfermedadAntiguna_Cual: "",
   hospitalizacion_Opcion: "",
   hospitalizacion_CuantoTiempo: "",
   hospitalizacion_Motivo: "",
   tomaMedicamentos_Opcion: "",
   
   tomaMedicamentos_Cual: "",
   cirugia_Opcion: "",
   cirugia_Cual: "",
   cirugia_CuantoTiempo: "",
   cuidadoEspecial_Opcion: "",

   cuidadoEspecial_Cual: "",
   tomaDatos_Fecha: "",
   tomaDatos_Talla: "",
   tomaDatos_Peso: "",
   ultimaConsultaOdontologo_Opcion: "",

   ultimaConsultaOdontologo_CuantoTiempo: "",
   motivoUltimaConsulta_Opcion: "",
   motivoUltimaConsulta_CuantoTiempo: "",
   experiencias: ""
}

const validationForm = (form) => {
   
   let errors = {}

   // if (!form.escuela.trim()) {
   //    errors.escuela = "El campo del nombre del paciete es requerido";
   // }

   return errors;
};

const FormClinicalHistory = ({ idPatient }) => {

   initialForm["noDocumento"] = "6";

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
                        name="tiempoUltimaConsultaMedica"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="1 mes" control={<Radio />} label="1 mes" />
                        <FormControlLabel value="3 a 6 meses" control={<Radio />} label="3 a 6 meses" />
                        <FormControlLabel value="Más de 6 meses" control={<Radio />} label="Más de 6 meses" />
                        <FormControlLabel value="Más de 1 año" control={<Radio />} label="Más de 1 año" />
                     </RadioGroup>
                  </FormControl>
               </Grid>
            </Grid>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={8}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿Cuál fue el motivo de la Consulta Médica del niño(a)?:</FormLabel>
                     <RadioGroup
                        name="motivoConsulta_Opcion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="Control (Crecimiento y desarrollo)" control={<Radio />} label="Control (Crecimiento y desarrollo)" />
                        <FormControlLabel value="Vacunación" control={<Radio />} label="Vacunación" />
                        <FormControlLabel value="Urgencias" control={<Radio />} label="Urgencias" />
                        <FormControlLabel value="otros" control={<Radio />} label="Otra" />
                        <div className={`${form.motivoConsulta_Opcion === "otros" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="motivoConsulta_Cual" label="¿Cual?:" size="small"
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

            <Box py={1} my={2}>
               <FormLabel component="legend">Fecha, talla y peso del último control médico:</FormLabel>
               <TextField
                  type="date" variant="outlined" name="controlMedico_Fecha" label="Fecha:" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputLabelProps={{ shrink: true }} py={1} my={2}
               />

               <TextField
                  type="number" variant="outlined" name="controlMedico_Talla" label="Talla (Altura):" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputProps={{
                     endAdornment: <InputAdornment position="start">m</InputAdornment>,
                  }}
               />

               <TextField
                  type="number" variant="outlined" name="controlMedico_Peso" label="Peso:" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputProps={{
                     endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }}
               />

            </Box>

            <Box py={1} my={2}>
               <FormControl component="fieldset" required>
                  <FormLabel component="legend">¿Durante el periodo de embarazo hubo alguna complicación?:</FormLabel>
                  <RadioGroup
                     aria-label="ubicacion Lugar Nacimiento"
                     // defaultValue="female"
                     name="complicacionEmbarazo_Opcion"
                     row required
                     onChange={handleChange} onBlur={handleBlur}
                  >
                     <FormControlLabel value="s" control={<Radio />} label="Si" />
                     <FormControlLabel value="n" control={<Radio />} label="No" />
                     <div className={`${form.complicacionEmbarazo_Opcion === "s" ? "visible" : "noVisible"}`}>
                        <TextField
                           type="text" variant="outlined" name="complicacionEmbarazo_Cual" label="¿Cual?:" size="small"
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
                        name="enfermedadAntiguna_Opcion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.enfermedadAntiguna_Opcion === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="enfermedadAntiguna_Cual" label="¿Cual?:" size="small"
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
                        name="hospitalizacion_Opcion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.hospitalizacion_Opcion === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="hospitalizacion_CuantoTiempo" label="Cuánto tiempo?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                           // className="inputLarge"
                           />
                           <TextField
                              type="text" variant="outlined" name="hospitalizacion_Motivo" label="Por qué?:" size="small"
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
                        name="tomaMedicamentos_Opcion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.tomaMedicamentos_Opcion === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="tomaMedicamentos_Cual" label="¿Cual/s?:" size="small"
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
                        name="cirugia_Opcion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.cirugia_Opcion === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="cirugia_Cual" label="¿Cual?:" size="small"
                              onChange={handleChange} onBlur={handleBlur}
                           // className="inputLarge"
                           />
                           <TextField
                              type="text" variant="outlined" name="cirugia_CuantoTiempo" label="¿Hace cuánto?:" size="small"
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
                        name="cuidadoEspecial_Opcion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="s" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                        <div className={`${form.cuidadoEspecial_Opcion === "s" ? "visible" : "noVisible"}`}>
                           <TextField
                              type="text" variant="outlined" name="cuidadoEspecial_Cual" label="¿Cual?:" size="small"
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
                  type="date" variant="outlined" name="tomaDatos_Fecha" label="Fecha:" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputLabelProps={{ shrink: true }} py={1} my={2}
               />

               <TextField
                  type="number" variant="outlined" name="tomaDatos_Talla" label="Talla (Altura):" size="small"
                  onChange={handleChange} onBlur={handleBlur} InputProps={{
                     endAdornment: <InputAdornment position="start">m</InputAdornment>,
                  }}
               />

               <TextField
                  type="number" variant="outlined" name="tomaDatos_Peso" label="Peso:" size="small"
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
                        name="ultimaConsultaOdontologo_Opcion"
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
                  type="text" variant="outlined" name="ultimaConsultaOdontologo_CuantoTiempo" label="Tiempo:" size="small"
                  onChange={handleChange} onBlur={handleBlur} fullWidth
                  className="inputLarge"
               />
            </Box>

            <Grid container spacing={1} py={1} my={2}>
               <Grid item xs={12}>
                  <FormControl component="fieldset" required>
                     <FormLabel component="legend">¿La última vez que llevo al niño(a) al odontólogo cuál fue el motivo?:</FormLabel>
                     <RadioGroup
                        name="motivoUltimaConsulta_Opcion"
                        row required
                        onChange={handleChange} onBlur={handleBlur}
                     >
                        <FormControlLabel value="Valoración" control={<Radio />} label="Valoración" />
                        <FormControlLabel value="Aplicación Flúor" control={<Radio />} label="Aplicación Flúor" />
                        <FormControlLabel value="Limpieza" control={<Radio />} label="Limpieza" />
                        <FormControlLabel value="Calzar Dientes" control={<Radio />} label="Calzar Dientes" />
                        <FormControlLabel value="Retirar nervio del diente" control={<Radio />} label="Retirar nervio del diente" />
                        <FormControlLabel value="Retirar un diente" control={<Radio />} label="Retirar un diente" />
                        <FormControlLabel value="Urgencia (dolor, absceso...)" control={<Radio />} label="Urgencia (dolor, absceso...)" />
                        <div>
                           <TextField
                              type="text" variant="outlined" name="motivoUltimaConsulta_CuantoTiempo" label="¿Hace cuánto?:" size="small"
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