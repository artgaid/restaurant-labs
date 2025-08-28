<template>
	<div class="referral-program">
		<div class="description">
			<div class="text-block-title">Реферальная программа</div>
			<div class="text text-up">
				Приглашайте — зарабатывайте.
				<br />
				<br />
				Делитесь, получайте бонусы и стройте бизнес вместе с нами.
			</div>
			<div class="text text-down">
				Вы можете получать вознаграждение за каждого клиента, который пришёл по вашей рекомендации.
				Участвуйте в нашей партнёрской системе — просто, выгодно, прозрачно.
				<br />
				<span class="text-small-caption">*Доступно только зарегистрированным пользователям</span>
				<br />
				<span class="text-small-caption">**Читать подробнее об условиях Реферальная программа</span>
			</div>
		</div>
		<div class="login-program">
			<UIButton>Войти в программу</UIButton>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIButton from '~/components/buttons/UI-Button.vue';
</script>

<style scoped lang="scss">
	.referral-program {
		display: flex;
		grid-gap: 24px;

		width: 100%;
		height: auto;
		min-height: 400px;
		padding: 20px 30px;
		border-radius: 14px;

		background-color: var(--color-grey-ll);
		box-shadow: var(--box-shadow-up);

		.description {
			display: flex;
			grid-gap: 15%;
			flex-direction: column;

			width: 60%;
			height: 100%;

			font: var(--font-body-default-medium);

			.text-down {
				margin-top: auto;
			}
		}

		.login-program {
			display: flex;
			align-items: flex-end;
			justify-content: center;

			width: 40%;
			height: 100%;
			padding: 30px;
			border-radius: 14px;

			background-image: url('assets/imgs/ReferralProgramBg.jpg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			box-shadow: var(--box-shadow-normal);

			button {
				width: 50%;
			}
		}
	}
</style>
