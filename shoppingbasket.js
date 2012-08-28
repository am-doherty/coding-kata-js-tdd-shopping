/*  Shopping Kata
   * Create a shopping basket system that can total up the costs of purchasing:
   * 	ItemA at .50 each
   * 	ItemB at .30 each
   * 	ItemC at .20 each
   *	ItemD at .15 each
   *
   * With offers:
   *	Purchase 3 of ItemA for 1.30
   *	Purchase 2 of ItemB for 0.45
   */
   
/* Global variable of product info (price, discount info) for testing */
var itemDetails = {'A':{'price':.50,'discountmultiple':3,'discount':.20},'B':{'price':.30,'discountmultiple':2,'discount':.15},'C':{'price':.20}, 'D':{'price':.15}};	

/* ShoppingBasket constructor */
function ShoppingBasket(details) {
	var total = 0.0;
	var numItemsScanned = 0;
	var numTypesScanned = [];
	return {
		scan: function(itemAdded){
			numItemsScanned++;
			(typeof numTypesScanned[itemAdded] === "undefined") ? numTypesScanned[itemAdded]=1 : numTypesScanned[itemAdded]+=1;
			total+=details[itemAdded].price;
			/* Check current count of this kind of item and apply discount, if any  */
			if (details[itemAdded].discountmultiple) {
				if (numTypesScanned[itemAdded] % details[itemAdded].discountmultiple == 0) {
					total -= details[itemAdded].discount;
				}
			}
		},
		getTotal: function(){
			return total.toFixed(2);
		}
	}
};