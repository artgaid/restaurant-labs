<template>
	<div class="mgmt-admin-page">
		<BackButton />
		<div class="main-block">
			<div class="text-block-title">Менеджмент и управление</div>
			<div class="main-block__wrapper">
				<div class="main-block__content">
					<div class="main-block__text-1">
						Операционное управление, выручка, команда — без этого не работает ни один ресторан.
						<br />
						Менеджмент — это не про «быть на месте», а про выстроенные процессы,
						<br />
						чёткие показатели и уверенность в завтрашнем дне.
						<br />
						<br />
						На платформе собраны эксперты с реальным опытом управления — от известных ресторанов до
						федеральных сетей.
					</div>

					<div class="main-block__text-2">
						<span>
							<span class="text-black">Форматы взаимодействия:</span>
							<br />
							— очные и онлайн-сессии
							<br />
							— стратегические сессии и аудит текущей системы
							<br />
							— точечная консультация или долгосрочное сопровождение
						</span>

						<span>
							<span class="text-black">Подбираем специалистов под задачи:</span>
							<br />
							— внедрение системы управления
							<br />
							— антикризис и перезапуск
							<br />
							— рост финансовой эффективности
							<br />
							— построение команды и корпоративной культуры
							<br />
							— масштабирование и делегирование
						</span>

						<span class="text-black">
							Выбирайте нужного эксперта и стройте ресторан, в котором управлять — значит не тушить
							пожары, а развивать бизнес.
						</span>
					</div>
				</div>

				<div class="main-block__img">
					<UIAnimatedButton :color="'white'">Выбрать формат обучения</UIAnimatedButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import BackButton from '~/components/buttons/BackButton.vue';
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';
</script>

<style scoped lang="scss">
	.mgmt-admin-page {
		display: flex;
		grid-gap: 22px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		width: 100%;
		height: 100%;
		padding: 22px 2%;

		font-weight: 500;

		.main-block {
			display: flex;
			grid-gap: 24px;
			flex-direction: column;
			align-self: center;

			width: 100%;
			max-width: 1700px;
			height: 800px;

			.text-block-title {
				padding: 0 40px;
			}

			&__wrapper {
				display: grid;
				grid-gap: 3%;
				grid-template-columns: 1fr 0.6fr;

				width: 100%;
				height: 100%;
				max-height: 600px;
			}

			&__content {
				display: flex;
				grid-gap: 24px;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;

				width: 100%;
				height: 100%;

				font-size: 18px;
			}

			&__text-1 {
				padding: 0 40px;
				color: var(--color-grey-d);
			}

			&__text-2 {
				display: flex;
				grid-gap: 18px;
				flex-direction: column;

				width: 100%;
				height: max-content;
				padding: 20px 40px;
				border-radius: 14px;

				color: var(--color-grey-d);

				background-color: var(--color-grey-ll);
				box-shadow: var(--box-shadow-up);
			}

			&__img {
				display: flex;
				align-items: flex-end;
				justify-content: flex-end;

				width: 100%;
				height: 100%;
				padding: 20px;
				border-radius: 14px;

				background-image: url('assets/imgs/MgmtAndAdmin-img1.jpg');
				background-repeat: no-repeat;
				background-position: top;
				background-size: cover;
			}
		}
	}
</style>
