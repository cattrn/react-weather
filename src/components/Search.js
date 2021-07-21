import { useState } from "react"
// import AxiosSearch from "./AxiosSearch"
import useAxios from "axios-hooks"

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState({})
  const [{ data, loading, error }, refetch] = useAxios(
    `http://api.positionstack.com/v1/forward?access_key=1ea6775c39c285954f056b3d4ecec9dd&query=$${searchQuery}`,
    { manual: true }
  )

  const searchHandler = e => {
    setSearchQuery(e.target.value)
  }

  const submitSearch = e => {
    e.preventDefault()
    refetch()
  }

  console.log(selectedCity)

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
      {data ? data.data.map(city => (
        <div className="city" onClick={() => setSelectedCity(city)}>{city.label}</div>
      )) : null}
      </div>
    </div>
  )
}

export default Search
