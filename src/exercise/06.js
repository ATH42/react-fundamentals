// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  function handleSubmit(e) {
    e.preventDefault()
    onSubmitUsername(e.target.elements.usernameInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const App = () => {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
