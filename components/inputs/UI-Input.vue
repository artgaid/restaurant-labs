<template>
	<div
		class="input"
		:class="[
			{
				disabled,
				input_focused: isFocused,
				input_filled: props.modelValue,
				input_error: props.textError || (props.modelValue && checkMinMaxNumber),
				'input_with-label': !!props.label,
			},
			`input_size-${props.size}`,
		]"
		data-testid="ui-input"
	>
		<div class="input__wrapper">
			<input
				:id="'text' + elementId"
				ref="refTextInput"
				class="input__text"
				data-testid="ui-input-field"
				autocomplete="off"
				:type="props.type"
				:value="props.modelValue"
				:disabled="props.disabled"
				placeholder=""
				:maxlength="props.maxLength ?? undefined"
				required
				@input="changeValue($event.target)"
				@keyup.enter="inputBlur($event.currentTarget)"
				@blur="inputBlur(null)"
				@focus="inputFocus($event.currentTarget)"
			/>
			<label
				v-if="props.label"
				:key="props.modelValue"
				class="input__label"
				:class="{ input__label_required: props.required }"
				data-testid="ui-input-label"
				:for="'text' + elementId"
			>
				{{ props.label }}
			</label>
			<button
				v-if="props.cleared && props.modelValue"
				class="input__btn-clear"
				data-testid="ui-input-clear-button"
				@click.prevent="onClickClearInput"
			>
				<IconClose />
			</button>
			<button
				v-else-if="props.searched"
				:disabled="props.disabled"
				class="input__btn-search"
				data-testid="ui-input-search-search-button"
				@click.prevent.stop="emit('update:modelValue', props.modelValue)"
			>
				<SvgoIconSearch />
			</button>
		</div>

		<transition name="fade" mode="out-in">
			<div v-if="props.textError" class="input__error" data-testid="ui-input-alert-error">
				{{ props.textError }}
			</div>

			<div
				v-else-if="
					checkMinMaxNumber && String(props.modelValue) && (props.maxNumber || props.minNumber)
				"
				class="input__error"
				data-testid="ui-input-alert-min-max-error"
			>
				{{ checkMinMaxNumber }}
			</div>

			<div v-else-if="props.textInfo" class="input__info" data-testid="ui-input-alert-info">
				{{ props.textInfo }}
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue';

	import IconClose from '@/assets/icons/IconClose.svg';

	interface PropsType {
		modelValue?: string | number; // текст ввода
		label?: string;
		size?: 'xl' | 'l' | 'm' | 's'; // size of input
		type?: 'number' | 'text' | 'email' | 'tel' | 'password' | 'hidden'; // тип назначения
		minNumber?: number | null;
		maxNumber?: number | null;
		maxLength?: number | null;
		textError?: string;
		textInfo?: string;
		cleared?: boolean;
		searched?: boolean;
		disabled?: boolean;
		required?: boolean;
	}

	const props = withDefaults(defineProps<PropsType>(), {
		modelValue: '',
		label: 'Text',
		size: 'l',
		type: 'text',
		cleared: false,
		minNumber: null,
		maxNumber: null,
		maxLength: null,
		textError: '',
		textInfo: '',
		disabled: false,
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', text: string | number): void;
		(e: 'blur' | 'focus' | 'clear'): void;
	}>();

	const elementId = -2;

	const isFocused = ref(false);

	const checkMaxLength = (input: string) => {
		if (props.maxLength && input.length > props.maxLength) {
			return input.slice(0, props.maxLength);
		}
		return input;
	};

	const checkMinMaxNumber = computed(() => {
		const number = Number(props.modelValue);

		if (props.maxNumber && number > props.maxNumber) {
			return 'Cлишком большое значение';
		} else if (props.minNumber && number < props.minNumber) {
			return 'Cлишком маленькое значение';
		}
		return '';
	});

	const changeValue = (target: EventTarget | null): void => {
		const element = target as HTMLInputElement | null;

		if (element) {
			element.value = checkMaxLength(element.value);
			emit('update:modelValue', element.value);
		}
	};

	const onClickClearInput = () => {
		emit('update:modelValue', '');
		emit('clear');
	};

	const inputBlur = (target: EventTarget | null) => {
		isFocused.value = false;

		if (target) {
			(target as HTMLInputElement).blur();
		} else {
			emit('blur');
		}
	};

	const inputFocus = (target: EventTarget | null) => {
		isFocused.value = true;

		if (target) (target as HTMLInputElement).focus();

		emit('focus');
	};

	const refTextInput = ref<HTMLInputElement | null>(null);
	defineExpose({
		focus: () => refTextInput.value?.focus(),
		blur: () => refTextInput.value?.blur(),
	});
</script>

<style scoped lang="scss">
	.input {
		/* to add error-messages */
		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;

		outline: none;

		&_size {
			&-xl {
				.input__wrapper {
					height: 52px;

					.input__label {
						top: 16px;
					}

					.input__btn-search,
					.input__btn-clear {
						min-width: 46px;
						max-width: 46px;
					}

					.input__btn-search {
						padding-right: 8px;

						svg {
							width: 26px;
							height: 26px;
						}
					}
				}
			}

			&-l {
				.input__wrapper {
					height: 42px;

					.input__label {
						top: 12px;
					}

					.input__btn-search,
					.input__btn-clear {
						min-width: 36px;
						max-width: 36px;
					}

					.input__btn-search {
						padding-right: 8px;

						svg {
							width: 20px;
							height: 20px;
						}
					}
				}
			}

			&-m {
				.input__wrapper {
					height: 32px;

					.input__label {
						top: 6px;
					}
					.input__btn-clear,
					.input__btn-search {
						min-width: 29px;
						max-width: 29px;
					}

					.input__btn-search {
						padding-right: 6px;

						svg {
							width: 16px;
							height: 16px;
						}
					}
				}
			}

			&-s {
				.input__wrapper {
					height: 28px;

					.input__label {
						top: 4px;
					}

					.input__btn-clear,
					.input__btn-search {
						min-width: 25px;
						max-width: 25px;
					}

					.input__btn-search {
						padding-right: 4px;
						svg {
							width: 14px;
							height: 14px;
						}
					}
				}
			}
		}

		&_focused,
		&_filled {
			&.input_with-label.input_size {
				&-xl {
					.input__text {
						padding-top: 12px;
					}

					.input__label {
						top: 2px;
					}
				}

				&-l {
					.input__text {
						padding-top: 12px;
					}
					.input__label {
						top: 2px;
					}
				}

				&-m {
					.input__text {
						padding-top: 10px;
					}
					.input__label {
						top: 0;
					}
				}

				&-s {
					.input__text {
						padding-top: 0;
					}
					.input__label {
						display: none;
					}
				}
			}

			&.input_with-label {
				font: var(--font-ultra-small);
			}
		}

		&_focused {
			&:not(.input_error) {
				.input__wrapper {
					border-color: var(--input-text-and-search-and-date-time-border-active);
				}
				.input__label {
					color: var(--input-text-and-search-and-date-time-label-active);
				}
			}
		}

		&_filled {
			&:not(.input_error) {
				.input__wrapper {
					border-color: var(--color-grey-dd);
				}
				.input__label {
					color: var(--color-grey-dd);
				}
			}
		}

		&_error {
			.input__wrapper {
				border-color: var(--critical-main);
			}
		}

		&__wrapper {
			/* to attach label */
			position: relative;

			display: flex;
			align-items: center;
			justify-content: flex-start;

			width: 100%;
			height: 100%;
			border: 1px solid;
			border-color: var(--input-text-and-search-and-date-time-border-default);
			border-radius: var(--br-14);
		}

		/* element with text, usually, the 'input' element */
		&__text {
			cursor: text;

			width: 100%;
			height: 100%;
			padding: 0 14px;
			border: none;

			font: var(--font-body-default);
			color: var(--input-text-and-search-and-date-time-text-filled-default);

			-webkit-appearance: none;

			transition: var(--transition-animation);
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

			.input_filled & {
				width: calc(100% - 8px - 2 * 36px); // left 8px + 36px*2 buttons width
			}

			&_required::after {
				content: '*';
				color: var(--critical-main);
			}
		}

		/* display textError */
		&__error {
			margin-top: 4px;
			font: var(--font-small-caption);
			color: var(--critical-main);
		}

		/* display textInfo */
		&__info {
			display: flex;
			align-items: center;
			justify-content: flex-start;

			margin-top: 4px;

			font: var(--font-small-caption);
			color: var(--dark-400);
		}

		&__btn-clear {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 100%;
			height: 100%;
			border: none;

			box-shadow: inset 1px 0 0 0 var(--input-text-and-search-and-date-time-border-divider);

			svg {
				width: 12px;
				height: 12px;
				fill: var(--color-grey-dd);
				transition: var(--transition-animation);
			}

			&:hover {
				svg {
					fill: var(--color-grey-d);
				}
			}
		}

		&__btn-search {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 100%;
			height: 100%;
			border: none;

			svg {
				fill: var(--color-grey-dd);
			}
		}

		&:hover:not(.disabled) {
			&:not(.input_error) {
				.input__wrapper {
					border-color: var(--input-text-and-search-and-date-time-border-hover);
				}
				.input__label {
					color: var(--input-text-and-search-and-date-time-label-hover);
				}
			}
		}
	}

	.disabled {
		&:not(.input_error) {
			.input__wrapper {
				border-color: var(--input-text-and-search-and-date-time-border-disabled-default);
			}
		}

		.input {
			&__wrapper {
				color: var(--input-text-and-search-and-date-time-text-disabled-filled);
				background-color: var(--input-text-and-search-and-date-time-bg-disabled-default);
			}

			&__text,
			&__btn-clear,
			&__btn-search,
			&__wrapper {
				cursor: not-allowed;
				color: var(--input-text-and-search-and-date-time-text-disabled-filled);

				svg {
					fill: var(--input-text-and-search-and-date-time-icon-disabled-filled);
				}
			}

			&__label {
				color: var(--input-text-and-search-and-date-time-label-disabled-default);
			}
		}
	}

	/* animation for the label movement */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		margin: 0;
		-webkit-appearance: none;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}

	.input__label {
		padding-right: 0;
	}
</style>
