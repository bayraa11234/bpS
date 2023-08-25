import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:8000/")
    .then((res) => setData(res.data))
    .catch((err) => {
      console.log(err);
    });
  },[]);
  console.log('aaaaaaa',data)

 
  return (
    <>
      {data.map((item, index)=>(
        <div style={{display:"flex"}}>
          <div style={{marginInline:"100px"}}>{index+1}</div>
        <div>{item.id}</div>
        </div>
      ))}
    </>
  );
}

export default App;
