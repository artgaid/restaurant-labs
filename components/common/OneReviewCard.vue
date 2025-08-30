<script setup lang="ts">
	const props = defineProps<{
		fullName: string;
		city: string;
		description: string;
		comment: string;
		photo?: string;
	}>();
</script>

<template>
	<div class="one-review">
		<div class="one-review__photo">photo</div>
		<div class="one-review__info">{{ props.fullName }}</div>
		<div class="one-review__message">{{ props.comment }}</div>
	</div>
</template>

<style scoped lang="scss">
	.one-review {
		width: max-content;
		height: 100%;

		padding: 14px 22px;

		&__photo {
			width: 22px;
			height: 22px;

			border-radius: 50%;
		}

		&__info {
			width: 100%;
			height: max-content;
		}
	}
</style>
