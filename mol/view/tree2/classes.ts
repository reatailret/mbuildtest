
	function $mol_view_tree2_classes( defs : $mol_tree2 ) {
		return defs.clone(defs.hack({
			'-': () => []
		}))
	}


 export {$mol_view_tree2_classes}