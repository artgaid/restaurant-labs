<template>
	<div class="header">
		<div class="header__running-line">
			Открыли 300 ресторанов в 7 странах • Подбор шефов и управляющих • 1200+ обученных сотрудников
			• Реферальная программа для партнёров
		</div>
		<div class="container header__menu-line">
			<SvgoLogoBlack class="logo" />
			<div class="menu">
				<div>Услуги</div>
				<div>Блог</div>
				<div>О нас</div>
				<div>Контакты</div>
				<div>Отзывы</div>
				<div>Поиск</div>
			</div>
			<div class="login">Регистрация/ войти</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.header {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;

		&__running-line {
			display: flex;
			align-items: center;
			justify-content: left;

			width: 100%;
			height: 40%;
			min-height: auto;
			padding: 4px 2px;

			font: var(--font-body-default-bold);
			color: var(--color-green-ll);

			background-color: var(--color-grey-dd);
		}

		&__menu-line {
			display: flex;
			grid-gap: 5%;
			align-items: center;

			width: 100%;
			height: 60%;
			min-height: auto;

			font: var(--font-body-default-medium);

			.logo {
				display: flex;
				flex-shrink: 0;
				width: auto;
				height: 60%;
			}

			.menu {
				display: grid;
				grid-gap: 4%;
				grid-template-columns: auto auto auto auto auto 1fr;
				width: 100%;
			}

			.login {
				display: flex;
				flex-shrink: 0;
			}
		}
	}
</style>
