import axios from "axios";
import { useState } from "react"

export const useForm = (initialForm, validationForm, idPatient) => {

   const [form, setForm] = useState(initialForm);
   const [error, setError] = useState({});
   const [loading, setLoading] = useState(false);
   const [responseApi, setResponseApi] = useState(null);

   const handleChange = (e) => {

      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      setForm({
         ...form,
         [name]: value
      });
   };

   const handleBlur = (e) => {
      handleChange(e);
      setError(validationForm(form));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      setForm({
         ...form,
         escuela: "Colegio Compartir"
      });

      setError(validationForm(form));
      setLoading(true);

      axios.post('https://001pruebas.kagencia.com/infoPaciente', form)
         .then(function (response) {
            setLoading(false);
            setResponseApi(true);
         })
         .catch(function (error) {
            setLoading(false);
            setResponseApi(false);
            console.log(error);
         })
         .finally(() =>
            setTimeout(() => setResponseApi(null), 6000)
         );
   };

   const handleSubmitClinicalHistory = (e) => {
      e.preventDefault();
// console.log(form);
      // setForm({ noDocumento: 5 })

      setLoading(true);
      axios.post('https://001pruebas.kagencia.com/antecedentes', form)
         .then(function (response) {
            setLoading(false);
            setResponseApi(true);
         })
         .catch(function (error) {
            setLoading(false);
            setResponseApi(false);
            console.log(error);
         })
         .finally(() =>
            setTimeout(() => setResponseApi(null), 6000)
         );
   }

   const handleSubmitAiepi = (e) => {
      e.preventDefault();

      setLoading(true);
      axios.post('https://001pruebas.kagencia.com/EvaluacionSaludBucal', form)
         .then(function (response) {
            setLoading(false);
            setResponseApi(true);
         })
         .catch(function (error) {
            setLoading(false);
            setResponseApi(false);
            console.log(error);
         })
         .finally(() =>
            setTimeout(() => setResponseApi(null), 6000)
         );
   }

   return {
      form,
      error,
      loading,
      responseApi,
      handleChange,
      handleBlur,
      handleSubmit,
      handleSubmitClinicalHistory,
      handleSubmitAiepi
   }

}