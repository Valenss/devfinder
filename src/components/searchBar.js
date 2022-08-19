import { useState } from 'react';
import styles from './SearchBarStyles.module.css'
export default function SearchBar({ newUsername }) {
    const [username, setUsername] = useState('')

    function handleSearch(e){
        e.preventDefault();
        newUsername(username);
      }

  return (
    <form onSubmit={handleSearch} className={styles.form_container}>
      <div className={styles.form_div}>
        <i class='bx bx-search'></i>
        <input
          type="search"
          placeholder="Search GitHub username..."
          name="user"
          onChange={(e) =>{setUsername(e.target.value)}}
          ></input>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
