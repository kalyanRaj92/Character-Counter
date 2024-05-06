import {Component} from 'react'

import {v4} from 'uuid'

import './App.css'

class App extends Component {
  state = {searchInput: '', charList: []}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newWord = {
      id: v4(),
      word: searchInput,
    }

    this.setState(prevState => ({
      charList: [...prevState.charList, newWord],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, charList} = this.state
    console.log(charList)
    return (
      <div>
        <h1>Character Counter</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Enter the characters here"
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <h1>Count the characters like a Boss</h1>
          {charList.length === 0 ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {charList.map(each => (
                <li key={each.id}>
                  <p>
                    {each.word}: {each.word.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
