function goBack() {
  window.history.back();
}

async function finishSetup() {
  const fullName = document.getElementById("fullName").value.trim();
  const profession = document.getElementById("title").value.trim();
  const country = document.getElementById("country").value.trim();
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value.trim();
  const portfolio = document.getElementById("portfolio").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();
  const bio = document.getElementById("bio").value.trim();

  if (!fullName || !profession || !country || !skills || !bio) {
    alert("Please fill all required fields.");
    return;
  }

  const profile = {
    fullName,
    profession,
    country,
    experience,
    skills,
    portfolio,
    linkedin,
    bio,
  };

  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/api/seller/profile", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(profile),
    });

    const data = await response.json();

    if (data.success) {
      alert("Seller Profile Created Successfully!");

      window.location.href = "10_seller_dashboard.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Server Error");

    console.log(error);
  }
}
