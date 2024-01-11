import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/Authuntication";

const FAKE_USER = {
    name: "Manu",
    email: "Manu@example.com",
    password: "Password",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

function User() {
    const{logout} = useAuth()
    const user = FAKE_USER;
  const navigate = useNavigate()
  function handleClick(e) {
    e.preventDefault();
    logout()
    navigate('/')
  }
  return (
    <div className="Logout">
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default User