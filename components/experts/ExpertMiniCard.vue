<template>
	<NuxtLink :to="pageUrl" class="expert-mini-card">
		<div class="expert-mini-card__photo">
			<img v-if="imgSrc && isMounted" :src="imgSrc" alt="photo" />
		</div>

		<div class="expert-mini-card__name text-bold">{{ props.expert.name }}</div>
		<div class="expert-mini-card__description text-default">
			{{ props.expert.description }}
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
	import getImgSrcHelper from '~/helpers/getImgSrc.helper';
	import type { ExpertType } from '~/types/ExpertsTypes';

	const props = defineProps<{
		expert: ExpertType;
	}>();

	const pageUrl = computed(() => `/experts/${props.expert.id}`);

	const imgSrc = computed(() => getImgSrcHelper(props.expert.photo, 'experts') ?? null);

	const isMounted = ref(false);
	onMounted(() => {
		isMounted.value = true;
	});
</script>

<style scoped lang="scss">
	.expert-mini-card {
		cursor: pointer;

		display: flex;
		grid-gap: 8px;
		flex-direction: column;
		justify-content: flex-start;

		width: 300px;
		max-width: 300px;
		height: 400px;
		max-height: 400px;
		padding: 24px 34px;
		border-radius: 14px;

		color: var(--color-grey-53);
		text-decoration: none;

		background-color: var(--color-grey-240);
		box-shadow: var(--box-shadow-normal);

		transition: box-shadow 0.2s ease-in-out;

		&__photo {
			overflow: hidden;
			width: 100%;
			height: 70%;
			border-radius: 14px;

			img {
				display: block; /* убирает пробелы под img */

				width: 100%;
				height: 100%;

				object-fit: cover; /* заполняет контейнер, с обрезанием */
				object-position: center; /* центрирует изображение */
			}
		}

		&__name {
			width: 100%;
			height: max-content;
		}

		&__description {
			width: 100%;
			height: max-content;
		}

		&:hover {
			box-shadow: var(--box-shadow-up);
		}
	}
</style>
