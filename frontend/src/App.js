import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  return (
    <div className="">
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
