<template>
	<div class="ui-selector-list">
		<button
			v-for="item in props.list"
			:key="item.code"
			class="ui-selector-item"
			@click="select(item)"
		>
			{{ item.label }}
		</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		modelValue: Record<string, string> | null;
		list: Record<string, string>[];
	}>();

	const emit = defineEmits<{
		(e: 'update:modelValue', value: Record<string, string> | null): void;
	}>();

	const select = (item: Record<string, string>) => {
		emit('update:modelValue', item);
	};
</script>

<style scoped lang="scss">
	.ui-selector-list {
		width: 100%;
		height: max-content;
		padding: 6px;
		border-radius: 14px;

		background-color: var(--color-grey-225);

		.ui-selector-item {
			cursor: pointer;

			display: flex;
			align-items: center;
			justify-content: flex-start;

			width: 100%;
			height: auto;
			padding: 6px 10px;
			border-radius: 10px;

			font: var(--font-body-default);

			&:hover {
				color: var(--color-green-137);
				background-color: var(--color-grey-111);
			}
		}
	}
</style>
