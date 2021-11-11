// import axios from 'axios';
import React from 'react';
import { useForm } from '../hooks/useForm';
import InputText from './InputText';

import 'react-toastify/dist/ReactToastify.css';

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
   acudienteParentesco: "",
};

const validationForm = (form) => {
   let errors = {}

   if (!form.nombrePaciente.trim()) {
      errors.nombrePaciente = "El campo del nombre del paciete es requerido";
   }

   return errors;
};

const FormInformacionPersonal = ({ submitFormPaciente }) => {

   const {
      form,
      error,
      loading,
      responseApi,
      handleChange,
      handleBlur,
      handleSubmit
   } = useForm(initialForm, validationForm);


   // const handleChange = (e) => {
   //    const { name, value } = e.target;
   //    const newData = { ...data };
   //    newData[name] = value.trim();
   //    setData(newData);
   // }

   // const handleBlur = (e) => {
   //    let error = {};
   //    handleChange(e);
   // }


   const handleSubmitInfPersonal = (e) => {

      const idPaciente = handleSubmit(e);
      submitFormPaciente(idPaciente);
   //    e.preventDefault();

   // axios.post('https://appicbfcolgate.kagencia.com/api/infoPaciente', data)
   //    .then(function (response) {
   //       console.log(response.data);
   //       submitFormPaciente(response.data);
   //    })
   //    .catch(function (error) {
   //       console.log(error);
   //    });
   }

   return (
      <div>
         <form onSubmit={handleSubmitInfPersonal}>

            <div className="informacionPersonal">
               <div className="divInputText">
                  <InputText type="text" arrayInput={{ id: "escuela", title: "Jardín", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "ubicacionEscuela",
                           array: [
                              { id: "ubicacionEscuela_Rural", title: "Rural", valueBotton: "Rural" },
                              { id: "ubicacionEscuela_Urbano", title: "Urbano", valueBotton: "Urbano" }
                           ]
                        }}
                     check={form}
                     handle={handleChange} blur={handleBlur} />
               </div>

               {/* <hr /> */}
               <br />
               <h3>Información Personal del niño(a)</h3>
               <div className="divInputText">
                  <InputText type="number" arrayInput={{ id: "noDocumentoPaciente", title: "N° Documento", isRequired: true }} handle={handleChange} blur={handleBlur} />
               </div>
               <div className="divInputText">
                  <InputText type="text" arrayInput={{ id: "nombrePaciente", title: "Nombre del niño(a)", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  {error.nombrePaciente && <p>{error.nombrePaciente}</p>}
                  <InputText type="text" arrayInput={{ id: "apellidoPaciente", title: "Apellidos", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  {/* <p>Edad: {data.edad}</p> */}
                  {/* <InputText type="text" arrayInput={{ id: "edad", title: "Edad", value: data.edad }} /> */}
                  <InputText type="date" arrayInput={{ id: "fechaNacimiento", title: "Fecha de nacimiento", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText type="text" arrayInput={{ id: "lugarNacimiento", title: "Lugar de nacimiento", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "ubicacionLugarNacimiento",
                           array: [
                              { id: "ubicacionLugarNacimiento_Rural", title: "Rural", valueBotton: "Rural" },
                              { id: "ubicacionLugarNacimiento_Urbano", title: "Urbano", valueBotton: "Urbano" }
                           ]
                        }}
                     check={form}
                     handle={handleChange} blur={handleBlur}
                  />

               </div>
               <div className="divInputText">
                  <InputText type="text" arrayInput={{ id: "direccionResidencial", title: "Dirección de residencia", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText type="text" arrayInput={{ id: "barrioResidencial", title: "Barrio", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText type="text" arrayInput={{ id: "ciudadResidencial", title: "Ciudad/Municipio", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "ubicacionResidencial",
                           array: [
                              { id: "ubicacionResidencial_Rural", title: "Rural", valueBotton: "Rural" },
                              { id: "ubicacionResidencial_Urbano", title: "Urbano", valueBotton: "Urbano" }
                           ]
                        }}
                     check={form}
                     handle={handleChange} blur={handleBlur}
                  />

               </div>

               <div className="divInputText">
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "subsidio",
                           array: [
                              { id: "Aseguramiento", title: "Aseguramiento subsidiado", valueBotton: "aseguramiento" },
                              { id: "Contributivo", title: "Contributivo", valueBotton: "contributivo" },
                              { id: "Otro", title: "Otro", valueBotton: "otro" }

                           ]
                        }}
                     check={form}
                     handle={handleChange} blur={handleBlur}
                  />
                  <InputText type="text" arrayInput={{ id: "eps", title: "E.P.S.", isRequired: true }} handle={handleChange} blur={handleBlur} />
               </div>
               <br />
               <h3>Persona responsable-Tutor del niño(a)</h3>
               <div className="divInputText">
                  <InputText type="number" arrayInput={{ id: "acudienteIdentificación", title: "Identificación", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText type="text" arrayInput={{ id: "acudienteNombre", title: "Nombres", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText type="text" arrayInput={{ id: "acudienteApellido", title: "Apellidos", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText type="number" arrayInput={{ id: "acudienteTeléfono", title: "Teléfono(s)", isRequired: true }} handle={handleChange} blur={handleBlur} />
                  <InputText type="text" arrayInput={{ id: "acudienteParentesco", title: "Parentesco con el niño(a)", isRequired: true }} handle={handleChange} blur={handleBlur} />
               </div>
            </div>

            <div className="buttonSubmit">
               <input type="submit" value="Guardar Datos" />

            </div>
            {/* {responseApi && submitFormPaciente(response.data)} */}
         </form>
      </div>
   );
};

export default FormInformacionPersonal;