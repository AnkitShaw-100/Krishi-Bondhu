// import React, { useEffect, useState } from "react";

// export default function SellerDashboard() {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [item, setItem] = useState("");
//   const [price, setPrice] = useState(100);
//   const [quantity, setQuantity] = useState(1);
//   const [emoji, setEmoji] = useState("🌽");
//   const [date, setDate] = useState(() => new Date().toLocaleDateString("en-GB"));

//   const dozenItems = ["🍌", "🍊", "🍋", "🍎", "🥭", "🍍", "🍇", "🍓"];
//   const unit = dozenItems.includes(emoji) ? "dozen" : "kg";

//   const fetchListings = () => {
//     fetch("http://localhost:5000/api/seller/listings")
//       .then(res => res.json())
//       .then(data => {
//         setListings(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Failed to fetch listings:", err);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchListings();
//   }, []);

//   const handleAddListing = async (e) => {
//     e.preventDefault();

//     const newListing = {
//       item,
//       price: `₹${price}/${unit}`,
//       quantity: `${quantity} ${unit}`,
//       total: `₹${price * quantity}`,
//       date,
//       emoji
//     };

//     const res = await fetch("http://localhost:5000/api/seller/listings", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newListing),
//     });

//     if (res.ok) {
//       setItem("");
//       setPrice(100);
//       setQuantity(1);
//       setEmoji("🌽");
//       setDate(new Date().toLocaleDateString("en-GB"));
//       fetchListings();
//     } else {
//       alert("Failed to add listing");
//     }
//   };

//   // 🧹 Handle Deletion
//   const handleDeleteListing = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
//     if (!confirmDelete) return;

//     const res = await fetch(`http://localhost:5000/api/seller/listings/${id}`, {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       fetchListings();
//     } else {
//       alert("Failed to delete listing");
//     }
//   };

//   const buyerRequests = [
//     { id: 1, name: "Raju", location: "Nadia", request: "Wants 10kg onions" },
//     { id: 2, name: "Sima", location: "Howrah", request: "Looking to barter tomatoes" },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">🌾 KrishiBondhu – Seller Dashboard</h1>

//       {/* Add New Listing Form */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-3">➕ Add New Listing</h2>
//         <form onSubmit={handleAddListing} className="space-y-4 bg-gray-50 p-4 rounded-xl shadow-sm border">
//           <input
//             type="text"
//             placeholder="Item Name"
//             value={item}
//             onChange={(e) => setItem(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />

//           <label className="block font-medium">Select an Emoji:</label>
//           <select
//             value={emoji}
//             onChange={(e) => setEmoji(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option value="🌽">🌽 Corn</option>
//             <option value="🍅">🍅 Tomato</option>
//             <option value="🥔">🥔 Potato</option>
//             <option value="🥕">🥕 Carrot</option>
//             <option value="🧅">🧅 Onion</option>
//             <option value="🫑">🫑 Bell Pepper</option>
//             <option value="🍆">🍆 Brinjal</option>
//             <option value="🥒">🥒 Cucumber</option>
//             <option value="🥬">🥬 Leafy Greens</option>
//             <option value="🥦">🥦 Broccoli</option>
//             <option value="🍠">🍠 Sweet Potato</option>
//             <option value="🍌">🍌 Banana</option>
//             <option value="🍍">🍍 Pineapple</option>
//             <option value="🍉">🍉 Watermelon</option>
//             <option value="🍇">🍇 Grapes</option>
//             <option value="🍎">🍎 Apple</option>
//             <option value="🍊">🍊 Orange</option>
//             <option value="🍋">🍋 Lemon</option>
//             <option value="🥭">🥭 Mango</option>
//             <option value="🍓">🍓 Strawberry</option>
//           </select>

//           <label className="block font-medium">
//             Price: ₹{price} <span className="text-sm text-gray-500">/{unit}</span>
//           </label>
//           <input
//             type="range"
//             min="10"
//             max="500"
//             step="10"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full"
//           />

//           <label className="block font-medium">
//             Quantity ({unit}):
//           </label>
//           <input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />

//           <p className="text-lg font-semibold mt-2">
//             Total: ₹{price * quantity}
//           </p>

//           <button
//             type="submit"
//             className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//           >
//             Add Listing
//           </button>
//         </form>
//       </section>

//       {/* Seller Listings */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-3">📦 Your Listings</h2>
//         {loading ? (
//           <p className="text-gray-500">Loading listings...</p>
//         ) : listings.length === 0 ? (
//           <p className="text-gray-500">No listings found.</p>
//         ) : (
//           <div className="space-y-3">
//             {listings.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border"
//               >
//                 <div className="flex gap-3 items-center">
//                   <span className="text-2xl">{item.emoji}</span>
//                   <div>
//                     <p className="font-medium">{item.item}</p>
//                     <p className="text-sm text-gray-600">{item.price} — {item.quantity}</p>
//                     <p className="text-sm font-semibold">Total: {item.total}</p>
//                     <p className="text-xs text-gray-400">Posted on: {item.date}</p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleDeleteListing(item._id)}
//                   className="text-red-600 hover:underline text-sm"
//                 >
//                   🗑️ Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Buyer Requests */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-3">🛍️ Incoming Buyer Requests</h2>
//         {buyerRequests.map((req) => (
//           <div
//             key={req.id}
//             className="bg-white p-4 rounded-xl shadow-sm border mb-3"
//           >
//             <p className="font-semibold">{req.name} from {req.location}</p>
//             <p className="text-sm text-gray-700">{req.request}</p>
//             <button className="text-green-600 hover:underline mt-1 text-sm">
//               📞 Contact
//             </button>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";

// export default function SellerDashboard() {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [item, setItem] = useState("");
//   const [price, setPrice] = useState(100);
//   const [quantity, setQuantity] = useState(1);
//   const [emoji, setEmoji] = useState("🌽");
//   const [date, setDate] = useState(() => new Date().toLocaleDateString("en-GB"));

//   const dozenItems = ["🍌", "🍊", "🍋", "🍎", "🥭", "🍍", "🍇", "🍓"];
//   const unit = dozenItems.includes(emoji) ? "dozen" : "kg";

//   const fetchListings = () => {
//     fetch("http://localhost:5000/api/seller/listings")
//       .then(res => res.json())
//       .then(data => {
//         setListings(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Failed to fetch listings:", err);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchListings();
//   }, []);

//   const handleAddListing = async (e) => {
//     e.preventDefault();

//     const priceValue = parseFloat(price);
//     const quantityValue = parseFloat(quantity);
//     const total = priceValue * quantityValue;

//     const newListing = {
//       item,
//       price: `₹${priceValue}/${unit}`,
//       priceValue,
//       quantity: `${quantityValue} ${unit}`,
//       quantityValue,
//       total,
//       date,
//       emoji,
//     };

//     const res = await fetch("http://localhost:5000/api/seller/listings", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newListing),
//     });

//     if (res.ok) {
//       setItem("");
//       setPrice(100);
//       setQuantity(1);
//       setEmoji("🌽");
//       setDate(new Date().toLocaleDateString("en-GB"));
//       fetchListings();
//     } else {
//       console.error("Failed to add listing");
//     }
//   };

//   // 🧹 Handle Deletion
//   const handleDeleteListing = async (id) => {
//     const res = await fetch(`http://localhost:5000/api/seller/listings/${id}`, {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       fetchListings();
//     } else {
//       console.error("Failed to delete listing");
//     }
//   };

//   const buyerRequests = [
//     { id: 1, name: "Raju", location: "Nadia", request: "Wants 10kg onions" },
//     { id: 2, name: "Sima", location: "Howrah", request: "Looking to barter tomatoes" },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">🌾 KrishiBondhu – Seller Dashboard</h1>

//       {/* Add New Listing Form */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-3">➕ Add New Listing</h2>
//         <form onSubmit={handleAddListing} className="space-y-4 bg-gray-50 p-4 rounded-xl shadow-sm border">
//           <input
//             type="text"
//             placeholder="Item Name"
//             value={item}
//             onChange={(e) => setItem(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />

//           <label className="block font-medium">Select an Emoji:</label>
//           <select
//             value={emoji}
//             onChange={(e) => setEmoji(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option value="🌽">🌽 Corn</option>
//             <option value="🍅">🍅 Tomato</option>
//             <option value="🥔">🥔 Potato</option>
//             <option value="🥕">🥕 Carrot</option>
//             <option value="🧅">🧅 Onion</option>
//             <option value="🫑">🫑 Bell Pepper</option>
//             <option value="🍆">🍆 Brinjal</option>
//             <option value="🥒">🥒 Cucumber</option>
//             <option value="🥬">🥬 Leafy Greens</option>
//             <option value="🥦">🥦 Broccoli</option>
//             <option value="🍠">🍠 Sweet Potato</option>
//             <option value="🍌">🍌 Banana</option>
//             <option value="🍍">🍍 Pineapple</option>
//             <option value="🍉">🍉 Watermelon</option>
//             <option value="🍇">🍇 Grapes</option>
//             <option value="🍎">🍎 Apple</option>
//             <option value="🍊">🍊 Orange</option>
//             <option value="🍋">🍋 Lemon</option>
//             <option value="🥭">🥭 Mango</option>
//             <option value="🍓">🍓 Strawberry</option>
//           </select>

//           <label className="block font-medium">
//             Price: ₹{price} <span className="text-sm text-gray-500">/{unit}</span>
//           </label>
//           <input
//             type="range"
//             min="10"
//             max="500"
//             step="10"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full"
//           />

//           <label className="block font-medium">
//             Quantity ({unit}):
//           </label>
//           <input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />

//           <p className="text-lg font-semibold mt-2">
//             Total: ₹{price * quantity}
//           </p>

//           <button
//             type="submit"
//             className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//           >
//             Add Listing
//           </button>
//         </form>
//       </section>

//       {/* Seller Listings */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-3">📦 Your Listings</h2>
//         {loading ? (
//           <p className="text-gray-500">Loading listings...</p>
//         ) : listings.length === 0 ? (
//           <p className="text-gray-500">No listings found.</p>
//         ) : (
//           <div className="space-y-3">
//             {listings.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border"
//               >
//                 <div className="flex gap-3 items-center">
//                   <span className="text-2xl">{item.emoji}</span>
//                   <div>
//                     <p className="font-medium">{item.item}</p>
//                     <p className="text-sm text-gray-600">{item.price} — {item.quantity}</p>
//                     <p className="text-sm font-semibold">Total: {item.total}</p>
//                     <p className="text-xs text-gray-400">Posted on: {item.date}</p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleDeleteListing(item._id)}
//                   className="text-red-600 hover:underline text-sm"
//                 >
//                   🗑️ Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Buyer Requests */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-3">🛍️ Incoming Buyer Requests</h2>
//         {buyerRequests.map((req) => (
//           <div
//             key={req.id}
//             className="bg-white p-4 rounded-xl shadow-sm border mb-3"
//           >
//             <p className="font-semibold">{req.name} from {req.location}</p>
//             <p className="text-sm text-gray-700">{req.request}</p>
//             <button className="text-green-600 hover:underline mt-1 text-sm">
//               📞 Contact
//             </button>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";

export default function SellerDashboard() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [item, setItem] = useState("");
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [emoji, setEmoji] = useState("🌽");
  const [date, setDate] = useState(() => new Date().toLocaleDateString("en-GB"));

  const dozenItems = ["🍌", "🍊", "🍋", "🍎", "🥭", "🍍", "🍇", "🍓"];
  const unit = dozenItems.includes(emoji) ? "dozen" : "kg";

  const fetchListings = () => {
    fetch("http://localhost:5000/api/seller/listings")
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch listings:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleAddListing = async (e) => {
    e.preventDefault();

    const priceValue = parseFloat(price);
    const quantityValue = parseFloat(quantity);
    const total = priceValue * quantityValue;

    const newListing = {
      item,
      price: `₹${priceValue}/${unit}`,
      priceValue,
      quantity: `${quantityValue} ${unit}`,
      quantityValue,
      total,
      date,
      emoji,
    };

    const res = await fetch("http://localhost:5000/api/seller/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newListing),
    });

    if (res.ok) {
      setItem("");
      setPrice(100);
      setQuantity(1);
      setEmoji("🌽");
      setDate(new Date().toLocaleDateString("en-GB"));
      fetchListings();
    } else {
      console.error("Failed to add listing");
    }
  };

  // 🧹 Handle Deletion
  const handleDeleteListing = async (id) => {
    const res = await fetch(`http://localhost:5000/api/seller/listings/${id}`, {
      method: "DELETE",
    });
    console.log(id);

    if (res.ok) {
      // Remove the deleted item from the local state (UI update)
      setListings((prevListings) => prevListings.filter((listing) => listing._id !== id));
    } else {
      console.error("Failed to delete listing");
    }
  };

  const buyerRequests = [
    { id: 1, name: "Raju", location: "Nadia", request: "Wants 10kg onions" },
    { id: 2, name: "Sima", location: "Howrah", request: "Looking to barter tomatoes" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">🌾 KrishiBondhu – Seller Dashboard</h1>

      {/* Add New Listing Form */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">➕ Add New Listing</h2>
        <form onSubmit={handleAddListing} className="space-y-4 bg-gray-50 p-4 rounded-xl shadow-sm border">
          <input
            type="text"
            placeholder="Item Name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block font-medium">Select an Emoji:</label>
          <select
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="🌽">🌽 Corn</option>
            <option value="🍅">🍅 Tomato</option>
            <option value="🥔">🥔 Potato</option>
            <option value="🥕">🥕 Carrot</option>
            <option value="🧅">🧅 Onion</option>
            <option value="🫑">🫑 Bell Pepper</option>
            <option value="🍆">🍆 Brinjal</option>
            <option value="🥒">🥒 Cucumber</option>
            <option value="🥬">🥬 Leafy Greens</option>
            <option value="🥦">🥦 Broccoli</option>
            <option value="🍠">🍠 Sweet Potato</option>
            <option value="🍌">🍌 Banana</option>
            <option value="🍍">🍍 Pineapple</option>
            <option value="🍉">🍉 Watermelon</option>
            <option value="🍇">🍇 Grapes</option>
            <option value="🍎">🍎 Apple</option>
            <option value="🍊">🍊 Orange</option>
            <option value="🍋">🍋 Lemon</option>
            <option value="🥭">🥭 Mango</option>
            <option value="🍓">🍓 Strawberry</option>
          </select>

          <label className="block font-medium">
            Price: ₹{price} <span className="text-sm text-gray-500">/{unit}</span>
          </label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full"
          />

          <label className="block font-medium">
            Quantity ({unit}):
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <p className="text-lg font-semibold mt-2">
            Total: ₹{price * quantity}
          </p>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add Listing
          </button>
        </form>
      </section>

      {/* Seller Listings */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">📦 Your Listings</h2>
        {loading ? (
          <p className="text-gray-500">Loading listings...</p>
        ) : listings.length === 0 ? (
          <p className="text-gray-500">No listings found.</p>
        ) : (
          <div className="space-y-3">
            {listings.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border"
              >
                <div className="flex gap-3 items-center">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-medium">{item.item}</p>
                    <p className="text-sm text-gray-600">{item.price} — {item.quantity}</p>
                    <p className="text-sm font-semibold">Total: {item.total}</p>
                    <p className="text-xs text-gray-400">Posted on: {item.date}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteListing(item._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  🗑️ Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Buyer Requests */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">🛍️ Incoming Buyer Requests</h2>
        {buyerRequests.map((req) => (
          <div
            key={req.id}
            className="bg-white p-4 rounded-xl shadow-sm border mb-3"
          >
            <p className="font-semibold">{req.name} from {req.location}</p>
            <p className="text-sm text-gray-700">{req.request}</p>
            <button className="text-green-600 hover:underline mt-1 text-sm">
              📞 Contact
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

