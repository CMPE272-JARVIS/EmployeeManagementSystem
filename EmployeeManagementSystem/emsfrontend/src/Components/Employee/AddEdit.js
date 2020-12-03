import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import AddEmployee from './AddEmployee';

export const AddEdit = (props) => {

  const [birthDate, setBirthDate] = React.useState(new Date());
  const [empNumberPk, setEmpNumberPk] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [hireDate, setHireDate] = React.useState(new Date());

  useEffect(() => {
    setEmpNumberPk(props.rowDetails.empNumberPk);
    setBirthDate(props.rowDetails.birthDate);
    setFirstName(props.rowDetails.firstName);
    setLastName(props.rowDetails.lastName);
    setGender(props.rowDetails.gender);
    setHireDate(props.rowDetails.hireDate);
  }, [props.rowDetails]);

  const onAddEditNewRow = () => {
    alert('add');
    const newEmployee = {
      empNumberPk,
      birthDate,
      firstName,
      lastName,
      gender,
      hireDate
    }
    // const newEmployee = {};
    AddEmployee(newEmployee).then(function (response) {
      console.log("AddEmployee", response);
      alert("Employee Added Successfully");
      // setEmployeeDetails(response);
    })
    .catch(function (error) {
      // console.log('GetCustomerBookingInfo error', error);
      // setEmployeeDetails([]);
    });
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      {Object.keys(props.rowDetails).length === 0 ? 
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle> :
        <DialogTitle id="form-dialog-title">Edit Employee</DialogTitle>
      }
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Employee ID"
            // type="email"
            value={empNumberPk}
            fullWidth
            onChange={(e) => setEmpNumberPk(e.target.value)}
          />
          {/* Date Input Field */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  label='Select Date Of Birth'
                  value={birthDate}
                  onChange={(e, date) => setBirthDate(date)}
                  KeyboardButtonProps={{
                      'aria-label': 'change date'
                  }}
                  InputLabelProps={{
                      style: { color: '#7c7979', fontSize: '1.2em' },
                      shrink: true
                  }}
                  style={{ marginTop: '30px', width: '100%' }}
              />
          </MuiPickersUtilsProvider>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            // type="email"
            value={firstName}
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            // type="email"
            value={lastName}
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Gender"
            // type="email"
            value={gender}
            fullWidth
            onChange={(e) => setGender(e.target.value)}
          />
          {/* Date Input Field */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  // formatDate={(date) => moment(date).format('DD-MM-YYYY')}
                  format='MM/dd/yyyy'
                  margin='normal'
                  label='Select Hire Date'
                  value={hireDate}
                  onChange={(e, date) => setHireDate(date)}
                  KeyboardButtonProps={{
                      'aria-label': 'change date'
                  }}
                  InputLabelProps={{
                      style: { color: '#7c7979', fontSize: '1.2em' },
                      shrink: true
                  }}
                  style={{ marginTop: '30px', width: '100%' }}
              />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          {Object.keys(props.rowDetails).length === 0 ? <Button onClick={onAddEditNewRow} color="primary" variant="contained">
            Add
          </Button> :
          <Button onClick={onAddEditNewRow} color="primary" variant="contained">
            Edit
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddEdit;