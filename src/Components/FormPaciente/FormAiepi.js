import { Container, Box, Grid, Typography, Paper, List, ListItem, ListItemIcon, Checkbox, ListItemText, TextField, FormControlLabel } from '@mui/material';
import React from 'react';
import { ExtraOral, TejidosBlandos, Encias, TejidosDentales } from '../../Constants/arrayAiepi';
import { useForm } from '../../hooks/useForm';

const initialForm = {
   Asimetria_ExtraOral_Check: false,
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

   const {
      // form,
      // error,
      // loading,
      // responseApi,
      handleChange,
      // handleBlur,
      // handleSubmitClinicalHistory
   } = useForm(initialForm, validationForm);

   // console.log(ExtraOral.name);

   return (
      <Container>
         <Box
            component="form"
            sx={{
               '& .MuiTextField-root': { my: 2, mx: 1, width: '25ch' }
            }}
            noValidate elevation={2}
            autoComplete="off"
            // onSubmit={handleSubmitClinicalHistory}
            className="boxContainer boxCenter">

            <Typography variant="h4" gutterBottom component="div" className="titleForm"><b>Evaluación De Salud Bucal</b></Typography>


            <Paper sx={{ p: 2, my: 3, width: '100%' }} elevation={3}>
               <Typography variant="h5" className="titleForm">EXAMEN EXTRA-ORAL</Typography>
               <Box sx={{ m: 5 }}>
                  <Typography variant="subtitle1" gutterBottom component="div">Presencia de:</Typography>
                  {/* <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}> */}
                  {ExtraOral.map((list, index) => {

                     return (
                        <Grid container spacing={2}>
                           {/* <Box key={index} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}> */}
                           <Grid item md={7} xs={12}>
                              <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                           </Grid>
                           <Grid item md={5} xs={12}>
                              <TextField
                                 type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" //disabled={!nameForm ? true : false}
                                 onChange={handleChange}
                              />
                           </Grid>{/* </Box> */}
                        </Grid>

                     )
                  }
                  )}
                  {/* </List> */}
                  <TextField
                     type="text" variant="outlined" name="OtroSigno_ExtraOral" label="Otro:" size="small" //disabled={!nameForm ? true : false}
                     onChange={handleChange} // andleBlur} 
                  />
               </Box>
            </Paper>

            <Paper sx={{ p: 2, my: 3, width: '70%' }} elevation={3}>
               <Typography variant="h5" gutterBottom component="div" className="titleForm">EXAMEN INTRA-ORAL</Typography>
               <Box sx={{ m: 5 }}>
                  <Typography variant="subtitle1" gutterBottom component="div">Tejidos blandos:</Typography>
                  <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                     {TejidosBlandos.map((list, index) => {

                        return (
                           <Box key={index} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

                              <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                              <TextField
                                 type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" //disabled={!nameForm ? true : false}
                                 onChange={handleChange}
                              />

                           </Box>
                        )
                     }
                     )}
                  </List>
                  <TextField
                     type="text" variant="outlined" name="OtroSigno_ExtraOral" label="Otro:" size="small" //disabled={!nameForm ? true : false}
                     onChange={handleChange} // andleBlur} 
                  />
               </Box>

               <Box sx={{ m: 5 }}>
                  <Typography variant="subtitle1" gutterBottom component="div">Encias con presencia de:</Typography>
                  <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                     {Encias.map((list, index) => {
                        return (
                           <Box key={index} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

                              <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                              <TextField
                                 type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" //disabled={!nameForm ? true : false}
                                 onChange={handleChange}
                              />

                           </Box>
                        )
                     }
                     )}
                  </List>
               </Box>

               <Box sx={{ m: 5 }}>
                  <Typography variant="subtitle1" gutterBottom component="div">Tejidos dentales con presencia de:</Typography>
                  <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                     {TejidosDentales.map((list, index) => {
                        return (
                           <Box key={index} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

                              <FormControlLabel control={<Checkbox />} label={`${list.item}`} name={`${list.name}`} onChange={handleChange} />
                              <TextField
                                 type="text" variant="outlined" name={`${list.nameInput}`} label="¿Qué observa?:" size="small" //disabled={!nameForm ? true : false}
                                 onChange={handleChange}
                              />

                           </Box>
                        )
                     }
                     )}
                  </List>
               </Box>
            </Paper>
         </Box>
      </Container>
   );
};

export default FormAiepi;