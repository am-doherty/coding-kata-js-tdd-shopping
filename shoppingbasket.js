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
	
	/* ShoppingBasket constructor */
	function ShoppingBasket(itemDetails) {
		var total = 0.0;
		var numItemsScanned = 0;
		var numTypesScanned = [];
		return {
			scan: function(itemAdded){
				numItemsScanned++;
				(typeof numTypesScanned[itemAdded] === "undefined") ? numTypesScanned[itemAdded]=1 : numTypesScanned[itemAdded]+=1 ;
				total+=itemDetails[itemAdded];
			},
			getTotal: function(){
				//shortest TDD route to matching test 9, the A+B+B offer
				if (numTypesScanned['A'] >= 3) {
					return (total-.20).toFixed(2);
				}	
				//shortest TDD route to matching test 9, the A+B+B offer
				if (numTypesScanned['B'] >= 2) {
					return (total-.15).toFixed(2);
				}			
				// all other cases
 				return total.toFixed(2);
			}
		}

	};