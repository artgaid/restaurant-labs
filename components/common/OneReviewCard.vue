<script setup lang="ts">
	const props = defineProps<{
		fullName: string;
		city: string;
		description: string;
		comment: string;
		photo?: string;
	}>();
</script>

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

<style scoped lang="scss">
	.one-review {
		width: max-content;
		max-width: 370px;
		height: 100%;
		min-height: 400px;

		flex: 1 0 auto;

		display: grid;
		grid-template-columns: 80px 1fr;
		grid-template-rows: auto 1fr;
		justify-items: center;
		align-items: start;
		grid-gap: 14px;

		padding: 14px 22px;

		border: 2px solid var(--color-grey-l);
		border-radius: 14px;

		&__photo {
			width: 75px;
			height: 75px;

			display: flex;
			justify-content: center;
			align-items: center;

			border-radius: 50%;
			background-color: gray;
		}

		&__info {
			width: 100%;
			height: max-content;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-self: center;
			grid-gap: 4px;

			.fullName {
				font: var(--font-body-default-semibold);
			}
		}

		&__message {
			width: 100%;
			height: max-content;

			padding-top: 22px;

			grid-column: 1/3;
			font: var(--font-body-default-medium);
		}
	}
</style>
