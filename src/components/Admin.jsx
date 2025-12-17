import { useState } from "react";
import { useNavigate } from 'react-router';

const Admin = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: "", image: "" });

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const addProduct = async () => {
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });

    if (res.ok) {
      alert("Product added!");
      setProduct({ name: "", price: "", image: "" });
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-[400px] mx-auto mt-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={logout}>Logout</button>
      </div>
      <input className="p-2 border rounded" placeholder="name" value={product.name} onChange={e => setProduct({...product, name: e.target.value})}/>
      <input className="p-2 border rounded" placeholder="price" value={product.price} onChange={e => setProduct({...product, price: e.target.value})}/>
      <input className="p-2 border rounded" placeholder="image url" value={product.image} onChange={e => setProduct({...product, image: e.target.value})}/>
      <button className="bg-rose-700 text-white p-2 rounded" onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Admin;
