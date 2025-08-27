<template>
	<div class="one-step" :class="'step-' + props.step">
		<SvgoStepsIconStep01 v-if="props.step === 1" />
		<SvgoStepsIconStep02 v-if="props.step === 2" />
		<SvgoStepsIconStep03 v-if="props.step === 3" />
		<SvgoStepsIconStep04 v-if="props.step === 4" />

		<div class="text">{{ props.label }}</div>

		<div class="arrow"></div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		label: string;
		step: number;
	}>();
</script>

<style scoped lang="scss">
	.one-step {
		display: flex;
		grid-gap: 6%;

		width: 100%;
		padding-top: 18px;
		border-radius: 14px;

		background-color: var(--color-grey-d);

		svg {
			width: 120px;
			height: 100px;
		}

		.text {
			font-size: 28px;
			line-height: 30px;
		}
	}
</style>
