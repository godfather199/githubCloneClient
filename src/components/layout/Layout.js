import axios from "axios";
import { useEffect, useState } from "react";
import UserDetails from "../userDetails/UserDetails";
import "./layout.css";
import ErrorPage from "../errorPage/ErrorPage";

function Layout() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:5000/api/user?username=${username}`
      );

      setUserData(res.data);
      setUsername("");
      setShow(true)
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="layoutContainer">
      <div className="layoutWrapper">
        {error ? (
          <ErrorPage />
        ) : (
          <>
            <h1 className="layoutTitle">Github Clone</h1>
            <form onSubmit={handleSubmit} className="layoutSearch">
              <input
                type="text"
                value={username}
                placeholder="Enter your github username...."
                className="layoutSearchInput"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <button className="layoutSearchBtn" type="submit">
                Search
              </button>
            </form>
            {show && <UserDetails userData={userData} />}
          </>
        )}
      </div>
    </div>
  );
}

export default Layout;
