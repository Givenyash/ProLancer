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
.addEventListener("keypress",function(e){

    if(e.key==="Enter"){
        searchFreelancer();
    }

});

function goCategory(category){
    localStorage.setItem("category",category);
    window.location.href="16_marketplace.html";
}

loadFeaturedFreelancers();

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
                price: gig.price
            };

        }

        sellerMap[id].totalGigs++;

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

            <p>${item.category}</p>

            <h5>${item.totalGigs} Active Gigs</h5>

            <button onclick="viewSeller('${item.seller._id}')">
                View Profile
            </button>

        </div>

        `;

    });

}