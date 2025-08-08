<template>
	<div class="header">
		<div class="header__running-line">
			Открыли 300 ресторанов в 7 странах • Подбор шефов и управляющих • 1200+ обученных сотрудников
			• Реферальная программа для партнёров
		</div>
		<div class="container header__menu-line">
			<SvgoIconLogoBlack class="logo" />
			<div class="menu">
				<NavigateButton :color="'grey'">Услуги</NavigateButton>
				<NavigateButton :color="'grey'">Блог</NavigateButton>
				<NavigateButton :color="'grey'">О нас</NavigateButton>
				<NavigateButton :color="'grey'">Контакты</NavigateButton>
				<NavigateButton :color="'grey'">Отзывы</NavigateButton>
			</div>
			<div class="header__search">
				<UIInput v-model="inputSearch" :size="'l'" :label="'Поиск'" searched />
			</div>

			<UserButton />
		</div>
	</div>
</template>

<script setup lang="ts">
	import NavigateButton from '~/components/buttons/NavigateButton.vue';
	import UserButton from '~/components/buttons/UserButton.vue';
	import UIInput from '~/components/inputs/UI-Input.vue';

	const inputSearch = ref('');
</script>

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
			grid-gap: 2%;
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
				grid-gap: 2%;
				grid-template-columns: repeat(5, max-content);
				justify-content: start;

				width: 100%;
				padding-left: 2%;
			}

			.login {
				display: flex;
				flex-shrink: 0;
			}
		}

		&__search {
			width: 50%;
			height: auto;
		}
	}
</style>
