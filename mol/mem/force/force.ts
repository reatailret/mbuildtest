

	/** @deprecated See docs on $mol_wire_mem **/
	class $mol_mem_force extends Object {
		constructor(){ super() }
		$mol_mem_force = true
		static $mol_mem_force = true
		static toString() { return this.name }
	}
	
	/** @deprecated See docs on $mol_wire_mem **/
	class $mol_mem_force_cache extends $mol_mem_force {}
	
	/** @deprecated See docs on $mol_wire_mem **/
	class $mol_mem_force_update extends $mol_mem_force {}
	
	/** @deprecated See docs on $mol_wire_mem **/
	class $mol_mem_force_fail extends $mol_mem_force_cache {}
	


 export {$mol_mem_force,$mol_mem_force_cache,$mol_mem_force_update,$mol_mem_force_fail}