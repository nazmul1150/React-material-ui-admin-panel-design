import { Box, Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import PageTitles from '../Components/PageTitles'

const buttons = [
  <Button key="active">Active</Button>,
  <Button key="edit">Edit</Button>,
  <Button key="delete">Delete</Button>,
];

const Post = () => {

  return (
    <div>
      <PageTitles label="Dashbord" title="Post Overview" />
      <Box sx={{ margin: "20px 0px !important" }}>
        <Button
        component={Link}
        to="/adddata"
          variant="contained"
          sx={{margin:"0px 0px 20px 0px !important"}}
        >
          Add Data
        </Button>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>Pagination</caption>
            <TableHead>
              <TableRow>
                <TableCell align="center">id</TableCell>
                <TableCell align="center">name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Opthion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="center">Nazmul</TableCell>
                <TableCell align="center">naz@gmail.com</TableCell>
                <TableCell align="center">nazmul.jpg</TableCell>
                <TableCell align="center">
                  <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                  </ButtonGroup>
                </TableCell>
              </TableRow>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  2
                </TableCell>
                <TableCell align="center">Nazmul</TableCell>
                <TableCell align="center">naz@gmail.com</TableCell>
                <TableCell align="center">nazmul.jpg</TableCell>
                <TableCell align="center">
                  <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default Post
