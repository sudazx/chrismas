<template>
	<div class="carousel">
		<div
			:style="getItemStyle(item)"
			:key="index"
			v-for="(item, index) in assets"
			class="carousel-item">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currIndex: 0,
				assets: [
					{
						url: '1.jpg',
						duration: 10
					},
					{
						url: '2.jpg',
						duration: 10
					},
					{
						url: '9.jpg',
						duration: 10
					},
					{
						url: '3.jpeg',
						duration: 10
					},
					{
						url: '4.jpeg',
						duration: 10
					},
					{
						url: '5.jpeg',
						duration: 10
					},
					{
						url: '6.jpg',
						duration: 10
					},
					{
						url: '7.jpg',
						duration: 10
					},
					{
						url: '8.jpg',
						duration: 10
					},
					{
						url: '10.jpg',
						duration: 10
					},
					{
						url: '11.jpg',
						duration: 10
					},
					{
						url: '12.jpg',
						duration: 10
					},
					{
						url: '13.jpg',
						duration: 10
					},
					{
						url: '14.jpeg',
						duration: 10
					},
					{
						url: '15.jpeg',
						duration: 10
					},
					{
						url: '1.jpg',
						duration: 10
					}
				]
			}
		},

		methods: {
			start() {
				const duration = this.assets[this.currIndex].duration

				setTimeout(() => {
					this.next().then(() => {
						if (this.currIndex < this.assets.length - 1) {
							this.start()
						}
					})
				}, duration * 1000)
			},

			next() {
				const clientWidth = document.body.clientWidth
				const target = (this.currIndex + 1) * clientWidth
				const step = 5
				let scrollLeft = this.$el.scrollLeft

				return new Promise(resolve => {
					const play = () => {
						if (scrollLeft < target) {
							scrollLeft += step
							this.$el.scrollLeft = scrollLeft
							requestAnimationFrame(play)
						} else {
							this.$el.scrollLeft = target
							this.currIndex++
							resolve()
						}
					}

					play()
				})
			},

			getItemStyle(item) {
				const { url } = item
				return {
					backgroundImage: `url(./static/carousel/${url})`
				}
			}
		}
	}
</script>

<style lang="scss">
	.carousel {
		width: 100%;
		height: 100%;
		overflow: hidden;
		white-space: nowrap;
	}

	.carousel-item {
		display: inline-flex;
		width: 100%;
		height: 100%;
		object-fit: cover;

		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>
