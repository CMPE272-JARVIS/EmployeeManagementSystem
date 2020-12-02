import React from 'react';
import './App.css';
// import Amplify from 'aws-amplify';
import Container from '@material-ui/core/Container';
// import awsconfig from './aws-exports'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import HomePage from './HomePage';
// import Header from './Header';
// import SignIn from './SignIn';
// import { FindAChef } from './FindAChef';
// import BookChef from './BookChef';
// import { ChefDetails } from './ChefDetails';
// import BookingHistory from './BookingHistory';
// import SignUp from './SignUp';
// import ConfirmSignUp from './SignUp/ConfirmSignUp';
// import Lexbot from './Lexbot';
// import CustomerProfile from './CustomerProfile';
// import ChatPopper from './ChatPopper';
// Amplify.configure(awsconfig);

import Dashboard from './Components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const onIsLoggedIn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  }
  return (
    // <Router>
    //   <div className='App'>
    //     <Container maxWidth={false}>
    //       <Switch>
    //         <Route path='/' exact component={Dashboard} />
    //       </Switch>
    //     </Container>
    //   </div>
    // </Router>
    <>
      <Dashboard />
    </>
  );
}
export default App

// export default withAuthenticator(App);