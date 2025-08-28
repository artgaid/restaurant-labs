<template>
	<div class="container how-we-work-block">
		<div class="how-we-work-block__wrapper">
			<div class="how-we-work-block__content">
				<div class="how-we-work-block__title text-green">Как мы работаем</div>
				<div class="how-we-work-block__description">
					Мы помогаем заведениям работать по стандартам и держать уровень.
					<br />
					Проверяем, улучшаем, внедряем. Вы можете выбрать нужную услугу — и получить
					<br />
					честную, экспертную обратную связь.
				</div>
				<UIAnimatedButton>Получить консультацию</UIAnimatedButton>
			</div>
			<div class="how-we-work-block__steps">
				<OneStepLine :label="'Оставляете заявку'" :step="1" selected />
				<OneStepLine :label="'Проводим аудит'" :step="2" />
				<OneStepLine :label="'Формируем команду'" :step="3" />
				<OneStepLine :label="'Запускаем проект'" :step="4" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';
	import OneStepLine from '~/components/common/OneStepLine.vue';
</script>

<style scoped lang="scss">
	.how-we-work-block {
		width: 100%;
		height: auto;

		// min-height: 700px;

		&__wrapper {
			display: flex;
			grid-gap: 5%;

			width: 100%;
			height: 100%;
			padding: 44px 36px;
			border-radius: 14px;

			color: var(--color-white);

			background-color: var(--color-grey-dd);
		}

		&__content {
			display: flex;
			grid-gap: 38px;
			flex-direction: column;

			width: 40%;
			height: auto;

			button {
				width: 60%;
				margin-top: auto;
			}
		}

		&__title {
			width: 100%;
			font-size: 54px;
			font-weight: 700;
			line-height: 56px;
		}

		&__description {
			width: 100%;
			font: var(--font-body-default-medium);
		}

		&__steps {
			display: flex;
			grid-gap: 20px;
			flex-direction: column;
			justify-content: space-between;

			width: 60%;
		}
	}
</style>
