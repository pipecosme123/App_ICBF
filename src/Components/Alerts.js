import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';

const Alerts = ({alertType, alertText}) => {

   const [open, setOpen] = useState(true);
   const vertical="top" 
   const horizontal="right"

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setOpen(false);
   }

   return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
         <Alert severity={alertType} elevation={3}>
            {/* <AlertTitle>¡Bien!</AlertTitle> */}
            <span dangerouslySetInnerHTML={{ __html: `${alertText}` }}></span>
         </Alert>
      </Snackbar>
   );
};

export default Alerts;