import './App.css';
import { useState } from 'react';
import SearchTextfield from './components/search_textfield'
import ProfileResult from './components/ProfileResult';

function App() {
  const [profiles, setProfiles] = useState([])
  const getProfiles = (data) => setProfiles(data);
  
  return (
    <div className="App">
      <SearchTextfield onKeyDown={getProfiles}/>
      <ProfileResult profiles={profiles}/>
    </div>
  );
}

export default App;
