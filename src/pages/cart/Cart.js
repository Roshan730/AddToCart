import { useContext } from "react";
import { cartContext } from "../../context/Context";
import "./Cart.css";

const Cart = () => {
  const globalState = useContext(cartContext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.quantity * item.price}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              >
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>{total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
