import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return ( 
    <Router>
      <Route path="/" element={<></>}/>
      <Route path="/register" element={<></>}/>
    </Router>
  );
}
 
export default App;