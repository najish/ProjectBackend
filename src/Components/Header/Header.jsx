import './Header.css'
import { useState } from 'react';
import Login from '../Forms/Login';
import SignUp from '../Forms/SignUp';
import Home from '../Home';

export const list = ['Home','About', 'Course', 'Login', 'SignUp'];
function Header({currentPage, setCurrentPage, setCurrentComponent}) {
    const [counter, setCounter] = useState('default Value');
    function clickHandler(value) {
        console.log(value);
        setCurrentPage(value);
        if(value === 'Login')
            setCurrentComponent(<Login/>)
        else if(value === 'SignUp')
            setCurrentComponent(<SignUp />)
        else 
            setCurrentComponent(<Home />)
    }

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li onClick={() => clickHandler('Home')}>Home</li>
                        <li onClick={() => clickHandler('About')}>About</li>
                        <li onClick={() => clickHandler('Course')}>Course</li>
                    </ul>
                    <ul>
                        <li onClick={() => clickHandler('Login')}>Login</li>
                        <li onClick={() => clickHandler('SignUp')}>SignUp</li>
                    </ul>
                </nav>
            </header>

            <div><h1>{counter} : Header Content</h1></div>
        </>
    )
}

export default Header;