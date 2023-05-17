import { useState } from 'react';
import './App.css';
import { LoginContext } from './components/LoginContext';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';

function App() {
  const[userName,setuserName] = useState("")
  const[email,setemail] = useState("")
  const[showProfile,setshowProfile] = useState(false)
  return (
    <div className="App">
      <h1>UseContext</h1>
      <LoginContext.Provider value={{userName,email,showProfile,setuserName,setemail,setshowProfile}}>
        {showProfile?<Profile userName={userName} email={email} /> : <Login setuserName = {setuserName} setemail = {setemail} setshowProfile = {setshowProfile} />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
