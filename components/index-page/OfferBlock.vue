<template>
	<div class="offer-block">
		<div class="text-block-title">Что мы можем предложить</div>
		<div class="offer-block__wrapper">
			<div
				v-for="(offer, index) in offerData"
				:key="index"
				class="sub-block"
				:class="{
					'grid-3-3 bg-img-1': offer.id === BIG_SUBBLOCK,
					'grid-2-3': LONG_SUBBLOCK.includes(offer.id),
					'text-green': GREEN_TEXT.includes(offer.id),
					'text-white': WHITE_TEXT.includes(offer.id),
					'bg-img-2': offer.id === 9,
					'bg-grey-dd': BG_DARK.includes(offer.id),
					'bg-gradient': offer.id === 10,
					'bg-radian-gradient-1': offer.id === 7,
					'bg-radian-gradient-2': offer.id === 8,
				}"
			>
				<div class="sub-block__label">{{ offer.label }}</div>
				<div class="sub-block__description">{{ offer.description }}</div>
				<UIAnimatedButton
					class="sub-block__button"
					:variant="'hidden'"
					:color="'green'"
					:size="'l'"
				>
					Читать подробнее
				</UIAnimatedButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';

	const BIG_SUBBLOCK = 1;
	const LONG_SUBBLOCK = [2, 9];
	const GREEN_TEXT = [1, 2];
	const WHITE_TEXT = [6, 9];
	const BG_DARK = [2, 6];

	const offerData = [
		{
			id: 1,
			label: 'Открытие кафе,\nресторанов\nи баров',
			description:
				'Собрали всё для запуска: \n' +
				'• чек-листы\n' +
				'• специалисты\n' +
				'• поставщики\n' +
				'• подрядчики',
			link: '',
		},
		{
			id: 2,
			label: 'Разработка блюд и напитков ',
			description: 'Бар, кухня, десерты — создаём вкус\nи выручку через экспертов',
			link: '',
		},
		{
			id: 3,
			label: 'Рекрутинг',
			description: 'Закроем любую позицию',
			link: '',
		},
		{
			id: 4,
			label: 'Сервис и качество',
			description: 'Выстраиваем фундамент сервиса: стандарты, аудиты, контроль.',
			link: '',
		},
		{
			id: 5,
			label: 'Стать партнером',
			description: 'Присоединяйся\n и зарабатывай',
			link: '',
		},
		{
			id: 6,
			label: 'Ивенты',
			description: 'Лучшие ивент-команды в одном месте',
			link: '',
		},
		{
			id: 7,
			label: 'Реферальная программа',
			description: 'Рекомендуй нас — получай деньги',
			link: '',
		},
		{
			id: 8,
			label: 'Менеджмент и управление',
			description: '• Операционка\n• Менеджмент\n• Антикризис',
			link: '',
		},
		{
			id: 9,
			label: 'Обучение сотрудников',
			description: 'Онлайн/ оффлайн/ курсы\n(под любые задачи)',
			link: '',
		},
		{
			id: 10,
			label: 'Маркетинг и PR',
			description: 'Лучшие команды индустрии',
			link: '',
		},
	];
</script>

<style scoped lang="scss">
	.offer-block {
		display: flex;
		grid-gap: 20px;
		flex-direction: column;

		width: 100%;
		height: auto;

		white-space: pre-wrap;

		&__wrapper {
			display: grid;
			grid-gap: 12px;
			grid-template-columns: repeat(5, minmax(215px, 1fr));
			grid-template-rows: repeat(3, minmax(180px, 1fr));

			width: 100%;
			height: auto;
		}
	}

	.sub-block {
		display: flex;
		grid-gap: 22px;
		flex-direction: column;

		width: auto;
		height: auto;
		padding: 22px 18px 18px;
		border-radius: 14px;

		background-color: var(--color-grey-l);

		transition: box-shadow 0.2s ease;

		&__label {
			width: 100%;
			height: auto;

			font-size: 28px;
			font-weight: 700;
			line-height: 30px;
		}

		&__description {
			width: 100%;
			height: auto;

			font-size: 16px;
			font-weight: 400;
			line-height: 22px;
		}

		&__button {
			width: 100%;
			max-width: 250px;
			margin-top: auto;
			margin-left: auto;
		}

		&:hover {
			box-shadow: var(--box-shadow-up);
		}

		&.grid-3-3 {
			grid-column: 1/3;
			grid-row: 1/3;
		}

		&.grid-2-3 {
			grid-column: 3/5;
		}

		&.bg-gradient {
			background: conic-gradient(
				from 200deg at 68.27% 50.18%,
				#a1fdb0 35.56%,
				#89edb6 61.55%,
				#82cca4 100%
			);
		}

		&.bg-img-1 {
			background:
				linear-gradient(rgb(0, 0, 0, 0.65), rgb(0, 0, 0, 0.65)),
				url('assets/imgs/offer-img-1.jpg') lightgray 0 -181.21px / 100% 160.539% no-repeat;
		}

		&.bg-img-2 {
			background:
				linear-gradient(rgb(0, 0, 0, 0.65), rgb(0, 0, 0, 0.65)),
				url('assets/imgs/offer-img-2.jpg') lightgray 0 -181.21px / 100% 160.539% no-repeat;
			background-size: cover;
		}

		&.bg-grey-dd {
			background-color: var(--color-grey-dd);
		}

		&.bg-radian-gradient-1 {
			background: radial-gradient(93.29% 82.45% at 96.28% 100%, #8cedb8 0%, #e1e1e1 100%);
		}

		&.bg-radian-gradient-2 {
			background: radial-gradient(92.92% 86.77% at 2.79% 97.14%, #89edb6 0%, #e5e5e5 100%);
		}
	}
</style>
