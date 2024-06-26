

	/**
	 * Lowercase type keys.
	 *
	 * 	// { foo: 'BAR' }
	 * 	$mol_type_case_lower_keys< { FOO: 'BAR' } >
	 */
	type $mol_type_case_lower_keys< Type > =
		{
			[
				Key in keyof Type
				as Lowercase< Extract< Key, string > >
			]:
				Type[ Key ]
		}

	/**
	 * Lowercase type values.
	 *
	 * 	// { FOO: 'bar' }
	 * 	$mol_type_case_lower_values< { FOO: 'BAR' } >
	 */
	type $mol_type_case_lower_values< Type > =
		{
			[ Key in keyof Type ]:
				Lowercase< Extract< Type[ Key ], string > >
		}



 export {$mol_type_case_lower_keys,$mol_type_case_lower_values}