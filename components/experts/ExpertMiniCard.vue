<template>
	<div class="expert-card">
		<img class="expert-card__photo" :src="'~/assets/imgs/experts/Expert-Nazar.png'" alt="photo" />
		<div class="expert-card__name">{{ props.expert.name }}</div>
		<div class="expert-card__description">
			{{ props.expert.description }}
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { ExpertType } from '~/types/ExpertsTypes';

	const props = defineProps<{
		expert: ExpertType;
	}>();

	// const bgImg = computed(() => props.expert.photoUrl);
	// const bgImg = computed(() => ({ backgroundImage: `url(${props.expert.photoUrl})` }));
	// const bgImg = computed(() => ({
	// 	backgroundImage: "url('assets/imgs/experts/Expert-Nazar.png')",
	// }));
</script>

<style scoped lang="scss">
	.expert-card {
		width: 300px;
		max-width: 300px;
		height: 400px;
		max-height: 400px;
		padding: 24px 34px;
		border-radius: 14px;

		background-color: var(--color-grey-ll);
		box-shadow: var(--box-shadow-super);

		&__photo {
			width: 100%;
			height: 100%;

			// background-image: var(--photo);

			// background-image: url('assets/imgs/experts/Expert-Nazar.png');
		}
	}
</style>
