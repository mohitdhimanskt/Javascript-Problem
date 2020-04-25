function takeOutLemons(basket) {
    const basketWithoutLemon = basket.filter( fruit => {
      return fruit.toLowerCase() !== 'lemon';
    });
    return basketWithoutLemon;
  }
  
  const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];