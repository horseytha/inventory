import Navbar from './Navbar.jsx'
import Marquee from './Marquee.jsx'
import Footer from './Footer.jsx'
import { useEffect, useState } from 'react'
import mainBlob from '../assets/mainblob.svg'
import plant from '../assets/plant.png'
import buhBuh from '../assets/BUH BUH.png'

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      id: 1,
      name: "Premium Merino Wool",
      price: "₹349/100g",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500"
    },
    {
      id: 2,
      name: "Cotton Yarn Bundle",
      price: "₹599/pack",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500"
    },
    {
      id: 3,
      name: "Quilting Fabric Set",
      price: "₹899/meter",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=500"
    },
    {
      id: 4,
      name: "Embroidery Thread Kit",
      price: "₹449/set",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500"
    },
    {
      id: 5,
      name: "Macramé Cord",
      price: "₹299/roll",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500"
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const getCardStyle = (index) => {
    const position = (index - activeIndex + products.length) % products.length
    
    if (position === 0) {
      return {
        transform: 'translateX(0) translateZ(0) scale(1)',
        opacity: 1,
        zIndex: 30
      }
    } else if (position === 1) {
      return {
        transform: 'translateX(320px) translateZ(-200px) scale(0.85)',
        opacity: 0.7,
        zIndex: 20
      }
    } else if (position === products.length - 1) {
      return {
        transform: 'translateX(-320px) translateZ(-200px) scale(0.85)',
        opacity: 0.7,
        zIndex: 20
      }
    } else {
      return {
        transform: 'translateX(0) translateZ(-400px) scale(0.7)',
        opacity: 0,
        zIndex: 10
      }
    }
  }

  return (
    <>
      <Navbar/>
      <div className="relative w-full h-[70vh] bg-white">       
        <div className={`absolute left-10 top-[57%] transform -translate-y-1/2 z-30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative w-[650px] h-[550px]">
            <img src={mainBlob} alt="blob" className="absolute inset-0 w-[600px] -top-28" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-16 py-12">
              <h1 className='text-5xl font-bold text-rose-950 mb-4 leading-tight text-center' style={{fontFamily: 'Georgia, serif'}}>
                Weave<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">Your Story</span>
              </h1>
              <p className='text-lg text-rose-900 font-medium mb-6 text-center'>Handcrafted textiles & fiber art for your home</p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">Shop Now</button>
                <button className="border-2 border-rose-900 text-rose-950 hover:bg-rose-900 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">View Collection</button>
              </div>
              <img src={plant} alt="plant" className="absolute -right-15 top-50 w-[250px] h-auto" />
              <img src={buhBuh} alt="buh buh" className="absolute -left-10 top-15 w-[350px] h-auto" />
            </div>
          </div>
        </div>
        <div className={`absolute right-48 top-[65%] transform -translate-y-1/2 z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-[300px] h-[380px] overflow-hidden shadow-2xl" style={{borderRadius: '150px 150px 15px 15px'}}>
            <img 
              src="https://www.mamainastitch.com/wp-content/uploads/2018/02/Yarn-Stash-Organizing-2-675x1024.jpg" 
              alt="yarn"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="py-32 mt-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-rose-900 mb-4">Our Top Materials</h2>
          <p className="text-center text-rose-700 mb-16 text-lg">Premium supplies for your creative projects</p>
          
          <div className="relative h-[450px]" style={{perspective: '1200px'}}>
            <div className="absolute inset-0 flex items-center justify-center">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="absolute transition-all duration-700 ease-out"
                  style={getCardStyle(index)}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[280px] h-[350px] hover:shadow-2xl transition-shadow">
                    <div className="h-[200px] overflow-hidden bg-rose-50">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-rose-900 mb-2">{product.name}</h3>
                      <p className="text-xl font-bold text-rose-600 mb-3">{product.price}</p>
                      <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg font-semibold transition-all text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-10 top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-rose-100 text-rose-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-10 top-1/2 -translate-y-1/2 z-40 bg-white hover:bg-rose-100 text-rose-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
            >
              →
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-rose-600 w-8' : 'bg-rose-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Marquee/>
      <Footer/>
    </>
  )
}

export default Landing
