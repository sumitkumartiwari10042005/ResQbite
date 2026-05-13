export default function FoodRescueApp() {
  const rescueDeals = [
    {
      shop: 'Pizza Hub',
      item: 'Farmhouse Pizza',
      oldPrice: '₹320',
      newPrice: '₹149',
      time: '32 mins left',
      stock: 6,
    },
    {
      shop: 'Sharma Ji Foods',
      item: 'Paneer Thali',
      oldPrice: '₹180',
      newPrice: '₹79',
      time: '18 mins left',
      stock: 12,
    },
    {
      shop: 'Burger Town',
      item: 'Veg Burger Combo',
      oldPrice: '₹240',
      newPrice: '₹99',
      time: '45 mins left',
      stock: 8,
    },
  ];

  const connectedApps = [
    {
      name: 'Zomato',
      status: 'Connected',
    },
    {
      name: 'Swiggy',
      status: 'Connected',
    },
    {
      name: 'MagicPin',
      status: 'Pending',
    },
  ];

  const donationQueue = [
    {
      item: 'Veg Biryani',
      quantity: '22 Boxes',
      receiver: 'Happy Paws Shelter',
      pickup: '11:20 PM',
    },
    {
      item: 'Milk Bread',
      quantity: '14 Packs',
      receiver: 'Gau Seva Dham',
      pickup: '10:50 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="bg-black text-white px-8 py-5 flex items-center justify-between shadow-xl">
        <div>
          <h1 className="text-3xl font-black tracking-tight">ResQbite</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Surplus food marketplace + donation network
          </p>
        </div>

        <div className="flex gap-3">
          <button className="border border-zinc-700 px-4 py-2 rounded-xl hover:bg-zinc-900 transition">
            Login
          </button>

          <button className="bg-orange-500 px-5 py-2 rounded-xl font-bold hover:bg-orange-600 transition">
            Partner With Us
          </button>
        </div>
      </header>

      <main className="p-8 grid lg:grid-cols-4 gap-6">
        <section className="lg:col-span-3 space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-xl">
            <div className="max-w-3xl">

              <p className="uppercase tracking-[4px] text-sm text-orange-100 font-semibold">
                Multi-App Food Rescue Platform
              </p>

              <h2 className="text-5xl font-black leading-tight mt-3">
                Order smarter. Save money. Rescue food before it gets wasted.
              </h2>

              <p className="mt-5 text-lg text-orange-100 leading-relaxed">
                Connect Zomato, Swiggy and local restaurants in one place.
                Buy discounted closing-time meals and automatically redirect
                unsold food to NGOs, shelters and gaushalas.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-white text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition">
                  Explore Deals
                </button>

                <button className="border border-white px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-black transition">
                  List Surplus Food
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  Unified Food Ordering
                </div>

                <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  Last-Minute Rescue Deals
                </div>

                <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  NGO Donation Routing
                </div>
              </div>

            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-5">

            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <p className="text-zinc-500 text-sm">Meals Saved</p>
              <h3 className="text-4xl font-black mt-2">12.4K</h3>
              <p className="text-green-600 mt-2 font-semibold">+28% this month</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <p className="text-zinc-500 text-sm">Money Saved</p>
              <h3 className="text-4xl font-black mt-2">₹8.2L</h3>
              <p className="text-blue-600 mt-2 font-semibold">By customers</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <p className="text-zinc-500 text-sm">Food Donated</p>
              <h3 className="text-4xl font-black mt-2">2.1 Tons</h3>
              <p className="text-purple-600 mt-2 font-semibold">Still consumable</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <p className="text-zinc-500 text-sm">Partner Shops</p>
              <h3 className="text-4xl font-black mt-2">187</h3>
              <p className="text-orange-600 mt-2 font-semibold">Growing daily</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-black">
                  Order From Any Platform
                </h3>

                <p className="text-zinc-500 mt-1">
                  Compare prices and track orders across apps in one dashboard.
                </p>
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-xl font-semibold">
                Connect Apps
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {connectedApps.map((app, index) => (
                <div
                  key={index}
                  className="border border-zinc-200 rounded-2xl p-5 hover:shadow-lg transition"
                >
                  <h4 className="text-2xl font-black">{app.name}</h4>

                  <p className="text-zinc-500 mt-3 text-sm">
                    Browse menus, compare prices and manage orders.
                  </p>

                  <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-xl font-bold">
                    Open {app.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-black">Live Rescue Deals</h3>
                <p className="text-zinc-500 mt-1">
                  Last-minute discounted meals near you
                </p>
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-xl font-semibold">
                View All
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {rescueDeals.map((deal, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-zinc-200 overflow-hidden hover:shadow-xl transition bg-zinc-50"
                >
                  <div className="h-44 bg-gradient-to-br from-orange-400 to-red-500"></div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-zinc-500 font-medium">
                        {deal.shop}
                      </p>

                      <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-bold">
                        {deal.time}
                      </span>
                    </div>

                    <h4 className="text-2xl font-black mt-3 leading-tight">
                      {deal.item}
                    </h4>

                    <div className="flex items-center gap-3 mt-4">
                      <p className="text-zinc-400 line-through text-lg">
                        {deal.oldPrice}
                      </p>

                      <p className="text-3xl font-black text-green-600">
                        {deal.newPrice}
                      </p>
                    </div>

                    <p className="mt-3 text-zinc-500 text-sm">
                      Only {deal.stock} left
                    </p>

                    <button className="mt-5 w-full bg-black text-white py-3 rounded-2xl font-bold hover:bg-zinc-800 transition">
                      Reserve Pickup
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    Restaurant Dashboard
                  </h3>
                  <p className="text-zinc-500 mt-1">
                    Manage integrations and surplus food
                  </p>
                </div>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold">
                  Add Surplus
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {connectedApps.map((app, index) => (
                  <div
                    key={index}
                    className="border border-zinc-200 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xl font-bold">{app.name}</h4>
                      <p className="text-zinc-500 text-sm mt-1">
                        Delivery platform connected
                      </p>
                    </div>

                    <div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold ${app.status === 'Connected'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                          }`}
                      >
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-zinc-100 rounded-2xl p-5">
                <h4 className="font-black text-lg">
                  Automatic Price Drop Rules
                </h4>

                <div className="space-y-3 mt-4 text-sm">
                  <div className="flex items-center justify-between">
                    <p>45 mins before closing</p>
                    <span className="font-bold text-orange-600">20% OFF</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p>20 mins before closing</p>
                    <span className="font-bold text-red-600">50% OFF</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p>Still unsold?</p>
                    <span className="font-bold text-green-600">
                      Move to Donation Queue
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black">Donation Queue</h3>
                  <p className="text-zinc-500 mt-1">
                    Remaining food redirected automatically
                  </p>
                </div>

                <button className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold">
                  Open Map
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {donationQueue.map((item, index) => (
                  <div
                    key={index}
                    className="border border-zinc-200 rounded-2xl p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold">{item.item}</h4>

                      <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-bold">
                        Pickup Scheduled
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm text-zinc-600">
                      <p>Quantity: {item.quantity}</p>
                      <p>Receiver: {item.receiver}</p>
                      <p>Pickup Time: {item.pickup}</p>
                    </div>

                    <button className="mt-5 bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition">
                      Track Delivery
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="bg-black text-white rounded-3xl p-6 shadow-xl">
            <p className="uppercase tracking-[3px] text-zinc-500 text-xs font-bold">
              Mission
            </p>

            <h3 className="text-3xl font-black leading-tight mt-3">
              Waste less. Recover more.
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Restaurants lose money throwing food away while millions struggle
              with food affordability. LastStock converts surplus into a live
              marketplace first — donation network second.
            </p>

            <div className="mt-6 bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
              <p className="text-zinc-500 text-sm">Potential Annual Impact</p>
              <h4 className="text-5xl font-black mt-2">1M+</h4>
              <p className="text-zinc-500 mt-2 text-sm">
                meals rescued from waste
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <h3 className="text-2xl font-black">How It Works</h3>

            <div className="mt-6 space-y-5 text-sm">
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  1
                </div>

                <div>
                  <h4 className="font-bold">Connect Delivery Apps</h4>
                  <p className="text-zinc-500 mt-1">
                    Restaurants connect Swiggy, Zomato or POS systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  2
                </div>

                <div>
                  <h4 className="font-bold">Auto Discount Unsold Food</h4>
                  <p className="text-zinc-500 mt-1">
                    Dynamic pricing starts near shop closing time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  3
                </div>

                <div>
                  <h4 className="font-bold">Customers Reserve Deals</h4>
                  <p className="text-zinc-500 mt-1">
                    Nearby users reserve discounted meals instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  4
                </div>

                <div>
                  <h4 className="font-bold">Donate Remaining Stock</h4>
                  <p className="text-zinc-500 mt-1">
                    NGOs, shelters and gaushalas receive unsold food.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm">
            <h3 className="text-2xl font-black">Quick Actions</h3>

            <div className="space-y-3 mt-5">
              <button className="w-full bg-black text-white py-3 rounded-2xl font-semibold">
                Browse Deals
              </button>

              <button className="w-full border border-zinc-300 py-3 rounded-2xl font-semibold">
                Register Restaurant
              </button>

              <button className="w-full border border-zinc-300 py-3 rounded-2xl font-semibold">
                NGO Partnership
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
