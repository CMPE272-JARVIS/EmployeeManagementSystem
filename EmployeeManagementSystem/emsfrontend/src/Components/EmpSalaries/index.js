import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import GetEmpSalaries from './GetEmpSalaries';
import CommonGrid from '../CommonGrid';
// import AddEdit from './AddEdit';

export const EmpSalaries = (props) => {
  const columns = [
    {
      field: 'empNumberFk',
      headerName: 'Employee Number',
      width: 180,
    },
    { field: 'salary', headerName: 'Salary', width: 120 },
    { field: 'fromDate', headerName: 'From Date', width: 120 },
    { field: 'toDate', headerName: 'To Date', width: 120 },
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

  const [salaryDetails, setSalaryDetails] = React.useState([]);
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
    GetEmpSalaries(page).then(function (response) {
      console.log("GetCustomerBookingInfo", response.bookingInfo);
      setSalaryDetails(response);
    })
      .catch(function (error) {
        console.log('GetCustomerBookingInfo error', error);
        setSalaryDetails([]);
      });
  }, [page]);

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const onSearch = (id) => {
    alert("search" + id);
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
          rows={salaryDetails}
          columns={columns}
          handlePageChange={handlePageChange}
        />
      </div>
      {/* <AddEdit rowDetails={rowDetails} open={open} handleClose={handleClose} /> */}
    </div>
  );
}

export default EmpSalaries;