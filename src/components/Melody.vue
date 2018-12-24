<template>
	<div class="melody">
		<audio
			hidden="true"
			:loop="loop"
			:src="music"
			ref="audio"></audio>
		<img
			@click.stop="togglePlay"
			:class="{'playing': playing}"
			class="melody-player"
			:src="melody"/>
		<!-- Dialog -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				assets: {
					whys: 'whys.mp3',
					melody: 'melody.jpeg'
				},

				loaded: null,

				loop: false,

				playing: false
			}
		},

		computed: {
			music() {
				return `./static/${this.assets.whys}`
			},
			melody() {
				return `./static/${this.assets.melody}`
			}
		},

		mounted() {
			const audio = this.$refs.audio
			this.loaded = new Promise(resolve => {
				audio.addEventListener('canplaythrough', resolve, false)
			})
		},

		methods: {
			// autoplay
			play() {
				if (this.loaded) {
					this.loaded.then(() => {
						const audio = this.$refs.audio
						audio.play().then(() => {
							this.playing = true
						}).catch(() => {})
					})
				}
			},

			stop() {
				const audio = this.$refs.audio
				audio.pause()

				this.playing = false
			},

			togglePlay() {
				this.playing ? this.stop() : this.play()
			}
		}
	}
</script>

<style lang="scss">
	$Size: 60px;

	.melody {
		position: fixed;
		bottom: 20px;
		right: 20px;
	}

	.melody-player {
		width: $Size;
		height: $Size;
		border-radius: 100%;
		box-shadow: 0 0 25px #000;
		cursor: pointer;

		transform: rotateY(0deg);

		object-fit: contain;

		&.playing {
			animation: rotate 6s infinite;
		}

	}

	@keyframes rotate {
		0% {
			transform: rotateY(0deg);
		}
		50% {
			transform: rotateY(180deg);
		}
		100% {
			transform: rotateY(360deg);
		}
	}
</style>
