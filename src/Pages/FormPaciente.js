import React, { useState } from 'react';
import FormAntecedentes from '../Components/FormAntecedentes';
import FormInformacionPersonal from '../Components/FormInformacionPersonal';
import '../css/FormPaciente.css';

const FormPaciente = () => {

   const [submitInfo, setsubmitInfo] = useState(false);
   const [documentoPaciente, setDocumentoPaciente] = useState(null);
   const fecha = new Date();

   const submitFormPaciente = (documento) => {
      setDocumentoPaciente(documento);
      setsubmitInfo(true);
   }

   return (
      <div className='FormPaciente content'>

         <h1 className="title">Antecedentes de salud general y bucal del niño(a)</h1>
         <h3 className="subtitle">(Formato para diligenciar antes de la valoración)</h3>


         <div className="divFormPaciente">

            <div className="fecha">
               <span>Fecha: </span>
               <p>{fecha.getDate()}</p>
               <p>{fecha.getMonth() + 1}</p>
               <p>{fecha.getFullYear()}</p>
            </div>

            <FormInformacionPersonal submitFormPaciente={submitFormPaciente} />

            <h2 className="informacion"><b>Cordial saludo</b>, antes de realizar la valoración odontológica al niño(a), es importante conocer sus antecedentes médicos y odontológicos</h2>
            <h3 className="sub2">Maque con una X una de las opciones:</h3>

            <FormAntecedentes isFormPaciente={submitInfo} documentoPaciente={documentoPaciente} />
         </div>


      </div>
   );
};

export default FormPaciente;