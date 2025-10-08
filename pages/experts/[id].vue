<template>
	<div class="expert-card">
		<BackButton />

		<div class="expert-card__main">
			<div class="main-photo">
				<img v-if="imgSrc && isMounted" :src="imgSrc" alt="photo" />
			</div>

			<div class="main-content">
				<div class="name text-bold">{{ expert?.name }}</div>
				<div class="location">Москва</div>
				<div class="role">Эксперт ресторанного сервиса и управления</div>
				<div class="tagline">
					“Я соединяю интересы собственников, гостей и сотрудников, чтобы бизнес создавал выгоду и
					ценность для каждого”
				</div>
				<UIAnimatedButton class="batten" :color="'white'">
					Заказать тренинг / консультацию
				</UIAnimatedButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import BackButton from '~/components/buttons/BackButton.vue';
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';
	import { MGMT_AND_ADMIN_EXPERTS } from '~/constants/mgmt-and-admin';
	import getImgSrcHelper from '~/helpers/getImgSrc.helper';

	const route = useRoute();

	const expertID = computed(() => route.params.id);

	const expert = computed(() => MGMT_AND_ADMIN_EXPERTS.find((ex) => ex.id === expertID.value));

	const imgSrc = computed(() => getImgSrcHelper(expert.value?.photo, 'experts') ?? null);

	const isMounted = ref(false);
	onMounted(() => {
		isMounted.value = true;
	});
</script>

<style scoped lang="scss">
	.expert-card {
		display: flex;
		grid-gap: 14px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		width: 100%;
		height: auto;
		padding: 22px 2%;

		&__main {
			display: flex;
			grid-gap: 40px;

			width: 100%;
			padding: 34px 30px;
			border-radius: 10px;

			background-color: var(--color-grey-240);

			.main-photo {
				overflow: hidden;
				width: 200px;
				height: 220px;
				border-radius: 14px;

				img {
					display: block; /* убирает пробелы под img */

					width: 100%;
					height: 100%;

					object-fit: cover; /* заполняет контейнер, с обрезанием */
					object-position: center; /* центрирует изображение */
				}
			}

			.main-content {
				display: flex;
				grid-gap: 14px;
				flex-direction: column;

				width: 100%;
				height: auto;

				.name {
					font: var(--font-h1-headline);
				}

				.location {
					font: var(--font-body-default-medium);
					color: var(--color-grey-145);
				}

				.role {
					font: var(--font-body-default-medium);
				}

				.tagline {
					font-size: 16px;
					font-style: oblique;
					line-height: 18px;
					color: var(--color-black);
				}
			}
		}
	}
</style>
