<template>
	<div class="nav-menu">
		<NavigateButton
			class="nav-menu__btn"
			:class="{ open: isOpenList }"
			:color="'grey'"
			@click="openMenu"
		>
			{{ props.label }}
			<SvgoIconChevron />
		</NavigateButton>

		<div v-if="props.list && props.list.length" class="nav-menu__wrapper">
			<transition name="slide" mode="out-in">
				<div v-show="isOpenList" class="nav-menu__list">
					<NuxtLink
						v-for="(link, index) in props.list"
						:key="index"
						class="nav-menu__item"
						:to="link.url"
						@click="openMenu"
					>
						{{ link.name }}
					</NuxtLink>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { RouteLocationRaw } from '#vue-router';
	import NavigateButton from '~/components/buttons/NavigateButton.vue';

	const props = defineProps<{
		label: string;
		list: { name: string; url: RouteLocationRaw }[];
	}>();

	const isOpenList = ref(false);

	const openMenu = () => {
		isOpenList.value = !isOpenList.value;
	};
</script>

<style scoped lang="scss">
	.nav-menu {
		position: relative;

		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;

		&__btn {
			display: flex;
			grid-gap: 8px;

			svg {
				transform: rotateX(180deg);

				display: flex;
				align-items: center;
				justify-content: center;

				width: 18px;
				height: 11px;
				margin-top: 2px;

				fill: var(--select-simple-and-multi-icon-default);

				transition: all 200ms linear;
			}

			&.open svg {
				transform: rotateX(0);
				margin-top: 0;
			}
		}

		&__wrapper {
			position: absolute;
			top: 34px;
			left: 0;

			overflow: hidden;

			width: max-content;
			height: max-content;
			border-radius: 14px;
		}

		&__list {
			display: flex;
			flex-direction: column;

			width: max-content;
			height: max-content;
			padding: 6px;
			border-radius: 14px;

			background-color: var(--color-grey-225);
		}

		&__item {
			cursor: pointer;

			display: flex;
			align-items: center;
			justify-content: flex-start;

			width: 100%;
			height: auto;
			padding: 6px 10px;
			border-radius: 10px;

			font: var(--font-body-default-medium);
			color: var(--color-grey-111);

			&:hover {
				color: var(--color-green-137);
				background-color: var(--color-grey-111);
			}
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.2s ease;
	}

	.slide-enter-from,
	.slide-leave-to {
		transform: translateY(-100%);
	}
</style>
