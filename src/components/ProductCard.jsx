const ProductCard = ({ id, name, price, image }) => {

  const addToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }
    
    await fetch("http://localhost:3000/cart/add", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        productId: id,
        name,
        price,
        image
      })
    });
    alert("Added to cart!");
  };

  return (
    <div className="flex flex-col w-[250px] p-6 shadow-md bg-rose-100 rounded-md transform hover:shadow-lg hover:translate-y-[-3px]">
        <img src={image} alt={name} className="object-cover rounded-md w-[200px] h-[200px]" />
        <h2 className="text-center my-2 text-lg font-semibold text-rose-900">{name}</h2>
        <p className="text-2xl font-bold ml-5 text-rose-950">{price}</p>
        <button onClick={addToCart} className="bg-rose-800 text-xl px-3 py-2 m-3 rounded-xl hover:bg-rose-700 text-white"> Add to Cart</button>
    </div>
  );
};

export default ProductCard;
