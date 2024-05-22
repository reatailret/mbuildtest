
	class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
		dimensions_axis() {
			return this.dimensions_pane().y
		}

		viewport_axis() {
			return new this.$.$mol_vector_range(0, this.size_real().y)
		}

		scale_axis() {
			return this.scale()[1]
		}

		scale_step() {
			return -this.scale()[1]
		}

		shift_axis() {
			return this.shift()[1]
		}

		curve() {
			const [, shift] = this.shift()
			const [, scale] = this.scale()

			return this.axis_points().map( point => {
				let scaled = Math.round( point * scale + shift )
				scaled = Math.max( Number.MIN_SAFE_INTEGER, Math.min( scaled, Number.MAX_SAFE_INTEGER ) )
				return `M 0 ${ scaled } H 2000`
			}).join( ' ' )
		}

		title_pos_x() {
			return String(this.gap().x.min)
		}

		label_pos_y( index : number ) {
			return (this.axis_points()[index] * this.scale()[1] + this.shift()[1]).toFixed(3)
		}
	}


 //export {$mol_plot_ruler_vert}