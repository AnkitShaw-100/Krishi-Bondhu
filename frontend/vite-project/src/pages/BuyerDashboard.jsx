import React from "react";
import { useTranslation } from "react-i18next";
import { FaHome, FaBell, FaHeart, FaCog } from "react-icons/fa"; // Icons for Sidebar
import Navbar from "./Navbar";

function BuyerDashboard() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="buyer-dashboard bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-1/4 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-6">{t("dashboard")}</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer transition duration-300">
              <FaHome className="mr-3 text-green-500" /> {t("myListings")}
            </li>
            <li className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer transition duration-300">
              <FaBell className="mr-3 text-yellow-500" /> {t("notifications")}
            </li>
            <li className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer transition duration-300">
              <FaHeart className="mr-3 text-red-500" /> {t("favorites")}
            </li>
            <li className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer transition duration-300">
              <FaCog className="mr-3 text-blue-500" /> {t("settings")}
            </li>
          </ul>
        </aside>

        {/* Main Dashboard Content */}
        <main className="w-full lg:w-3/4 p-6">
          {/* Dashboard Summary */}
          <section className="mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 shadow-lg rounded-md text-center">
              <h3 className="text-lg font-bold text-blue-600">{t("totalPurchases")}</h3>
              <p className="text-3xl font-semibold text-gray-800">25</p>
            </div>
            <div className="bg-green-50 p-4 shadow-lg rounded-md text-center">
              <h3 className="text-lg font-bold text-green-600">{t("totalListings")}</h3>
              <p className="text-3xl font-semibold text-gray-800">12</p>
            </div>
            <div className="bg-yellow-50 p-4 shadow-lg rounded-md text-center">
              <h3 className="text-lg font-bold text-yellow-600">{t("totalFavorites")}</h3>
              <p className="text-3xl font-semibold text-gray-800">8</p>
            </div>
          </section>

          {/* Search Bar */}
          <div className="mb-10 flex items-center space-x-4">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
            <select
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            >
              <option value="all">{t("allCategories")}</option>
              <option value="fruits">{t("fruits")}</option>
              <option value="vegetables">{t("vegetables")}</option>
              <option value="grains">{t("grains")}</option>
            </select>
            <button
              className="bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {t("search")}
            </button>
          </div>

          {/* Listings Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t("recentListings")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Listing 1 */}
              <div className="bg-white p-4 shadow-lg rounded-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Tomatoes"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg text-green-600">{t("listing1Title")}</h3>
                <p className="text-gray-700">{t("listing1Description")}</p>
                <p className="text-green-600 font-bold mt-2">{t("price")}: ₹500</p>
                <p className="text-gray-500 text-sm">{t("location")}: Kolkata</p>
              </div>
              {/* Example Listing 2 */}
              <div className="bg-white p-4 shadow-lg rounded-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Rice"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg text-green-600">{t("listing2Title")}</h3>
                <p className="text-gray-700">{t("listing2Description")}</p>
                <p className="text-green-600 font-bold mt-2">{t("price")}: ₹1200</p>
                <p className="text-gray-500 text-sm">{t("location")}: Hooghly</p>
              </div>
              {/* Example Listing 3 */}
              <div className="bg-white p-4 shadow-lg rounded-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Potatoes"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg text-green-600">{t("listing3Title")}</h3>
                <p className="text-gray-700">{t("listing3Description")}</p>
                <p className="text-green-600 font-bold mt-2">{t("price")}: ₹800</p>
                <p className="text-gray-500 text-sm">{t("location")}: Howrah</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default BuyerDashboard;