import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

const UserProvider = ({ id, children }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setData(data.result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [id])

  if (loading) return (
    <UserContext.Provider value={{ data, loading, error }}>
      <p>sign in ...</p>
    </UserContext.Provider>
  )

  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
