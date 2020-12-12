import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  signIn: {
    height: '100vh',
    position: 'fixed',
    left: 0,
    right:0,
    top: 0,
    background: '#fff',
    zIndex: 10000
  },
  image: {
    // xbackgroundImage: 'url(http://d1q6lc2rasmdf5.cloudfront.net/OtherPictures/SignIn.jpg)',
    // backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light'
    //     ? theme.palette.grey[50]
    //     : theme.palette.grey[900],
    // backgroundSize: 'cover',
    // backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
