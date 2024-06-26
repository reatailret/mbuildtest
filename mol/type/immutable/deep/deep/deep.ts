

	/**
	 * Recursive `Readonly`.
	 * 
	 * 	let props : $mol_type_immutable_deep< { foo: number[] } > = { readonly foo: readonly number[] }
	 */
	type $mol_type_immutable_deep< Val > = {
		readonly [ field in keyof Val ]: $mol_type_immutable_deep< Val[ field ] >
	}



 export {$mol_type_immutable_deep}