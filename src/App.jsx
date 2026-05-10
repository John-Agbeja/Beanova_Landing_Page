import { useState } from "react";

export default function App() {
  const products = [
    {
      title: "Premium Locust Beans",
      desc: "Freshly processed locust beans with rich aroma and taste.",
      image: "/images/beans1.jpg",
    },

    {
      title: "Packaged Beanova Mix",
      desc: "Neatly packaged for homes, stores, and restaurants.",
      image: "/images/beans2.jpg",
    },

    {
      title: "Bulk Orders",
      desc: "Affordable wholesale supply for resellers and vendors.",
      image: "/images/beans3.jpg",
    },
  ];
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    product: "",
    quantity: "",
    address: "",
    note: "",
  },
  );
const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch("https://script.google.com/macros/s/AKfycbyJxD0gRRywJgYZTEYFd_QE8jelKiDlZtuA4YIUsTC6HCJ1s1AmRIfOqjMBc9G03qLUNQ/exec", {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify(formData),
});
  const message = `
Hi Beanova Manager,

I want to place a Beanova Order.

Full Name: ${formData.fullName}
Phone Number: ${formData.phone}
Product: ${formData.product}
Quantity: ${formData.quantity}
Delivery Address: ${formData.address}
Additional Note: ${formData.note}
  `;

  const whatsappUrl =
    `https://wa.me/2349113486251?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <div className="min-h-screen bg-[#5c4033] text-white font-sans">

      {/* HERO */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Fresh, Natural & Premium Locust Beans Delivered To You
            </h1>

            <p className="text-lg mb-8 text-gray-200">
              JohnAgbeja Beanova provides quality locust bean products carefully processed for delicious meals and healthy living.
            </p>

            <div className="flex gap-4">

              <a
                href="https://wa.me/2349113486251?text=Hi%2C%20Beanova%20Manager.%0AI%20want%20to%20place%20Beanova%20Order."
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold"
              >
                Order on WhatsApp
              </a>

              <a
                href="#products"
                className="border border-white px-6 py-3 rounded-2xl"
              >
                View Products
              </a>

            </div>

          </div>

          <div>

            <img
              src="/images/hero.jpg"
              alt="Beanova"
              className="rounded-3xl w-full h-[450px] object-cover shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="bg-white text-black py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-green-800 mb-6">
            About Beanova
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            Beanova supplies premium quality locust beans hygienically processed for homes, restaurants, and food vendors.
          </p>

        </div>

      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="py-20 px-6 bg-[#f5f1ea] text-black"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Our Products
            </h2>

            <p className="text-gray-600">
              Carefully selected and processed for freshness and quality.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {products.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-3 text-green-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
{/* Order Form Section */}
      <section className="py-20 px-6 bg-[#f3ede6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Place Your Order
            </h2>
            <p className="text-lg text-gray-600">
              Fill the form below and Beanova will contact you directly to confirm your order.
            </p>
          </div>
           <form
  onSubmit={handleSubmit}
  className="bg-white p-8 rounded-3xl shadow-2xl space-y-6 border border-gray-200 text-black"
>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Full Name
                </label>
                <input
  type="text"
  placeholder="Enter your name"
  value={formData.fullName}
  onChange={(e) =>
    setFormData({ ...formData, fullName: e.target.value })
  }
  className="w-full p-4 rounded-2xl border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
/>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
  type="tel"
  placeholder="Enter your phone number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  className="w-full p-4 rounded-2xl border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
/>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Product Type
                </label>
                <select
  value={formData.product}
  onChange={(e) =>
    setFormData({ ...formData, product: e.target.value })
  }
  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
>
  <option>Select Product</option>
  <option>Beanova Single Pack</option>
  <option>Packaged Beanova Mix(Dozens)</option>
  <option>Bulk Orders</option>
</select>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Quantity
                </label>
                <input
  type="text"
  placeholder="E.g 2 Paint Buckets"
  value={formData.quantity}
  onChange={(e) =>
    setFormData({ ...formData, quantity: e.target.value })
  }
  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
/>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Delivery Address
              </label>
             <textarea
  rows="4"
  placeholder="Enter your delivery address"
  value={formData.address}
  onChange={(e) =>
    setFormData({ ...formData, address: e.target.value })
  }
  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
></textarea>
            </div>
            
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Additional Note
              </label>
              <textarea
  rows="3"
  placeholder="Optional message"
  value={formData.note}
  onChange={(e) =>
    setFormData({ ...formData, note: e.target.value })
  }
  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg transition"
            >
              Submit Order
            </button>
          </form>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-gray-300">

        <p>
          © 2026 JohnAgbeja Beanova. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}