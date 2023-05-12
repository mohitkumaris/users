import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setusers] = useState([]);

  const addUsers = (user) => {
    setusers([...users, user]);
  };
  return (
    <div>
      <UserForm addUsers={addUsers} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
