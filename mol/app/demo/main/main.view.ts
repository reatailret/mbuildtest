
	
	class $mol_app_demo_main extends $.$mol_app_demo_main {

		@ $mol_mem
		description() {
			return $mol_file.relative( 'mol/readme.md' ).text() as string
		}

	}
	


 //export {$mol_app_demo_main}