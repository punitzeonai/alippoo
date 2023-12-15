import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import UserData from "./components/UserData";

const alippoUrl = "https://assets.alippo.com/catalog/static/data.json";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(alippoUrl);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>table api display below </h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
