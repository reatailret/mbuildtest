
	$mol_test({

		'Is email' () {
			$mol_data_email( 'foo@bar' )
		} ,

		'Has not host' () {
			$mol_assert_fail( ()=> {
				$mol_data_email( 'foo@' )
			} , 'foo@ is not a /.+@.+/' )
		} ,

		'Has not name' () {
			$mol_assert_fail( ()=> {
				$mol_data_email( '@bar' )
			} , '@bar is not a /.+@.+/' )
		} ,

		'Has not @' () {
			$mol_assert_fail( ()=> {
				$mol_data_email( 'foo.bar' )
			} , 'foo.bar is not a /.+@.+/' )
		} ,

	})


 export {}