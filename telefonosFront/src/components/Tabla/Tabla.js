import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import axios from 'axios';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(numero, descripcion, solucion, horaInicio, horaFin, tipo, finalizada) {
  return { numero, descripcion, solucion, horaInicio, horaFin, tipo, finalizada };
}

export function Tabla() {
  const [data, setData] = useState([]);
  const [rec, setRec] = useState(false);
  
  const rows = data.map((row) => {
    return createData(row.numero, row.descripcion, row.solucion, row.horaInicio, row.horaFin, row.tipo, row.finalizada)
  })

  useEffect(() => {
    axios.get(`http://localhost:3000/api/obtenerLlamadas/${localStorage.getItem('id')}`).then((response) => {
      setData(response.data.llamadas)
      setRec(!rec)
    }).catch((error) => {
      console.log(error);
    });
  }, [rec])

  return (
    <TableContainer sx={{display:'flex', justifyContent: 'center'}} >
      <Table sx={{ minWidth: 650, width: '90%', border: 2, marginTop: 10}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Numero</TableCell>
            <TableCell align="left">Descripcion</TableCell>
            <TableCell align="left">Solucion</TableCell>
            <TableCell align="left">Inicio llamada</TableCell>
            <TableCell align="left">Fin llamada</TableCell>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">Finalizada</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.numero}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.descripcion}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.solucion}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.horaInicio}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.horaFin}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.tipo}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.finalizada}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
