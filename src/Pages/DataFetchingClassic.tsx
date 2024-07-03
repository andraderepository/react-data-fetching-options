import React, { useEffect, useState } from "react"

type Repository = {
  full_name: string;
  description: string;
}

function DataFetchingClassic() {
  const [ repositories, setRepositories ] = useState<Repository[]>([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ repo, setRepo ] = useState('andraderepository');

  useEffect(() => {
    fetch(`https://api.github.com/users/${repo}/repos`)
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [repo])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    return (
        setInputValue(event.target.value)
    )
  }

  function handleSearch() {
    setRepo(inputValue)
  }

  return (
    <>  
        <label htmlFor="SearchRepo">Enter GitHub username: </label>
        <input id="SearchRepo" type="text" onChange={handleInputChange} value={inputValue} />
        <button onClick={handleSearch}>Search</button>
        <hr />
        <ul>
        {repositories.map(repo => {
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

export default DataFetchingClassic