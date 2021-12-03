import React from 'react';
import { Box, Grid, Typography, Paper, Checkbox, TextField, FormControlLabel, Button, CircularProgress, FormControl, FormLabel, RadioGroup, Radio, Divider } from '@mui/material';
import { ExtraOral, TejidosBlandos, Encias, TejidosDentales } from '../../Constants/arrayAiepi';
import { useForm } from '../../hooks/useForm';
import Alerts from '../Alerts';

const initialForm = {
   Asimetria_ExtraOral_Check: true,
   Asimetria_ExtraOral_Respuesta: "",
   Rubor_ExtraOral_Check: false,
   Rubor_ExtraOral_Respuesta: "",
   DolorEnCara_ExtraOral_Check: false,
   DolorEnCara_ExtraOral_Respuesta: "",
   OtroSigno_ExtraOral: "",
   Lengua_TejidosBlandos_Check: false,
   Lengua_TejidosBlandos_Respuesta: "",
   Carrillos_TejidosBlandos_Check: false,
   Carrillos_TejidosBlandos_Respuesta: "",
   PisoBoca_TejidosBlandos_Check: false,
   PisoBoca_TejidosBlandos_Respuesta: "",
   Otro_TejidosBlandos: "",
   Fisuras_Encias_Check: false,
   Fisuras_Encias_Respuesta: "",
   Tumefaccion_Encias_Check: false,
   Tumefaccion_Encias_Respuesta: "",
   Gingivitis_Encias_Check: false,
   Gingivitis_Encias_Respuesta: "",
   PlacaBactMadura_Encias_Check: false,
   PlacaBactMadura_Encias_Respuesta: "",
   PlacaBactInmadura_Encias_Check: false,
   PlacaBactInmadura_Encias_Respuesta: "",
   Calculos_Encias_Check: false,
   Calculos_Encias_Respuesta: "",
   CambioColor_TejidosDentales_Check: false,
   CambioColor_TejidosDentales_Respuesta: "",
   Fracturas_TejidosDentales_Check: false,
   Fracturas_TejidosDentales_Respuesta: "",
   MovilidadPatologica_TejidosDentales_Check: false,
   MovilidadPatologica_TejidosDentales_Respuesta: "",
   Extracion_TejidosDentales_Check: false,
   Extracion_TejidosDentales_Respuesta: "",
   LecionesManchas_TejidosDentales_Check: false,
   LecionesManchas_TejidosDentales_Respuesta: "",
   Microcavidades_TejidosDentales_Check: false,
   Microcavidades_TejidosDentales_Respuesta: "",
   CavidadesDetectables_TejidosDentales_Check: false,
   CavidadesDetectables_TejidosDentales_Respuesta: "",
   ObtCompatibles_TejidosDentales_Check: false,
   ObtCompatibles_TejidosDentales_Respuesta: "",
   ObtRetentivas_TejidosDentales_Check: false,
   ObtRetentivas_TejidosDentales_Respuesta: "",
   ObtDefectuosas_TejidosDentales_Check: false,
   ObtDefectuosas_TejidosDentales_Respuesta: "",
   Alteraciones_TejidosDentales_Check: false,
   Alteraciones_TejidosDentales_Respuesta: "",
   DefectosEsmalte_TejidosDentales_Check: false,
   DefectosEsmalte_TejidosDentales_Respuesta: "",
   AlteracionesEsqueleticas_TejidosDentales_Check: false,
   AlteracionesEsqueleticas_TejidosDentales_Respuesta: "",
   Maloclusion_TejidosDentales_Check: false,
   Maloclusion_TejidosDentales_Respuesta: "",
   Remision: "",
   Observaciones: ""
}

const validationForm = (form) => {

   let errors = {}

   // if (!form.escuela.trim()) {
   //    errors.escuela = "El campo del nombre del paciete es requerido";
   // }

   return errors;
};

const FormAiepi = () => {

   initialForm["noDocumento"] = "1";

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


         <Paper sx={{ p: 1, my: 3 }} className="paperAiepi" md={7} xs={12} elevation={3}>

            <Typography variant="h5" className="titleForm">EXAMEN EXTRA-ORAL</Typography>

            <Box className="boxAiepi">
               <Typography variant="subtitle1" gutterBottom component="div">Presencia de:</Typography>
               {ExtraOral.map((list, index) => {

                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" // disabled={! ? true : false}
                              onChange={handleChange}
                           />
                        </Grid>
                     </Grid>
                  )
               }
               )}
               <TextField
                  type="text" variant="outlined" name="OtroSigno_ExtraOral" label="Otro:" size="small" //disabled={!nameForm ? true : false}
                  onChange={handleChange}
               />
            </Box>
         </Paper>
         <Divider variant="middle" />
         <Paper sx={{ p: 1, my: 3 }} className="paperAiepi" md={7} xs={12} elevation={3}>
            <Typography variant="h5" gutterBottom component="div" className="titleForm">EXAMEN INTRA-ORAL</Typography>

            <Box className="boxAiepi">
               <Typography variant="subtitle1" gutterBottom component="div">Tejidos blandos:</Typography>

               {TejidosBlandos.map((list, index) => {
                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" //disabled={!nameForm ? true : false}
                              onChange={handleChange}
                           />
                        </Grid>
                     </Grid>
                  )
               }
               )}
               <TextField
                  type="text" variant="outlined" name="OtroSigno_ExtraOral" label="Otro:" size="small" //disabled={!nameForm ? true : false}
                  onChange={handleChange} // andleBlur} 
               />
            </Box>
            <Divider variant="middle" />
            <Box className="boxAiepi">
               <Typography variant="subtitle1" gutterBottom component="div">Encias con presencia de:</Typography>
               {Encias.map((list, index) => {
                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" //disabled={!nameForm ? true : false}
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
               <Typography variant="subtitle1" gutterBottom component="div">Tejidos dentales con presencia de:</Typography>
               {TejidosDentales.map((list, index) => {
                  return (
                     <Grid key={index} container className="gridAiepi">
                        <Grid item md={6} xs={12}>
                           <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                           <TextField
                              type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" className="inputLarge" //disabled={!nameForm ? true : false}
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
                           name="Remision"
                           row required
                           onChange={handleChange} //onBlur={handleBlur}
                        >
                           <FormControlLabel value="s" control={<Radio />} label="Si" />
                           <FormControlLabel value="n" control={<Radio />} label="No" />
                        </RadioGroup>
                     </FormControl>
                  </Grid>
                  <Grid item md={6} xs={12}>
                     <TextField
                        type="text" variant="outlined" name="complicacionEmbarazo_cual" label="¿Cual?:" size="small"
                        onChange={handleChange} // onBlur={handleBlur}
                        className="inputLarge"
                     />
                  </Grid>
               </Grid>
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