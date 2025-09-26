<template>
	<div class="experts-block">
		<div class="text-block-title">Эксперты</div>
		<div class="text-block-description">
			Широкий выбор людей и компаний, которые разбираюсь в своем деле.
		</div>
		<div class="experts-block__wrapper">
			<ExpertMiniCard v-for="expert in props.experts" :key="expert.id" :expert="expert" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import ExpertMiniCard from '~/components/experts/ExpertMiniCard.vue';
	import type { ExpertType } from '~/types/ExpertsTypes';

	const props = defineProps<{
		experts: ExpertType[];
	}>();
</script>

<style scoped lang="scss">
	.experts-block {
		display: flex;
		grid-gap: 8px;
		flex-direction: column;

		width: 100%;
		height: auto;

		&__wrapper {
			display: flex;
			grid-gap: 32px 2%;
			flex-wrap: wrap;
			justify-content: flex-start;

			width: 100%;
			height: auto;
		}
	}
</style>
