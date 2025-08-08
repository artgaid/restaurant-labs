<template>
	<button class="nav-button" :class="props.color">
		<slot />
	</button>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		color: 'grey' | 'green' | 'white';
	}>();
</script>

<style scoped lang="scss">
	.nav-button {
		display: flex;
		align-items: center;
		justify-content: center;

		width: auto;
		height: 32px;
		padding: 0 23px;
		border: 1px solid transparent;
		border-radius: var(--br-14);

		font: var(--font-body-default-medium);

		transition: var(--transition-animation);

		&.grey {
			&:hover {
				background-color: var(--color-grey-l);
			}
		}

		&.green {
			border-color: var(--color-green-ll);

			&:hover {
				background-color: var(--color-green-ll);
			}
		}

		&.white {
			color: var(--color-white);

			&:hover {
				background-color: var(--color-grey-d);
			}
		}
	}
</style>
