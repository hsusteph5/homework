document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const favFormEl = document.getElementById("fav-form");
  favFormEl.addEventListener("submit", event => {
    event.preventDefault();

    const favInputEl = document.getElementsByClassName("favorite-input")
    const favInput = favInputEl[0].value;

    favInputEl.value = "";

    const ul = document.getElementById("restaurants");
    const li = document.createElement("li");
    li.textContent = favInput;

    ul.appendChild(li);
  });


  // adding new photos
  const togglePhoto = document.getElementsByClassName("photo-show-button");
  togglePhoto.addEventListener("click", event => {
    event.preventDefault();
    

    ul.appendChild(li);
  });



});
