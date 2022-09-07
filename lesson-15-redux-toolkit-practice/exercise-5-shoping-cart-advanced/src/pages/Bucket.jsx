import { useSelector, useDispatch } from "react-redux";
// import { removeProductAction } from "../redux/actions";
// import { removeProductAction } from "../redux/toolkit/actions";
import {
  removeProduct,
  incrementProduct,
  decrementProduct,
} from "../redux/toolkit/slice";

export default function Bucket() {
  const goods = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  function handleClickRemove({ target: { id } }) {
    dispatch(removeProduct(id));
  }

  function handleIncrement({ target: { id } }) {
    dispatch(incrementProduct(id));
  }

  function handleDecrement({ target: { id } }) {
    dispatch(decrementProduct(id));
  }

  return (
    <>
      <ol>
        {goods.map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}
            <button id={item.id} type="button" onClick={handleIncrement}>
              +1
            </button>
            <span>{item.quantity}</span>
            <button id={item.id} type="button" onClick={handleDecrement}>
              -1
            </button>
            <button id={item.id} onClick={handleClickRemove}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
