import { useEffect } from "react";

const baseURL = "http://localhost:8080";
let menu;

function App() {  
  const getMenu = async () => {
    const response = await fetch(`${baseURL}/menu`, {mode: "cors"});
    menu = await response.json();
    console.log(menu);
  }

  useEffect(() => {
    getMenu();
  }, [])

  return (
    <div>
      you
    </div>
  );
}

export default App;
