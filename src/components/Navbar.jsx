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
            <div className="sticky top-0 right-0 left-0 bg-rose-900 z-50">
                <div className="flex items-center justify-between px-8 py-2">
                    <Link to='/' className="text-white font-bold text-3xl font-serif hover:text-rose-200 transition-colors duration-200">
                        Aguenes
                    </Link>
                    
                    <div className="flex space-x-8 text-white items-center">
                        <Link to='/products' className="hover:text-rose-200 font-semibold cursor-pointer transition-colors duration-200 relative group">
                            Products
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-200 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to='/cart' className="hover:text-rose-200 font-semibold cursor-pointer transition-colors duration-200 relative group">
                            Cart
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-200 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        {user?.role === "admin" && 
                            <Link to='/admin' className="hover:text-rose-200 font-semibold cursor-pointer transition-colors duration-200 relative group">
                                Admin
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-200 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        }
                        <Link to='/orders' className="hover:text-rose-200 font-semibold cursor-pointer transition-colors duration-200 relative group">
                            Orders
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-200 group-hover:w-full transition-all duration-300"></span>
                        </Link>   
                    </div>
                    
                    <div className="flex space-x-4 text-white items-center">
                        {user ? (
                            <button onClick={logout} className='bg-rose-600 hover:bg-rose-500 rounded-full py-2 px-6 font-semibold transition-all duration-200'>
                                Logout
                            </button>
                        ) : (
                            <Link to='/login' className='bg-rose-600 hover:bg-rose-500 rounded-full py-2 px-6 font-semibold transition-all duration-200'>
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;