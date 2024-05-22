
	class $mol_app_supplies extends $.$mol_app_supplies {
		
		entered( next? : boolean ) {
			if( $mol_state_arg.value( `entered` ) != null ) return true
			return $mol_state_session.value( `${ this }.entered()` , next ) || false
		}
		
		pages() {	
			if( !this.entered() ) return [ this.enter() ]
				
			const sub : $mol_view[] = [ this.List() ]
				
			if( this.supply() ) sub.push( this.Detail( this.supply() ) )
			
			return sub
		}

		@ $mol_mem
		domain() {
			return new $mol_app_supplies_domain_mock()
		}

		supplies() {
			return this.domain().supplies()
		}

		supply_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'supply' ) , next ) || ''
		}
		
		supply() {
			if( !this.entered() ) return null
			
			var id = this.supply_id()
			if( id.length < 7 ) return null

			return this.domain().supply( id )
		}

	}


 //export {$mol_app_supplies}