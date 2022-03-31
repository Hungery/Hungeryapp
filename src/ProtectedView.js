import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserAuthContext } from './Contexts'
import Constants from './Constants.json'
import axios from 'axios';

export default function ProtectedView(props) {

  const UserAuthContextValue = useContext(UserAuthContext);

  const [exampleTodoData, setExampleTodoData] = useState([]);

  const loadData = async () => {
    try {
      const results = await axios.get(Constants.API_ADDRESS + '/todosJWT', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + UserAuthContextValue.jwt
          }
      });

      setExampleTodoData(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="protected">
      <h1>Protected view</h1>
      This is the protected view, which is only available for logged users.
      <div>
        <h2>Example todo data from API</h2>
        <button onClick={ loadData }>Click to load data from API with JWT for auth</button>
        <table>
          <thead>
            <th>
              <td>Description</td>
              <td>Due date</td>
              <td>Status</td>
            </th>
          </thead>
          <tbody>
            { exampleTodoData.map(t => <tr>
              <td>{ t.description }</td>
              <td>{ t.dueDate }</td>
              <td>{ t.status }</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <div>
        <Link to='/'>Go back to home</Link><br />
        <button onClick={() => UserAuthContextValue.logout()} >Logout</button>
      </div>
    </div>
  )
}
