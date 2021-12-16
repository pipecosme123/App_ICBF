import React from 'react';
import Cookies from 'universal-cookie';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import useGetInformation from '../hooks/useGetInformation';
import DividerButton from '../Components/DividerButton';
import { RoutersLinks, urlApi } from '../Constants/RoutersLinks';
import { Search } from '@mui/icons-material';
// TextField

function calculateAge(fecha) {
   var today = new Date();
   var birthday = new Date(fecha);
   var age = today.getFullYear() - birthday.getFullYear();
   var m = today.getMonth() - birthday.getMonth();

   if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
   }

   return age;
}

const Profile = () => {

   const cookies = new Cookies();

   const url = `${urlApi}/${cookies.get('id')}`;
   const { data } = useGetInformation(url, 0);

   const age = calculateAge(data?.fechasNacimiento);
   const dateOfBirth = new Date(data?.fechasNacimiento);
   console.log(data);

   return (
      <div className='Profile'>

         <Box
            component="form"
            sx={{
               '& .MuiTextField-root': { my: 1.5, mx: 0.5, px: 0, width: '26ch' }
            }}
            noValidate elevation={2}
            autoComplete="off"
            // onSubmit={handleSubmitAiepi}
            className="boxCenter"
         >
            <Grid container>
               <Grid item sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }} xs={12} md={8}>
                  <TextField
                     type="number" variant="outlined" name="noDocumentoPaciente" label="Número de documento" size='small'
                     // onChange={handleChange} onBlur={handleBlur}
                     required
                  // helperText={error.noDocumentoPaciente ? "Este campo es requerido" : ""} error={error.noDocumentoPaciente ? true : false}
                  // className="inputLarge"
                  />

                  <Button type="submit" variant="outlined" disableElevation sx={{height: "65%"}} startIcon={<Search />}>
                     Enviar
                  </Button>
               </Grid>
            </Grid>
         </Box>

         <Divider />

         <Typography variant="h4" gutterBottom component="div"><b>{data?.nombres} {data?.apellidos}</b></Typography>
         <p>N de Documento: {data?.no_documentos}</p>
         <br />
         <Box>
            <DividerButton title="Información Personal" url={RoutersLinks.createUser} />
            {/* <p>N de Documento: {data?.no_documentos}</p> */}
            {/* <p>Nombre: {data?.nombres} {data?.apellidos}</p> */}
            <p>Edad: {age}</p>
            <p>Fecha de Nacimiento: {dateOfBirth.getDate()} / {dateOfBirth.getMonth()} / {dateOfBirth.getFullYear()}</p>
            <p>Lugar de Nacimiento: {data?.ciudadNacimiento} - {data?.ubicacionCiudadNacimiento}</p>
            <p>Direccion de Residencia: {data?.direccionesResidencial} / {data?.barriosResidencial} - {data?.ubicacionCiudadResidencial}</p>
            <p>Subsidio: {data?.subsidios === "aseguramiento" ? "Aseguramiento subsidiado" : data?.subsidios === "contributivo" ? "Contributivo" : "Otro"}</p>
            <p>E.P.S: {data?.eps}</p>

            <Divider textAlign="left">Información Personal del Acudiente</Divider>

            <p>N de Documento: {data?.cedulasAcudientes}</p>
            <p>Nombre: {data?.nombresAcudientes} {data?.apellidosAcudientes}</p>
            <p>Telefonno: {data?.telefonoAcudientes}</p>
            <p>Parentesco: {data?.parentescoAcudientes}</p>

         </Box>

         <Box>
            <DividerButton title="Antecedentes Clínicos" url={RoutersLinks.clinicalHistory} />

            <p>tiempoUltimaConsultaMedica: {data?.tiempoUltimaConsultaMedica}</p>
            <p>motivoConsulta_Opcion: {data?.motivoConsulta_Opcion}</p>
            <p>motivoConsulta_Cual: {data?.motivoConsulta_Cual}</p>
            <p>controlMedico_Fecha: {data?.controlMedico_Fecha}</p>
            <p>controlMedico_Talla: {data?.controlMedico_Talla}</p>

            <br />

            <p>controlMedico_Peso: {data?.controlMedico_Peso}</p>
            <p>complicacionEmbarazo_Opcion: {data?.complicacionEmbarazo_Opcion}</p>
            <p>complicacionEmbarazo_Cual: {data?.complicacionEmbarazo_Cual}</p>
            <p>tiempoEsperado: {data?.tiempoEsperado}</p>
            <p>enfermedadAntiguna_Opcion: {data?.enfermedadAntiguna_Opcion}</p>

            <br />

            <p>enfermedadAntiguna_Cual: {data?.enfermedadAntiguna_Cual}</p>
            <p>hospitalizacion_Opcion: {data?.hospitalizacion_Opcion}</p>
            <p>hospitalizacion_CuantoTiempo: {data?.hospitalizacion_CuantoTiempo}</p>
            <p>hospitalizacion_Motivo: {data?.hospitalizacion_Motivo}</p>
            <p>tomaMedicamentos_Opcion: {data?.tomaMedicamentos_Opcion}</p>

            <br />

            <p>tomaMedicamentos_Cual: {data?.tomaMedicamentos_Cual}</p>
            <p>cirugia_Opcion: {data?.cirugia_Opcion}</p>
            <p>cirugia_Cual: {data?.cirugia_Cual}</p>
            <p>cirugia_CuantoTiempo: {data?.cirugia_CuantoTiempo}</p>
            <p>cuidadoEspecial_Opcion: {data?.cuidadoEspecial_Opcion}</p>

            <br />

            <p>cuidadoEspecial_Cual: {data?.cuidadoEspecial_Cual}</p>
            <p>tomaDatos_Fecha: {data?.tomaDatos_Fecha}</p>
            <p>tomaDatos_Talla: {data?.tomaDatos_Talla}</p>
            <p>tomaDatos_Peso: {data?.tomaDatos_Peso}</p>
            <p>ultimaConsultaOdontologo_Opcion: {data?.ultimaConsultaOdontologo_Opcion}</p>

            <br />

            <p>ultimaConsultaOdontologo_CuantoTiempo: {data?.ultimaConsultaOdontologo_CuantoTiempo}</p>
            <p>motivoUltimaConsulta_Opcion: {data?.motivoUltimaConsulta_Opcion}</p>
            <p>motivoUltimaConsulta_CuantoTiempo: {data?.motivoUltimaConsulta_CuantoTiempo}</p>
            <p>experiencias: {data?.experiencias}</p>
         </Box>

         <Box>
            <DividerButton title="Evaluacion de Salud Bucal - AIEPI" url={RoutersLinks.aiepi} />
            <p>asimetriaExtraOral: {data?.asimetriaExtraOral_Check} - {data?.asimetriaExtraOral_Respuesta}</p>
            <p>ruborExtraOral: {data?.ruborExtraOral_Check} - {data?.ruborExtraOral_Respuesta}</p>
            <p>dolorEnCaraExtraOral: {data?.dolorEnCaraExtraOral_Check} - {data?.dolorEnCaraExtraOral_Respuesta}</p>
            <p>otroSignoExtraOral: {data?.otroSignoExtraOral}</p>
            <br />
            <p>lenguaTejidosBlandos: {data?.lenguaTejidosBlandos_Check} - {data?.lenguaTejidosBlandos_Respuesta}</p>
            <p>carrillosTejidosBlandos: {data?.carrillosTejidosBlandos_Check} - {data?.carrillosTejidosBlandos_Respuesta}</p>
            <p>pisoBocaTejidosBlandos: {data?.pisoBocaTejidosBlandos_Check} - {data?.pisoBocaTejidosBlandos_Respuesta}</p>
            <p>otroTejidosBlandos: {data?.otroTejidosBlandos}</p>
            <br />
            <p>fisurasEncias: {data?.fisurasEncias_Check} - {data?.fisurasEncias_Respuesta}</p>
            <p>tumefaccionEncias: {data?.tumefaccionEncias_Check} - {data?.tumefaccionEncias_Respuesta}</p>
            <p>gingivitisEncias: {data?.gingivitisEncias_Check} - {data?.gingivitisEncias_Respuesta}</p>
            <p>placaBactMaduraEncias: {data?.placaBactMaduraEncias_Check} - {data?.placaBactMaduraEncias_Respuesta}</p>
            <p>placaBactInmaduraEncias: {data?.placaBactInmaduraEncias_Check} - {data?.placaBactInmaduraEncias_Respuesta}</p>
            <p>calculosEncias: {data?.calculosEncias_Check} - {data?.calculosEncias_Respuesta}</p>
            <br />
            <p>cambioColorTejidosDentales: {data?.cambioColorTejidosDentales_Check} - {data?.cambioColorTejidosDentales_Respuesta}</p>
            <p>fracturasTejidosDentales: {data?.fracturasTejidosDentales_Check} - {data?.fracturasTejidosDentales_Respuesta}</p>
            <p>movilidadPatologicaTejidosDentales: {data?.movilidadPatologicaTejidosDentales_Check} - {data?.movilidadPatologicaTejidosDentales_Respuesta}</p>
            <p>extracionTejidosDentales: {data?.extracionTejidosDentales_Check} - {data?.extracionTejidosDentales_Respuesta}</p>
            <p>lecionesManchasTejidosDentales: {data?.lecionesManchasTejidosDentales_Check} - {data?.lecionesManchasTejidosDentales_Respuesta}</p>
            <p>microcavidadesTejidosDentales: {data?.microcavidadesTejidosDentales_Check} - {data?.microcavidadesTejidosDentales_Respuesta}</p>
            <p>cavidadesDetectablesTejidosDentales: {data?.cavidadesDetectablesTejidosDentales_Check} - {data?.cavidadesDetectablesTejidosDentales_Respuesta}</p>
            <p>obtCompatiblesTejidosDentales: {data?.obtCompatiblesTejidosDentales_Check} - {data?.obtCompatiblesTejidosDentales_Respuesta}</p>
            <p>obtRetentivasTejidosDentales: {data?.obtRetentivasTejidosDentales_Check} - {data?.obtRetentivasTejidosDentales_Respuesta}</p>
            <p>obtDefectuosasTejidosDentales: {data?.obtDefectuosasTejidosDentales_Check} - {data?.obtDefectuosasTejidosDentales_Respuesta}</p>
            <p>alteracionesTejidosDentales: {data?.alteracionesTejidosDentales_Check} - {data?.alteracionesTejidosDentales_Respuesta}</p>
            <p>defectosEsmalteTejidosDentales: {data?.defectosEsmalteTejidosDentales_Check} - {data?.defectosEsmalteTejidosDentales_Respuesta}</p>
            <p>alteracionesEsqueleticasTejidosDentales: {data?.alteracionesEsqueleticasTejidosDentales_Check} - {data?.alteracionesEsqueleticasTejidosDentales_Respuesta}</p>
            <p>maloclusionTejidosDentales: {data?.maloclusionTejidosDentales_Check} - {data?.maloclusionTejidosDentales_Respuesta}</p>
            <br />
            <p>remision: {data?.remision}</p>
            <p>observaciones: {data?.observaciones}</p>
            <p>clasificar: {data?.clasificar}</p>
         </Box>
      </div>
   );
};

export default Profile;