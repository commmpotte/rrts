import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../store/action-creators/user'
import { useActions } from '../hooks/useActions'

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <h1>User List</h1>
      <ul className="list-group text-left">
        {users.map((user) => (
          <li className="list-group-item mb-2" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserList
