import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import MpLogin from './Components/LoginPage/MpLogin';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/Header/Header';

const routes = createBrowserRouter([
  {
    path:"/",
    children:[
      {path:"/",element:<HomePage></HomePage>},
      {path:"/login",element:[<Header></Header>,<Login></Login>]},
      {path:"#mp-login",element:<MpLogin></MpLogin>}
    ]
  }
])

function App() {

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
