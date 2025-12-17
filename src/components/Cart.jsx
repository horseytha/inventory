import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.token) {
        navigate("/login");
        return;
      }
      
      const response = await fetch("http://localhost:3000/cart", {
        headers: { "Authorization": user.token }
      });
      const data = await response.json();
      setCart(data.cart?.products || []);
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await fetch(`http://localhost:3000/cart/remove/${productId}`, {
        method: "DELETE",
        headers: { "Authorization": user.token }
      });
      loadCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await fetch("http://localhost:3000/cart/update", {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": user.token
        },
        body: JSON.stringify({ productId, quantity })
      });
      loadCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const placeOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await fetch("http://localhost:3000/orders/create", {
        method: "POST",
        headers: { "Authorization": user.token }
      });
      
      if (response.ok) {
        alert("Order placed successfully!");
        loadCart();
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (loading) return <div className="p-10">Loading cart...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-rose-900 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-rose-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-6">
            {cart.map(item => (
              <div className="bg-rose-100 p-4 rounded-xl shadow flex justify-between items-center" key={item._id}>
                <div className="flex gap-4 items-center">
                  <img src={item.product.image_url} className="h-20 w-20 rounded-md object-cover" />
                  <div>
                    <h2 className="font-semibold">{item.product.name}</h2>
                    <p className="text-rose-700 font-medium">Rs.{item.product.selling_price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                      className="bg-rose-600 text-white px-2 py-1 rounded hover:bg-rose-700"
                    >-</button>
                    <span className="px-3 py-1 bg-white rounded">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                      className="bg-rose-600 text-white px-2 py-1 rounded hover:bg-rose-700"
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeItem(item.product._id)} 
                    className="bg-rose-700 text-white px-4 py-2 rounded-md hover:bg-rose-800"
                  >Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={placeOrder}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;
