<template>
	<div class="container main-block">
		<div class="main-block__content">
			<div class="main-block__send-request">
				<div>
					<span>Есть идея?</span>
					<span>Ресторан в кризисе?</span>
					<span>Ищете команду для запуска?</span>
				</div>

				<div>Мы — решение.</div>

				<UiAnimatedButton :variant="'shown'" :color="'white'" :size="'l'">
					Оставить заявку
				</UiAnimatedButton>
			</div>
			<div class="main-block__logo">
				<div class="logo-text">
					<SvgoIconLogoText />
				</div>
				<div class="slogan">
					<span>Всё для запуска</span>
					<span>и развития ресторанного бизнеса</span>
				</div>
			</div>
		</div>
		<div class="main-block__content"></div>
	</div>
</template>

<script setup lang="ts">
	import UiAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';
</script>

<style scoped lang="scss">
	.main-block {
		display: flex;
		grid-gap: 8px;
		align-items: flex-end;

		width: 100%;
		max-width: 1700px;
		height: 100%;
		min-height: 800px;
		border-radius: 40px;

		background-image: url('assets/imgs/Intersect.jpg');
		background-repeat: no-repeat;
		background-position: bottom;
		background-size: cover;

		&__content {
			display: flex;
			grid-gap: 40px;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-end;

			width: 100%;
			height: 100%;
		}

		&__send-request {
			display: flex;
			grid-gap: 18px;
			flex-direction: column;

			padding-bottom: 18px;

			font-size: 16px;
			font-weight: 500;
			color: var(--color-white);

			div {
				display: flex;
				flex-direction: column;
			}
		}

		&__logo {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			width: 100%;
			height: 30%;
			padding: 12px 8px 12px 0;

			.logo-text {
				width: 100%;
				height: auto;
			}

			.slogan {
				display: flex;
				flex-direction: column;

				width: 100%;

				font-size: 32px;
				font-weight: 500;
			}
		}
	}
</style>
