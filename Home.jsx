import React from "react";

export default function Home() {
  return (
    <div className="bg-[#0b0f1a] text-white min-h-screen">
      <header className="flex justify-between items-center p-6 px-10 border-b border-gray-700">
        <div className="text-2xl font-bold">SKYLINK SOLUTIONS</div>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Shop</a>
          <a href="#" className="hover:text-green-400">Services</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Contact</a>
          <a href="#" className="hover:text-green-400">Login</a>
          <a href="#" className="hover:text-green-400">Register</a>
        </nav>
      </header>

      <section className="text-center py-16 bg-[url('/drone-bg.jpg')] bg-cover bg-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Skylink Solutions</h1>
        <p className="text-lg md:text-xl mb-6">Get ₹200 OFF on your first order!</p>
        <a
          href="https://wa.me/919900405101"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full inline-block"
        >
          Chat with Us
        </a>
      </section>

      <section className="py-10 px-4 md:px-20 text-center">
        <div className="flex flex-wrap justify-center gap-10 text-sm mb-10">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            Drones starting from ₹3,999 to ₹3 Lakh+
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            Warranty Provided
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🇮🇳</span>
            Made in India
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Mavic Air 2", price: "₹55,000" },
            { name: "Phantom 4 Pro", price: "₹1,50,000" },
            { name: "Mini 2", price: "₹45,000" }
          ].map((product, idx) => (
            <div
              key={idx}
              className="bg-[#111827] p-6 rounded-2xl shadow-lg text-left"
            >
              <div className="h-40 bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="mb-4">{product.price}</p>
              <a
                href="https://wa.me/919900405101"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full inline-block"
              >
                Buy on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
          <div className="text-center">
            <div className="text-3xl">✅</div>
            Trusted by 1M+ Customers
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400">TRUSTED</div>
            Secure Checkout
          </div>
          <div className="text-center">
            <div className="text-3xl text-yellow-400">GUARANTEE</div>
            Assured Warranty
          </div>
        </div>
      </section>
    </div>
  );
}
