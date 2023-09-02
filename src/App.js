import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/LoginPage/Login';

const routes = createBrowserRouter([
  {
    path:"/",
    children:[
      {path:"/",element:<h1>Hello ji saariya ne</h1>},
      {path:"/login",element:<Login></Login>},
    ]
  }
])

function App() {

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
