import './Login.css';

function Login() {


    return (
        <>
            <h1 className="login">Login</h1>
            <form method='post' action='#' id='login'>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type='text' placeholder='username..' name='username' id='username' />
                </div>


                <div>
                    <label htmlFor="password">Password</label>
                    <input type='text' placeholder='password..' name='password' id='password' />
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