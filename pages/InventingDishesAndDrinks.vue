<template>
	<div class="inventing-page">
		<BackButton />

		<MainServiceBlock
			:label="'Разработка блюд и напитков'"
			:description="inventingDescription"
			:grey-description="inventingGreyDescription"
			:img-url="'images/InventingDishesAndDrinks-img1.jpg'"
			:button-text="'Выбрать формат обучения'"
		/>
	</div>
</template>

<script setup lang="ts">
	import BackButton from '~/components/buttons/BackButton.vue';

	const inventingDescription =
		'Хорошее меню — это вкус, эмоции и цифры. Оно способно вдохновлять, удерживать и продавать. \n' +
		'Мы помогаем сделать так, чтобы каждое блюдо и напиток были\n' +
		'не только яркими, но и эффективными. Мы сотрудничаем с лучшими шефами и бар-экспертами на рынке.';
	const inventingGreyDescription =
		'Адаптируемся под вашу задачу: \n' +
		' — разрабатываем полное меню под ключ\n' +
		' — усиливаем конкретный блок: дровяная печь, завтраки, десерты, винная карта, коктейли\n' +
		' — делаем сезонные апдейты, локальные акценты и запуск новых позиций\n' +
		'Вы можете:\n' +
		' — привлечь конкретного эксперта или команду\n' +
		' — получить рецептуры, фудкост, технологические карты\n' +
		'и обучение персонала\n' +
		' — настроить производственный процесс под кухню и локацию\n' +
		'Собрали для вас тех, кто умеет делать вкусный, прибыльный и удобный в реализации продукт.';
</script>

<style scoped lang="scss">
	.inventing-page {
		display: flex;
		grid-gap: 22px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		width: 100%;
		height: 100%;
		padding: 22px 2%;

		font-weight: 500;
	}
</style>
