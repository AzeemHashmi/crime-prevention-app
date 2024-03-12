import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, location) {
  return { name, location };
}

const rows = [
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
  createData("Dummy Case", "Dummmy Location"),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead sx={{ backgroundColor: 'lightblue' }}>
          <TableRow>
            <TableCell align="center">Case</TableCell>
            <TableCell align="center">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
