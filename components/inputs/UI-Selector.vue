<template>
	<div
		class="ui-selector"
		:class="[
			{
				disabled,
				'ui-selector_focused': isFocused,
				'ui-selector_filled': props.modelValue,
				'ui-selector_error': props.textError,
				'ui-selector_with-label': !!props.label,
			},
			`ui-selector_size-${props.size}`,
		]"
	>
		<div class="ui-selector__wrapper" @click="openList">
			<div v-if="props.label" class="ui-selector__label">
				{{ props.label }}
			</div>
			<div class="ui-selector__text">
				{{ props.modelValue?.label ?? '' }}
			</div>

			<button
				class="btn-chevron"
				:class="{ open: isOpenList }"
				data-testid="ui-selector-chevron-button"
				type="button"
				tabindex="-1"
			>
				<SvgoIconChevron />
			</button>
		</div>
		<div class="ui-selector__list">
			<transition name="slide" mode="out-in">
				<UISelectorList
					v-show="isOpenList"
					:model-value="props.modelValue"
					:list="props.list"
					@update:model-value="selectItem"
				/>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	import UISelectorList from '~/components/inputs/UI-SelectorList.vue';

	const props = defineProps<{
		modelValue: Record<string, string> | null;
		list: Record<string, string>[];
		label: string;
		size?: 'xl' | 'l' | 'm' | 's';
		disabled?: boolean;
		required?: boolean;
		textError?: string;
	}>();

	const emit = defineEmits<{
		(e: 'update:modelValue', value: Record<string, string> | null): void;
	}>();

	const isFocused = ref(false);
	const isOpenList = ref(false);

	const openList = () => {
		isOpenList.value = !isOpenList.value;
		isFocused.value = !isFocused.value;
	};

	const selectItem = (item: Record<string, string> | null) => {
		emit('update:modelValue', item);
		isOpenList.value = false;
	};
</script>

<style scoped lang="scss">
	.ui-selector {
		position: relative;

		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;

		outline: none;

		&_size {
			&-xl {
				.ui-selector__wrapper {
					height: 52px;

					.ui-selector__label {
						top: 16px;
					}

					.ui-selector__btn-search,
					.ui-selector__btn-clear {
						min-width: 46px;
						max-width: 46px;
					}

					.ui-selector__btn-search {
						padding-right: 8px;

						svg {
							width: 26px;
							height: 26px;
						}
					}
				}

				.ui-selector__list {
					top: 54px;
				}
			}

			&-l {
				.ui-selector__wrapper {
					height: 42px;

					.ui-selector__label {
						top: 10px;
					}

					.ui-selector__btn-search,
					.ui-selector__btn-clear {
						min-width: 36px;
						max-width: 36px;
					}

					.ui-selector__btn-search {
						padding-right: 8px;

						svg {
							width: 20px;
							height: 20px;
						}
					}
				}

				.ui-selector__list {
					top: 44px;
				}
			}

			&-m {
				.ui-selector__wrapper {
					height: 32px;

					.ui-selector__label {
						top: 6px;
					}

					.ui-selector__btn-clear,
					.ui-selector__btn-search {
						min-width: 29px;
						max-width: 29px;
					}

					.ui-selector__btn-search {
						padding-right: 6px;

						svg {
							width: 16px;
							height: 16px;
						}
					}
				}

				.ui-selector__list {
					top: 34px;
				}
			}

			&-s {
				.ui-selector__wrapper {
					height: 28px;

					.ui-selector__label {
						top: 4px;
					}

					.ui-selector__btn-clear,
					.ui-selector__btn-search {
						min-width: 25px;
						max-width: 25px;
					}

					.ui-selector__btn-search {
						padding-right: 4px;
						svg {
							width: 14px;
							height: 14px;
						}
					}
				}

				.ui-selector__list {
					top: 30px;
				}
			}
		}

		&_focused,
		&_filled {
			&.ui-selector_with-label.ui-selector_size {
				&-xl {
					.ui-selector__text {
						padding-top: 12px;
					}

					.ui-selector__label {
						top: 2px;
					}
				}

				&-l {
					.ui-selector__text {
						padding-top: 16px;
					}
					.ui-selector__label {
						top: 2px;
					}
				}

				&-m {
					.ui-selector__text {
						padding-top: 10px;
					}
					.ui-selector__label {
						top: 0;
					}
				}

				&-s {
					.ui-selector__text {
						padding-top: 0;
					}
					.ui-selector__label {
						display: none;
					}
				}
			}

			&.ui-selector_with-label {
				font: var(--font-ultra-small);
			}
		}

		&_focused {
			&:not(.ui-selector_error) {
				.ui-selector__wrapper {
					border-color: currentColor;
				}
				.ui-selector__label {
					color: currentColor;
					opacity: 0.8;
				}
			}
		}

		&_filled {
			&:not(.ui-selector_error) {
				.ui-selector__wrapper {
					border-color: currentColor;
				}
				.ui-selector__label {
					color: currentColor;
					opacity: 0.8;
				}
			}
		}

		&__wrapper {
			cursor: pointer;
			user-select: none;
			/* to attach label */
			position: relative;

			display: flex;
			align-items: center;
			justify-content: flex-start;

			width: 100%;
			height: 100%;
			border: 1.5px solid;
			border-color: var(--input-text-and-search-and-date-time-border-default);
			border-radius: var(--br-14);
		}

		&__label {
			pointer-events: none;

			position: absolute;
			left: 14px;

			overflow: hidden;

			width: calc(100% - 8px - 36px); // left 8px + 36px button width
			padding-right: 16px;

			color: var(--input-text-and-search-and-date-time-label-default);
			text-overflow: ellipsis;
			white-space: nowrap;

			background-color: transparent;

			transition: var(--transition-animation);

			.ui-selector_filled & {
				width: calc(100% - 8px - 2 * 36px); // left 8px + 36px*2 buttons width
			}

			&_required::after {
				content: '*';
				color: var(--critical-main);
			}
		}

		&__text {
			width: 100%;
			height: 100%;
			padding: 0 14px;
			border: none;

			font: var(--font-body-default);
			color: var(--input-text-and-search-and-date-time-text-filled-default);

			-webkit-appearance: none;

			transition: var(--transition-animation);
		}

		&__list {
			position: absolute;
			left: 0;

			overflow: hidden;

			width: 100%;
			height: max-content;
			border-radius: 14px;
		}

		.btn-chevron {
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;

			width: 100%;
			max-width: 56px;
			height: 100%;

			.disabled & {
				cursor: not-allowed;
			}

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
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.5s ease;
	}

	.slide-enter-from,
	.slide-leave-to {
		transform: translateY(-100%);
	}
</style>
