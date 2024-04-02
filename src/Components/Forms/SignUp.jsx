import { useState } from 'react'
import './SignUp.css'

function SignUp() {

    const [sesstionData , setSessionData] = useState(null)
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email:'',
        password: ''
    })

    const [errors, setErrors] = useState({})

    
    const changeHandler = (e) => {
        console.log('change handller')
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)

        fetch('http://localhost:3000/user',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))
        

        console.log(formData)


    }

    return (
        <>
            <h1 className="signup">SignUp</h1>
            <form method='post' id='signup' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type='text' placeholder='enter name..' name='name' value={formData.name}  id='name' onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' placeholder='email..' name='email' value={formData.email}  id='email' onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type='text' placeholder='username..' name='username' value={formData.username}  id='username' onChange={changeHandler} />
                </div>


                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password' placeholder='password..' name='password' value={formData.password} id='password' onChange={changeHandler} />
                </div>
                <div>
                    <input type="submit" value='SignUp' />
                    <a href="#">Cancel</a>
                </div>
            </form>
        </>
    )


}
export default SignUp;