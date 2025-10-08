<template>
	<div class="our-services">
		<div class="text-block-title">{{ props.title }}</div>
		<div class="our-services__description">{{ props.description }}</div>
		<div class="our-services__block-wrapper">
			<div
				v-for="block in props.data"
				:key="block.id"
				class="our-services__one-block"
				:class="{
					'color-black': ['1', '4', '7', '10'].includes(block.id),
					'color-grey': ['3', '6', '9'].includes(block.id),
				}"
			>
				<span class="span-1">{{ block.name }}</span>
				<span class="span-2">{{ block.description }}</span>

				<UIAnimatedButton
					class="our-services__one-block__btn"
					:variant="'hidden'"
					:color="'white'"
					:size="'l'"
				>
					Читать подробнее
				</UIAnimatedButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import UIAnimatedButton from '~/components/buttons/UI-AnimatedButton.vue';
	import type { ServiceDataType } from '~/types/OurServicesType';

	const props = defineProps<{
		title: string;
		description: string;
		data: ServiceDataType[];
	}>();
</script>

<style scoped lang="scss">
	.our-services {
		display: flex;
		grid-gap: 8px;
		flex-direction: column;

		width: 100%;
		height: auto;

		&__description {
			width: 100%;
			margin-bottom: 22px;
			font: var(--font-body-default-medium);
			color: var(--color-grey-111);
		}

		&__block-wrapper {
			display: flex;
			grid-gap: 12px;
			flex-wrap: wrap;
			justify-content: flex-start;

			width: 100%;
			height: auto;
		}

		&__one-block {
			display: flex;
			grid-gap: 10px;
			flex-direction: column;

			width: 250px;
			height: 220px;
			padding: 18px 10px 10px;
			border-radius: 14px;

			box-shadow: var(--box-shadow-up);

			&__btn {
				width: 100%;
				max-width: 250px;
				margin-top: auto;
				margin-left: auto;
			}

			.span-1 {
				font: var(--font-body-default-semibold);
			}

			.span-2 {
				font: var(--font-small-caption);
				color: var(--color-grey-53);
			}

			&.color-black {
				background-color: var(--color-grey-53);

				.span-1 {
					color: var(--color-white);
				}

				.span-2 {
					color: var(--color-grey-240);
				}
			}

			&.color-grey {
				background-color: var(--color-grey-225);
			}
		}
	}
</style>
