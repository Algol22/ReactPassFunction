
import Button from "./components/Button.tsx";
import Alert from "./components/Alert.tsx";
import React, {useState} from "react";


function App() {
  const[visible, setVisible] = useState(false);



  return (
   <div>
{visible && <Alert onClose={()=>setVisible(false)}>My Alert</Alert>}
 <Button color="secondary" onClick={()=>setVisible(!visible)}>
  My button
  </Button>

   </div>
  );
}

export default App;
