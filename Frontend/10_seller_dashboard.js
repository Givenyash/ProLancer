window.onload = function () {

    let greeting = document.getElementById("greetingText");

    let hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerHTML = "Good Morning ☀️, Yash";
    }

    else if (hour < 17) {
        greeting.innerHTML = "Good Afternoon 🌤️, Yash";
    }

    else {
        greeting.innerHTML = "Good Evening 🌙, Yash";
    }

};


// ======================================
// jQuery Starts
// ======================================

$(document).ready(function () {

    console.log("Seller Dashboard Loaded Successfully.");

    // ----------------------------
    // Quick Action Card Hover Effect
    // ----------------------------

    $(".quick-card").hover(

        function () {

            $(this).css("border", "2px solid #1dbf73");

        },

        function () {

            $(this).css("border", "1px solid #e4e5e7");

        }

    );


    // ----------------------------
    // Search Button
    // ----------------------------

    $(".btn-success").first().click(function (e) {

        e.preventDefault();

        let searchText = $(".search-input").val().trim();

        if (searchText == "") {

            alert("Please enter something to search.");

        }

        else {

            alert("Searching for : " + searchText);

        }

    });


    // ----------------------------
    // Create Gig Button
    // ----------------------------

    $("#createGig").click(function () {

        alert("Create Gig Page Coming Soon!");

        // Future
        // window.location.href = "11_create_gig.html";

    });


    // ----------------------------
    // Apply Buttons
    // ----------------------------

    $(".project-card button").click(function () {

        let projectName = $(this).closest(".project-card").find("h5").text();

        alert("Applied Successfully for\n\n" + projectName);

    });


    // ----------------------------
    // Category Buttons
    // ----------------------------

    $(".category-container button").click(function () {

        let category = $(this).text();

        alert("Showing " + category + " Projects");

    });


    // ----------------------------
    // Complete Profile Button
    // ----------------------------

    $(".profile-card .btn-success").click(function () {

        alert("Redirecting to Complete Profile Page...");

    });


    // ----------------------------
    // Navbar Links
    // ----------------------------

    $(".nav-link").click(function (e) {

        e.preventDefault();

        let page = $(this).text();

        alert(page + " Page Coming Soon!");

    });


});


// ======================================
// DOM Manipulation
// ======================================

// Change Welcome Card Background Slightly on Click

let welcomeCard = document.querySelector(".welcome-card");

welcomeCard.addEventListener("click", function () {

    welcomeCard.style.background = "#eefcf5";

    setTimeout(function () {

        welcomeCard.style.background = "#ffffff";

    }, 500);

});


// ======================================
// BOM Manipulation
// ======================================

// Display Current Date

let today = new Date();

console.log("Today's Date : " + today.toDateString());


// Browser Information

console.log("Browser : " + navigator.userAgent);


// Current URL

console.log("Current URL : " + window.location.href);


// ======================================
// Fake Notification Counter
// ======================================

let notificationCount = 3;

console.log("Notifications :", notificationCount);


// ======================================
// Progress Animation
// ======================================

let progressBar = document.querySelector(".progress-bar");

let width = 0;

let progressAnimation = setInterval(function () {

    if (width >= 80) {

        clearInterval(progressAnimation);

    }

    else {

        width++;

        progressBar.style.width = width + "%";

    }

}, 15);


// ======================================
// Table Row Highlight
// ======================================

let rows = document.querySelectorAll("tbody tr");

rows.forEach(function (row) {

    row.addEventListener("mouseenter", function () {

        row.style.cursor = "pointer";

    });

});