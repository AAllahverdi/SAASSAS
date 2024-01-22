import Basket from "./Pages/Basket";

const { default: Add } = require("./Pages/Add");
const { default: Detail } = require("./Pages/Detail");
const { default: Home } = require("./Pages/Home");
const { default: MainRoot } = require("./Pages/MainRoot");
const { default: WishList } = require("./Pages/WishList");

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"Add",
                element:<Add/>
            },
            {
                path:"Add",
                element:<Add/>
            },{
                path:"Basket",
                element:<Basket/>
            },
            {
                path:"WishList",
                element:<WishList/>
            },
            {
                path:"/:id",
                element:<Detail/>
            },
        ]
    }
]
export default ROUTES