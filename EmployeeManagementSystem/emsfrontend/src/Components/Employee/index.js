import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import GetEmployees from './GetEmployees';
import CommonGrid from '../CommonGrid';
import AddEdit from './AddEdit';
import editIcon from '@material-ui/icons/Edit';
import SearchEmployee from './SearchEmployee';

export const Employee = (props) => {
  const columns = [
    {
      field: 'empNumberPk',
      headerName: 'Employee Number',
      width: 180,
    },
    { field: 'birthDate', headerName: 'Birth Date', width: 120 },
    { field: 'firstName', headerName: 'First Name', width: 180 },
    { field: 'lastName', headerName: 'Last Name', width: 120 },

    { field: 'gender', headerName: 'Gender', width: 130 },

    {
      field: 'hireDate',
      headerName: 'Hire Date',
      width: 120,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      renderCell: (params) => (
        <Button color="primary" variant="contained" size="small" onClick={() => handleClickOpen(params.row)}>
          Edit
        </Button>
      ),
    },
  ];

  const [employeeDetails, setEmployeeDetails] = React.useState([]);

  const [page, setPage] = React.useState(1);
  const [empId, setEmpId] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [rowDetails, setRowDetails] = React.useState({});

  const handleClickOpen = (details) => {
    setOpen(true);
    if (details.empNumberPk)
      setRowDetails(details);
  };
  const handleClose = () => {
    setOpen(false);
    setRowDetails({});
  };

  useEffect(() => {
    getEmployeeList(page - 1);
  }, [page]);

  const getEmployeeList = (page) => {
    GetEmployees(page).then(function (response) {
      console.log("GetCustomerBookingInfo", response.bookingInfo);
      setEmployeeDetails(response);
    })
      .catch(function (error) {
        console.log('GetCustomerBookingInfo error', error);
        setEmployeeDetails([]);
      });
  }
  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const onSearch = (id) => {
    if (id !== '') {
      SearchEmployee(id).then(function (response) {
        console.log("SearchEmployee", response.bookingInfo);
        setEmployeeDetails(response);
      })
        .catch(function (error) {
          console.log('SearchEmployee error', error);
          setEmployeeDetails([]);
        });
    } else {
      getEmployeeList(0);
    }
  };

  return (
    <div className="mainContainerWrap">
      <div className="gridOperations">
        <div>
          <TextField
            label='Seach Employee'
            // className={classes.textField}
            value={empId}
            onChange={(event) => setEmpId(event.target.value)}
            InputLabelProps={{
              style: { color: '#7c7979', fontSize: '1.2em' },
              shrink: true
            }}
          />
          <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => onSearch(empId)}>
            <SearchIcon />
          </IconButton>
        </div>
        <Button onClick={handleClickOpen} color="primary" variant="contained" size="small">
          Add New Employee
        </Button>
      </div>

      <div style={{ height: 400, width: '100%', marginTop: '30px' }}>
        <CommonGrid
          rows={employeeDetails}
          columns={columns}
          handlePageChange={handlePageChange}
        />
      </div>
      <AddEdit rowDetails={rowDetails} open={open} handleClose={handleClose} />
    </div>
  );
}

export default Employee;