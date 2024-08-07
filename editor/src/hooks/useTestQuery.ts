import { trpc } from '../utils/trpc' // Adjust the import path as necessary

// Define the custom hook
const useTestQuery = () => {
  // Use the trpc useQuery hook to call testQuery
  const { data, error, isLoading } = trpc.testQuery.useQuery({ id: '1' })

  // Return the query result
  return { data, error, isLoading }
}

export default useTestQuery
