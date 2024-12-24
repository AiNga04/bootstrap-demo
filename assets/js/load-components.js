// Navbar
fetch("./_navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading navbar:", error);
  });

// Contact
fetch("./_contact.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("contact").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading contact:", error);
  });

// Footer
fetch("./_footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading footer:", error);
  });
