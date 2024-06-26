
	
	/**
	 * Hyperlink with lazy generated (on `mousedown` event) URI.
	 * @see https://mol.hyoo.ru/#!section=demos/demo=mol_link_lazy_demo/readme
	 */
	class $mol_link_lazy extends $.$mol_link_lazy {
		
		generate( event? : Event ) {
			this.uri( this.uri_generated() )
		}

	}
	


 //export {$mol_link_lazy}