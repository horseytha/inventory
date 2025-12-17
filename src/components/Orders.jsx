import { useState, useEffect } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await fetch('http://localhost:3000/orders', {
                headers: {
                    'Authorization': user.token
                }
            });
            const data = await response.json();
            setOrders(data.orders || []);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8">Loading orders...</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-gray-600">No orders found.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order._id} className="border rounded-lg p-6 bg-white shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-semibold">Order #{order._id.slice(-8)}</h3>
                                    <p className="text-gray-600">{new Date(order.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-lg">Rs.{order.totalAmount}</p>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{order.status}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {order.products.map((item) => (
                                    <div key={item._id} className="flex justify-between items-center py-2 border-b">
                                        <div>
                                            <p className="font-medium">{item.product.name}</p>
                                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                                        </div>
                                        <p className="font-medium">Rs.{item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;