import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, addToCart, deleteFromCart } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 py-16 text-center">
          <svg className="h-24 w-24 text-green-500 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any plants to your cart yet.</p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Browse Our Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Your Shopping Cart</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Review and modify your selections before checkout
          </p>
        </div>
        
        <div className="mt-8">
          <div className="flow-root">
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="py-6 flex">
                  <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-6 flex-1 flex flex-col">
                    <div className="flex">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          onClick={() => dispatch(deleteFromCart(item.id))}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 pt-4 flex items-end justify-between">
                      <div className="flex">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 h-8 w-8 rounded-md flex items-center justify-center"
                        >
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="px-4 h-8 flex items-center justify-center text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 h-8 w-8 rounded-md flex items-center justify-center"
                        >
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-500">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                        <p className="ml-4 text-lg font-medium text-gray-900">
                          ${item.totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 px-4 py-6 sm:px-6 bg-white shadow rounded-lg">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <button 
              onClick={() => alert("Coming Soon")}
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
              Checkout
            </button>
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or{' '}
              <Link to="/products" className="text-green-600 font-medium hover:text-green-500">
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 