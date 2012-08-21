	/*  Shopping Kata
	   * Create a shopping basket system that can total up the costs of purchasing:
	   * ItemA at .50 each
	   * ItemB at .30 each
	   * ItemC at .20 each
	   * ItemD at .15 each
	   *
	   * With offers:
	   *	   Purchase 3 of ItemA for 1.30
	   *	   Purchase 2 of ItemB for 0.45
	*/
	
	/* ShoppingBasket constructor (not a literal)	*/
	function ShoppingBasket() {
		var item;
		return {
			scan: function(itemAdded){item = itemAdded},
			getTotal: function(){
				if(item=='B') return 0.3;
				return 0.5;
			}
			
		}
	};