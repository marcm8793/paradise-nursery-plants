import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-600 border-b border-green-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-white">Paradise Nursery</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/products" className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
            <Link to="/cart" className="relative px-3 py-2">
              <div className="flex items-center text-white hover:text-green-200 rounded-md text-sm font-medium">
                <span className="mr-1">Cart</span>
                {cartQuantity > 0 && (
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-xs font-medium text-white">
                    {cartQuantity}
                  </span>
                )}
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200 hover:bg-green-700 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-200 hover:bg-green-700">Home</Link>
              <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-200 hover:bg-green-700">Products</Link>
              <Link to="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-200 hover:bg-green-700">
                <div className="flex items-center">
                  <span className="mr-1">Cart</span>
                  {cartQuantity > 0 && (
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-xs font-medium text-white">
                      {cartQuantity}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 