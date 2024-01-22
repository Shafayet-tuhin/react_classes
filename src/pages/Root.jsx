import { Outlet , Link} from "react-router-dom";
export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Layout</h1>
          <div>
        
          </div>
          
            <ul>
              <li>
                <Link to= '/'> <h3>Go to Home Page</h3></Link>
              </li>
              <li>
              <Link to = '/about'> <h3>Go to About PAge</h3></Link>
              </li>
            </ul>
         
        </div>
        
        <div id="detail">
            <Outlet></Outlet>
        </div>
      </>
    );
  }