const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector(".cart-btn");

  const openModal = () => {
    modal.classList.add("open");
  };
  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header-close")
    ) {
      closeModal();
    }
  });
};
const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      link: "./pages/tanuki.html",
      img: "./img/restaurants/01.jpg",
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
    },
    {
      id: 1,
      link: "./pages/tanuki.html",
      img: "./img/restaurants/02.jpg",
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 800,
      type: "Пицца",
    },
    {
      id: 2,
      link: "./pages/tanuki.html",
      img: "./img/restaurants/03.jpg",
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 700,
      type: "Пицца",
    },
    {
      id: 3,
      link: "./pages/tanuki.html",
      img: "./img/restaurants/04.jpg",
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 600,
      type: "Пицца",
    },
    {
      id: 4,
      link: "./pages/tanuki.html",
      img: "./img/restaurants/05.jpg",
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 500,
      type: "Пицца",
    },
    {
      id: 5,
      link: "./pages/tanuki.html",
      img: "./img/restaurants/06.jpg",
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 400,
      type: "Пицца",
    },
  ];

  const loading = () => {
    container.innerHTML = '<p style="width: 100%;">Loading ...</p>';
  };
  const renderRests = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
          <a href=${card.link}  class="restaurants-item" aria-label="restaurants item block"> 
              <img src=${card.img} alt=${card.title} class="restaurants-item__img">
              <div class="restaurants-item__block1" aria-label="item block 1">          
                <h2 class="restaurants-item__block1-name">${card.title}</h2>
                <p class="restaurants-item__block1-time">${card.time} мин</p>            
              </div>                      
              <div class="restaurants-item__block2" aria-label="item block 2">          
                 <div class="restaurants-item__block2-rating" aria-label="item block 2 rating">           
                    <img src="./img/restaurants/rating.svg" alt="rating">            
                    <span>${card.rating}</span>            
                  </div>          
                  <p class="restaurants-item__block2-price">От ${card.price} грн</p>          
                  <p class="restaurants-item__block2-name">${card.type}</p>           
            </div>                      
        </a>                         
      `
      );
    });
  };

  loading();
  setTimeout(() => {
    renderRests(restArray);
  }, 500);
};

modalFunc();
restsFunc();
