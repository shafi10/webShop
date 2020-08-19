import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { logout } from '../actions/auth'
import { useSelector,useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = (props) => {
    const classes = useStyles();
    const {user, isAuthenticated } = useSelector(state => state.auth);
    const {cartItems} = useSelector(state => state.cart)
     const dispatch = useDispatch();

     const submitLogout = () => {
       dispatch(logout())

  }

    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link className="navbar" to="/">Home</Link>
          </Typography>
          { !isAuthenticated ? 
            <div>
          <Button color="inherit"><Link className="navbar" to="/register">Register</Link></Button>
          <Button color="primary"><Link className="navbar" to="/login">Login</Link></Button> </div>: 
         <div className="nav-auth"> 
           <Link onClick= {() => submitLogout()} className="navbar" to="/">Logout</Link>
           {user && user.isAdmin ? <div className="l"><Link className="navbar" to="/admin">Dashboard</Link></div>:
           <div className="l"><Link className="navbar" to="/dashboard">{user ? user.name : 'loading'}</Link></div>}
           
          </div>          
          }
          <IconButton edge="start">

          <Link className="navbar" to="/cart"><ShoppingCartIcon /></Link>{cartItems.length}
      
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar;
