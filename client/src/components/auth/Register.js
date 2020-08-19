import React,{useState} from 'react'
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registration } from '../../actions/auth'


const Register = (props) => {
 
    const [formData, setFormData ] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
        address:'',
        phone:''
    });
     const dispatch = useDispatch()
    const {name ,email , password, password2, address,phone} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
       if(password !== password2 ){
        alert('Password do not match', 'danger')
    }else{
        dispatch(registration({name, email ,password, address,phone }));
        props.history.push('/')
    }
   }
    return (
        <div className="container">
            <h1 className="large text-primary">Sign Up</h1>
      <h3 className="lead">Create Your Account</h3>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name"
          value = {name}
          onChange = {e => onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email"
          value = {email}
          onChange = {e => onChange(e)}
          required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value = {password}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value = {password2}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Addresss"
            name="address"
            value = {address}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value = {phone}
          onChange = {e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
        </div>
    )
}


export default Register;