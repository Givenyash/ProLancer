const token = localStorage.getItem("token");

if (!token) {

  alert("Please Login First");

  window.location.href = "4_sign_in.html";

}

window.onload = function () {

  const sellerName = localStorage.getItem("userName") || "Seller";

  document.getElementById("navbarUsername").innerText = sellerName;

  const greeting = document.getElementById("greetingText");

  const hour = new Date().getHours();

  if (hour < 12) {

    greeting.innerHTML = `Good Morning ☀️, ${sellerName}`;

  }

  else if (hour < 17) {

    greeting.innerHTML = `Good Afternoon 🌤️, ${sellerName}`;

  }

  else {

    greeting.innerHTML = `Good Evening 🌙, ${sellerName}`;

  }

};

// jQuery Starts

$(document).ready(function () {
  console.log("Seller Dashboard Loaded Successfully.");

  // Quick Action Card Hover Effect
  $(".quick-card").hover(
    function () {
      $(this).css("border", "2px solid #1dbf73");
    },
    function () {
      $(this).css("border", "1px solid #e4e5e7");
    },
  );

  // Search Button
  $(".search-form").submit(function (e) {

    e.preventDefault();

    const keyword = $(".search-input").val().trim();

    if (keyword === "") {

      alert("Please enter something.");

      return;

    }

    localStorage.setItem("searchKeyword", keyword);

    window.location.href = "16_marketplace.html";

  });

  // Apply Buttons
  $(".project-card button").click(function () {
    let projectName = $(this).closest(".project-card").find("h5").text();
    alert("Applied Successfully for\n\n" + projectName);
  });

  // Category Buttons
  $(".category-container button").click(function () {
    let category = $(this).text();
    alert("Showing " + category + " Projects");
  });

  // Complete Profile Button
  document.querySelector(".profile-card .btn-success")
      .addEventListener("click", function () {
      window.location.href = "9_create_seller_profile.html";
    });

  // Navbar Links
  document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function (e) {

      const text = this.innerText.trim();

      if (text === "Explore") {

        window.location.href = "16_marketplace.html";

      }

      else if (text === "Projects") {

        window.location.href = "19_seller_orders.html";

      }

      else if (text === "Messages") {

        alert("Messaging feature will be added in Phase 7");

      }

    });

  });
});

// Create Gig Button
function goToCreateGig() {
  window.location.href = "13_create_gig.html";
}
// Manage Gig button
function goToManageGig() {
  window.location.href = "14_manage_gigs.html";
}

function goToSellerOrders() {
  window.location.href = "19_seller_orders.html";
}

// DOM Manipulation
// Change Welcome Card Background Slightly on Click

let welcomeCard = document.querySelector(".welcome-card");

welcomeCard.addEventListener("click", function () {
  welcomeCard.style.background = "#eefcf5";

  setTimeout(function () {
    welcomeCard.style.background = "#ffffff";
  }, 500);
});

// BOM Manipulation

// Display Current Date
let today = new Date();
console.log("Today's Date : " + today.toDateString());

// Browser Information
console.log("Browser : " + navigator.userAgent);

// Current URL
console.log("Current URL : " + window.location.href);

// Fake Notification Counter
let notificationCount = 3;
console.log("Notifications :", notificationCount);

// Progress Animation
let progressBar = document.querySelector(".progress-bar");

let width = 0;
let progressAnimation = setInterval(function () {
  if (width >= 80) {
    clearInterval(progressAnimation);
  } else {
    width++;

    progressBar.style.width = width + "%";
  }
}, 15);

// Table Row Highlight

let rows = document.querySelectorAll("tbody tr");

rows.forEach(function (row) {
  row.addEventListener("mouseenter", function () {
    row.style.cursor = "pointer";
  });
});

loadStatistics();

async function loadStatistics() {

  try {

    const token = localStorage.getItem("token");

    // Load Seller Gigs
    const gigResponse = await fetch(
      "http://localhost:5000/api/gigs/my",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const gigData = await gigResponse.json();

    // Load Seller Orders
    const orderResponse = await fetch(
      "http://localhost:5000/api/orders/seller",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const orderData = await orderResponse.json();

    if (gigData.success) {

      document.getElementById("totalGigs").innerText =
        gigData.gigs.length;

    }

    if (orderData.success) {

      const pending = orderData.orders.filter(
        order => order.status === "Pending"
      ).length;

      const completed = orderData.orders.filter(
        order => order.status === "Completed"
      ).length;

      document.getElementById("pendingOrders").innerText =
        pending;

      document.getElementById("completedOrders").innerText =
        completed;

    }

  }

  catch (error) {

    console.log(error);

  }

}

function logout() {
  localStorage.clear();
  alert("Logged Out Successfully");
  window.location.href = "4_sign_in.html";
}

function showNotifications() {
  alert("No new notifications.");
}

function goToMessages() {
  alert("Messaging module coming soon.");
}