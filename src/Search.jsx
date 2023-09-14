import { useState, useEffect } from 'react';
import { getUserList, getUserDetail } from './api';
import _ from 'lodash';

import './styles.css';

// 1. fill users table with users from API.
// 2. fill background color to each of user row. odd -red, even - green
// 3. create a search(by name) for users table
// 3.1 when user type something in input - table show only the result
// 3.2 when user clear the input - table show whole list of users
// 4. add sorting(default, ascending, descending) for each column
// 5. add handler to each name cell -> click -> user address in console.log

export default function App() {
  const [users, setUsers] = useState([]);
  const [inp, setInput] = useState('');
  const getUsers = async () => {
    try {
      const a = await getUserList();
      setUsers(a);
    } catch (err) {}
  };
  useEffect(() => getUsers, []);

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const handleSorting = (name) => {
    console.log(name);
    setUsers(_.sortBy(users, name));
  };

  useEffect(() => {
    if (inp.length === 0) {
      getUsers();
      return;
    }
    setUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(inp.toLowerCase())
      )
    );
  }, [inp]);

  return (
    <div>
      <input
        onChange={handleSearch}
        placeholder="find user by name"
        value={inp}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSorting('id')}>id</th>
            <th onClick={() => handleSorting('name')}>name</th>
            <th onClick={() => handleSorting('email')}>email</th>
            <th onClick={() => handleSorting('website')}>website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
