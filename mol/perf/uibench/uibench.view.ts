

	class $mol_perf_uibench extends $.$mol_perf_uibench {

		@ $mol_mem
		state( next = {} as any ) {
			return next
		}

		@ $mol_mem
		table_state() {
			return this.state().table
		}

		@ $mol_mem
		anim_state() {
			return this.state().anim
		}

		@ $mol_mem
		tree_state() {
			return this.state().tree
		}

		@ $mol_mem
		location() {
			return this.state().location || null
		}

		@ $mol_mem
		sub() {
			switch( this.location() ) {
				case 'table' : return [ this.Table() ]
				case 'anim' : return [ this.Anim() ]
				case 'tree' : return [ this.Tree() ]
				default : return []
			}
		}

	}



 //export {$mol_perf_uibench}