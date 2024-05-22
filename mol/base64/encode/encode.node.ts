

	function $mol_base64_encode_node(str: string | Uint8Array): string {
		if (! str) return ''
		if (Buffer.isBuffer(str)) return str.toString('base64')

		return Buffer.from(str).toString('base64')
	}

	$.$mol_base64_encode = $mol_base64_encode_node


 export {$mol_base64_encode_node}