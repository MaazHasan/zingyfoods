// import mockData from "./mock-data.json";
window.onload = () => {
  var itemCount = 5;
  const $List = document.querySelector(".list");
  const $ItemCount = document.querySelector(".item-count");
  const $NoItems = document.querySelector(".no-items");
  const $TotalContainer = document.querySelector(".total-container");

  const mockData = [
    { name: "Aloo Tikka Roll", price: 230 },
    { name: "Veg Haryali Roll", price: 230 },
    { name: "Paneer Tikka Roll", price: 250 },
    { name: "Soya Tikka Roll", price: 240 },
    { name: "Dal Makhani", price: 175 },
    { name: "Paneer Zaika", price: 260 },
    { name: "Soya Tawa Masala", price: 230 },
    { name: "Veg Biryani", price: 220 },
    { name: "Chicken Tikka Roll", price: 280 },
    { name: "Chicken Seekh Roll", price: 270 },
    { name: "Chicken Malai Tikka Roll", price: 300 },
  ];

  const menuItems = mockData.map(({ name, price }) => {
    return `<li>
              <div class="menu-item">
                <div>${name}</div>
                <div class="price-container flex-row">
                  <div class="itemPrice">&#8377; ${price}</div>
                  <button class="add-btn">Add</button>
                </div>
              </div>
            </li>`;
  });
  console.log(menuItems);
  $List.innerHTML = menuItems.join("");
  $ItemCount.innerHTML = itemCount;
  if (itemCount > 0) {
    $NoItems.classList.toggle("hidden");
    $TotalContainer.classList.toggle("hidden");
  }
};
