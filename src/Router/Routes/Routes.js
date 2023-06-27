import About from "../../Pages/About/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Sginup from "../../Pages/Signup/Sginup";
import MyWork from "../../Pages/Work/Mywork/MyWork";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

 


 const router=createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'/work',
                element:<MyWork></MyWork>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/blogs',
              element:<Blogs></Blogs>
            },
            {
                path:'/login'
                ,element:<Login></Login>
            },
            {
                path:'/sginup',
                element:<Sginup></Sginup>
            }
        ]
      }
 ])
 export default router;