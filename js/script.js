document.addEventListener("DOMContentLoaded", function() {
    window.location.href="loading.html";
    // Check if there is a user data in localStorage or a cookie
    const userData = localStorage.getItem("userData"); // You can replace "userData" with your specific key
    if (!userData) {
        window.location.href = "Login.html";
    }
    else{
        window.location.href="index.html"
    }
});
