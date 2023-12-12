

// import Nav from "./Components/Nav";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Login"
// import Register from "./Register"
import Missing from "./Missing";


const App = () => {
  return(
    <div className="text-white bg-slate-900 h-[100vh] flex justify-center items-center bg-cover">
      {/* <Nav />  */}
     {/* <Routes>
      <Route path='Login' element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
     </Routes> */}
     <Missing/>

      
    </div>
  );
};

export default App;