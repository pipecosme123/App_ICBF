import React, { useState } from 'react';
import FormAntecedentes from '../Components/FormAntecedentes';
import FormInformacionPersonal from '../Components/FormInformacionPersonal';
import { ToastContainer, toast } from 'react-toastify';
import '../css/FormPaciente.css';

const FormPaciente = () => {

   window.document.title = 'Información personal del paciente - ICBF';
   const [submitInfo, setsubmitInfo] = useState(false);
   const [documentoPaciente, setDocumentoPaciente] = useState(null);
   const fecha = new Date();
   

   const submitFormPaciente = (documento) => {
      setDocumentoPaciente(documento);
      setsubmitInfo(true);
      toast.success  ("Usuario Registrado", {
         position: toast.POSITION.TOP_RIGHT,
         autoClose: 5000
      })
   }

   return (
      <div className='FormPaciente content'>

         <h1 className="title">Antecedentes de salud general y bucal del niño(a)</h1>
         <h3 className="subtitle">(Formato para diligenciar antes de la valoración)</h3>

         <ToastContainer />

         <div className="divFormPaciente">

            <div className="fecha">
               <span>Fecha: </span>
               <p>{fecha.getDate()}</p>
               <p>{fecha.getMonth() + 1}</p>
               <p>{fecha.getFullYear()}</p>
            </div>

            <div className={!submitInfo ? "visible" : "noVisible"}>
               <FormInformacionPersonal submitFormPaciente={submitFormPaciente}  />
            </div>

            <div className={submitInfo ? "visible" : "noVisible"}>
               <h2 className="informacion"><b>Cordial saludo</b>, antes de realizar la valoración odontológica al niño(a), es importante conocer sus antecedentes médicos y odontológicos</h2>
               <h3 className="sub2">Maque con una X una de las opciones:</h3>

               <FormAntecedentes isFormPaciente={submitInfo} idPaciente={documentoPaciente} />
            </div>
         </div>


      </div>
   );
};

export default FormPaciente;

// className={!submitInfo ? "visible" : "noVisible"}
// className={submitInfo ? "visible" : "noVisible"}