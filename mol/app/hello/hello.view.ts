
	class $mol_app_hello extends $.$mol_app_hello {
		
		@ $mol_mem
		greeting() {
			super.greeting
			let name = this.name()
			return name && `Hello, ${name}!` || ''
		}
		
	}


 //export {$mol_app_hello}