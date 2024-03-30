import { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import Content from './Components/Content/Content.jsx';
import Login from './Components/Forms/Login.jsx';
import SignUp from './Components/Forms/SignUp.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  const [currentComponent, setCurrentComponent] = useState(null);
  console.log(currentPage);

  function setDataFromChild() {

  }

  function buttonClicked() {

  }


  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setCurrentComponent={setCurrentComponent}/>
      <Content currentPage={currentPage} currentComponent={currentComponent}>current Page description</Content>
    </>
  )

};


export default App;