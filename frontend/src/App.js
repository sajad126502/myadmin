import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const url = process.env.REACT_APP_URL;
      const { data } = await axios.get(url);
      setUsers(data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {users?.map((user) => {
        return (
          <div style={{padding:10,margin:5}}>
            <span style={{padding:10,margin:5}}>{user?.name}</span>
            <span style={{padding:10,margin:5}}>{user?.email}</span>
            <span style={{padding:10,margin:5}}>{user?.age}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
