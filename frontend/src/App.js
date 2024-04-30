import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [name,setName]=useState("")
  const getData = async () => {
    try {
      
      const url = process.env.REACT_APP_URL;
      const {data} = await axios.get(url);
      setName(data?.name)
    } catch (error) {
      
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div className="App">
    hello {name}
  </div>;
}

export default App;
