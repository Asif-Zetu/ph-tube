function loadCategories() {
  //1.fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2.convert promise into json
    .then((res) =>
      res
        .json()
        //3.send data to display
        .then((data) => displayCategories(data.categories))
    );
}

function displayCategories(categories) {
  //get the container
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    console.log(cat);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    categoryContainer.appendChild(categoryDiv);
  }
}
loadCategories();
