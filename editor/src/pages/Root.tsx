import useTestQuery from '../hooks/useTestQuery' // Adjust the import path as necessary

const Root = () => {
  const { data, error, isLoading } = useTestQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Data from testQuery:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Root
