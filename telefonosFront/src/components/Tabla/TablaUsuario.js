import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import axios from 'axios';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(nombre, horaEntrada, horaSalida) {
  return { nombre, horaEntrada, horaSalida };
}

export function TablaUsuario() {
  const [objeto, setObjeto] = useState([]);
  const [rec, setRec] = useState(false);

  const rows = objeto.map((row) => {
    return createData(row.nombre,row.horaEntrada, row.horaSalida)
  })



  useEffect(() => {
    axios.get(`http://localhost:3000/api/obtenerUsuario/${localStorage.getItem('id')}`).then((response) => {
      setObjeto(response.data.usuarios)
      setRec(!rec)
    }).catch((error) => {
      console.log(error);
    });
  }, [rec])

  return (
    <TableContainer sx={{display:'flex', justifyContent: 'center'}} >
      <Table sx={{ minWidth: 600, width: '80%', border: 2}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="left">Hora Entrada</TableCell>
            <TableCell align="left">Hora Salida</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.horaEntrada}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.horaSalida}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
