import axios from "axios";
import { useState } from "react"

export const useForm = (initialForm, validationForm) => {

   const [form, setForm] = useState(initialForm);
   const [error, setError] = useState({});
   const [loading, setLoading] = useState(false);
   const [responseApi, setResponseApi] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
         ...form,
         [name]: value
      });
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

      setError(validationForm(form));

      // console.log(Object.keys(error).length)

      if (Object.keys(error).length === 0) {
         setLoading(true);
         axios.post('https://appicbfcolgate.kagencia.com/api/infoPaciente', form)
            .then(function (response) {
               setLoading(false);
               setResponseApi(true);
               console.log(response.data);
               console.log("--------", responseApi)
               // submitFormPaciente(response.data);
            })
            .catch(function (error) {
               console.log(error);
            });
      } else {
         return;
      }

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

   return {
      form,
      error,
      loading,
      responseApi,
      handleChange,
      handleBlur,
      handleSubmit
   }

}