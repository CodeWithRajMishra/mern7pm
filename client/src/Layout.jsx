import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link> |
           <Link to="registration">Insert</Link> |
            <Link to="login">Display</Link> |
             <Link to="display2">Display-2</Link> 
           
              <hr size="4" color="red"/>
              <Outlet/>
             <hr size="4" color="red"/>
             www.mycrud.com 
        </>
    )
}
export default Layout;