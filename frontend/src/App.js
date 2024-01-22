import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import ROUTES from "./index.Root";
import Maincontext from "./Context/Context";
const router = createBrowserRouter(ROUTES);
function App() {
  const [data, setData] = useState([]);
  const [wishList, SetWishList] = useState(
    localStorage.getItem("wishListItem")
      ? JSON.parse(localStorage.getItem("wishListItem"))
      : []
  );
  const [basket, Setbasket] = useState(
    localStorage.getItem("basketItem")
      ? JSON.parse(localStorage.getItem("basketItem"))
      : []
  );
  const [search, setSearch] = useState([]);

  const addToWishlist = (product) => {
    const target = wishList.find((item) => item._id == product._id);
    if (target) {
      alert("var");
    } else {
      SetWishList([...wishList, product]);
      localStorage.setItem(
        "wishListItem",
        JSON.stringify([...wishList, product])
      );
    }
  };
  const removeFromWishList = (product) => {
    const target = wishList.find((item) => item._id == product._id);
    wishList.splice(wishList.indexOf(target), 1);
    SetWishList([...wishList]);
    localStorage.setItem("wishListItem", JSON.stringify([...wishList]));
  };
  const AddTobasket = (product) => {
    const target = basket.find((item) => item.product._id == product._id);
    if (target) {
      target.count += 1;
      target.totalPrice = target.product.price * target.count;
      Setbasket([...basket]);
      localStorage.setItem("basketItem", JSON.stringify([...basket]));
    } else {
      const basketProduct = {
        id: product._id,
        product: product,
        count: 1,
        totalPrice: product.price,
      };
      Setbasket([...basket, basketProduct]);
      localStorage.setItem(
        "basketItem",
        JSON.stringify([...basket, basketProduct])
      );
    }
  };
  const decreaseBtn = (product) => {
    const target = basket.find((item) => item.id == product.id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice = target.product.price * target.count;
      Setbasket([...basket]);
      localStorage.setItem("basketItem", JSON.stringify([...basket]));
    }
  };
  const increaseBtn = (product) => {
    const target = basket.find((item) => item.id == product.id);

    target.count += 1;
    target.totalPrice = target.product.price * target.count;
    Setbasket([...basket]);
    localStorage.setItem("basketItem", JSON.stringify([...basket]));
  };
  const removefromBasket = (product) => {
    const target = basket.find((item) => item._id == product._id);
    basket.splice(basket.indexOf(target), 1);
    Setbasket([...basket]);
    localStorage.setItem("basketItem", JSON.stringify([...basket]));
  };
  const handlerSerch = (serachvalue) => {
    const searched=serachvalue.target.value.toLowerCase().trim()
    if (searched == "") {
      setData([...search]);
    } else {
      const serchset = data.filter((item) =>
        item.name.trim().toLowerCase().includes(searched)
      );
      setData([...serchset]);
    }
  };




  const deleteddata=(id)=>{
    axios.delete(`http://localhost:8000/pato/${id}`).then(res=>{
      const target=data.find(item=>item._id==id)
      data.splice(data.indexOf(target),1)
      setData([...data])
    })
  }

  useEffect(() => {
    axios.get("http://localhost:8000/pato/").then((res) => {
      console.log(res.data);
      setData(res.data);
      setSearch(res.data);
    });
  }, []);
  const value = {
    data,
    addToWishlist,
    wishList,
    removeFromWishList,
    AddTobasket,
    basket,
    decreaseBtn,
    increaseBtn,
    removefromBasket,
    setData,
    handlerSerch,
    deleteddata
  };

  return (
    <Maincontext.Provider value={value}>
      <RouterProvider router={router} />
    </Maincontext.Provider>
  );
}

export default App;
