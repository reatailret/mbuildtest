

	/**
	 * 48-bit streamable string hash function
	 * Based on cyrb53: https://stackoverflow.com/a/52171480
	 */
	function $mol_hash_string( str: string, seed = 0 ) {
		
		let h1 = 0xdeadbeef ^ seed
		let h2 = 0x41c6ce57 ^ seed
		
		for( let i = 0; i < str.length; i++ ) {
			const ch = str.charCodeAt(i)
			h1 = Math.imul( h1 ^ ch, 2654435761 )
			h2 = Math.imul( h2 ^ ch, 1597334677 )
		}
		
		h1 = Math.imul( h1 ^ ( h1 >>> 16 ), 2246822507 ) ^ Math.imul( h2 ^ ( h2 >>> 13 ), 3266489909 )
		h2 = Math.imul( h2 ^ ( h2 >>> 16 ), 2246822507 ) ^ Math.imul( h1 ^ ( h1 >>> 13 ), 3266489909 )
		
		return 4294967296 * ( ( ( 1 << 16 ) - 1 ) & h2 ) + ( h1 >>> 0 )
	}



 export {$mol_hash_string}