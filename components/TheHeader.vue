<template>
	<div class="header">
		<div class="header__running-line">
			Открыли 300 ресторанов в 7 странах • Подбор шефов и управляющих • 1200+ обученных сотрудников
			• Реферальная программа для партнёров
		</div>
		<div class="header__menu-line" />
		Header
	</div>
</template>

<style scoped lang="scss">
	.header {
		width: 100%;
		height: 150px;

		&__running-line {
			display: flex;
			align-items: center;
			justify-content: left;

			width: 100%;
			height: 30%;
			min-height: auto;
			padding: 4px 2px;

			font: var(--font-body-default-bold);
			color: var(--color-green-ll);

			background-color: var(--color-grey-dd);
		}

		&__menu-line {
			display: flex;
			width: 100%;
			height: 70%;
			min-height: auto;
		}
	}
</style>
