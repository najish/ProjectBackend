import { useState } from "react";
import './Content.css';
import { list } from "../Header/Header";
function Content({children, currentPage, currentComponent}) {
    const [timer ,setTimer] = useState('Home');
    return (
        <div className="content">
            {currentComponent}
        </div>        
    )
}

export default Content;