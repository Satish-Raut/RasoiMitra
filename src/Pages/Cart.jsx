import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItems } from "../Components/utils/cartSlice";
import { FaOpencart } from "react-icons/fa";

export const Cart = () => {
  const cartItems = useSelector((storeState) => storeState.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || item.defaultPrice),
    0
  );

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart(cartItems));
  };

  const handleRemove = (id) => {
    dispatch(removeItems(id));
  };

  return (
    <div className="mt-[88px] container mx-auto px-3 py-8 max-w-7xl">
      {/* Title */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 rounded-xl p-4 shadow-lg/30 hover:scale-[1.01] transition-all duration-300 ">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaOpencart className="text-3xl sm:text-4xl text-orange-600" /> 
          Your Cart
        </h1>
        <button
          onClick={handleClear}
          className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base font-semibold text-red-600 border border-red-500 rounded-lg hover:bg-red-50 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg sm:text-2xl text-center">
          Your cart is empty.
        </p>
      ) : (
        <>
          {/* Cart Items */}
          <ul className="space-y-6">
            {cartItems.map((item) => {
              const { id, name, price, defaultPrice, imageId, description } =
                item;
              const imageUrl = imageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`
                : null;

              return (
                <li
                  key={id}
                  className="group flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
                >
                  {/* Image */}
                  {imageUrl && (
                    <div className="w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden rounded-xl shadow">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {name}
                    </h3>
                    <p className="text-base sm:text-lg text-orange-600 font-semibold mt-1">
                      ₹{(price || defaultPrice) / 100}
                    </p>
                    {description && (
                      <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                        {description}
                      </p>
                    )}
                    {/* Action Buttons */}
                    <div className="mt-4 flex flex-wrap sm:flex-nowrap justify-end gap-2">
                      <button
                        onClick={() => console.log("Add clicked:", item)}
                        className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-50 hover:scale-105 transition-all duration-200 border border-green-500"
                      >
                        ADD +
                      </button>
                      <button
                        onClick={() => handleRemove(id)}
                        className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 text-orange-600 font-semibold rounded-lg shadow-md hover:bg-orange-50 hover:scale-105 transition-all duration-200 border border-orange-500"
                      >
                        REMOVE -
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Checkout Section */}
          <div className="sticky bottom-0 mt-10 bg-white/40 backdrop-blur-md border-t border-gray-200 shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-t-xl">
            <div className="text-base sm:text-lg font-semibold">
              Total:{" "}
              <span className="text-orange-600 font-bold">
                ₹{totalPrice / 100}
              </span>
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-200">
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
};
