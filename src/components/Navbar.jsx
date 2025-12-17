import { Link, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return(
        <>
            <div className="sticky top-0 right-0 left-0 bg-rose-900 rounded-b-md shadow-sm shadow-rose-950 z-80">
            <div className="flex items-center justify-between p-3">
                <Link to='/' className="text-white font-bold text-2xl font-serif text-purple-200  transform hover:scale-103">Aguenes</Link>
                <div className="flex space-x-6 text-white items-center">
                    <Link to='/products' className="hover:text-pink-300 font-semibold cursor-pointer">Products</Link>
                    <Link to='/cart'className="hover:text-pink-300 font-semibold cursor-pointer">Cart</Link>
                    {user?.role === "admin" && <Link to='/admin' className="hover:text-pink-300 font-semibold cursor-pointer">Admin</Link>}
                    <Link to='/orders' className="hover:text-pink-300 font-semibold cursor-pointer">Orders</Link>   
                </div>
                <div className="flex space-x-6 text-white items-center">
                    {user ? (
                        <button onClick={logout} className='hover:bg-rose-300/30 rounded-xl py-2 px-3'>Logout</button>
                    ) : (
                        <Link to='/login' className='hover:bg-rose-300/30 rounded-xl py-2 px-3'>Login</Link>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;