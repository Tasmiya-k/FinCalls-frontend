
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import About from './Pages/About';
import AfterUpload from './Pages/AfterUpload';
import LandingHome from './Pages/LandingHome';
import Chatbot from './Pages/Chatbot';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingHome/>
    },
    {
      path: '/fincalls',
      element: <Landing/>
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path:'/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/uploaded',
      element: <AfterUpload/>
    },
    {
      path: '/chatbot',
      element : <Chatbot/>
    },
  ]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
