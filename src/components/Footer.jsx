const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-rose-900 to-rose-950 text-rose-100">
      <div className="max-w-7xl mx-auto px-10 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">✨ Aguenes</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Your premier destination for premium yarns, fabrics, and fiber art supplies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-rose-200">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Yarn & Wool</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Fabrics</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Embroidery</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Accessories</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-rose-200">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Contact Us</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Shipping Info</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Returns</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">FAQs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-rose-200">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Instagram</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Pinterest</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Newsletter</li>
              <li className="hover:opacity-100 hover:text-rose-200 cursor-pointer transition-all">Community</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-rose-800 pt-6 flex flex-col items-center gap-2">
          <p className="text-sm opacity-80">© 2025 Aguenes Fiber Arts</p>
          <p className="text-xs opacity-60">woven with passion • crafted with care • made for makers</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
