import { useState,useEffect} from "react";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="main">
     <div className="main-parent">
      <h1>Список Пользователей</h1>
      <button
        className="user"
        onClick={() => {
          const userList = document.querySelector(".user-list");
          if (userList) {
            userList.style.display = userList.style.display === "flex" ? "none" : "flex";
          }
        }}
      >
        Показать Список
      </button>
     </div>

     <div className="user-list">
       <div className="user-container">
        <h1 className="us">USER</h1>
         <div className="us-list">
         {users.map((user) => (
         <div className="container">
           <h4 key={user.id}>{user.name} - {user.username}</h4>
           <p className="email">{user.email} - {user.phone}</p>
         </div>


         
        ))}
         </div>

         <button
  className="close"
  onClick={() => {
    const userList = document.querySelector(".user-list");
    if (userList) {
      userList.style.display = "none";
    }
  }}
>
  Главная Страница
</button>


       </div>
     </div>
    </div>
  );
}

export default App;
