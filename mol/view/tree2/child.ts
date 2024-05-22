

	function $mol_view_tree2_child(
		this: $,
		tree: $mol_tree2,
	) {

		if( tree.kids.length === 0 ) {
			return this.$mol_fail(
				$mol_view_tree2_error_str
				`Required one child at ${tree.span}`
			)
		}

		if( tree.kids.length > 1 ) {
			return this.$mol_fail(
				$mol_view_tree2_error_str
				`Should be only one child at ${tree.span}`
			)
		}

		return tree.kids[0]
	}



 export {$mol_view_tree2_child}