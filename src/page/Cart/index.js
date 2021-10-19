import { useState } from "react";
import { useCart } from "../../providers/cart";

function Cart() {
  const { cartProducts } = useCart();

  const [costumer, setCostumer] = useState({
    name: "",
    address: "",
  });

  const handleInput = (event) => {
    setCostumer((previousState) => ({
      ...previousState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Olá ${costumer.name}, seu pedido está sendo preparado`)
  };

  return (
    <>
      <h3>Cart</h3>

      {cartProducts.map((p) => (
        <div key={p.id}>
          <span>{p.name}</span>
          <span>{p.price}</span>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            value={costumer.name}
            type="text"
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="address"> Address </label>
          <input
            id="address"
            value={costumer.address}
            type="text"
            onChange={handleInput}
          />
        </div>

        <button className="button" type="submit">
          Purchase
        </button>
      </form>
    </>
  );
}

export default Cart;
