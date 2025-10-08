<template>
	<div class="one-review">
		<div class="one-review__photo">photo</div>
		<div class="one-review__info">
			<div class="fullName">{{ props.fullName }}</div>
			<div class="text-small-caption">{{ props.description }}</div>
			<div class="text-small-caption-bold">{{ props.city }}</div>
		</div>
		<div class="one-review__message">{{ props.comment }}</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		fullName: string;
		city: string;
		description: string;
		comment: string;
		photo?: string;
	}>();
</script>

<style scoped lang="scss">
	.one-review {
		display: grid;
		grid-gap: 14px;
		grid-template-columns: 80px 1fr;
		grid-template-rows: auto 1fr;
		flex: 1 0 auto;
		align-items: start;
		justify-items: center;

		width: max-content;
		max-width: 370px;
		height: 100%;
		min-height: 400px;
		padding: 14px 22px;
		border: 2px solid var(--color-grey-225);
		border-radius: 14px;

		&__photo {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 75px;
			height: 75px;
			border-radius: 50%;

			background-color: gray;
		}

		&__info {
			display: flex;
			grid-gap: 4px;
			flex-direction: column;
			align-self: center;
			justify-content: center;

			width: 100%;
			height: max-content;

			.fullName {
				font: var(--font-body-default-semibold);
			}
		}

		&__message {
			grid-column: 1/3;

			width: 100%;
			height: max-content;
			padding-top: 22px;

			font: var(--font-body-default-medium);
		}
	}
</style>
