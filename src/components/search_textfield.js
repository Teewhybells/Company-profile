import {React, useState} from 'react'
import profileJson from '../json/profiles.json'

const profiles = profileJson;

const SearchTextfield = (props) => {
    const [search, setSearch] = useState('');

    function searchProfile(event)  {
        if(event.key === 'Enter') {
            if(event.target.value === '') {
                props.onKeyDown(profiles)
            } else {
                const filterProfiles = profiles.filter(function (profile){
                    return profile.firstName.toLowerCase().includes(event.target.value) || profile.lastName.toLowerCase().includes(event.target.value)
                })
               
                props.onKeyDown(filterProfiles)
            }

           
        }
    }
    
  return (
    <div className='search-input'>
        <input placeholder='Enter search terms' value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => searchProfile(event)}/>
    </div>
  )
}

export default SearchTextfield