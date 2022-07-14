const searchInput = document.querySelector(".search-input");
const items = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (e) => {
  const searchQuery = e.target.value.toLowerCase();
  items.forEach((item) => {
    const currentItem = item.textContent.toLowerCase();
    if (currentItem.includes(searchQuery)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
