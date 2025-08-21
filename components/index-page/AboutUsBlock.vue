<template>
	<div class="about-us-block">
		<div class="left-section">
			<div class="about-us-block__title">О нас</div>
			<div class="about-us-block__description">
				Restaurant Labs объединяет всё самое важное для управления рестораном на одной платформе.
				собрали готовые решения — от чек-листов и инструкций до учебных курсов и IT‑сервисов — чтобы
				вы могли сосредоточиться на том, что любите: создавать атмосферу и вкусную еду. С нами вести
				ресторанный бизнес становится проще: мы снимаем лишнее бремя с ваших плеч и помогаем
				организовать работу команды на высшем уровне.
			</div>
			<div class="about-us-block__result">
				Если вы чувствуете так же — Добро пожаловать в RLabs.
			</div>
			<div class="about-us-block__achievements">
				<div v-for="(ach, index) in achievementData" :key="index" class="achievement-subblock">
					<div class="achievement-subblock__numbers">{{ ach.numbers }}</div>
					<div class="achievement-subblock__description">{{ ach.description }}</div>
				</div>
			</div>
		</div>
		<div class="right-section">
			<div class="about-us-block__img"></div>
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
		display: flex;
		grid-gap: 20px;
		width: 100%;
		height: auto;
	}
</style>
