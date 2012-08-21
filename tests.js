test("I scan one of Item 'A'", function() {
		var basket = new ShoppingBasket();
		basket.scan("A");
		equal(basket.getTotal,0.5, "I scan a single item 'A' into an empty basket, the basket total then equals 0.5");
});


 