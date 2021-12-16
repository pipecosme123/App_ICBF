import axios from "axios";
import { useEffect, useState } from "react"

const useGetInformation = (url, type) => {

   const [data, setData] = useState(null);

   useEffect(() => {
      axios.get(url)
         .then((response) => {
            if (type === 0) {
               setData(response.data[0]);
            } else {
               setData(response.data);
            }
         })
         .catch((err) => {
            console.log(err)
         })
   }, [url, type]);

   return { data };

};

export default useGetInformation;