<template>
	<div class="dialog" v-if="visible">
		<div class="dialog-title">提示</div>
		<div class="dialog-message">{{ message }}</div>
		<div class="dialog-confirm" @click.stop="close">确定</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				message: '',
				onClose: null
			};
		},

		methods: {
			close() {
				this.visible = false
				if (typeof this.onClose === 'function') {
					this.onClose(this)
				}
			}
		}
	};
</script>

<style lang="scss">
	.dialog {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);

		background-color: #fff;
		border-radius: 20px;

		width: 60%;
	}

	.dialog-title {
		text-align: center;
		font-size: 20px;
		color: #333;
		padding-top: 10px;
		margin-bottom: 20px;
	}

	.dialog-message {
		text-align: center;
		font-size: 14px;
		color: #2d2f33;
		margin-bottom: 20px;
	}

	.dialog-confirm {
		border-top: 1px solid #ddd;
		text-align: center;
		padding: 10px 0;
	}
</style>
