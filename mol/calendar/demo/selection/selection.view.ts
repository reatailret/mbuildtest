

	class $mol_calendar_demo_selection extends $.$mol_calendar_demo_selection {

		@ $mol_mem
		interval() {
			return new $mol_time_interval( this.interval_config() )
		}

		@ $mol_mem_key
		selected( day : string ) {
			
			const interval = this.interval()
			if( ( day >= interval.start.toString() )&&( day < interval.end.toString() ) ) return true
			
			if( this.days().includes( day ) ) return true
			
			return false
		}

	}



 //export {$mol_calendar_demo_selection}