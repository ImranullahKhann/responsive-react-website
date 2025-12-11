import "./App.css"
import Layout from "./components/Layout.jsx"
import { Home, AboutUs, Services, ContactUs } from "./components/Body"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "",
        element: <Home /> 
      },
      {
        path: "about",
        element: <AboutUs /> 
      },
      {
        path: "services",
        element: <Services /> 
      },
      {
        path: "contact",
        element: <ContactUs /> 
      }
    ]
  }
], {
  basename: "/responsive-react-website", 
})

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
