
	
	function $mol_base64_url_encode( buffer: Uint8Array ) {
		return $mol_base64_encode( buffer ).replace( /\+/g, '-' ).replace( /\//g, '_' ).replace( /=/g, '' )
	}
	
	function $mol_base64_url_decode( str: string ) {
		return $mol_base64_decode( str.replace( /-/g, '+' ).replace( /_/g, '/' ) )
	}
	


 export {$mol_base64_url_encode,$mol_base64_url_decode}