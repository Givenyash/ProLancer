function goToSignIn(){
    window.location.href = "4_sign_in.html";
}

function goToJoin(){
    window.location.href = "5_join.html";
}

function goToAbout(){
    window.location.href = "20_about.html";
}

function searchCategory(category) {
    localStorage.setItem("category", category);
    window.location.href = "16_marketplace.html";
}

function searchHome() {

    const input = document.getElementById("searchInput");

    const keyword = input.value.trim();

    if (keyword === "") {
        return;
    }

    localStorage.setItem("searchKeyword", keyword);

    // Clear the search box
    input.value = "";

    window.location.href = "16_marketplace.html";

}

document.getElementById("searchInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        searchHome();

    }

});