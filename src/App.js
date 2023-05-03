import './App.css';
import { useState } from 'react';
import SearchTextfield from './components/search_textfield'
import ProfileResult from './components/ProfileResult';
import profileJson from './json/profiles.json'

function App() {
  const [profiles, setProfiles] = useState(profileJson)
  const getProfiles = (data) => setProfiles(data);
  
  return (
    <div className="App">
      <SearchTextfield onKeyDown={getProfiles}/>
      <ProfileResult profiles={profiles.length === 0 ? profileJson : profiles }/>
    </div>
  );
}

export default App;
