import About from "../../Pages/About/About/About";
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
            }
        ]
      }
 ])
 export default router;