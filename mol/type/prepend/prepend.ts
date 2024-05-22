

	/**
	 * Returns `Tuple` unshifted by `Item`.
	 * 
	 * 	$mol_type_tail< 1 , [ 2 , 3 ] > // [ 1 , 2 , 3 ]
	 */
	type $mol_type_prepend<
		Item extends any ,
		Tuple extends readonly any[]
	> = (
		( head : Item , ...args : Tuple )=> any
	) extends (
		( ...args : infer Result )=> any
	)
		? Result
		: never



 export {$mol_type_prepend}