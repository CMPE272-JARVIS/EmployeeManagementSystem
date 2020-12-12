import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PutLeaveDetails from './PutLeaveDetails';
import GetEmpManager from './GetEmpManager';
import Moment from 'moment';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LeaveMgmt = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = React.useState(new Date());
  const [dayCt, setDayCt] = React.useState(0);
  const [reason, setReason] = React.useState('');

  const handleSubmit = () => {
    if (startDate == null) {
      alert('Please enter start date');
    }
    else {
      const leaveData = {}
      leaveData.emp_no = '10001'; //get the emp id from session storage details
      GetEmpManager(leaveData.emp_no).then(function (response) {
        console.log('get manager details', response)

        leaveData.start_date = Moment(startDate).format('YYYY-MM-DD');
        leaveData.total_days = dayCt;
        leaveData.reason = reason;
        leaveData.mgr = response[0].emp_no;
        leaveData.dept_no = response[0].dept_no;
        PutLeaveDetails(leaveData).then(function (response1) {
          console.log('Put leave details', response1)
        }).catch(function (err) {
          console.log(err)
        })
      }).catch(function (err) {
        console.log(err)
      })
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Apply for leave
          </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disablePast='false'
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  label='Select Start Date'
                  value={startDate}
                  onChange={(e, date) => setStartDate(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='NoOfDays'
                label='Number of Days'
                name='LeaveDayCount'
                onChange={(e, dayCt) => setDayCt(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='msg'
                label='Reason'
                name='msg'
                onChange={(e, reason) => setReason(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LeaveMgmt;