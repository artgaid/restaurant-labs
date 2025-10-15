<template>
	<div class="header">
		<RunningLine />
		<div class="container header__menu-line">
			<NuxtLink class="logo" to="/">
				<SvgoIconLogoBlack />
			</NuxtLink>

			<div class="menu">
				<NavigateMenu :label="'Услуги'" :list="navList" />

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
	import NavigateMenu from '~/components/common/NavigateMenu.vue';
	import UIInput from '~/components/inputs/UI-Input.vue';
	import RunningLine from '~/components/RunningLine.vue';

	const inputSearch = ref('');

	const navList = [
		{
			name: 'Менеджмент и управление',
			url: '/MgmtAndAdmin',
		},
		{
			name: 'Разработка блюд и напитков',
			url: '/InventingDishesAndDrinks',
		},
		{
			name: 'Обучение сотрудников',
			url: '/',
		},
	];
</script>

<style scoped lang="scss">
	.header {
		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;

		background-color: var(--color-white);

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
