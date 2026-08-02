const token = localStorage.getItem("token");

if (!token) {

  alert("Please Login First");

  window.location.href = "4_sign_in.html";

}

const name = localStorage.getItem("userName");

if (name) {

  document.getElementById("clientName").innerText = name;

}

function becomeSeller() {
  localStorage.setItem("role", "seller");
  window.location.href = "6_profile_overview.html";
}

function logout() {

  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userName");
  localStorage.removeItem("gigId");

  alert("Logged Out Successfully");

  window.location.href = "4_sign_in.html";

}

function searchFreelancer() {

  const keyword = document
    .getElementById("searchInput")
    .value
    .trim();

  if (keyword === "") return;

  localStorage.setItem("searchKeyword", keyword);

  window.location.href = "16_marketplace.html";

}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
      searchFreelancer();
    }

  });

function goCategory(category) {
  localStorage.setItem("category", category);
  window.location.href = "16_marketplace.html";
}

async function loadFeaturedFreelancers() {

  try {

    const response = await fetch("http://localhost:5000/api/gigs");

    const data = await response.json();

    if (!data.success) return;

    displayFeaturedFreelancers(data.gigs);

  }

  catch (error) {

    console.log(error);

  }

}

function displayFeaturedFreelancers(gigs) {

  const container = document.getElementById("featuredFreelancers");
  container.innerHTML = "";

  // Count gigs of every seller
  const sellerMap = {};

  gigs.forEach(gig => {

    const id = gig.sellerId._id;

    if (!sellerMap[id]) {

      sellerMap[id] = {
        seller: gig.sellerId,
        totalGigs: 0,
        category: gig.category,
        price: gig.price,
        badge: ""
      };

    }

    sellerMap[id].totalGigs++;
    if (sellerMap[id].totalGigs >= 3) {
      sellerMap[id].badge = "🏅 Top Seller";
    }

  });

  // Convert object to array
  const sellers = Object.values(sellerMap);

  // Highest gigs first
  sellers.sort((a, b) => b.totalGigs - a.totalGigs);

  // Show only top 3
  sellers.slice(0, 3).forEach(item => {

    container.innerHTML += `

        <div class="card">

            <i class="fa-solid fa-user"></i>

            <h3>${item.seller.name}</h3>
            ${item.badge ? `<p class="seller-badge">${item.badge}</p>` : ""}

            <p>${item.category}</p>

            <h5>${item.totalGigs} Active Gigs</h5>

            <button onclick="viewSeller('${item.seller._id}')">
                View Profile
            </button>

        </div>

        `;

  });

}

function viewSeller(id) {
  localStorage.setItem("sellerId", id);
  window.location.href = "16_marketplace.html";
}


async function loadRecentGigs() {

  const recentIds =
    JSON.parse(localStorage.getItem("recentGigs")) || [];

  if (recentIds.length === 0)
    return;

  const response = await fetch(
    "http://localhost:5000/api/gigs"
  );

  const data = await response.json();

  if (!data.success)
    return;

  const container =
    document.getElementById("recentContainer");

  container.innerHTML = "";

  recentIds.forEach(id => {

    const gig = data.gigs.find(g => g._id === id);

    if (!gig)
      return;

    container.innerHTML += `

        <div class="card">

            <i class="fa-solid fa-clock-rotate-left"></i>

            <h3>${gig.title}</h3>

            <p>${gig.category}</p>

            <h4>₹${gig.price}</h4>

            <button onclick="window.location.href='17_gig_details.html'; localStorage.setItem('gigId','${gig._id}')">
                View Again
            </button>

        </div>

        `;

  });

}

document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedFreelancers();
  loadRecentGigs();
  loadNewestGigs();
});

async function loadNewestGigs() {

  try {

    const response = await fetch(
      "http://localhost:5000/api/gigs"
    );

    const data = await response.json();

    if (!data.success) return;

    displayNewestGigs(data.gigs);

  }

  catch (error) {

    console.log(error);

  }

}

function displayNewestGigs(gigs) {

  const container =
    document.getElementById("recentGigs");

  container.innerHTML = "";

  // If timestamps exist
  gigs.sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });

  gigs.slice(0, 3).forEach(gig => {

    container.innerHTML += `

        <div class="card">

            <i class="fa-solid fa-briefcase"></i>

            <h3>${gig.title}</h3>

            <p>${gig.category}</p>

            <h4>₹${gig.price}</h4>

            <button onclick="viewGig('${gig._id}')">

                View Gig

            </button>

        </div>

        `;

  });

}
function viewGig(id) {

  localStorage.setItem("gigId", id);

  window.location.href = "17_gig_details.html";

}

// ---------- Dark Mode ----------

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

function toggleTheme(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }
    else{

        localStorage.setItem("theme","light");

    }

}