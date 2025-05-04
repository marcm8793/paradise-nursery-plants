import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { plants } from '../data/plants';

const ProductList = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const cartItems = useSelector((state) => state.cart.items);

  const filteredPlants = selectedCategory === 'all'
    ? plants
    : plants.filter(plant => plant.category === selectedCategory);

  // Create and sort categories array for better organization
  const categoriesSet = new Set(plants.map(plant => plant.category));
  const sortedCategories = Array.from(categoriesSet).sort();
  const categories = ['all', ...sortedCategories];

  // Check if a product is already in the cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Handle adding product to cart
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Plants Collection</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Browse our selection of high-quality plants for your garden or home
          </p>
        </div>
        
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-md font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:shadow-xl hover:-translate-y-1">
              <div className="relative">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-green-600 text-white text-sm font-bold rounded">
                  ${plant.price.toFixed(2)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plant.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full">
                    {plant.category}
                  </span>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                    className={`flex items-center justify-center px-4 py-2 rounded-md transition-colors ${
                      isInCart(plant.id)
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPlants.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No plants found in this category. Try another category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList; 