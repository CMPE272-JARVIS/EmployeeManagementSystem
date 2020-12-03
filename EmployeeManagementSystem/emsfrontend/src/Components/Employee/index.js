import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import GetEmployees from './GetEmployees';
import CommonGrid from '../CommonGrid';

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
    }
  ];

  const [employeeDetails, setEmployeeDetails] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [empId, setEmpId] = React.useState("");

  useEffect(() => {
      GetEmployees(page).then(function (response) {
        console.log("GetCustomerBookingInfo", response.bookingInfo);
        setEmployeeDetails(response);
      })
        .catch(function (error) {
          console.log('GetCustomerBookingInfo error', error);
          setEmployeeDetails([]);
        });
  }, [page]);

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const onAddNewRow = () => {
    alert('add');
  };

  const onSearch = (id) => {
    alert("search"+ id);
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
        <Button onClick={onAddNewRow} color="primary" variant="contained" size="small">
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
  </div>
  );
}

export default Employee;