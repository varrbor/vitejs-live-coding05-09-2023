import { useState, useEffect } from "react";
import { getUserList, getUserDetail } from "./api";

import "./styles.css";

// 1. fill users table with users from API.
// 2. fill background color to each of user row. odd -red, even - green
// 3. create a search(by name) for users table
// 3.1 when user type something in input - table show only the result
// 3.2 when user clear the input - table show whole list of users
// 4. add sorting(default, ascending, descending) for each column
// 5. add handler to each name cell -> click -> user address in console.log

export default function App() {
  return (
    <div>
      <input placeholder="find user by name" />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>website</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
