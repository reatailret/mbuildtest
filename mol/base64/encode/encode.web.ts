

	function binary_string(bytes: Uint8Array | string): string {
		let binary = ''
		if (typeof bytes !== 'string') {
			for (const byte of bytes) binary += String.fromCharCode( byte )
		} else {
			binary = unescape(encodeURIComponent(bytes))
		}

		return binary
	}

	function $mol_base64_encode_web(str: string | Uint8Array): string {
		return $mol_dom_context.btoa(binary_string(str))
	}

	$.$mol_base64_encode = $mol_base64_encode_web


 export {$mol_base64_encode_web}