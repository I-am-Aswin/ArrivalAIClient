import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import HelloWorld from "./pages/HelloWorld.jsx";

const App = () => {
  return ( 
    <Router>
      <div className="flex justify-center items-center h-[90vh]">
        <Routes>
          <Route path="/" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}/>
          <Route path="/hello-world" element={<HelloWorld/>} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;