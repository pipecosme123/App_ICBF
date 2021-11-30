import axios from "axios";
import { useState } from "react"

export const useForm = (initialForm, validationForm, idPatient) => {

   const [form, setForm] = useState(initialForm);
   const [error, setError] = useState({});
   const [loading, setLoading] = useState(false);
   const [responseApi, setResponseApi] = useState(null);

   const handleChange = (e) => {
      // const { name, value } = e.target;
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      setForm({
         ...form,
         [name]: value
      });
      console.log(form);
   };

   const handleBlur = (e) => {
      handleChange(e);
      setError(validationForm(form));
   };

   // const submitResponseApi = () => {
   //    submitFormPaciente
   // }

   const handleSubmit = (e) => {
      e.preventDefault();

      setForm({
         ...form,
         escuela: "Colegio Compartir"
      });

      setError(validationForm(form));
      setLoading(true);
      // axios.post('https://001pruebas.kagencia.com/infoPaciente', form)
      axios.post('http://localhost:3132/', form)

         .then(function (response) {
            setLoading(false);
            setResponseApi(true);
            // console.log(response.data);
            // console.log("--------", responseApi)
            // submitFormPaciente(response.data);
         })
         .catch(function (error) {
            setLoading(false);
            setResponseApi(false);
            console.log(error);
         });
      // } else {
      // return;
      // }

      // if
      // axios.post('https://appicbfcolgate.kagencia.com/api/infoPaciente', data)
      //    .then(function (response) {
      //       console.log(response.data);
      //       submitFormPaciente(response.data);
      //    })
      //    .catch(function (error) {
      //       console.log(error);
      //    });
   };

   const handleSubmitClinicalHistory = (e) => {
      e.preventDefault();

      setForm({ documentoPaciente: idPatient })
      // console.log(form);
      // setResponseApi(false);
      setLoading(true);
      axios.post('https://appicbfcolgate.kagencia.com/api/antecedentes', form)
         .then(function (response) {
            setLoading(false);
            setResponseApi(true);
         })
         .catch(function (error) {
            setLoading(false);
            setResponseApi(false);
            console.log(error);
         });
   }

   return {
      form,
      error,
      loading,
      responseApi,
      handleChange,
      handleBlur,
      handleSubmit,
      handleSubmitClinicalHistory
   }

}