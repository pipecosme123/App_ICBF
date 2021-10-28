import axios from 'axios';
import React, { useState } from 'react';
import InputText from './InputText';

const FormInformacionPersonal = ({ submitFormPaciente }) => {

   const [data, setData] = useState({});


   const hnadleInputText = (e) => {
      const newData = { ...data };
      newData[e.target.name] = e.target.value.trim();
      setData(newData);
   }

   const handleSubmitInfPersonal = (e) => {
      e.preventDefault();

      axios.post('http://localhost:3032/infoPaciente', data)
         .then(function (response) {
            console.log(response.data);
            submitFormPaciente(response.data);
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   return (
      <div>
         <form onSubmit={handleSubmitInfPersonal}>

            <div className="informacionPersonal">
               <div className="divInputText">
                  <InputText type="text" arrayInput={{ id: "escuela", title: "Jardín" }} handle={hnadleInputText} />
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
                     check={data}
                     handle={hnadleInputText} />
               </div>

               {/* <hr /> */}
               <br />
               <h3>Información Personal del niño(a)</h3>
               <div className="divInputText">
                  <InputText type="number" arrayInput={{ id: "noDocumentoPaciente", title: "N° Documento" }} handle={hnadleInputText} />
               </div>
               <div className="divInputText">
                  <InputText type="text" arrayInput={{ id: "nombrePaciente", title: "Nombre del niño(a)" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "apellidoPaciente", title: "Apellidos" }} handle={hnadleInputText} />
                  {/* <p>Edad: {data.edad}</p> */}
                  {/* <InputText type="text" arrayInput={{ id: "edad", title: "Edad", value: data.edad }} /> */}
                  <InputText type="date" arrayInput={{ id: "fechaNacimiento", title: "Fecha de nacimiento" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "lugarNacimiento", title: "Lugar de nacimiento" }} handle={hnadleInputText} />
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
                     check={data}
                     handle={hnadleInputText}
                  />

               </div>
               <div className="divInputText">
                  <InputText type="text" arrayInput={{ id: "direccionResidencial", title: "Dirección de residencia" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "barrioResidencial", title: "Barrio" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "ciudadResidencial", title: "Ciudad/Municipio" }} handle={hnadleInputText} />
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
                     check={data}
                     handle={hnadleInputText}
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
                     check={data}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "eps", title: "E.P.S." }} handle={hnadleInputText} />
               </div>
               <br />
               <h3>Persona responsable-Tutor del niño(a)</h3>
               <div className="divInputText">
                  <InputText type="number" arrayInput={{ id: "acudienteIdentificación", title: "Identificación" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "acudienteNombre", title: "Nombres" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "acudienteApellido", title: "Apellidos" }} handle={hnadleInputText} />
                  <InputText type="number" arrayInput={{ id: "acudienteTeléfono", title: "Teléfono(s)" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "acudienteParentesco", title: "Parentesco con el niño(a)" }} handle={hnadleInputText} />
               </div>
            </div>

            <div className="buttonSubmit">
               <input type="submit" value="Guardar Datos" />
            </div>

         </form>
      </div>
   );
};

export default FormInformacionPersonal;