

	class $mol_github_auth extends $mol_object {

		static id() { return '07c88ba2782884016182' }

		static secret() { return '5874d66181f987a8bb2dc07bd431aad1c7a5cb38' }

		static code_uri() { return 'https://github.com/login/oauth/authorize' }
		
		static token_uri() { return 'http://cors.hyoo.ru/https://github.com/login/oauth/access_token' }

		@ $mol_mem
		static cache( next? : { scopes : string[] , token : string } ) {
			return $mol_state_local.value( `${ this }.cache()` , next ) || { scopes: [] , token : '' }
		}

		@ $mol_mem
		static scopes( next? : string[] ) {
			let cache = this.cache()
			let scopes = cache.scopes
			
			for( let scope of next || [] ) {
				if( scopes.indexOf( scope ) >= 0 ) continue
				scopes = scopes.concat( scope )
				this.cache({ scopes , token : '' })
			}
			
			return scopes
		}

		@ $mol_mem
		static code( next? : string , force? : $mol_mem_force ) : string {
			
			const url = `${ this.code_uri() }?client_id=${ this.id() }&scope=${ this.scopes() }`
			
			return $mol_fiber_sync( ()=> new Promise< string >( ( done, fail )=> {
				
				const win = $mol_dom_context.open( url , '$mol_github' )!

				win.focus()
				
				const timer = setInterval( ()=> {
					
					try { win.location.href } catch( error: any ) { return }
	
					const search = win.location.search
					
					if( search !== undefined ) {
						const found = search.match( /\bcode=([^&]+)/ )
						if( !found ) return
						done( found[1] )
					} else {
						fail( new Error( 'Can not get auth code' ) )
					}
					
					clearInterval( timer )
	
					win.close()
					$mol_dom_context.focus()
					
				} , 16 )
					
			} ) )()

		}

		@ $mol_mem
		static token_last( next? : string , force? : $mol_mem_force ) {
			const cache = this.cache()
			if( force ) this.cache({ ... cache , token : '' })
			if( !force && cache.token ) return cache.token
			
			const auth_uri = `${ this.token_uri() }?code=${ this.code( undefined , force ) }&client_id=${ this.id() }&client_secret=${ this.secret() }`
			
			const response = $mol_fetch.json( auth_uri , {
				headers: {
					'Accept': 'application/json',
				},
			} ) as {
				access_token : string
				error_description : string
			}
			
			if( response.error_description ) {
				return $mol_fail( new Error( response.error_description ) )
			}

			const token = response.access_token

			this.cache({ ... cache , token })

			return token
		}

		static token( scopes : string[] ) {
			this.scopes( scopes )
			return this.token_last()
		}

	}



 export {$mol_github_auth}