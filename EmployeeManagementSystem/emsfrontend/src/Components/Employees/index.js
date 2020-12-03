import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import GetEmployees from './GetEmployees';

export const Employees = (props) => {
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

  return (
    <div className="mainContainerWrap">
      <Grid container  spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h1>Employee Directory</h1>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>    
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h1>Leave Management</h1>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>    
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <h1>Pay</h1>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>    
        </Grid>
      </Grid>

      <div style={{ height: 400, width: '100%', marginTop: '30px' }}>
        <DataGrid
          rows={employeeDetails}
          columns={columns}
          pageSize={15}
          pagination
          rowCount={10000}
          paginationMode="server"
          onPageChange={handlePageChange}
        />
      </div>
  </div>
  );
}

export default Employees;