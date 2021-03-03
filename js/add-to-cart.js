// import mockData from "./mock-data.json";

window.onload = () => {
  const $ = (selector) => document.querySelector(selector);

  const cartItems = [];
  const $List = $(".list");
  const $ItemCount = $(".item-count");
  const $NoItems = $(".no-items");
  const $TotalContainer = $(".total-container");
  const $SubTotal = $(".sub-total");
  const $GST = $(".gst");
  const $Total = $(".total");
  const GST_RATE = 0.12;

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
                  <button class="add-btn" data-price=${price}>ADD</button>
                </div>
              </div>
            </li>`;
  });

  $List.innerHTML = menuItems.join("");

  const btns = document.querySelectorAll(".add-btn");
  btns.forEach((btn) => {
    // btn.onclick = addItemToCart; // why it does not work
    btn.addEventListener("click", function (e) {
      addItemToCart(e);
      updateCart();
    });
  });

  const addItemToCart = function (e) {
    const itemPrice = e.target.dataset.price;
    cartItems.push({ price: itemPrice });
  };

  const updateCart = function () {
    if (cartItems.length > 0) {
      toggleCartView();
    }
    const cartItemsPrice = cartItems.map((item) => {
      return Number(item.price);
    });
    const subTotal = cartItemsPrice.reduce((acc, cur) => {
      return acc + cur;
    });

    const GST = Number(subTotal * GST_RATE).toFixed(2);
    const total = Number(subTotal) + Number(GST);

    $ItemCount.innerHTML = cartItems.length;
    $SubTotal.innerHTML = `${subTotal.toFixed(2)}`;
    $GST.innerHTML = `${GST}`;
    $Total.innerHTML = `₹${total.toFixed(2)}`;
  };

  const toggleCartView = function () {
    if ($TotalContainer.classList.contains("hidden")) {
      $NoItems.classList.toggle("hidden");
      $TotalContainer.classList.toggle("hidden");
    }
  };
};
