

	/**
	 * Converts union of types to intersection of same types
	 * 
	 * 	$mol_type_intersect< number | string > // number & string
	 */
	type $mol_type_intersect< Union > =
		(
			Union extends any
				? ( _ : Union )=> void
				: never
		) extends (
			( _ : infer Intersection )=> void
		)
			? Intersection
			: never



 export {type $mol_type_intersect}
