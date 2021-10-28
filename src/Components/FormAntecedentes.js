import axios from 'axios';
import React, { useState } from 'react';
import InputText from './InputText';

const FormAntecedentes = ({ isFormPaciente, documentoPaciente }) => {

   const [data, setData] = useState({});

   const hnadleInputText = (e) => {
      const newData = { ...data };
      newData[e.target.name] = e.target.value.trim();
      setData(newData);
   }

   const handleSubmitAntecedentes = (e) => {
      e.preventDefault();

      console.log(isFormPaciente, documentoPaciente);

      if (isFormPaciente) {

         setData({ documentoPaciente: documentoPaciente })

         axios.post('http://localhost:3032/antecedentes', data)
            .then(function (response) {
               console.log(response.data);

            })
            .catch(function (error) {
               console.log(error);
            });
         
      }else{
         console.log("No se ha enviado el primer formulario")
      }
   }

   return (
      <div>
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
                     <InputText type="text" arrayInput={{ id: "talla", title: "Talla" }} handle={hnadleInputText} />
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
                              nameButton: "ComplicacionEmbarazo",
                              array: [
                                 { id: "ComplicacionEmbarazo_Si", title: "Si", valueBotton: "Si" },
                                 { id: "ComplicacionEmbarazo_No", title: "No", valueBotton: "No" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "ComplicacionEmbarazo_cual", title: "¿Cuál?" }} handle={hnadleInputText} />
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
   );
};

export default FormAntecedentes;