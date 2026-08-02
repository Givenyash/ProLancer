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