fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    
    function createCard () {
      data.forEach(element => {
        const image = element.img;
        let title = element.title
        const price = element.price;
        let card = document.createElement('div');
        card.className = 'card mx-1 my-2  ';
        card.style.width = '18rem';
        var images = document.createElement('img');
        images.src = image;
        images.className = 'card-img-top img';
        images.alt = '...';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column ';
  
        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = title;
  
        var cardLink = document.createElement('btn');
        cardLink.className = 'btn btn-primary mt-auto add-to-cart';
        cardLink.textContent = '€ ' + price + ' Aggiungi al carrello';
  
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardLink);
  
        card.appendChild(images);
        card.appendChild(cardBody);
  
        let container = document.querySelector('.book');
        container.appendChild(card);
  
      })
      
    }
     createCard() 
     function filterResults(searchValue) {
      const filteredItems = data.filter(item => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });

      displayFilteredItems(filteredItems);
    }
    function displayFilteredItems(filteredItems) {
      const container = document.querySelector('.book');
      container.innerHTML = '';

      filteredItems.forEach(element => {
        const image = element.img;
        let title = element.title
        const price = element.price;
        let card = document.createElement('div');
        card.className = 'card mx-1 my-2  ';
        card.style.width = '18rem';
        var images = document.createElement('img');
        images.src = image;
        images.className = 'card-img-top img';
        images.alt = '...';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column ';
  
        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = title;
  
        var cardLink = document.createElement('btn');
        cardLink.className = 'btn btn-primary mt-auto add-to-cart';
        cardLink.textContent = '€ ' + price + ' Aggiungi al carrello';
  
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardLink);
  
        card.appendChild(images);
        card.appendChild(cardBody);
  
        let container = document.querySelector('.book');
        container.appendChild(card);
      });
    }
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
      const searchValue = this.value;
      if (searchValue.length >= 3) {
        filterResults(searchValue);
      } else {
        createCard();
      }
    })
   })
  .catch(error => {
    console.error('Si è verificato un errore durante la richiesta API:', error) })

  
  setTimeout(function () {
    function cart() {
      let cartItems = [];
  
      function addToCart(title) {
        cartItems.push(title);
        displayCartItems();
        let button = event.target;
        let card = button.parentNode.parentNode;
        card.classList.add('added-to-cart')
      }
  
      function displayCartItems() {
        let cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = '';
  
        cartItems.forEach(function (item) {
          let li = document.createElement('li');
          li.textContent = item;
          cartItemsElement.appendChild(li);
        });
      }
      let addToCartButtons = document.querySelectorAll('.add-to-cart');
      addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          let title = this.parentNode.querySelector('.card-title').textContent;
          addToCart(title);
          alert('Hai aggiunto al carrello il libro: ' + title);
        });
      });
    }
  
    cart();
  
  }, 300);

  










