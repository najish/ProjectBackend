import './SignUp.css'

function SignUp() {


    return (
        <>
            <h1 className="signup">SignUp</h1>
            <form method='post' action='#' id='signup'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type='text' placeholder='enter name..' name='name' id='name' />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' placeholder='email..' name='email' id='email' />
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type='text' placeholder='username..' name='username' id='username' />
                </div>


                <div>
                    <label htmlFor="password">Password</label>
                    <input type='text' placeholder='password..' name='password' id='password' />
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