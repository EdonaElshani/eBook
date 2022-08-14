import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = ({setIsLoggedin}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) =>{
        setUser({
            ...user, [e.target.name] : e.target.value,

        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/register', user, {withCredentials: true})
        .then(res => {
            console.log(res.data);
            setIsLoggedin(true);
            navigate("/");
        })
        .catch(err => console.log(err));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' value={user.username} onChange={handleChange} required/>
            </div>

            <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={user.email} onChange={handleChange} required/>
            </div>

            <div>
            <label htmlFor='Password'>Password</label>
            <input type='password' name='password' value={user.password} onChange={handleChange} required/>
            </div>

            <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleChange} required/>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register