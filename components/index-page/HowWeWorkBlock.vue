<template>
	<div class="how-we-work-block">
		<div>
			<div class="how-we-work-block__title">Как мы работаем</div>
			<div class="how-we-work-block__description">
				Мы помогаем заведениям работать по стандартам и держать уровень. Проверяем, улучшаем,
				внедряем. Вы можете выбрать нужную услугу — и получить честную, экспертную обратную связь.
			</div>
			<UIAnimatedButton>Получить консультацию</UIAnimatedButton>
		</div>
		<div class="how-we-work-block__steps">
			<div class="step step-1">Оставляете заявку</div>
			<div class="step step-2">Проводим аудит</div>
			<div class="step step-3">Формируем команду</div>
			<div class="step step-4">Запускаем проект</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';
</script>

<style scoped lang="scss">
	.how-we-work-block {
		width: 100%;
		height: auto;
	}
</style>
