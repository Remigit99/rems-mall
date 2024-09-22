import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

const router = createBrowserRouter(
  [{
  path: "/",
  element: <RootLayout />,
  errorPage: <NotFound />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ],
  }]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
