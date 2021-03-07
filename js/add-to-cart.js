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
  const $CheckoutBtn = $(".checkout");

  const GST_RATE = 0.12;

  const mockData = [
    { name: "Aloo Tikka Roll", img: "", price: 230 },
    { name: "Veg Haryali Roll", img: "", price: 230 },
    { name: "Paneer Tikka Roll", img: "", price: 250 },
    { name: "Soya Tikka Roll", img: "", price: 240 },
    { name: "Dal Makhani", img: "", price: 175 },
    { name: "Paneer Zaika", img: "", price: 260 },
    { name: "Soya Tawa Masala", img: "", price: 230 },
    { name: "Veg Biryani", img: "", price: 220 },
    { name: "Chicken Tikka Roll", img: "", price: 280 },
    { name: "Chicken Seekh Roll", img: "", price: 270 },
    { name: "Chicken Malai Tikka Roll", img: "", price: 300 },
  ];

  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
    .then((data) => data.json())
    .then((data) => {
      const itemsData = data.meals.map(
        ({ strMeal, strMealThumb, idMeal }, index) => {
          return {
            name: strMeal,
            img: strMealThumb,
            price: mockData[index] ? mockData[index].price : mockData[0].price,
          };
        }
      );
      getMenuCard(itemsData);
    })
    .catch(() => {
      getMenuCard(mockData);
    });

  const getMenuCard = (data) => {
    const menuItems = data.map(({ name, img, price }) => {
      return `<li>
                <div class="menu-item">
                  <div>${name}</div>
                  <img src="${img}" width="100%" style="object-fit: cover"/>
                  <div class="price-container flex-row">
                    <div class="itemPrice">&#8377; ${price}</div>
                    <button class="add-btn" data-price=${price}>ADD</button>
                  </div>
                </div>
              </li>`;
    });
    $List.innerHTML = menuItems.join("");
    addListnerToAddButton();
  };

  const addListnerToAddButton = () => {
    const btns = document.querySelectorAll(".add-btn");
    btns.forEach((btn) => {
      // btn.onclick = addItemToCart; // why it does not work
      btn.addEventListener("click", function (e) {
        addItemToCart(e);
        updateCart();
      });
    });
  };

  $CheckoutBtn.addEventListener("click", function (e) {
    window.location = "login";
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
