document.addEventListener("DOMContentLoaded", () => {
    const pizzaList = document.getElementById("pizza-list");

    fetch("https://shift-intensive.ru/api/pizza/catalog")
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                renderPizzas(data.catalog);
            } else {
                console.error("Ошибка загрузки каталога пицц");
            }
        })
        .catch(error => console.error("Ошибка запроса:", error));

    function renderPizzas(pizzas) {
        pizzaList.innerHTML = ""; 

        pizzas.forEach(pizza => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div class="card-img">
                    <img class="card-image" src="https://shift-intensive.ru/api${pizza.img}" alt="${pizza.name}">
                </div>
                <div class="card-desc">
                    <div class="card-title">${pizza.name}</div>
                    <div class="card-description">${pizza.description}</div>
                    <div class="card-price">От ${pizza.sizes[0].price} ₽</div>
                    <button type="button" class="card-button">Выбрать</button>
                </div>
                
            `;

            pizzaList.appendChild(card);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".popup-close");
    const popupBody = document.querySelector(".popup-body");

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("card-button")) {
            popup.style.display = "flex";
        }
    });

    closeBtn.addEventListener("click", () => {
        console.log("Closing popup");
        popup.style.display = "none";
    });
    
    popup.addEventListener("click", (event) => {
        if (!popupBody.contains(event.target)) { 
            popup.style.display = "none";
        }
    });
});




   
