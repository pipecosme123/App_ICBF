// import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { Alert, AlertTitle, Box, Button, CircularProgress, Container, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Radio, RadioGroup, Snackbar, TextField, Typography } from '@mui/material';
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
      <Container>
         <Box
            component="form"
            sx={{
               '& .MuiTextField-root': { my: 2, mx: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off" onSubmit={handleSubmitClinicalHistory}
            className="boxContainer">

            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Antecedentes de salud general y bucal del niño(a)</b></Typography>

            <Grid container spacing={1} py={1} disabled={true}>
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

            <Grid container spacing={1} py={1}>
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
                  onChange={handleChange} onBlur={handleBlur} InputLabelProps={{ shrink: true }} py={1}
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

            <Grid container spacing={1} py={1}>
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

            <Grid container spacing={1} py={1}>
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

            <Grid container spacing={1} py={1}>
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

            <Grid container spacing={1} py={1}>
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

            <Grid container spacing={1} py={1}>
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

            <Grid container spacing={1} py={1}>
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
                  onChange={handleChange} onBlur={handleBlur} InputLabelProps={{ shrink: true }} py={1}
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

            <Grid container spacing={1} py={1}>
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

            <Grid container spacing={1} py={1}>
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

            <Grid container spacing={1} py={1}>
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

export default FormClinicalHistory;
/*

<div>

         <Typography variant="h4" gutterBottom component="div" className="titleH1">Antecedentes de salud general y bucal del niño(a)</Typography>
         <Typography variant="h5" gutterBottom component="div">(Formato para diligenciar antes de la valoración)</Typography>

         <form onSubmit={handleSubmitAntecedentes}>
            <ol type="1">
               <li>
                  <p>¿Cuándo fue la última vez que el niño(a) asistió a consulta con el Médico?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "ultimaConsulta",
                              array: [
                                 { id: "1mes", title: "1 mes", valueBotton: "1mes" },
                                 { id: "3a6meses", title: "3 a 6 meses", valueBotton: "3a6meses" },
                                 { id: "6meses", title: "Más de 6 meses", valueBotton: "6meses" },
                                 { id: "1año", title: "Más de 1 año", valueBotton: "1año" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                  </div>
               </li>

               <li>
                  <p>¿Cuál fue el motivo de la Consulta Médica del niño(a)?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "motivoConsulta",
                              array: [
                                 { id: "control", title: "Control (Crecimiento y desarrollo)", valueBotton: "control" },
                                 { id: "vacunacion", title: "Vacunación", valueBotton: "vacunacion" },
                                 { id: "urgencias", title: "Urgencias", valueBotton: "urgencias" },
                                 { id: "otrosP2", title: "Otra", valueBotton: "otros" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "motivoConsulta_cual", title: "¿Cuál?" }} handle={hnadleInputText} />
                  </div>
               </li>

               <li>
                  <p>Fecha del último control médico:</p>
                  <div className="optionsQuestions">
                     <InputText type="date" arrayInput={{ id: "fechaControlMedico", title: "¿Cuál?" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "talla", title: "Talla" }} handle={hnadleInputText} /><p>M</p>
                     <InputText type="text" arrayInput={{ id: "peso", title: "Peso" }} handle={hnadleInputText} />
                  </div>
               </li>

               <li>
                  <p>¿Durante el periodo de embarazo hubo alguna complicación?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "complicacionEmbarazo",
                              array: [
                                 { id: "complicacionEmbarazo_Si", title: "Si", valueBotton: "Si" },
                                 { id: "complicacionEmbarazo_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "complicacionEmbarazo_cual", title: "¿Cuál?" }} handle={hnadleInputText} />
                  </div>
               </li>


               <li>
                  <p>¿El parto fue en el tiempo esperado?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "tiempoEsperado",
                              array: [
                                 { id: "tiempoEsperado_si", title: "Si", valueBotton: "Si" },
                                 { id: "tiempoEsperado_no", title: "No", valueBotton: "No" },
                                 { id: "tiempoEsperado_antes", title: "(Antes", valueBotton: "Antes" },
                                 { id: "tiempoEsperado_despues", title: "o Después de lo esperado)", valueBotton: "Después" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                  </div>
               </li>

               <li>
                  <p>¿Desde que el niño(a) nació hasta la fecha, ha sufrido de alguna enfermedad?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "enfermedadAntiguna",
                              array: [
                                 { id: "enfermedadAntiguna_Si", title: "Si", valueBotton: "Si" },
                                 { id: "enfermedadAntiguna_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "enfermedadAntiguna_cual", title: "¿Cuál?" }} handle={hnadleInputText} />
                  </div>
               </li>


               <li>
                  <p>¿El niño(a) ha estado hospitalizado?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "hospitalizacion",
                              array: [
                                 { id: "hospitalizacion_Si", title: "Si", valueBotton: "Si" },
                                 { id: "hospitalizacion_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "hospitalizacion_cuantoTiempo", title: "¿Cuánto tiempo?" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "hospitalizacion_porque", title: "¿Por qué?" }} handle={hnadleInputText} />
                  </div>

               </li>


               <li>
                  <p>¿El niño(a) está tomando algún medicamento de rutina?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "medicamento",
                              array: [
                                 { id: "medicamento_Si", title: "Si", valueBotton: "Si" },
                                 { id: "medicamento_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "medicamento_cual", title: "¿Cuál?" }} handle={hnadleInputText} />
                  </div>
               </li>


               <li>
                  <p>¿Le han practicado al niño(a) alguna cirugía?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "cirugia",
                              array: [
                                 { id: "cirugia_Si", title: "Si", valueBotton: "Si" },
                                 { id: "cirugia_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "cirugia_cual", title: "¿Cuál?" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "cirugia_haceCuanto", title: "¿Hace cuánto?" }} handle={hnadleInputText} />
                  </div>
               </li>


               <li>
                  <p>¿De acuerdo con recomendación del médico, el niño(a) requiere algún cuidado especial para la atención odontológica?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "cuidadoEspecial",
                              array: [
                                 { id: "cuidadoEspecial_Si", title: "Si", valueBotton: "Si" },
                                 { id: "cuidadoEspecial_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "cuidadoEspecial_cual", title: "¿Cuál?" }} handle={hnadleInputText} />
                  </div>
               </li>

               <li>
                  <div className="optionsQuestions">
                     <InputText type="text" arrayInput={{ id: "textPregunta72", title: "Fecha en la que se tomó talla y peso al niño(a)" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "talla", title: "Talla" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "peso", title: "Peso" }} handle={hnadleInputText} />
                  </div>
               </li>


               <li>
                  <p>¿Lo ha llevado al odontólogo en el último año?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "ultimaConsultaOdontologo",
                              array: [
                                 { id: "ultimaConsultaOdontologo_Si", title: "Si", valueBotton: "Si" },
                                 { id: "ultimaConsultaOdontologo_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                  </div>
                  <div className="optionsQuestions">
                     <InputText type="text" arrayInput={{ id: "ultimaConsultaOdontologo_CadaCuanto", title: "¿Cada cuánto tiempo acostumbra llevarlo?" }} handle={hnadleInputText} />
                  </div>
               </li>


               <li>
                  <p>¿La última vez que llevo al niño(a) al odontólogo cuál fue el motivo?</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "motivoUltimaConsulta",
                              array: [
                                 { id: "motivoUltimaConsulta_Valoracion", title: "Valoración", valueBotton: "Valoración" },
                                 { id: "motivoUltimaConsulta_AplicacionFluor", title: "Aplicación Flúor", valueBotton: "Aplicación Flúor" },
                                 { id: "motivoUltimaConsulta_Limpieza", title: "Limpieza", valueBotton: "Limpieza" },
                                 { id: "motivoUltimaConsulta_CalzarDientes", title: "Calzar Dientes", valueBotton: "Calzar Dientes" },
                                 { id: "motivoUltimaConsulta_RetirarNervio", title: "Retirar nervio del diente", valueBotton: "Retirar nervio del diente" },
                                 { id: "motivoUltimaConsulta_RetirarDiente", title: "Retirar un diente", valueBotton: "Retirar un diente" },
                                 { id: "motivoUltimaConsulta_Urgencia", title: "Urgencia (dolor, absceso...)", valueBotton: "Urgencia" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                  </div>
                  <div className="optionsQuestions">
                     <InputText type="text" arrayInput={{ id: "motivoUltimaConsulta_haceCuanto", title: "¿Hace cuánto?" }} handle={hnadleInputText} />
                  </div>

               </li>

               <li>
                  <p>La experiencia en las visitas previas del niño(a) al odontólogo han sido:</p>
                  <div className="optionsQuestions">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "experiencias",
                              array: [
                                 { id: "experiencias_MuyBuenas", title: "Muy buenas", valueBotton: "MuyBuenas" },
                                 { id: "experiencias_Buenas", title: "Buenas", valueBotton: "Buenas" },
                                 { id: "experiencias_PocoAgradables", title: "Poco agradables", valueBotton: "PocoAgradables" },
                                 { id: "experiencias_Malas", title: "Malas", valueBotton: "Malas" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                  </div>
               </li>
            </ol>
            <div className="buttonSubmit">
               <input type="submit" value="Guardar Antecedentes" />
            </div>
         </form>
      </div>

*/