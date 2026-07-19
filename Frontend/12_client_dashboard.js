const name = localStorage.getItem("userName");

if (name) {
  document.getElementById("clientName").innerHTML = name;
}

function logout() {
  localStorage.clear();
  window.location.href = "2_sign_in.html";
}

function becomeSeller() {
  localStorage.setItem("role", "seller");
  window.location.href = "6_profile_overview.html";
}
