<template>
	<button class="gradient-bg user-button" @click="onClickUser">
		<SvgoIconUser class="user-icon" />
		Регистрация/ войти
	</button>
</template>

<script lang="ts" setup>
	const onClickUser = () => {
		console.log('onClickUser');
	};
</script>

<style lang="scss" scoped>
	.user-button {
		position: relative;
		z-index: 1;

		display: flex;
		grid-gap: 12px;
		align-items: center;
		justify-content: center;

		width: auto;
		height: 42px;
		padding: 0 21px;
		border: 1px solid var(--color-grey-dd);
		border-radius: var(--br-14);

		font: var(--font-body-default-medium);
		white-space: nowrap;

		transition: background 0.3s ease;

		&::after {
			pointer-events: none;
			content: '';

			position: absolute;
			z-index: -1;
			inset: 0;

			width: 100%;
			border-radius: var(--br-14);

			opacity: 0;
			background: var(--gradient-green-1);

			transition: opacity 0.3s ease-in-out;
		}

		&:hover {
			&::after {
				opacity: 1;
			}
		}
	}

	.user-icon {
		display: flex;
		width: 18px;
		height: 20px;
		fill: none;
	}
</style>
