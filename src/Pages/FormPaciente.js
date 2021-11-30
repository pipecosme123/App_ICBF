// import React, { useState } from 'react';
// import FormAntecedentes from '../Components/FormPaciente/FormClinicalHistory';
// import FormInformacionPersonal from '../Components/FormPaciente/FormPersonalInformation';
// import { ToastContainer, toast } from 'react-toastify';
// import { Container, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import '../css/styles.css';

// const FormPaciente = () => {

//    window.document.title = 'Información personal del paciente - ICBF';
//    const [submitInfo, setsubmitInfo] = useState(false);
//    const [documentoPaciente, setDocumentoPaciente] = useState(null);

//    const submitFormPaciente = (documento) => {
//       setDocumentoPaciente(documento);
//       setsubmitInfo(true);
//       toast.success("Usuario Registrado", {
//          position: toast.POSITION.TOP_RIGHT,
//          autoClose: 5000
//       })
//    }

//    return (
//       <Container>
//          <ToastContainer />

//          <div className="divFormPaciente">

//             <div className={!submitInfo ? "visible" : "noVisible"}>
//                {/* <FormInformacionPersonal submitFormPaciente={submitFormPaciente} /> */}
//             </div>

//             {/* <div className={submitInfo ? "visible" : "noVisible"}> */}
//                <h2 className="informacion"><b>Cordial saludo</b>, antes de realizar la valoración odontológica al niño(a), es importante conocer sus antecedentes médicos y odontológicos</h2>
//                <h3 className="sub2">Maque con una X una de las opciones:</h3>

//                {/* <FormAntecedentes isFormPaciente={submitInfo} idPaciente={documentoPaciente} /> */}
//             {/* </div> */}
//          </div>
//       </Container>
//    );
// };

// export default FormPaciente;