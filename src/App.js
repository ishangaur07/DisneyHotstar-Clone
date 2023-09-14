import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import MpLogin from './Components/LoginPage/MpLogin';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/Header/Header';
import { useUser } from './Components/UserContext/UserContext';
import Upload from './Components/Upload/Upload';


function App() {
  const {user,logout} = useUser();

  const routes = createBrowserRouter([
    {
      
      path:"/",
      children:[
        {path:"/",element:<HomePage></HomePage>},
        {path:"/my-space",element:[<Header></Header>,<Login></Login>]},
        {path: user?("/my-space"):("/login"),element:[<Header></Header>,<Login></Login>]},
        {path:"#mp-login",element:<MpLogin></MpLogin>},
        {path:"#upload",element:<Upload/>}
        
      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
