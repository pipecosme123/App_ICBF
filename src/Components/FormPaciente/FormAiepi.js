import React from 'react';
import { Box, Grid, Typography, Paper, Checkbox, TextField, FormControlLabel, Button, CircularProgress, FormControl, FormLabel, RadioGroup, Radio, Divider } from '@mui/material';
import { ExtraOral, TejidosBlandos, Encias, TejidosDentales } from '../../Constants/arrayAiepi';
import { useForm } from '../../hooks/useForm';
import Alerts from '../Alerts';

const initialForm = {
   asimetriaExtraOral_Check: false,
   asimetriaExtraOral_Respuesta: '',
   ruborExtraOral_Check: false,
   ruborExtraOral_Respuesta: '',
   dolorEnCaraExtraOral_Check: false,
   dolorEnCaraExtraOral_Respuesta: '',
   otroSignoExtraOral: '',
   lenguaTejidosBlandos_Check: false,
   lenguaTejidosBlandos_Respuesta: '',
   carrillosTejidosBlandos_Check: false,
   carrillosTejidosBlandos_Respuesta: '',
   pisoBocaTejidosBlandos_Check: false,
   pisoBocaTejidosBlandos_Respuesta: '',
   otroTejidosBlandos: '',
   fisurasEncias_Check: false,
   fisurasEncias_Respuesta: '',
   tumefaccionEncias_Check: false,
   tumefaccionEncias_Respuesta: '',
   gingivitisEncias_Check: false,
   gingivitisEncias_Respuesta: '',
   placaBactMaduraEncias_Check: false,
   placaBactMaduraEncias_Respuesta: '',
   placaBactInmaduraEncias_Check: false,
   placaBactInmaduraEncias_Respuesta: '',
   calculosEncias_Check: false,
   calculosEncias_Respuesta: '',
   cambioColorTejidosDentales_Check: false,
   cambioColorTejidosDentales_Respuesta: '',
   fracturasTejidosDentales_Check: false,
   fracturasTejidosDentales_Respuesta: '',
   movilidadPatologicaTejidosDentales_Check: false,
   movilidadPatologicaTejidosDentales_Respuesta: '',
   extracionTejidosDentales_Check: false,
   extracionTejidosDentales_Respuesta: '',
   lecionesManchasTejidosDentales_Check: false,
   lecionesManchasTejidosDentales_Respuesta: '',
   microcavidadesTejidosDentales_Check: false,
   microcavidadesTejidosDentales_Respuesta: '',
   cavidadesDetectablesTejidosDentales_Check: false,
   cavidadesDetectablesTejidosDentales_Respuesta: '',
   obtCompatiblesTejidosDentales_Check: false,
   obtCompatiblesTejidosDentales_Respuesta: '',
   obtRetentivasTejidosDentales_Check: false,
   obtRetentivasTejidosDentales_Respuesta: '',
   obtDefectuosasTejidosDentales_Check: false,
   obtDefectuosasTejidosDentales_Respuesta: '',
   alteracionesTejidosDentales_Check: false,
   alteracionesTejidosDentales_Respuesta: '',
   defectosEsmalteTejidosDentales_Check: false,
   defectosEsmalteTejidosDentales_Respuesta: '',
   alteracionesEsqueleticasTejidosDentales_Check: false,
   alteracionesEsqueleticasTejidosDentales_Respuesta: '',
   maloclusionTejidosDentales_Check: false,
   maloclusionTejidosDentales_Respuesta: '',
   remision: '',
   observaciones: '',
   clasificar: ''
}

const validationForm = (form) => {

   let errors = {}

   // if (!form.escuela.trim()) {
   //    errors.escuela = "El campo del nombre del paciete es requerido";
   // }

   return errors;
};

const FormAiepi = () => {

   initialForm["noDocumento"] = "5";

   const {
      // form,
      // error,
      loading,
      responseApi,
      handleChange,
      // handleBlur,
      handleSubmitAiepi
   } = useForm(initialForm, validationForm);

   // console.log(ExtraOral.name);

   return (
      <Box
         component="form"
         sx={{
            '& .MuiTextField-root': { my: 2, mx: 0, width: '100%' }
         }}
         noValidate elevation={2}
         autoComplete="off"
         onSubmit={handleSubmitAiepi}
         className="boxCenter"
      >


         <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Evaluación De Salud Bucal</b></Typography>

         <Paper sx={{ p: 1, my: 3, borderRadius: '16px' }} className="paperAiepi" md={7} xs={12} elevation={3}>

            <Typography variant="h4" className="titleForm"><b>Observar</b></Typography>

            <Divider sx={{ my: 3 }}>
               <Typography variant="h5">
                  Examen Extra-Oral
               </Typography>
            </Divider>


            <Box className="boxAiepi">
               <Typography variant="h6" gutterBottom component="div"><b> Presencia de:</b></Typography>
               {ExtraOral.map((list, index) => {

                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" multiline // disabled={! ? true : false}
                              onChange={handleChange}
                           />
                        </Grid>
                     </Grid>
                  )
               }
               )}
               <TextField
                  type="text" variant="outlined" name="otroSignoExtraOral" label="Otro Signo:" size="small" //disabled={!nameForm ? true : false}
                  onChange={handleChange}
               />
               {/* <TextField
                  type="text" variant="outlined" name="otroTejidosBlandos" label="Otro Signo:" size="small" //disabled={!nameForm ? true : false}
                  onChange={handleChange} // andleBlur} 
               /> */}
            </Box>

            <Divider sx={{ my: 3 }}>
               <Typography variant="h5">
                  Examen Intra-Oral
               </Typography>
            </Divider>

            <Box className="boxAiepi">
               <Typography variant="h6" gutterBottom component="div"><b> Tejidos blandos:</b></Typography>

               {TejidosBlandos.map((list, index) => {
                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" multiline //disabled={!nameForm ? true : false}
                              onChange={handleChange}
                           />
                        </Grid>
                     </Grid>
                  )
               }
               )}
               <TextField
                  type="text" variant="outlined" name="otroTejidosBlandos" label="Otro Signo:" size="small" //disabled={!nameForm ? true : false}
                  onChange={handleChange} // andleBlur} 
               />
            </Box>
            <Divider variant="middle" />
            <Box className="boxAiepi">
               <Typography variant="h6" gutterBottom component="div"><b> Encias con presencia de:</b></Typography>
               {Encias.map((list, index) => {
                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" multiline //disabled={!nameForm ? true : false}
                              onChange={handleChange}
                           />
                        </Grid>
                     </Grid>
                  )
               }
               )}
            </Box>
            <Divider variant="middle" />
            <Box className="boxAiepi">
               <Typography variant="h6" gutterBottom component="div"><b> Tejidos dentales con presencia de:</b></Typography>
               {TejidosDentales.map((list, index) => {
                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" multiline //disabled={!nameForm ? true : false}
                              onChange={handleChange}
                           />
                        </Grid>
                     </Grid>
                  )
               }
               )}
            </Box>
            <Divider variant="middle" />
            <Box className="boxAiepi">
               <Grid container className="gridAiepi">
                  <Grid item md={6} xs={12}>
                     <FormControl component="fieldset" required>
                        <FormLabel component="legend">¿Requiere remisión a tratamiento?:</FormLabel>
                        <RadioGroup
                           aria-label="¿Requiere remisión a tratamiento?"
                           // defaultValue="female"
                           name="remision"
                           row required
                           onChange={handleChange} //onBlur={handleBlur}
                        >
                           <FormControlLabel value={true} control={<Radio />} label="Si" />
                           <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                     </FormControl>
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <TextField
                        type="text" variant="outlined" name="observaciones" size="small"
                        label="Observaciones:" onChange={handleChange} className="inputLarge"
                        multiline
                     />
                     {/* <TextField
                        type="text" variant="outlined" name="complicacionEmbarazo_cual" label="¿Cual?:" size="small"
                        onChange={handleChange} // onBlur={handleBlur}
                        className="inputLarge"
                     /> */}
                  </Grid>
               </Grid>
            </Box>

         </Paper>

         <Paper sx={{ p: 1, my: 3, borderRadius: '16px' }} className="paperAiepi" md={7} xs={12} elevation={3}>
            <Typography variant="h4" className="titleForm"><b>Clasificar</b></Typography>
            <Box className="boxAiepi">
               <FormControl component="fieldset">
                  <RadioGroup
                     aria-label="gender"
                     name="clasificar"
                     // value={value}
                     onChange={handleChange}
                  >
                     <FormControlLabel value="Paciente sano" control={<Radio />} label="Paciente sano" />
                     <Typography variant="subtitle2">
                        <ul>
                           <li>Encías rosadas</li>
                           <li>Ausencia de placa bacteriana o placa inmadura</li>
                           <li>Dientes sin lesiones</li>
                           <li>Obturaciones compatibles</li>
                        </ul>
                     </Typography>

                     <FormControlLabel value="Enfermedad bucal leve / moderada" control={<Radio />} label="Enfermedad bucal leve / moderada" />
                     <Typography variant="subtitle2">
                        <ul>
                           <li>Inflamación de encías</li>
                           <li>Lesiones de mancha blanca – café por caries</li>
                           <li>Microcavidades por caries</li>
                           <li>Presencia de placa bacteriana madura</li>
                           <li>Obturaciones retentivas o defectuosas</li>
                           <li>Defectos del desarrollo del esmalte</li>
                        </ul>
                     </Typography>

                     <FormControlLabel value="Enfermedad bucal grave" control={<Radio />} label="Enfermedad bucal grave" />
                     <Typography variant="subtitle2">
                        <ul>
                           <li>Dolor intenso</li>
                           <li>Inflamación de encías</li>
                           <li>Cavidades detectables en dentina o extensas</li>
                           <li>Maloclusiones</li>
                           <li>Movilidad por patología</li>
                        </ul>
                     </Typography>

                     <FormControlLabel value="Alto riesgo de enfermedad: Compromiso sistematico" control={<Radio />} label="Alto riesgo de enfermedad: Compromiso sistematico" />
                     <Typography variant="subtitle2">
                        <ul>
                           <li>Inflamación intra o extraoral</li>
                           <li>Malestar general</li>
                           <li>Fiebre, inapetencia, decaimiento</li>
                           <li>Pus, exudado</li>
                           <li>Enrojecimiento y deformidad de la cara</li>
                           <li>Limitación de la apertura bucal</li>
                        </ul>
                     </Typography>

                     <FormControlLabel value="Trauma dental" control={<Radio />} label="Trauma dental" />
                     <Typography variant="subtitle2">
                        <ul>
                           <li>Movilidad dental trauma</li>
                           <li>Cambio de color en el diente por trauma</li>
                           <li>Cambio de color en la encía por trauma</li>
                           <li>Fractura por trauma</li>
                           <li>Pérdida del diente por trauma</li>
                        </ul>
                     </Typography>
                  </RadioGroup>
               </FormControl>
            </Box>
         </Paper>


         <Box sx={{ width: "100%" }} className="submitButton">
            {!loading &&
               <Button type="submit" variant="outlined" disableElevation size="large" >
                  Enviar
               </Button>
            }
            {loading && <CircularProgress />}

            {responseApi === true ?
               (<Alerts alertType="success" alertText="El formulario de <b>Evaluación De Salud Bucal - AIEPI</b> se ha guardado correctamente." />) : ""}
            {responseApi === false ?
               (<Alerts alertType="error" alertText="El formulario de <b>Evaluación De Salud Bucal - AIEPI</b> no se ha guardado correctamente." />) : ""}
            {/* {window.location.href = "/"} */}
         </Box>
      </Box>
   );
};

export default FormAiepi;