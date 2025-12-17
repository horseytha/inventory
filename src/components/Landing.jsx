import Navbar from './Navbar.jsx'
import Marquee from './Marquee.jsx'
import Footer from './Footer.jsx'
import { useEffect, useState } from 'react'

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <>
      <Navbar/>
      <div className="relative w-full h-screen overflow-hidden bg-white">
        
        <div className={`absolute left-10 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative w-[600px] h-[500px]">
            <svg viewBox="0 0 600 500" className="absolute inset-0 w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#fff1f2', stopOpacity: 0.95}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.98}} />
                </linearGradient>
              </defs>
              <path d="M 100 50 Q 300 10, 500 80 Q 580 200, 520 350 Q 400 480, 200 450 Q 50 400, 80 250 Q 70 120, 100 50 Z" 
                    fill="url(#blobGradient)" 
                    stroke="#fda4af" 
                    strokeWidth="2"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-16 py-12">
              <h1 className='text-6xl font-bold text-rose-950 mb-6 leading-tight text-center'>
                Transform<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">Your Space</span>
              </h1>
              <p className='text-xl text-rose-900 font-medium mb-8 text-center'>Premium furniture for your home</p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">Shop Now</button>
                <button className="border-2 border-rose-900 text-rose-950 hover:bg-rose-900 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">View Collection</button>
              </div>
            </div>
          </div>
        </div>
        

      </div>

      <div className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-rose-900 mb-16">Why Customers Choose us.</h2>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.8s ease-out forwards;
              opacity: 0;
            }
          `}</style>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-rose-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted furniture made from the finest materials for lasting durability and style.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-rose-900 mb-4">Free Delivery</h3>
              <p className="text-gray-600">Complimentary delivery and setup service for all orders above Rs.10,000.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl animate-bounce">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-rose-900 mb-4">5-Star Service</h3>
              <p className="text-gray-600">Exceptional customer service with 24/7 support and hassle-free returns.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Marquee/>
      <Footer/>
    </>
  )
}

export default Landing
