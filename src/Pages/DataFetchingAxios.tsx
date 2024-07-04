import React, { useState } from "react"
import { useFetch } from "../hook/useFetch";

type Repository = {
  full_name: string;
  description: string;
}

function DataFetchingAxios() {
  const [ inputValue, setInputValue ] = useState('');
  const [ gitUser, setGitUser ] = useState('andraderepository');

  const { data: repositories, isFetching } = useFetch<Repository[]>(`/users/${gitUser}/repos`)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    return (
        setInputValue(event.target.value)
    )
  }

  function handleSearch() {
    setGitUser(inputValue)
  }

  return (
    <>  
        <label htmlFor="SearchRepo">Enter GitHub username: </label>
        <input id="SearchRepo" type="text" onChange={handleInputChange} value={inputValue} />
        <button onClick={handleSearch}>Search</button>
        <hr />
        <ul>

          { isFetching && <p>Loading...</p>}

          {repositories?.map(repo => {
              return (
              <li key={repo.full_name}>
                  <strong>{repo.full_name}</strong>
                  <p>{repo.description}</p>
              </li>
              )
          })}
        </ul>
    </>
  )
}

export default DataFetchingAxios
