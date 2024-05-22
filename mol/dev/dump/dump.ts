
	
	function $mol_dev_dump_image( uri: string, width: number, height: number ) {
		console.log( `%c `, `font-size:0px;padding: 0 0 ${ height }px ${ width }px; background: url("${ uri }")` )
	}
	
	function $mol_dev_dump_canvas( image: HTMLCanvasElement ) {
		$mol_dev_dump_image( image.toDataURL(), image.width, image.height )
	}
	
	function $mol_dev_dump_svg( image: SVGSVGElement ) {
		$mol_dev_dump_image(
			'data:image/svg+xml,' + encodeURIComponent( $mol_dom_serialize( image ) ),
			image.width.baseVal.value,
			image.height.baseVal.value,
		)
	}
	


 export {$mol_dev_dump_image,$mol_dev_dump_canvas,$mol_dev_dump_svg}