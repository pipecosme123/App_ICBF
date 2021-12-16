import { Add } from '@mui/icons-material';
import { Create, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Cookies from 'universal-cookie';
// import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { RoutersLinks, urlApi } from '../Constants/RoutersLinks';
import useGetInformation from '../hooks/useGetInformation';

const columns = [
   { field: 'id', headerName: 'ID', width: 70 },
   { field: 'firstName', headerName: 'First name', width: 130 },
   { field: 'lastName', headerName: 'Last name', width: 130 }
]

const PatientList = () => {

   const cookies = new Cookies();

   const url = `${urlApi}/ListaPacientes`;
   const { data } = useGetInformation(url, 1);
   console.log(data);

   const getId = (id) => {
      cookies.set('id', id, { path: `/` });
      window.location.href = RoutersLinks.profile;
   }

   return (
      <div className='PatientList'>

         <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" disableElevation startIcon={<Add />}>Añadir</Button>
         </Grid>
         DATOS

         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell align="left">id</TableCell>
                     <TableCell align="left">firstName</TableCell>
                     <TableCell align="left">lastName</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {data?.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        onClick={() => getId(row.id)} hover
                     >
                        <TableCell align="left">{row.no_documentos}</TableCell>
                        <TableCell align="left">{row.nombres}</TableCell>
                        <TableCell align="left">{row.apellidos}</TableCell>
                        {/* <TableCell>
                           <IconButton aria-label="delete" size="small">
                              <Create fontSize="small" />
                           </IconButton>
                        </TableCell> */}
                        {/* <TableCell>
                           <IconButton aria-label="delete" size="small">
                              <Delete fontSize="small" />
                           </IconButton>
                        </TableCell> */}
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         {/* {data?.map((info, index) => (
            <div key={index}>
               <p onClick={() => getId(info?.id)}>{info?.no_documentos} - {info?.nombres} - {info?.apellidos}</p>
            </div>
         ))} */}
      </div>
   );
};

export default PatientList;