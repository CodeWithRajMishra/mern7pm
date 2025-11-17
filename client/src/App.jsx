import {BrowserRouter , Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import Display2 from "./pages/Display2";
const App=()=>{
  return(
    <>
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} /> 
          <Route path="registration" element={<Registration/>}/>   
          <Route path="login" element={<Login/>}/>
          <Route path="display2" element={<Display2/>}/>
          </Route>
         </Routes>
         <Routes>
          <Route path="dashboard" element={<DashBoard/>}>
          
          </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;