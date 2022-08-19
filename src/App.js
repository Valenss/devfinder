import './App.css';
import Card from './components/card';
import Header from './components/header';
import SearchBar from './components/searchBar';
import {useState, useEffect} from 'react';

function App() {

  const [user, setUser] = useState('octocat')
  const [userNew, setUserNew] = useState({})
  
  function newUsername(username){
    setUser(username)  
  }



  useEffect(() => {
    async function getUser(){
        const res = await fetch(`https://api.github.com/users/${user}`)
        const data = await res.json()
        setUserNew(data)
}
getUser()
},[user])


  return (
    <div className="App">
      <Header />
      <SearchBar newUsername={newUsername}/>
      <Card userNew={userNew}/>
    </div>
  );
}

export default App;
