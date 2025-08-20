<template>
	<div class="footer">
		<div class="footer__wrapper">
			<div class="footer__menu-line">
				<SvgoIconLogoGreen class="logo" />
				<div class="input-search">
					<UIInput v-model="inputSearch" :size="'l'" :label="'Поиск'" searched />
				</div>
				<div class="menu">
					<NavigateButton :color="'white'">Услуги</NavigateButton>
					<NavigateButton :color="'white'">Блог</NavigateButton>
					<NavigateButton :color="'white'">О нас</NavigateButton>
					<NavigateButton :color="'white'">Контакты</NavigateButton>
					<NavigateButton :color="'white'">Отзывы</NavigateButton>
				</div>
			</div>
			<div class="footer__links">
				<button><SvgoIconWhatsapp /></button>
				<button><SvgoIconInst /></button>
				<button><SvgoIconTelegram /></button>
			</div>
			<div class="footer__contacts">
				<div class="our-contacts">
					<span>Свяжитесь с нами:</span>
					<span>hello@restaurantlabs.ru</span>
					<span>+7 (000) 000-11-11</span>
					<span>+7 (111) 111-00-00</span>
				</div>
				<div class="become-partner">
					<UIInput :label="'Email'" />
					<UIButton :size="'l'" :variant="'square'" :color="'green'">
						<span>Стать партнером</span>
					</UIButton>
				</div>
			</div>
		</div>
		<hr />
		<div class="footer__agreements">
			<span>© 2025 Restaurant Labs</span>
			<span>Пользовательское соглашение</span>
			<span>Политика конфиденциальности</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import NavigateButton from '~/components/buttons/NavigateButton.vue';
	import UIButton from '~/components/buttons/UI-Button.vue';
	import UIInput from '~/components/inputs/UI-Input.vue';

	const inputSearch = ref('');
</script>

<style lang="scss" scoped>
	.footer {
		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;
		padding: 48px 48px 0;
		border-radius: 14px 14px 0 0;

		color: var(--color-white);

		background-color: var(--color-grey-dd);

		&__wrapper {
			display: grid;
			grid-template-columns: 1fr 100px;
			grid-template-rows: max-content 1fr;
			align-content: center;
			align-items: start;
			justify-content: start;

			width: 100%;
			height: 100%;
		}

		&__menu-line {
			display: grid;
			grid-gap: 4%;
			grid-template-columns: auto 1fr auto;
			align-items: center;
			justify-content: flex-start;
			justify-items: end;

			width: 100%;
			height: auto;
			min-height: auto;

			font: var(--font-body-default-medium);

			.logo {
				display: flex;
				flex-shrink: 0;
				width: auto;
				height: 48px;
			}

			.menu {
				overflow: hidden;
				display: grid;
				grid-gap: 12px;
				grid-template-columns: repeat(5, max-content);
				justify-content: start;

				width: max-content;
			}

			.input-search {
				width: 100%;
				max-width: 400px;
				height: auto;
			}
		}

		&__contacts {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;

			width: 100%;
			height: 100%;
			padding-top: 36px;

			.our-contacts {
				display: flex;
				grid-gap: 8px;
				flex-direction: column;

				width: auto;
				height: auto;

				span:first-child {
					padding: 6px 0;
					font: var(--font-body-default-semibold);
					box-shadow: inset 0 -2px 0 0 var(--color-green-lll);
				}
			}

			.become-partner {
				display: flex;
				grid-gap: 8px;
				width: 440px;
				height: auto;

				span {
					width: 160px;
					white-space: nowrap;
				}
			}
		}

		&__links {
			display: flex;
			grid-column: 2/3;
			grid-gap: 55px;
			grid-row: 1/3;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;

			width: 100%;
			height: 100%;
			padding: 7px 0;

			button {
				display: flex;
				align-items: center;
				justify-content: center;

				width: max-content;
				height: auto;

				svg {
					width: 30px;
					height: 30px;
					fill: var(--color-white);
					transition: var(--transition-animation);
				}

				&:hover {
					svg {
						fill: var(--color-green-lll);
					}
				}
			}
		}

		&__agreements {
			display: flex;
			align-items: center;
			justify-content: space-between;

			width: 100%;
			height: auto;
			padding: 1% 12px;
		}
	}
</style>
