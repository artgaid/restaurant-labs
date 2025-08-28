<template>
	<button
		class="ui-button"
		:class="`ui-button_variant-${props.variant} ui-button_size-${props.size}`"
		data-testid="ui-button"
	>
		<span class="ui-button__text" data-testid="ui-button-content">
			<slot />
		</span>
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	interface Props {
		type?: 'button' | 'submit' | 'reset'; // html type of button
		variant?: 'square' | 'rounded'; // type of button
		size?: 'xl' | 'l' | 'm' | 's'; // size of button
		color?: 'green' | 'black' | 'white';
	}

	const props = withDefaults(defineProps<Props>(), {
		type: 'button',
		variant: 'square',
		size: 'l',
		color: 'green',
	});

	const btnBgColor = computed(() => {
		if (props.color === 'green') {
			return `var(--color-green-ll)`;
		} else if (props.color === 'white') {
			return `var(--color-white)`;
		}
		return `var(--color-grey-dd)`;
	});

	const btnBgColorHover = computed(() => {
		if (props.color === 'green') {
			return `var(--color-green)`;
		} else if (props.color === 'white') {
			return `var(--color-white)`;
		}
		return `var(--color-grey-d)`;
	});

	const btnBgColorDisabled = computed(() => `var(--color-grey-l)`);
	const btnBgColorActive = computed(() => {
		if (props.color === 'green') {
			return `var(--color-grey-dd)`;
		} else if (props.color === 'white') {
			return `var(--color-white)`;
		}
		return `var(--color-grey-dd)`;
	});

	const btnColor = computed(() => {
		if (props.color === 'green') {
			return `var(--color-grey-dd)`;
		} else if (props.color === 'white') {
			return `var(--color-white)`;
		}
		return `var(--color-white)`;
	});

	const btnColorActive = computed(() => {
		if (props.color === 'green') {
			return `var(--color-white)`;
		} else if (props.color === 'white') {
			return `var(--color-white)`;
		}
		return `var(--color-grey-dd)`;
	});

	const btnColorDisabled = computed(() => `var(--color-white)`);
</script>

<style scoped lang="scss">
	.ui-button {
		--btn-bg-color: v-bind(btnBgColor);
		--btn-color: v-bind(btnColor);
		--btn-bg-color-hover: v-bind(btnBgColorHover);
		--btn-bg-color-active: v-bind(btnBgColorActive);
		--btn-color-active: v-bind(btnColorActive);
		--btn-bg-color-disabled: v-bind(btnBgColorDisabled);
		--btn-color-disabled: v-bind(btnColorDisabled);

		cursor: pointer;

		display: flex;
		align-items: stretch;

		border: 1px solid transparent;

		font: var(--font-body-default-medium);
		color: var(--btn-color);

		background-color: var(--btn-bg-color);

		transition:
			color 0.2s ease-in-out,
			background-color 0.2s ease-in-out,
			border-color 0.2s ease-in-out;

		&:hover {
			background-color: var(--btn-bg-color-hover);
		}

		&:active {
			color: var(--btn-color-active);
			background-color: var(--btn-bg-color-active);
		}

		&[disabled] {
			cursor: not-allowed;
			color: var(--btn-color-disabled);
			background-color: var(--btn-bg-color-disabled);
		}

		&__text {
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: center;

			&:deep(svg) {
				fill: currentColor;
				stroke: currentColor;
			}
		}

		&_variant {
			&-square {
				border-radius: var(--br-14);
			}

			&-rounded {
				border-radius: 50px;
			}
		}

		&_size {
			&-xl {
				height: 52px;
				padding: 8px 12px;

				& > .h-button__text {
					grid-gap: 8px;
				}
			}
			&-l {
				height: 42px;
				padding: 8px 12px;
				& > .h-button__text {
					grid-gap: 8px;
				}
			}
			&-m {
				height: 32px;
				padding: 6px 12px;
				& > .h-button__text {
					grid-gap: 4px;
				}
			}
			&-s {
				height: 28px;
				padding: 3px 8px;
				& > .h-button__text {
					grid-gap: 4px;
				}
			}
		}
	}
</style>
