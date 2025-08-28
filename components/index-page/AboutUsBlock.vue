<template>
	<div class="about-us-block">
		<div class="left-section">
			<div class="text-block-title">О нас</div>
			<div class="about-us-block__description">
				Restaurant Labs объединяет всё самое важное для управления рестораном на одной платформе.
				собрали готовые решения — от чек-листов и инструкций до учебных курсов и IT‑сервисов — чтобы
				вы могли сосредоточиться на том, что любите: создавать атмосферу и вкусную еду.
				<br />
				<br />
				С нами вести ресторанный бизнес становится проще: мы снимаем лишнее бремя с ваших плеч и
				помогаем организовать работу команды на высшем уровне.
			</div>
			<div class="about-us-block__result">
				Если вы чувствуете так же —
				<br />
				<span class="text-h2">Добро пожаловать в RLabs.</span>
			</div>
			<div class="about-us-block__achievements">
				<div v-for="(ach, index) in achievementData" :key="index" class="achievement">
					<div class="achievement__numbers">{{ ach.numbers }}</div>
					<div class="achievement__description text-small-caption">{{ ach.description }}</div>
				</div>
			</div>
		</div>
		<div class="right-section">
			<div class="right-section__img-wrapper">
				<div class="about-us-block__img" />
			</div>
			<div class="about-us-block__buttons">
				<UIAnimatedButton :color="'black'">Читать о нас больше</UIAnimatedButton>
				<UIAnimatedButton :color="'white'">Получить консультацию</UIAnimatedButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';

	const achievementData = [
		{
			id: 1,
			numbers: '20+',
			description: 'Лет опыта в управлении бизнесом',
		},
		{
			id: 2,
			numbers: '35+',
			description: 'Объектов открыли под ключ',
		},
		{
			id: 3,
			numbers: '50+',
			description: 'Объектов на консалтинговом обслуживании',
		},
	];
</script>

<style scoped lang="scss">
	.about-us-block {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 1fr 1fr;

		width: 100%;
		height: auto;
		min-height: 600px;

		.left-section {
			display: grid;
			grid-gap: 22px;
			grid-template-rows: auto auto 1fr auto;
			flex-direction: column;

			width: 100%;
			padding: 0 5%;
		}

		.right-section {
			display: flex;
			grid-gap: 32px;
			flex-direction: column;

			width: 100%;
			height: 100%;

			&__img-wrapper {
				width: 100%;
				height: 100%;
				padding: 0 18px;
			}
		}

		&__description,
		&__result {
			font: var(--font-body-default-medium);
		}

		&__result {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			width: auto;
			height: 100%;
			margin-left: auto;
			padding: 0 4%;
		}

		&__achievements {
			display: flex;
			grid-gap: 16px;
			justify-content: space-around;

			width: 100%;
			height: auto;

			.achievement {
				display: flex;
				grid-gap: 6px;
				flex-direction: column;

				width: auto;
				max-width: 210px;
				height: auto;
				padding: 12px;
				border-radius: 14px;

				box-shadow: var(--box-shadow-super);

				&__numbers {
					display: flex;
					justify-content: center;

					width: 100%;
					height: auto;

					font-family: Akt, serif;
					font-size: 46px;
					font-weight: 700;
					line-height: 50px;
					color: var(--color-green-ll);
				}

				&__description {
					display: flex;
					justify-content: center;
					width: auto;
					text-align: center;
				}
			}
		}

		&__img {
			width: 100%;
			height: 100%;
			border-radius: 14px;

			background-image: url('assets/imgs/AboutUs-img-1.jpg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}

		&__buttons {
			display: flex;
			grid-gap: 18px;

			width: 100%;
			height: auto;
			padding: 18px 0 42px;

			button {
				width: 100%;
				box-shadow: var(--box-shadow-super);
			}
		}
	}
</style>
