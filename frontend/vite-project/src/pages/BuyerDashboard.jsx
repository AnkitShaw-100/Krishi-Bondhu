import React from "react";
import { useTranslation } from "react-i18next";
import { FaHome, FaBell, FaHeart, FaCog } from "react-icons/fa";
import Navbar from "./Navbar";

function BuyerDashboard() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="buyer-dashboard bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-8">{t("Dashboard")}</h2>
          <ul className="space-y-6">
            <li className="flex items-center text-gray-700 hover:bg-green-100 hover:text-green-600 rounded-md p-3 cursor-pointer transition-all border-l-4 border-green-500 shadow-md">
              <FaHome className="mr-3 text-green-500" /> 
              <span className="font-medium">{t("My Listings")}</span>
            </li>
            <li className="flex items-center text-gray-700 hover:bg-yellow-100 hover:text-yellow-600 rounded-md p-3 cursor-pointer transition-all border-l-4 border-yellow-500 shadow-md">
              <FaBell className="mr-3 text-yellow-500" /> 
              <span className="font-medium">{t("Notifications")}</span>
            </li>
            <li className="flex items-center text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-md p-3 cursor-pointer transition-all border-l-4 border-red-500 shadow-md">
              <FaHeart className="mr-3 text-red-500" /> 
              <span className="font-medium">{t("Favorites")}</span>
            </li>
            <li className="flex items-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md p-3 cursor-pointer transition-all border-l-4 border-blue-500 shadow-md">
              <FaCog className="mr-3 text-blue-500" /> 
              <span className="font-medium">{t("Settings")}</span>
            </li>
          </ul>
        </aside>

        {/* Main */}
        <main className="w-full lg:w-3/4 p-6 lg:p-10">
          {/* Summary */}
          <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t("Total Purchases"), count: 25, bg: "bg-blue-100", color: "text-blue-600" },
              { title: t("Total Listings"), count: 12, bg: "bg-green-100", color: "text-green-600" },
              { title: t("Total Favorites"), count: 8, bg: "bg-yellow-100", color: "text-yellow-600" },
            ].map(({ title, count, bg, color }, idx) => (
              <div
                key={idx}
                className={`${bg} p-6 shadow-inner rounded-xl text-center hover:shadow-lg transition-all`}
              >
                <h3 className={`text-lg font-semibold ${color}`}>{title}</h3>
                <p className="text-3xl font-extrabold text-gray-800 mt-2">{count}</p>
              </div>
            ))}
          </section>

          {/* Search */}
          <div className="mb-10 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder={t("Search Placeholder")}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
            <select className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-sm w-full sm:w-auto">
              <option value="all">{t("All Categories")}</option>
              <option value="fruits">{t("Fruits")}</option>
              <option value="vegetables">{t("Vegetables")}</option>
              <option value="grains">{t("Grains")}</option>
            </select>
            <button className="bg-green-600 text-white py-3 px-6 rounded-md shadow hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto">
              {t("Search")}
            </button>
          </div>

          {/* Listings */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t("recentListings")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDi7461mN2OuKTNi_W7yeRIk0khxb2GsOyg&s",
                  title: t("Apple"),
                  desc: t("Listing's description"),
                  price: "₹500",
                  location: "Kolkata",
                },
                {
                  img: "https://images.unsplash.com/photo-1668762924684-a9753a0a887c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFuYW5hfGVufDB8fDB8fHww",
                  title: t("Banana"),
                  desc: t("Listing's Description"),
                  price: "₹1200",
                  location: "Hooghly",
                },
                {
                  img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
                  title: t("Tomato"),
                  desc: t("Listing's description"),
                  price: "₹800",
                  location: "Howrah",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transition-all flex flex-col"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg text-green-600">{item.title}</h3>
                  <p className="text-gray-700 mb-2 text-sm">{item.desc}</p>
                  <div className="mt-auto">
                    <p className="text-green-600 font-semibold">{t("price")}: {item.price}</p>
                    <p className="text-gray-500 text-sm">{t("location")}: {item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default BuyerDashboard;
