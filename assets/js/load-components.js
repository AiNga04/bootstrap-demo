// Hàm tải nội dung HTML từ file và chèn vào phần tử có ID tương ứng
function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error(`Không thể tải file: ${file}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Tải header và footer
loadHTML("./_navbar.html", "navbar");
loadHTML("./_contact.html", "contact");
loadHTML("./_footer.html", "footer");
