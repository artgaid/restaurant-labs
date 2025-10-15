<template>
	<div class="main-service-block">
		<div class="text-block-title">{{ props.label }}</div>
		<div class="main-service-block__wrapper">
			<div class="main-service-block__content">
				<div class="main-service-block__text-1">
					{{ props.description }}
				</div>

				<div class="main-service-block__text-2">
					{{ props.greyDescription }}
				</div>
			</div>
			<div v-if="photoUrl" class="main-service-block__img" :style="{ backgroundImage: photoUrl }">
				<UIAnimatedButton v-if="props.buttonText" :color="'white'">
					{{ props.buttonText }}
				</UIAnimatedButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';

	const props = defineProps<{
		label: string;
		imgUrl: string;
		description: string;
		greyDescription: string;
		buttonText?: string;
	}>();

	const photoUrl = computed(() => `url(${props.imgUrl})`);
</script>

<style scoped lang="scss">
	.main-service-block {
		display: flex;
		grid-gap: 24px;
		flex-direction: column;
		align-self: center;

		width: 100%;
		max-width: 1700px;
		height: 800px;

		.text-block-title {
			padding: 0 40px;
		}

		&__wrapper {
			display: grid;
			grid-gap: 3%;
			grid-template-columns: 1fr 0.6fr;

			width: 100%;
			height: 100%;
			max-height: 600px;
		}

		&__content {
			display: flex;
			grid-gap: 24px;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;

			width: 100%;
			height: 100%;

			font-size: 18px;
		}

		&__text-1 {
			padding: 0 40px;
			color: var(--color-grey-111);
			white-space: pre-line;
		}

		&__text-2 {
			display: flex;
			grid-gap: 18px;
			flex-direction: column;

			width: 100%;
			height: max-content;
			padding: 20px 40px;
			border-radius: 14px;

			color: var(--color-grey-111);
			white-space: pre-line;

			background-color: var(--color-grey-240);
			box-shadow: var(--box-shadow-up);
		}

		&__img {
			position: relative;

			display: flex;
			align-items: flex-end;
			justify-content: flex-end;

			width: 100%;
			height: 100%;
			padding: 20px;
			border-radius: 14px;

			background-repeat: no-repeat;
			background-position: top;
			background-size: cover;

			&::after {
				pointer-events: none;
				content: '';

				position: absolute;
				inset: 0; /* top:0; right:0; bottom:0; left:0 */

				border-radius: inherit;

				background: rgb(0, 0, 0, 0.1); /* уровень затемнения */
			}

			button {
				z-index: 1;
			}
		}
	}
</style>
