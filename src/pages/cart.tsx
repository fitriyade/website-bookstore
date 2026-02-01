"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import { useCart } from "@/context/cardContext";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // Perhatikan: next/navigation untuk App Router

const CartPage = () => {
  const router = useRouter(); // useRouter dari next/navigation
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  // Fungsi untuk format harga
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const subtotal = getTotalPrice();
  const shippingCost = subtotal > 0 ? 15000 : 0;
  const total = subtotal + shippingCost;
  const totalItems = getTotalItems();

  // Fungsi untuk handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Checkout successful!\nTotal: ${formatPrice(total)}`);
    clearCart();
    router.push("/library");
  };

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 p-4 md:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.back()}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                  Shopping Cart
                </h1>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <ShoppingCart size={24} />
                  <span className="font-semibold">
                    {totalItems} item{totalItems !== 1 ? "s" : ""}
                  </span>
                </div>

                {cartItems.length > 0 && (
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to clear your cart?",
                        )
                      ) {
                        clearCart();
                      }
                    }}
                    className="text-red-600 hover:text-red-800 font-medium flex items-center gap-2 px-3 py-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                    Clear Cart
                  </button>
                )}
              </div>
            </div>

            {cartItems.length === 0 ? (
              // Empty cart state
              <div className="bg-white rounded-xl shadow p-8 text-center max-w-md mx-auto">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart size={48} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  Your cart is empty
                </h2>
                <p className="text-gray-500 mb-6">
                  Looks like you haven't added any books to your cart yet.
                </p>
                <button
                  onClick={() => router.push("/library")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
                >
                  <ArrowLeft size={18} />
                  Browse Books
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="font-semibold text-lg">
                        Cart Items ({totalItems})
                      </h2>
                    </div>

                    <div className="divide-y divide-gray-100">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 flex flex-col sm:flex-row gap-4 hover:bg-gray-50 transition-colors"
                        >
                          {/* Book Image */}
                          <div className="flex-shrink-0">
                            <div className="w-24 h-32 bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.bookname}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          {/* Book Details */}
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-semibold text-gray-800">
                                  {item.bookname}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                  by {item.author}
                                </p>
                                <p className="font-bold text-lg text-blue-600 mt-2">
                                  {item.price}
                                </p>
                              </div>

                              {/* Delete Button */}
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors self-start"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-3">
                                <span className="text-gray-600">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                    className="p-2 hover:bg-gray-100 rounded-l-lg"
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="w-10 text-center font-semibold border-x border-gray-300 py-2">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    className="p-2 hover:bg-gray-100 rounded-r-lg"
                                  >
                                    <Plus size={16} />
                                  </button>
                                </div>
                              </div>

                              {/* Item Total */}
                              <div className="text-right">
                                <p className="text-sm text-gray-500">
                                  Item Total
                                </p>
                                <p className="font-bold text-lg">
                                  {formatPrice(
                                    (parseInt(item.price.replace(/\D/g, "")) ||
                                      0) * item.quantity,
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Continue Shopping Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => router.push("/library")}
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
                    >
                      <ArrowLeft size={18} />
                      Continue Shopping
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow p-6 sticky top-6">
                    <h2 className="font-bold text-xl mb-6 pb-3 border-b">
                      Order Summary
                    </h2>

                    {/* Summary Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">
                          {formatPrice(subtotal)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold">
                          {shippingCost > 0
                            ? formatPrice(shippingCost)
                            : "FREE"}
                        </span>
                      </div>

                      {subtotal > 500000 && (
                        <div className="flex justify-between text-green-600 text-sm">
                          <span>Free Shipping Applied!</span>
                          <span>✓</span>
                        </div>
                      )}

                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <div className="flex justify-between">
                          <span className="font-bold text-lg">Total</span>
                          <span className="font-bold text-xl text-blue-600">
                            {formatPrice(total)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
