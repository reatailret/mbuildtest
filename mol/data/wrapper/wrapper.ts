

	function $mol_data_wrapper<
		Pre extends $mol_data_value ,
		Obj extends { new( val : ReturnType< Pre > ) : any } ,
	>( pre : Pre , Obj : Obj ) {

		console.warn( '$mol_data_wrapper is deparecated. Use $mol_data_pipe instead.' )
		
		return $mol_data_setup(
			( val : Parameters< Pre >[0] ) => new Obj( pre( val ) ) as InstanceType< Obj > ,
			{ pre , Obj } ,
		)

	}



 export {$mol_data_wrapper}