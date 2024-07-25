import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer';
import Home from './components/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {

  const appRouter = createBrowserRouter([
    {
     path:"/",
     element:<Home/>
    },
    {
     path:"/contact",
     element:<Contact/>
    },
    {
      path:"/skills",
      element:<Skills/>

    },
    {
      path:"/my-work",
      element:<Projects/>
    }
    ]);
  
  return (
    <div className='App'>
     <Header/>
     <RouterProvider router={appRouter} />
     <Footer/>
    </div>
  );
}

export default App;
