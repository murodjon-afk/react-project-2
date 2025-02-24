import { useState, useRef } from "react";
import "./App.css";

const users = [
  { id: 1, name: "Alex Adams", age: 210003 },
  { id: 2, name: "John Doe", age: 25 },
  { id: 3, name: "Emily Smith", age: 22 },
  { id: 4, name: "Michael Brown", age: 30 },
  { id: 5, name: "Sarah Johnson", age: 27 },
  { id: 6, name: "David Williams", age: 24 },
  { id: 7, name: "Laura Miller", age: 26 },
  { id: 8, name: "James Taylor", age: 29 },
  { id: 9, name: "Sophia Davis", age: 21 },
  { id: 10, name: "Daniel Moore", age: 28 }
];

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const centerRef = useRef(null);

  return (
    <div>
      <center ref={centerRef}>
        <h1>Selected User</h1>
        <div className="profile-container">
          <h1>{selectedUser?.name ?? "No user selected"}</h1>
          <b>{selectedUser?.age ? `${selectedUser.age} years old` : "No age"}</b>
        </div>
        <button className="close" onClick={() => {
  if (centerRef.current) {
    centerRef.current.style.display = "none";
  }
}}>
  Закрыть
</button>

      </center>
       <h1 className="centr-h1">Select user</h1>
      <div className="container">
        
        {users.map((user) => (
          <div
            key={user.id}
            className="profile-container2"
            onClick={() => {
              if (centerRef.current) {
                centerRef.current.style.display = "flex";
              }
              setSelectedUser(user);
            }}
          >
            <h1>{user.name}</h1>
            <b>{user.age} years old</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
