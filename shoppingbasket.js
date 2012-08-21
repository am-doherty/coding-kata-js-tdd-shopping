	/*  Shopping Kata
	   * Create a shopping basket system that can total up the costs of purchasing:
	   * ItemA at .50 each
	   * ItemB at .30 each
	   * ItemC at .20 each
	   * ItemD at .15 each
	   *
	   * With offers:
	    *		Purchase 3 of ItemA for 1.30
		*		Purchase 2 of ItemB for 0.45
	*/
	
	/* ShoppingBasket constructor (not a literal)	*/
	function ShoppingBasket() {
		return {
			scan: function(){},
			getTotal: 0.5
		}
	};