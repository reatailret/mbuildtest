

	class $mol_time_base {

		static patterns = {} as Record< string , ( arg : any )=> string >

		static formatter( pattern : string ) {

			if( this.patterns[ pattern ] ) return this.patterns[ pattern ]

			var tokens = Object.keys( this.patterns )
				.sort()
				.reverse()
				.map( ( token : string ) => token.replace( /([-+*.\[\]()\^])/g , '\\$1' ) )
			var lexer = RegExp( '(.*?)(' + tokens.join( '|' ) + '|$)', 'g' )

			var funcs = [] as ( ( arg : any )=> string )[]

			pattern.replace( lexer, ( str : string , text : string , token : string ) => {
				if( text ) funcs.push( () => text )
				if( token ) funcs.push( this.patterns[ token ] )
				return str
			} )

			return this.patterns[ pattern ] = ( arg : any )=> {
				return funcs.reduce( ( res , func )=> res + func( arg ) , '' )
			}
		
		}

		toString( pattern : string ) : string {
			const Base = this.constructor as typeof $mol_time_base
			const formatter = Base.formatter( pattern )
			return formatter( this )
		}

	}



 export {$mol_time_base}