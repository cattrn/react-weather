import { useState } from "react"
import AxiosSearch from "./AxiosSearch"
// import useAxios from "axios-hooks"

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const searchHandler = e => {
    setSearchQuery(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className="search">
      <form onSubmit={submitSearch}>
        <input
          type="text"
          id="search-bar"
          placeholder="Search cities"
          onChange={searchHandler}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        <AxiosSearch searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default Search
