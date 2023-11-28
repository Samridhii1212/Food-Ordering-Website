import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import User from './components/user';
import userContext from './utils/usercontext';
import { Provider} from 'react-redux';
import appstore from './utils/appstore';

const App=()=>
{
const [name,setname]=useState();

useEffect(()=>
{
  const data=
  {
    username:"titli"
  }
  setname(data.username)
},[])

return (
<userContext.Provider value={{username:name}}> 
< div className = 'app' >
  <Header />
  <Outlet />
</div >
</userContext.Provider> 




)
  
 
}

export default App;