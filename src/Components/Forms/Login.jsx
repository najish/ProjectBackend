import { useState } from 'react';
import './Login.css';

function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })


    function changeHandler(event) {
        console.log('change handler')
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const postFormData = (data) => {
        fetch('http://localhost:3000/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(data => console.log(data)).catch(err => console.error(err))

        console.log(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        postFormData()
    }   


    return (
        <>
            <h1 className="login">Login</h1>
            <form method='post' id='login' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type='text' placeholder='username..' name='username' id='username' onChange={changeHandler}/>
                </div>


                <div>
                    <label htmlFor="password">Password</label>
                    <input type='text' placeholder='password..' name='password' id='password' onChange={changeHandler} />
                </div>
                <div>
                    <input type="submit" value='Login' />
                    <a href='#'>Cancel</a>
                </div>
            </form>
        </>
    )


}

export default Login;