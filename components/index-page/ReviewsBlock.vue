<template>
	<div class="reviews">
		<div class="text-block-title">Что говорят о сотрудничестве с нами</div>
		<div class="reviews__tags">
			<div v-for="(tag, indx) in reviewTags" :key="indx" class="one-tag">
				{{ tag.label }}
			</div>
		</div>
		<div class="reviews__content">
			<OneReviewCard
				v-for="(review, index) in reviewList"
				:key="index"
				:city="review.city"
				:full-name="review.fullName"
				:description="review.description"
				:comment="review.comment"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import OneReviewCard from '~/components/common/OneReviewCard.vue';

	const reviewTags = [
		{
			code: 'About the launch of the restaurant',
			label: 'О запуске ресторана',
		},
		{
			code: 'About consulting and strategies',
			label: 'О консалтинге и стратегиях',
		},
		{
			code: 'On staff training',
			label: 'Об обучении персонала',
		},
		{
			code: 'On comprehensive work and support',
			label: 'О комплексной работе и сопровождении',
		},
		{
			code: 'On menu and kitchen development',
			label: 'О разработке меню и кухни',
		},
	];

	const reviewList = [
		{
			fullName: 'Дарья Шевелева',
			city: 'Минск',
			description: 'Сооснователь бургера «Толстый Сэнди»',
			comment:
				'Открывали в стритфуд-формате. Сами бы не справились — команда помогла настроить процессы и вывела на старт без хаоса. Очень крутой опыт, будем работать дальше!',
		},
		{
			fullName: 'Максим Лепешкин',
			city: 'Новосибирск',
			description: 'Владелец кофейни «Черный Зов»',
			comment:
				'Прошли с Restaurant Labs весь путь за 3 месяца: от концепции до первой чашки кофе. Всё чётко, с системным подходом. Помогли с арендой, оборудованием, подрядчиками. В итоге — мы в плюсе с первого месяца.',
		},
		{
			fullName: 'Анна Гаврилюк',
			city: 'Москва',
			description: 'Основатель ресторана «Соль и Перец»',
			comment:
				'Мы пришли с идеей, а вышли с готовым рестораном. Нам помогли с концепцией, поставщиками, кухней, интерьером — абсолютно на всех этапах. Такое ощущение, что они открывали ресторан для себя. Спасибо за партнёрство!',
		},
		{
			fullName: 'Михаил Терехов',
			city: 'Екатеринбург',
			description: 'Ресторатор «Глинтвейн & Джаз»',
			comment:
				'Мы пришли с идеей, а вышли с готовым рестораном. Не знаю, как мы бы запустились без команды Restaurant Labs. Нам помогли с концепцией, поставщиками, технологом, подбором персонала и даже оформлением интерьера. Это не просто консалтинг, а полноценный партнер в запуске.',
		},
		{
			fullName: 'Михаил Терехов',
			city: 'Екатеринбург',
			description: 'Ресторатор «Глинтвейн & Джаз»',
			comment:
				'Мы пришли с идеей, а вышли с готовым рестораном. Не знаю, как мы бы запустились без команды Restaurant Labs. Нам помогли с концепцией, поставщиками, технологом, подбором персонала и даже оформлением интерьера. Это не просто консалтинг, а полноценный партнер в запуске.',
		},
	];
</script>

<style scoped lang="scss">
	.reviews {
		display: flex;
		grid-gap: 12px;
		flex-direction: column;

		width: 100%;
		height: auto;

		&__tags {
			display: flex;
			grid-gap: 10px;
			width: 100%;
			height: auto;

			.one-tag {
				display: flex;
				align-content: center;
				justify-content: center;

				width: max-content;
				height: max-content;
				padding: 10px 14px;
				border-radius: 40px;

				background-color: var(--color-grey-225);
			}
		}

		&__content {
			overflow-x: auto; /* горизонтальный скролл */
			overflow-y: hidden;
			display: flex;
			flex-wrap: nowrap; /* элементы в одну строку */
			gap: 14px; /* вместо grid-gap */

			width: 100%;
			padding: 12px 0;

			-webkit-overflow-scrolling: touch; /* плавный скролл на iOS */
		}
	}
</style>
