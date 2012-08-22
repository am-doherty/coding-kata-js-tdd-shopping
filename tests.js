var itemDetails = {'A':0.50,'B':0.30,'C':0.20,'D':0.15};
test("I scan one of Item 'A'", function() {
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("A");
		equal(basket.getTotal(),0.5, "I scan a single item 'A' into an empty basket, the basket total then equals 0.5");
});
test("I scan one of Item 'B'", function() {		
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("B");
		equal(basket.getTotal(),0.3, "I scan a single item 'B' into an empty basket, the basket total then equals 0.3");
});
test("I scan one of Item 'C'", function() {		
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("C");
		equal(basket.getTotal(),0.2, "I scan a single item 'C' into an empty basket, the basket total then equals 0.2");
});
test("I scan one of Item 'D'", function() {		
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("D");
		equal(basket.getTotal(),0.15, "I scan a single item 'D' into an empty basket, the basket total then equals 0.15");
});
test("I scan two items, an 'A' and a 'B'", function() {		
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("A");
		basket.scan("B");
		equal(basket.getTotal(),0.8, "I scan a single item 'D' into an empty basket, the basket total then equals 0.80");
});
test("I scan multiple, varied items", function() {		
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("A"); 
		basket.scan("B");
		basket.scan("C");		
		basket.scan("B");
		basket.scan("C"); 
		basket.scan("C"); 
		basket.scan("D");		
		basket.scan("A"); 
		basket.scan("D"); 
		equal(basket.getTotal(),2.50, "I scan..A,B,C,B,C,C,D,A,D and derive a total of 2.50");
});
test("I scan three A items", function() {	 
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("A"); 
		basket.scan("A");
		basket.scan("A"); 
		equal(basket.getTotal(),1.30, "I scan three A's and derive a total of 1.30");
});
test("I scan two B items", function() {	 
		var basket = new ShoppingBasket(itemDetails);
		basket.scan("B"); 
		basket.scan("B");
		equal(basket.getTotal(),.45, "I scan two B's and derive a total of 0.45");
});


 



 