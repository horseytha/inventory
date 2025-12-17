import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <h1 className="font-bold text-rose-950 text-3xl text-center my-10">Our Products.</h1>
            <div className="flex flex-wrap justify-center gap-5 mb-20">
                {products.map(product => (
                    <ProductCard 
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={`Rs.${product.selling_price}`}
                        image={product.image_url}
                    />
                ))}
            </div>
        </>
    );
};

export default ProductList;
