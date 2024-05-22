
	class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
		@ $mol_mem
		series_x(): readonly number[] {
			return this.labels().map((val, index) => index)
		}

		@ $mol_mem
		labels() {
			return this.series_x().map(val => String(val)) as readonly string[]
		}

		@ $mol_mem
		visible_indexes() {
			const series_x = this.series_x()
			const labels = this.labels()
			const [shift_x,] = this.shift()
			const [scale_x,] = this.scale()
			let step = this.step() * scale_x
			const [[viewport_left, viewport_right]] = this.viewport()
			const size_x = viewport_right - viewport_left
			const font_size = this.font_size()
			let indexes: number[]
			let labels_width: number
			do {
				indexes = []
				labels_width = 0
				let last: number = 0
				let current = 0
				for (let i = 0; i < series_x.length; i++) {
					const point_x = series_x[i]
					const scaled_x = (shift_x + point_x * scale_x)
					if (scaled_x < viewport_left) continue
					if (scaled_x > viewport_right) continue
					if (current === 0) current = scaled_x
					if (scaled_x < current) {
						last = i
						continue
					}
					indexes.push(i)
					current += step
					last = 0
					labels_width += font_size * (labels[i].length + 1)
					if (labels_width > size_x) break
				}
				if (last !== 0) {
					indexes.push(last)
					labels_width += font_size * (labels[last].length + 1)
				}

				step *= 1.5
			} while (labels_width > size_x && indexes.length > 2)

			return indexes

		}

		curve() {
			const [shift] = this.shift()
			const [scale] = this.scale()
			const series_x = this.series_x()

			return this.visible_indexes().map( index => {
				const scaled = series_x[index] * scale + shift
				return `M ${ scaled.toFixed(3) } 1000 V 0`
			}).join( ' ' )
		}

		label_text( index : number ) {
			return this.labels()[index]
		}

		labels_formatted() {
			return this.visible_indexes().map( index => this.Label( index ) )
		}

		label_pos_x( index : number ) {
			return (this.series_x()[index] * this.scale()[0] + this.shift()[0]).toFixed(3)
		}

		label_pos_y( index : number ) {
			return this.title_pos_y()
		}
	}


 //export {$mol_plot_mark_hor}