import useAxios from "axios-hooks"

const AxiosSearch = ({ searchQuery, setSubmitted }) => {
  const [{ data, loading, error }, refetch] = useAxios(
    searchQuery
      ? `http://api.positionstack.com/v1/forward?access_key=1ea6775c39c285954f056b3d4ecec9dd&query=$${searchQuery}`
      : null
  )

  if (loading) return <p>Loading...</p>
  // if (error) return <p>Error!</p>

  return (
    <>
      {data.data.map(city => (
        <div className="city">{city.label}</div>
      ))}
    </>
  )
}

export default AxiosSearch
