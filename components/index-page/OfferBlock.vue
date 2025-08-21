<template>
	<div class="offer-block">
		<div class="offer-block__title">Что мы можем предложить</div>
		<div class="offer-block__wrapper">
			<div v-for="(offer, index) in offerData" :key="index">
				<div>{{ offer.label }}</div>
				<div>{{ offer.description }}</div>
				<UIAnimatedButton :variant="'hidden'">Читать подробнее</UIAnimatedButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';

	const offerData = [
		{
			id: 1,
			label: 'Открытие кафе,\n ресторанов\n и баров',
			description:
				'Собрали всё для запуска: \n' +
				'чек-листы\n' +
				'специалисты\n' +
				'поставщики\n' +
				'подрядчики',
			link: '',
		},
		{
			id: 2,
			label: 'Разработка блюд и напитков ',
			description: 'Бар, кухня, десерты — создаём вкус и выручку через экспертов',
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
			description: 'Операционка Менеджмент Антикризис',
			link: '',
		},
		{
			id: 9,
			label: 'Обучение сотрудников',
			description: 'Онлайн/ оффлайн/ курсы (под любые задачи)',
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
		width: 100%;
		height: auto;
	}
</style>
