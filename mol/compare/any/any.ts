

	/** @deprecated Use `Object.is` */
	function $mol_compare_any( a : any , b : any ) {
		
		if( a === b ) return true
		
		if( !Number.isNaN( a ) ) return false
		if( !Number.isNaN( b ) ) return false

		return true
	}



 export {$mol_compare_any}