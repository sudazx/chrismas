<template>
	<div class="home">
		<canvas class="canvas"></canvas>
		<melody ref="melody"></melody>
		<gallery ref="gallery"></gallery>
	</div>
</template>

<script>
	import ShapeShifter from './shapeshifter'
	import Melody from './Melody'

	import Gallery from './gallery/index'

	export default {
		name: 'Home',

		components: { Melody, Gallery },

		data() {
			return {
				performed: false
			}
		},

		mounted() {
			this.init().then(() => {
				this.performAction('3')

				setTimeout(() => {
					this.performAction('2')
				}, 1000)

				setTimeout(() => {
					this.performAction('1')
					this.$refs.melody.play()
				}, 2000)

				setTimeout(() => {
					this.performAction(`Merry|Christmas|马晓静|你要的|#icon star|I ❤ U`, 5000)
				}, 3000)

				setTimeout(() => {
					this.scrollToGallery()
							.then(() => {
								this.$refs.gallery.start()
							})
				}, 20000)
			})
		},

		methods: {
			init() {
				return new Promise(resolve => {
					ShapeShifter.init()
					this.$dialog({
						message: '开启音乐?',
						onClose () {
							resolve()
						}
					})
				})
			},

			performAction(letter) {
				if (!this.performed) {
					ShapeShifter.UI.simulate(letter)
					ShapeShifter.Drawing.loop(function () {
						ShapeShifter.Shape.render()
					})

					this.performed = true
				} else {
					ShapeShifter.UI.simulate(letter)
				}
			},

			scrollToGallery() {
				const target = document.body
				const clientHeight = target.clientHeight
				const step = 5

				let scrollTop = 0

				return new Promise(resolve => {
					const play = () => {
						if (scrollTop <= clientHeight) {
							scrollTop += step
							target.scrollTop = scrollTop
							requestAnimationFrame(play)
						} else {
							resolve()
						}
					}

					play()
				})
			}
		}
	}
</script>
