import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-green-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              {/* Hero content */}
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Welcome to</span>
                    <span className="block text-green-200">Paradise Nursery</span>
                  </h1>
                  <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Discover our collection of beautiful aromatic and medicinal plants for your home and garden.
                    <br></br>
                    We take pride in offering a diverse range of high-quality plants that are carefully nurtured in our state-of-the-art greenhouse facilities. Our expert horticulturists select only the healthiest specimens, ensuring that each plant you purchase from Paradise Nursery will thrive in your care. From rare exotic varieties to classic favorites, we're your trusted partner in bringing natural beauty and wellness into your living spaces.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link to="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                        Get started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link to="/cart" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                        View Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gradient-to-r from-green-600 to-green-800">
          {/* We would normally put an image here */}
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Selection</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Plant Categories
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From aromatic herbs to medicinal plants, we have everything you need to create your own paradise.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Category 1 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Aromatic Herbs</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Enhance your cooking with our selection of fragrant herbs.
                    </p>
                    <div className="mt-6">
                      <Link to="/products" className="text-green-600 hover:text-green-800">
                        Explore &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Medicinal Plants</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Discover plants with traditional healing properties.
                    </p>
                    <div className="mt-6">
                      <Link to="/products" className="text-green-600 hover:text-green-800">
                        Explore &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 3 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Ornamental Plants</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Beautify your space with our decorative plants.
                    </p>
                    <div className="mt-6">
                      <Link to="/products" className="text-green-600 hover:text-green-800">
                        Explore &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Succulents & Cacti</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Low-maintenance plants perfect for busy plant lovers.
                    </p>
                    <div className="mt-6">
                      <Link to="/products" className="text-green-600 hover:text-green-800">
                        Explore &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 5 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Indoor Tropicals</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Lush tropical plants that thrive in indoor environments.
                    </p>
                    <div className="mt-6">
                      <Link to="/products" className="text-green-600 hover:text-green-800">
                        Explore &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 6 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Garden Vegetables</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Grow your own organic vegetables at home.
                    </p>
                    <div className="mt-6">
                      <Link to="/products" className="text-green-600 hover:text-green-800">
                        Explore &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 