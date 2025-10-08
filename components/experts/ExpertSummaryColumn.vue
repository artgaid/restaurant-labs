<template>
	<div class="summary-column">
		<div class="summary-column__label text-h2">{{ props.label }}</div>
		<div class="summary-column__list">
			<div v-for="item in props.list" :key="item.id" class="summary-column__item">
				{{ item.description }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		label: string;
		list: { id: string; description: string }[];
	}>();
</script>

<style scoped lang="scss">
	.summary-column {
		display: flex;
		grid-gap: 14px;
		flex-direction: column;
		width: 100%;

		&__label {
			display: flex;
		}

		&__list {
			display: flex;
			grid-gap: 4px;
			flex-direction: column;
			width: 100%;
		}

		&__item {
			width: 100%;
			padding: 4px 6px;
			border-radius: 6px;

			font-weight: 500;
			color: var(--color-grey-145);

			background-color: var(--color-grey-240);
		}
	}
</style>
