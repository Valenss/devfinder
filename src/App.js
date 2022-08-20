import Card from './components/card';
import Header from './components/header';
import SearchBar from './components/searchBar';
import './index.css'
import React, {useState, useEffect, createContext} from 'react';

export const ThemeContext = createContext(null);
function App() {

  const [user, setUser] = useState('octocat')
  const [userNew, setUserNew] = useState({})
  const [theme, setTheme] = useState('light');
  
  function newUsername(username){
    setUser(username)  
  }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    async function getUser(){
        const res = await fetch(`https://api.github.com/users/${user}`)
        const data = await res.json()
        setUserNew(data)
}
getUser()
},[user])


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Header  toggleTheme={toggleTheme} theme={theme} setTheme={setTheme}/>
        <SearchBar newUsername={newUsername}/>
        <Card userNew={userNew}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
