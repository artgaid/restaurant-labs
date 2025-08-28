<template>
	<div class="one-step" :class="['step-' + props.step, { selected: props.selected }]">
		<SvgoStepsIconStep01 v-if="props.step === 1" />
		<SvgoStepsIconStep02 v-if="props.step === 2" />
		<SvgoStepsIconStep03 v-if="props.step === 3" />
		<SvgoStepsIconStep04 v-if="props.step === 4" />

		<div class="text">{{ props.label }}</div>

		<div class="arrow-down">
			<SvgoIconArrowDown />
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		label: string;
		step: number;
		selected?: boolean;
	}>();
</script>

<style scoped lang="scss">
	.one-step {
		display: flex;
		grid-gap: 6%;
		justify-content: flex-start;

		width: 100%;
		padding-top: 18px;
		padding-right: 26px;
		border-radius: 14px;

		background-color: var(--color-grey-d);

		&.selected {
			color: var(--color-grey-dd);
			background: var(--gradient-green-1);
		}

		svg {
			width: 120px;
			height: 100px;
		}

		.text {
			font-size: 28px;
			line-height: 30px;
		}

		.arrow-down {
			display: flex;
			align-items: center;
			justify-content: center;

			width: max-content;
			height: max-content;
			margin-left: auto;
			padding: 10px;
			border-radius: 50%;

			background-color: var(--color-grey-dd);

			svg {
				width: 18px;
				height: 18px;
			}
		}
	}
</style>
