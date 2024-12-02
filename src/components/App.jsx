import { useState } from "react";
import "../App.css";
import UserCard from "./UserCard";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetData = async () => {
    setLoading(true);
    fetch("https://randomuser.me/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserData((prevData) => {
          const updatedData = [...prevData];
          updatedData.push(data.results[0]);
          return updatedData;
        });
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <button disabled={loading} onClick={handleGetData} className="get-button">
        {loading ? "Loading..." : "Download"}
      </button>
      {error && <p>Error: {error.message}</p>}
      <div className="user-row">
        {userData.length > 0 ? (
          userData.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })
        ) : (
          <p>Press download button to get new user!</p>
        )}
      </div>
    </div>
  );
}

export default App;
