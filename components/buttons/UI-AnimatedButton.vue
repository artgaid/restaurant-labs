<template>
	<button
		class="ui-animated-button"
		:class="`ui-animated-button_variant-${props.variant} ui-animated-button_size-${props.size}`"
		data-testid="ui-animated-button"
	>
		<span class="ui-animated-button__text">
			<slot />
		</span>
		<span class="ui-animated-button__icon">
			<SvgoIconArrowRight />
		</span>
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	interface Props {
		variant?: 'shown' | 'hidden'; // type of button
		size?: 'xl' | 'l' | 'm' | 's'; // size of button
		color?: 'green' | 'black' | 'white';
	}

	const props = withDefaults(defineProps<Props>(), {
		variant: 'shown',
		size: 'l',
		color: 'white',
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
			return `var(--color-white)`;
		} else if (props.color === 'white') {
			return `var(--color-green-ll)`;
		}
		return `var(--color-green-ll)`;
	});

	const btnTextColor = computed(() => {
		if (props.color === 'green') {
			return `var(--color-grey-dd)`;
		} else if (props.color === 'white') {
			return `var(--color-grey-dd)`;
		}
		return `var(--color-white)`;
	});

	const btnIconBgColorHover = computed(() => {
		if (props.color === 'green') {
			return `var(--color-green-ll)`;
		} else if (props.color === 'white') {
			return `var(--color-white)`;
		}
		return `var(--color-white)`;
	});
</script>

<style lang="scss" scoped>
	.ui-animated-button {
		--btn-bg-color: v-bind(btnBgColor);
		--btn-bg-color-hover: v-bind(btnBgColorHover);
		--btn-text-color: v-bind(btnTextColor);
		--btn-icon-bg-color-hover: v-bind(btnIconBgColorHover);

		cursor: pointer;

		position: relative;

		overflow: hidden;
		display: flex;
		align-items: stretch;

		border-radius: 50px;

		box-shadow: var(--box-shadow-normal);

		transition: color 0.2s ease;

		&::after {
			content: '';

			position: absolute;
			z-index: 0;
			top: 0;
			left: 0;

			width: 0;
			height: 100%;

			background-color: var(--btn-bg-color-hover);

			transition: width 0.2s ease;
		}

		&:hover {
			color: var(--color-grey-dd);

			&::after {
				width: 100%;
			}

			.ui-animated-button__icon {
				background-color: var(--btn-icon-bg-color-hover);
			}
		}

		&__text {
			z-index: 1;

			display: flex;
			flex: 1;
			align-items: center;
			justify-content: center;

			font-weight: 500;
		}

		&__icon {
			z-index: 1;

			display: flex;
			align-items: center;
			justify-content: center;

			height: 100%;
			border-radius: 50px;

			background-color: var(--btn-bg-color-hover);

			transition: background-color 0.3s ease;

			svg {
				display: flex;
				height: 100%;
				margin-left: 2px;
			}
		}

		&_size {
			&-xl {
				height: 52px;
				padding: 4px;

				& > .ui-animated-button__icon {
					width: 44px;

					svg {
						width: 8px;
					}
				}
			}
			&-l {
				height: 42px;
				padding: 4px;

				& > .ui-animated-button__icon {
					width: 34px;

					svg {
						width: 8px;
					}
				}
			}
			&-m {
				height: 32px;
				padding: 3px;

				& > .ui-animated-button__icon {
					width: 24px;

					svg {
						width: 6px;
					}
				}
			}
			&-s {
				height: 28px;
				padding: 2px;

				& > .ui-animated-button__icon {
					width: 22px;

					svg {
						width: 6px;
					}
				}
			}
		}

		&_variant {
			&-shown {
				color: var(--btn-text-color);
				background-color: var(--btn-bg-color);
			}

			&-hidden {
				color: transparent;
				background-color: transparent;

				&::after {
					right: 0;
					left: auto;
				}
			}
		}
	}
</style>
