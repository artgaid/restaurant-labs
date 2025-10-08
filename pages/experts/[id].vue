<template>
	<div class="expert-card">
		<BackButton />

		<div class="expert-card__main">
			<div class="main-photo">
				<img v-if="mainPhotoUrl" :src="mainPhotoUrl" alt="photo" />
			</div>

			<div class="main-content">
				<div class="name">{{ expert?.name }}</div>
				<div class="location">Москва</div>
				<div class="role">Эксперт ресторанного сервиса и управления</div>
				<div class="tagline">
					“Я соединяю интересы собственников, гостей и сотрудников, чтобы бизнес создавал выгоду и
					ценность для каждого”
				</div>
				<UIAnimatedButton class="button" :color="'white'" :size="'l'">
					Заказать тренинг / консультацию
				</UIAnimatedButton>
			</div>
		</div>

		<div class="expert-card__summary">
			<ExpertSummaryColumn v-if="expert?.experience" :label="'Опыт'" :list="expert?.experience" />
			<ExpertSummaryColumn
				v-if="expert?.skills"
				:label="'Профильные навыки и специализация:'"
				:list="expert?.skills"
			/>
			<ExpertSummaryColumn
				v-if="expert?.achievements"
				:label="'Достижения / карьера:'"
				:list="expert?.achievements"
			/>
		</div>
		<div class="expert-card__projects">
			<ExpertSummaryColumn
				v-if="expert?.projects"
				class="projects-summery"
				:label="'Проекты'"
				:list="expert?.projects"
			/>
			<div class="projects-photo">
				<div class="text-h2">Фото</div>
				<div v-if="projectPhotoUrls.length" class="projects-photo__list">
					<img v-for="(p, index) in projectPhotoUrls" :key="index" :src="p" alt="photo" />
				</div>
			</div>
		</div>

		<div v-if="expert?.offers" class="expert-card__offers">
			<div class="text-h2">Тренинги</div>
			<ul>
				<li v-for="(o, i) in expert.offers" :key="i">{{ o.id }}. {{ o.description }}</li>
			</ul>
			<UIAnimatedButton class="offers-button" :color="'white'" :size="'l'">
				Заказать тренинг / консультацию
			</UIAnimatedButton>
		</div>
	</div>
</template>

<script setup lang="ts">
	import BackButton from '~/components/buttons/BackButton.vue';
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';
	import ExpertSummaryColumn from '~/components/experts/ExpertSummaryColumn.vue';
	import { MGMT_AND_ADMIN_EXPERTS } from '~/constants/mgmt-and-admin';

	const route = useRoute();

	const expertID = computed(() => route.params.id);

	const expert = computed(() => MGMT_AND_ADMIN_EXPERTS.find((ex) => ex.id === expertID.value));

	const expertName = computed(() => expert.value?.photoDir);

	const expertKey = computed(() => (expertName.value ? `expert-photos-${expertName.value}` : ''));

	const { data } = await useAsyncData<{ main: string | null; projects: string[] }>(
		expertKey,
		() =>
			$fetch('/api/expert-photos', {
				params: { expertName: expertName.value },
			}),
		{
			watch: [expertName],
		},
	);

	const mainPhotoUrl = computed<string | null>(() => data.value?.main ?? null);
	const projectPhotoUrls = computed<string[]>(() => data.value?.projects ?? []);
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
			grid-gap: 30px;
			align-self: center;

			width: 100%;
			max-width: 1200px;
			padding: 34px 30px;
			border-radius: 10px;

			background-color: var(--color-grey-240);

			.main-photo {
				overflow: hidden;
				width: 300px;
				height: 320px;
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
				padding: 4px 0;

				.name {
					font: var(--font-h1-headline);
				}

				.location {
					font: var(--font-body-default);
					color: var(--color-grey-145);
				}

				.role {
					font: var(--font-body-default-medium);
				}

				.tagline {
					font-size: 16px;
					font-style: oblique;
					line-height: 18px;
					color: var(--color-grey-111);
				}

				.button {
					width: 310px;
					margin-top: auto;
					border: 1.5px solid var(--color-grey-53);
				}
			}
		}

		&__summary {
			display: flex;
			grid-gap: 5%;

			width: 100%;
			height: auto;
			padding: 40px 34px;
			border-radius: 10px;

			background-color: var(--color-grey-248);
			box-shadow: var(--box-shadow-super);
		}

		&__projects {
			display: flex;
			grid-gap: 5%;

			width: 100%;
			padding: 40px 34px;
			border-radius: 10px;

			background-color: var(--color-grey-248);
			box-shadow: var(--box-shadow-super);

			.projects-summery {
				width: max-content;
			}

			.projects-photo {
				display: flex;
				grid-gap: 14px;
				flex-direction: column;

				&__list {
					display: flex;
					grid-gap: 8px;
					width: 100%;
					height: auto;

					img {
						width: 200px;
						height: 200px;
						border-radius: 10px;
					}
				}
			}
		}

		&__offers {
			display: grid;
			grid-auto-flow: column;
			grid-gap: 14px;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr;

			width: 100%;
			padding: 40px 34px;
			border-radius: 10px;

			background-color: var(--color-grey-248);
			box-shadow: var(--box-shadow-super);

			ul {
				display: flex;
				grid-gap: 14px;
				flex-direction: column;

				width: 100%;
				height: auto;
				padding: 0;

				li {
					font-size: 16px;
					font-weight: 500;
					line-height: 18px;
					list-style-type: none;
				}
			}

			.offers-button {
				grid-row: 1/3;
				align-self: flex-end;
				justify-self: flex-end;

				width: 310px;
				border: 1.5px solid var(--color-grey-53);
			}
		}
	}
</style>
