import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Registration from "./Components/Registration";
// import Context from './Context';
// import Counter from './Components/DisplayCount'

function App() {
  return (
    <div className="">
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        {/* <Route path='/' element={<Counter/>}></Route> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
