import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addProductAction } from "../redux/actions";
// import { addProductAction } from "../redux/toolkit/actions";
import { addProduct } from "../redux/toolkit/slice";

export default function Home() {
  const [goods, setGoods] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchGoods() {
      fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/products`)
        .then((result) => result.json())
        .then((goods) => setGoods(goods));
    }
    fetchGoods();
  }, []);

  function handleClick(item) {
    dispatch(addProduct(item));
  }

  return (
    <>
      <ol>
        {goods.map((item) => (
          <li key={item.name} onClick={() => handleClick(item)}>
            {item.name} - {item.price}
          </li>
        ))}
      </ol>
    </>
  );
}
