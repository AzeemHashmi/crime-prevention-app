import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DenseTable = ({ data }) => {
  return (
    <div style={{ height: '90vh', overflow: 'hidden' }}>
      <TableContainer component={Paper} style={{ height: '100%' }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: 'lightblue' }}>
            <TableRow >
              <TableCell align="center" sx={{ backgroundColor: 'lightblue' }}>Category</TableCell>
              <TableCell align="center" sx={{ backgroundColor: 'lightblue' }}>Location</TableCell>
              <TableCell align="center" sx={{ backgroundColor: 'lightblue' }}>Month</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.category}</TableCell>
                <TableCell align="center">{item.location.street.name}</TableCell>
                <TableCell align="center">{item.month}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DenseTable;
