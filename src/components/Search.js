const Search = () => {
  return (
    <div className="search">
      <form>
        <input type="text" id="search-bar" placeholder="Search cities" />
        <button type="submit">Search</button>
      </form>
      {/* Result will appear here */}
    </div>
  )
}

export default Search