import { createBrowserRouter } from "react-router";
import Home from "../components/Pages/Home/Home";
import Layout from "../Layout/Layout";
import NotFound from "../components/Pages/NotFound/NotFound";


const router = createBrowserRouter([

     {
        path: "/",
        element: <Layout></Layout>,
        
        children: [
            {
                index: true,
                element: <Home />
            },
            {
              path: "/home",
              element: <Home />
            },
            {
              path: "*",
              element: <NotFound />
            }
        ]
      }
    ],
  
);

export default router;